import {access, readdir} from 'fs/promises'

const path = './files'
const errorMsg = 'FS operation failed'

const list = async () => {
  // Write your code here
  const isFileFolderExist = await access(path).then(() => true).catch(() => false)
  if (!isFileFolderExist) {
    throw new Error(errorMsg)
  }
  
  try {
    const files = await readdir(path);
    console.log(files);
  } catch (err) {
    console.error(err);
  }
};

await list();