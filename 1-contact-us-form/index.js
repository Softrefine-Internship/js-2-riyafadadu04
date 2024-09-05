document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", validateform);
});
function validateform() {
  
  document.onkeyup = function (e) {
    validateform();
  };
  var fname = document.querySelector(".fname");
  var lname = document.querySelector(".lname");
  var company = document.querySelector(".company-input");
  var email = document.querySelector(".email-input");
  var phone = document.querySelector(".phone-input");
  var phoneNum = document.querySelector(".num");
  var address = document.querySelector(".message-input");
  var terms = document.querySelector(".check1");

  var eFname = document.querySelector(".fname-error");
  var eLname = document.querySelector(".lname-error");
  var eCompany = document.querySelector(".company-error");
  var eEmail = document.querySelector(".email-error");
  var ePhone = document.querySelector(".phone-error");
  var eAddress = document.querySelector(".message-error");

  let isValid = true;

  if (fname.value == "") {
    fname.classList.add("error-border");
    eFname.classList.remove("hide");
    isValid = false;
  } else {
    fname.classList.add("correct-border");
    eFname.classList.add("hide");
  }

  if (lname.value == "") {
    lname.classList.add("error-border");
    eLname.classList.remove("hide");
    isValid = false;
  } else {
    lname.classList.add("correct-border");
    eLname.classList.add("hide");
  }

  if (company.value == "") {
    company.classList.add("error-border");
    eCompany.classList.remove("hide");
    isValid = false;
  } else {
    company.classList.add("correct-border");
    eCompany.classList.add("hide");
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    email.classList.add("error-border");
    eEmail.classList.remove("hide");
    isValid = false;
  } else {
    email.classList.add("correct-border");
    eEmail.classList.add("hide");
  }

  phoneNum.maxLength = "10";
  const phoneNumberArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Backspace",
  ];
  phoneNum.addEventListener("keydown", (e) => {
    if (!phoneNumberArray.includes(e["key"])) {
      e.preventDefault();
    }
  });

  phoneNum.addEventListener("keyup", (e) => {
    if (!phoneNumberArray.includes(e["key"])) {
      e.preventDefault();
    }
  });

  if (!/^\d{10}$/.test(phoneNum.value)) {
    phone.classList.add("error-border");
    ePhone.classList.remove("hide");
    isValid = false;
  } else {
    phone.classList.add("correct-border");
    ePhone.classList.add("hide");
  }

  if (address.value == "") {
    address.classList.add("error-border");
    eAddress.classList.remove("hide");
    isValid = false;
  } else {
    address.classList.add("correct-border");
    eAddress.classList.add("hide");
  }

  if (!terms.checked) {
    terms.classList.add("check2");
    isValid = false;
  } else {
    terms.classList.remove("check2");
  }

  isValid = true;
}
