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
