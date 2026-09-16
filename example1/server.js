import express from "express";
import OpenAI from "openai";
import "dotenv/config";
const client = new OpenAI();
const app = express();
app.use(express.json())
app.post("/req", async (req, res) => {
  try {
    const input = req.body.input;
    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      input: `summarise this user problem in shoretst way possible : ${input}`,
    });
    return res.json({output : response.output_text})
  } catch (error) {
    return res.status(500).json({error : "something went wrong"})
  }
});

app.listen(3000, () => {
  console.log("server listens at port 3000");
});
