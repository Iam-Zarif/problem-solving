// Count the number of vowels in a string.

// Input: "frontend"
// Output: 3

const vowelCount =(str)=>{
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i =0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

console.log(vowelCount("frontend"));
console.log(vowelCount("javascript"));
console.log(vowelCount("hello"));