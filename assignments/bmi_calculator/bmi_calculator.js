// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    res = (mass)/(height*height);
    return res;
}

module.exports = BMICalculator;
