# Project

A simple dashboard to be used by a guitar instructor and his students

# Installation and Setup

Clone down this repository.

**!!!You will need node and npm installed globally on your machine.!!!**

Open Repository in terminal

yarn install/ npm install

# To Start Server:

yarn start/ npm start

# To Visit App:

localhost:3000

# Funtionalities

# Login

We are operating under the assumption that the database will store two different types of users, Teachers and Students.

Using a teachers username/password will log you into the admin mode of the dashboard.

Using a student username/password will log you into the regular mode of dashboard.

# Components

Side Navigation - Allows navigation to different screens and includes the logout button.

Main Screen - The data and elements of different screens is viewed here.

# Screens

Home - The default screen shows the posts added by the teacher, which can be commented on by both teachers and students.

Schedule - The screen shows a time table for classes scheduled for the week based on groups (Red, Green, Blue, Yellow), into which the students are divided.

**!!!Here only username is relevant, password can be gibberish. Please use (username:jithin, password:xxxx) to log into admin mode**
**and (username:xxxx, password:xxxx) to log into student mode.!!!**

# Shared Functionalities

There 3 action functionalities common to both modes which all occur in Home Screen:

Comments can be added to every post.

Clicking on an image attached to a post will enlarge it. Clicking it again will minimize it. (WILL NOT WORK ON NON-IMAGE FILES).

Clicking on the link below the attached files will download those files.

# Student Mode

The student mode has no unique action functionalities.

However the schedule screen will show to what group that student belongs.

# Admin Mode - Home Screen

A post with the lesson and accompanying materials can be added by clicking the '+' icon in the bottom right hand corner and filling in the necessary data.

A previously added post can be edited.

Every post can be commented on.

# Admin Mode - Schedule Screen

The functionalities in this page work similarly. Clicking on the student list elements or time tables slots will change its color cyclically from
(white -> red -> green -> blue -> yellow).

Clicking on a student name will change the color of the element depecting to which group they will belong.
White denotes that the student has not been grouped yet.

Clicking on a slot in the time table will change its color, blocking it for that color group for the week.
White blocks denote a free slot.
