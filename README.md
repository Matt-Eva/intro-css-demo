# Intro to CSS

This application serves as an introduction to fundamental CSS concepts, including CSS selectors, CSS Specificity and Hierarchy, writing CSS, the Box Model, and other fundamental styling attributes in CSS. I'd recommend forking, cloning, and opening this repository as you read along, so you can use the code files as reference.

## What is CSS?

CSS stands for "Cascading Style Sheets" - it's the styling language of the web. We use it in conjunction with HTML and JavaScript to make dynamic, appealing, easily navigable webpages. If HTML is the bones of a webpage, then CSS is the flesh of a webpage. (And frontend JavaScript is the nervous system and your backend is the brain.)

In order to style our webpage, we attach CSS styles to our specific HTML elements - think `<div>, <h1>, <p>, and <img>` elements, among many others. There are two essential steps to connecting our HTML elements to their corresponding CSS styling instructions - connecting our HTML and CSS files, and using the appropriate CSS Selectors.

## Connecting HTML and CSS Files

When building out HTML for your webpage, there are a few sections that you'll likely fill out before you actually start creating HTML elements. One of these sections is the `<head>` section. You'll connect your CSS to your HTML using a link tag in this head section. Your head section will likely look like this:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Title of your Webpage</title>
    <link rel="stylesheet" href="<Your CSS Filename>"/>
</head>
```

Notice the `<link>` tag with `rel="stylesheet"` and `href="<Your CSS Filename>"`. This is the link tag you'll need to add to your HTML document in order to connect your CSS to your HTML. the `href` here is referencing the _relative path_ to your CSS file. If your CSS file is in a separate folder than your HTML file, you'll need to specify that in your `href`. Otherwise, you'll receive an error.

## CSS Selectors

Now that you've got your CSS file hooked up to your HTML file, it's time to start selecting some HTML elements! Take a look at the `basics.html` file and the `basics.css` file - we'll be referencing both throughout the following sections.

### Using a Selector / Writing CSS

When writing CSS, we'll reference a specific selector (universal, tagname, id, classname, etc.), then write the styles we want to apply to that element / that set of elements within curly braces. Each CSS styling attribute will consist of an attribute name and an attribute style separated by a colon. Different sets of corresponding names and styles are separated by a semicolon. So, your CSS will end up looking something like this:

```
<css selector> {
    <css attribute name>: <css attribute style>;
    <css attribute name>: <css attribute style>;
    <css attribute name>: <css attribute style>;
}
```

Now, let's talk about some of the most common selectors you'll use in your code.

### The Universal Selector

If you check out your `bascis.css` file, you'll see that at the top of our file we're using the `*` symbol. This sybmol is known as the "universal selector". Using this selector means we're telling our CSS file to grab every HTML element in file and apply the following set of styles to it. In this example, we're giving every element a `padding` of `0`, a `margin` of `0`, and a `box-sizing` of `border-box` (we'll discuss what these each mean in a later section).

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Tag Name Selectors

On a slightly more specific level, we can use HTML tag names - ` div, p, h1, img, etc` - to select all HTML elements of that tag name type and apply styles to them. We can even do this to our `<body>` tag, which wraps the rest of our HTML elements. In our `basics.css` file, you'll notice that we're selecting our `body` tag and all of our `h1` tags. We're giving our `body` a background color and our `h1s` a font-family of `Caveat`. This sets the font family of _all_ `h1` tags in our document to `Caveat`.

```
body {
    background-color: hsl(184, 31%, 46%);
}

h1 {
    font-family: Caveat;
}
```

### Selecting by Id

Check out our `basics.html` file. You'll notice that we have an `<h1>` tag with an id attribute of "specific-header" within its opening tag. By giving our HTML elements Ids, we can select them in our CSS files (and in our JavaScript files). Ids a special in that only one HTML element can have a certain Id - it's a very specific way to select a certain HTML element.

To select an HTML element by its Id in our CSS file, we use the `#` symbol in conjunction with the Id name. For example, in our `basics.css` file, we're selecting our "specific-header" `h1` by writing `#specific-header`. We can then give is a set of styles:

