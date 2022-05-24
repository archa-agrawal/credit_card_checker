const validateCred = (arr) => {
    let numSum = 0
    let doubleNumSum = 0
    for (let i = 0; i<arr.length; i++) {
        if (i % 2 === arr.length % 2) {
            let doubleNum = arr[i] * 2
            if (doubleNum > 9) {
                doubleNum = doubleNum - 9;
            } 
            doubleNumSum = doubleNumSum + doubleNum
        } else {
            numSum = numSum + arr[i]
        }
    }
    return (numSum + doubleNumSum) % 10 === 0 
}
let ccNumber = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
console.log(validateCred(ccNumber))
          