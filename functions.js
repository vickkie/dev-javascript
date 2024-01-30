function thanks() {
  swal({
    title: "Welcome",
    text: "Thankyou for Subscribing!",
    icon: "success",
    timer: 2000, // Duration in milliseconds (1 second)
    buttons: false // Hide the buttons
  });
}

function invalid() {
  swal({
    title: "Oops.😥",
    text: "Invalid Email Address!",
    icon: "error",
    timer: 2000, // Duration in milliseconds (1 second)
    buttons: false // Hide the buttons
  });
}

function empty() {
  swal({
    title: "Sorry..⏳",
    text: "Please enter email!",
    icon: "warning",
    timer: 2000, // Duration in milliseconds (1 second)
    buttons: false // Hide the buttons
  });
}

function empty() {
  swal({
    title: "Member",
    text: "You are already Subscribed🍹",
    icon: "warning",
    timer: 2000, // Duration in milliseconds (1 second)
    buttons: false // Hide the buttons
  });
}
