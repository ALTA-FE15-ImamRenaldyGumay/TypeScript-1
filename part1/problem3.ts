console.log("Problem 3 - Armstrong Number")
function isArmstrongNumber(num: number): boolean{
    const numStr = num.toString()
    const numDigits = numStr.length
    let sum: number = 0;

    for(const digit of numStr){
        const digitNums: number  = parseInt(digit, 10)
        sum += Math.pow(digitNums, numDigits)
    }

    return num === sum
}

// test case
// console.log(isArmstrongNumber(153))
console.log(isArmstrongNumber(54748))