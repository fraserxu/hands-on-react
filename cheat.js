/**
 * Hello World
 */
// React.renderComponent(
//   <h1>Hello, React!</h1>,
//   document.body
// );

/**
 * render Method
 */
// var APP = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>Hello React Render method.</h1>
//       </div>
//     )
//   }
// });

// React.renderComponent(<APP />, document.body)


/**
 * setting properties
 */
// var APP = React.createClass({
//   getDefaultProps: function() {
//     return {
//       txt: 'awesome txt from default props',
//       cat: 'default prop cat'
//     };
//   },
//   propTypes: {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.string.isRequired
//   },
//   render: function() {
//     return (
//       <div>
//         <h1>{this.props.cat}</h1>
//       </div>
//     )
//   }
// });

// React.renderComponent(<APP cat={5} />, document.body)



/**
 * state basics
 */
// var APP = React.createClass({
//   getInitialState: function() {
//     return {
//       txt: '',
//       id: 0
//     };
//   },
//   updateTxt: function(e) {
//     this.setState({txt: e.target.value})
//   },
//   render: function() {
//     return (
//       <div>
//         <input type="text" onChange={this.updateTxt} />
//         <h1>{this.state.txt}</h1>
//       </div>
//     )
//   }
// });

// React.renderComponent(<APP />, document.body)


/**
 * owner and owneee
 */
// var APP = React.createClass({
//   getInitialState: function() {
//     return {
//       txt: '',
//       id: 0
//     };
//   },
//   updateTxt: function(e) {
//     this.setState({txt: e.target.value})
//   },
//   render: function() {
//     return (
//       <div>
//         <Widget txt={this.state.txt} update={this.updateTxt} />
//         <Widget txt={this.state.txt} update={this.updateTxt} />
//         <Widget txt={this.state.txt} update={this.updateTxt} />
//       </div>
//     )
//   }
// });

// var Widget = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <input type="text" onChange={this.props.update} />
//         <h1>{this.props.txt}</h1>
//       </div>
//     )
//   }
// });

// React.renderComponent(<APP />, document.body)