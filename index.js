const fs = require('fs');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const path = require('path');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();

const funCommandsPath = path.join(__dirname, 'commands', 'fun');
const commandFiles = fs.readdirSync(funCommandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(funCommandsPath, file);
    const command = require(filePath);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready! The bot is online.');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command!');
    }
});

client.login(process.env.DISCORD_TOKEN);
