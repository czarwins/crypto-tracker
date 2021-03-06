import React, { Component } from 'react'
import CryptoList from './CryptoList';
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/v1/all', {
        })
            .then((response) => {
                this.setState({
                    currencies: response.data.currencies
                })
            })
            .catch((err) => {
                this.setState({
                    currencies: []
                });
                console.log(err);
            });
    };

    render() {
        return (
            <React.Fragment>
                <CryptoList key='i' currencies={this.state.currencies}></CryptoList>

            </React.Fragment>
        )
    }
};

