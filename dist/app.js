"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var path_1 = __importDefault(require("path"));
var services_1 = __importDefault(require("./services"));
var db_1 = __importDefault(require("./db"));
var app = express_1.default();
var port = process.env.PORT || 3000;
var staticPath = path_1.default.join(__dirname, "./public");
// load middlewares
// app.use(express.json());
app.use(express_1.default.static(staticPath));
// set up routes
app.use("/api/v1", routes_1.default.api);
app.get("/", function (req, res) { return res.redirect("/api/v1"); });
// update server
services_1.default();
setInterval(services_1.default, 21600000);
// set up database
db_1.default.init(process.env.DB_URI);
// start server
app.listen(port, function () { return console.log("Listening on port " + port); });
