module.exports = {
    name: 'poll',
    description: 'Create a poll for users to vote on!',
    execute(message, args) {
        const question = args.join(' ');
        const embed = new MessageEmbed()
            .setTitle('Poll Time!')
            .setDescription(question)
            .setColor('#5cd1ff');
        message.channel.send({ embeds: [embed] }).then(sentMessage => {
            sentMessage.react('👍');
            sentMessage.react('👎');
        });
    },
};
