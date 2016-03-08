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
	* Helpers in this sense are simply a series of pre-fab functions that are under the scope of `helper`. I feel like I can call it `tools` or `helper-functions`? Is there is no official scope of a 'helper'? I can't can see this. 
	* Really ... what is the difference between this `helpers` concept and `mixins`? 
	
* Event Listeners 
	* Happens inline with react components using HTML standards
	* using the attr `onSubmit` pass in the React JS with `={}`
	* Create the submit function within the scope of the class or inject a reusable component. 


* The use of __Mixins__ in React is not recommended, in fact it's pretty much deprecated

* State in React is interesting as the STATE of data is not kept in the HTML as may other frameworks do, but STATE is kept in a JavaScript object and React updates the DOM based on the STATE of the data
	* So ... `state` in React is referring to `data within the view`?
	* `getInitialState` is something to be aware of ... it's considered an [anti-pattern](https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html) if it is not clearly stating that this is seed data 
	
* Using a `spread` to transfer data (or state) between components 
	* within the scope of the form that is handling the data, use Props within the React component and add `{...this.props}`
	
		```
		<ReactComponent {...this.props} />
		```

	* [read more](https://facebook.github.io/react/docs/transferring-props.html#transferring-with-...-in-jsx) 





























