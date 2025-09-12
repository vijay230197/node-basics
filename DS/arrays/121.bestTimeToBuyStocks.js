const bestTimeToBuyStocks = (arr) => {
    const arrLen = arr.length;

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < arrLen; i++) {
        if (minPrice > arr[i]) {
            minPrice = arr[i]
        }
        else {
            maxProfit = Math.max(maxProfit, arr[i] - minPrice)
        }
    }

    return maxProfit

}

console.log(bestTimeToBuyStocks([7, 1, 5, 3, 6, 4]));


//here i can buy once and can sell later buying once selling once
