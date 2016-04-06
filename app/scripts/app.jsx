import '../styles/base.css';
import React from 'react';
import ReactDOM from 'react-dom';

var DropdownCounter = 4

var SearchButton = React.createClass({
  handleClick() {
    console.log('Search button clicked!')
  },

  render() {
    return(
      <button onClick={this.handleClick} >Search</button>
    )
  }
});

var Between = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
  return(
    <div>
      <p>Is in between <input type="text" value={this.state.value} onChange={this.handleChange}></input> and <input type="text" value={this.state.value} onChange={this.handleChange}></input></p>
    </div>
  )}
})

var Contains = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
  return(
    <div>
      <p>Contains <input type="text" filter={this.props.field} value={this.state.value} onChange={this.handleChange}></input></p>
    </div>
  )}
})

var Dropdown = React.createClass({
  getInitialState:function(){
    return {selectValue:'Name'};
  },
  handleChange:function(e){
    this.setState({selectValue:e.target.value});
  },
  render: function() {
    var message='You selected '+this.state.selectValue;
    if(this.state.selectValue === "UserLogin" || this.state.selectValue === "ScreenHeight"){
      var subset = <Between field={"Between" + this.state.selectValue}/>
    } else {
      var subset = <Contains field={"Contains" + this.state.selectValue}/>
    }
    return (
      <div>
        <select
          value={this.state.selectValue}
          onChange={this.handleChange}
        >
          <option value="Name">Name</option>
          <option value="Module">Module</option>
          <option value="Location">Location</option>
          <option value="Technology">Technology</option>
        </select>
        <p>{message}</p>
        {subset}
      </div>
    );
  }
});

var DropdownList = React.createClass({
  render() {
    var rows = [];
    for (var i=0; i < DropdownCounter; i++) {
      rows.push(<Dropdown key={i}/>);
    }
    return(
      <div>
        {rows}
        <SearchButton/>
      </div>
    )
  }
})

ReactDOM.render(<DropdownList/>, document.getElementById('root'));
