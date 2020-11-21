# npm-react-pkg-template

Quickly and easily spin up a new React component package to publish on npm.

## Getting started

This repository serves as a template repository. To get started, click the `Use this template` button. This will create a copy of the package repository on your own Github account.

From there, clone your new repo to your local machine:

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY-NAME.git
```

Open the project in your terminal. Locate the `package.json` file, and open it. Update the `name`, `repository`, `author`, `bugs.url`, and `homepage` properties.

On the command line, change directories into your project, and install the project dependencies:

```bash
cd /path/to/your/project
npm install
```

To start development, simply type `npm run dev`, which will start Storybook. Add new components, packages, etc. as needed!

## Building & publishing your package

Once you have completed development, you can build your package an publish it to npm for use in your projects.

Typically, this looks something like this:

```bash
npm run build
npm version major/minor/patch
npm publish
```
