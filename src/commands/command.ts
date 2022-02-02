import * as vscode from "vscode";

export const textCommand =  async (method: Function) => {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const document = editor.document;
        const selections = editor.selections;
        // Get the word within the selection
        
        for (const selection of selections) {
            const word = document.getText(selection);
            const encoded = method(word);
            await editor.edit(editBuilder => {
                editBuilder.replace(selection, encoded);
            }, { undoStopBefore: false, undoStopAfter: false });
        }
    }
};