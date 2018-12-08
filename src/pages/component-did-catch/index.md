---
title: "2 Minutes to Learn React 16's componentDidCatch Lifecycle Method"
date: '2017-09-12'
categories: react
tags: [react]
photo: 'https://cdn-images-1.medium.com/max/2000/1*FnIh84t0CD1bqNVju51DkA.jpeg'
---

## What are Error Boundaries?

> "Error boundaries are React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI** instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them." -[**Dan Abramov**][2]

You can create an error boundary class component by defining a new lifecycle method `componentDidCatch(error, errorInfo)`.

## componentDidCatch() Lifecycle Method

> componentDidCatch(error, errorInfo) {}

The first method parameter is the actual error thrown. The second parameter is an object with a `componentStack` property containing the component stack trace information. The `componentDidCatch()` lifecycle method works similar to JavaScript's `catch {}` but for components. An Error Boundary cannot catch an error within itself. The error will propagate to the closest Error Boundary above it. Sound familiar?

_hint: JavaScript `catch {}`_ block.

## Why do I need componentDidCatch()?

Prior to React 16 Error Boundaries, errors inside components would cause unrecoverable cryptic errors. There was not a great way to handle these errors within the components.

React 16 Error Boundaries to the rescue!

**Benefits:**

1.  Declarative vs Imperative. One of the beauties of React is it's Declarative code style. A component itself declares what should be rendered. Error Boundaries follow the Declarative nature of React. You no longer need to resort to imperative code solutions such as `try/catch` or `if/else` for conditional rendering of a UI based on errors.
2.  Expected Behavior. Error Boundaries will propagate an error to the closest Error Boundary regardless how deep in the tree the error occurs.
3.  Reusability. You can write one Error Boundary Component and re-use it throughout your app.
4.  Component All The Things

## How do I use Error Boundaries?

I've created a CodePen to demo the `componentDidCatch()` lifecycle method. I'd highly recommend forking the pen and adding more Error Boundaries and components to see them in action.

## When should I use Error Boundaries?

> In practice, most of the time you'll want to declare an error boundary component once and use it throughout your application. -[**Dan Abramov**][2]

You can wrap top level route components, you might also wrap components that might contain obscure code. Its up to you how to best handle protecting against application crashes.

Once React 16 is released more standards and best practices with Error Boundaries will appear. Error Boundaries will encourage JavaScript error reporting services that can be triggered within the `componentDidCatch()` lifecycle method in Production environments.

For more details check out [**Error Handling in React 16**][3] by Dan Abramov.

Let me know in the comments how you use Error Boundaries in your apps! You can follow me for more React goodness on Twitter [**@\_SeanGroff**][4]

[2]: https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html#introducing-error-boundaries
[3]: https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html
[4]: https://twitter.com/_SeanGroff