``` 
#specific-header {
    color: purple;
    background-color: hsl(60, 20%, 80%);
    border: solid;
    margin: 10px 80px 20px 10px;
}
```
If you look elsewhere in our `basics.css` file, you'll notice that we're using Id selectors to grab our `#info-section` `div` and our `#mountain-pic` `img`.

### Selecting by Classname

While selecting elements by their Id offers us a high level of specificity, sometimes we'll want to apply styling more generally, while still being more specific than just using general tag names. We can do this using classnames.

Classnames can be given to multiple elements throughout your HTML file - elements can also have more than one classname. In general, you'll find that most people rely primarily on Classnames for selecting HTML elements (especially once you start working in React), but there are instances in which using other selector methods may be more appropriate.

Let's take a look at our `<p>` tags within our `info-section` `<div>`. You'll notice that each `<p>` tag has a class of "info-text" - two of our `<p>` tags also have a class of "bold-text".

To select elements by Class in our CSS files, we prepend the name of the class with a `.` If you check out our `basics.css` file, you'll notice that we're using `.info-text` and `.bold-text` to select our elements with those Classes. Then we're giving them a set of styles:

```
.info-text {
    font-family: Helvetica;
    font-size: 20px;
}

.bold-text {
    font-weight: bold;
}

```

If you check out `basics.html` in your browser, you'll notice that only the two paragraphs that have been given the additional class of `.bold-text` have bold font.

## Specificity and Hierarchy

One key aspect of CSS is that we're able to override styles we've already written using more _specific_ selectors. This allows us to set general, default styles for HTML elements on our webpage, then overwrite them as needed to achieve a specific aesthetic. The rules of CSS specificity, however, are a little bit strange.

### General Specificity Overview

At the basic level, CSS specificity is pretty straightforward. The universal selecter -`*`- is the least specific selector, tag name selectors - like `div` - are the second least specific, followed by classnames - `.info-text` - and finally Ids - `#specific-header` - which are the most specific selector. In case this still isn't clear, let's run through a little example. We'll start off by giving all of our HTML elements a green background color using our universal selector.

```
* {
    background-color: green;
}
```

Now let's imagine that we want all of our `<h1>` elements to have a different background color. Because using a tag name is _more specific_ than using the universal selector, we can _overwrite_ the styles set using our universal selector for our `<h1>` elements.

```
h1 {
    background-color: blue;
}
```
Now our `<h1>` elements will all have a blue background - however, all of our other elements will still have a green background, because the background-color set by the universal selector _still applies_. In order for it to not apply, we have to specifically overwrite it.

Let's go further - maybe we have a subset of `<h1>` elements that we want to give an orange background to. Maybe we also want to change their font family to Helvetica. Seems like a good time for a class! We give them a class of "helv-orng".

```
.helv-orng {
    background-color: orange;
    font-family: Helvetica;
}
```

All of our `<h1>` elements that we've given this classname will now have orange backgrounds and Helvetica font. All of our other `<h1>` elements will have blue backgrounds and default font, while all other elements on our page will still have green backgrounds. Each level of styling is still technically _applying_ to all of the selected elements, its just that we've selected certain elements using more specific selectors and overwritten previously set styles.

Finally, we want to select a single `<h1>` element and give it a purple background. We've already given it a class of `.helv-orng`. Now, we're going to give it an Id of `#purple-h`.

```
#purple-h {
    background-color: purple;
}
```

Our Id selector now overrides our class selector, so the background is purple instead of orange. However, the font-family of our `#purple-h` is still Helvetica, since our class still applies - we've simply overridden the background-color specified by our class using our Id selector.

### Selecting by Child Elements

