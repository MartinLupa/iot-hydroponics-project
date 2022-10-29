require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

//Create a port to communicate with Arduino
const port = new SerialPort({
  path: "COM6",
  baudRate: 9600,
});

//Initialize parser to convert raw binary data into readable information
const parser = port.pipe(new ReadlineParser());

port.pipe(parser);

parser.on("data", (data) => {
  console.log(data);
});

//Node server logic
app.get("/health", (req, res) => {
  try {
    res.status(200).json({
      data: `Connection to PORT: ${port.path} successful`,
      error: null,
    });
  } catch (error) {
    res.status(200).json({ data: null, error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
