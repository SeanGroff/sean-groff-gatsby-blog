---
title: 'Configure TypeScript, TSLint, and Prettier in VS Code for React Native Development'
date: '2018-07-13'
categories: react
tags: [react, prettier, typescript, eslint, vscode, react-native]
---

### Introduction

This short guide will provide you a consistent and reusable development workflow for new or existing [**React Native**][1] projects. The more effort you put into writing quality code, the less time you spend on debugging. You can increase your code quality and reduce the time spent on debugging with a consistent development workflow. In this guide I will show you how to configure VS Code to handle your code formatting, linting, and type checking.

Testing is outside the scope of this article but highly recommended.

How to use TypeScript is also outside the scope of this article.

### Getting Started

For this post we are going to start from a newly created project. You can skip ahead to the TypeScript setup if you're working on an existing project. Let's initialize our React Native app! For this article we'll use the [**React Native CLI**][2]**.**

`$ react-native init SweetApp && cd SweetApp`

Open the **_SweetApp_** project with [**VS Code**][4].

`$ code .`

Once you have [**VS Code**][4] open, click the Extensions button in the Activity Bar.

Install the following extensions:

- [**Prettier Code Formatter**][6]
- [**TSLint**][7]

### TypeScript Setup

First let's install and setup TypeScript for our React Native app by entering the following commands in the terminal. (I use the Yarn package manager)

`$ yarn add --dev typescript react-native-typescript-transformer @types/react @types/react-native`

`$ yarn tsc --init --pretty --jsx react`

`$ touch rn-cli.config.js`

Here's what we just did:

- installed TypeScript to our project as a dev dependency
- installed [**React Native TypeScript Transformer**][9] to our project as a dev dependency to seamlessly use TypeScript with react-native
- initialize an empty TypeScript config file, which we'll configure next
- create an empty React Native TypeScript Transformer config file, which we'll configure shortly
- install [**typings**][10] for React and React Native allowing TypeScript to type check our React Native code

### Configure TypeScript

Here are the settings I enabled/disabled and I recommend you do as well to get started. As you gain more experience and become comfortable with TypeScript you'll tweak this file more to your preferences.

> For the option you want to enable or disable, simply comment or uncomment the line of code.

In the Module Resolution Options section I enabled the following three options:

```json
"allowSyntheticDefaultImports": true,
"esModuleInterop": true,
"resolveJsonModule": true
```

In the Strict Type-Checking Options and Addition Checks sections make the necessary configuration changes to match the code below.

```json
"noImplicitAny": true,
"strictFunctionTypes": true,
"noImplicitThis": true,
"alwaysStrict": true
```

**_Note_**: I also prefer to change the **target** property to **"ES2015"** to use async/await without a Promise declaration.

### Configure the React Native TypeScript Transformer

Open the **rn-cli.config.js** file we created earlier and copy paste the following code, then save and close this file.

```js
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSourceExts() {
    return ['ts', 'tsx']
  },
}
```

### TypeScript Migration

Rename the generated **App.js f**ile in our project to **App.tsx**.

> **NOTE** **index.js** needs to use the **.js** extension.

All new files containing JSX should use the **.tsx** extension and the **.ts** extension for plain JavaScript files.

> Now is a great time to go through your existing **.tsx** and **.ts** files and fix any TypeScript errors.

### TSLint Installation and Setup

First, let's install **TSLint** and some **TSLint** extensions I personally prefer for React Native development.

`$ yarn add --dev tslint tslint-config-prettier tslint-config-standard tslint-react`

- added **tslint-config-prettier** so **tslint** and **prettier** won't fight over code formatting rules.

You should now see a **tslint.json** file in your project.

Open the **tslint.json** file and configure it like so:

```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended",
    "tslint-config-standard",
    "tslint-react",
    "tslint-config-prettier"
  ],
  "jsRules": {},
  "rules": {
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "member-ordering": false,
    "jsx-no-lambda": false,
    "jsx-boolean-value": false
  },
  "rulesDirectory": []
}
```

The **rules** section is my personal preferences. You're free to roll your own rules.

### Lint your Code

From the root of your project open the **package.json** file and add the following **npm lint script** to the **scripts** section

```json
"scripts": {
  "start": "node node_modules/react-native/local-cli/cli.js start",
  "test": "jest",
  "lint": "tslint 'src/**/*.{ts,tsx}'"
}
```

Now from your terminal you can run **yarn lint.** You know you enjoy fixing linter errors!

`$ yarn lint`

### Prettier Setup

[**Prettier**][18] will auto-format your code based on it's rules.

Prettier is amazing. If you've never used it, it's like watching TV on an HDTV then trying to go back to watch TV on a non-HDTV. Once you use Prettier you'll never go back to formatting your own code again.

Let's install [**prettier**][19].

`$ yarn add --dev prettier`

Next, we want [**VS Code**][4] to format our code using the [**Prettier**][18] extension after saving a file.

Press **CMD + ,** if you're on a Mac to open your [**VS Code Workspace Settings**][21] then add the following:

```json
"editor.formatOnSave": true,
"javascript.format.enable": false
```

Now let's create a prettier config file that will contain your Prettier code formatting preferences.

From the root of your project create a file name **.prettierrc**

`$ touch .prettierrc`

Use my prettier rules or roll your own based on your preferences. Here are my Prettier preferences. Yes, i'm on team no semi-colons!

```json
"semi": false,
"singleQuote": true,
"trailingComma": "es5"
```

### Prettier Code Formatter

[**Prettier**][18] will auto-format your code based on it's rules whenever you save a file.

Open the sample **app.js** file and add an array of numbers. Save the array to a variable called test. Mess with the formatting of the numbers in the array.

Now save the file and watch the magic of [**Prettier**][18] take effect!

The test array should now be formatted correctly!

🎉 You're all set**!** 🎉

Hopefully this guide saves you a lot of time and makes for a great reference guide now and in the future.

Happy coding! 😀

[1]: https://facebook.github.io/react-native/
[2]: https://facebook.github.io/react-native/docs/getting-started.html#the-react-native-cli
[4]: https://code.visualstudio.com/
[6]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[7]: https://marketplace.visualstudio.com/items?itemName=eg2.tslint
[9]: https://github.com/ds300/react-native-typescript-transformer
[10]: https://github.com/DefinitelyTyped/DefinitelyTyped
[18]: https://github.com/prettier/prettier
[19]: https://www.npmjs.com/package/prettier-eslint
[21]: https://code.visualstudio.com/docs/getstarted/settings
