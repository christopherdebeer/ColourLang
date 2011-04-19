# Explinations and process

This page is just a rough experiment with the concept of colour as language after reading a blog post at [Aesthetics of Joy](http://aestheticsofjoy.com/2011/04/a-color-language/), where Ingrid looked at the work of Kyo Myoung Kim (I couldnt find a difinitive URL to link to). She spoke wonderfully about what such a language would look like, how it would function, and what it would mean to those that used it.

>"A reader would not actually need to understand the language to feel some of the meaning. Like spoken language, where we understand much from inflection, even in languages we’ve never heard before. One could flip through a book in this color language and feel the arc of the story, understanding the emotional narrative if not the descriptive one.

>This language also would mean the same speech might look different when uttered by a different speaker. I’m imagining a poem written in this language, transcribed as read by three different readers. How different these would look, but still comparable, because all the hues would be the same. Or imagine a small book, with a series of poems as read by two readers, the two variations facing each other across the pages." [Ingrid of Aesthetics of Joy](http://aestheticsofjoy.com/2011/04/a-color-language/)


# The system

This is the way I've gone about compiling the connections between roman letters and colours. Letters "a-z" are coloured by Hue, from "a" : 0 to "z" : 360. Capital letters have far more saturation than lower-case letters, Numbers are greysacale, ranging from light to dark, 0-9

This is just an experiment and I may elaborate on it in the future, it would be interesting to add NLP (Natural language processing) and Tone analysis, so as to grade the tone of words/sentences and adjust the saturation of characters accordingly, but this is just an idea, and I'm still considering which of the many available APIs to use for this.


# To Do

So this isnt a particularly useful project I will admit, but it is a nice idea, moving forward, I will mostlikly package it as a jQuery plugin even though its painfully simple, and not particularly useful.

1. Package as a jQuery plugin
2. I'm hoping to implement a NLP/Tone Analysis services API so as the grade the saturation of the "words"
3. Generally improve how it does what it does
4. Think of useful applications and implement them