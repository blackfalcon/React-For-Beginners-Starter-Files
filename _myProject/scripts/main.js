var React = require('react'),
  ReactDOM = require('react-dom');

var ReactRouter = require('react-router'),
  Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  History = ReactRouter.History,
  createBrowserHistory = require('history/lib/createBrowserHistory');

var helper = require('./helpers');

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
  mixins: [History],
  goToStore: function(event) {
    event.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    // transition from StorePicker to App
    this.history.pushState(null, '/store/' + storeId);
  },
  render : function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required defaultValue={helper.getFunName()} />
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
