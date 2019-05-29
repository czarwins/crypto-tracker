import React, { Component } from 'react';
// import { Container, Button } from 'reactstrap';
import {  Card } from 'antd';

import axios from 'axios';


export default class SingleCurrency extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }

    this.handleCurrencyRequest = this.handleCurrencyRequest.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/v1/crypto', {
      params: { symbol: this.props.match.params.symbol }
    }).then(this.handleCurrencyRequest);
  }

  handleCurrencyRequest(response) {
    this.setState({
      data: response.data.currency[0]
    })
  }

  render() {
    
    

    return (
      <React.Fragment>
        <Card style={{ width: 300 }}>
          <h2 className='cryptoListHeading'>{ this.state.data.name }</h2>
          <h2>Symbol: { this.state.data.symbol }</h2>
        </Card>
        
      </React.Fragment>
    )
  }
}
