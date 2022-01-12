"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
function init(uri) {
    mongoose_1.default
        .connect(uri)
        .then(function () { return console.log("MongoDB connected"); })
        .catch(function (err) { return console.log(err); });
}
exports.init = init;
