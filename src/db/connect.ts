import mongoose from "mongoose";

export function init(uri: string) {
  mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}
