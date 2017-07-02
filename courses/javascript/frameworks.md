## About JavaScript

Paris Kasidiaris

[@pariskasid](https://twitter.com/pariskasid) / [paris@sourcelair.com](mailto:paris@sourcelair.com)


## Agenda

* Intro to the JavaScript ecosystem
* JavaScript frameworks
* Introduction to jQuery

## About the JavaScript ecosystem

> The JavaScript ecosystem is fucked.

\- Paris Kasidiaris, Athens, today 2:00 AM


## JavaScript tools

- Compilers (e.g. TypeScript or CoffeeScript)
- Utilities (e.g. Gulp or Webpack)
- Back-end tools (e.g. Express or Sails)
- Front-end frameworks (e.g. React or jQuery)
- and **tons** of more


## JavaScript compilers

JavaScript compilers unsuck our JavaScript.

They let us write more expressive languages instead of JavaScript.


## JavaScript utilities

They let us organize and package our applications.

- Mocha lets us perform tests on our code base
- Gulp lets us run tasks with ease (e.g. release a new version)
- Webpack lets us package our application for production


## JavaScript back-end tools

JavaScript can run on the server with Node.js

Tools like Express or Sails allow us to achieve similar results with:

- Servlets
- MVC Framework

...but with JavaScript


## Front-end frameworks

Front-end frameworks

1. Dictate a style of code
2. Take the busywork away and let us focus
3. ... essentially we can write less and better code

React and jQuery are two of these frameworks.


## About React

A JavaScript library for building user interfaces.

React suits great data-intensive applications.

**REACT IS ONLY FOR USER INTERFACES**


## Example React component

React uses its own JSX language

```javascript
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, mountNode);
```


## jQuery

jQuery is a fast, small, and feature-rich JavaScript library.

It makes things like HTML DOM manipulation, event handling, and Ajax much simpler.


## DOM Manipulation with jQuery

```javascript
$('#my-div').text('New text content')
```


## Event handling with jQuery

```javascript
$('#my-div').on('click', function () {
  alert('I clicked on the div!');
});
```


## Asynchronous HTTP with jQuery

```javascript
var url = 'https://cors-anywhere.herokuapp.com/https://www.example.com';

$.get(url, function(result) {
    $('#my-div').html(result);
});
```

## Thank you 🏊
