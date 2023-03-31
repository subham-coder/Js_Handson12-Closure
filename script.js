// Q1.
//     function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// Result- 
// It will show a popup alert of 1, 2, 3, 4

// Q2. 
//let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();


// RWsult- 1, 0
// 1 is for inner fuction and 0 is for outer variable.

// Q3. 
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

// Result- 3, 3, 3 
// It is happening this because of the setTime fuction is calling three time inside the loop and i increament to the lastest value  i.e 3.  
 
// Q4. 
// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
// Sol-
// function length(l) {
//   function breadth(b) {
//       return l*b ;
//   }
//  return breadth(20);

// }
// console.log(length(10));
// Result- 200

// Q5.
// Take a variable in outer function and create an inner function to increase the counter every time it is called?
// Result- Nested fuction.
// 
// Q6.
// Print Output-
// var a = 12;
// (function () {
//   alert(a);
// })();
// Result- 12
//
// Q7.
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();
// Result- 12

// Q8.
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//   var outerVar = 'a';
  
//   (function innerFunc(innerArg) {
//   var innerVar = 'b';
  
//   console.log(
//       "outerArg = " + outerArg + "\n" +
//       "innerArg = " + innerArg + "\n" +
//       "outerVar = " + outerVar + "\n" +
//       "innerVar = " + innerVar + "\n" +
//       "globalVar = " + globalVar);
  
//   })(456);
// })(123);
// Result- outerArg = 123
//         innerArg = 456
//         outerVar = a
//         innerVar = b
//         globalVar = xyz