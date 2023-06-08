
function productOfNumbers(arr, i=0) {
    if (i === arr.length) return 1;

    return arr[i] * productOfNumbers(arr, i+1)
}

module.exports = productOfNumbers