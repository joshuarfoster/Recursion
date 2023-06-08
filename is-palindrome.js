function isPalindrome(str,a=0,b=str.length-1) {
    if (a + 1 === b){
        if(str[a] === str[b]){
            return true;
        }else{
            return false;
        }
    }
    if(a === b) return true;

    return str[a] === str[b] && isPalindrome(str,a+1,b-1);
}

module.exports = isPalindrome