document.addEventListener('DOMContentLoaded', function () {
    var switchInput = document.getElementById('toggle');
    var form = document.getElementById('loginForm');
  
    console.log(switchInput);
    console.log(form);
  
    switchInput.addEventListener('change', function() {
      console.log('Switch changed:', this.checked); 
      if (this.checked) {
        form.action = 'agendamentosmedico.html';
        console.log('Form action set to:', form.action); 
      } else {
        form.action = 'agendamentos.html';
        console.log('Form action set to:', form.action);
      }
    });
  });


  