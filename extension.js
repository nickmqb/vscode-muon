const vscode = require("vscode");
const vscode_languageclient = require("vscode-languageclient");

class FailFastErrorHandler {
    error(_error, _message, count) {
        return ErrorAction.Shutdown;
    }
    closed() {
		vscode.window.showErrorMessage("The Muon language server has crashed");
		return CloseAction.DoNotRestart;
    }
}

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

	var failFast = (!!config.get("failFast")) || false;

	var serverOptions = {
		command: binaryPath,
		args: [ args ]
	};

	var clientOptions = {
		documentSelector: [{ scheme: 'file', language: 'muon' }],
		errorHandler: failFast ? new FailFastErrorHandler() : null,
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
