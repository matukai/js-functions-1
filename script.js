// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number
var myNumber = 10000;
  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
var stringValue = numberToString(myNumber);
console.log(stringValue);
  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */

console.log(areEqual(myNumber,stringValue));
//you get false because it is a different data type. string vs integer.

  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */

console.log(calculate("divide",1000,4));

  // Do you see any other functions where code could be reused?

  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
   */

//added another 'else if' statement to function if less than 0 grade = 'F'
console.log(letterGrade(-100000,100));

  /**
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */

   function improvedCombine(word1,word2,glue){
    return word1 + " " + glue + " " + word2;
    }
    console.log(improvedCombine("DROP","BASS","THE"));
  // What happens if you were to uncomment the following lines?

      combine = improvedCombine;
      console.log(combine('combine', 'improved!', ' is '));
 



}