const lengthOfLastWord = (s) => {
    const strLen = s.length;

    let i = strLen - 1;

    let length = 0;

    while (i >= 0 && s[i] === " ")
        i--;

    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length
}

console.log(lengthOfLastWord("s               "))

