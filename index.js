const Discord = require('discord.');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!");
})

client.login('bot-token')
