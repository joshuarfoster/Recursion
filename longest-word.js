function longestWord(arr, i=0) {
    if(i === arr.length) return 0;

    let l = longestWord(arr, i+1)

    if(arr[i].length >= l){
        return arr[i].length
    }else {
        return l
    }
}

module.exports = longestWord