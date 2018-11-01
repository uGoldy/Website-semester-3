bmi
height_e
weight_e
bmi_e
bmi;

height_e = document.getElementById('height_e');
weight_e = document.getElementById('weight_e');
bmi_e = document.getElementById('bmi');

bmi = (weight_e * 0.45) / (((12 * height_e * 0.025) ^ 2;

            if (bmi <= 19) {
                bmi = "Underweight";
            } else if (bmi > 19 && bmi <= 25) {
                bmi = "Desireable";
            } else if (bmi > 25 && bmi <= 29) {
                bmi = "Slightly overweight";
            } else if (bmi > 29 && bmi <= 40) {
                bmi = "obese";
            } else(bmi > 40) {
                bmi = "Extemely obese";
            }

            bmi_e.value = bmi;

            return false;
