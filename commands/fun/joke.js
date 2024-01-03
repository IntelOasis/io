const axios = require('axios'); // Make sure to install axios with `npm install axios`

module.exports = {
    name: 'joke',
    description: 'Tell a random joke!',
    async execute(message, args) {
        try {
            const response = await axios.get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' }
            });
            message.channel.send(response.data.joke);
        } catch (error) {
            console.error(error);
            message.channel.send('Failed to fetch a joke.');
        }
    },
};
