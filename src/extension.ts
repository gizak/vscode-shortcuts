'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Shortcuts } from './shortcuts';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    
    const shortcuts = new Shortcuts(vscode.workspace.getConfiguration('shortcuts'));
    shortcuts.show();

    context.subscriptions.push(shortcuts);
}

// this method is called when your extension is deactivated
export function deactivate() {

}