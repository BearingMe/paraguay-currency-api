import express from "express";
import models from "../models";
import services from "../services";

export function getData(req: express.Request, res: express.Response) {
  models.api
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
}

export function updateServer(req: express.Request, res: express.Response) {
  async function wrapper() {
    const data = await services.scrapper.getData();

    models.api
      .updateMany({ _id: "61de129684db87fe6fbe36d5" }, data, { upsert: true })
      .then(() => res.status(201).json("update successful"))
      .catch((err) => res.send(err));
  }

  wrapper().catch((err) => res.status(500).send(err));
}