function isPrime(n) {
    let div = Math.sqrt(n);
    let prime = true;

    for (let i = 2; i <= div; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }

    return prime && n > 1;
}