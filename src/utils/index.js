
export const sumOfValues = (values) =>{
    return values.reduce((curr,acc)=>curr+acc, 0)
}

export const isMultipleOf = (target, value) => {
    return value % target === 0
}

export const isMultipleOfAllTargets = (targets, value) => {
    let result = false;
    targets.forEach(target => {
        if(value % target === 0){
            result = true
            return
        }else {
            result = false
            return
        }
    });
    return result;
}

export const isMultipleOfAnyTargets = (targets, value) => {
    let result = false;
    targets.forEach(target => {
        if(value % target === 0){
            result = true
            return
        }
    });
    return result
}

export const sumOfAllMultiplesBy = (targets, limit) => {
    let result = 0;
    for(let target = 1; target < limit ; target++){
        if(isMultipleOfAllTargets(targets, target)){
            result = result + target
        }
    }
    return result
}

export const sumOfAnyMultiplesBy = (targets, limit) => {
    let result = 0;
    for(let target = 1; target < limit ; target++){
        if(isMultipleOfAnyTargets(targets, target)){
            result = result + target
        }
    }
    return result
}

export const sumOfOrTargertAndTargetsBy = (orTargets, andTargets, limit) => {
    let result = 0;
    for(let target = 1; target < limit ; target++){
        if(isMultipleOfAnyTargets(orTargets, target) && isMultipleOfAllTargets(andTargets, target)){
            result = result + target
        }
    }
    return result
}

export const sumOfSquareOfDigits = (value) => {
    let result = 0;
    const digits = value.toString().split("");
    digits.forEach(digit => {
        result = result + (Number(digit) * Number(digit))
    })
    return result
}

export const isAHappyNumber = (value) => {
    const track = []
    let result = false;
    let final = false
    let square = sumOfSquareOfDigits(value)
    while(final === false){
        if(square === 1){
            result = true
            final = true
        }else if(track.includes(square)){
            result = false
            final = true 
        }else{
            track.push(square)
            const newSquare = square
            square = sumOfSquareOfDigits(newSquare)
        }
    }
    return result
}

export const isPrime = (value) => {
    for(let i = 2; i < value; i++){
        if(value % i === 0) return false;
    }
    return value > 1;
}

export const equivalentNumberByLetter = (value) => {
    const asciiNumber = value.charCodeAt(0);
    return asciiNumber > 96 ? asciiNumber - 96 : asciiNumber - 38
}

export const sumLetterValuesInAWord = (word) => {
    let result = 0;
    let onlyLetters = word.replace(/[^a-z]+/gi, '').split('');
    onlyLetters.forEach(letter => {
        result = result + equivalentNumberByLetter(letter)}
    )
    return result
}

export const isThisWordPrime = (word) => {
    const sum = sumLetterValuesInAWord(word)
    return isPrime(sum)
}

export const isThisWordHappy = (word) => {
    const sum = sumLetterValuesInAWord(word)
    return isAHappyNumber(sum)
}

export const isThisWordMultipleOf = (target, word) => {
    const sum = sumLetterValuesInAWord(word)
    return isMultipleOfAnyTargets(target, sum)
}

export const isThisWordPrimeHappyMultiple = (word) => {
    return {
        prime: isThisWordPrime(word),
        happy: isThisWordHappy(word),
        multipleOf3or5: isThisWordMultipleOf([3,5],word)
    }
}