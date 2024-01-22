/*
 * DIGITAL DISTANCE MEASURING WHEEL (5KM)
 * Created by: Sinethemba Lusawana
 * Date: 11/01/2024
 * 
 * A program for DDMW 5KM measuring wheel that measures distance from 0.1m up to 5000m.
*/

//74H595 shift register control pins for 7 segments display
#define CLK PORTD7 //clock pin connected to pin 7 of arduino
#define DATA PORTD6 //data pin connected to pin 6 of arduino
#define LATCH PORTD5 //latch pin connected to pin 5 of srduino

//74H595 shift register control pins for leds
#define CLK_2 PORTD4 //clock pin connected to pin 4 of arduino
#define DATA_2 PORTD2 //data pin connected to pin 1 of arduino
#define LATCH_2 PORTD0 //latch pin connected to pin 0 of srduino



//target distance buttons
#define Increment A4 //connected to pin A4 of arduino
#define Decrement A5 //connected to pin A5 of arduino
#define plus100Metre A3 //increment by 100m button connected to pin A3 of arduino

//digits enable/disable pins
#define display1 PORTB0
#define display2 PORTB1
#define display3 PORTB2
#define display4 PORTB3
//battery pin
#define batteryPin A0

//0 - 9  digits array
const byte digitsArray[10]={
  0b11111100, //0  
  0b01100000, //1
  0b11011010, //2
  0b11110010, //3
  0b01100110, //4
  0b10110110, //5
  0b10111110, //6
  0b11100000, //7
  0b11111110, //8
  0b11110110  //9
};
  int displayDelay=15; //delay in between displays
  bool startZeroDisplay = true; //keeps 0 display on the displays
  byte leds595PrevByte = 0b00000000;
  int state=0;
  
void setup() {
  Serial.begin(9600);
  DDRD |= (1<<LATCH)|(1<<DATA)|(1<<CLK); //setting pin 5 - 7  of PORT D as outputs
  DDRD |=(1<<LATCH_2)|(1<<DATA_2)|(1<<CLK_2); //setting pin 0,1 and 4 of PORT D as outputs
  DDRB |= (1<<display1)|(1<<display2)|(1<<display3)|(1<<display4); //setting pin 8 - 11  of PORT B as outputs 
}

void loop() {
  //voltage level reader
  voltageLevelReader();
  
  do{ // call start() to display 0 for as long as startZeroDisplay is true
    start();
  }
  while(startZeroDisplay==true);
}

//start - displays zero after starting
void start(){
  //displaying 0 to display 1,3 and 4 without DP
  PORTB |=(1<<display2); //disabling digit 1
  for(int i=0;i<8;i++){
    PORTD &=~(1<<LATCH); //disabling LATCH pin
    int shiftedBit=(digitsArray[0]>>i)&1; //shifting the LSB and store it on shiftedBit
    if(shiftedBit==1){
      PORTD|=(shiftedBit<<DATA); //set DATA HIGH
    }
    else{
      PORTD &=~(1<<DATA); //set DATA LOW
    }
    PORTD |=(1<<CLK); //enabling CLK pin
    PORTD &=~(1<<CLK); //disabling CLK pin
    delay(1);
  }
  PORTD |=(1<<LATCH); //enabling LATCH pin
  PORTD &=~(1<<LATCH); //disabling LATCH pin
  PORTB &= ~(1<<display1)&~(1<<display3)&~(1<<display4); //enabling display 1,3 and 4
  delay(displayDelay);
  
  //displaying 0 to display 2 with DP
  PORTB |= (1<<display1)|(1<<display3)|(1<<display4); ////disabling display 1,3 and 4
  byte zeroDP= 0b11111101; //0
  for(int i=0;i<8;i++){
    PORTD &=~(1<<LATCH); //disabling LATCH pin
    int shiftedBit=(zeroDP>>i)&1; //shifting the LSB and store it on shiftedBit
    if(shiftedBit==1){
      PORTD|=(shiftedBit<<DATA); //set DATA HIGH
    }
    else{
      PORTD &=~(1<<DATA); //set DATA LOW
    }
    PORTD |=(1<<CLK); //enabling CLK pin
    PORTD &=~(1<<CLK); //disabling CLK pin
    delay(1);
  }
  PORTD |=(1<<LATCH); //enabling LATCH pin
  PORTD &=~(1<<LATCH); //disabling LATCH pin
  PORTB &=~(1<<display2); //enabling digit 1
  delay(displayDelay);
}

//voltage level reader
void voltageLevelReader(){
  int analogValue = analogRead(batteryPin); //reading pin A0
  float voltageIn = (analogValue*5)/1023.0;
  float vBattery = voltageIn*(1200 + 1500)/1500; // R1 =1200ohm, R2 =1500ohm --- calculating the battery level

  //battery level greater than 7V
  if(vBattery>7){
    leds595PrevByte|=(1<<0); //setting bit 0 to HIGH
    leds595PrevByte &=~(1<<1); //setting bit 1 to LOW
    leds595PrevByte &=~(1<<2); //setting bit 2 to LOW
  for(int i=0;i<8;i++){
    PORTD &=~(1<<LATCH_2); //disabling LATCH_2 pin
    shiftOut(DATA_2,CLK_2,LSBFIRST,leds595PrevByte);
  }
  PORTD |=(1<<LATCH_2); //enabling LATCH_2 pin
  PORTD &=~(1<<LATCH_2); //disabling LATCH_2 pin
  }

  //battery level less than 7V but greater than 3.5V
  if(vBattery<7 && vBattery>4.5){
    leds595PrevByte|=(1<<1); //setting bit 1 to HIGH
    leds595PrevByte&=~(1<<0); //setting bit 0 LOW
    leds595PrevByte&=~(1<<2); //setting bit 2 LOW
  for(int i=0;i<8;i++){
    PORTD &=~(1<<LATCH_2); //disabling LATCH_2 pin
    shiftOut(DATA_2,CLK_2,LSBFIRST,leds595PrevByte);
  }
  PORTD |=(1<<LATCH_2); //enabling LATCH_2 pin
  PORTD &=~(1<<LATCH_2); //disabling LATCH_2 pin
  }

  //battery level less than than 4.5V
  if(vBattery<4.5){
    leds595PrevByte|=(1<<2); //setting bit 2 to HIGH
    leds595PrevByte&=~(1<<0); //setting bit 0 to LOW
    leds595PrevByte&=~(1<<1); //setting bit1 to LOW
  for(int i=0;i<8;i++){
    PORTD &=~(1<<LATCH_2); //disabling LATCH_2 pin
    shiftOut(DATA_2,CLK_2,LSBFIRST,leds595PrevByte);
  }
  PORTD |=(1<<LATCH_2); //enabling LATCH_2 pin
  PORTD &=~(1<<LATCH_2); //disabling LATCH_2 pin
  }
}
