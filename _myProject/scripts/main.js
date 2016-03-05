var React = require('react'),
  ReactDOM = require('react-dom');

var ReactRouter = require('react-router'),
  Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  Navigation = ReactRouter.Navigation,
  createBrowserHistory = require('history/lib/createBrowserHistory');

/*
  This is the app
*/

var App = React.createClass({
  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh food for Sea Dawgs!"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});

/*
  Header component
*/

var Header = React.createClass({
  render : function() {
    return (
      <header className="top">
        <h1>Catch of the Day</h1>
        <h3 className="tagline">{this.props.tagline}</h3>
      </header>
    )
  }
});

/*
  Order component
*/

var Order = React.createClass({
  render : function() {
    return (
      <p>This is a order</p>
    )
  }
});

/*
  Inventory component
*/

var Inventory = React.createClass({
  render : function() {
    return (
      <p>This is a inventory</p>
    )
  }
});

/*
  StorePicker
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit" />
      </form>
    )
  }

});

/*
  404 error component
*/

var notFound404 = React.createClass({
  render : function() {
    return (
      <h1>You lost bro?!</h1>
    )
  }
});

/*
  Routes
*/
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={notFound404} />
  </Router>
);


ReactDOM.render(routes, document.querySelector('#main'));
