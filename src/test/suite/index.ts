import * as path from 'path';
import {runCLI} from 'jest';

export function run(): Promise<void> {
	const testsRoot = path.resolve(__dirname, '..');
	
	return new Promise(async (resolve, reject) => {
		try {
			const result = await runCLI({} as any, [testsRoot]);
			if (result.results.numFailedTests > 0) {
				reject(new Error('Tests failed'));
			} else {
				resolve();
			}
		} catch (err) {
			reject(err);
		}
	});
}
