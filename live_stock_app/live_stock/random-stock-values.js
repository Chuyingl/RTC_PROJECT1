class RandomStockValues{
    constructor(){

    }
    getAppleStockValues(){
      const startValue =230;
      const endValue =350;
      return Math.floor(Math.random()*(startValue-endValue)+1)+ endValue;
    }
    getGoogleStockValues(){
        const startValue =320;
        const endValue =450;
        return Math.floor(Math.random()*(startValue-endValue)+1)+ endValue;
      }
    getMicrosoftStockValue(){
        const startValue =130;
        const endValue =220;
        return Math.floor(Math.random()*(startValue-endValue)+1)+ endValue;
    }
}

module.exports =new RandomStockValues();