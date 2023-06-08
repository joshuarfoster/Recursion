function reverseString(str, i=0) {
    if(i === str.length) return '';
    return str[str.length-(1+i)] + reverseString(str, i + 1);
}

module.exports = reverseString