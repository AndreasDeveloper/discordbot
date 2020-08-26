// Variable
const prefix = '$';

// Kick member
function manipulateMember(message) {
    // Destructure command user inserts & trim whitespace
    const [cmd_name, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);

    // Kick member functionality
    if (cmd_name === 'kick') {
        if (args.length === 0) return message.reply('Provide an ID.');
        const member = message.guild.members.cache.get(args[0]);
        if (member) {
            member.kick('Kicked because why not.');
            message.channel.send('Kicked because why not.');
        } else {
            message.channel.send('Member not found.');
        }
    } else if (cmd_name === 'ban') {
        message.channel.send('Banned');
    }
}

// Export modules
module.exports = {
    manipulateMember
};