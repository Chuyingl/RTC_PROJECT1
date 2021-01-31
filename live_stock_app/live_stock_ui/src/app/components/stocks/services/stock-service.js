import * as io from "socket.io-client";
import {Observable } from "rxjs";

class StockService {
    constructor() {
        this._socketUrl = "http://localhost:4040/live";
        this._socket =io(this._socketUrl)
    }

    getLiveStockValues(){
        console.log( 'return observer')
        return new Observable(observer => {
            this._socket.emit("joinStocksRoom", "stocks")
            this._socket.on("liveStocks", liveStocks =>{
            observer.next(liveStocks)
        })})
    }
    /*getGoogleStockValues(){
        return new Observable(observer => {this._socket.on("googleStocks", googleStock =>{
            observer.next(googleStock)
        })})
    }
    getMicrosoftStockValues(){
        return new Observable(observer => {this._socket.on("microsoftStocks", msStock =>{
            observer.next(msStock)
        })})
    }*/

}

export default new StockService();