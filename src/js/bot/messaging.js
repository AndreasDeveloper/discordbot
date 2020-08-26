// Sending message
function sendMsg(message) {
    if (message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hello') {
        message.reply('Hello');
    }
}

// Exporting modules
module.exports = {
    sendMsg
};