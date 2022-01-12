import express from "express";
import models from "../models";

export function getData(req: express.Request, res: express.Response) {
  models.api
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
}
