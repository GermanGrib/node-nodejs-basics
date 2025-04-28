import {Transform} from 'stream';

const transform = async () => {
  // Write your code here
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const text = chunk.toString();
      const reversedText = text.split('').reverse().join('');
      callback(null, reversedText);
    }
  });
  
  process.stdin
    .pipe(reverseTransform)
    .pipe(process.stdout);
};

await transform();