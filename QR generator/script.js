let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");


function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.onload = function () {
      imgBox.classList.add("show-img"); // only show after loading
    };
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(qrText.value);
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}


// In JavaScript, .onload is an event handler property used to execute code after a resource has fully loaded.
// Its main purpose is to ensure that certain scripts run only when the required content (image, page, script, etc.) is completely loaded.


// encodeURIComponent() changes special characters in a piece of text so it’s safe to put inside a URL.
// It turns things like spaces, &, =, ?, / into special codes (like %20 for space) so the browser doesn’t get confused.