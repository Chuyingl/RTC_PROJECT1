import React, { Component } from "react";
import Stocks from "./components/stocks/container/Stocks"

export default class RootComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stocks/>
            
        );
    }
}