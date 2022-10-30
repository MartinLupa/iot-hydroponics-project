require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const bodyParser = require("body-parser");
const cors = require("cors");

//Middlewares
app.use(cors());
app.use(express.json());

//Create a port to communicate with Arduino
const port = new SerialPort({
  path: "COM6",
  baudRate: 9600,
  dataBits: 8,
  priority: "none",
  stopBits: 1,
  flowControl: false,
});

//Initialize parser to convert raw binary data into readable information
const parser = port.pipe(
  new ReadlineParser({
    delimiter: "\r\n",
  })
);

port.pipe(parser);

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

app.post("/lights/:id", (req, res) => {
  const pinId = req.params.id;
  const { pinSignal } = req.body;
  port.write(pinSignal);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
