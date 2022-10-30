/*
 * This file receives a Serial value of "1" or "0" and changes the light based on
 * that value. 
 */  

// Define the port for the LED
int lightPin = 2;
 
void setup() 
{ 
  
  // Initialize the light pin
  pinMode(lightPin, OUTPUT);
  
  // Initialize the Serial
  Serial.begin(9600);
  
}

void loop() {
  if(Serial.available() > 0) {
    String receivedString = "";

    while(Serial.available() > 0) {
      receivedString += char(Serial.read());
    }

    if(receivedString == "1") {
      digitalWrite(lightPin, HIGH);
    } else {
      digitalWrite(lightPin, LOW);
    }
  }
}
