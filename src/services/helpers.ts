import axios from "axios";
import { Cheerio, CheerioAPI } from "cheerio";

export async function getHtml(url: string) {
  try {
    const r = await axios.get(url);

    if (r.status !== 200) 
      throw new Error("Não foi possível obter o html");

    return r.data;
  }

  catch (e) {
    console.error(e);

    return null;
  } 
}

export function getBestCurrency($: CheerioAPI, table: Cheerio<any>) {
  const rows = table.find(".cotacao-item");

  const result = rows.map((_, row_) => {
    const row = $(row_);

    const coin = row.find(".media-item-label").text();
    const buy = row.find(".ranking-calc-compra").text();
    const sell = row.find(".ranking-calc-venda").text();

    const _data = {
      coin: coin.trim(),
      buy: parseFloat(buy),
      sell: parseFloat(sell),
    }

    return _data;
  })

  return result.toArray();
}

export function getGeneralCurrency ($: CheerioAPI, table: Cheerio<any>) {
  const rows = table.find(".cotacao-item");

  const coin = table.find(".cotacao-moeda").text();

  const result = rows.map((_, row_) => {
    const row = $(row_);

    const name = row.find(".p_unidade").text();
    const buy = row.find(".p_compra").text();
    const sell = row.find(".p_venda").text();

    const _data = {
      name: name.trim(),
      buy: parseFloat(buy),
      sell: parseFloat(sell),
    }

    return _data;
  })

  return { coin: coin.trim(), company: result.toArray() };
}

export function getGeneralCurrencies($: CheerioAPI, tables: Cheerio<any>) {
  const result = tables.map((_, table_) => getGeneralCurrency($, $(table_)));

  return result.toArray();
}