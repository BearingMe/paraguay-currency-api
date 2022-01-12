"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bestSchema = new mongoose_1.default.Schema({
    coin: {
        type: String,
        required: true,
        maxlength: 10,
    },
    buy: {
        type: Number,
        required: true,
        maxlength: 10,
    },
    sell: {
        type: Number,
        required: true,
        maxlength: 10,
    },
});
var companySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
    },
    buy: {
        type: Number,
        required: true,
        maxlength: 10,
    },
    sell: {
        type: Number,
        required: true,
        maxlength: 10,
    },
});
var generalSchema = new mongoose_1.default.Schema({
    coin: {
        type: String,
        required: true,
        maxlength: 10,
    },
    company: [companySchema],
});
var apiSchema = new mongoose_1.default.Schema({
    best: [bestSchema],
    general: [generalSchema],
});
exports.default = mongoose_1.default.model("api", apiSchema);
