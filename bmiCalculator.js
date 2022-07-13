function bmiCalculator (weight, height){
var num = Math.pow(height, 2);
var calcBmi = (weight / num );

return Math.round(calcBmi)
}

//If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 
