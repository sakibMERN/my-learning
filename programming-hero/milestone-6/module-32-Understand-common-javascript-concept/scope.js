function add(a, b) {
  const total = a + b;

  if (b > 5) {
    const sum = 25 + a + b;
  } else {
    const sum = 5 + a + b;
    var current = sum;
  }
  // console.log(sum); //reference error
  console.log(current);
  return total;
}
// console.log(a, b); //reference error
// console.log(total); //reference error
add(5, 7); //expected output: undefined
add(5, 3); //expected output: 13

/** Note : do you notice the two different. 
 * 1. for the first function the output is undefined. Because when we set a variable using var. It's go up to the top . When we call the function the current variable is undefined.after that the if condition will executed because 7 > 5 and the current variable which is inside else block doesn't executed.
 * 2. on the other hand when 3 > 5 is not true ,then the else condition will execute. and the current variable re-assign the value 13;
*/

