---
layout: post
title:  "Site Reboot"
description: "Stealing from great sites"
header-image: site_reboot.jpg
length: "5 min"
categories: technical-writeup
---

This site has been dead for a while. I revived it in order to get some practice with technologies I'm unfamiliar with.
In total, I've picked up:

1. Flexbox and responsive design
2. Browserify
3. Jekyll
4. How to steal from great sites

I've probably spent over 80 hours overhauling my site. Hopefully y'all agree that it was time well spent.

## Flexbox and responsive design
I wasn't satisfied with redoing my site via Bootstrap or [Foundation](http://foundation.zurb.com/). I wanted
to learn how these frameworks work under the hood while using modern standards. I used 2 handy resources to accomplish my goals:

1. [CSS trick's guide to flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)
2. [Google's web fundamentals guide](https://developers.google.com/web/fundamentals/)

The guide to flexbox is pretty straightforward. It helped me realize that flexbox is pretty similar to Android's linear layout.
The familiar basis allowed me to acquire flexbox fairly quickly.

Google's web fundamentals guide contains clear, concrete examples of how to iteratively design a mobile-first experience.
The guide also makes a pretty compelling case for using flexbox even though it's not the status quo. The guide states:
(paraphrased), that flexbox is ready for production. All modern browsers implement the flexbox specification correctly.
It's cleaner than using absolute position, floats, or display:inline-block (which always felt hacky to me). Let's move
the web forward and use flexbox when applicable.

## Browserify
I used the [Browserify source](http://browserify.org/articles.html) to figure out how to integrate it in
my project. Coming from [RequireJS](http://requirejs.org/), Browserify is simpler to use.
Browserify allows you to inject javascript synchronously in one or a few modules. RequireJS is more complicated. One can
create multiple injection points for javascripts via lazy loading. I've never had a clear use case for lazy loading.
As a result, I consider lazy loading a cute and fancy premature optimization. Browserify is now my preferred mechanism of javascript
dependency loading because it's so easy to set up.

## Jekyll
My site used to exist on a [single page](/legacy). Naturally, I learned more about Jekyll by building a meatier project.
My most worthwhile discovery was the ability to integrate Sass directly with Jekyll and Github pages. After following
(this guide)[https://github.com/jekyll/jekyll-sass-converter/tree/master/example], I stopped pushing css to Github pages.
Rather, GHP would compile my css from Sass source server-side.

## How to steal from great sites.
I've created frankenstein's monster. By combining nifty pieces of several great sites, I was able to whip up a sleek site
pretty quickly.:

1. [My video hero](/blog) is inspired by [Airbnb](https://www.airbnb.com).
2. [Blog posts](/technical-writeup/2014/12/07/site_reboot.html) are inspired by [Medium](https://medium.com/re-form/dealership-vernacular-4417bbe7c5b2).
The blurring on scroll effect was stolen from Medium's [user profile pages](https://medium.com/@wwnorton).
3. [Blog listings](/blog) are also inspired by [Medium](https://medium.com/).
4. Stole the footer icons from my [friend's portfolio site](http://www.justindelacruz.me/)

## Take a peek under the hood
I spent a lot of time tweaking the assets, and markup for my redesigned site. Check out the [source code](https://github.com/rcarino/rcarino.github.io).
I am sure you'll be delighted by what you see. As much as possible, the markup tags confer semantic meaning. The stylesheets
are DRY and are devoid of utility classitis. The code is surprisingly small and elegant. I had a blast building out this
project.