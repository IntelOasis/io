require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready! The bot is online.');
});

// Login to Discord with your app's token
client.login(process.env.DISCORD_TOKEN);

// Listen for messages
client.on('messageCreate', message => {
    if (message.author.bot) return; // Ignore messages from bots

    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch'); // You might need to install this package

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
	console.log('Ready! The bot is online.');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    // Call Wit.AI API
    const response = await fetch(`https://api.wit.ai/message?q=${encodeURIComponent(message.content)}`, {
        headers: { 'Authorization': `Bearer ${process.env.WIT_AI_TOKEN}` }
    });
    const jsonResponse = await response.json();

    // Handle the response from Wit.AI
    // This will depend on your specific use case and the structure of your Wit.AI app
    const reply = jsonResponse._text; // This is an example, you'll need to parse the response correctly
    message.reply(reply);
});

client.login(process.env.DISCORD_TOKEN);
