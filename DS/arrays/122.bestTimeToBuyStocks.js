const bestTimeToBuyStocks = (arr) => {
    const arrLen = arr.length;

    let maxProfit = 0;

    for (let i = 1; i < arrLen; i++) {
        if (arr[i] > arr[i - 1]) {
            maxProfit = maxProfit + (arr[i] - arr[i - 1])
        }
    }

    return maxProfit
}

console.log(bestTimeToBuyStocks([1000, 2000, 1500, 2500]));


//here i can buy and can sell on any day. Can buy again and sell again. Max profit
