const axios = require("axios"); 
const prompt = require("../utils/utils");

module.exports = async (req, res) => {
  try {
    const { content, idx } = req.body;

    if (!content.trim()) {
      throw new Error("Missing content");
    }; 

    if (idx === undefined) {
      throw new Error("Missing index");
    }

    const response = await axios.post(
      "https://api.cohere.com/v2/chat",
      {
        model: "command-a-03-2025",
        messages: [
          {
            role: "system",
            content: prompt(idx),
          },
          {
            role: "user",
            content,
          },
        ],
      },
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.COHERE_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    ); 

    res.status(200).json({ content: response.data.message.content[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error occured: Internal Server Error" });
  }
};

