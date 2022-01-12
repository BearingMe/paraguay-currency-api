import axios from "axios";
import cheerio from "cheerio";
import { Cheerio, CheerioAPI } from "cheerio";
import * as helpers from "./helpers";

const URL = "https://www.cambiosparaguay.com/";

export async function getData() {
  const html = await helpers.getHtml(URL);
  const $ = cheerio.load(html);

  const bestCurrency = helpers.getBestCurrency($, $("#ranking-border"));
  const generalCurrencies = helpers.getGeneralCurrencies($, $(".cotacao"));

  const result = {
    best: bestCurrency,
    general: generalCurrencies
  };

  return result;
} 
