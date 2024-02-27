process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (!process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}\n`);
    process.exit();
  });

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}\n`);
    process.exit();
  });
}
