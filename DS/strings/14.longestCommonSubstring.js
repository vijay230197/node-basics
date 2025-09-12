const longestCommonSubstring = (arr) => {

    const arrLen = arr.length;

    arr.sort();

    let i = 0;

    const firstElem = arr[0]
    const lastElem = arr[arrLen - 1]

    if (arrLen === 0) return ''

    while (i < firstElem.length && firstElem[i] === lastElem[i]) {
        i++
    }

    return firstElem.slice(0, i)

}

console.log(longestCommonSubstring(["prefixed", "prefix"]));

//flow
//flower
//flowing
