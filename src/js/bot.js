// Imports
require('dotenv').config();
const { Client } = require('discord.js');

const client = new Client();

// Preparing bot
client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
});

// Sending message
client.on('message', message => {
    if (message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hello') {
        message.reply('Hello');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);