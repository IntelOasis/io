const words = ['apple', 'banana', 'orange', 'strawberry', 'grape']; // Sample word list
let chosenWord = '';
let displayWord = '';
let attempts = 0;

module.exports = {
    name: 'hangman',
    description: 'Play a game of hangman!',
    execute(message, args) {
        if (args[0] === 'start') {
            chosenWord = words[Math.floor(Math.random() * words.length)];
            displayWord = '_ '.repeat(chosenWord.length).trim();
            attempts = 6; // Number of allowed incorrect guesses
            message.channel.send(`Hangman game started! Guess the word: ${displayWord}`);
        } else if (chosenWord && args[0]) {
            const guess = args[0].toLowerCase();
            let updatedDisplayWord = '';

            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === guess) {
                    updatedDisplayWord += guess + ' ';
                } else {
                    updatedDisplayWord += displayWord[i * 2] + ' ';
                }
            }

            if (displayWord === updatedDisplayWord) {
                attempts--;
                message.channel.send(`Wrong guess! Attempts left: ${attempts}`);
            } else {
                displayWord = updatedDisplayWord;
                message.channel.send(`Correct guess! ${displayWord}`);
            }

            if (attempts <= 0) {
                message.channel.send(`Game over! The word was: ${chosenWord}`);
                chosenWord = '';
            } else if (!displayWord.includes('_')) {
                message.channel.send(`Congratulations! You guessed the word: ${chosenWord}`);
                chosenWord = '';
            }
        } else {
            message.channel.send('Type `!hangman start` to play or guess a letter.');
        }
    },
};
