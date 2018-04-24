// Output
process.stdout.write ('prompt >');

// stdin

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd'){
    process.stdout.write(process.cwd());
  }
  process.stdout.write('You Typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
