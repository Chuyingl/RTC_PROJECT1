const app = require("express")();
const http =require("http").Server(app);
const io =require("socket.io")(http,{
    cors:{
        origin : "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
const randomStockObject =require("./random-stock-values");

const port =process.env.PORT || 4040;

io.of("/live").on("connection", socket =>{
    socket.on("joinStocksRoom", room=>{
        if(room = "stocks"){
            socket.join("stocks")
            setInterval(()=>{
                io.of("/live").to("stocks").emit("liveStocks", [
                    randomStockObject.getAppleStockValues(),
                    randomStockObject.getGoogleStockValues(),
                    randomStockObject.getMicrosoftStockValues()
                ])
            },2000)
        }
    })
    //getStockValues(socket);
    console.log('connect')
    //setInterval(()=>{},5000)
});

/*function getStockValues(socket){
    socket.emit("appleStocks", randomStockObject.getAppleStockValues());
    socket.emit("googleStocks", randomStockObject.getGoogleStockValues());
    socket.emit("microsoftStocks",randomStockObject.getMicrosoftStockValues());
}*/


http.listen(port, ()=>console.log(` The stock server is listening on PORT - ${port}`));