'ust strict'

function maxDivider(num1, num2) {
    if(num2 === 0){
        return num1
    }
    return maxDivider(num2, num1 % num2)
}

console.log(maxDivider(48, 18))