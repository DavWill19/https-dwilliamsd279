// handle submit button and alert them if they dont fill it out properly
document.querySelector('.contactButton').addEventListener('click', function (e) {

    e.preventDefault();
    if (document.getElementById("name").value == "" || document.getElementById("message").value == "") {
        alert("Please fill out all fields before submitting.");
        return;
    }
    else if (document.querySelector("#email").value !== document.querySelector("#confirmEmail").value) {
        alert("Emails do not match. Please try again.");
        return;
    }
    else {
        // cool little animation to make the envelope fly away
        document.querySelector(".envelope").classList.add("exitTop");
        // give an alert to show message 
        setTimeout(function () {
            document.querySelector(".btn").classList.add("hide");
            document.querySelector(".form").classList.add("hide");
            let nameInput = document.getElementById("name").value;
            document.querySelector(".newMessage").innerHTML = `${nameInput}, Your message has been sent!`;
            document.querySelector(".formHide").classList.add("hide");
        }, 500);

    }

});

function enableBtn() {
    document.querySelector(".contactButton").disabled = false;
    document.querySelector(".contactButton").classList.remove("disableMe");
    document.querySelector(".contactButton").classList.add("enabled");
    console.log("enabled");
}

function toggleFAQ(faqId) {
    var element = document.getElementById(faqId);
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
  