module.exports = {
    name: 'dev',
    aliases: ['development'],
    usage: 'dev',
    description: 'Testing commands under development',
    permissions: [],
    cooldown: false, 
    type: ['MESSAGE'],
    async execute(client, message, args){
        return message.reply(`No commands under development`);
        // Testing command
        // ...
    }
}
