import {createReadStream} from 'fs'
import {createHash} from 'crypto'

const fileToReadPath = './files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
  // Write your code here
  const hash = createHash('sha256')
  const stream = createReadStream(fileToReadPath);
  stream.on('data', chunk => hash.update(chunk));
  stream.on('end', () => {
    const hexHash = hash.digest('hex');
    console.log(hexHash);
  });
  stream.on('error', error => console.error(error.message));
};

await calculateHash();