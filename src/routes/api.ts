import express from "express";
import controller from "../controller";

const router = express.Router();

router.route("/").get(controller.api.getData);

export default router;
