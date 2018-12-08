---
title: 'How I learned React and how you can too'
date: '2016-11-10'
categories: react
tags: [react]
photo: 'https://cdn-images-1.medium.com/max/2000/1*LCVyY1nSsh27fMk_xnVeqw.png'
---

What is this React you speak of? If you're reading this article I assume you've heard of React and have a basic understanding of what it is.

> TL;DR React is a JavaScript library created by Facebook for building user interfaces.

## Getting Started

Thanks to [**Create-React-App**][1] you now have two options to learning React without first learning [**Webpack**][2]. After you complete the [**Codepen**][3] challenges below, use the **Create-React-App** build utility for your future React app's.

> Seriously, it creates and configures everything for you so you can start writing React code immediately.

The title of this article is \_How I Learned React and how you can too… \_so it's only fair I tell you how. Whenever I learn something new in programming, the logical place to start is with the docs. I, like most programmers, have a short attention span when it comes to reading and quickly get bored of reading the docs. Luckily, React's documentation is really good.

Try to make it as far as you can through [**React's Documentation Tutorial**][4]. Once you're bored, move on. You will revisit these docs when you start coding React apps.

> Ermahgerd it look's like React relies heavily on ES2015 syntax?! I wanted you to see this for yourself. Take the time to learn the basics of ES2015 **_before_** learning React. [**Learn.co**][5] has a great intro.

> It's very important when building React applications to "**Think in React**."

Take the time to identify reusable components, stateful and stateless components. [**Thinking in React**][6] does a great job of teaching you how to accomplish this task. Components, props, state, render, blah blah blah you'll understand all this React speak after you start coding.

## Want to code?

Ok, you're tired of reading and want to code? Fire up a new Pen in [**Codepen**][3].

Below are 5 challenges I did to learn React. If you complete all 5 challenges, you're more than ready to begin working on larger React projects…sort of…

> Enable the **Babel preprocessor** and make sure to add **React** and **React-DOM** using the **Quick Add** dropdown menu under the **Add External JavaScript** section. **Save and close**.

![][7]

Since this isn't a tutorial, no more spoon feeding. As you're coding, use the documentation to discover how to do EVERYTHING.

> Try not to use Google, you need to understand the code you're writing while you're writing it.

The docs have you feeling down? Don't quite feel ready to start coding?

> A great tutorial (and free!) to understand and learn React is [**The Beginner's Guide to React**][8] by [**Kent C. Dodds**][9]**.**

> Challenge #1 — Hello World

Create a React app in Codepen that outputs Hello World to the screen. I've created a Pen in Codepen for each challenge. **Do not look at the code unless you've exhausted all of your resources first!**

My example [**React Hello World pen**][10].

> Challenge #2 — Hello Visitor

This app takes the input from the text input field and outputs your input in realtime to the screen. The input should be your name, because it's cool seeing your name on a page. This is likely the first time you'll see how cool React really is.

> Again, use the React Doc's to figure this out without peeking at my code. Only look at my code if you're stumped and have exhausted all of your resources.

I used Bootstrap to style the app. This is optional, but this would be an ideal time to [**Learn Bootstrap**][11] in React!

My example [**Hello Visitor pen**][12].

> Challenge #3 — Fizz Buzz

Everyones favorite junior developer interview question.

_"Can you build FizzBuzz? Show me!"_

Don't get frustrated, this is quite a bit more challenging. You'll need to create increment and decrement buttons. Each should be their own helper method which updates the state of the app. **Yes, that was a clue**.

My example [**Fizz Buzz pen**][13], don't cheat!

> Challenge #4 — Markdown Previewer

The last 2 challenges can be found over at [**freeCodeCamp**][14]. You can continue to use **Codepen**, but I would fire up **Create-React-App** and maintain the rest of your projects on [**Github**][15].

Here is the link to the **freeCodeCamp** challenge. [**Build a Markdown Previewer**][16].

> Pro-tip: Use [**Marked**][17] to parse the **Markdown** text.

> Challenge #5 — Camper Leaderboard

For the final challenge you will build a Leaderboard app. You will need to access the Leaderboard data using the provided endpoints. You will need to grab data for pretty much every React app you build so this one is important.

Here is the link to the **freeCodeCamp** challenge. [**Build a Camper Leaderboard**][18].

> Pro-tip: Use [**Axios**][19]to perform your _GET_ requests to access the Leaderboard data.

## Congrats!

If you've made it to the part in the article you've hopefully completed all 5 React challenges. If you didn't keep at it, this could take you a week or so.

Earlier in this post I mentioned you're "sort of" ready to work on larger React projects. Larger React projects will likely require **routing** and **global state**.

You will want to learn [**React-Router**][20] to handle your apps routing. If your app needs Global State and is moderately complex you'll want to learn [**Redux**][21].

> Don't make your app more complex if it doesn't need to be. Use Redux as needed!

Thanks for reading!!😀

[1]: https://github.com/facebookincubator/create-react-app
[2]: https://webpack.github.io/docs/
[3]: http://codepen.io/
[4]: https://facebook.github.io/react/tutorial/tutorial.html
[5]: https://learn.co/lessons/intro-to-es2015
[6]: https://facebook.github.io/react/docs/thinking-in-react.html
[7]: https://cdn-images-1.medium.com/max/1600/1*EAGZyyFKWlqirVqNKZ0tZQ.png
[8]: https://egghead.io/courses/the-beginner-s-guide-to-react
[9]: https://twitter.com/kentcdodds
[10]: http://codepen.io/sgroff04/pen/ObMVEE
[11]: http://getbootstrap.com/
[12]: http://codepen.io/sgroff04/full/zBYKLP/
[13]: http://codepen.io/sgroff04/full/LZYWBB/
[14]: https://www.freecodecamp.com/
[15]: https://github.com/
[16]: https://www.freecodecamp.com/challenges/build-a-markdown-previewer
[17]: https://github.com/chjj/marked
[18]: https://www.freecodecamp.com/challenges/build-a-camper-leaderboard
[19]: https://github.com/mzabriskie/axios
[20]: https://github.com/ReactTraining/react-router
[21]: http://redux.js.org/
