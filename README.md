# Indeedydo

This was the first time I worked with React for a couple of years and even that was a workshop and a dev conference. This was really my first foray into building something, unguided from end to end.

## Setup

If you want to get things running locally, follow these steps.

1. Checkout this repo.

`git clone https://github.com/sarahlshowers/indeedydo.git`

2. Run the server.

`yarn start`

3. Navigate to [http://localhost:3000](http://localhost:3000)

## Design and Implementation

### UI

I knew I wanted to use sass for authoring my styles, I find using variables and mixins really useful. You can see in `styles/global/colors` I defined a color palette based on the mocks. I was able to quickly reuse the more meaningfully named variables, rather than looking up hex values.

For typography, I took a similar approach. I created my base styles and extended them, it helped with consistency, reducing duplicate lines of CSS and having named the mixins based on the names in the mocks, I could quickly code out the styles needed. I envision a much more expanded typography library in a larger application to aid in consistency - I've definitely run into varying shades of gray when each developer is left to implement styles without mocks and a pre-defined library to use in styling their applications.

You notice there is a slim utilities file, I only really added what I'd use. I think one of the reasons some devs are resistant to BEM is that it makes for pretty ugly looking markup. I've been using it for almost 5 years now so I'm used to the long class names but when you start adding lots of utility classes it can get really out of control. If you're already defining styles for an element, I'd add things like flex properties to the CSS class definition but in the event I only need to seta single prop, I think that's when I'd lean towards a single well defined utility class.

When I started building out elements, I tried to look at the most atomic things I could and use those to compose the layout. In the case of the `LockUp` component, you will see that it extends on the `Avatar` component. I tried to keep things generic, such that buttons knew nothing of state, simply that there is a function that can be utilized by the author to fit their use case.

### Data

I spent a lot of time here trying to figure out how to manage state between the various components and routes. My initial build out of the UI was using hard coded data, but once the first major pass at layout was done, I started working on hoe I'd extract that data and emulate the CRU[D] functionality. Two things tripped me up, I was using strict equals (===) comparing id values and missed that I was comparing a string to an integer `1 === '1'`. Once I realized that, I was able to change that to allow javascript to coerce the values. The other thing, I missed was that form elements don't work the same as they do in vanilla JS, so I had to go figure out how to get around that, and so revisited state again to understand... that threw me through a loop.

I created a small helper for formatting that date. In a larger application this could be utilized for various other date formatting, while the helper isn't reused all that much here, I wanted to demonstrate a piece of code that would be a good candidate for a helper.

## If I had more time..

I had a lot of fun working on this and could have kept refactoring.

A single button component that accepts arguments defining whether it's primary or secondary, possibly other arguments like size, disabled state.

Why, why, why does the nav break in iPhone views? So frustrating. Otherwise I was please that using CSS grid made everything pretty responsive with out too much effort.
