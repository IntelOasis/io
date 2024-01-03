const axios = require('axios');

module.exports = {
    name: 'wit-parse',
    description: 'Parse your sentence using Wit.ai',
    async execute(message, args) {
        const userQuery = args.join(' ');
        try {
            const response = await axios.get(`https://api.wit.ai/message?v=20230129&q=${encodeURIComponent(userQuery)}`, {
                headers: { 'Authorization': `Bearer ${process.env.WIT_AI_TOKEN}` }
            });
            const intent = response.data.intents.length > 0 ? response.data.intents[0].name : 'No intent recognized';
            message.channel.send(`Intent: ${intent}`);
            // You can add more parsing logic here depending on your Wit.ai app setup
        } catch (error) {
            console.error(error);
            message.channel.send('There was an error parsing your sentence.');
        }
    },
};
