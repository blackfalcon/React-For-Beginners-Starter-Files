var React = require('react');
var ReactDOM = require('react-dom');

/*
  This is the app
*/

var App = React.createClass({
  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
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
      <p>This is a header</p>
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


ReactDOM.render(<App/>, document.querySelector('#main'));
