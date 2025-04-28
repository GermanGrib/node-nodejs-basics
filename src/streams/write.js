import {createWriteStream} from 'fs'

const toWriteFilePath = './files/fileToWrite.txt'

const write = async () => {
  // Write your code here
  const writableStream = createWriteStream(toWriteFilePath, {flags: 'a'});
  process.stdin.pipe(writableStream);
};

await write();