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
	
* Props: Exactly like attributes in HTML, but are attributes of React HTML components. 
	
	```
	// 'Header' is a React component, 'tagline' is a Prop
	<Header tagline="Fresh food for Sea Dawgs!"/>
	
	// h3 is a HTML element using the Prop to populate the DOM
	<h3 className="tagline">{this.props.tagline}</h3>
	```
	
* React does not come with a build in router, need to install `react-router`
	* Routes are written in JSX versus JS
	
	```
	var routes = (
	  <Router history={createBrowserHistory()}>
	    <Route path="/" component={StorePicker} />
	    <Route path="/store/:storeId" component={App} />
	    <Route path="*" component={notFound404} />
	  </Router>
	);
	```
	
	* Browser history is awkward in React due to additional engineering over `History.pushState()` support. 
	* npm history for cleaner JS browser history support
	* require in header variables;
	
	```
	createBrowserHistory = require('history/lib/createBrowserHistory')
	```


* Helpers; more on this later for sure, but the concept again seems as another use for JS functions.
	* Helpers in this sense are simply a series of pre-fab functions that are under the scope of `helper`. Call it tools or helper-functions. There is no official scope of a 'helper', as I can see this. 
	
* Event Listeners 
































