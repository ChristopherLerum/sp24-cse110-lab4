function discountPrices(prices,discount){
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++){
        var discountedPrices = prices[i] * (1 - discount);
        finalPrice = Math.round(discountPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    /*
    let discounted = [];
    let finalPrice = 0;

    for (let i = 0; i < prices.length; i++){
        let discountedPrices = prices[i] * (1 - discount);
        finalPrice = Math.round(discountPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    */
   /*
    const discounted = [];
    const finalPrice = 0;

    for (let i = 0; i < prices.length; i++){
        const discountedPrices = prices[i] * (1 - discount);
        finalPrice = Math.round(discountPrice * 100) / 100;
        discounted.push(finalPrice);
    }
   */

    console.log(i);
    // console.log(discountedPrice);
    // console.log(finalPrice);
    // console.log(length);

    return discounted;
} 

discountPrices([100,200,300,], 0.5);
