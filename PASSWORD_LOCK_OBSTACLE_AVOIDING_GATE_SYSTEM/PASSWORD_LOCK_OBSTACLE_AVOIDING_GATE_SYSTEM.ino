/*
|| @Password Lock Obstacle Avoiding Gate System
|| @author Sinethemba Lusawana
|| @contact lusawanasinethemba@gmail.com
||
|| @description
|| | A gate that opens only when the correct password is entered.
*/

#include <Keypad.h>
#include <Servo.h>
// include the library code:
// include the library code:
#include <LiquidCrystal.h>
#include <EEPROM.h>

Servo myservo;
// initialize the library by associating any needed LCD interface pin
// with the arduino pin number it is connected to
const int rs = A0, en = A1, d4 = A2, d5 = A3, d6 = A4, d7 = A5;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

const byte ROWS = 4;  //four rows
const byte COLS = 4;  //four columns
//define the cymbols on the buttons of the keypads
char hexaKeys[ROWS][COLS] = {
  { '1', '2', '3', 'A' },
  { '4', '5', '6', 'B' },
  { '7', '8', '9', 'C' },
  { '*', '0', '#', 'D' }
};
byte rowPins[ROWS] = { 13, 12, 11, 10 };  //connect to the row pinouts of the keypad
byte colPins[COLS] = { 9, 8, 7, 6 };      //connect to the column pinouts of the keypad

//initialize an instance of class NewKeypad
Keypad customKeypad = Keypad(makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);

//VARIABLES
int HOME = 1;
String ENTERED_PASSWORD;
String MASTER_KEY ="12345";
String ENTERED_MASTER_KEY;
String NEW_PASSWORD;
String PASSWORD;
int ATTEMPTS = 3;
String change_password_option = "NOT_SELECTED";
String MODE="RETRY";
String obstacle = "clear";

//PINS
#define RED_LED 4;
#define MODE_BUTTON 1;
int SENSOR2= 3;
int SENSOR1= 2;
//#define EXIT 1;
#define BUZZER 0,

void IR_SENSORS(){
  //obstacle detected
  if(digitalRead(SENSOR1)==LOW || digitalRead(SENSOR2)==LOW){
    obstacle="detected";
  }
  //obstacle not detected
  else{
    obstacle="clear";
  }
}

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);
  myservo.attach(5);
  myservo.write(0); //servo at 0 degrees
  attachInterrupt(digitalPinToInterrupt(2),IR_SENSORS,CHANGE);
  attachInterrupt(digitalPinToInterrupt(3),IR_SENSORS,CHANGE);
  pinMode(5, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(3, INPUT_PULLUP);
  pinMode(1,INPUT_PULLUP); 
  pinMode(2,INPUT_PULLUP);
  pinMode(0,OUTPUT);
  lcd.setCursor(2, 0);
  lcd.print("PASSWORD LOCK");
  lcd.setCursor(0, 1);
  lcd.print("by: SINELUTEC");
  delay(300);//3 sec delay
   
 //reading password from EEPROM
 for(int z=0;z<5;z++){
  PASSWORD+=static_cast<char>(EEPROM.read(z)); //converting the integer from EEPROM indices into characters
 }
 //checking the mode -  retry or blocking mode
 if(static_cast<char>(EEPROM.read(6)==1)){
  lcd.clear();
  lcd.print("RETRY MODE");
  MODE="RETRY"; //retry mode
  delay(100); //1 sec delay
 }
 else if(static_cast<char>(EEPROM.read(6)==2)){
  lcd.clear();
  lcd.print("BLOCKING MODE");
  MODE="BLOCKING"; //blocking mode
  delay(100);
 }
}

void loop() {
  // LCD home screen
  if (HOME == 1) {
    HOME_SCREEN();
  }

  //EXITING
  /*if(digitalRead(1)==LOW){
      EXITING();
  }*/
  char customKey = customKeypad.getKey();
  
  //entering password to open the gate
  if (change_password_option == "NOT_SELECTED") {
    ENTER_PASSWORD(customKey);
  }
  //entering the old password
  else if (change_password_option == "SELECTED") {
    OLD_PASSWORD_ENTER(customKey);
  }
  
// setting the new password
 if(change_password_option=="CHANGING") {
    SET_NEWPASSWORD(customKey);
  }

  // changing mode
  if(digitalRead(1)==LOW){
    CHANGING_MODE();
  }

 //mode setup
  if(change_password_option=="MODE_SETUP"){
    MODE_SETUP(customKey);
  }
}

//CHANGING MODE
void CHANGING_MODE(){
  lcd.clear();
    lcd.home();
    lcd.print("1. RETRY MODE");
    lcd.setCursor(0,1);
    lcd.print("2. BLOCKING MODE");
    ATTEMPTS = 3;
    change_password_option="MODE_SETUP";
    delay(50);
}

