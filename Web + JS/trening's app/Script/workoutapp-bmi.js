let form = document.querySelector("form");
let onSubmit = function (event) {

    event.preventDefault();
    let categoryMessage;

    let calcresult = form.querySelector(".calcresult");
    let category = form.querySelector(".category");
    let info = form.querySelector(".info");


    let category_1 = 18.5
    let category_2 = 25


    let weight = Number(form.querySelector("input[name=weight]").value);
    let height = Number(form.querySelector("input[name=height]").value);
    let bmi = (weight / (height / 100 * height / 100)).toFixed(1);

    if (bmi < 18.5) {
        categoryMessage = "Underweight"
        info.innerHTML = "Time to bulk up! A lean BMI can indicate that your weight maybe too low. You should consult your physician to determine if you should gain weight, as low body mass can decrease your body's immune system, which could lead to ilness such as disappearance of periods (women), bone loss, malnutrition and other conditions. The lower your BMI the greater these risks become.";
    } else if (bmi > category_1 && bmi < category_2) {
        categoryMessage = "Healthy"
        info.innerHTML = "People whose BMI is within 18.5 to 24.9 possess the ideal amount of body weight, associated with living longest, the lowest incidence of serious ilness, as well as being perceived as more physically attractive than people with BMI in higher or lower ranges. However, it may be a good idea to check your Waist Circumference and keep it within the recommended limits";
    } else if (bmi > category_2) {
        categoryMessage = "Overweight"
        info.innerHTML = "People falling in this BMI range are considered overweight and would benefit from finding healthy ways to lower their weight, such as diet and exercise. Individuals who fall in this range are at increased risk for a variety of ilnesses. If your BMI is 27-29.99 your risk of health problems becomes higher. In a recent study an increased rate of blood pressure, diabetes and heart disease was recorded at 27.3 for women and 27.8 for men. It may be a good idea to check your Waist Circumference and compare it with the recommended limits.";
    }
    calcresult.innerHTML = bmi;
    category.innerHTML = categoryMessage;


};
form.addEventListener("submit", onSubmit, false);


// STYLING

document.querySelector
