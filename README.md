Elevator Pitch: Have you ever had problems coordinating activities with your friends? It seems like whether it's school, work, meetings, or whatever else it always takes forever to find a time where everyone can meet up. The Time Slot Machine takes this process and makes it quick and easy. Through this system, everyone puts in their available times into the phone, and through this process, the system picks the best possible time when everyone can meet without everyone needing to deal with figuring it out. It even has filters including the needed time allotment, preference for mornings, afternoons, or nights, and the required number of people needed in that time slot.

![367653126-4343cc5d-b6ba-4175-a7fa-273d0d87626e](https://github.com/user-attachments/assets/23fca9c9-a89c-4f85-b1ac-2a9077d8a4dd)

Key Features: -Secure login over HTTPS

-Ability to fill out a time slot

-Can paint over which slots are available for you

-Large time table shown below that updates when someone submits a time slot

-Option to save data for future events

-Ability to change or delete entries

Technology:

-HTML - I'd use this as a basic structure to show the Initial Voting Chart, Login Page, and Voting Result Page

-CSS - I'd use this to make sure the interface of voting combined with the interface of the communal chart look well together

-JavaScript - Provides login information page and displays the communal voting chart

-React - Showing someone's personal vote get translated to the communal voting chart

-DB/Login - Holds onto login information and schedule information if desired by the user

-WebSocket - Someone's input on the voting chart is shown in real time to all other users

HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

-HTML pages - Four HTML pages. One for logging in, one for the about tab, one to set filters, and one to vote for time slots.

-Links - The login page automatically links to the filter page which then links back to the login page and to the time display page.

-Text - Each of the time slot choices is represented by a labeled button.

-Images - I linked an image in the about page to show the theme of the web application.

-DB/Login - Input box and submit button for login. The painted time slots are what represents the data pulled from the database.

-WebSocket - The appearance of hihglighted times in the main schedule are represented through the websocket

CSS Deliverable

For this deliverable, I built some style elements into my application using CSS.

-Header, Footer, and Main Content Body - I focused on centering these bodies of text and adjusting their margins so they were better spaced and more natural to the user.

-Navigation Elements - I changed the background color and bordering colors of various buttons and got rid of bullet points for the four main pages.

-Window Resizing - The application still can be effectively navigated when found from various window sizes.

-Application Elements - I used margins and padding between text to make the system look better as well as carefully spacing my button time slots in my paint page.

-Application Text Content - All my text is structured in a way that the user will know what is a title and what serves as details. I did this through using h3 fot important text.

-Application Images - I have an image and used a border that matches the image to help it stand out with the contrast of the background of that page.

React Deliverable

- I used Javascript and React so that a single user could navigate the page and use it functionally

- Bundled and Transpiled (Done)

- Login and Register both take you to the filters page.

- Database - Holds a list of selected buttons to determine the best time slot.

- Uses Data to determine the recommended time for the group to meet up.

- Router - Routes between every page and every other page on the website.

- Uses the useState and authState hook which determines how the website functions based off if it is authenticated or unauthenticated.

- I synchronized the individual buttons and group buttons to determine the best time. It will take in multiple inputs when I implement the websocket.

Startup Service 

- The main changes I made is that I added all the login, logout, and register functionality through the backend. On top of that, I made it so the submitted filters in filters and selected times in paint work through the backend to do a series of calculations that determines the best recommended time. For instance, if the filter says to do a time in the afternoon, it will only recommend times that are within the range from noon to 6. It takes all the selected times in paint and filters those times through the filters to determine the best time. 

- Node.js/Express HTTP service completed
  
- Static middleware for frontend completed
  
- Calls to third party endpoints completed

- Backend service endpoints - I've had placeholders for login as well as a system that determines a recommended time based on the person's filters and time selections that is calculated through the back end.

- Front end calls - Service endpoints. I did this using fetch as well as calling a backend function occasionally.

DB/Login Service

- I changed the program so that I implemented a MongoDB database and successfully connected it to my code.

- Login Page stores a list of emails.

- Encrypts passwords when a user logs in.

- Removes email from database upon a logout.

- Checks to see if a user is in the database when it attempts to login.

- MongoDB works properly and associates with my code!

- Creates a new user in the database when you select enter.
