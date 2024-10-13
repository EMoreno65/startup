# startup

Elevator Pitch:
Have you ever had problems coordinating activities with your friends? It seems like whether it's school, work, meetings, or whatever else it always takes forever to find a time where everyone can meet up. The Time Slot Machine takes this process and makes it quick and easy. Through this system, everyone puts in their available times into the phone, and through this process, the system picks the best possible time when everyone can meet without everyone needing to deal with figuring it out. It even has filters including the needed time allotment, preference for mornings, afternoons, or nights, and the required number of people needed in that time slot. 

![458408962_3908361849438844_63413381065119738_n](https://github.com/user-attachments/assets/4343cc5d-b6ba-4175-a7fa-273d0d87626e)

Key Features:
-Secure login over HTTPS

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

**<u>HTML Deliverable</u>**

For this deliverable I built out the structure of my application using HTML.

 -HTML pages - Four HTML pages. One for logging in, one for the about tab, one to set filters, and one to vote for time slots. 

 -Links - The login page automatically links to the filter page which then links back to the login page and to the time display page.
 
 -Text - Each of the time slot choices is represented by a labeled button.
 
 -Images - I linked an image in the about page to show the theme of the web application.
 
 -DB/Login - Input box and submit button for login. The painted time slots are what represents the data pulled from the database.
 
 -WebSocket - The appearance of hihglighted times in the main schedule are represented through the websocket

 **<u>CSS Deliverable</u>**

 For this deliverable, I built some style elements into my application using CSS.

 -Header, Footer, and Main Content Body - I focused on centering these bodies of text and adjusting their margins so they were better spaced and more natural to the user.

 -Navigation Elements - I changed the background color and bordering colors of various buttons and got rid of bullet points for the four main pages.
