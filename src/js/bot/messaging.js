// Importing modules
const admin = require('./adminfunc');

// Variable
const prefix = '$';

// Greet new members
function greetMember(member) {
    member.guild.channels.cache.get(process.env.GENERAL_CHAT_ID).send(`Welcome ${member.user.username}.`);
}

// Sending messages
function sendMsg(message) {
    if (message.author.bot) return; // safety net
    if (message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hello') {
        message.reply('Hello');
    } else if (message.content.toLowerCase() === 'how are you?') {
        message.reply('Good.');
    } else if (message.content.startsWith(prefix)) {
        admin.kickMember(message);
    }
};

// Exporting modules
module.exports = {
    greetMember,
    sendMsg
};