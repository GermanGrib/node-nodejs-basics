import {access, rename as nodeRename} from 'fs/promises'

const wrongFilePath = './files/wrongFilename.txt'
const properFilePath = './files/properFilename.md'
const errorMsg = 'FS operation failed'

const rename = async () => {
  // Write your code here
  const isWrongFileExist = await access(wrongFilePath).then(() => true).catch(() => false);
  const isProperFileExist = await access(properFilePath).then(() => true).catch(() => false);
  if (!isWrongFileExist || isProperFileExist) {
    throw new Error(errorMsg)
  }
  try {
    await nodeRename(wrongFilePath, properFilePath)
    
  } catch (err) {
    throw new Error(errorMsg)
  }
  
};

await rename();