// Anagrams are two words or phrases that can be rearranged to form another word or phrase.

// Check if two strings are anagrams.

// Input: "listen", "silent"
// Output: true


const anagram = (str1, str2) =>{
    return str1.split("").sort().join("")===str2.split("").sort().join("");
}
console.log(anagram("listen", "silent"));
console.log(anagram("hello", "world"));