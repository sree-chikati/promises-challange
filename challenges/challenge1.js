/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * ANS: The output will be printed in this manner: Step 1, Step 3, and Step 2. 
 *      This because the szooze function is delaying Step 2 by 2000 milliseconds. 
 *      Hence, the console.log for Step 3 will be printed before Step 2.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * ANS: The outputs were printed in the hypothesized order: Step 1, Step 3, Step 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 * ANS: (Before running the code) I think that the output will remain the same 
 *      becasue changing the 'snooze' time doesn't mean the output will change;
 *      it just means that the output delay time will be changed from 2000 
 *      milliseconds to 0 milliseconds now. So the output will be instantanious.
 *      (After running the code) I was right, the only thing that changed was 
 *      the output return time for Step 2.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

