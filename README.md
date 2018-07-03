# Node.js-tutorials
Node.js small code tutorials for Beginners. 

## What is Node.js
It is a an open source server enviroment which user JavaScript on the server. It uses asynchronous programming.

## Why Node.js
Let's deal with it using an example. A common task on web server is to open a file on the server and return to the client.

Here is how PHP and ASP will handle it:
* Sends the task to the computer's file system.
* Waits while the file system opens and reads the file.
* Returns the content to the client.
* Ready to handle the next request.

Here is how Node.js handles a file request:
* Sends the task to the computer's file system.
* Ready to handle the next request.
* When the file system has opened and read the file, the server returns the content to the client.

It eliminate the wait time here. Hence, is memory efficient.

## What can it do?
* It can generate dynamic page content
* It can create, open, read, write, delete, and close files on the server
* It can collect form data
* It can add, delete, modify data in your database

## Node.js NPM 
NPM is a package manager for Node.js. It hosts thousands of packages to download. It is similar
to ```pip```.
Say you want to download a package named lower-case
```npm install lower-case```
And that's all you have to do to use a module in Node.js.

Pretty simple huhh!

This intro part is taken from https://www.w3schools.com/nodejs/nodejs_intro.asp.


