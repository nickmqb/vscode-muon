# vscode-muon

This VS Code extension provides syntax highlighting and interactive language features for the [Muon programming language](https://github.com/nickmqb/muon), such as symbol search, go to definition and as-you-type diagnostics. Examples:

Symbol search  
![alt text](https://github.com/nickmqb/vscode-muon/blob/master/symbol-search.gif "Symbol search")

Go to definition  
![alt text](https://github.com/nickmqb/vscode-muon/blob/master/go-to-definition.gif "Go to definition")

Error feedback  
![alt text](https://github.com/nickmqb/vscode-muon/blob/master/error-feedback.gif "Error feedback")

Language features are provided by the [Muon language server](https://github.com/nickmqb/muon/blob/master/language_server/README.md).

### Getting started

1. Clone [the Muon repo](https://github.com/nickmqb/muon) and [bootstrap the compiler](https://github.com/nickmqb/muon/blob/master/docs/getting_started.md).
2. [Build the language server](https://github.com/nickmqb/muon/blob/master/language_server/README.md#Build) as described in the 'Build' section. You do not need to follow the steps in the 'Run' section, the VS Code extension will run the language server automatically.
3. Download the [VS Code `.vsix` extension file](https://github.com/nickmqb/vscode-muon/releases/download/v0.1.0/vscode-muon-0.1.0.vsix). Alternatively, [build the extension yourself](#extension-development).
4. Start VS Code. Bring up command palette (`Ctrl + Shift + P`), select `Extensions: Install from VSIX...` and select the `.vsix` file.
5. Go to settings (UI). Filter by 'muon', find the setting 'Muon: Language Server Path', and set it to the full path of the language_server binary that you built in step 2. E.g.: `C:/language_server.exe`
6. Follow the steps below for each project.

### Project configuration

1. In VS Code, open the workspace for the project that you're going to work on. If you don't have a workspace for the project, create one.
2. Go to workspace settings (UI). Filter by 'muon', find the setting 'Muon: Language Server Arguments', and set it to: `--args [path]`, where path is the path to a `.args` file that would normally be passed to the compiler ([read more about .args files here](https://github.com/nickmqb/muon/blob/master/docs/getting_started.md#args-files)). E.g.: `--args hello_world.args`  
	_Note_: Relative .args paths and relative source file paths (inside the .args file) will be interpreted as being relative to the first folder of your workspace. Language features like symbol search only work for source files that are listed in the .args file. Syntax highlighting works for all `.mu` files.
3. Restart VS Code.
4. The extension is now ready for use! Open a `.mu` file to see syntax highlighting in action. Select 'Go to Symbol in Workspace...' (`Ctrl + T`) for symbol search.
5. If you make any changes to the .args file, restart VS Code so the extension will pick up the changes.

### Troubleshooting

The setting 'Muon: Language Server Arguments' can be used to specify additional flags to help troubleshoot any issues. If you specify the command line argument `--log-stderr`, the server will log detailed status messages to `stderr`: these can be viewed in the "output" panel in VS Code (select 'Muon language server' from the dropdown in the top right corner of the panel). If you specify `--log-file`, the server will log status messages to the file `muon_language_server.log` in the current directory. If you find any bugs, [please let me know](https://github.com/nickmqb/vscode-muon/issues).

### Extension development

You can also run the extension directly from the source in this repo. You won't need to download and install the `.vsix` file in that case, though the other steps above still apply.

1. Install [node.js](https://nodejs.org/).
2. Clone the repo.
3. Navigate to the repo directory, and run: `npm update`
4. Open the repo folder in VS Code.
5. Press F5 to start another VS Code instance which will have the extension enabled.
