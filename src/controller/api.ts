import express from "express";

export function getData(req: express.Request, res: express.Response) {
  res.send("Hello World!");
}

export function updateServer(req: express.Request, res: express.Response) {
  res.send("Hello World!");
}
