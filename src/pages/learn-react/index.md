---
title: 'How I learned React and how you can too'
date: '2016-11-10'
categories: react
tags: [react]
---

What is this React you speak of? If you're reading this article I assume you've heard of React and have a basic understanding of what it is.

---

TL;DR React is a JavaScript library created by Facebook for building user interfaces.

## Getting Started

Thanks to [**Create-React-App**][1] you can get started learning React without first learning [**Webpack**][2]. [**CodeSandbox**][3] allows you to build JavaScript projects inside your browser without any build setup. I highly recommend it!

The title of this article is How I Learned React and how you can too so it's only fair I tell you how. Whenever I learn something new in programming, the logical place to start is with the docs. I, like most programmers, have a short attention span when it comes to reading and quickly get bored of reading the docs. Luckily, React's documentation is really good.

Try to make it as far as you can through [**React's Documentation Tutorial**][4]. Once you're bored, move on. You will revisit these docs when you start coding React apps.

---

Ermahgerd it look's like React relies heavily on ES2015 syntax?! I wanted you to see this for yourself. Take the time to learn the basics of ES2015 **_before_** learning React. [**Learn.co**][5] has a great intro.

---

It's very important when building React applications to **"Think in React"**.

Take the time to identify reusable components, stateful and stateless components. [**Thinking in React**][6] does a great job of teaching you how to accomplish this task. Components, props, state, render, blah blah blah you'll understand all this React speak after you start coding.

## Want to code?

Ok, you're tired of reading and want to code? Fire up a new React Project in [**CodeSandbox**][3].

Below are 5 challenges I did to learn React. If you complete all 5 challenges, you should have a solid foundation to build larger more advanced React apps.

Since this isn't a tutorial, no more spoon feeding. As you're coding, use the documentation to discover how to do EVERYTHING.

Try not to use Google, you need to understand the code you're writing while you're writing it.

---

The docs have you feeling down? Don't quite feel ready to start coding?

A great free tutorial to understand and learn React is [**The Beginner's Guide to React**][8] by [**Kent C. Dodds**][9]**.**

### Challenge #1 — Hello World

Create a React app in CodeSandbox that outputs Hello World to the screen. I've created a Solution example in CodeSandbox for each challenge.

_Do not look at the code unless you've exhausted all of your resources first_

Hello World Solution [**React Hello World**][10].

### Challenge #2 — Hello Visitor

This app accepts input from a text field element and outputs your input in real time to the screen.

- As a user, if the text input is blank I should see Hello, Visitor! rendered on the screen.

- As a user, if I enter text in the text input "Visitor" should be replaced with the text I type in real time.

---

Read about`setState` in the docs. This is likely the first time you'll see how cool React really is and how `state` works.

Again, use the React Doc's to figure this out without peeking at my code. Only look at my code if you're stumped and have exhausted all of your resources.

Hello Visitor Solution [**Hello Visitor**][12].

### Challenge #3 — Fizz Buzz

Everyones favorite junior developer interview question.

_"Can you build FizzBuzz? Show me!"_

Don't get frustrated, this is quite a bit more challenging. You'll need to create increment and decrement buttons. Each should be their own helper method which updates the state of the app. Yes, that was a clue.

For information about Fizz buzz: [**Wikipedia**][7]

Fizz Buzz Solution [**Fizz Buzz**][13], don't cheat!

### Challenge #4 — Markdown Previewer

The final 2 challenges can be found over at [**freeCodeCamp**][14].

Here is the link to the **freeCodeCamp** challenge. [**Build a Markdown Previewer**][16].

### Challenge #5 — Camper Leaderboard

For the final challenge you will build a Leaderboard app. You will need to fetch the Leaderboard data using the provided endpoints. Fetching data is a big part of most applications.

Here is the link to the **freeCodeCamp** challenge. [**Build a Camper Leaderboard**][18].

**Pro-tip** Use [**Axios**][19] to perform your _GET_ requests to access the Leaderboard data.

## Congrats!

If you've made it to the part in the article you've hopefully completed all 5 React challenges. If you didn't keep at it, this could take you a week or so.

Earlier in this post I mentioned you're "sort of" ready to work on larger React projects. Larger React projects will likely require **routing** and **global state**.

You will want to learn [**Reach-Router**][20] to handle your apps routing. If your app needs Global State and is moderately complex you'll want to learn [**Redux**][21]. [**Unstated**][22] has a smaller learning curve than Redux, check it out and see what you think.

Don't make your app more complex if it doesn't need to be. Use Redux as needed!

If you're looking for further curriculum or project ideas I have [**freeCodeCamp**][14] to thank for landing my first dev job in 2015.

Good luck!

Thanks for reading!!😀

[1]: https://facebook.github.io/create-react-app/
[2]: https://webpack.js.org/
[3]: https://codesandbox.io/
[4]: https://facebook.github.io/react/tutorial/tutorial.html
[5]: https://learn.co/lessons/intro-to-es2015
[6]: https://facebook.github.io/react/docs/thinking-in-react.html
[7]: https://en.wikipedia.org/wiki/Fizz_buzz
[8]: https://egghead.io/courses/the-beginner-s-guide-to-react
[9]: https://twitter.com/kentcdodds
[10]: https://codesandbox.io/s/n9l8q45024
[12]: https://codesandbox.io/s/nr8oj1kk0m
[13]: https://codesandbox.io/s/ypjp6p9159
[14]: https://www.freecodecamp.org
[16]: https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer/
[18]: https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-camper-leaderboard/
[19]: https://github.com/axios/axios
[20]: https://reach.tech/router
[21]: http://redux.js.org/
[22]: https://unstated.io
