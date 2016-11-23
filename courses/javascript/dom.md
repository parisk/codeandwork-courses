## The Document Object Model

Paris Kasidiaris

[@pariskasid](https://twitter.com/pariskasid) / [paris@sourcelair.com](mailto:paris@sourcelair.com)

## Agenda

* Intro
* Accessing the DOM
* Accessing HTML elements
* Creating HTML elements
* Modifying HTML elements
* Learning more about the DOM

## Intro

The Document Object Model (DOM) is a programming interface for HTML.

It provides a structured representation of the document (e.g. a web page) as a tree.

It defines methods that allow access to the tree, so that they can change the document structure, style and content.

## Accessing the DOM

The browser provides us with access to DOM objects.

```javascript
// Update the page's title
document.title = 'Hello!';

// Refresh the current tab
window.reload();

// Get the element with id="button"
var button = document.getElementById('button');

// Update the button's text
button.textContent = 'Push the button!'
```

## Accessing HTML elements

```javascript
// Accessing an HTML element by ID
var d = document.getElementById('something');

// Accessing HTML elements by class name
var prettyElements = document.getElementsByClassName('pretty');

// Accessing HTML elements by CSS selectors
var prettyDivs = document.querySelectorAll('div.pretty');
```

## Creating HTML elements

```javascript
// Create a div element
var d = document.createElement('div');

// Create an image element
var img = document.createElement('img');

// Add the above elements into the web page
document.body.appendChild(d);
d.appendChild(img);
```

## Modifying HTML elements

```javascript
// Modify the text of an HTML element
d.textConent = 'This is a div!';

// Modify an attribute of an HTML element
img.src = 'https://github.com/parisk.png';

// Modify the HTML contents of an element
d.innerHTML = 'This is some <strong>bold test</strong>.';
```

## Learning more about the DOM

The Document Object Model is a **huge** resource.

The Mozilla Developer Network is your best friend.

[developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)