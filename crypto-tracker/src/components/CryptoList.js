import React, { Component } from 'react';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom'

export default class CryptoList extends Component {
  render() {
    return (
      <React.Fragment>
         <Card>
            <List>
                <li key='i'>{ cList }</li>
            </List>
        </Card>
      </React.Fragment>
    )
  }
};

const cryptoList = ["Bitcoin", "Ethereum", "Ripple", "Bitcoin Cash", "Litecoin"];



    let cList = cryptoList.map((val, i, cryptoList) => {
    return <li> <Link to={`/currency/`} >{val}</Link></li>
});