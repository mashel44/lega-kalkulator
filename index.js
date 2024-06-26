const heros = document.getElementById("heros");
const tytan = document.getElementById("tytan");
const slider = document.getElementById("myRange");
const result = document.getElementById("result");
const sliderValue = document.getElementById("sliderValue");

sliderValue.textContent = slider.value;

slider.oninput = function(){
    sliderValue.textContent = this.value;
}

let chance;
let people_number;
let res;

document.querySelector('label[for="Heros"]').onclick = function() {
    heros.checked = true;
};
document.querySelector('label[for="Tytan"]').onclick = function() {
    tytan.checked = true;
};

function execute(){

    if(heros.checked){
        chance = 0.61;
    }
    else if(tytan.checked){
        chance = 0.9;
    }

    people_number = slider.value

    if (!heros.checked && !tytan.checked) {
        alert("Zaznacz typ potwora");
    } else {
        res = calculate(chance, people_number);
        result.textContent = "Szanse na lege: " + res + " %";
    }
}

function calculate(chance, people_number){

    res = chance*(people_number*0.5 + 0.5)
    return res
}