What we didn't discuss in the previous section about CSS Selectors is the fact that you can select elements by referencing the parent element, then referencing a child element or set of child elements within that parent element. The reason that we're discussing this here is that doing things like this can make specificity go pretty wonky.

Generally speaking, specifying a parent element then a child element within that parent element counts for greater levels of specificity. For example, if we uncomment the `body h1` selector in our basics.css file, it will overwrite our `h1` selector, even though they're technically selecting the same set of `h1` elements. 

```
h1 {
    font-family: Caveat;
}

body h1{
    /* This set of styles will override the set of styles above */
    font-family: 'Times New Roman';
    color: blue;
}
```
However, our `#specific-header` selector will still override our `body h1` selector.

Let's check out a different scenario. We're specifying that we want to select the `<img>` inside of our `#info-section` div by writing `#info-section img` - telling CSS that we want to add styles to all `<img>` tags that are child elements of `#info-section`. We're also selecting that same `<img>` tag by referencing its Id, `#mountain-pic`. We have a set of contradicting styles: `#info-section img` is telling our `<img>` tag to be 20vh tall = `#mountain-pic` is telling our `<img>` tag to be 200vh tall. Which one applies?

```
#info-section img {
    background-color: hsl(180, 50%, 50%);
    height: 20vh;
}

#mountain-pic {
    height: 200vh;
}
```
In this instance, our `#info-section img` styles apply, because it technically has greater specificity due to nesting. Feeling confused? Let's break it it down a bit.

Let's run back to our first example, where `#specific-header` overrode `body h1`. Why did using an Id override styles in that instance and not in our `#info-section img` instance? Well, let's look at the outermost level of our selector `body` and `#specific-header`. Because Ids have a greater specificity than simple tag names, `#specific-header` is going to override `body h1` - the specificity of an Id counts for more than the specificity of adding `h1` after our body tag.

However, in our `#info-section img` vs `#mountain-pic` instance, both `#mountain-pic` and `#info-section` are Ids - they carry the same weight of specificity. Therefore, because they have equal rank in the specificity hierarchy at this outermost level, adding the `img` tag after `#info-section` adds greater specificity to that selector, which means its styles are the styles that ultimately apply. If we were to change `#info-section` from an Id to a class - `.info-section` - we would see our `#mountain-pic` styles suddenly apply, since Ids are more specific than classes.

Basically, specifying child elements within parents elements will only result in greater specificity when that parent element has a specificity that is greater than or equal to the specificity of contradicting styles. If those contradicting styles' outermost specificty is greater than that of the parent selector, the contradicting styles will apply. This principle holds true throughout every level of nesting.

To read more on rules of Specificity, check out <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">MDN docs</a>.

Still a little confusing? Try playing around with this stuff yourself to see what does and doesn't apply. You may not run into these type of contradictory styles often, but when you do it's helpful to know which set of styles has the greatest authority.

### Order

Because computers read CSS files from top to bottom, the order in which your CSS is written matters. Let's imagine that you have two sets of styles with equal specificity. Whichever set of styles you've written further down in your file will apply, since that's the most recent set of styles the computer has read.

```
h1 {
     color: blue;
}

h1 {
    color: red;
}
```

In the above example, the second set of styles will apply, setting the font color of all h1 elements to red. These set of styles apply because they have the _same level of specificity_ as the preceding style instructions and they _appear further down in the file_. This means the latter set of styles will successfully override the former set of styles.

## The Box Model

All HTML elements follow what's known as the **Box Model**. To get a deeper insight into what the box model actually is, check out `basics.html` in your browser, inspect your page using developer tools, and check out the elements tab. Next, expand the **Styles** section in your dev tools so that you can view your Elements tab and your styles tab simultaneously. 

Ex:

![Screen Shot 2022-04-26 at 8 30 48 AM](https://user-images.githubusercontent.com/89106805/165337358-a7ec2724-f83b-469b-bed3-6f457191990e.png)

