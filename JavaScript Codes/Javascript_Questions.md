## _JavaScript Questions_
 <b>1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.<b>
<br>

_**Code**_
```javascript
var a = 45;
var b = "Code";
var c = true;
var d;
var e = null;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
```

_**Output**_
```javascript
45 number
Code string
true boolean
undefined undefined
null object
```

<b>2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.</b>
<br><br>
_**Code**_
```javascript
var firstName = "Anupam";
var lastName = "Kumar Krishnan";
var martialStatus = "Unmarried";
var country = "India";
var age = 22;

console.log(`
 First name: ${firstName},
 Last name: ${lastName},
 Martial Status: ${martialStatus},
 Country: ${country},
 Age: ${age}
`);
```

_**Output**_
```javascript
 First name: Anupam,
 Last name: Kumar Krishnan,
 Martial Status: Unmarried,
 Country: India,
 Age: 22
```

<b>3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.</b>
<br><br>
_**Code**_
```javascript
var course = "Full Stack JavaScript Web Developer Bootcamp";
console.log(course.toUpperCase());
```
_**Output**_
```javascript
FULL STACK JAVASCRIPT WEB DEVELOPER BOOTCAMP
```
<b>4. Check if the string contains a word Script using includes() method.</b>
<br><br>
_**Code**_
```javascript
var language = "JavaScript";
console.log(language.includes("Script"));
```
_**Output**_
```javascript
true
```

<b>5. Split the string into an array using split() method</b>
<br><br>
_**Code**_
```javascript
var language = "JavaScript C C++ Java";
console.log(language.split(" "));
```

_**Output**_
```javascript
[ 'JavaScript', 'C', 'C++', 'Java' ]
```

<b>6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.</b>
<br><br>

_**Code**_
```javascript
var companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));
```

_**Output**_
```javascript
[
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]
```

<b>7. Use lastIndexOf to determine the position of the last occurrence of a script.</b>
<br><br>
_**Code**_
```javascript
  var text = "Full Stack Javascript Web Developer Bootcamp";
  var result = text.lastIndexOf("Bootcamp");
  console.log(result);
```
_**Output**_
```
36
```

<b>8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.</b>
<br><br>
_**Code**_
```javascript
var line = "You cannot end a sentence with because because because is a conjunction";
var output = line.indexOf("because");
console.log(output);
```

_**Output**_
```
31
```

<b>9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.</b>
<br><br>
_**Code**_
```javascript
var sentence = " Full Stack JavaScript Web Developer Bootcamp ";
console.log(sentence.trim(" "));
```
_**Output**_
```
Full Stack JavaScript Web Developer Bootcamp
```

<b>10. Boolean value is either true or false.</b><br>
    <b>- Write three JavaScript statement which provide truthy value.</b><br>
    <b>- Write three JavaScript statement which provide falsy value.</b>
    
<b>_Code & Output_</b>
```javascript
const empty = {}
console.log(empty ? "truthy" : "falsy"); // truthy
console.log(37 ? "truthy" : "falsy");    // truthy
console.log("a" ? "truthy" : "falsy");   // truthy

console.log(0 ? "truthy" : "falsy");     // falsy
console.log(false ? "truthy" : "falsy"); // falsy
console.log(0n ? "truthy" : "falsy");    // falsy

```
<br>

<b>11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()</b><br>
    <b>- 4 > 3</b><br>
    <b>- 4 >= 3</b><br>
    <b>- 4 < 3</b><br>
    <b>- 4 <= 3</b><br>
    <b>- 4 == 4</b><br>
    <b>- 4 === 4</b><br>
    <b>- 4 != 4</b><br>
    <b>- 4 !== 4</b><br>
    <b>- 4 != '4'</b><br>
    <b>- 4 == '4'</b><br>
    <b>- 4 === '4'</b><br>
    <b>- Find the length of python and jargon and make a falsy comparison statement.</b><br>
     
 **_Code & Output_**
 ```javascript
     Condition                       Result
     console.log(4 > 3);             true
     console.log(4 >= 3);            true
     console.log(4 < 3);             false
     console.log(4 <= 3);            false
     console.log(4 == 4);            true
     console.log(4 === 4);           true
     console.log(4 != 4);            false
     console.log(4 !== 4);           false
     console.log(4 != "4");          false
     console.log(4 == "4");          true
     console.log(4 === "4");         false
 ```
     

