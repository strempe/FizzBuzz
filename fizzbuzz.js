// Variable Declarations
var avow = require('avow');

// Functional Declarations
function FizzBuzz(n) {
    var boom = '';
        for (var i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                boom += 'FizzBuzz';
                }   else if(i % 3 === 0) {
                boom += 'Fizz'
                }   else if (i % 5 === 0) {
                boom += 'Buzz'
                }   else {
                boom += '.'
                }
        }
    return boom;
}

FizzBuzz(15);


    
 



// Tests (do not modify these)
avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));