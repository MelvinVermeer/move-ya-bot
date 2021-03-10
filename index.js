const express = require("express");
const SlackBot = require("slackbots");
const bodyParser = require('body-parser');
const signature = require('./verifySignature');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const bot = new SlackBot({
  token: `${process.env.BOT_TOKEN}`,
  name: "move-ya-bot",
});

//app.use(bodyParser.urlencoded({ extended: true }))
const rawBodyBuffer = (req, res, buf, encoding) => {
  if (buf && buf.length)  req.rawBody = buf.toString(encoding || 'utf8');
};

app.use(bodyParser.urlencoded({verify: rawBodyBuffer, extended: true }));
app.use(bodyParser.json({ verify: rawBodyBuffer }));

app.post('/move', async (req, res) => {
  if(!signature.isVerified(req)) {
    res.sendStatus(404);     
    return;
  } else {
    console.log(req.body)
    
    res.json({ 
      response_type: 'ephemeral',
      text: "thanks for the motivaiton",
    });
  }
});

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
