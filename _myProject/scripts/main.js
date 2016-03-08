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
  getInitialState : function() {
    return {
      fishes : {},
      order : {}
    }
  },
  addFish : function(fish) {
    var timestamp = (new Date()).getTime();
    // update the state object
    this.state.fishes['fish-' + timestamp] = fish;
    // set the state
    this.setState({ fishes : this.state.fishes });
  },
  loadSamples : function() {
    this.setState({
      fishes : require('./sample-fishes')
    });
  },
  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh food for Sea Dawgs!"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
});

/*
  Add fish form
  <AddFishForm />
*/

var AddFishForm = React.createClass({
  createFish : function(event){
    // prevent default
    event.preventDefault();
    // create object form the form data
    var fish = {
      name : this.refs.name.value,
      price : this.refs.price.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
    // add the Fish to the App state
    this.props.addFish(fish);
    this.refs.fishForm.reset();
  },
  render : function() {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name"/>
        <input type="text" ref="price" placeholder="Fish Price" />
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="submit">+ Add Item </button>
      </form>
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
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
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
      <section>
        <h2>Inventory Bro!</h2>
        <AddFishForm {...this.props} />
      </section>
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
    // thisransition from StorePicker to App
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
