# Electron Webpack Typescript Template

You can jump start your Electron project with this template.

# Installation

```bash
# Clone the repository into the current directory.
git clone https://github.com/cbenriquez/electron-webpack-typescript-template .

# Install all node.js dependencies.
npm install

# Erase git information.
npx rimraf .git
```

# Packages

These are the basic necessities for using Electron.

- [electron](https://www.npmjs.com/package/electron): Framework for building desktop applications.
- [electron-builder](https://www.npmjs.com/package/electron-builder): Tool for packing electron apps into distributable formats.
- [typescript](https://www.npmjs.com/package/typescript): Command line interface for typescript.
- [webpack](https://www.npmjs.com/package/webpack): Bundler for javascript files.
- [webpack-cli](https://www.npmjs.com/package/webpack-cli): Command line interface for webpack.
- [ts-loader](https://www.npmjs.com/package/ts-loader): Typescript loader for webpack.
- [rimraf](https://www.npmjs.com/package/rimraf): Command line interface for removing files.

# Extra Behaviors

These behaviors are intended to boost productivity.

- Messages sent to the Console API on the renderer will be replicated in the main Electron process. Reduces need to open the Dev Console.
