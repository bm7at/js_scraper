
const cheerio = require("cheerio");
const axios = require("axios");

async function fetchLinks() {
  const URL_OF_THE_WEBSITE = "https://www.guiamtc.com/duels";
  const response = await axios.get(URL_OF_THE_WEBSITE);
  const html = response.data;

  const $ = cheerio.load(html);
  const links = [];

  $("div.hJDwNd-AhqUyc-c5RTEf a.fqo2vd").each((index, element) => {
    links.push($(element).attr("href"));
  });

  return links;
}

async function main(){
  const data = await fetchLinks();

console.log(data);
}
main();
//fetchLinks();
/*
const cheerio = require("cheerio");
const axios = require("axios");

async function fetchLinks() {
  const URL_OF_THE_WEBSITE = "https://www.guiamtc.com/duels";
  const response = await axios.get(URL_OF_THE_WEBSITE);
  const htmlContent = response.data;

  const $ = cheerio.load(htmlContent);

  let textsArray = [];

  $(".JNdkSc-SmKAyb.LkDMRd").each(function () {
    $(this)
      .find(".oKdM2c.ZZyype")
      .each(function () {
        const text = $(this).text();
        textsArray.push(text);
      });
  });

  // console.log(textsArray);

  // Function to extract data with regex
  function extractData(texts) {
    const pattern = /^(.*?)\s([^\(]+)\(([^)]+)\)$/; // Adjusted regex for your pattern
    return texts
      .filter((text) => pattern.test(text)) // Filter texts that match the pattern
      .map((text) => {
        const matches = text.match(pattern);
        return {
          name: matches[1].trim(),
          player: matches[2].trim(),
          rank: matches[3].trim(),
        };
      });
  }

  const processedData = extractData(textsArray);
  console.log(processedData);
}

fetchLinks();
*/