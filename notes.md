Remaking a scroll based animation originally from mobbin.com.

Before we begin feel free to check the live version🙂


In our html we create 3 sections as follows
- A header
- A library section - which is where the animation will take place and
- a footer section.


P/S: the library section animation works with or without the header and footer section.


HTML
//code goes here

CSS
//styles goes here

P.S: we give the library section a height of 150vh so that the animation will have enough scroll space to play the animation from start to finish.


JS

we import the gsap package along with scrollTrigger.

We then set that when the document is fully loaded we run this block of code.

We use the QuerySelector to target the libary section, so we can apply scrolltrigger to it later.

A little bit of context for this animation.
We will be animating each text in the section and each of them will have the same animation where the text comes up from 400px away from it's initial position back to it's origin and an opacity from 0 to 1. Only when the first animation is done should the next one start.

So here we can use 2 options where we use the querySelectorall which gatheres all the classes and creates a nodelist and stores it in an array type fashion but is not actually an array.

or we can use the utility function from gsap .toArray()

and in a unique case also use the Array.from(document.queryselectorall(".element"));
which is what the toArray does under the hood but it looks much cleaner.

so we store the all the nodes of the class .content and store them in an array

