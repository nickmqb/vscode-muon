# vscode-muon

This VSCode extension provides syntax highlighting and interactive language feature for the Muon programming language, such as symbol search, go to definition and as-you-type diagnostics. Examples:

![alt text](https://github.com/nickmqb/vscode-muon/blob/master/symbol-search.gif "Symbol search")
![alt text](https://github.com/nickmqb/vscode-muon/blob/master/go-to-definition.gif "Go to definition")
![alt text](https://github.com/nickmqb/vscode-muon/blob/master/error-feedback.gif "Error feedback")

Language features are provided using the Muon language server ([learn more](https://github.com/nickmqb/muon/blob/master/language_server/README.md)). Disclaimer: the language server is in a pre-alpha state.

### Getting started

1. Clone [the Muon repo](https://github.com/nickmqb/muon) and [bootstrap the compiler](https://github.com/nickmqb/muon/blob/master/docs/getting_started.md).
2. [Build the language server](https://github.com/nickmqb/muon/blob/master/language_server/README.md#Build) as described in the 'Build' section. You do not need to follow the steps in the 'Run' section, the VSCode extension will run the language server automatically.
3. Download the [VSCode `.vsix` extension file](https://github.com/nickmqb/vscode-muon/releases/download/v0.1.0/vscode-muon-0.1.0.vsix). Alternatively, [build the extension yourself](#extension-development).
4. Start VSCode. Bring up command palette (`Ctrl + Shift + P`), select `Extensions: Install from VSIX...` and select the `.vsix` file.
5. Go to settings (UI). Filter by 'muon', find the setting 'Muon: Language Server Path', and set it to the full path of the language_server binary that you built in step 2. E.g.: `C:/language_server.exe`
6. Follow the steps below for each project.

### Project configuration

1. In VSCode, open the workspace for the project that you're going to work on. If you don't have a workspace for the project, create one.
2. Go to workspace settings (UI). Filter by 'muon', find the setting 'Muon: Language Server Arguments', and set it to: `--args [path]`, where path is the path to a `.args` file that would normally be passed to the compiler ([read more about .args files here](https://github.com/nickmqb/muon/blob/master/docs/getting_started.md#args-files)). E.g.: `--args hello_world.args`
	*Important!* The path must be a relative path that does not contain any spaces. It must be relative to the first folder of your workspace. Also, all source file paths in the .args file must be relative paths. Language features like symbol search only work for source files that are listed in the .args file. Syntax highlighting works for all `.mu` files.
3. Restart VSCode.
4. The extension is now ready for use! Open a `.mu` file to see syntax highlighting in action. Select 'Go to Symbol in Workspace...' (`Ctrl + T`) for symbol search.
5. If you make any changes to the .args file, restart VSCode so the extension will pick up the changes.

### Troubleshooting

The server prints status messages to `stderr`, these can be viewed in the "output" panel in VSCode (select 'Muon language server' from the dropdown in the top right corner of the panel).

Further error reporting for language server errors/configuration errors is still TODO (and not great at the moment: currently the language server mostly just abandons upon encountering an unexpected input/situation). Your best bet is to double check that all paths are configured properly. If the problem persists, feel free to file a bug.

### Extension development

You can also run the extension directly from the source in this repo. You won't need to download and install the `.vsix` file in that case, though the other steps above still apply.

1. Install [node.js](https://nodejs.org/).
2. Clone the repo.
3. Navigate to the repo directory, and run: `npm update`
4. Open the repo folder in VSCode.
5. Press F5 to start another VSCode instance which will have the extension enabled.