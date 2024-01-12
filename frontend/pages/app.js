const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
// Initialize Email.js with your User ID
emailjs.init("1WZSwssU9Raj0IcAhxJXb");

function sendEmail() {
    // Get form data
    var formData = new FormData(document.getElementById("contactForm"));

    // Send email using Email.js
    emailjs.sendForm("service_oyw0d5n", "template_3u158v8", formData)
        .then(
            function(response) {
                console.log("Email sent successfully:", response);
                // You can add a success message or redirect the user to a thank you page
            },
            function(error) {
                console.error("Email failed to send:", error);
                // You can add an error message here
            }
        );
}
function sendEmail() {
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contactForm')
      .then(function (response) {
          console.log('Email sent successfully:', response);
          // Reset the form after successful submission
          document.getElementById('contactForm').reset();
      }, function (error) {
          console.error('Email failed to send:', error);
      });
}
