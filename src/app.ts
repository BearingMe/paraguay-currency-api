import express from "express";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

// set up routes
app.use("/api/v1", routes.api);
app.get("/", (req, res) => res.redirect("/api/v1"));

app.listen(port, () => console.log(`Listening on port ${port}`));
