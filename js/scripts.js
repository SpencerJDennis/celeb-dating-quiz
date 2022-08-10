// User Interface Logic

function hideResults() {
  document.getElementById("kp").setAttribute("class", "hidden");
  document.getElementById("mj").setAttribute("class", "hidden");
  document.getElementById("ld").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    if (!age || !height) {
      document.getElementById("error-message").removeAttribute("class");
    // in all other cases, we run our code to see what ride a user can go on
    } else {
      if (age >= 40) {
        document.getElementById("ld").removeAttribute("class");
      } else if (age >= 18 && height >= 72) {
        document.getElementById("mj").removeAttribute("class");
      } else if (age >= 18) {
        document.getElementById("kp").removeAttribute("class");
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
    }
  }
};