/*
 * This file receives a Serial value of "1" or "0" and changes the light based on
 * that value. 
 */  

// Define the ports for the LEDs
int lightPin1 = 2;
int lightPin2 = 3;
int lightPin3 = 4;
int lightPin4 = 5;

//Map LEDs to assigned Ids in the frontend.
String lightPin1Id = "1";
String lightPin2Id = "2";
String lightPin3Id = "3";
String lightPin4Id = "4";

 
void setup() 
{ 
  
  // Initialize the light pin
  pinMode(lightPin1, OUTPUT);
  pinMode(lightPin2, OUTPUT);
  pinMode(lightPin3, OUTPUT);
  pinMode(lightPin4, OUTPUT);
  
  // Initialize the Serial
  Serial.begin(9600);
  
}

void loop() {
  if(Serial.available() > 0) {
    String receivedString = "";
    String pinId = "";
    String pinSignal = "";

    while(Serial.available() > 0) {
      receivedString = char(Serial.read());
      int indexOfSplittingPoint = receivedString.indexOf(" ");
      int lengthOfInputLine = receivedString.length();

      //Divide the receivedString into the two inputs needed to control the switch statement.
      pinId = receivedString.substring(indexOfSplittingPoint + 1, lengthOfInputLine);
      pinSignal = receivedString.substring(0, indexOfSplittingPoint);

      //Serial.print(pinSignal);
    }

    if(pinId == lightPin1Id) {
      if(pinSignal == "1") {
        digitalWrite(lightPin1, HIGH);
      } else {
        digitalWrite(lightPin1, LOW);
      }
    } else if(pinId == lightPin2Id) {
      if(pinSignal == "1") {
        digitalWrite(lightPin2, HIGH);
      } else {
        digitalWrite(lightPin2, LOW);
      }
    } else if(pinId == lightPin3Id) {
      if(pinSignal == "1") {
        digitalWrite(lightPin3, HIGH);
      } else {
        digitalWrite(lightPin3, LOW);
      }
    } else if(pinId == lightPin4Id) {
      if(pinSignal == "1") {
        digitalWrite(lightPin4, HIGH);
      } else {
        digitalWrite(lightPin4, LOW);
      }
    }    
  }
}