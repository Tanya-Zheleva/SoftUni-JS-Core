function getFibonacci() {
    let f1 = 0;
    let f2 = 1;

   return function fib() {
       let temp = f1 + f2;
       f1 = f2;
       f2 = temp;

       return f1;
   }
}

let fib = getFibonacci();
fib();
fib();
fib();
