import React, { Component } from 'react'
import CryptoList from './CryptoList';
import SingleCurrency from './SingleCurrency';



export default class Home extends Component {
    
render() {
    return (
       <React.Fragment>
        <CryptoList></CryptoList>
        
       </React.Fragment>
    )
}
};

