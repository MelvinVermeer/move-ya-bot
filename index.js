const SlackBot = require("slackbots");
const dotenv = require("dotenv");
dotenv.config();

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
