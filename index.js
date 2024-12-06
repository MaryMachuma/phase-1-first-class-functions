// Functions that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Returns a named function
 function returnsANamedFunction() {
    function namedFunction() {
        return "I am a named function!";
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
   return function () {
    return "I am an anonymous function";
   };
}
// Exporting the functions (if test requires exports)
module.exports = { receivesAFunction, returnsANamedFunction,
  returnsAnAnonymousFunction };
