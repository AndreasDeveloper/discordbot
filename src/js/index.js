// Importing modules
require('dotenv').config();
const { Client, WebhookClient } = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'REACTION']
});
// Importing bot modules
const bot = require('./bot/bot');
const messaging = require('./bot/messaging');
const role = require('./bot/rolefunc');

// Prepare bot
client.on('ready', () => {
    bot.readyBot(client);
});

// Greet new member
client.on('guildMemberAdd', member => {
    messaging.greetMember(member);
});

// Send message
client.on('message', message => {
    messaging.sendMsg(message);
});

// Managing Roles

// Add roles
client.on('messageReactionAdd', (reaction, user) => {
    role.addRole(reaction, user);
});
// Remove roles
client.on('messageReactionRemove', (reaction, user) => {
    role.removeRole(reaction, user);
});


// Setting up bot
client.login(process.env.DISCORD_BOT_TOKEN);