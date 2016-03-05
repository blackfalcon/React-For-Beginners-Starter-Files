# Things learned from React.js

* XHTML strict `<input type="Submit" />`
* `class` is a reserved work in JSX, need to use `className` as in `<form className="store-selector">`
* Interpolate variables using `{}`
	
	```
		var name = "Dale";
	
		<h2>Hi {name}!</h2>
	```
* HTML comments in JSX is stupid `{/**/}`, don't do it! Just use js comments
* Basic structure for a React component
	
	```
	var Component = React.createClass({
		render : function() {
			return (
				<p>This is a Component</p>
			)
		}
	});
	```