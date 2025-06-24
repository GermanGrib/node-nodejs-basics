import {join} from 'path';
import {createReadStream, createWriteStream} from 'fs';
import {createUnzip} from 'zlib';

const compressedFileName = join(import.meta.dirname, 'files', 'archive.gz')
const unzipToFile = join(import.meta.dirname, 'files', 'fileToCompress.txt')

const decompress = async () => {
  // Write your code here
  const inp = createReadStream(compressedFileName)
  const out = createWriteStream(unzipToFile)
  
  inp.pipe(createUnzip()).pipe(out)
};

await decompress();