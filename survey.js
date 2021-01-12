const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  rl.question("what is this?", (answer1) => {
    rl.question("what is that?", (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer} ${answer1} ${answer3} `);
      rl.close();
    })
  })
});
