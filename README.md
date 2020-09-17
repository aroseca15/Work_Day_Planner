# Work_Day_Planner
I have constructed an app that will save and store the input a client types into the middle text box next to the time slot. It also uses references to keep track of current date and time once refreshed.

Deployment Link: https://aroseca15.github.io/Work_Day_Planner/

Instuctor and Grader Sidenote: gif demos of each HW will be added later in the course.


Jumbotron Date and Current Time:
    Inside of the Jumbotron I chose to use todaysDate.toLocaleString() method to retrieve the date. I was also looking for a specific format but felt many of the .format() methods required more lines of code that I felt was needed. So inside of my todaysDate.toLocaleString() I tried to use 'default', { month: 'long' }. I used the same approach for the current time. With some guidance from a TA, I chose to use        moment().format('HH'); in a variable called "currentHour". This would later be the variable I would use in an 'if else' statement to compare the hour time slots to the current hour for CSS purposes.


Each time slot is a row with hour, text area, and save button. 

    Hour Slots:
        .Set up and appened to HTML through JQuery.

        .Placed in a while loop, taking from an array to create each individual time row.

        .There is also a secondary array set up for CSS functionality purposes. This array is named "timeNum" and does not show on the page but compares to the console local hour, (en-us) timezone. An 'if else' statement uses added classes to circle thourgh each number in timeNum and assign the values "past", "present" or "future". The text box will change color based on these comparisons: "past"= Grey, "present"= Red, "future"= Green.


    Text Area:
        .The text area changes color based on the current hour of each day. 
        .The text area saves input from the client regardless of hour state (past, present or future). I feel this provides a unique situation for the client. If they choose to input in the grey(past) boxes then they are in affect planning for the next day. When the following day comes and the page is refreshed with the new date and time, their text input is retieved from local stoage unchanged but the backgroud color is according to the new day's circumstances(present or future).      


    Save Button:
        .The save button is set up with an on('click) method function. When text is added to the text area and the client clicks the save button then the information is saved to the locat storage where it is also retrieved upon refresh.
        .Since every save button is identical, I added a stongly contrasted color of crimson to the hover class in CSS.
    

There are comments throughout the code to guide where changes were made and code was written.
