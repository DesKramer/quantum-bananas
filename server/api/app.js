// Bring in our dependencies
const app = require("express")();
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());

const mongodbPassword = "admin123";
const mongodDatabase = "testdb";
const uri = `mongodb+srv://admin:${mongodbPassword}@cluster0.qpu8j.mongodb.net/${mongodDatabase}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected…");
  })
  .catch((err) => console.log(err));

//  Connect all our routes to our application
app.use("/", routes);

// Turn on that server!
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
