Deployed Site: https://brabbuss.github.io/overlook/

---

# The Overlook Hotel - A hotel booking and management solution
###### A simple and elegant site where one can manage their bookings 

---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Resources](#resources)
* [Bio](#bio)

## Introduction

![Homepage](https://user-images.githubusercontent.com/66697338/98857183-f2228e80-241b-11eb-8138-403beaa0d500.png)

The Overlook web app is the final deliverable based on the Mod 2 solo capstone project for Turing Front End students, as laid out [here](https://frontend.turing.io/projects/overlook.html). The project seeks to challenge the totality of learning of students to this point, pulling together their knowledge of HTML, CSS (Sass/scss), JS, DOM interaction, TDD (test driven development), API requests (POST, DELETE, GET), as well as working proficiency in the terminal and GitHub, in order to construct a fully functional web site from scratch. 

The working dataset is retrieved and updated with API calls, with some minor protections from badly formatted data on the back end. The nature of working with constantly updated information demands that students carefully plan out Class structure and the flow of information in their main scripts. 

The vast nature of the project on a demanding timeline (7 days from assignment to completion) forces the employment of careful planning with project management tools and utilizing wireframing and mind-mapping.

Lastly, be sure to click this here when you see it:
<details>
  <summary>**Under the Hood**</summary>
On the surface the site is quite simple, presenting an interface for users to search and book available rooms and view their booking history (as well as deleting upcoming booking as a manager). However, the simple exterior belies extensive logic operations beneath the hood. The site pulls in three sets of data with API calls - a list of customers, a list of bookings (where POST and DELETE requests are made - the list changes with each booking/deletion), and a list of rooms. Inside of the class architecture, heavy use of array iterating methods are employed to cross reference data from these three data sets.
</details>

## Features
---
* [General Site Features](#general-site-features)
* [UX, Animations and Extensions](#ux-animations-and-extensions)
* [Classes, TDD, logic](#classes-tdd-logic)
* [Roadmap](#roadmap)
---

#### General Site Features
Landing on the homepage, users are provided with some basic information about the hotel. The sidebar is a placeholder for user and manager statistics for the day. The meat of the app is inside of a logged in view - users would begin by logging in. Credentials to log in are:

```
for manager view:
Username: manager
Password: overlook2020
```

```
for customer view - where 'xx' is a number between 1 - 50:
Username: customerxx
Password: overlook2020
```

![Log In Modal](https://media.giphy.com/media/Th1eAaeJEuMZdHRrOd/giphy.gif)

<details>
  <summary>**Under the Hood**</summary>
The login functionality was fun to write from scratch. It's much easier given that all of the passwords are canned, and that the user login name is always 8 characters, plus a number with a maximum length of two. It would be interesting to learn how a real-world login validation occurs, how the API requests work, and what additional authentication measures are generally in place.
</details>

###### Customer View

The customer dashboard has two views, 'My account' and 'Find rooms'. Find rooms provides the user with a toolbar with which to search available rooms. My account lists the customer's previous and upcoming bookings, sorted by the most recent.

![Customer View - My account](https://user-images.githubusercontent.com/66697338/98857185-f353bb80-241b-11eb-8aad-ce3a6938d329.png)

Below you can see the context dependent toolbar appear for searching vacant rooms by date and type.

![Customer View - Find Rooms](https://media.giphy.com/media/Z8tkLiBzEtsVNuLj1a/giphy.gif)

In this view is also a list of the customer's 'stats'. There was a bit of fun had with assigning a 'loyalty level' based on the amount spent by the customer. Can you reach the top tier?? The stats are dynamic and update when a user books a room.

![Customer Stats](https://user-images.githubusercontent.com/66697338/98857190-f51d7f00-241b-11eb-9fe8-0c28367f9b78.png)


<details>
  <summary>**Under the Hood**</summary>
Below in 'Classes, TDD, logic' section, you can see a bit more detail in the flow of information, using the `onSuccess()` callback function to fire off the needed visual update function once the promise for the latest booking data resolves.
</details>

###### Manager View
Manager users recieve visual feedback that they have been logged into the site with a welcome message in the empty dashboard containing a bit of information. They also receive feedback for which part of the user view they are in. 

![Manager View - Customer History](https://user-images.githubusercontent.com/66697338/98857178-edf67100-241b-11eb-8720-2e815a22b6e3.png)

![Manager stats](https://user-images.githubusercontent.com/66697338/98857191-f51d7f00-241b-11eb-9bc4-15c1c5d1acf4.png)

The manager has access to two views. In the customer history, the manager can access a customer's booking history with a full name search - there are plans to add the ability to search by ID. In this history, the manager can delete any future bookings. All statistics and availability are updated dynamically. In the below gif, you'll note that the manager is presented with a confirmation message after clicking the delete button - better safe than sorry!

![Deleting a booking](https://media.giphy.com/media/clZfTva5NvSpGulgyN/giphy.gif)

In the 'Book for Customer' view, the manager can do just that! Those bookings are reflected in that moment in the customer's bookings as well.

![Manager Booking gif](https://media.giphy.com/media/utRs9iZlNDh9rOCQFI/giphy.gif)

As you can see, the numbers update with the given action.

![Manager Stats Dynamically Updating](https://media.giphy.com/media/aobp16tiZ9b4kcjoAw/giphy.gif)

#### UX, Animations and Extensions

A major goal for this project was to reduce confusion around UX by adequately planning and researching other hotel sites. Styling and UI is a major component of UX. To that, the site is relatively sparse, offering clean lines and only necessary information once signed in. 

Attempts at media queries were made for responsive design. There was some success, but not to the degree that a polished live product would warrant. 

In pushing for a high-end theme, a 'fade' is applied during transitions from different views. The fade is two fold, though. The fade also helps the delay between API calls become less noticable and almost seemingly intentional.

#### Classes, TDD, logic

Classes were built side by side with `expect` evaluative statements using the `chai` library. TDD helped build a rock solid class architecture that is simple and to the point, gets the job done. No data is 'pulled into' the class - through array iterator methods, the data is retrieved and then released. Any new data is sent to the server via API POST or DELETE. This allowed a pairing down of classes to just two classes - the User and the Manager, which extends the User class.

Chai spies were implemented to test the API calls, which are a part of three methods. Two inside of manager for booking on behalf of a customer and deleting on behalf of a customer, and one in the user - for the user to create a new booking.

Testing utilizes `mocha` and `chai`. To test, after cloning down the repo, ensure that these NPM packages are installed before testing. `npm test` inside the `tests` directory will test the classes.

One of the most challenging pieces of this project was learning how to work with the API, and specifically inside the `.then()`, to employ dynamic updates, which of course needs a competent class structure to function smoothly. Dynamic updates were successfully accomplished with a callback function passed into the API call that would fire on success of the promise being fulfilled. That helped callback function would then call on the needed function that would update the display with the newly fetched data. 

Here's that function calling the function that contains the API request. You can see that a callback function `onSuccess()` is defined and passed into the `bookRoom()` function:

![Function calling the API request, defining the callback](https://user-images.githubusercontent.com/66697338/98864115-9dd0dc00-2426-11eb-88e6-7d0d48abfd32.png)

And here's that API request with the callback insde of the `.then()`:

![API request with callback](https://user-images.githubusercontent.com/66697338/98864111-9c9faf00-2426-11eb-802a-ff681eac9163.png)

#### Roadmap

In future iterations, additions will include:
- further accessibility additions - Lighthouse returns a 100/100, but I think there is plenty of room for improvement
- clean, smooth responsive design, and design specified to a tablet and phone
- integration of service fees

#### Resources

CSS tricks:
- Cropping an SVG with a div container to get images to size correctly without skewing card image: https://www.educative.io/edpresso/how-to-crop-an-image-in-css
- Free SVG icons https://www.svgrepo.com/svg/17356/empty-cart
- Fade in animation: https://blog.hubspot.com/website/css-fade-in

## Bio
<img src="https://avatars1.githubusercontent.com/u/66697338?s=460&u=3d2e338fdeb625c1940a87b1cfdb7ba6e7d16c5c&v=4" alt="Coding Magician"
 width="150" height="auto" style="float: left" />\
**Scott Brabson**

[GitHub Profile](https://github.com/brabbuss)

FE Engineering student at Turing School who has found no end to the joy that is speaking the language of JS.
