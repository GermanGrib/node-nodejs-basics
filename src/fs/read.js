import {access, readFile} from 'fs/promises';

const errorMsg = 'FS operation failed'
const fileToReadPath = './files/fileToRead.txt'

const read = async () => {
  // Write your code here
  const isFileToReadExist = await access(fileToReadPath).then(() => true).catch(() => false)
  if (!isFileToReadExist) {
    throw new Error(errorMsg)
  }
  
  try {
    const fileData = await readFile(fileToReadPath, {encoding: 'utf8'})
    console.log(fileData)
    
  } catch (err) {
    console.error(err.message)
  }
};

await read();