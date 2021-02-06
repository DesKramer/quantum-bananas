// Bring in our dependencies
const app = require("express")();
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const mongodbPassword = "admin123";
const mongodbDatabase = "testdb";
const mongodbCollection = "testdb";
const mongodbUri = `mongodb+srv://admin:${mongodbPassword}@cluster0.qpu8j.mongodb.net/${mongodbDatabase}?retryWrites=true&w=majority`;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected...");
    const db = client.db(mongodbDatabase);
    const quotesCollection = db.collection(mongodbCollection);
  })
  .catch((err) => console.log(err));

//  Connect all our routes to our application
app.use("/", routes);

// Turn on that server!
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
