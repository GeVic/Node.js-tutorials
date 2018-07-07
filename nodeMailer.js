// Nodemailes is a module to send mails
// Download using ```npm install nodemailer
var mail = require('nodemailer');

// To send a simple mail
// To send a mail you need some kind of transport 
var transport = mail.createTransport({
  service: 'gmail', // you mail service provider
  auth:{
    user: 'email@gmail.com',
    pass: 'secret'
  }
});

// Now mail structure
var mailStructure = {
  from: 'email@gmail.com',
  to: 'reciever@anything.com', // For multiple recievers, write the emails comma seperated for the key "to:"
  subject: 'Checking Nodemailer',
  text: 'You got the meassage?'
};


// Everything is ready, just send the mail
transport.sendMail(function (err, info){
  if (err){
    console.log('error');
  } else {
    console.log('Email send: ' + info.response);
  }
});