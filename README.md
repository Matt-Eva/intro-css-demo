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
    color: hsl(240, 50%, 40%);
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

At the basic level, CSS specificity is pretty straightforward. The universal selecter -`*`- is the least specific selector, tag name selectors - like `div` - are the second least specific, followed by classnames - `.info-text` - and finally Ids - `#specific-header` - which are the most specific selector. In case this still isn't clear, let's run through a little example. We'll start off by setting a background color using our universal selector.

```
* {
    background-color: green;
}
```

Now let's that we want all of our `<h1>` elements to have a different background color. Because using a tag name is _more specific_ than using the universal selector, we can _overwrite_ the styles set using our universal selector for our `<h1>` elements.

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

