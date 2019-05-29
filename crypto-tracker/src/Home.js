import React, { Component } from 'react'
import { Card } from 'antd'
import { List } from 'antd';

export default class Home extends Component {
    
render() {
    return (
        <Card>
            <List>
                <li>{ cList }</li>
            </List>
        </Card>
    )
}
};

const cryptoList = ["Bitcoin", "Ethereum", "Ripple", "Bitcoin Cash", "Litecoin"];



    let cList = cryptoList.map((val, i, cryptoList) => {
    return <li> <a href={`/currency/`} >{val}</a></li>
});