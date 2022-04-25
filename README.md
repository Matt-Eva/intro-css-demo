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

h1{
    font-family: Caveat;
}
```
