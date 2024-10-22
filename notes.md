Link to README.md: https://github.com/EMoreno65/startup/blob/main/README.md

9/7/24
During this assignment I learned how to commit changes to github and how to resolve conflicts when github and my development environment are different. 
I also learned how to set up a github repository properly.

9/27/24
I learned how to use VS Code Live Server Extension to monitor my HTML webpage through the web.

9/27/24
I learned how to create a dropdown menu through using "label" and "select" as borders

9/27/24
I learned how to create a button that triggers certain code when an action is performed. In this case, I taught it to turn green when I clicked the button. I think this will be very useful for later on in my development. 

9/27/24 
I learned that we can use br to break up a line. I also learned we can use for loops to trigger functions when certain actions are done

9/28/24
I learned how to insert an image into a file on a webpage.

9/28/24 
I learned how to make a button type "submit" to make a button move a page from one page to another

9/28/24 - CSS Practice
I learned how to set padding and margins for backgrounds on certain sections of a webpage. I also learned how to integrate animations. 

10/5/24
I learned how to set my font size and position in CSS, I use font size and align items to adjust the settings. I also learned flex 0 means the page i fixed while any non zero number means it can be adjusted by the respective unit. 

10/12/24
So I learned we need to work within the headers, body, etc to apply our changes. For one file, I couldn't center the 4 page options because I forgot it didn't have its own div section. So I need to be conscious of that
I learned from the JS arrays that we use i => and then some kinda modification or test of i. This will be very useful for knowing how to implement logic in web development. 

10/12/24
I also learned we need to use button.active in order to be sure that a stylistic choice will execute upon the clicking of a button

10/12/24
I learned that li elements create the bullet points. So I changed them to being h3 elements instead.

10/21/24
Midterm Study Notes

Link Elements: <link rel= "Relationship of link to webpage i.e. stylesheet" href = image.com (href gives the hyperlink to the image)>

A div is a block division of content - <div class = "Anything"> Content </div> Basically gives you a subsection to add structure

#title vs #.grid - Title targets a single unique element while .grid can put multiple elements all in 1 div class

Padding represents the block of space between the content of the element and the element's border, so like the blank space.

Margin represents the space between the element border and other elements, so it separates the page a bit more. 

display: Flex will make the image flexible and aligned to the parameters it's assigned

gap: 10px for example can add that much space between images

justify content: center -> This will align the images on the center horizontally

align items: center -> aligns images vertically in the center

flex direction column -> All images will be displayed as columns

flex: 0 80px, means it will not grow and starts at 80px size

flex: 1 means it will get a fractional unit of growth

We can add margin for flex as well

CSS can include background color such as hsl(180, 10%, 10%);

What does padding CSS do? -> Space between content element and its border. Can be adjusted

Arrow syntax function declaration? -> () => 3 (This is a function with no params that always returns 3)

Example of arrow syntax function declarations (According to notes):

const a = [1, 2, 3, 4];

// standard function syntax

a.sort(function (v1, v2) {

  return v1 - v2;
  
});

// arrow function syntax

a.sort((v1, v2) => v1 - v2);

Using map with an array, what does it output? -> Example according to class notes:

const a = [1, 2, 3];

console.log(a.map((i) => i + i));

// OUTPUT: [2,4,6]

console.log(a.reduce((v1, v2) => v1 + v2));

// OUTPUT: 6

console.log(a.sort((v1, v2) => v2 - v1));

// OUTPUT: [3,2,1]

a.push(4);

console.log(a.length);

// OUTPUT: 4

Get element by ID? -> Used in html, to retrieve a button to click for example, you need to do get element by ID so you can look up the button, like below vvv

<button id="myButton">Click Me!</button>

