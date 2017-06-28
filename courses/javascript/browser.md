## JavaScript in the browser

Paris Kasidiaris

[@pariskasid](https://twitter.com/pariskasid) / [paris@sourcelair.com](mailto:paris@sourcelair.com)


## Agenda

* Intro
* The DOM
* Asynchrony in JavaScript


## Intro

The most ubiquitous JavaScript environment is the browser.

Every supported browser carries a JavaScript interpreter.

JavaScript in the browser lets us create interactive applications.


## About the DOM

The Document Object Model (DOM) is a programming interface for HTML.

It provides a structured representation of the document (e.g. a web page) as a tree.

It provides ready methods that let us "play" with the document tree.


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

[coding-bootcamp.pkasid.com/exercises/javascript/6_dom_modify/](http://coding-bootcamp.pkasid.com/exercises/javascript/6_dom_modify/)
[developer.mozilla.org/en-US/docs/Web/API/HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)


## Learning more about the DOM

The Document Object Model is a **huge** resource.

The Mozilla Developer Network is your best friend.

[developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)


## About asynchrony in JavaScript

The browser is a single-threaded JavaScript environment.

Only one line of code is being run at a given time.

This introduces constraints when interacting with users or servers


## The DOM event system

We use DOM events to react on user input (e.g. click on a button).

```javascript
var button = document.getElementById('mybutton');

button.onclick = function () {
  this.textContent = 'Clicked!';
}

// This is the preferred syntax
button.addEventListener('click', function () {
  this.textContent = 'Clicked!';
});
```


## Important DOM events

- `load`: Triggered on `window` when it finishes loading
- `click`: Triggered on an element when it gets clicked
- `focus`: Triggered on an element when it receives focus
- `keypress`: Triggered on a focused element when the user presses a key

[developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)


## Asynchronous HTTP requests

Some times we need to "talk" with the server without reloading the page.

This is where we use asynchronous HTTP, also known as AJAX or XHR.

```javascript
var exampleRequest = new XMLHttpRequest();
var responseText = document.getElementById('response-text');

exampleRequest.addEventListener('load', function () {
  responseText.textContent = this.responseText;
});
exampleRequest.open('GET', 'http://www.example.org/example.txt');
exampleRequest.send();
```

## Thanks 😍