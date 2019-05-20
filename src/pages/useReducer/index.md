---
title: 'TEMP TITLE - useReducer Blog Post'
date: '2019-05-15'
categories: react
tags: [react, hooks, reducer, useReducer]
---

### Introduction

look a cool intro paragraph

### What is a Reducer?

A Reducer is a function that takes two values and reduces them down to one value.

```javascript
function fullNameReducer(firstName, lastName) {
  return `${firstName} ${lastName}`
}
```

The `fullNameReducer` function accepts two values as its parameters and returns one string value.

The reducer function was popularized by Redux but existed long before Redux. I only say this because many people think `Redux === Reducer`. It's important to go into this knowing `Redux !== Reducer`.

### When to use useReducer

The first question I had when I first read the React docs was "When should I use `useReducer` instead of `useState`. I've seen different opinions on this subject across the internet but I prefer `useReducer` when I need to update more than a single entity. I'll explain with code.

**useState Example**

```javascript
function useFetch(url) {
  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('')

  const fetchData = async () => {
    try {
      setErrorMessage('')
      const results = await axios.get(url)
      setData(results)
    } catch (error) {
      setErrorMessage(error.message || error)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchData(url)
  }, [])

  return { data, isLoading, errorMessage }
}
```

**useReducer Example**

```javascript
const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FAILURE':
      return { data: null, isLoading: false, errorMessage: action.error }
    case 'SUCCESS':
      return { data: action.data, isLoading: false, errorMessage: '' }
    default:
      return state
  }
}

function useFetch(url) {
  const initialState = { data: null, isLoading: true, errorMessage: '' }
  const [state, dispatch] = React.useReducer(fetchReducer, initialState)

  const fetchData = async () => {
    try {
      const results = await axios.get(url)
      dispatch({ type: 'SUCCESS', data })
    } catch (error) {
      dispatch({ type: 'FAILURE', error: error.message || error })
    }
  }

  React.useEffect(() => {
    fetchData(url)
  }, [])

  return state
}
```

It's likely your initial reaction is to throw useReducer in the trash and go back to using useState based on the lines of code 🤣. At the end of the day this really comes down to developer preference anyways so you do you. It's way to early for best practices to really be established. Lets focus on the `useState` example and I'll point out a few things.

1. For each state entity I must declare a setter method.
2. There is some bug prone cognitive overhead to getting this solution working right
3. If you are familiar with the `useState` and `useReducer` API the `useState` solution is slightly less declarative in this example.
4. I don't even want to include this but someone will mention `useReducer` is more performant than `useState`. I'm not sure

Now lets focus on the `useReducer` example and elaborate on the numbered list above.

1. This one is simple, `useReducer` provides a single `dispatch` function I can reuse whenever I want to make a state change.
2. The cognitive overhead is reduced (no pun intended) to each switch case and the rationality of each state change lives on a single line of code, the object. If the fetch request was successful, I can reasonably set the three state values in one line with minimal cognitive overhead and quickly get the solution working.

```javascript
{ data: action.data, isLoading: false, errorMessage: ''}
```

3. You're probably reading this article to learn useReducer so come back later 😎
4. Technically, `useReducer` is "more performant".

Now that you have a decent opinion of when to use `useReducer` instead of `useState` lets learn the `useReducer` API 🚀.

### Learning the API

First off, read the docs. Seriously, the [React docs](https://reactjs.org/docs/hooks-reference.html#usereducer) are top notch and very approachable.

With that out of the way, the `useReducer` hook accepts three arguments. I'm only covering the first two arguments in this blog post. See? Reading the docs does matter! 🤔

### Initial State

To keep you on your toes i'm going to begin with the second argument to `useReducer` only because it's simple to Grok and provides some mental context to the reducer function which is the first argument to `useReducer`. If you're familiar with Redux you can skip ahead.

Typically, `initialState` is a JavaScript Object. If you read the previous paragraph on when to use `useReducer vs useState` than `initialState` will always be an Object 😇. It's an important takeaway to know the initial state can be ANY value. This is why you'll notice in the docs they introduce `initialState` as `initialArg`.

You can define the initialState inline as the second argument to useReducer but typically you defined initialState as a variable first.

**Defined Inline would look something like this:**

```javascript
const [state, dispatch] = React.useReducer(exampleReducer, 0)
```

Two things to note here, the first being the obvious. We declared the initial state inline as the second argument to `useReducer`. Next, remember how I said the initial state can be ANY value? In this example, the initial state is `0`.

**Declaring your initial state first**

```javascript
const initialState = 0
const [state, dispatch] = React.useReducer(exampleReducer, 0)
```

In a more real world example, you would likely define initial state inline if the initial state is a simple primitive value.

### Reducer

The first argument to `useReducer` is a reducer function. The blueprint for the `useReducer` reducer function is:

```javascript
function reducer(prevState, action) {
  // insert logic that results in a new state

  return newState
}
```

Reducer accepts the previous state for its first argument and the action for its second argument. The body of the reducer will contain whatever logic needed to create new state and return it. Remember, a reducer function accepts 2 values and returns 1 value.

Something that may not be obvious at first is the action can be anything...including a function!

### Return value of useReducer

The `useReducer` hook returns an `Array` of two items. The first item is always your `state`. The second item is always a `dispatch` function.

The `state` returned is always the return value from the `reducer` function.

The `dispatch` function is a void type function (a function with no return value) and the blueprint looks like this:

```javascript
function dispatch(action) {
  // void
}
```

An important takeaway here is the argument (action) passed into `dispatch` is the second argument passed passed into the `reducer` function.

Example 1:

```javascript
dispatch({ type: 'SUCCESS' })

function reducer(prevState, action) {
  console.log(action) // {type: 'SUCCESS'}
}
```

Example 2:

```javascript
dispatch(7)

function reducer(prevState, action) {
  console.log(action) // 7
}
```

Example 3:

Remember I said an action could be anything including a function?

```javascript
dispatch(a => a + b)

function reducer(prevState, action) {
  console.log(action) // function(a) { return a + b }
}
```

Hopefully you're starting to see just how flexible `useReducer` can be!

Speaking of flexibility, `useReducer` returns an Array of two items. Thanks to JavaScript array destructuring you can name the two items whatever makes sense.

☢️Contrived Example Warning ☢️

```javascript
const [name, setName] = React.useReducer(nameReducer, 'Sean')
```
