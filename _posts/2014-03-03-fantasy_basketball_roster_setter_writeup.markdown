---
layout: post
title:  "Fantasy Basketball Side Projects"
categories: technical-writeup
---

I've been inactive for ~30 days. I thought that I couldn't write about anything useful. I
haven't done anything novel, or non-trivial. However, it's about time I push something out there, just to sharpen
my writing skills at least.

Don't get me wrong, I haven't been sitting idle.
I've greatly enhanced my frontend skills: javascript, html, css, php, and sass (mostly through my employer).
I've also solved 30 [Project Euler Problems] (https://projecteuler.net/) as of yet. Finally, I've been trying to gain a deeper understanding of distributed systems.
I want to understand the [Paxos algorithm](http://en.wikipedia.org/wiki/Paxos_(computer_science)) and try to apply it to a real problem.
I don't think I could write much about those endeavors.

Since I have nothing to write about now, I'll write about a past fantasy basketball side project.
Here's the code: [](https://github.com/rcarino/massive-random-programming/tree/master/Fun/FantasyBasketball).
I was tired of setting my rosters manually, so I wrote javascript bookmarklets to automatically set my rosters.

I wrote 2 bookmarklets. 1 for yahoo, and 1 for espn.

The [yahoo roster setter](https://github.com/rcarino/massive-random-programming/blob/master/Fun/FantasyBasketball/set-yahoo-roster.bookmarklet.coffee)
wasn't too involved. The yahoo fantasy web app provides a button called 'start active players'. This code yanks the url
of the start active players button. This url is an ajax endpoint which starts players for the date specified in the url.
Jquery does most of the heavy lifting (figuring out the button's url, and making ajax calls). The native javascript Date
object is smart enough to add days to a date (it knows that 1/31 + 3 days is 2/3). The cons: the bookmarklet is brittle. Yahoo could
change the html classes on its start active players button, and jquery won't be able to find its ajax url.
Also the start active players button won't optimize your roster if you have more than 12 players playing in a day. You may
get a full roster with crappy or injured players starting even though your bench may have better alternatives.

Enter my [espn roster setter](https://github.com/rcarino/massive-random-programming/blob/master/Fun/FantasyBasketball/EspnRosterSetter.coffee).
ESPN did not have a start active players button, so it involved more work. I modeled the roster using plain old
javascript objects. I then manipulated the roster model until it matched an optimal lineup. Afterwards, I fire off all of
the roster changes to espn's API endpoint. This required more work, but I was able to set optimal rosters,
unlike my yahoo roster setter.

Before using plain javascript objects, I tried to use jquery click events only. However, the UI behaved weirdly when firing
off jquery click simulations. The buttons were being clicked too fast, presumably before the associated callback actions
for the previous button clicks were finished. I figured I'd bypass the UI and model the roster in a plain old javascript
object. The espn API was undocumented, but things weren't too hard to figure out because espn's javascript wasn't
minified. I was able to figure out some initially non-obvioius things like swapping the point guard with the shooting guard
was modeled as '?trans=0_1|1_0' in the API. And that the util slots and bench slots weren't distinct positions (9-12 and 13-16), but containers
with a single identifier, 9 and 10.

About the algorithm: the initial roster model reaches its optimal configuration through a depth first search on intermediary roster configurations.
The player transitions required to generate intermediary roster configurations are logged, and applied via AJAX to set the rosters.
Since it's a DFS, dumb transitions are included, however, DFS does not incur the memory overhead BFS requires. I perform
DFS in multiple passes:

1. First pass finds a maximally packed roster full of healthy players
2. Second pass fits injured players if there's room, giving priority to Day to day players, over Out players.
3. Third pass ensures highest PR players are starting.

I encountered quite a bit of bugs with the espn roster setter, so I acquainted myself with the jasmine testing framework.
I used it to test for regressions as I added features like the multiple DFS passes, and to unit test the project's modules
in isolation. Roster movement logic involved a lot of domain specific rules like:

- Players can only transition to a position they play
- Injured players should not occupy a starting slot during the first DFS pass
- etc... etc... etc...

I realize this post was boring and dry. I'll work on that in the future.

All in all, I'm very proud of this project, even though the code could obviously be improved upon. I've personally used it
multiple times, and I've received positive feedback from friends. In total, I learned how to use coffeescript,
jasmine, and underscore. All 3 are tools that have continued to improve my productivity. I also recommend coffeescript
because it increased my understanding of vanilla javascript through coffeescript's compiled output.
I thought the coffeescript output was a strange black box initially,
but understanding the advanced patterns it uses made me a better javascript developer.
