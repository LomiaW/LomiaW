/* ----------- variables for Contact Information ----------- */
var name_error = document.getElementById('name_error');         // 1- name error 
var email_error = document.getElementById('email_error');       // 2- email error
var address_error = document.getElementById('address_error');   // 3- address error
var city_error = document.getElementById('city_error');         // 4- city error
var province_error = document.getElementById('province_error'); // 5- province error
var postalCode_error = document.getElementById('pCode_error');  // 6- postal code error
var type_error = document.getElementById('type_error');         // 7- type error
var message_error = document.getElementById('msg_error');       // 8- message error
var submit_error = document.getElementById('submit_error');     // 9- submit error

var slider_input = document.getElementById("hourly_rate");
var slider_output = document.getElementById("slider_output");

/* ----------- validate the radio of hiring ----------- */
slider_output.innerHTML = slider_input.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider_input.oninput = function() {
  slider_output.innerHTML = this.value;
}
function checkHiring() {
  var msgType = document.querySelector('input[name="MessageType"]:checked').value;
  if (msgType == 'hiring') {
    document.getElementById('slider').style.display = 'block';
  } else {
    document.getElementById('slider').style.display = 'none';
  }
}

/* ----------- validate the Name ----------- */
function validateName() {
  var name = document.getElementById('input_name').value;
  if (name.length == 0) {
    name_error.innerHTML = 'Please enter your name';
    return false;
  }
  if (!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {
    name_error.innerHTML = 'Please enter a full name';
    return false;
  }
  name_error.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}

/* ----------- validate the Email ----------- */
function validateEmail() {
  var email = document.getElementById('input_email').value;
  if (email.length == 0) {
    email_error.innerHTML = 'Please enter your email';
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    email_error.innerHTML = 'Please enter a valid email';
    return false;
  }
  email_error.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}

/* ----------- validate the Address ----------- */
function validateAddress() {
  var address = document.getElementById('input_address').value;
  if (address.length == 0) {
    address_error.innerHTML = 'Please enter your address';
    return false;
  }
  if (!address.match(/^[a-zA-Z0-9\s]*$/)) {
    address_error.innerHTML = 'Please enter a valid address';
    return false;
  }
  address_error.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}


/* ----------- validate the City ----------- */
function validateCity() {
  var city = document.getElementById('input_city').value;
  if (city.length == 0) {
    city_error.innerHTML = 'Please enter your city';
    return false;
  }
  if (!city.match(/^[a-zA-Z]*$/)) {
    city_error.innerHTML = 'Please enter a valid city';
    return false;
  }
  city_error.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}
/* ----------- validate the Postal Code ----------- */
function validatePostalCode() {
  var postalCode = document.getElementById('input_pCode').value;
  if (postalCode.length == 0) {
    postalCode_error.innerHTML = 'Please enter your postal code';
    return false;
  } 
  if (!postalCode.match(/^[^DFIOQWUZ\d]\d[^DFIOQU\d][ ]\d[^DFIOQU\d]\d$/)) {
    postalCode_error.innerHTML = 'Please enter a valid postal code';
    return false;
  }
  postalCode_error.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}


/* ----------- validate the Message ----------- */
function validateMessage() {
  var message = document.getElementById('input_msg').value;
  var requiredLength = 10;
  var left = requiredLength - message.length;
  if (left > 0) {
    message_error.innerHTML = requiredLength + ' more characters required';
    return false;
  }
  message_error.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}


/* ----------- validate the submission ----------- */
function validateForm() {
  if (validateName() && validateEmail() && validatePostalCode() && validateMessage()) {
    return true;
  } else {
    submit_error.style.display = 'block';
    submit_error.innerHTML = 'Please fix the errors above';
    setTimeout(function() {submit_error.style.display = 'none';}, 3000);
    return false;
  }
}
