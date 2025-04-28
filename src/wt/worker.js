import {isMainThread, parentPort} from 'worker_threads'

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  if (!isMainThread) {
    parentPort.on('message', (number) => {
      try {
        parentPort.postMessage({status: 'resolved', data: nthFibonacci(number)})
      } catch {
        parentPort.postMessage({status: 'error', error: null})
      }
    })
  }
};

sendResult();