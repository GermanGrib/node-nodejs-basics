const stringToSearch = 'RSS_'

const parseEnv = () => {
  // Write your code here
  for (const [key, value] of Object.entries(process.env)) {
    if (key.slice(0, 4) === stringToSearch) {
      console.log(`${key}=${value}`);
    }
  }
};

parseEnv();