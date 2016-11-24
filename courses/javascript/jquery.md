## Intro to jQuery

Paris Kasidiaris

[@pariskasid](https://twitter.com/pariskasid) / [paris@sourcelair.com](mailto:paris@sourcelair.com)

## Agenda

* About jQuery
* Including jQuery in our website
* Syntax overview
* The jQuery object
* The jQuery prototype
* Traversing the DOM
* Manipulating the DOM
* DOM events
* AJAX
* Learning more about jQuery


## About jQuery

jQuery is a fast, small, and feature-rich JavaScript library.

It makes things like DOM traversal and manipulation, event handling, animation, and Ajax much simpler.


## Including jQuery in your website

There are many ways to include jQuery in your website.

The easiest one is by using jQuery's CDN.

```html
<!doctype html>
<html>
  <head>
    ...
    <script
      src="https://code.jquery.com/jquery-3.1.1.min.js"
      integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    ...
  </body>
</html>
```


## Syntax overview

There are 4 different syntactic ways to interact with jQuery.

```javascript
$(selector).method(function () { ... });  // Run function (callback) for each matched element

$('<div></div>')  // Create an DOM element based on the given HTML

$(function () { ... })  // Run function after the DOM loads

$.method()  // Run a "static" method
```


## The jQuery object

By including jQuery in our website, we get access to **2 objects**:

- `jQuery`: the main jQuery object
- `$`: a shortcut to jQuery

```javascript
$ == jQuery  // true
```


## The jQuery prototype

jQuery immitates JavaScript's prototype mechanism.

All methods of the `$.fn` object can be used on jQuery selected elements.

```javascript
$.fn.printElement = function () {
  console.log(this);
};

$('.pretty').printElement();  // Will print all elements with "pretty" class
```


## Traversing the DOM

jQuery lets us traverse the DOM in 3 ways:

```javascript
$('div.pretty');  // Access DOM elements via CSS selectors

$(oneImg);  // Access an element by passing it as a parameter

$([oneDiv, anotherImg]);  // Access multiple DOM elements via an array
```

**⚠️  Attention!** If we create new elements that match our CSS selectors, we have to re-run the query to traverse them.


## Manipulatig the DOM

jQuery let's us manipulate multiple elements easily.

Method chaining makes multiple operations much easier.

```javascript
// Disable all buttons and then update their text
$('button').attr('disabled', 'disabled').text('Do not click me.');
```


## DOM events

jQuery allows easy reaction to DOM events on multiple elements

```javascript
// Disable every button when it gets clicked
$('button').on('click', function () {
  $(this).text('clicked').attr('disabled', 'disabled');
});
```


## AJAX

jQuery provides us with easy methods for asynchronous HTTP requests.

```javascript
  $.ajax({
    url: 'http://coding-bootcamp.pkasid.com',
  })
  .done(function(data) {
    $('#response-text').text(data);
  });
```


## Learning more about jQuery

The best places to learn more about jQuery are:

- The jQuery Learning Center: http://learn.jquery.com/
- The CodeCademy jQuery course 🆓 : https://www.codecademy.com/learn/jquery
