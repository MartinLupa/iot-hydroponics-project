require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const mqttHandler = require("./mqtt_handler");

//Middlewares
app.use(cors());
app.use(express.json());

//MQTT
const mqttClient = new mqttHandler();
mqttClient.connect();

app.post("/send-mqtt", (req, res) => {
  mqttClient.sendMessage(req.body.message);
  res.status(200).send("Message sent to mqtt");
});

//Server
app.post("/lights/:id", (req, res) => {
  const pinId = req.params.id;
  const { pinSignal } = req.body;
  console.log(`${pinSignal} ${pinId}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
