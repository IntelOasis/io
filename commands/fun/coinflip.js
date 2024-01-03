module.exports = {
    name: 'coinflip',
    description: 'Flip a coin.',
    execute(message, args) {
        const flip = Math.random() < 0.5 ? 'heads' : 'tails';
        message.reply(`The coin landed on ${flip}!`);
    },
};
