const app = require("express")();
const http =require("http").Server(app);
const io =require("socket.io")(http);
const randomStockObject =require("./random-stock-values");

const port =process.env.PORT || 9090;

io.on("connection", socket =>{
    getStockValues(socket);
    setInterval(()=>{getStockValues(socket)},5000)
});

function getStockValues(socket){
    socket.emit("appleStocks", randomStockObject.getAppleStockValues());
    socket.emit("googleStocks", randomStockObject.getGoogleStockValues());
    socket.emit("microsoftStocks",randomStockObject.getMicrosoftStockValue());
}


http.listen(port, ()=>console.log(` The stock server is listening on PORT - ${port}`));