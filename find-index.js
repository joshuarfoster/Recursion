function findIndex(arr,str,i=0) {
    if(arr[i] === str) return i;
    if (i === str.length) return -1;
    return findIndex(arr,str,i+1)
}

module.exports = findIndex