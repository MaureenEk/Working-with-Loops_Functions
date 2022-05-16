//FUNCTION//
function sumMultiplyNumbers(num1, num2, num3, num4) {
    
    var sum1 = (num1 + num4)
    var sum2 = (num2 + num3)
    var product = (sum1*sum2)

    return product;
    
}
sumMultiplyNumbers();

//LOOP//

for (let i=0; i<=15; i++) {
      if (i === 0) {
          console.log(i +  " is even");
       }
       else if (i % 2 === 0) {
               console.log(i + " is even");   
      }
      else {
                    console.log(i + " is odd");
      }
    }
    