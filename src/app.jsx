import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {amountDue: '', amountReceived: '', output: false, twenties: false, tens: false, fives: false, ones: false, quarters: false, dimes: false, nickels: false, pennies: false}
    this.handleChange = this.handleChange.bind(this);
    this.button = this.button.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: parseFloat(event.target.value)});
  }
  button() {
    const {amountDue, amountReceived} = this.state;
    let changeDue = (amountReceived-amountDue).toFixed(2);

    this.setState({output: changeDue});
    let dollars = Math.floor(changeDue);
    changeDue = (changeDue-dollars).toFixed(2);
    
    let twenties = Math.floor(dollars/20);

    dollars = dollars-twenties*20;

    let tens = Math.floor(dollars/10)

    dollars = dollars-tens*10;

    let fives = Math.floor(dollars/5);

    dollars = dollars-fives*5;

    let ones = Math.round(dollars/1);

    let quarters = Math.floor(changeDue/.25);
    changeDue = (changeDue - quarters * .25).toFixed(2);

    let dimes = Math.floor(changeDue/.10);
    changeDue = (changeDue - dimes * .10).toFixed(2);

    let nickels = Math.floor(changeDue/.05);
    changeDue = (changeDue - nickels * .05).toFixed(2);

    let pennies = Math.round(changeDue/.01);

    this.setState({twenties: twenties, tens: tens, fives: fives, ones: ones, quarters: quarters, dimes: dimes, nickels: nickels, pennies: pennies})
    
  }

  render() {
    
    return (
<div id="page">
  <h1>Change Calculator</h1>
  <hr/>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-2">
      <div className="col-md-4">
        <div className="card mt-1" id="card">
          <div className="card-header">Enter Information</div>
          <div className="card-body">
            <label className="form-label">How much is Due?</label>
            <input className="form-control" type="number" name= "amountDue" defaultValue={this.state.amountDue} onChange={this.handleChange}/>
            <label className="form-label" id="rec">How much was Received?</label>
            <input className="form-control" type="number" name= "amountReceived" defaultValue={this.state.amountReceived} onChange={this.handleChange}/>
            <div className="col-sm-12 mx-auto">
            <button className="btn btn-primary w-100" type="button" name="button" onClick={this.button}> Calculate </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8" id="output-box">
      <div className="card text-center mt-1 mb-2">
      <div className="card-body">
      {
        this.state.output > 0 ? <div className="alert alert-success" name="output" id="output" onClick={this.button}>{`The total change due is $${this.state.output}`}</div> : this.state.output < 0 ? <div className="alert alert-danger" name="output" id="output"> {`More money needed`} </div> : this.state.output == false ? <div></div> : <div></div>
      }
        <div className="row mb-2">
        <div className="col-sm-3">
        <div className="card mb-1">
            <label className="fw-bold mt-1 mb-1">Twenties</label>
            <p className="change" onClick={this.button}>{this.state.twenties}</p>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="card mb-1">
          <label className="fw-bold mt-1 mb-1">Tens</label>
            <p className="change" onClick={this.button}>{this.state.tens}</p>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="card mb-1">
            <label className="fw-bold mt-1 mb-1">Fives</label>
            <p className="change" onClick={this.button}>{this.state.fives}</p>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="card mb-1">
            <label className="fw-bold mt-1 mb-1">Ones</label>
            <p className="change" onClick={this.button}>{this.state.ones}</p>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-3">
        <div className="card mb-1">
            <label className="fw-bold mt-1 mb-1">Quarters</label>
            <p className="change" onClick={this.button}>{this.state.quarters}</p>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="card mb-1">
          <label className="fw-bold mt-1 mb-1">Dimes</label>
            <p className="change" onClick={this.button}>{this.state.dimes}</p>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="card mb-1">
            <label className="fw-bold mt-1 mb-1">Nickels</label>
            <p className="change" onClick={this.button}>{this.state.nickels}</p>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="card">
            <label className="fw-bold mt-1 mb-1">Pennies</label>
            <p className="change" onClick={this.button}>{this.state.pennies}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
 </div>
 </div>
 </div>
 </div>
    )
  }
}

export default App;
