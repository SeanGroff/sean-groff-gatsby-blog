---
title: 'Get Started with React Native Animations'
date: '2018-08-29'
categories: react
tags: [react, react-native, animations]
---

### What are Animations in React Native?

**Animation** can be defined as manipulating images or objects to appear as moving images or objects.

> "Animations allow you to convey physically believable motion in your interface" -[React Native Docs][1].

Animation on mobile creates an intuitive human User Interface. [Smashing Magazine][2] has a fantastic article on the importance of animation for mobile devices. In this article we will cover how to get started using the [Animated][3] animation system provided by React Native.

### Local Setup

None!

For this article we'll do all of our code and device emulation from the browser thanks to Expo and their amazing Snack tool. [Expo Snack][4] is React Native in the browser. The Snack tool provides a text editor and side-by-side phone emulator for Android and iOS!

### Getting started with Animated

There are three required values to every animation we define using the [Animated][3] library.

1. Define the starting value or location of the animation in reference to the exact X, Y coordinates on the screen.

2. Define the end value or ending location of the animation.

3. Define which element we are animating.

Below is a very basic demo I built to animate a tennis ball. When you tap the tennis ball it "springs" upwards.

![][5]

Fire up your own Expo Snack at [snack.expo.io][4]. Type out the code you see from my demo until it works. Don't worry, if none of it makes sense yet.

[Tennis Ball Spring Animation Example](https://snack.expo.io/@sgroff04/animated-tennis-ball)

### Three Required Values

Let's break the Tennis Ball Animation down to the three values we must define. When creating an animation it's easy to get overwhelmed. To help simplify the process I like to break animations into three parts. Breaking the problem down into smaller more approachable parts is what programmers like to call decomposition.

### One

Define the starting value or the starting location of the animation in reference to the exact X, Y coordinates on the screen.

In the `Class Constructor` method we created a new Animated instance. We set the starting location to `x: 10, y: 450`. The X, Y coordinates always start at the top-left corner of the screen.

The X, Y coordinates `0,0` would be the top-left corner of the screen.

This means our starting location is 10 pixels to the right, from the top-left corner of the screen. Along the Y axis is 450 pixels down from the top of the screen. This starts the tennis ball near the bottom left corner of the screen.

Change the X and Y values to different numbers and pay attention to what happens. What happens when you change the X, Y values to 0, 0?

As you probably now understand:

`this.moveAnimation = new Animated.ValueXY({ x: 10, y: 450 })`

Creates a new animation instance with a starting location `10, 450` along the X, Y axis of the screen.

### Two

Define the end value or ending location of the animation.

Take a look at the `_moveBall method`. You can probably figure out the ending location is the object provided as the 2nd parameter to the `Animated.spring` method.

```js
{
  toValue: { x: 250, y: 10 }
}
```

We are telling the app to move to the X, Y value 250, 10 which is near the top-right corner of the screen.

250 pixels to the right from the left side of the screen. 10 pixels down from the top of the screen.

Animated has [three built in types][6] we can use to get from our starting location or value to our ending location or value.

For the Tennis Ball app we're using the `Spring method` which provides a smooth spring like animation with a little bounce at the end.

To use the Spring method we need to pass the instance of our animation as the first parameter, then our object defining the end value.

To start or fire the animation method `Spring` we simply call it's built in method `.start()`.

```js
Animated.spring(this.moveAnimation, {
  toValue: { x: 250, y: 10 },
}).start()
```

### Three

Define which element we are animating.

React Native provides 4 ["animatable" components][7].

- `Animated.Image`
- `Animated.ScrollView`
- `Animated.Text`
- `Animated.View`

[createAnimatedComponent()][8] can be used to make a component animatable.

With this knowledge we should now be able to identify what element we are animating. Notice the `Animated.View` component has some inline styles defined. `this.moveAnimation.getLayout()` converts the `{x, y}`values into `{left, top}` for use in the style `prop`. This works similar to [absolute positioning][9] on the web.

We've essentially instructed the `Animated.View` component to always be at the position [interpolated][10] by the animation.

### Main Takeaway

Remember the three values to define every time you create an animation in React Native. This is a fundamental building block you'll be able to use for the simplest animations all the way up to the most complex animations. I've intentionally kept the article short to focus on this fundamental approach to building animations.

### Hammer Home

To hammer home what we've learned I've created two more Expo Snack Examples. I want you to code and play with these on your own time. When coding these two Expo Snacks, identify the three values you must define to create these animations. Keep the [React Native docs][11] handy for reference!

### Examples

[Fade In Animation Example](https://snack.expo.io/@sgroff04/animated-fade-in)

[Loading Spinner Animation](https://snack.expo.io/@sgroff04/animated-spinner)

After you're finished, create the animation you've been wanting to create!

Enjoy!

[1]: https://facebook.github.io/react-native/docs/animations
[2]: https://www.smashingmagazine.com/2017/01/how-functional-animation-helps-improve-user-experience/
[3]: https://facebook.github.io/react-native/docs/animated
[4]: https://snack.expo.io/
[5]: https://cdn-images-1.medium.com/max/1600/1*t4l4X2Kt8lioiIYEjz6nrw.gif
[6]: https://facebook.github.io/react-native/docs/0.56/animated#configuring-animations
[7]: https://facebook.github.io/react-native/docs/0.56/animated#animatable-components
[8]: https://facebook.github.io/react-native/docs/0.56/animated#createanimatedcomponent
[9]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
[10]: https://en.wikipedia.org/wiki/Linear_interpolation
[11]: https://facebook.github.io/react-native/docs/0.56/animated