//MODE SETUP
void MODE_SETUP(char keyPressed){
  if(keyPressed){
      if(keyPressed=='1'){
        EEPROM.write(6,1); //retry mode chose (number 1)
        lcd.setCursor(0,0);
        lcd.print("  ");
        delay(30);
        lcd.setCursor(0,0);
        lcd.print("1.");
        delay(50);
        lcd.clear();
        lcd.print("RETRY MODE");
        lcd.setCursor(0,1);
        lcd.print("CHOSEN");
        change_password_option="NOT_SELECTED";
        MODE="RETRY";
        delay(100);//1 sec delay
        HOME=1;
        ATTEMPTS=3;
      }
      else if(keyPressed=='2'){
        EEPROM.write(6,2); //Blocking mode chose (number 1)
        lcd.setCursor(0,1);
        lcd.print("  ");
        delay(30);//300 millisec delay
        lcd.setCursor(0,1);
        lcd.print("2.");
        delay(50);//500 millisec delay
        lcd.clear();
        lcd.print("BLOCKING MODE");
        lcd.setCursor(0,1);
        lcd.print("CHOSEN");
        change_password_option="NOT_SELECTED";
        MODE="BLOCKING";
        delay(100);//1 sec delay
        HOME=1;
        ATTEMPTS=3;
      }      
    }
}

//SET NEW PASSWORD
void SET_NEWPASSWORD(char keyPressed){
  //if a key is pressed
    if (keyPressed) {
      if (keyPressed == '*') {  //clears the screen
        lcd.clear();
        lcd.setCursor(3, 0);
        lcd.print("CANCELLING");
        ENTERED_MASTER_KEY = "";
        delay(400);
        HOME = 1;
        NEW_PASSWORD="";       
        change_password_option = "NOT_SELECTED";
      } else if (keyPressed != '*' && keyPressed != '#') {
        lcd.print(keyPressed);
        NEW_PASSWORD += keyPressed;
      }
    }
    //when characters are 5
    if(NEW_PASSWORD.length()==5){
      PASSWORD=NEW_PASSWORD; //resettin password
      NEW_PASSWORD= ""; //reseting variable
      lcd.clear();
      lcd.home();
      lcd.print("PASSWORD CHANGED");
      lcd.setCursor(0,1);
      lcd.print("----------------");
      delay(150);
      lcd.clear();
      lcd.home();
      lcd.print("NEW PASSWORD");
      lcd.setCursor(0,1);
      lcd.print("is: ");
      delay(30);
      lcd.print(PASSWORD[0]);
      delay(10);
      lcd.print(PASSWORD[1]);
      delay(10);
      lcd.print(PASSWORD[2]);
      delay(10);
      lcd.print(PASSWORD[3]);
      delay(10);
      lcd.print(PASSWORD[4]);
      delay(500);
      HOME=1;
      change_password_option="NOT_SELECTED";

      //saving on EEPROM
      EEPROM.write(0,PASSWORD[0]);
      EEPROM.write(1,PASSWORD[1]);
      EEPROM.write(2,PASSWORD[2]);
      EEPROM.write(3,PASSWORD[3]);
      EEPROM.write(4,PASSWORD[4]);

      
      //if password changed for the first time-next time it will read it from the EEPROM
      if(EEPROM.read(5)!=1){
        EEPROM.write(5,1);    
      }
    }
}


//OLD PASSWORD ENTER (MASTER KEY)
void OLD_PASSWORD_ENTER(char keyPressed){
  //if a key is pressed
    if (keyPressed) {
      if (keyPressed == '*') {  //clears the screen
        lcd.clear();
        lcd.setCursor(3, 0);
        lcd.print("CANCELLING");
        ENTERED_MASTER_KEY = "";
        delay(40);
        HOME = 1;
        change_password_option = "NOT_SELECTED";
      } else if (keyPressed != '*' && keyPressed != '#') {
        lcd.print("*");
        ENTERED_MASTER_KEY += keyPressed;
      }
    }

    //if password is correct
    if (ENTERED_MASTER_KEY.length() == 5 && ENTERED_MASTER_KEY == MASTER_KEY) {
      lcd.clear();
      ATTEMPTS = 3;
      lcd.setCursor(0, 0);
      lcd.print("NEW PASSWORD:");
      ENTERED_MASTER_KEY = "";
      //keyPressed = customKeypad.getKey();      
      change_password_option = "CHANGING";
      lcd.setCursor(0, 1);
    }

    //if password is incorrect
    if (ENTERED_MASTER_KEY.length() == 5 && ENTERED_MASTER_KEY != MASTER_KEY) {
      lcd.clear();
      ATTEMPTS--;
      lcd.setCursor(0, 0);
      lcd.print("KEY NOT FOUND");
      ENTERED_MASTER_KEY = "";
      digitalWrite(4, 1);  // red led on
      delay(100);
      digitalWrite(4, 0);  //red led off
      lcd.setCursor(0, 1);
      lcd.print(ATTEMPTS);
      lcd.setCursor(1, 1);
      lcd.print(" attempt/s left");
      delay(200);

      if (ATTEMPTS == 0) {
        lcd.clear();
        lcd.print("THAT WAS");
        lcd.setCursor(0, 1);
        lcd.print("SUSPICIOUS");
        delay(300);
        lcd.clear();
        lcd.print("THE SECURITY");
        lcd.setCursor(0, 1);
        lcd.print("IS COMING NOW");
        delay(200);
        HOME = 1;
        change_password_option = "NOT_SELECTED";
        ATTEMPTS = 3;
      } else {
        lcd.clear();
        lcd.home();
        lcd.print("MASTER KEY:");
        lcd.setCursor(0, 1);
        delay(200);
      }
    }
}


