import React, { Component } from 'react';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom'

export default class CryptoList extends Component {
  render() {
    return this.props.currencies.map(({ name,symbol, quote }) => {
      let price = quote.USD.price;
      // console.log(quote.USD.price);
      return (
        
        <React.Fragment>
          <Link to={`/currency/${symbol}`}>
          <Card>
            <List>
              <li key='i'>{ name } <br/> {symbol} USD: ${ price }</li>

            </List>
          </Card>
          </Link>
          
          
        </React.Fragment>
      )
    })

  }
};

// const cryptoList = ["Bitcoin", "Ethereum", "Ripple", "Bitcoin Cash", "Litecoin"];



//     let cList = cryptoList.map((val, i, cryptoList) => {
//     return <li> <Link to={`/currency/`} >{val}</Link></li>
// });