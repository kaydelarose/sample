
// Write a program that prints out the numbers 1 to 100 (inclusive). 
// If the number is divisible by 3, print Crackle instead of the number. 
// If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. 

function cracklePop(num) {                      // create a function cracklePop that takes a parameter num
  for (let i = 1; i <= 100; i++) {              // iterating through index that is less than 100 and incrementing plus 1
    if (i % 3 === 0 && i % 5 === 0) {           // if the current index divided by 3 AND 5 is equal to 0 print CracklePop
      console.log("CracklePop");
    } else if (i % 3 === 0) {                   // if the current index divided by 3 is equal to 0 exclusively print Crackle
      console.log("Crackle");
    } else if (i % 5 === 0) {                   // if the current index divided by 5 is equal to 0 exclusively print Pop
      console.log("Pop")
    } else
      console.log(i);                           // else print current index number
  };
}

cracklePop();
