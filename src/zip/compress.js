import {createGzip} from 'zlib'
import {join} from 'path'
import {createReadStream, createWriteStream} from 'fs'

const pathToFile = join(import.meta.dirname, 'files', 'fileToCompress.txt')
const compressedFileName = join(import.meta.dirname, 'files', 'archive.gz')

const compress = async () => {
  // Write your code here
  const inp = createReadStream(pathToFile)
  const out = createWriteStream(compressedFileName)
  
  inp.pipe(createGzip()).pipe(out)
};

await compress();