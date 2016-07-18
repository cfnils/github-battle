var React = require('react');
var ReactDOM = require('react-dom');

var HelloAssholes = React.createClass ({
	render: function () {
		return (
			<div> Hello Asshole aka {this.props.name}! </div>
		)
	}
});

ReactDOM.render(
	<HelloAssholes name="Ilya" />,
	document.getElementById('app')
);