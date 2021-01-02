---
title: 'Configure ESLint, Prettier, and Flow in VS Code for React Development'
date: '2017-05-08'
categories: react
tags: [react, prettier, flow, eslint, vscode, react-native]
---

### Intro

This short guide will provide you a consistent and reusable development workflow for all [**React**][1]/[**React Native**][2] projects. The more effort you put into writing quality code, the less time you spend on debugging. You can increase your code quality and reduce the time spent on debugging with a consistent development workflow. In this guide I will show you how to configure your editor to handle your code formatting, linting, and type checking.

Test Driven Development and a preconfigured build configuration are recommended. I won't go into much detail on either of these. I recommend [**create-react-app**][4] for the web and using the [**React Native CLI**][5] for mobile development. Both require zero build configuration. [**Jest**][6] is fantastic for testing [**React**][1].

### Installation

To get started download and install [**VS Code**][7]. You can launch [**VS Code**][8] from the terminal, [**here's how**][9].

> I use VS Code for my editor of choice. If you use Sublime Text or Atom this article still applies but you'll need to use the relevant text editor extensions for your text editor.

Let's generate our app without any configuration! For this article we'll use the [**React Native CLI**][5], but you can follow along with [**create-react-app**][4] as well.

`$ react-native init SweetApp && cd SweetApp`

Open the SweetApp project with [**VS Code**][8].

`$ code .`

Once you have [**VS Code**][8] open, click the Extensions button in the Activity Bar. Install the following extensions:

### ESLint Setup

We will install [**ESLint**][10] using Airbnb's linter rules. Refer to [**Airbnb's JavaScript Github Repo**][11] for the installation instructions.

Then install [**babel-eslint**][12]
`$ npm install babel-eslint --save-dev`

You should now see an `.eslintrc` file in your project. Open the `eslintrc` file and configure it like so:

![][13]

### Prettier Setup

We will configure Prettier to format our code based on our ESLint rules.

First we need to install [**prettier-eslint**][14].

`$ npm install prettier-eslint --save-dev`

We want [**VS Code**][8] to format our code using [**Prettier**][15] after saving a file.

Press `CMD + ,` if you're on a Mac to open your [**VS Code Workspace Settings**][16] then add the following:

    // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.


    "editor.formatOnSave": true,


    _//_ Enable/disable default JavaScript formatter (For Prettier)


    "javascript.format.enable": false,


    _//_ Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.


    "prettier.eslintIntegration": true

### Flow Setup

[**Flow**][17] is a static type checker for JavaScript and is included in your project if you use the [**React Native CLI**][5] or [**create-react-app**][4] build configurations.

From your terminal install [**Flow**][17] using [**Homebrew**][18].

`$ brew install flow`

> "Flow works best when installed per-project with explicit versioning rather than globally."

To run [**Flow**][17] per project we will install [**flow-bin**][19] from [**npm**][20]. Later we will configure [**VS Code**][8] to run [**Flow**][17] from `node_modules` in lieu of the global [**Flow**][17] installation.

Before installing [**flow-bin**][19] we need to figure out which version to install. Open the `.flowconfig` file and scroll to the very bottom where you'll find the version number. This is the version of [**flow-bin**][19] we want to install from NPM. As of the day this article was published, the [**Flow**][17] version to use is 0.42.0.

> See the [**create-react-app docs**][21] on how to easily add [**Flow**][17]

We also need to install the [**babel-preset for Flow**][22].

> What are babel-presets?

`$ npm install flow-bin@0.42.0 babel-preset-flow --save-dev`

Open the `.babelrc` file and add [**Flow as a preset**][22] then add the config `"retainLines": true`

Your `.babelrc` file should look like this:

    {


      "presets": [


        "react-native",


        "flow"


      ],


      "retainLines": true


    }

Now we want to tell our editor to use [**Flow**][17] from the projects `node_modules` directory. We also want to disable JavaScript validation for this project only to [**fix a known issue**][24].

Open the [**Workspace**][16] `settings.json` file and configure flow to use the NPM package in node_modules.

    // Support using flow through your node_modules folder, WARNING: Checking this box is a security risk. When you open a project we will immediately run code contained within it.
    "flow.useNPMPackagedFlow": true

