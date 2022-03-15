const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower. In other words, tell us what you are amazing at! Please finish the rest of this sentence: You can... ', (answer7) => {
              console.log(`${answer1} is a pro at ${answer2}. While showing complete mastery of ${answer2}, you will find ${answer1} often listening to ${answer3}. So what does such a gifted person fuel themselves with? Simple, ${answer4}. Obviously. On the side of this delicious dish, ${answer1} will add ${answer5} to keep things interesting. Of course, everyone needs some downtime, and when ${answer1} is relaxing, you can find them watching ${answer6} on tv. People often ask, 'Is there anything this person can't do?' Nobody knows. What we do know though is that ${answer1} can ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
