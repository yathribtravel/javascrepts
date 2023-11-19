function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }



let x= 10



document.write(x)
x=20+10
document.write(x)
x=20
  


{/* 

<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML=Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

===============================================



<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
===============================================

      <button onclick="document.getElementById('myImage').src='/img/pic_bulbon.gif'">Turn on the light</button>

    <img id="myImage" src="/img/pic_bulboff.gif" style="width:100px">
    
    <button onclick="document.getElementById('myImage').src='/img/pic_bulboff.gif'">Turn off the light</button>
    
  ===============================================   


   document.getElementById("demo").style.fontSize = "35px";
   document.getElementById("demo").style.display = "none";
    
  ===============================================  
<p id="demo" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>

===============================================


<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

========================myFunction=======================

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>


document.write(5 + 6);      # Using document.write() after an HTML document is loaded, will delete all existing HTML:
                            # The document.write() method should only be used for testing.

document.getElementById("demo").innerHTML = 5 + 6;
window.alert(5 + 6);
alert(5 + 6);
console.log(5 + 6)         # debugging purposes,
window.print()

<h2>My First Web Page</h2>  #will delete all existing HTML
<p>My first paragraph.</p>
<button type="button" onclick="document.write(5 + 6)">Try it</button>
===============================================
 let a, b, c;  // Declare 3 variables
 a = 5; b = 6; c = a + b; 
 let person = "John Doe", carName = "Volvo", price = 200; 


#On the web, you might see examples without semicolons.
#Ending statements with semicolon is not required, but highly recommended.



===============================================
https://www.w3schools.com/js/js_reserved.asp
Automatically
var 	Declares a variable       Variable values 
let 	Declares a block variable Fixed values
const 	Declares a block constant

x = 5;
y = 6;
z = x + y;

var x = 5;
var y = 6;
var z = x + y;

constant  values and cannot be changed.

$("p"); means "select all p elements".

When to Use var, let, or const?
    1. Always declare variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (Arrays and Objects)
    4. Only use let if you can't use const
    5. Only use var if you MUST support old browser



===============================================
-let (Block Scope)
  The let keyword was introduced in ES6 (2015)
  Variables defined with let cannot be Redeclared
  Variables defined with let must be Declared before use
  Variables defined with let have Block Scope
  Variables declared inside a { } block cannot be accessed from outside the block:
  let and const does not bind to this.
  let and const are not hoisted.

  -var
  Variables defined with let cannot be declared 
  Variables defined with let must be Declared before use
  Variables defined with let have not Block Scope
  Variables declared inside a { } block cannot be accessed from outside the block:

  -const
  Variables defined with const cannot be Redeclared
  Variables defined with const cannot be Reassigned
  Variables defined with const have Block Scope

  var x = "John Doe";  var x = 0;  #yes
------------------

  var x = 2;   // Allowed
  let x = 3;   // Not allowed

  {
  let x = 2;   // Allowed
  let x = 3;   // Not allowed
  }

  {
  let x = 2;   // Allowed
  var x = 3;   // Not allowed
  }
------------------  
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
} 


------------------
===============================================
JavaScript  is Lower Camel Case  


Hyphens: first-name, last-name, master-card, inter-city.
Underscore:first_name, last_name, master_card, inter_city.
Upper Camel Case (Pascal Case):FirstName, LastName, MasterCard, InterCity.
Lower Camel Case: firstName, lastName, masterCard, interCity.
===============================================







===============================================
https://www.w3schools.com/js/js_reserved.asp
https://www.w3schools.com/charsets/ref_html_utf8.asp






===============================================

const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

cars = ["Toyota", "Volvo", "Audi"];    // ERROR  ( NOT reassign the array)

===============================================

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson"; 





===============================================


    Arithmetic Operators
     - ** 	Exponentiation 
     - ++   Increment
     - --   Decrement
    Assignment Operators
       x += 5;
    Comparison Operators
    -  == 	equal to
    -  === 	equal value and equal type
    -  ? 	ternary operator

    String Operators

    Logical Operators
    -&& 	logical and
    -|| 	logical or
    -!   	logical not


    Bitwise Operators
    Operator 	Description 	Example 	Same as 	      Result 	Decimal
        & 	     AND 	       5 & 1 	   0101 & 0001    	0001 	 1
        | 	      OR 	       5 | 1 	    0101 | 0001 	  0101 	 5
        ~ 	      NOT 	      ~ 5    	 ~0101 	          1010 	 10
        ^ 	     XOR 	        5 ^ 1    	0101 ^ 0001   	0100 	 4
        <<     	left shift  	5 << 1 	 0101 << 1      	1010 	 10
        >>    	right shift 	5 >> 1 	 0101 >> 1      	0010 	  2
        >>> 	unsigned right shift 	5 >>> 1 	0101 >>> 1 	0010 	  2



    Ternary Operators
    Type Operators
    -  typeof 	Returns the type of a variable
    -  instanceof 	Returns true if an object is an instance of an object type






===============================================







===============================================







===============================================

*/}


// /*  */



