module.exports = {
    name: 'riddle',
    description: 'Solve a riddle!',
    execute(message, args) {
        // For simplicity, using a static riddle. You can integrate with an API for random riddles.
        const riddle = {
            question: "What has keys but can't open locks?",
            answer: "A piano."
        };
        message.channel.send(riddle.question);
        // Logic for users to guess the answer can be implemented
    },
};
