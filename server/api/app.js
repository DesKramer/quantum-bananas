// Bring in our dependencies
const app = require("express")();
const routes = require("./routes");
const cors = require("cors");

app.use(cors());

//  Connect all our routes to our application
app.use("/", routes);

// Turn on that server!
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
