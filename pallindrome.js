const paallindrome = (str) =>{
return str === str.split("").reverse().join("");
}

console.log(paallindrome("malayalam"));
console.log(paallindrome("hello"));
console.log(paallindrome("world"));