const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vscode = require('vscode');
const vscode_languageclient = require('vscode-languageclient');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	var config = vscode.workspace.getConfiguration("muon");
	
	var binaryPath = config.get("languageServerPath");
	if (!binaryPath) {
		vscode.window.showErrorMessage("Could not start Muon language server due to missing setting: muon.languageServerPath");
		return;
	}

	var args = config.get("languageServerArguments");
	if (!args) {
		vscode.window.showErrorMessage("Could not start Muon language server due to missing setting: muon.languageServerArguments");
		return;
	}

	var serverOptions = {
		command: binaryPath,
		args: [ args ]
	};

	var clientOptions = {
		documentSelector: [{ scheme: 'file', language: 'muon' }],
	};

	var client = new vscode_languageclient.LanguageClient("muonLanguageServer", "Muon language server", serverOptions, clientOptions);
	client.start();
}

function deactivate() {
}

module.exports = {
	activate,
	deactivate
}
