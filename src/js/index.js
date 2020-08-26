// Importing modules
require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
// Importing bot modules
const bot = require('./bot/bot');
const messaging = require('./bot/messaging');

// Prepare bot
client.on('ready', () => {
    bot.readyBot(client);
});

// Send message
client.on('message', message => {
    messaging.sendMsg(message);
});

// Setting up bot
client.login(process.env.DISCORD_BOT_TOKEN);