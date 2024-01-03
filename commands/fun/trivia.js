const axios = require('axios'); // Make sure to install axios with `npm install axios`

module.exports = {
    name: 'trivia',
    description: 'Start a trivia game!',
    async execute(message, args) {
        try {
            const response = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple');
            const question = response.data.results[0];
            const answers = [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5);
            const embed = new MessageEmbed()
                .setTitle('Trivia Time!')
                .setDescription(question.question)
                .addFields(answers.map((answer, index) => ({ name: `\u200B`, value: `${index + 1}) ${answer}`, inline: false })))
                .setColor('#5cd1ff');
            const triviaMessage = await message.channel.send({ embeds: [embed] });

            // React with number emojis for answer options
            const reactions = ['1️⃣', '2️⃣', '3️⃣', '4️⃣'];
            for (let i = 0; i < answers.length; i++) {
                await triviaMessage.react(reactions[i]);
            }
        } catch (error) {
            console.error(error);
            message.channel.send('Failed to fetch a trivia question.');
        }
    },
};
