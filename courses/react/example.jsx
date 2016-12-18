// An example (ES5)
var Greeting = React.createClass({
    render: function() {
        var tag = 'div';
        var properties = {
            className: 'greeting'
        };
        var content = 'Hello ' + this.props.toWhat;

        return React.createElement(tag, properties, content);
    }
});


// A simpler example (ES6)
class SimplerGreeting extends React.Component {
    render() {
        var tag = 'div';
        var properties = {
            className: 'greeting'
        };
        var content = `Hello ${this.props.toWhat}`

        return React.createElement(tag, properties, content);
    }
}


// An even simpler example (ES6 + JSX)
class EvenSimplerGreeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}