// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { base64Decode, base64Encode } from './commands/base64';
import { textCommand } from './commands/command';
import { md5 } from './commands/md5';
import { sha256 } from './commands/sha256';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let toBase64Command = vscode.commands.registerCommand('hash-utils.toBase64', () => textCommand(base64Encode));
	let fromBase64Command = vscode.commands.registerCommand('hash-utils.fromBase64', () => textCommand(base64Decode));
	let md5Command = vscode.commands.registerCommand('hash-utils.toMD5', () => textCommand(md5));
	let sha256Command = vscode.commands.registerCommand('hash-utils.toSHA256', () => textCommand(sha256));

	context.subscriptions.push(toBase64Command);
	context.subscriptions.push(fromBase64Command);
	context.subscriptions.push(md5Command);
	context.subscriptions.push(sha256Command);
}

// this method is called when your extension is deactivated
export function deactivate() {}
