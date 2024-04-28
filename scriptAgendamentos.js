document.addEventListener("DOMContentLoaded", function() {
    var finalizedModal = document.getElementById("finalized-modal");
    var btnFinalize = document.getElementById("btn-finalize");
    
    btnFinalize.onclick = function() {
      finalizedModal.style.display = "block";
    }
  });
  