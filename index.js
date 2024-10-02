let home_input = document.getElementById("hInput");
home_input.innerHTML = home_input.innerHTML || "0";

function home(hom_btn_val) {
    let currentValue = parseInt(home_input.innerHTML);
    let result = currentValue + hom_btn_val;
    home_input.innerHTML = result;
}

let guest_input = document.getElementById("gInput");
guest_input.innerHTML = guest_input.innerHTML || "0";

function guest(gue_btn_val) {
    let currentValue = parseInt(guest_input.innerHTML);
    let result = currentValue + gue_btn_val;
    guest_input.innerHTML = result;
}