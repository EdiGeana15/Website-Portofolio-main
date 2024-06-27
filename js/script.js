// aos animations
AOS.init();

// typed animations

const typed = new Typed("#type-it", {
  strings: ["Front-End Developer", "Designer", "Freelancer"],
  typeSpeed: 50,
  loop: true,
});

// header nav

$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop >= 50) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

// footer copyright reserved

const currentYear = new Date().getFullYear();
document.querySelector("#copyright").innerText =
  "Copyright © " +
  currentYear +
  " all rights reserved | Developed By Eduard Geană";

// scrollIt
$(function () {
  $.scrollIt({
    scrollTime: 300,
    topOffset: -100,
  });
});

//smtp email

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

  Email.send({
    SecureToken: "f6fcec96-66b5-421b-9230-999b08ad1639",
    // Host: "smtp.elasticemail.com",
    // Username: "geanaedi15@gmail.com",
    // Password: "ADB9478CB8EC427ED0B4802321BC3297271F",
    To: "geanaedi15@gmail.com",
    From: "geanaedi15@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  })
    .then((message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Thank you!",
          text: "Message sent succesfully!",
          icon: "success",
        });
      }
    })
    .then((message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      }
    });
}

function checkInputs() {
  const items = document.querySelectorAll(".form-control");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
