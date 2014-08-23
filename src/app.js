/** @jsx React.DOM */
'use strict';

var React = require('react');

window.React = React;

var APP = React.createClass({
  getInitialState: function() {
    return {
      txt: '',
      id: 0
    };
  },
  updateTxt: function(e) {
    this.setState({txt: e.target.value})
  },
  render: function() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.updateTxt} />
        <Widget txt={this.state.txt} update={this.updateTxt} />
        <Widget txt={this.state.txt} update={this.updateTxt} />
      </div>
    )
  }
});

var Widget = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" onChange={this.props.update} />
        <h1>{this.props.txt}</h1>
      </div>
    )
  }
});

React.renderComponent(<APP />, document.body)
