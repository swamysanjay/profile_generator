
const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  'What is your nickname? ',
  'What sport do you play? ',
  'What food do you like? ',
  'What is the name of your best friend? ',
  'Where you and your friend like to travel? ',
  'Name places you have visited: '
];

let answers = [];

const nextQuestions = () => {
  rl.question(questions.shift(), answer => {
    answers.push(answer);
    if (0 === questions.length) {
      rl.close();
    }
    else {
      nextQuestions();
    }
  });
}

nextQuestions();

rl.on('close', () => {
  answers = {
    name: answers[0],
    sport: answers[1],
    food: answers[2],
    someone: answers[3],
    vacationSpot: answers[4],
    placesVisited: answers[5]
  };

  let paragraph = `
  ${answers.name} likes to play ${answers.sport}. ${answers.name} also loves ${answers.food}.
  ${answers.name} is friend with ${answers.someone}. ${answers.name} would love to travel to ${answers.vacationSpot}.`;
  
  console.log(paragraph);
})




rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});