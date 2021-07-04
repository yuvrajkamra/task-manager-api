const mailgun = require("mailgun-js");
const api_key=process.env.SEND_API_KEY;
const DOMAIN ='sandbox8b156155ceba4b0a9b886c0a3d4f8bc6.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const sendWelcomeEmail = (email,name)=>{
    mg.messages().send({
        from: 'Excited User <singhy838@gmail.com>',
        to: email,
        subject: 'Thanks for joining in!',
        text: `welcome to the app,${name},Let me know how you get along with the app`,
    })
	
}
const sendCancelEmail=(email,name)=>{
   mg.messages().send({
       to: email,
       from :'Excited User <singhy838@gmail.com>',
       subject:'Sorry to see you go!',
       text: `Goodbye,${name}.I hope to see you back sometime soon.`
   })
}
module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}

