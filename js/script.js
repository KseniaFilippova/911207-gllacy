var modalFeedback = document.querySelector(".modal-feedback");
var modalOverlay = document.querySelector(".modal-overlay");
var modalForm = document.querySelector(".feedback-form");
var modalLogin = modalFeedback.querySelector("[name=user-name]");
var modalMail = modalFeedback.querySelector("[name=feedback-user-email]");
var modalText = modalFeedback.querySelector("[name=user-feedback]");
var modalClose = document.querySelector(".feedback-form-close");

var storageSupport = true;
var loginStorage = "";
var mailStorage = "";

try {
 loginStorage = localStorage.getItem("login");
 mailStorage = localStorage.getItem("mail");
} catch (err) {
 storageSupport = false;
}

var modalLink = document.querySelector(".communication-button");
modalLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-feedback-show");
  modalOverlay.classList.add("modal-overlay-show");
  if (loginStorage && mailStorage) {
    modalLogin.value = loginStorage;
    modalMail.value = mailStorage;
    modalText.focus();
  } else {
    modalLogin.focus();
  }
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-feedback-show");
  modalOverlay.classList.remove("modal-overlay-show");
  modalFeedback.classList.remove("modal-error");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalFeedback.classList.contains("modal-feedback-show")) {
      modalFeedback.classList.remove("modal-feedback-show");
      modalOverlay.classList.remove("modal-overlay-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});

modalForm.addEventListener("submit", function(evt) {
  if (!modalLogin.value || !modalMail.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  } else if (storageSupport) {
    localStorage.setItem("login", modalLogin.value);
    localStorage.setItem("mail", modalMail.value);
  }
});

var button1 = document.querySelector(".switch-button-1");
var button2 = document.querySelector(".switch-button-2");
var button3 = document.querySelector(".switch-button-3");

var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");

var body = document.querySelector("body");

button1.addEventListener("click", function(evt) {
  if (slide2.classList.contains("visually-hidden")) {
  } else {
    slide2.classList.add("visually-hidden");
  }
  if (slide3.classList.contains("visually-hidden")) {
  } else {
    slide3.classList.add("visually-hidden");
  }

  slide1.classList.remove("visually-hidden");

  if (button2.classList.contains("switch-button-current")) {
    button2.classList.remove("switch-button-current");
  } else if (button3.classList.contains("switch-button-current")) {
    button3.classList.remove("switch-button-current");
  }

  button1.classList.add("switch-button-current");

  if (body.classList.contains("background-blue")) {
    body.classList.remove("background-blue");
  } else if (body.classList.contains("background-brown")) {
    body.classList.remove("background-brown");
  }
});

button2.addEventListener("click", function(evt) {
  if (slide1.classList.contains("visually-hidden")) {
  } else {
    slide1.classList.add("visually-hidden");
  }
  if (slide3.classList.contains("visually-hidden")) {
  } else {
    slide3.classList.add("visually-hidden");
  }

  slide2.classList.remove("visually-hidden");

  if (button1.classList.contains("switch-button-current")) {
    button1.classList.remove("switch-button-current");
  } else if (button3.classList.contains("switch-button-current")) {
    button3.classList.remove("switch-button-current");
  }

  button2.classList.add("switch-button-current");

  if (body.classList.contains("background-brown")) {
    body.classList.remove("background-brown");
  }

  body.classList.add("background-blue");
});

button3.addEventListener("click", function(evt) {
  if (slide1.classList.contains("visually-hidden")) {
  } else {
    slide1.classList.add("visually-hidden");
  }
  if (slide2.classList.contains("visually-hidden")) {
  } else {
    slide2.classList.add("visually-hidden");
  }

  slide3.classList.remove("visually-hidden");

  if (button1.classList.contains("switch-button-current")) {
    button1.classList.remove("switch-button-current");
  } else if (button2.classList.contains("switch-button-current")) {
    button2.classList.remove("switch-button-current");
  }

  button3.classList.add("switch-button-current");

  if (body.classList.contains("background-blue")) {
    body.classList.remove("background-blue");
  }

  body.classList.add("background-brown");
});
