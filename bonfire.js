// The following code was written in JavaScript by Gabriel de Diego

// FreeCodeCamp: BONFIRE (ALGORITHM CHALLENGES)

// NOTE: Algorithms are in order from beginner to advanced. 
// Each algorithm will display given instructions along with my personal code to solve the problem. 


/*
	Bonfire: Reverse a String
	--------------------------
	Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  str = str.split("").reverse().toString().replace(/,/g, "");  
  return str;
}

reverseString('hello');


/*
	Bonfire: Factorialize a Number
	-------------------------------

	Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120f
*/

function factorialize(num) 
{
  var oneLess = num - 1; 
  
  while (oneLess > 0) {
    num = num * oneLess; 
    oneLess--;
  }

  return  num;
}

factorialize(5);


/*
	Bonfire: Check for Palindromes
	-------------------------------

	Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

function palindrome(str) {
 var oldString = str.toLowerCase();
 var punctuation = /[!.?, ]\w+/g;


  for (var i = 0; i<oldString.length; i++) {
      if (oldString.charAt(i).match(/[!.?, ]\w+/g)) {
        oldString = oldString.replace(oldString.charAt(i), ' ');
      }
    }

    oldString = oldString.replace(/ /g, '');

    if (oldString == oldString.split('').reverse().join('')) {
        return true;
      }else{
          return false; 
      }  
}


palindrome("eye");


/*
	Bonfire: Find the Longest Word in a String
	------------------------------------------

	Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) 
{
  str = str.split(' '); //turns the string into an array. 
  var max = 0; 
  
  for (var i = 0; i < str.length; i++) 
  {
    if (str[i].length > max) 
    {
      max = str[i].length;
    }
    
  }
  return max;
}

findLongestWord('The quick brown fox jumped over the lazy dog');


/*
	Bonfire: Title Case a Sentence
	------------------------------

	Return the provided string with the first letter of each word capitalized.

For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.
*/

function titleCase(str) {
  return str.replace(/\w\S*/g, function(text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    
  });
}

titleCase("I'm a little tea pot");

/*
	Bonfire: Return Largest Numbers in Arrays
	------------------------------------------

	Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.
*/

