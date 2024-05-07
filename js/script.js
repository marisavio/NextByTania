document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("home-button").addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });

  document.getElementById("home-button2").addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });

  var facialModal = document.getElementById("facial-modal");
  var bodyModal = document.getElementById("body-modal");
  var hairModal = document.getElementById("hair-modal");

  var btnFacial = document.getElementById("btn-facial-modal");
  var btnBody = document.getElementById("btn-body-modal");
  var btnHair = document.getElementById("btn-hair-modal");

  var spanFacial = document.getElementsByClassName("closeFacial")[0];
  var spanBody = document.getElementsByClassName("closeBody")[0];
  var spanHair = document.getElementsByClassName("closeHair")[0];

  btnFacial.onclick = function() {
      facialModal.style.display = "block";
  }

  btnBody.onclick = function() {
      bodyModal.style.display = "block";
  }

  btnHair.onclick = function() {
      hairModal.style.display = "block";
  }

  spanFacial.onclick = function() {
      facialModal.style.display = "none";
  }

  spanBody.onclick = function() {
      bodyModal.style.display = "none";
  }

  spanHair.onclick = function() {
      hairModal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == facialModal) {
          facialModal.style.display = "none";
      }
      if (event.target == bodyModal) {
          bodyModal.style.display = "none";
      }
      if (event.target == hairModal) {
          hairModal.style.display = "none";
      }
  }
}); 