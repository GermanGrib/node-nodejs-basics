import {Worker} from 'worker_threads'
import {cpus} from 'os'
import {join} from 'path';

const performCalculations = async () => {
  // Write your code here
  const cores = cpus()
  const workers = []
  const workersPromises = cores.map((_, inx) => {
    return new Promise((resolve) => {
      const worker = new Worker(join(import.meta.dirname, 'worker.js',))
      workers.push(worker)
      worker.postMessage(10 + inx)
      
      worker.once('message', (msg) => {
        resolve(msg)
      })
      worker.once('error', (err) => {
        resolve({status: 'error', data: null})
      })
    })
  })
  const result = await Promise.all(workersPromises)
  console.log(result)
  workers.forEach(worker => {
    worker.terminate()
  })
};

await performCalculations();