function largestOfFour(arr) {
  var largest = [];
  
  for(var innerIndex = 0; innerIndex < arr.length; innerIndex++) {
     largest.push(Math.max.apply(Math, arr[innerIndex]));
  }
  
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*
	Bonfire: Confirm the Ending
	----------------------------

	Check if a string (first argument) ends with the given target string (second argument).
*/

function end(str, target) {
  
  //use regex to find the last word of every string
  var lastWordFinder = /\w+$/m;
  
  //use lastWordFinder to find the last word of the str and convert it to a String
  var extractedWord = str.match(lastWordFinder).toString();
  
  if (extractedWord === target) {
    return true;
  } else if (extractedWord.charAt(extractedWord.length - 1) === target){
    return true;
  } else {
    return false;
  }
  
  //return str;
}

end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain');


/*
	Bonfire: Repeat a string repeat a string
	-----------------------------------------

	Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  var holder = [];
  // repeat after me
  for(var i = 0; i < num; i++){
    holder.push(str);
  }
  return holder.join("");
}

repeat('abc', 3);


/*
	Bonfire: Truncate a string
	--------------------------

	Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

Note that the three dots at the end add to the string length.
*/

function truncate(str, num) {
  // Clear out that junk in your trunk
  
if (str.length == num || str.length < num)
  {
    return str;
  }
  else
  {
    return str.substring(0,num).slice(0, str.search(" ")) + "...";
  }
  
}

truncate('A-tisket a-tasket A green and yellow basket', 11);


/*
	Bonfire: Chunky Monkey
	-----------------------

	Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/

function chunk(arr, size) {
 var finalArray = [];
  var secondArray = [];
  
  for (var i = 0; i < size; i++) {
    //for each instance shift the first element and place it into holder
    var holder = arr.shift();
    //once holder has a value, we push it, adding it to the the once empty array
    secondArray.push(holder);
  }
  
  finalArray.push(secondArray);
  finalArray.push(arr);
  return finalArray;
  //console.log(finalArray);
}

chunk(['a', 'b', 'c', 'd'], 2);


/*
	Bonfire: Slasher Flick
	-----------------------

	Return the remaining elements of an array after chopping off n elements from the head.
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  for(var i = 1; i <= howMany; i++) {
    arr.shift();
  }
  
  return arr;
}

slasher([1, 2, 3], 2);


/*
	Bonfire: Mutations
	-------------------

	Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.
*/

function mutation(arr)
{
  //first element in the array
  var firstElement = arr[0].toString().toLowerCase();
  //second element that will now be considered the comparer
  var comparer = arr[1].toString().toLowerCase().split("");
  //the global variable used to hold 
  var index;
  
  for(var i = 0; i < arr[1].length; i++)
  {
    index = firstElement.search(comparer[i]);
    
    if(index !== -1)
    {
      firstElement = firstElement.replace(firstElement.charAt(index), "");
      comparer.shift();
    }
   
  }
  
  //Final test after all comparisons 
  if(comparer.length === 0){
    return true;
  } else {
    return false;
  }
 
}

mutation(['hello', 'hey']);


/*
	Bonfire: Falsey Bouncer
	------------------------

	Remove all falsey values from an array.

Falsey values in javascript are false, null, 0, "", undefined, and NaN.

*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, 'ate', '', false, 9]);


/*
	Bonfire: Where art thou
	------------------------

	Make a function that looks through a list (first argument) and returns an array of all objects that have equivalent property values (second argument).
*/

function where(collection, source)
{
  var arr = [];
  
  for(var i = 0; i < collection.length; i++)
  {
    if(collection[i].last === source.last)
    {
      arr.push(collection[i]);
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });


/*
	Bonfire: Seek and Destroy
	--------------------------

	You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  var holder = [];
   
  for (var i = 1; i < arguments.length; i++)
    {
      holder.push(arr[i]);
    }
  
  
   function remove(value)
  {
    for (var index = 0; index < holder.length; index++)
      {
        return value != holder[0] && value != holder[1];
      }
  }

  
  return arr.filter(remove);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
	Bonfire: Where do I belong
	---------------------------

	Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).
*/

function where(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  
  arr.sort(function(a, b){
    return a-b;
  });
  
  return arr.indexOf(num);
}

where([40, 60, 90, 10000, 20], 7111110);


/*
	Bonfire: Sum All Numbers in a Range
	------------------------------------

	We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr)
{
  // Find the max value
  var max = Math.max(arr[0], arr[1]);
  // Find the min value
  var min = Math.min(arr[0], arr[1]);
  
  var total = max + min;
  
  while (max > min)
    {
       max--;
       total += max;
    } 
  
  // The final total will always be ahead by the min due to the way the while loop is set up, the last decrement will not take effect until it loops through the last time, thus making the total a constant overlap of the min.
  
  return total - min;
}

sumAll([1, 4]);


/*
	Bonfire: Search and Replace
	----------------------------

	Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'
*/

function replace(str, before, after) {
  
  if(before.charAt(0).toUpperCase() === before.charAt(0)){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } 
 return str.replace(before, after);
}

replace("A quick brown fox mumped over the lazy dog", "mumped", "leaped");


/*
	Bonfire: Pig Latin
	-------------------

	Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translate(str) {
  var holder;
  var regex = /[aeiou]/;
  var first;

   holder = str.search(regex);
     
   if(holder > 0){
    first = str.substr(0, holder);
    str = str.substr(holder, str.length);
    return str + first + "ay";
  } else {
    return str + "way";
  }
}

translate("consonant");



/*
	Bonfire: DNA Pairing
	---------------------

	The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.
*/

function pair(str) {
  var newArray = [];
  str = str.split("");
  
    
  for (var i = 0; i < str.length; i++){
    // if the letter is A
    if (str[i] === 'A'){
      newArray.push([str[i], 'T']);
      
      // if the letter is T
    } else if (str[i] === 'T'){
      newArray.push([str[i], 'A']);
      
      // if the letter is C
    } else if (str[i] === 'C'){
      newArray.push([str[i], 'G']);
      
    } else {
      newArray.push([str[i], 'C']);
    }
  }
  
  return newArray;
}

// A pairs with T, C pairs with G

pair("GCG");


/*
	Bonfire: Boo who
	-----------------

	Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(bool === true || bool === false){
    return true;
  } else {
    return false;
  }
  
  //return bool;
}

boo(null);


/*
	Bonfire: Sum All Odd Fibonacci Numbers
	--------------------------------------

	Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  
  var fibseq = [1,1]; // Create starting point for required Fibonacci Sequence
  var nextNum = 0; // Used to calcuate the next number needed in Fibonacci Sequence
  var sum = 0; // Sum all odd fibonacci numbers
  var brickWall; // Used to find the last number in sequence where num won't bounce over
 // var odds = []; USED TO DEBUG
  
  // Add next number to Fibonacci sequence as long as number arguement has not been met
  while (fibseq[fibseq.length-1] < num)
    {
      // Next Fibonacci sequence is always current number plus the prior
      nextNum = fibseq[fibseq.length-1] + fibseq[fibseq.length-2];
      
      // Add new number to the Fibonacci sequence
      fibseq.push(nextNum);
      
      //count++; USED TO DEBUG
    }
  

  // Figure out where the final iteration for the sum will stop
  if (fibseq[fibseq.length-1] > num)
    {
      brickWall = fibseq[fibseq.length-2];
    }
  else
    {
      brickWall = fibseq[fibseq.length-1];
    }
  
  // console.log("The brickwall is: " + brickWall + "\nFib indexOf brickWall is: " + fibseq.indexOf(brickWall)); USED TO DEBUG
  
  // iterate up until we reach the brick wall
  for (var x = 0; x <= fibseq.indexOf(brickWall); x++)
    {
      // is the number odd? If so, add it to the sum
      if (fibseq[x] % 2)
        {
          // odds.push(fibseq[x]); USED TO DEBUG
          sum += fibseq[x];
        }
    }
  
  // console.log("Odds are: " + odds); USED TO DEBUG
  
  return sum;
  
}

sumFibs(4);


/*
	Bonfire: Finders Keepers
	------------------------

	Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
*/

function find(arr, func)
{
  var finalArr = [];
  
  for (var i = 0; i < arr.length; i++)
  {
    if (func(arr[i]))
      {
        finalArr.push(arr[i]);
      }
  }
  
  return finalArr[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });


/*
	Bonfire: Drop it
	-----------------

	Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
*/

function drop(arr, func) {
  
  var newArray = [];
  
  for(var i = 0; i< arr.length; i++) {
    
    if(func(arr[i]) === true) {
      
      console.log(func(arr[i]) + " : " + arr[i]);
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

drop([1, 2, 3], function(n) {return n < 3; });


/*
	Bonfire: Binary Agents
	------------------------

	Return an English translated sentence of the passed binary string.

The binary string will be space separated.


*/

function binaryAgent(str)
{
  var answerArray = [];
  var finalAnswer = [];
  
  // Holds the binary placement values and fixed octet length. 
  var binaryVal = [128, 64, 32, 16, 8, 4, 2, 1];
  
  //split the str for easy array manipulation
  str = str.split(" ");
  
  
  for (var segment = 0; segment < str.length; segment++)
    {
      var sum = 0;
      
      for (var internal = binaryVal.length; internal >= 0; internal--)
        {
          console.log(str[segment].charAt(internal));
          if (str[segment].charAt(internal) === '1')
            {
              sum += binaryVal[internal];
            }
          
        }
      
      answerArray.push(sum);
    }
  
  
  for (var i = 0; i < answerArray.length; i++)
    {
      finalAnswer.push(String.fromCharCode(answerArray[i]));
    }
  
  return finalAnswer.join().replace(/,/g,"");
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');



/*
	Bonfire: Everything Be True
	----------------------------

	Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).

For this, check to see if the property defined in the second argument is present on every element of the collection.

Remember, you can access object properties through either dot notation or [] notation.
*/


function every(collection, pre) {
  // Does everyone have one of these?
  
  for (var i = 0; i < collection.length; i++)
    {
      if(collection[i].hasOwnProperty(pre))
        {
          return true;
        }
      else
        {
          return false;
        }
    }
  
  
  console.log(collection.length);
  //return collection[0].user;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');


/*
	Bonfire: Make a Person
	-----------------------

	Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.
*/

var Person = function(firstAndLast) {
    
    var fullName = firstAndLast;
  
    this.getFirstName = function(){
      return fullName.substring(0, fullName.indexOf(" "));
    };
  
    this.getLastName = function(){
      return fullName.substring(fullName.indexOf(" ") + 1, fullName.length);
    };
  
    this.getFullName = function(){
      return fullName;
    };
  
    this.setFirstName = function(newFirst){
       fullName = newFirst + " " + this.getLastName();
    };
  
    this.setLastName = function(newLast){
        fullName = this.getFirstName() + " " + newLast; 
    };
  
    this.setFullName = function(newName){
        fullName = newName;
    };
};

var bob = new Person('Bob Ross');

// This can be done more efficiently by incorporating prototypal inheritance and putting each function into the Person prototype (less code generated for each new instance of Person).


/*
	Bonfire: Map the Debris
	------------------------

	Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

*/

function orbitalPeriod(arr) {
  
  var arrFinal = [];
  
  // lowercase mu (greek symbol) used in formala is GM
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  
  for (var i = 0; i < arr.length; i++)
    {
      // (a) symbol in orbital period formula is earthRadius + avgAlt
      var a = earthRadius + arr[i].avgAlt;
      
      // Must round the final orbital period as per requirements
      var orbitalP = Math.round(2*Math.PI*Math.sqrt(Math.pow(a,3)/GM));
      
      arrFinal.push({name : arr[i].name, orbitalPeriod : orbitalP});
    }
  
      
  return arrFinal;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);


/*
Bonfire: Diff Two Arrays
-------------------------

Compare two arrays and return a new array with any items not found in both of the original arrays.
*/

function diff(arr1, arr2) {
  var newArr = [];
  
  var filterArr1 = arr1.filter(function(value){
    return arr2.indexOf(value) === -1;
  });
  
  var filterArr2 = arr2.filter(function(value){
    return arr1.indexOf(value) === -1;
  });
  
  
  return filterArr1.concat(filterArr2);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
Bonfire: Missing letters
--------------------------
 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str)
{
  var missing;
  // Create alphabet for algorithm
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  // Obtain first element of argument
  var firstIndx = str.charAt(0);
  // Obtain second element of argument
  var lastIndx = str.charAt(str.length-1);
  
  // Obtain the section of the alphabet based on the first and last index of the argument. + 1 must be included as part of the second argument of the slice function due to the nature of the function
  var selected = alphabet.slice(alphabet.indexOf(firstIndx), alphabet.indexOf(lastIndx) + 1);
  
  console.log("First index of str contains: " + firstIndx + "\nLast index of str contains: " + lastIndx + "\nThe selected string from alphabet is: " + selected);
  
  for (var i = 0; i < selected.length; i++)
    {
      if (selected.charAt(i) !== str.charAt(i))
        {
          console.log(selected.charAt(i) + " Does NOT equal " + str.charAt(i));
          missing = selected.charAt(i);
          // Exit the for-loop entirely
          break;
        }
    }

  return missing;
}

fearNotLetter('abce');


/*
  Bonfire: Spinal Tap Case
  ------------------------
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str)
{
  var res = str.replace(/[" _"]+/g, "-").split("");
  res[0] = res[0].toLowerCase(); // Die, you damn you bug.
  
 // console.log(res);
  
  for (var x = 0; x < res.length; x++)
    {
      if (res[x] === res[x].toUpperCase() && res[x] !== "-" && res[x-1] !== "-")
        {
          res.splice(x, 0, " ");
          x++;
        }
    }
  
  // console.log(res);
  
  for (var i = 0; i < res.length; i++)
    {
      if (res[i] === " " || res[i] === "_")
        {
          res[i] = "-";
        }
    }
  
  return res.join("").toLowerCase();
  
}

spinalCase('This Is Spinal Tap');


/*
Bonfire: Steamroller
-----------------------

Flatten a nested array. You must account for varying levels of nesting.

*/

function steamroller(arr)
{
  var newArr = [];
  console.log("The arrays length is: " + arr.length);
  // Convert array to string and remove all nests. Replace ALL commas(,) with empty space.
  arr = arr.join().replace(/,+/g,"");
  
  console.log(arr);
  
  for (var i = 0; i < arr.length; i++)
    {
      console.log(arr.charAt(i));
      // Use parseInt function to convert each string into a number
      if (!isNaN(arr.charAt(i)))
        {
          newArr.push(parseInt(arr.charAt(i)));
        }
      else
        {
          newArr.push(arr.charAt(i));
        }
    }
  
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);


/*
Bonfire: Smallest Common Multiple
------------------------------------
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

*/

function smallestCommons(arr)
{
  var dock = []; // this will contain the range with respect to the provided array arguement. 
  var largest;
  var smallest;
  
  // find the largest and smallest number respectively 
  if (arr[0] > arr[1])
    {
      largest = arr[0];
      smallest = arr[1];
      dock.push(largest);
    }
  else 
    {
      largest = arr[1];
      smallest = arr[0];
      dock.push(largest);
    }
  
  // populate the dock
  for (var i = largest-1; i >= smallest; i--)
    {
      dock.push(i);
    }
  
  dock.sort(); // Once populated, sort the dock for easy iteration in the for-loop seen below.
  
  console.log(dock);
  
  
  /* All heavy lifting for algorithm begins here */
  
  var count = 1; // create count variable for loop
  var exit = 0; 
  
  while (exit !== 1) // Create infinite loop due to the fact that for each run of the program the arguements may be different. This is countered by (return) statement within the nested if conditional 
    {
      var top = largest * count;
      console.log(top);
      
      for (var x = 0; x < dock.length; x++)
        {
          if (top % dock[x] === 0)
            {
              console.log(top + " % " + dock[x] + " is equal to 0."); // Used to debug, view in console to see how the program works
              
              if (x === dock.length-1 && top % dock[x] === 0)
                {
                  exit = 1;
                  return top;
                }
            }
          else 
            {
              console.log(top + " % " + dock[x] + " NOT EQUAL TO 0."); // Same as above
              break; // break out into the while loop if the condition has not been met. 
            }
        }
      
      count++; // gradually increment count due to the nature of the top variable. 
    }
  
}

smallestCommons([1,5]);

/* MORE ALGORITHMS COMING SOON! */
