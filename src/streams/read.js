import {createReadStream} from 'fs'

const fileToReadPath = './files/fileToRead.txt'

const read = async () => {
  // Write your code here
  const readStream = createReadStream(fileToReadPath, {encoding: 'utf8'});
  readStream.pipe(process.stdout);
};

await read();