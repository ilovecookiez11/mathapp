function prime(n) {
    let primes = [2];
    let i = 3;
    
    while (primes.length < n) {
      let isPrime = true;
      for (let j = 0; j < primes.length; j++) {
        if (i % primes[j] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
      i += 2;
    }
    
    return primes[primes.length - 1];
}

function triangle(n) {
    return (n * (n + 1))/ 2;
}

function fibonacci(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

export default function series(n) {
    return ((4 * prime(n)) - (triangle(n-1)) + fibonacci(n+2))
}