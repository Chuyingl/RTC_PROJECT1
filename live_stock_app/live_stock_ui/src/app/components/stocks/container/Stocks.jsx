import React, { Component } from 'react';

import stocksServiceObject from  "../services/stock-service";

export default class Stocks extends Component {
    constructor(props){
        super(props);
        this.state={
           liveStocks:[]
        }
    }
    componentDidMount (){
        stocksServiceObject.getLiveStockValues().subscribe(
            stocks =>{
                this.setState({
                    liveStocks: stocks
                })
            }
        )
        
    }
    render() {
        let title = "Live Stocks values of Apple, Google and Microsoft";
        return (
            <div>
                <h1>{title}</h1>
                <br/>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Apple Stocks</th>
                            <th>Google Stocks</th>
                            <th>Microsoft Stocks</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>{this.state.liveStocks[0]}</span></td>
                                <td><span>{this.state.liveStocks[1]}</span></td>
                                <td><span>{this.state.liveStocks[2]}</span></td>
                            </tr>
                        </tbody>
                    
                </table>
            </div>
        )
    }
}
