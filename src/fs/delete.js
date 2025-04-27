import {access, rm} from 'fs/promises'


const fileToDeletePath = './files/fileToRemove.txt'
const errorMsg = 'FS operation failed'

const remove = async () => {
  // Write your code here
  const isFileToDeleteExist = await access(fileToDeletePath).then(() => true).catch(() => false)
  if (!isFileToDeleteExist) {
    throw new Error(errorMsg)
  }
  try {
    await rm(fileToDeletePath)
  } catch (err) {
    throw new Error(err.message)
  }
};

await remove();