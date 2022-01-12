import "dotenv/config";
import express from "express";
import routes from "./routes";
import path from "path";
import db from "./db";

const app = express();
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "./public");

// load middlewares
app.use(express.static(staticPath));

// set up routes
app.use("/api/v1", routes.api);
app.get("/", (req, res) => res.redirect("/api/v1"));

// set up database
db.init(process.env.DB_URI as string);

// start server
app.listen(port, () => console.log(`Listening on port ${port}`));
