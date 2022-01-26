import * as vscode from "vscode";

export const textCommand =  (method: Function) => {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const document = editor.document;
        const selection = editor.selection;

        // Get the word within the selection
        const word = document.getText(selection);
        const encoded = method(word);
        editor.edit(editBuilder => {
            editBuilder.replace(selection, encoded);
        });
    }
};