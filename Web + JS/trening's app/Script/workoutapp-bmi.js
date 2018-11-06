let form = document.querySelector("form");
let onSubmit = function (event) {

    event.preventDefault();
    let categoryMessage;

    let calcresult = form.querySelector(".calcresult");
    let category = form.querySelector(".category");

    let category_1 = 18.5
    let category_2 = 25


    let weight = Number(form.querySelector("input[name=weight]").value);
    let height = Number(form.querySelector("input[name=height]").value);
    let bmi = (weight / (height / 100 * height / 100)).toFixed(1);

    if (bmi < 18.5) {
        categoryMessage = "Underweight";
    } else if (bmi > category_1 && bmi < category_2) {
        categoryMessage = "Healthy";
    } else if (bmi > category_2) {
        categoryMessage = "Overweight";
    }
    calcresult.innerHTML = bmi;
    category.innerHTML = categoryMessage;
};
form.addEventListener("submit", onSubmit, false);
