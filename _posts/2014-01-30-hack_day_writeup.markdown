---
layout: post
title:  "CBS Hackathon"
categories: hackathons
---
I completed my first hackathon today, the CBS Interactive 'Next Generation' Hackathon. The prime directive
of the event was to use new, emerging technologies. Recommendations included: Scala, Clojure, Dart, Go, Node.js, and Coffeescript.
I mostly utilized [AngularJS](http://angularjs.org/) and intended to write some coffeescript. However, I discovered that angular was quite
elegant and expressive. Coffeescript's high level syntax wouldn't be necessary. My submission
placed near the top and I won a fancy [JBL Pulse](http://www.jbl.com/estore/jbl/us/products/JBL-Pulse/JBL%20PULSE_JBL_US).
I thoroughly enjoyed the experience and I'm hooked. I intend to participate in more than just work sanctioned hackathons.
[Hackfit San Francisco](http://www.hackfit.com/san-francisco-2014/) looks enticing.

Before I get started, I apologize for the lack of structured text that is about to ensue. This post will be a braindump
that summarizes my hackathon experience, what I learned, and what I could have done better.

Here's a 5000 foot overview. I implemented a food-delivery ordering app that coordinates individuals to
ensure that minimum order amounts are met. The participants in the group-order contribute their portion of the
bill, to the coordinator via [venmo](https://venmo.com/). It's akin to paying cash to the person who pays
for an entire dinner to avoid splitting credit cards. My app is called [scrumdiddlyumptious](https://github.com/rcarino/scrumdiddlyumptious).
It uses:

1. The [ordr.in api](http://ordr.in/) to search for restaurants and menus and handle orders.
2. Venmo to handle cash transfers between friends
3. [Twilio](https://www.twilio.com/) to handle order confirmation text messages.

I settled on this idea because I figured it would be an excellent opportunity to learn angular. I wanted to see what all the
rage was about.

Getting started was simple. I followed the [angular tutorial](http://docs.angularjs.org/tutorial), worked my way through
the phone catalog app, then proceeded to thrash, smash, and mold it into what I needed.

This is a good time to segueway into my first **<s>protip</s>** noobtip. Never go into a hackathon unarmed. It took me about a day to run through the angular
tutorial. Had I learned it the day of the hackathon, I would have been royally screwed. Apologies if this is obvious, but
I learned this the hard way. I ran through the android tutorial and all of the configuration/setup steps the day of my
first CBS Interactive hackathon, and I utterly failed.

My other protip is fake it until you make it. I mocked and pissed on the gods of good code:

1. I copied and pasted, blog and stack overflow code raw
2. I faked data
3. I broke every good style guideline known to man.

I did all of this in the name of getting a demo-able product workflow up as fast as possible, even if it meant creating
abberations likes this
{% highlight javascript %}
        // this line is supposed to combine your friends custom orders into a single order.
        $scope.mergeOrders = function() {
            var fries = $('.orderQuant').eq(0);
            var val = fries.val();
            fries.val(Math.min(9, parseInt(val) + 2));
            fries.trigger('input');
        }
        // It adds 2 orders of fries regardless of which selections your friend shared with you.
{% endhighlight %}

I can sleep well at night because you either get seemingly working code out, in time for the demo. Or, you can do it right
later if time permits. Unfortunately, that slimy piece of sewer sludge in the code snippet made it into our demo.

Another technique that helped me during this hackathon was planning deliverables. I used [fogbugz](http://www.fogcreek.com/Fogbugz/)
as a task manager, creating concrete cases. It's free to use for up to 2 individuals. Some of you are going to hate me
for tooting my horn, but having a vision of what I needed to deliver and their delivery times gave me the spare time to go on a dinner date
in the middle of the hackathon. Like a boss. I could have slaved away the entire day, but it's a good thing I didn't. I was
able to easily solve problems that I was banging my head against before having a nice dinner, or a good night's sleep. They
were dumb problems like typos in urls.

One thing I direly need to improve on is salesmanship. I had purchased the scrum.diddlyumpti.us domain, yet it didn't occur
to me that I could have let the hackathon judges use the product and contribute to a group order with me. It's so obvious
in hindsight. Instead, I ran through a single order by myself and bypassed a perfect opportunity to schmooze the judges with
a free lunch, courtesy of my app.

All in all, I definitely felt an incredible builder's high after finishing scrumdiddlyumptious, and I'm hungry for more.
You can check out the project at [http://www.shaboyrayz.com/scrumdiddlyumptious/app/#/find-restaurants](http://www.shaboyrayz.com/scrumdiddlyumptious/app/#/find-restaurants). Disclaimer: we
have ceased to support it since the end of the demo, so YMMV.

Shout out to my boy [Justin Dela Cruz](https://github.com/justindelacruz), my project partner for scrumdiddlyumptious.