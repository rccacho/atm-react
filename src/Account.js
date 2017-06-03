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
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)} />
      </div>
    )
  }
}
