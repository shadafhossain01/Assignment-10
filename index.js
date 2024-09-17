// Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(a,b){
let result= Math.abs(a-b);
return result;
}

console.log(calculateDifference(20,15))

// Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.


function isOdd(a){
if(a%2!=0){
    return true;
}
else{
    return false;
}
}

console.log(7)

// Write a function named findMin that takes an array of numbers and returns the smallest number in the array

let a=[10,50,40,1,2,5,67]

function findMin(a){

   let smallest= Math.min(...a);

   return smallest;

}

console.log(findMin(a))

// Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

let numbers=[2,40,5,6,7,8,9,1,3]

function filterEvenNumbers(numbers){

   let evenNumbers = numbers.filter(num => num % 2 === 0);

   return evenNumbers
}

console.log(filterEvenNumbers(numbers))

// Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

let nums=[2,10,100,1,5,8,70,8,9,52]

function sortArrayDescending(nums){
    nums.sort((a,b)=>b-a)
    return nums
}

console.log(sortArrayDescending(nums))

// Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased


function lowercaseFirstLetter(str){

  return str.replace(str[0],str[0].toLowerCase())
    
}

console.log(lowercaseFirstLetter("Hellow"))

// Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string

let count=0;
function countVowels(alphabet){

for(let item of alphabet){
    if(item==="a" || item==="A" || item==="e" || item==="E" || item==="i" || item==="I" || item==="o" || item==="O" || item==="u" || item==="U" ){
        count++;
            }
}

    return count;
}


console.log(countVowels("Aaib"))


// Write a function named findAverage that takes an array of numbers and returns the average of all elements.


let sum=0;

function findAverage(avg){

    avg.map((item)=>{

 sum=sum+item;

    })


return sum/avg.length

}


let avg=[10,20,30]

console.log(findAverage(avg))




