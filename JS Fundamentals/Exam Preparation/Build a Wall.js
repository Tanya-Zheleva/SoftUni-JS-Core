function build(input) {
    let parsedHeights = input.map(Number);
    let totalConcrete = [];

   while (parsedHeights.some(x => x < 30)) {
       let currentConcrete = 0;

       for (let i = 0; i < parsedHeights.length; i++) {
           if (parsedHeights[i] < 30) {
                currentConcrete += 195;
               parsedHeights[i]++;
           }
       }

       totalConcrete.push(currentConcrete);
   }

   console.log(totalConcrete.join(', '));
   let totalPesos = totalConcrete.reduce((a, b) => a + b) * 1900;
   console.log(`${totalPesos} pesos`);
}

build([21, 25, 28] );