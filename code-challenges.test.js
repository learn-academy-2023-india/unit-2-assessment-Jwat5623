// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe ("multiplyByThree", () => {
    it ("is a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]
        expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30]) 
        expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})
const multiplyByThree = (array) => {
    return array.map((value) => {
    return value * 3
    })
}
// b) Create the function that makes the test pass.

// Pseudo code:
// input: single array of numbers
// output: array with the numbers mult by 3
// do something to every item in the array - map
// value * 3


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe ("divByThree", () => {
    it ("is a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(divByThree(15)).toEqual("15 is divisible by three") 
        expect(divByThree(0)).toEqual("0 is divisible by three")
        expect(divByThree(-7)).toEqual("-7 is not divisible by three")
    })
})
const divByThree = (number) => {
    if (number % 3 === 0 ) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:
// input: object as an argument
// output: number inside evenly divisible by 3 or not
// use string interpolation to print out number and expected string
// object % 3 === 0

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe ("allCaps", () => {
    it ("is a function that takes in an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) 
        expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
const allCaps = (array) => {
    return array.map((value) => {
      if (typeof value === 'string' || value instanceof String) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      } else {
        return value
      }
    })
}
  
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
// input: array of strings
// output: array of strings all capitalized 
// do something to all arrays using .map
// all strings to uppercase