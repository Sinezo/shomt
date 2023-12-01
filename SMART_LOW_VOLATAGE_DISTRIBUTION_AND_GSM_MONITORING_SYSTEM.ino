#include <SoftwareSerial.h>

SoftwareSerial gsmSerial(7, 8); // RX, TX pins for GSM module
int ledPin = 13; // Pin number for the LED

int mainFeeder=2;
int Feeder1=3;
int Feeder2=4;
int Feeder3=5;
int Feeder4=6;

int mainFeeder_state=0;
int Feeder1_state=0;
int Feeder2_state=0;
int Feeder3_state=0;
int Feeder4_state=0;
void setup() {
  pinMode(mainFeeder,OUTPUT);
  pinMode(Feeder1,OUTPUT);
  pinMode(Feeder2,OUTPUT);
  pinMode(Feeder3,OUTPUT);
  pinMode(Feeder4,OUTPUT);
  Serial.begin(9600); // Serial monitor
  gsmSerial.begin(9600); // GSM module
  
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW); // Initialize LED as OFF
}

void loop() {
  if (Serial.available()) {
      int c = Serial.read();
      switch(c){
        //all feeders
        case '0':
        for(int i=2;i<7;i++){
          digitalWrite(i,HIGH);
          delay(30);
        }
        gsmSerial.println("   ");
        gsmSerial.println("All Feeders UNLOCKED");
        //change the feeders state
        mainFeeder_state=1;
        Feeder1_state=1;
        Feeder2_state=1;
        Feeder3_state=1;
        Feeder4_state=1;
        break;
        
        //main feeder
        case '1':
        mainFeeder_state=!mainFeeder_state;
        digitalWrite(2,mainFeeder_state);
        gsmSerial.println("   ");
        gsmSerial.println("Main Feeder Changed Status");
        if(mainFeeder_state==1){
          gsmSerial.println("From: LOCKED  To: UNLOCKED");
        }
        else{
          gsmSerial.println("From: UNLOCKED  To: LOCKED");
          //switching OFF the 4 feeders (this is optional when gsm is combined with the main circuit)
          for(int i=2;i<7;i++){
            digitalWrite(i,LOW);
          }
          //change the feeders state
          mainFeeder_state=0;
          Feeder1_state=0;
          Feeder2_state=0;
          Feeder3_state=0;
          Feeder4_state=0;
        }
        break;

        //feeder 1
        case '2':
        Feeder1_state=!Feeder1_state;
        digitalWrite(3,Feeder1_state);
        gsmSerial.println("   ");
        gsmSerial.println("Feeder1 Changed Status");
        if(Feeder1_state==1){
          gsmSerial.println("From: LOCKED  To: UNLOKED");
        }
        else{
          gsmSerial.println("From: UNLOCKED  To: LOCKED");
        }
        break;
        
        //feeder 2
        case '3':
        Feeder2_state=!Feeder2_state;
        digitalWrite(4,Feeder2_state);
        gsmSerial.println("   ");
        gsmSerial.println("Feeder2 Changed Status");
        if(Feeder2_state==1){
          gsmSerial.println("From: LOCKED  To: UNLOCKED");
        }
        else{
          gsmSerial.println("From: UNLOCKED  To: LOCKED");
        }
        break;

        //feeder 3
        case '4':
        Feeder3_state=!Feeder3_state;
        digitalWrite(5,Feeder3_state);
        gsmSerial.println("   ");
        gsmSerial.println("Feeder3 Changed Status");
        if(Feeder3_state==1){
          gsmSerial.println("From: LOCKED  To: UNLOCKED");
        }
        else{
          gsmSerial.println("From: UNLOCKED  To: LOCKED");
        }
        break;

        //feeder 4
        case '5':
        Feeder4_state=!Feeder4_state;
        digitalWrite(6,Feeder4_state);
        gsmSerial.println("   ");
        gsmSerial.println("Feeder4 Changed Status");
        if(Feeder4_state==1){
          gsmSerial.println("From: LOCKED  To: UNLOCKED");
        }
        else{
          gsmSerial.println("From: UNLOCKED  To: LOCKED");
        }
        break;
      }
  }
}
