module.exports = {
    name: 'compliment',
    description: 'Give someone a compliment.',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply("You need to tag a user in order to compliment them!");
        }

        const compliments = [
            "You're an awesome friend.",
            "You light up the room.",
            "You deserve a hug right now.",
            "You should be proud of yourself.",
            "You're more helpful than you realize.",
            "You have a great sense of humor.",
            "You've got an awesome sense of style.",
            "You are really courageous.",
            "Your kindness is a balm to all who encounter it.",
            "On a scale from 1 to 10, you're an 11."
        ];

        const compliment = compliments[Math.floor(Math.random() * compliments.length)];
        const taggedUser = message.mentions.users.first();

        message.channel.send(`${taggedUser.username}, ${compliment}`);
    },
};
