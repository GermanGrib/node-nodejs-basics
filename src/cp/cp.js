import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
	// Create path to the script.js file in the same directory
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const scriptPath = join(__dirname, 'files', 'script.js');
	const childProcess = spawn('node', [scriptPath, ...args], {
		stdio: ['pipe', 'pipe', 'pipe', 'ipc']
	});

	process.stdin.pipe(childProcess.stdin);

	childProcess.stdout.pipe(process.stdout);

	childProcess.on('error', (err) => {
		console.error('Child error:', err);
	});

	childProcess.on('exit', (code, signal) => {
		if (code !== null) {
			console.log(`Exited ${code}`);
		} else {
			console.log(`Child terminated ${signal}`);
		}
	});

	return childProcess;
};
// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
