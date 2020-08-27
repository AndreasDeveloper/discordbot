// Manage / Add roles
function addRole(reaction, user) {
    console.log('testr');
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);

    if (reaction.message.id === '748326686592073828') {
        switch (name) {
            case '🥬':
                member.roles.add('748325430091841556');
                break
            case '☀️':
                member.roles.add('748325217704869958');
                break
        }
    }
};

// Manage / Remove roles
function removeRole(reaction, user) {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);

    if (reaction.message.id === '748326686592073828') {
        switch (name) {
            case '🥬':
                member.roles.remove('748325430091841556');
                break
            case '☀️':
                member.roles.remove('748325217704869958');
                break
        }
    }
};

// Export modules
module.exports = {
    addRole,
    removeRole
};