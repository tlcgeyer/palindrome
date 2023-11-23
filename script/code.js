function isPalindrome(word) {
    if(word ==word.split("").reverse().join("")) {
        return `${word} is a palindrome`
    }else {
        return `${word} is not a palindrome`
    }
}
console.log(isPalindrome('madam'));