let story = '';

module.exports = {
    name: 'storytime',
    description: 'Add to the ongoing story!',
    execute(message, args) {
        const storyPart = args.join(' ');

        if (!storyPart) {
            return message.reply('Please add to the story!');
        }

        story += ` ${storyPart}`;
        message.channel.send(`Current story: ${story}`);

        if (args.includes('end')) {
            message.channel.send(`The end of the story: ${story}`);
            story = ''; // Reset story
        }
    },
};
