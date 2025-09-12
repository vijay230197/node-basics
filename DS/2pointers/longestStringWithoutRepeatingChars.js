const longestStringWithoutRepeatingChars = (s) => {
    const strLen = s.length;
    let left = 0;
    let maxLen = 0;

    const set = new Set();

    for (let right = 0; right < strLen; right++) {

        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
}

console.log(longestStringWithoutRepeatingChars('tmmzuxt'));


