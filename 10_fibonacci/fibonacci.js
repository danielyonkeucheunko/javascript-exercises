const fibonacci = function (num) {
    if (num === "string") {
        num = Number(num);
    }

    if (num < 0) {
        return "OOPS";
    }
    let fib1 = 0;
    let fib2 = 1;

    while (num > 0) {
        let temp = fib2;
        fib2 += fib1;
        fib1 = temp;
        num--;
    }
    return fib1;
};

// Do not edit below this line
module.exports = fibonacci;

fibonacci(8);
