"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
var models_1 = __importDefault(require("../models"));
function getData(req, res) {
    models_1.default.api
        .find()
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.status(500).json(err); });
}
exports.getData = getData;
