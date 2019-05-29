import React, { Component } from 'react'
import { Card } from 'antd';

export default class SingleCurrency extends Component {
  render() {
    return (
      <React.Fragment>
        <Card style={{ width: 300 }}>
            <h2 className='cryptoListHeading'>Bitcoin</h2>
        </Card>
      </React.Fragment>
    )
  }
}
