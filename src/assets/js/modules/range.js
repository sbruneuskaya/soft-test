let range = document.getElementById("data-range");
let output = document.getElementById("range-content");
output.innerHTML = range.value + '%';

range.addEventListener('input', function() {
        output.innerHTML = this.value + '%';
    }
)
