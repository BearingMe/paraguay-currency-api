import * as scrapper from "./scrapper";
import models from "../models";

async function wrapper() {
  const data = await scrapper.getData();

  models.api
    .updateMany({ _id: "61de129684db87fe6fbe36d5" }, data, { upsert: true })
    .catch((err) => console.log(err));
}

function main() {
  wrapper()
    .then(() => console.log("update successful"))
    .catch((err) => console.log(err));
}

export default main;
