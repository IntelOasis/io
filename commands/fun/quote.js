const axios = require('axios');

module.exports = {
    name: 'quote',
    description: 'Get an inspirational quote!',
    async execute(message, args) {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            const quote = response.data.content;
            const author = response.data.author;
            message.channel.send(`"${quote}" - ${author}`);
        } catch (error) {
            console.error(error);
            message.channel.send('Failed to fetch a quote.');
        }
    },
};
