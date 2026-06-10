const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const main = async () => {
  // Get user input using await
  const name = await input('');

  console.log(`Hello, ${name}!`);

  const inty = await input('');

  console.log(parseInt(inty) + 4);

  rl.close();
};

// Call the main async function
main();

// quite a bit of work to get input to work :(
// this is why java/python may be better for this specifically but that isn't totally necessary
// see how well html/css/JS can be taught within a decent time & go from there, leave this for later