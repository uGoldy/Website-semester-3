let bmiHeight = document.getElementById("Height");
let bmiWeight = document.getElementById("Weight");
let calculateButton = document.getElementById("resultButton");
let result = document.getElementById("resultBMI");


// BMI calculator
calculateButton.addEventListener("click", function(){
    result.innerHTML = ((bmiWeight.value) / ((bmiHeight.value) * (bmiHeight.value))).toFixed(1);
//    bmiMeasure(result);
});

// Click to show or hide text
function hideUW() {
    var x = document.getElementById("UW-Info-Text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Click to show or hide text
function hideNW() {
    var x = document.getElementById("NW-Info-Text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Click to show or hide text
function hideOW() {
    var x = document.getElementById("OW-Info-Text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Click to show or hide text
function hideMO() {
    var x = document.getElementById("MO-Info-Text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Click to show or hide text
function hideSO() {
    var x = document.getElementById("SO-Info-Text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Click to show or hide text
function hideVSO() {
    var x = document.getElementById("VSO-Info-Text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



// Monday workout adder button
let btnAdderBoxMun = document.getElementById("BtnAdderMonday");


// Pushes in a input for user
btnAdderBoxMun.addEventListener ("click", function(){

    let createBoxMun = document.createElement("input");
    let userWorkoutList = document.getElementById("Workout-list");
    let createBreak = document.createElement("br");

    createBoxMun.classList.add("Workout-Box");
    createBoxMun.placeholder = "Monday workouts";
    
    userWorkoutList.appendChild(createBoxMun);
    userWorkoutList.appendChild(createBreak);
    
});


// Tuesday workout adder button
let btnAdderBoxTue = document.getElementById("BtnAdderTuesday");


// Pushes in a input for user
btnAdderBoxTue.addEventListener ("click", function(){

    let createBoxTue = document.createElement("input");
    userWorkoutList = document.getElementById("Workout-list");
    createBreak = document.createElement("br");

    createBoxTue.classList.add("Workout-Box");
    createBoxTue.placeholder = "Tuesday workouts";
    
    userWorkoutList.appendChild(createBoxTue);
    userWorkoutList.appendChild(createBreak);
    
});


// Wednesday workout adder button
let btnAdderBoxWed = document.getElementById("BtnAdderWednesday");


// Pushes in a input for user
btnAdderBoxWed.addEventListener ("click", function(){

    let createBoxWed = document.createElement("input");
    userWorkoutList = document.getElementById("Workout-list");
    createBreak = document.createElement("br");

    createBoxWed.classList.add("Workout-Box");
    createBoxWed.placeholder = "Wednesday workouts";
    
    userWorkoutList.appendChild(createBoxWed);
    userWorkoutList.appendChild(createBreak);
    
});


// Thursday workout adder button
let btnAdderBoxThu = document.getElementById("BtnAdderThursday");


// Pushes in a input for user
btnAdderBoxThu.addEventListener ("click", function(){

    let createBoxThu = document.createElement("input");
    userWorkoutList = document.getElementById("Workout-list");
    createBreak = document.createElement("br");

    createBoxThu.classList.add("Workout-Box");
    createBoxThu.placeholder = "Thursday workouts";
    
    userWorkoutList.appendChild(createBoxThu);
    userWorkoutList.appendChild(createBreak);
    
});


// Friday workout adder button
let btnAdderBoxFri = document.getElementById("BtnAdderFriday");


// Pushes in a input for user
btnAdderBoxFri.addEventListener ("click", function(){

    let createBoxFri = document.createElement("input");
    userWorkoutList = document.getElementById("Workout-list");
    createBreak = document.createElement("br");

    createBoxFri.classList.add("Workout-Box");
    createBoxFri.placeholder = "Friday workouts";
    
    userWorkoutList.appendChild(createBoxFri);
    userWorkoutList.appendChild(createBreak);
    
});


// Saturday workout adder button
let btnAdderBoxSat = document.getElementById("BtnAdderSaturday");


// Pushes in a input for user
btnAdderBoxSat.addEventListener ("click", function(){

    let createBoxSat = document.createElement("input");
    userWorkoutList = document.getElementById("Workout-list");
    createBreak = document.createElement("br");

    createBoxSat.classList.add("Workout-Box");
    createBoxSat.placeholder = "Saturday workouts";
    
    userWorkoutList.appendChild(createBoxSat);
    userWorkoutList.appendChild(createBreak);
    
});


// Sunday workout adder button
let btnAdderBoxSun = document.getElementById("BtnAdderSunday");


// Pushes in a input for user
btnAdderBoxSun.addEventListener ("click", function(){

    let createBoxSun = document.createElement("input");
    userWorkoutList = document.getElementById("Workout-list");
    createBreak = document.createElement("br");

    createBoxSun.classList.add("Workout-Box");
    createBoxSun.placeholder = "Sunday workouts";
    
    userWorkoutList.appendChild(createBoxSun);
    userWorkoutList.appendChild(createBreak);
    
});