Your [**VS Code Workspace Settings**][16] should now look like this:

    // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
    "editor.formatOnSave": true


    // Support using flow through your node_modules folder, WARNING: Checking this box is a security risk. When you open a project we will immediately run code contained within it.
    "flow.useNPMPackagedFlow": true,


    // Enable/disable JavaScript validation. (For Flow)
    "javascript.validate.enable": false


    // Enable/disable default JavaScript formatter (For Prettier)
    "javascript.format.enable": false,


    _//_ Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.


    "prettier.eslintIntegration": true

> Disabling the default JavaScript formatter allows [**Prettier**][15] to handle our code formatting.

Let's create some [**npm scripts**][25] for [**Flow**][17].

Open the `package.json` file and add the following scripts.

    // start the flow server
    "flow start": "flow start",


    // stop the flow server
    "flow stop": "flow stop",


    // check the flow status
    "flow status": "flow status",


    // check the flow coverage percentage
    "flow coverage": "flow coverage"

Your `scripts` in `package.json` should now look like this:

![][26]

From the same directory as your `package.json` file run the following terminal command.

`$ npm run flow start`

![][27]

The [**Flow server**][28] is running and will perform type checking on any file with a `// @flow` annotation at the top of the file.

### Testing your new development workflow

Open the `index.ios.js` file in the `SweetApp` project.

> Don't use the `index.android.js` file as the `.flowconfig` file ignores it. [**See this post on Stack Overflow**][29] to use Flow with `.android` files.

### ESLint Linter

You should notice red squiggly lines in your code. You can hover your mouse cursor over the red squiggly line and [**ESLint**][10] will tell you the linter rule causing the warning.

![][30]

Delete the semicolon at the end of the `return` statement inside the class `render` method. Hover your mouse cursor over the red squiggly line and you'll see [**ESLint**][10] warns you about the missing semicolon!

> If you are not receiving any linter warnings please review the ESLint Setup portion of this guide.

### Prettier Code Formatter

[**Prettier**][15] will auto-format your code based on it's rules whenever you save a file.

Add an array of numbers and save the array to a variable called test. Format the array of numbers like so:

![][31]

Now save the file and watch the magic of [**Prettier**][15] take effect!

![][32]

The test array is now formatted correctly!

### Flow Type Checking

To ensure [**Flow**][17] is working run the `flow start` npm script to start the [**Flow server**][28] that runs in the background.

`$ npm run flow start`

Create an add function that returns the sum of two numbers.

![][33]

Now let's add the WRONG types (string) to the `add` function parameters and return type.

![][34]

Notice after saving the file red squiggly lines appear under the number parameters of the `add` function invocation. Hover your mouse cursor over the red squiggly lines and [**Flow**][17] informs you:

`[flow] this type is incompatible with the expected parameter type of string`

Let's fix the add function to use the correct number types.

![][35]

The [**Flow**][17] type errors are gone!

> A cool feature of the [**Flow VS Code extension**][36] is the always up-to-date [**Flow**][17] coverage percentage in the Status Bar.

![][37]

🎉 You're all set! 🎉

Hopefully this guide saves you the headache I experienced and makes for a great reference guide now and in the future.

Happy coding! 😀

[1]: https://facebook.github.io/react/
[2]: https://facebook.github.io/react-native/
[4]: https://github.com/facebookincubator/create-react-app
[5]: https://facebook.github.io/react-native/docs/getting-started.html#the-react-native-cli
[6]: https://facebook.github.io/jest/
[7]: https://code.visualstudio.com/Download
[8]: https://code.visualstudio.com/
[9]: https://code.visualstudio.com/docs/setup/mac#_command-line
[10]: http://eslint.org/
[11]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1
[12]: https://www.npmjs.com/package/babel-eslint
[14]: https://www.npmjs.com/package/prettier-eslint
[15]: https://github.com/prettier/prettier
[16]: https://code.visualstudio.com/docs/getstarted/settings
[17]: https://flow.org/
[18]: https://brew.sh/
[19]: https://www.npmjs.com/package/flow-bin
[20]: https://www.npmjs.com/
[21]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow
[22]: https://www.npmjs.com/package/babel-preset-flow
[24]: https://github.com/flowtype/flow-for-vscode#known-issues
[25]: https://docs.npmjs.com/cli/run-script
[28]: https://flow.org/en/docs/cli/
[29]: http://stackoverflow.com/questions/43580919/why-does-react-natives-flowconfig-ignores-android-js-files/43600195#43600195
[36]: https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode
