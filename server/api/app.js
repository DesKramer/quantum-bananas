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
const appServer = "http://localhost:3000";

app.use(cors());
app.use(bodyParser.json());

var server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: appServer,
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

app.use((req, res, next) => {
  res.locals["socketio"] = io;
  next();
});

app.use("/", routes);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));
