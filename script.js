document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("home");
    var sticky = header.offsetTop;
  
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  
    window.onscroll = function() {
      myFunction();
    };

    document.getElementById("home-button").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  });
  