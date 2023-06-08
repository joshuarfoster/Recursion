function everyOtherCharacter(str, i=0) {
    if (i >= str.length) return '';

    return str[i] + everyOtherCharacter(str, i + 2)
}

module.exports = everyOtherCharacter