<p><b>12. Use the Date object to do the following activities<br>
    - What is the year today?<br>
    - What is the month today as a number?<br>
    - What is the date today?<br>
    - What is the day today as a number?<br>
    - What is the hours now?<br>
    - What is the minutes now?<br>
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.</b><br></p>
    
_**Code**_

```javascript
let obj = new Date();
     
console.log(obj.getFullYear());

console.log(obj.getMonth());

console.log(obj.getDate());

console.log(obj.getDay());

console.log(obj.getHours());

console.log(obj.getMinutes());

var dateToday = new Date();
var dateGiven = new Date(1970, 1, 1);
var elapsedTime = dateToday - dateGiven;
console.log(elapsedT);     
```

_**Output**_
```javascript
     2022             // Year
     8                // Month
     2                // Date
     5                // Day
     23               // Hours
     52               // Minutes
     1659720450933    // Seconds
```
     
<b>13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).</b>
     
_**Code**_
```javascript
const prompt = require("prompt-sync")();
const baseValue = prompt("Enter the base of a triangle: ");
const heightValue = prompt("Enter the height of a triangle: ");

const areaValue = baseValue * heightValue * 0.5;

console.log(`The area of the triangle is ${areaValue}`);
```
_**Output**_
```javascript
Enter the base of a triangle: 6
Enter the height of a triangle: 4
The area of the triangle is 12 
```
     
<b>14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)</b>

_**Code**_
```javascript
const prompt = require("prompt-sync")();
const x1 = prompt("Enter value of x1: ");
const y1 = prompt("Enter value of y1: ");
const x2 = prompt("Enter value of x2: ");
const y2 = prompt("Enter value of y2: ");

const slope = (y2 - y1) / (x2 - x1);

console.log(slope);
```
_**Output**_
```javascript
Enter value of x1: 2
Enter value of y1: 2
Enter value of x2: 6
Enter value of y2: 10
2
```
     
<b>15. Calculate the slope, x-intercept and y-intercept of y = 2x -2</b>

<b>16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.</b>
<br>
_**Code**_
```javascript
let radius = prompt("Please enter radius: "); 
const pi = 3.14;
     
let area = pi * radius * radius;
let circumference = 2 * pi * radius;
     
console.log("Area of Circle: ", area);
console.log("Circumference of Circle: ", Math.round(circumference));
```
_**Output**_
```javascript
5
Area of Circle: 78.5
Circumference of Circle: 31
```
     
17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm

<b>18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.</b>
<br>
_**Code**_
```javascript
const prompt = require("prompt-sync")();
let age = prompt("Enter your age: ");

if (age >= 18) console.log("You are old enough to drive");
else console.log("Wait for the number of years he needs to turn 18");
```
 <br>
     
_**Output**_
```javascript
// Use Case 1
18
You are old enough to drive

// Use Case 2
15
Wait for the number of years he needs to turn 18
```
     
<b>19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?</b><br>
     
_**Code**_
```javascript     
const prompt = require("prompt-sync")();
const number = prompt("Enter a number: ");

if (number % 2 == 0) {
  console.log(number + " is Even Number.");
} else {
  console.log(number + " is Odd Number.");
}
```
_**Input**_
```javascript
4
```
_**Output**_
```javascript
4 is Even Number
```

     
<b>20. Write a code which can give grades to students according to theirs scores:</b><br>
    <b>- 80-100, A</b><br>
    <b>- 70-79, B</b><br>
    <b>- 60-69, C</b><br>
    <b>- 50-59, D</b><br>
    <b>- 0-49, F</b><br>

