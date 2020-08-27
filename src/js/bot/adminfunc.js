// Imports
require('dotenv').config();
const { WebhookClient } = require('discord.js');
const webcli = new WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);

// Variable
const prefix = '$';

// Kick member
async function manipulateMember(message) {
    // Destructure command user inserts & trim whitespace
    const [cmd_name, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);

    // Kick member functionality
    if (cmd_name === 'kick') {
        // Checks
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not have permission.');
        if (args.length === 0) return message.reply('Provide an ID.');

        const member = message.guild.members.cache.get(args[0]);
        if (member) {
            member.kick('Kicked because why not.').then(res => {
                message.channel.send(`${member} was kicked, because why not.`);
            }).catch(err => {
                message.channel.send('No permission.');
            });
        } else {
            message.channel.send('Member not found.');
        }
    // Ban member functionality
    } else if (cmd_name === 'ban') {
        // Checks
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You do not have permission.');
        if (args.length === 0) return message.reply('Provide an ID.');
        
        try {
            const user = await message.guild.members.ban(args[0]);
            message.channel.send(`${user} was banned, because i say so.`);
        } catch (err) {
            console.log(err);
            message.channel.send(err.message);
        }
    } else if (cmd_name === 'announce') {
        const msg = args.join(' ');
        console.log(msg);
        webcli.send('test');
    }
}

// Export modules
module.exports = {
    manipulateMember
};