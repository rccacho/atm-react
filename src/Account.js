import React, { Component } from 'react';

export default class Account extends Component {

  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
  }
  deposit(){
    let amount = parseInt(this.refs.amount.value)
    this.setState({
      balance: this.state.balance + amount
    });
  }
  render() {
    // set the default class to `balance` for the balanceClass.
    let balanceClass = 'balance';
    // if the balance is 0, then add the class zero to balanceClass
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(e) => this.deposit(e)} />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}
