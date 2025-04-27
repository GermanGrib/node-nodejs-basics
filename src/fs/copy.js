import {access, cp} from 'fs/promises';

const folderPath = "./files"
const copyFolder = "./files_copy"
const errorMsg = "FS operation failed"

const copy = async () => {
  try{
    await access(folderPath)
    
    try{
      await access(copyFolder)
      throw Error(errorMsg)
    }catch(err){
      if (err.code !== 'ENOENT') {
        throw Error(errorMsg);
      }
    }
    await cp(folderPath, copyFolder, {recursive: true})
  }catch(e){
   throw Error(errorMsg)
  }
};

await copy();
