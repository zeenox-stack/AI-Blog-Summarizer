const dompurify = require("dompurify");
const { JSDOM } = require("jsdom");
const axios = require("axios"); 
const getLimitedText = require("../Utils/utils");

module.exports = async (req, res) => {
  const { url } = req.body;

  console.log(url);

  if (!url)
    res.status(404).json({ error: "Error occured: couldn't find the url" });

  try {
    const r = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        Referer: "https://www.google.com/",
      },
    });
    const dom = new JSDOM(r.data);

    const data = getLimitedText((dom.window.document.querySelector("article") || dom.window.document.querySelector("main") || dom.window.document.querySelector("section"))?.innerHTML); 

    if (!data) throw new Error("Couldn't fetch the url");

    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error occured: Internal Server Error" });
  }
};
