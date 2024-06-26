document.addEventListener('DOMContentLoaded', function() {
    var radios = document.querySelectorAll('input[type=radio][name^=habit-status-]');
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            var habitId = this.name.split('-')[2];
            var status = this.value;
            
            // Sending the updated status to the server
            window.location.href = `https://habit-tracker-spnr.onrender.com/toggleStatus?id=${habitId}&status=${status}`;
        });
    });
});
