/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 * 
 * ANS: (Befre running the code) I think that the output in the console will be: 
 *      "Hello there, Ducky" and "MAKE SCHOOL IS AWESOME!!!." This is because 
 *       the first function, greet(name), takes in the argument 'name' and the 
 *       function prints "Hello there, (name)" if it's a string and "Name must be
 *       a string!" it it's not. The second function, uppercase(str), takes in 
 *       argument of a string and similar to the above function, prints out the
 *       uppercased version of the string passed in. If it's not a string, then it
 *       will print out "Argument to uppercaser must be string."
 *       (After running the code) I was right, the output was the same as the one I 
 *       had predicted.
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 * 
 * ANS: If greet() fails, the function will not run and will result in an error and
 *      will also print "Name must be a string!." Since the greet function failed to
 *      run, then the uppercase() function will also not run since the console will
 *      time out due to the error.
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 * 
 * ANS: If greet() succeeds, then greet() will run and print out the resulting output.
 *      Although is uppercase() fails then the similar thing will happen where the 
 *      console throws an error and in the case of an error, the uppercase() function
 *      will print out "Argument to uppercaser must be string."
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 * 
 *******************************************************************************
 */

 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}

/**
 *  Returns the string but with a place in between each letter.
 * @param {*} str The string to space.
 */
function spacer(str) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
      if (typeof str === 'string') {
          resolve(str.split('').join(' '));
      } else {
          reject('Argument to space must be a string!');
      }
      }, 2000);
  });
}


name = 'Ducky'
// name = 1319
my_str = 'Make School is Awesome!!!'
// my_str = 1319
space_str = "sree"
// space_str = 1304


// Adding spacerResult
greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(space_str)
    })
    .then((spacerResult) => {
        console.log(spacerResult)
    }).catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
