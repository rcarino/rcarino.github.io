---
layout: post
title:  "How it's made"
categories: how-to
---
First off, I want to say that I don't aspire to make this the most informative source on how to implement a blog. Rather, this
is more of an exercise in documentation for me. I will pay particular attention to the pitfalls I got snagged by.
There are plenty of more authoritative sources out there, and I'll reference them when appropriate.

From 5000 feet, here's how this blog is implemented:

1. hosted on github pages
2. domain name is registered through register.com
3. uses Disqus for comments.

I started off with the [github pages user site tutorial](http://pages.github.com/). Following it verbatim resulted in a
very spartan site which displayed "Hello world" at rcarino.github.io.

My next step was to setup Jekyll locally. Jekyll is a tool which "Transform[s] your plain text into static websites and
blogs". Here's an example: my posts are stored without any markup [here](https://github.com/rcarino/rcarino.github.io/tree/master/_posts).
Using magic, jekyll will apply templating to these plaintext posts, infer numbered lists, paragraphs, and probably a bunch
of other stuff I have yet to discover.

The jekyll documentation was a little too long for my attention span to handle, so I just followed the [quickstart](http://jekyllrb.com/docs/quickstart/)
to install jekyll. Next, I auto generated scaffolding files to get my github pages to match the structure [here](http://jekyllrb.com/docs/structure/),
using this command
{% highlight bash %}
jekyll new rcarino.github.io # This should be your github pages directory
{% endhighlight %}

Jekyll will complain that the directory is not empty, so I used the command on an empty directory and moved the contents
back into my github pages directory.
{% highlight bash %}
jekyll new stub # This should be your github pages directory
mv stub/* rcarino.github.io
cd rcarino.github.io
jekyll serve
{% endhighlight %}

The follow site should be availabe on localhost:4000
![Ugly fresh jekyll site](/images/blog_how_to/vanilla_jekyll.png)

To get the site prettier, I applied a premade theme by following the steps in [this guide](https://github.com/blog/1081-instantly-beautiful-project-pages)
exactly.

This step smashes your index.html. [example here](https://github.com/rcarino/rcarino.github.io/commit/49ed17cd355115645b855be3c70cb770c4bd98a1),
so you will have to port over the changes to the layouts/default.html, like [so]( https://github.com/rcarino/rcarino.github.io/commit/979016ac8eac816c6b909f0106f95e97fd2580b0).

You should have something that looks mostly like my site now ![how my site is now](/images/blog_how_to/site_now.png)

Next, you're probably not going to want a blah.github.io domain, so you'll have to purchase a domain name from a registrar.
I got mine from register.com via a promotion which lets me have my first year for $.50. Not sure if the 50 cent price-tag
primed me to expect shady things in the future, but I used a Discover-one-time-use credit card number to finalize the purchase.
I did not want to deal with any explosive recurring charges.
[discover secure online account numbers](https://www.discover.com/credit-cards/help-center/faqs/soan.html).

Link up your domain with the following [tutorial](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).
However, don't use an apex/naked domain like example.com(the lack of www makes it naked FYI) with register.com.
You'll want to use a www.domain like [this](https://github.com/rcarino/rcarino.github.io/blob/master/CNAME). Register.com won't allow you to
attach a cname to a naked domain. Here's the [register.com tutorial](http://www.register.com/customersupport/tutorials/cname.rcmx)
for making www.shaboyrayz.com point to rcarino.github.io.

Finally, I used Disqus for comments. [Setting it up](http://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions)
was stupid easy.

I'm still trying to learn the ropes with jekyll in terms of styling templates and using its plaintext markdown features.
I've been scouring example source code [here](http://jekyllrb.com/docs/sites/) to pick up nifty things.

Next up on the agenda is to add tracking and maybe do some SEO optimizations to get my site higher up on google searches.
