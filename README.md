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

Now, click on the `specific-header` `<h1>` in your elements tab. Selecting an element in your elements tab means that all the styles displayed in your styles tab are styles that apply to that specific element. Styles that are crossed out are not being applied to the element, either because they are being overridden or because they are commented out in your CSS file. 

Next, scroll down in your Styles tab until you can see the icon displaying nested rectangles, as seen in the example picture above. You'll notice that each of these rectangles has a name associated with it (except for the inner-most rectangle). These names are `margin`, `border`, and `padding` (The innermost rectangle is often referred to as `content`).

If you hover over each section - `margin`, `border`, `padding`, or `content` - you'll see that a corresponding area on your display is highlighted. This set of nested rectangles is a visual representation of the **Box Model**, which each HTML element has.

### Margin

The outermost part of the Box Model is the `margin` - this defines the space around an HTML element(how far away it is from other elements and edges, like the edge of the screen). You can adjust the margin around an HTML element using the `margin` attribute in CSS. Ex:

```
#specific-header {
    margin: 10px 80px 20px 10px;
}
```
When giving four values to a margin, the leftmost value defines the margin at the top of the element, followed by the right, bottom, and left margins. If you only specify two values, the first will determine the top and bottom margin, while the second will determine the left and right value. Passing margin a single value will set the margin on all four sides to that value.

### Border

The second outermost layer ont he box model is the `border` - this is the actual _edge_ of the HTML element, and can be given its own set of styles:

```
#specific-header {
    border: solid;
    border-width: 4px;
    border-radius: 5px;
}
```
While all elements will have a default border - the edge of the element itself - you won't see a visible border on your elements until you give them one. In the above example, I've given my element a solid border that's 4px wide and has rounded corners. You can also set border styles for specific sides of you element, using `border-top`, `border-right`, `border-bottom`, and `border-left`. 

Check out these docs to learn more about border styling:
https://www.w3schools.com/css/css_border.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/border

### Padding

Between the edge of an element and the content that element is supposed to display (such as the text in our `#specific-header`) lies the `padding` of an element. Padding is similar to margin, except it defines the space between the `border` and the `content`. We define `padding` similar to the way we define `margin`:

```
#specific-header {
    padding: 10px 40px 20px 90px;
}
```

Giving padding two values will determine top and bottom padding, respectively, while giving padding one value will set padding on all four sides (similar to margin).

### Content

The `content` portion of an element is the actual content that that element is supposed to display. This could be text form `<h1>` and `<p>` elements, or the image in an `<img>` element. Or, it could be other elements nested inside of your outer element - an `<h1>` tag inside of a `<div>`. There is no styling attribute for the `content` itself, but it's still an important part of the Box Model to understand.

## Common CSS Styling Attributes

We've covered the fundamentals of CSS - now let's talk about some actual styling attributes that you're likely to use.

### Width and Height

Perhaps unsurprisingly, you can set both the width and the height of HTML elements, using the `width` and `height` styling attribute. You can assign elements fixed value widths and heights using `px`, `em`, and `rem` values (`100px`, `1em`, `2rem`) as well as relative heights and values using `vw` (viewport width), `vh` (viewport height), and `%` (percent width or height of parent element). 

Using relative heights is a very handy tool, and you're definitely going to want to use them in certain situations, but there are a few pitfalls to be wary of:

#### vw and vh
In order for styling attributes like `vw` and `vh` to work, you must have this meta tag in the `<head>` section of your HTML file:

```
<meta name="viewport" content="width=device-width, initial-scale=1"/>
```

This tag sets the viewport width and height to be scaled to whatever device the webpage is being used upon.

#### percentages (%)

If you neglect to give a parent element a set width and / or height, then try to use a `%` value to set the width and / or height of a child element, it won't work. In order to use `%` values for the width and / or height of an element, its parent element must have an established width and / or height.

This doesn't mean that you shouldn't use `%` values for width and height - they can often come in handy - but it does mean you have to be cognizant of how your setting widths and heights along your element hierarchy. In many instances, using `vw` or `vh` is often more straightforward, since they'll always reference the viewport width or height.

### Box-Sizing

Since we just discussed the Box Model, along with all of its corresponding styles, let's jump into the `box-sizing` styling attribute, since it's responsible for controlling how the Box Model displays for HTML elements. We're going to talk about the difference between the `content-box` styling attribute and the `border-box` styling attribute, both of which can be assigned to `box-sizing`.

#### Border-box vs Content-box

All elements are given a default value of `content-box` for the `box-sizing` attribute. In other words, if you don't specifically give an element a different `box-sizing` attribute (like `border-box`), that element will have default `box-sizing` of `content-box`. But what does that mean?

It has to do with the final width and height of your element.

If you give an element with a `box-sizing` style of `border-box` a set width and height, it will not grow larger than that width and/or height, even if you give it padding and a border. This is a big difference than and element with a `box-sizing` attribute of `content-box` (which is the default - if you've never used the `box-sizing` style attribute before, it means you've been working with a `content-box` style). The width and height of a `content-box` element will be the width that's been set, plus the padding, plus the border width.

Setting all elements as `border-box` by default makes styling a lot easier - once we give any element a width and height, it will never expand beyond that width or height, even as we add padding and borders. We only have to keep track of one value, instead of three values.

Here's an example of the difference between using `border-box` and `content-box`. The yellow square is being selected by the class name basic-template, the green square is being selected by the class name `border-box, and the blue square is being selected by the class name `content-box`.

```
.basic-template{
    width: 100px;
    height: 100px;
    background-color: hsl(60, 90%, 80%)
}

.border-box {
    box-sizing: border-box;
    height: 100px;
    width: 100px;
    padding: 10px;
    border: solid;
    border-width: 4px;
    background-color: green;
}

.content-box {
    /* content-box is default for box-sizing attribute */
    box-sizing: content-box;
    height: 100px;
    width: 100px;
    padding: 10px;
    border: solid;
    border-width: 4px;
    background-color: hsl(210, 90%, 50%)
}
```
<img width="144" alt="Screen Shot 2022-04-17 at 3 56 25 PM" src="https://user-images.githubusercontent.com/89106805/165356693-8da0d8f6-b661-4e58-a24a-c82c6fd7efa8.png">


As you can see, the element with border-box never grows beyond 100px, even though we've given it the same padding and border as our element styled with content-box.