_**Code**_
```javascript
let score = prompt("Enter your score: ");

if(score >= 80 && score <= 100)
  console.log("A");
else if(score >= 70 && score <= 79)
  console.log("B");
else if(score >= 60 && score <= 69)
  console.log("C");
else if(score >= 50 && score <= 59)
  console.log("D");
else
  console.log("F");
```
_**Input**_
```javascript
85
```
                                  
_**Output**_
```javascript
A
```
                                  
21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

_**Code**_
```javascript
let season = prompt("Enter your month: ");
if(season === 'September' || season === 'October' || season === 'November'){
    console.log('Autumn');
}
else if(season === 'December' || season === 'January' || season === 'February'){
    console.log('Winter');
}
else if(season === 'March' || season === 'April' || season === 'May'){
    console.log('Spring');
}
else{
    console.log('Summer');
}
```            
_**Input**_
```javascript
September
January
May
June
```
_**Output**_
```javascript
Autumn
Winter
Spring
Summer
```
                      
<b>22. Write a program which tells the number of days in a month.</b>

_**Code**_
```javascript
function daysInMonth (month, year) { 
  return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(2, 2001)); 
console.log(daysInMonth(9, 2022));
```
     
_**Output**_
```javascript
28
30
```
23. Write a program which tells the number of days in a month, now consider leap year.

24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

<b>25. In the following shopping cart add, remove, edit items</b><br>
    <b>=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']</b><br>
    <b>- add 'Meat' in the beginning of your shopping cart if it has not been already added</b><br>
    <b>- add Sugar at the end of you shopping cart if it has not been already added</b><br>
    <b>- remove 'Honey' if you are allergic to honey</b><br>
    <b>- modify Tea to 'Green Tea'</b><br>

_**Code**_
```javascript
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// Add 'Sugar' at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

// Remove 'Honey' if you are allergic to honey
var remove = shoppingCart.splice(4,1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[2] = 'Green Tea';
shoppingCart;
```
_**Output**_
```javascript
['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']
['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']
['Meat', 'Milk', 'Coffee', 'Tea', 'Sugar']
['Meat', 'Milk', 'Green Tea', 'Tea', 'Sugar']
```

26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

<b>27. The following is an array of 10 students ages:</b><br>
   <b>=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]</b><br>
   <b>- Sort the array and find the min and max age</b><br>
   <b>- Find the median age(one middle item or two middle items divided by two)</b><br>
   <b>- Find the average age(all items divided by number of items)</b><br>
   <b>- Find the range of the ages(max minus min)</b><br>
   <b>- Compare the value of (min - average) and (max - average), use abs() method</b><br>
<br>
_**Code**_
```javascript
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
 
// Sort the array and find the min and max age
console.log(ages.sort());
console.log("Minimum age: ", ages[0]);
console.log("Maximum age: ", ages[ages.length-1]);
     
// Find the median age(one middle item or two middle items divided by two)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
var median = ((ages[ages.length/2]+ages[ages.length/2+1]))/2;
console.log(median);

// Find the average age(all items divided by the number of items)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sum = 0;
for(let i=0;i<ages.length;i++){
    sum = sum + ages[i];
}
var average = sum/2;
console.log(average);

// Find the range of the ages(max minus min)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let range = (ages[ages.length-1] - ages[0]);
console.log(range);
```
_**Output**_
```javascript
[19, 19, 20, 22, 24, 24, 24, 25, 25, 26]       // sorted array
Minimum age:  19                               // min age
Maximum age:  26                               // max age
24                                             // median
114                                            // average
7                                              // range
```
     
