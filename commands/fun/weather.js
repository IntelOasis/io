const axios = require('axios');
const { OPENWEATHER_API_KEY } = process.env; // Ensure you have this in your .env file

module.exports = {
    name: 'weather',
    description: 'Get the current weather for a location!',
    async execute(message, args) {
        const location = args.join(' ');
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${OPENWEATHER_API_KEY}&units=metric`);
            const weather = response.data;
            const description = weather.weather[0].description;
            const temp = weather.main.temp;
            message.channel.send(`Weather in ${location}: ${description} with a temperature of ${temp}°C`);
        } catch (error) {
            console.error(error);
            message.channel.send('Failed to fetch the weather.');
        }
    },
};
