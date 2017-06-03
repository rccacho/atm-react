import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
          super(props)
          this.state = {
            balance: 0
          }
        }
  handleDepositClick(e) {
    e.preventDefault()
    let amount = parseInt(this.refs.amount.value, 10)
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.refs.amount.value = '';
  }
  handleWithdrawClick(e) {
    e.preventDefault()
    let amount = parseInt(this.refs.amount.value, 10)
    let newBalance = this.state.balance - amount;
    if (newBalance < 0) {
      newBalance = 0;
    }
    this.setState({
      balance: newBalance
    })
    this.refs.amount.value = '';
  }
  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)} />
      </div>
    )
  }
}
