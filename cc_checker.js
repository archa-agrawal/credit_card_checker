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

const findInvalidCards = (arr) => {
    let invalidCards = []
    for (let i=0; i< arr.length; i++) {     
        let querryCards = validateCred(arr[i])
        if (querryCards === false) {
            invalidCards.push(arr[i])
        }
    }
    return invalidCards
} 

const idInvalidCardCompanies = (arr) => {
    let invalidCompanies = []
    for (let i=0; i< length.arr; i++) {
        if (array[i][0]=== 3) {
            if (indexOf('Amex') === -1) {
                invalidCompanies.push('Amex')
            } 
        } else if (array[i][0]=== 4) {
            if (indexOf('Visa') === -1) {
                invalidCompanies.push('Visa')
            }   
        } else if (array[i][0]=== 5) {
            if (indexOf('Mastercard') === -1) {
                invalidCompanies.push('Mastercard')
            }
        } else if (array[i][0]=== 6) {
            if (indexOf('Discover') === -1) {
                invalidCompanies.push('Discover')
            }
        } else {
            console.log('Company not found')
        }
    }
    return invalidCompanies
}