console.log("%cThe Answer To This Question Is the Password You Seek!","font-size: 15px;"),console.log("*****What Year Was JavaScript Created?****");const nodemailer=require("nodemailer");$("#sendMSG").on("click",function(a){a.preventDefault();const b=$("#nameInput").val(),c=$("#emailInput").val(),d=$("#detailsInput").val();console.log(`Message From: ${b} | Email: ${c} | Message Details: ${d}`),"use strict",async function(){let a=await nodemailer.createTestAccount(),e=nodemailer.createTransport({host:"smtp.ethereal.email",port:587,secure:!1,auth:{user:a.user,pass:a.pass}}),f=await e.sendMail({from:"\"McCabe Portfolio\" <hatchetcreektimbers@gmail.com>",to:"mccabenorthup@gmail.com",subject:"Contact from McCabe Portfolio",text:`Message From: ${b} | Email: ${c} | Message Details: ${d}`});console.log("Message sent: %s",f.messageId),console.log("Preview URL: %s",nodemailer.getTestMessageUrl(f))}().catch(console.error)}); 
let seconds=10;const pauseVideo=()=>{setInterval(()=>{seconds--,0===seconds&&(stopFunc(),document.getElementById("myVideo").pause(),console.log("paused"),divToggle())},1e3)};pauseVideo();const divToggle=()=>{$("#passwordDiv").toggle("swing")},stopFunc=()=>{clearInterval(pauseVideo())};$("#passSubmit").on("click",a=>{a.preventDefault(),console.log($("#passwordInput").val()),"1995"===$("#passwordInput").val()?location.replace("game.html"):location.replace("index.html")});