<b>28. Use for loop to iterate from 0 to 100 and print only prime numbers<b>
 <br>
 _**Code**_
 ```javascript
 for (let i = 0; i <= 100; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
```
  _**Output**_
 ```javascript
 2
 3
 5
 7
 11
 13
 17
 19
 23
 29
 31
 37
 41
 43
 47
 53
 59
 61
 67
 71
 73
 79
 83
 89
 97
 ```

<b>29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.</b>
 
_**Code**_
```javascript
var sumOfEvenNumbers = 0,sumOfOddNumbers = 0;
for (var x=0; x<=100; x++) {
      if (x % 2 === 0) {
            sumOfEvenNumbers = sumOfEvenNumbers + x;
        }
        else {
             sumOfOddNumbers = sumOfOddNumbers + x;
        }
}
console.log("Sum of all even numbers from 0 to 100: ", sumOfEvenNumbers);
console.log("Sum of all odd numbers from 0 to 100: ", sumOfOddNumbers);
```
_**Output**_
```javascript
Sum of all even numbers from 0 to 100:  2550
Sum of all odd numbers from 0 to 100:  2500    
```

<b>30. Write a script which generates a random hexadecimal number.</b>
     
_**Code**_
```javascript
const hexadecimal_number = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return n.slice(0, 6);
};

console.log(hexadecimal_number());
```
_**Output**_
```javascript
9613ed
```


31. Sort the webTechs array and mernStack array
// countries Array : https://gist.github.com/incredimike/1469814

32. Array Questions
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Find the country containing the hightest number of characters in the countries array
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Extract all the countries containing only four characters from the countries array and print it as array
    - Extract all the countries containing two or more words from the countries array and print it as array
    - Reverse the countries array and capitalize each country and stored it as an array

<b>33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.</b><br>
    <b>- The same groups apply to both men and women.</b><br>
    <b>- Underweight: BMI is less than 18.5</b><br>
    <b>- Normal weight: BMI is 18.5 to 24.9</b><br>
    <b>- Overweight: BMI is 25 to 29.9</b><br>
    <b>- Obese: BMI is 30 or more</b><br>

 _**Code**_
 ```javascript
let weight = prompt("Enter your weight: ");
let height = prompt("Enter your height: ");
let bmi = weight/(height*height);

if(bmi < 18.5)
  console.log("Underweight");
else if(bmi >= 18.5 && bmi <= 24.9)
  console.log("Normal Weight");
else if(bmi >= 25 && bmi <= 29.9)
  console.log("Overweight");
else
  console.log("Obese");
 ```
                                
_**Input**_
```javascript
80
2.02
```
                                
_**Output**_
```javascript
Normal Weight
```
                                
<b>34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.</b>
_**Code**_
```javascript
function solveLinEquation(a, b, n) {
  for (let i = 0; i * a <= n; i++) {
    if ((n - i * a) % b == 0) {
      console.log("x = " + i + ", y = " + (n - i * a) / b);
      return;
    }
  }
  console.log("No solution");
}

let a = 2;
let b = 3;
let n = 8;
solveLinEquation(a, b, n);
```
_**Output**_
```javascript
x = 1, y = 2                   
```
<b>35. Write a functions which checks if all items are unique in the array.</b>
 
_**Code**_
```javascript
const isArrayElementsUnique = (arr) => arr.length === new Set(arr).size;

console.log(isArrayElementsUnique([1, 3, 2, 3]));
console.log(isArrayElementsUnique([1, 2, 3]));
```
_**Output**_
```javascript
false
true
```
     
<b>36. In JavaScript, how do you turn an Object into an Array[]?
 
 _**Code**_
 ```javascript
let obj = { id: "1", name: "sailesh", age: "26", work: "programmer" };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));

//Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));

//Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
```
_**Output**_
```javascript
["id", "name", "age", "work"] //Method 1

["1", "sailesh", "26", "programmer"] //Method 2

[["id", "1"],["name", "sailesh"],["age", "26"],["work", "programmer"]] //Method 3
```

