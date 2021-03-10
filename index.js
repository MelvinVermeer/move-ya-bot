const express = require("express");
const SlackBot = require("slackbots");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.get("/status", (_, res) => {
  res.send("ok");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const bot = new SlackBot({
  token: `${process.env.BOT_TOKEN}`,
  name: "move-ya-bot",
});
bot.on("error", (err) => {
  console.log(err);
});
bot.on("message", (data) => {
  if (data.type === "message" && data.text.includes(bot.self.id)) {
    bot.postMessage(data.channel, "Do 5 push ups", {
      icon_emoji: ":robot_face:",
    });
    console.log(JSON.stringify(data, null, 2));
  }
});
