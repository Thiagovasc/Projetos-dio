var cn_Wrapper = document.getElementById("current_number");
var current_number = 0;

function increment() {
    current_number = current_number + 1;
    cn_Wrapper.innerHTML = current_number;
}

function decrement() {
    current_number = current_number - 1;
    cn_Wrapper.innerHTML = current_number;
}

