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
