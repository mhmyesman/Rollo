const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) {
		return;
	}
	// next i want to get the role they ask for

	const requestedRole = message.content.substring(2);
	const role = message.guild.roles.cache.find(role => role.name === requestedRole);

	if (!role) {
		message.channel.send('Cannot find the role: ' + requestedRole);
		return;
	}

	// now that i have the role i want to either add it or remove it

	const Rollo = message.guild.roles.cache.find(role => role.name === 'Rollo');

	if (role.position > Rollo.position) {
		message.channel.send('Cannot handle a role higher than mine!');
		return;
	}

	switch (message.content.charAt(1)) {
	case '+': {
		message.member.roles.add(role);
		message.channel.send('Added the requested role.');
		break;
	}
	case '-': {
		message.member.roles.remove(role);
		message.channel.send('Removed the requested role.');
		break;
	}
	}
});


client.login(config.token);
