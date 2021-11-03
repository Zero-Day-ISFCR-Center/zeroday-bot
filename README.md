# zeroday-bot
The Discord Bot for Zero Day ISFCR Center Discord Server

Created using [discord.js](https://discord.js.org) V13

## Getting Started

* Create a discord developer account at [discord developers](https://discord.com/developers).

* Create an application with a bot and aquire its token.

* Create a .env file in config of the format of [example.env](config/example.env). Check config [README](config/README.md).

```
NODE_ENV    = [production or development]
PRO_TOKEN   = [PRODUCTION-BOT-TOKEN]
PRO_BOTID   = [PRODUCTION-BOT-ID]
PRO_SERVER  = [PRODUCTION-SERVER-ID]
DEV_TOKEN   = [DEVELOPMENT-BOT-TOKEN]
DEV_BOTID   = [DEVELOPMENT-BOT-ID]
DEV_SERVER  = [DEVELOPMENT-SERVER-ID]
```

`NODE_ENV`    = Set to `production` or `development`

`TOKEN` and `DEV_TOKEN` can be the same, requried for running the bot

`PROBOTID` and `DEVBOTID` can be same. 
Used along with `TEST_SERVER` for [registering and deregistering slash commands](src/deploy-commands.js)

## Running the bot

* `npm run start` to deploy the bot with node 

* `npm run dev` to deploy the bot with nodemon for development

* `npm run deploy` to reregister slash commands. _*Requires some work_
