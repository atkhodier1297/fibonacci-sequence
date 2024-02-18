// Problem: Give a number 'n', find the first 'n' elements of the Fibonacci Sequence.
// First two numbers always 0 and 1 because the new number is always the sum of the previous two.

function fibonacci(n) {
    const fib = [0, 1]
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fibonacci(5))
console.log(fibonacci(10))
console.log(fibonacci(20))