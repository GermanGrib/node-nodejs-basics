const parseArgs = () => {
  // Write your code here
  const commandLineArgs = process.argv.slice(2);
  if (commandLineArgs.length > 0) {
    let result = ''
    for (let i = 0; i < commandLineArgs.length; i += 2) {
      const key = commandLineArgs[i].replace('--', '')
      const value = commandLineArgs[i + 1]
      const symbols = i + 2 < commandLineArgs.length ? ', ' : ''
      result += `${key} is ${value}${symbols}`
    }
    console.log(result);
  }
};

parseArgs();