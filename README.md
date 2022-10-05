
# LCReviews

## Milestone Project 1 - Static Front-End Website

I have made an online version of the game Tic-Tac-Toe, using HTML, CSS and Javascript. The game requires two players on one device to play, and will track each players moves, and if the game is tied or won.

This is my Milestone Project 2 submissionm for Code Institute's course on Web Application Development, which features 1 page built using HTML, CSS and Javascript.

## Live Website

[View the live website here](https://lewisc0.github.io/milestone-project-two/)

## Repository

[View the repository here](https://github.com/LewisC0/milestone-project-two)


# User Experience

## Project Goals

The primary goal of the website is to provide the user with entertainment through the classic game Tic-Tac-Toe. 


## User Goals

- A website which is easy to use, and understand
- Easily playable for any user
- The game plays correctly
- It's clear which player has won
- Replayable and simple

## Developer Goals

- The website will be easy for users to use and understand
- Visually appealing
- The game functions correctly
- Well written code which is reflected in the websites presentation

## User Stories

As a user interested in having some quick fun with a friend

- A visually appealing website, which is easy to understand.
- The ability to easily play the game correctly
- The game should be replayable




# Design Choices


## Font

Text throughout the website is in Roboto font style. Roboto is a very well designed modern font which is very easy to read and looks great on any number of devices.

## Colour Scheme

Throughout the entire website, I used a very simple 2 colour scheme. The colours contrast very well, which allows for a very clear and easy to use website. The colours I used were '#554994' and '#DBC8AC'

![Website Colour Scheme](https://github.com/LewisC0/milestone-project-two/blob/main/assets/site%20screencaps/colour-scheme.png?raw=true)

Page Layout

My website has one page, featuring the game title, the current player turn display, game board, the game result display and the reset boad button.


## Wireframes

- [Here are the wireframes I created for the site](https://github.com/LewisC0/milestone-project-two/blob/main/wireframes/wireframes.pdf)




# Features

## Existing features

- The website is mobile friendly and responsive on all devices. The website was designed with mobile devices in mind, making it fully responsive on all devices. This was accomplished using a mixture of Bootstrap's grid system, Media Queries and Flexbox.
- Fully functional buttons

## Features to possibily implement

- A counter to track how many times each player has won
- X and O having individual player colours


# Technologies Used

## Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML)

- [CSS3](https://en.wikipedia.org/wiki/CSS)

- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

## Libraries/Frameworks

- [Google Fonts](https://fonts.google.com/) - I used the google font 'Roboto' throughout the entire website.

- [Gitpod](https://gitpod.io/workspaces) - Gitpod was used to write and create the website, using the inbuilt VSCode IDE.

- [GitHub](https://github.com/) - Github was used to store the code within a repository and to host the site using GitHub Pages.

- [Git](https://git-scm.com/) - Git commands were used within the IDE to track version control.

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Through the creation of the website, I used Chrome DevTools to troubleshoot and test the responsiveness of the website.

- [Adobe XD](https://www.adobe.com/uk/products/xd.html) - I used Adobe XD to design the wireframes for the website.


# Deployment

This project was developed using Visual Studio Code IDE through Gitpod, commited to git and pushed to GitHub using the inbuilt functions of Gitpod

The deployment of this page is done using GitHub Pages, which can be located within the GitHub Repository [link to the repository]

Here are the steps taken to deploy the website:

1. Navigate to GitHub and log in.
2. Click on the profile image at the top right of the page, and select 'Your repositories'.
3. Select LewisC0/milestone-project-two.
4. Locate and click on 'Settings'.
5. Click 'Pages' on the side navigation bar.
6. Under source, select the main branch, the root folder and hit save.
7. After a small wait, the text 'Your site is published at https://lewisc0.github.io/milestone-project-two/' will appear above 'Source'.
8. Click on or copy the link into the browser, to view the deployed websited.

How to setup and run this website locally

1. Follow steps 1-3 as seen above
2. Click the 'Code' drop down menu
3. Select the provided clone HTTPS url and copy it
4. Open your own IDE while having Git Bash installed
5. Create a new directory, where you would like the cloned directory to be created
6. In your IDE's terminal, type 'git clone ' and then pastle the clone HTTPS url from step 3
7. You are now free to check the provided code, as well as running the website locally from your own system.

# Testing

## Code Validation

## W3C HTML Validator


### Index.html

![Index W3C Validated](https://github.com/LewisC0/milestone-project-two/blob/main/assets/site%20screencaps/index%20validation.png?raw=true)


### W3C CSS Validator

![CSS W3C Validated](https://github.com/LewisC0/milestone-project-two/blob/main/assets/site%20screencaps/css%20validation.png?raw=true)

The CSS passed the W3C CSS Validation


## Lighthouse

### Lighthouse Review Report for Index page, Desktop

![Lighthouse Validated](https://github.com/LewisC0/milestone-project-two/blob/main/assets/site%20screencaps/Lighthouse%20Desktop%20Validation.png?raw=true)

### Lighthouse Review Report for Home page, Mobile

![Lighthouse Validated](https://github.com/LewisC0/milestone-project-two/blob/main/assets/site%20screencaps/Mobile%20Lighthouse%20Validation.png?raw=true)

The main page achieved high scores in Performance, Accessibility, Best Practices and SEO, on both desktop and mobile displays.

## Browser Compatibility

I have tested my website in multiple different browsers, including Google Chrome, Brave, Firefox and Microsoft Edge, all of which were compatible with the site. The website was also tested on Google Chrome and Safari on mobile devices, also seeing no issues.

## Responsiveness

The website was built with mobile design in mind, which is clear to see when testing responsiveness. The responsive nature of the website is fully functional on a wide range of devices provided in the Chrome DevTools, this includes:

- iPhone SE
- iPhone XR
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Air
- iPaid Mini
- Surface Pro 7
- Surface Duo

## Testing User Stories

### As a user interested in having some quick fun with a friend
- The website appears to be easy to use and understand
- I'm very easily able to understand how the game plays and functions
- Me and a friend are able to click on the game board, and place our individual X's and O's
- The games logic is correct
- The game has correct win and tie conditions



### Resolved

- During the process of writing the Javascript for the game, I came across this error. One of the lines of Javascript code was not correctly grabbing data from the HTML code. I corrected this by switching from 'document.getElementByID' to a 'querySelector' instead.

![Error Code](https://github.com/LewisC0/milestone-project-two/blob/main/assets/site%20screencaps/initial%20javascript%20error.png?raw=true)


### Unresolved

- The code does not correctly switch colours of the players X and O's, within the game board and on the player turn tracker.



# Credits

## Code

[Code Institute](https://codeinstitute.net/) - I referred to lessons and source code from Code Institute's Web Application Development course.

