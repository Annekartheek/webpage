function sendMail(){
    let parms={
        name :document.getElementById("name").value,
        email :document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value,
    }

    emailjs.send("service_elheho8","template_xjhi18j",parms).then(alert("Email Sent!!"))
}