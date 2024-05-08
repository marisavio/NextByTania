document.addEventListener("DOMContentLoaded", function() {
  const daysOfWeekPt = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  const schedule = {
      '18/05/2024': [
          { name: "Luciana Saad", time: "11:00 Hrs", treatment: "Botox", room: "Sala 4" },
          { name: "Julia Lacerda", time: "13:00 Hrs", treatment: "Preenchimento facial", room: "Sala 3" }
      ],
      '19/05/2024': [
          { name: "Marco Antônio", time: "09:00 Hrs", treatment: "Consulta de rotina", room: "Sala 1" },
          { name: "Aline Costa", time: "10:30 Hrs", treatment: "Limpeza de pele", room: "Sala 2" },
          { name: "Julia Lacerda", time: "13:00 Hrs", treatment: "Preenchimento facial", room: "Sala 3" }
      ],
      '20/05/2024': [
        { name: "Marco Antônio", time: "09:00 Hrs", treatment: "Consulta de rotina", room: "Sala 1" },
      ],
  };

  function updatePatientSchedule(date) {
      const patientsArea = document.getElementById('patientsArea');
      patientsArea.innerHTML = '';

      const patients = schedule[date] || [];

      patients.forEach(patient => {
          const container = document.createElement('div');
          container.className = 'container';
          container.innerHTML = `
              <div class="infos"><p class="fontinfos">${patient.name}</p></div>
              <div class="infos"><p class="fontinfos">${patient.time}</p></div>
              <div class="infos"><p class="fontinfos">${patient.treatment}</p></div>
              <div class="infos"><p class="fontinfos">${patient.room}</p></div>
          `;
          patientsArea.appendChild(container);
      });
  }

  function setupDateChanger() {
      const prevDay = document.getElementById('prevDay');
      const nextDay = document.getElementById('nextDay');
      const dateDisplay = document.getElementById('dateDisplay');
      const dayOfWeek = document.getElementById('dayOfWeek');

      let currentDate = new Date(dateDisplay.textContent.split('/').reverse().join('-'));

      prevDay.addEventListener('click', () => {
          currentDate.setDate(currentDate.getDate() - 1);
          updateDisplay();
      });

      nextDay.addEventListener('click', () => {
          currentDate.setDate(currentDate.getDate() + 1);
          updateDisplay();
      });

      function updateDisplay() {
          const day = ("0" + currentDate.getDate()).slice(-2);
          const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
          const year = currentDate.getFullYear();
          const formattedDate = `${day}/${month}/${year}`;
          dateDisplay.textContent = formattedDate;
          updatePatientSchedule(formattedDate);

          dayOfWeek.textContent = daysOfWeekPt[currentDate.getDay()];
      }
  }

  setupDateChanger();
  updatePatientSchedule("18/05/2024");

  var finalizedModal = document.getElementById("finalized-modal");
  var btnFinalize = document.getElementById("btn-finalize");
  
  btnFinalize.onclick = function() {
      finalizedModal.style.display = "block";
  }
});
