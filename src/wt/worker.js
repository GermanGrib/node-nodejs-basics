import {isMainThread, parentPort, Worker} from 'worker_threads'

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  if (isMainThread) {
    const worker = new Worker(new URL(import.meta.url));
    const number = 31
    
    worker.postMessage(number)
    
    worker.on('message', message => {
      console.log(message, 'Result from worker')
    })
  } else {
    parentPort.once('message', number => {
      const result = nthFibonacci(number)
      parentPort.postMessage(result)
    })
  }
};

sendResult();