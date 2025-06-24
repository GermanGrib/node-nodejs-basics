import {existsSync, writeFile} from 'node:fs';

const data = 'I am fresh and young'
const file = './files/fresh.txt';
const errorMsg = 'FS operation failed'

const create = async () => {
  // Write your code here
  const exist = existsSync(file);
  if (exist) {
    throw Error(errorMsg);
  } else {
    try {
      await writeFile(file, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      
    } catch (err) {
      throw err;
    }
  }
};

await create();