const heros = document.getElementById("heros");
const tytan = document.getElementById("tytan");
const slider = document.getElementById("myRange");
const result = document.getElementById("result");
const simulation_result = document.getElementById("simulationResult");
const sliderValue = document.getElementById("sliderValue");

sliderValue.textContent = slider.value;

slider.oninput = function(){
    sliderValue.textContent = this.value;
}

let chance;
let people_number;

document.querySelector('label[for="heros"]').onclick = function() {
    heros.checked = true;
};
document.querySelector('label[for="tytan"]').onclick = function() {
    tytan.checked = true;
};

function execute_chances(){

    let res;

    if(heros.checked){
        chance = 0.61;
    }
    else if(tytan.checked){
        chance = 0.9;
    }

    people_number = slider.value

    if (!heros.checked && !tytan.checked){
        alert("Zaznacz typ potwora");
    } else {
        res = calculate(chance, people_number);
        result.textContent = "Szanse na lege: " + res + " %";
    }

}

function calculate(chance, people_number){

    let res;

    res = chance*(people_number*0.5 + 0.5)
    return res
}

function execute_simulation(){
    
    let result;

    if(heros.checked){
        chance = 0.61;
    }
    else if(tytan.checked){
        chance = 0.9;
    }

    people_number = slider.value
    result = calculate(chance, people_number)

    simulation_output = isLegendary(result)
    
    if(simulation_output){
        playSound();
        simulation_result.textContent = "Lega"
        document.body.classList.add('simulation-success');
    } else {
        simulation_result.textContent = "Brak legi"
        document.body.classList.remove('simulation-success');
    }
}

function isLegendary(chance){

    let isLegendary;
    let probability = chance/100;
    let randomNumber = Math.random();

    return randomNumber <= probability;
}

function playSound(){
    let audioElement = document.getElementById("successSound");
    audioElement.play();
}