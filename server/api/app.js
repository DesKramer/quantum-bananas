// Bring in our dependencies
var http = require("http");
const app = require("express")();
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socketIo = require("socket.io");

const mongodbPassword = "admin123";
const mongodbDatabase = "testdb";
const mongodbUri = `mongodb+srv://admin:${mongodbPassword}@cluster0.qpu8j.mongodb.net/${mongodbDatabase}?retryWrites=true&w=majority`;

app.use(cors());
app.use(bodyParser.json());

var server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => console.log(err));

io.on("connection", (client) => {
  // client.on("subscribeToTimer", (interval) => {
  //   console.log("client is subscribing to timer with interval ", interval);
  //   setInterval(() => {
  //     client.emit("timer", new Date());
  //   }, interval);
  // });
  // io.emit("timer", new Date());
});

//  Connect all our routes to our application
app.use((req, res, next) => {
  res.locals["socketio"] = io;
  next();
});
app.use("/", routes);

// Turn on that server!
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));
