function fizzBuzz(n: number):(string | number )[] {

    let arrayNum = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arrayNum.push('FizzBuzz')
        } else if (i % 3 === 0) {
            arrayNum.push('Fizz')
        } else if (i % 5 === 0) {
            arrayNum.push('Buzz')
        } else {
            arrayNum.push(i)
        }
    }
    return arrayNum;
}
console.log(fizzBuzz(15))