//ENTER PASSWORD
void ENTER_PASSWORD(char keyPressed){
  //if a key is pressed
    if (keyPressed) {
      if (keyPressed == '*') {  //clears the screen
        lcd.clear();
        lcd.setCursor(3, 0);
        lcd.print("CANCELLING");
        ENTERED_PASSWORD = "";
        delay(40);
        HOME = 1;
      }
      else if (keyPressed == '#') {
        change_password_option = "SELECTED";
        ATTEMPTS = 3;
        ENTERED_PASSWORD = "";
        lcd.clear();
        lcd.home();
        lcd.print("MASTER KEY:");
        lcd.setCursor(0, 1);
        delay(50);
      }
      else if (keyPressed != '*' && keyPressed != '#') {
        lcd.print("*");
        ENTERED_PASSWORD += keyPressed;
      }
    }

    //if password is correct
    if (ENTERED_PASSWORD.length() == 5 && ENTERED_PASSWORD == PASSWORD) {
      CORRECT_PASSWORD();
    }

    //if password is incorrect
    if (ENTERED_PASSWORD.length() == 5 && ENTERED_PASSWORD != PASSWORD) {
      INCORRECT_PASSWORD();
    }
}

//INCORRECT PASSWORD
void INCORRECT_PASSWORD(){
  lcd.clear();
      ATTEMPTS--;
      lcd.setCursor(1, 0);
      lcd.print("ACCESS DENIED");
      ENTERED_PASSWORD = "";
      digitalWrite(4, 1);  // red led on
      digitalWrite(0,1);
      delay(100);
      digitalWrite(4, 0);  //red led off
      digitalWrite(0,0);
      lcd.setCursor(0, 1);
      lcd.print(ATTEMPTS);
      lcd.setCursor(1, 1);
      lcd.print(" attempt/s left");
      delay(200);

      if (ATTEMPTS == 0) {
        lcd.clear();
        lcd.print("YOU HAVE BEEN");
        lcd.setCursor(0, 1);
        lcd.print("REPORTED");
        digitalWrite(2,HIGH);
        delay(300);
        lcd.clear();
        lcd.print("THE SECURITY");
        lcd.setCursor(0, 1);
        lcd.print("IS COMING NOW");
        delay(200);
        digitalWrite(2,LOW);
        digitalWrite(0,LOW);
        if(MODE=="RETRY"){ //if mode is RETRY
          HOME = 1;
          ATTEMPTS = 3;
          }
         else if(MODE=="BLOCKING"){ // if mode is BLOCKING
          lcd.clear();
          lcd.print("ENTRANCE BLOCKED");
          lcd.setCursor(0,1);
          lcd.print("!!!!!!!!!!!!!!!!");
          change_password_option="BLOCKED";
         }
      } 
      else {
        HOME = 1;
      }
}


//CORRECT PASSWORD
void CORRECT_PASSWORD(){
      lcd.clear();
      ATTEMPTS = 3;
      lcd.setCursor(2, 0);
      lcd.print("DOOR OPENING");
      ENTERED_PASSWORD = "";
      
      //opening the gate
      for(int pos=0;pos<=180;pos++){
        myservo.write(pos);
        delay(1);
      }
      
      delay(300);  
       //closing the gate
      CLOSE_GATE();
      delay(50);
      //HOME = 1;
}

//EXITING
void EXITING(){
      lcd.clear();
      ATTEMPTS = 3;
      lcd.setCursor(3, 0);
      lcd.print("DOOR OPEN");
      ENTERED_PASSWORD = "";
      digitalWrite(5, 1);  //opening the gate
      delay(200);
      digitalWrite(5, 0);  //closing the gate
      HOME = 1;
      change_password_option="NOT_SELECTED";
}


//HOME SCREEN
void HOME_SCREEN(){
  lcd.clear();
    lcd.print("ENTER PASSWORD:");
    lcd.setCursor(0, 1);
    HOME = 0;
}

//CLOSE GATE
void CLOSE_GATE(){
  if(obstacle=="clear"){
    //close gate
    digitalWrite(5,HIGH); //stopping the gate
    lcd.clear();
    lcd.print("Obstacle");
    lcd.setCursor(0,1);
    lcd.print("clear");
    delay(20);
    for(int pos=180;pos>=0;pos--){
        myservo.write(pos);
        delay(2);
      }
    HOME = 1; //if the gate is fully closed
  }
  else if(obstacle=="detected"){
    //stop  gate and get current location
    digitalWrite(5,LOW); //stopping the gate
    lcd.clear();
    lcd.print("Obstacle");
    lcd.setCursor(0,1);
    lcd.print("Detected");
    delay(20);
  }
}
