const reverseString =(str) => {
    let reversed = "";

    for (let i = str.length -1; i>=0 ; i--){
        reversed = reversed+str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("javascript"));