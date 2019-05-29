import React, { Component } from 'react';
import { Card, List } from 'antd';

export default class CryptoList extends Component {
  render() {
    return (
      <div>
         <Card>
            <List>
                <li>{ cList }</li>
            </List>
        </Card>
      </div>
    )
  }
};

const cryptoList = ["Bitcoin", "Ethereum", "Ripple", "Bitcoin Cash", "Litecoin"];



    let cList = cryptoList.map((val, i, cryptoList) => {
    return <li> <a href={`/currency/`} >{val}</a></li>
});