document.getElementById("myButton").addEventListener("click", function() {

The addEventListener is meant to run the function if the button is clicked

#selectors? These basically pick out an element by its ID from a query (document.querySelector("#title")) selects the element with the matching ID

Information about the DOM
Object representation of html elements
Document points to the root element of the DOM
Every element makes a node on the DOM
DOM element interface helps to iterate through child elements and access parent elements
queryselectorall can select elements from the document
Can insert, modify, and delete elements in the DOM
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
To delete elements call the removeChild function on the parent element.

function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');

Cited from notes ^^^

You can inject entire blocks of html into an element in the DOM

DOMs have addEventListener functions

DOMs have an onclick function

By default, the HTML span element has a default CSS display property value of: (inline) <- make sure they avoid taking up more than one line

How would you use CSS to change all the div elements to have a background color of red? Make a style block inside the head that has a div block with its only feature being background-color: red

How would you display an image with a hyperlink in HTML? 

<img alt="mountain landscape"  Then you do this -> src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" /> This is the format to include one

In the CSS box model, what is the ordering of the box layers starting at the inside and working out? - Content, Padding, Border, Margin -> From innermost to outermost

Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected? - Wrap it in a span class like this <p>This is a <span class="highlight">trouble</span> and double text.</p> Make a style element in the head that sets the color to green like this <style>
    .highlight {
      color: green; /* Set text color to green */
    }
  </style>

What will the following code output when executed using a for loop and console.log? You can read the code and figure this out
const byu = document.getElementByID("byu")
You would set a const element to getElementByID("byu") to get the element. Then you'd say byu.style.color = "green"

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? 
Paragraph = <p></p>
Ordered List = <ol></ol>
Unordered List = <ul></ul>
Second Level Heading = <h2></h2>
First level heading = <h1></h1>
Third level heading = <h3></h3>

How to declare document type to be html? <!DOCTYPE html>

What is valid javascript syntax for if, else, for, while, switch statements?

Example if-else: if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is 10 or less");
}

For Loop:
for (let i = 0; i < 5; i++) {
    console.log(i); 
}
0,1,2,3,4

While:
while (i < 5) {
    console.log(i); 
    i++;
}

Switch:
switch (fruit) {
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "apple":
        console.log("Apple is red or green.");
        break;
    default:
        console.log("Unknown fruit.");
}


What is the correct syntax for creating a javascript object?

const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func} This is how you create a new object in javascript according to the class notes

You can add new properties, you do that by seeing the above code and how it is demonstrated

If you want to include JavaScript on an HTML page, which tag do you use? - You use the script tag, and put in javascript code or link a java file like so, <script src="script.js" defer></script>

You use getElementByID again, like so const animalElement = 
document.getElementById("animal");
animalElement.textContent = "crow";

Information about JSON
-Compatible with javascript
-Contains object with key-value pairs
-Stringify creates a json from a js object
-Parse creates a js object from a json

An example JSON:

{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
chmod - changes file permissions
pwd - prints current working directory
cd - Change directory
ls - list directory contents
vim - open vim text editor
nano - open nano text editor
mkdir - create new directory
mv - move or rename files mv [source] [destination]
rm - remove files
man - display command manuel
ssh - securely connect to a remote machine
ps - display running processes
wget - download files from web wget [url]
sudo - execute command with super user privileges

remote shell session - ssh, rsh, rlogin, telnet, screen

ls -la lists all files and content including hidden ones
banana.fruit.bozo.click
root domain - bozo.click
TLD - .click
Subdomains Banana and fruit, banana is a subdomain of fruit

To use https, a web certificate is necessary - provides encryption and verifies identity of the website

Can a DNS A record can point to an IP address or another A record. - It can only point to an IP address, not another record.

Port 443, 80, 22 is reserved for which protocol? - 
80 is default port for http
443 is default port for https
Port 22 is used for ssh

Promises - Pending, fulfilled, or rejected
Takes in resolve and reject

const myPromise = new Promise((resolve, reject) => {
    if (/* operation successful */) {
        resolve(value); 
    } else {
        reject(error); 
    }
});

You can use then/catch with promises:

myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });
