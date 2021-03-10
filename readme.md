# Move ya bot

## Environment variables
 
The following settings need to be in heroku and in the local `.env` file.

```
BOT_TOKEN=xoxb-*****
```

## Logs

To view the logs from heroku install the CLI `npm install heroku -g` and then:

```
heroku logs --app move-ya-bot --tail
```

Of course this is only possible for the bot maintainers.

## Current functionality

When a message is posted that mentions the bot `@move-ya-bot`. The bot will repond with __"Do 5 push ups"__.

![image](https://user-images.githubusercontent.com/8372778/110544241-b084c480-812b-11eb-88d8-4c70fe0ce12c.png)

## Resources

- https://www.freecodecamp.org/news/building-a-slackbot-with-node-js-and-slackbots-js/
- https://api.slack.com/apps/
- https://move-ya-bot.herokuapp.com/status
