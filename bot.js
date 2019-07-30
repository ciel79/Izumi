const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Izumi is online, darling!');
})

client.on('greeting', greeting => {
  if (greeting.content === 'Hewwo') {
    greeting.reply('Hello darling!);
    }
})

client.login(process.env.BOT_TOKEN);
