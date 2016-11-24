## Asynchronous JavaScript

Paris Kasidiaris

[@pariskasid](https://twitter.com/pariskasid) / [paris@sourcelair.com](mailto:paris@sourcelair.com)


## Agenda

* Intro
* DOM event listeners
* Important DOM events
* Asynchronous HTTP requests


## Intro

JavaScript is a single-threaded language.

Only one line of code is being run at a given time.

We need to interact with user input though in real time.


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
