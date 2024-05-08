document.addEventListener("DOMContentLoaded", function() {
    var finalizedModal = document.getElementById("finalized-modal");
    var btnFinalize = document.getElementById("btn-finalize");
    
    btnFinalize.onclick = function() {
        var nome = document.querySelector('.pm-input[type="text"]').value;
        var medico = document.getElementById('medico').value;
        var tratamento = document.getElementById('Tratamento').value;
        var data = document.querySelector('.pm-input[type="date"]').value;
        var horario = document.querySelector('.pm-input[type="time"]').value;
    
        // Verificando se todos os campos estão preenchidos
        if (nome && medico && tratamento && data && horario) {
            // Se todos os campos estão preenchidos, exibir o modal de sucesso
            finalizedModal.style.display = "block";
        } else {
            // Se algum campo não está preenchido, exibir um alerta
            alert("Por favor, preencha todos os campos antes de finalizar o agendamento.");
        }
    }
});
