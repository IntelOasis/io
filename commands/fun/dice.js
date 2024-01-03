module.exports = {
    name: 'dice',
    description: 'Roll a dice.',
    execute(message, args) {
        const roll = Math.floor(Math.random() * 6) + 1; // Simulates rolling a 6-sided dice
        message.reply(`🎲 You rolled a ${roll}!`);
    },
};

