const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Izumi is online, darling!');
})

client.on('message', message => {
  if (message.content === 'Hewwo') {
    message.reply('Hello darling!);
    }
})

client.login(process.env.BOT_TOKEN);
