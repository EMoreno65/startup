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

React Startup

- I learned I could use a NavLink which imports from react router dom to serve as a routing button
- I learned I can synchronize buttons by setting an active buttons list
- I learned how to use useState and setting authenticated and unauthenticated to make certain functions happen only in different states


Notes for Final

Default port for https, http, and ssh are 403, 80, and 22 respectively

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;


Hook	Purpose
useState	Adds state to a functional component.
useEffect	Handles side effects like data fetching or subscriptions.
useContext	Accesses values from React Context.
useRef	Creates a reference to a DOM element or mutable value.
useMemo	Memoizes expensive calculations to optimize performance.
useCallback	Memoizes callback functions to prevent unnecessary re-renders.
useReducer	Manages complex state logic using reducers (like Redux).
useLayoutEffect	Similar to useEffect, but fires synchronously after DOM mutations.
useImperativeHandle	Customizes the exposed instance value when using React.forwardRef.

Hooks basically provide functionality to things that would otherwise be class specific

package.json manages identifying the project and using dependencies. 

fetch(url, options)
  .then(response => response.json()) // Parse response as JSON
  .then(data => console.log(data))   // Process the data
  .catch(error => console.error('Error:', error));

  fetch does this ^^^

Node.js allows jaavscript code to be ran outside a browser and is ran on the backend

pm2 allows you to monitor applications currently running in node.js - manages and keeps application online

pm2 ls	List all of the hosted node processes
pm2 monit	Visual monitor
pm2 start index.js -n simon	Add a new process with an explicit name
pm2 start index.js -n startup -- 4000	Add a new process with an explicit name and port parameter
pm2 stop simon	Stop a process
pm2 restart simon	Restart a process
pm2 delete simon	Delete a process from being hosted
pm2 delete all	Delete all processes
pm2 save	Save the current processes across reboot
pm2 restart all	Reload all of the processes
pm2 restart simon --update-env	Reload process and update the node version to the current environment definition
pm2 update	Reload pm2
pm2 start env.js --watch --ignore-watch="node_modules"	Automatically reload service when index.js changes
pm2 describe simon	Describe detailed process information
pm2 startup	Displays the command to run to keep PM2 running after a reboot.
pm2 logs simon	Display process logs
pm2 env 0	Display environment variables for process. Use pm2 ls to get the process ID

vite is a build tool where many things such as typescript, javascript and other things can be rolled up into a simple straightforward application

Http headers: Authorization	Bearer bGciOiJIUzI1NiIsI	A token that authorized the user making the request.
Accept	image/*	The format the client accepts. This may include wildcards.
Content-Type	text/html; charset=utf-8	The format of the content being sent. These are described using standard MIME types.
Cookie	SessionID=39s8cgj34; csrftoken=9dck2	Key value pairs that are generated by the server and stored on the client.
Host	info.cern.ch	The domain name of the server. This is required in all requests.
Origin	cs260.click	Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-Allow-Origin	https://cs260.click	Server response of what origins can make a request. This may include a wildcard.
Content-Length	368	The number of bytes contained in the response.
Cache-Control	public, max-age=604800	Tells the client how it can cache the response.
User-Agent	Mozilla/5.0 (Macintosh)	The client application making the request.

{ $or: [{name:/J.*/}, {score: {$lt:3}}]} This query makes sure name starts with "J" or score is less than 3. One or the other results in the item being accepted. 

All written notes:

Cookies allow server to store data on a client

JSX helps html be rendered from Javascript

status codes - 300 is content redirecting or caching

400 is when there's a client error

500 is when there's a server error

content type shows type of content of original medium before it's encoded

secure cookies are only sent over https

http only means cookie can't be accessed through javascript commands

samesite - restricts cookies from cross-website requests

middlewares only use the specific command get or they have no path specified

passwords should be stored with hashing or salting

order of websocket commands -> Browser or client starts, backend doesn't start anything until the client sends something -> backend and front-end have onevent listeners

websocket protocol provides bidirectional communication through one tcp connection with very little overhead

JSX - javascript xml

js - javascript

aws - amazon web services 

NPM - node package manager

nvm - node version manager

react component with react use state 

const [state, setState] = React.useState(initialValue); 
State initializes, setState is  function to update values, and initial value is what it state it set to initially.

linux daemon is a background process that runs without being controlled by the user
