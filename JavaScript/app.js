// select from DOM
let appDescription = document.querySelector(".application-description")
let cmRangeInput = document.querySelector("#cm-range-input")
let kgRangeInput = document.querySelector("#kg-range-input")
let cmRangeTitle = document.querySelector(".cm-range-title")
let kgRangeTitle = document.querySelector(".kg-range-title")
let bmiResultTitle = document.querySelector(".bmi-calculated-results > .title")
let bmiResultMessage = document.querySelector(".bmi-result-message > .message")
let bmiResultIcon = document.querySelector(".bmi-result-message > .message-icon")


// when onLoad initial the page
window.addEventListener("load", () => {
  // initial value of range input
  cmRangeInput.value = 182
  kgRangeInput.value = 72
  // insert value of range input at DOM
  cmRangeTitle.innerHTML = cmRangeInput.value + " cm"
  kgRangeTitle.innerHTML = kgRangeInput.value + " kg"
  // calculate the BMI of initial range value
  BMI_Calculator(cmRangeInput.value, kgRangeInput.value)
})

// add onchange event to cm range input : when drag thumb change cm title
cmRangeInput.addEventListener("input", (event) => {
  cmRangeTitle.innerHTML = event.target.value + " cm"
  // call bmi main function to calculate the bmi result and put on results
  BMI_Calculator(cmRangeInput.value, kgRangeInput.value)

})
// add onchange event to kg range input : when drag thumb change kg title
kgRangeInput.addEventListener("input", (event) => {
  kgRangeTitle.innerHTML = event.target.value + " kg"
  // call bmi main function to calculate the bmi result and put on results
  BMI_Calculator(cmRangeInput.value, kgRangeInput.value)
})

// calculate the BMI and insert at the DOM
function BMI_Calculator(cm, kg) {
  // convert cm to meter , 100cm == 1meter
  let meter = cm / 100
  // bmi formula : kg divide on (cm  * cm)
  let bmi = kg / (meter * meter)
  // insert result an DOM |
  // the toFixed() method is used.The toFixed() method rounds up
  // the floating point number up to 1 places after the decimal.
  bmiResultTitle.innerHTML = bmi.toFixed(1)
  // floating point of bmi 1 places after decimal
  bmi = bmi.toFixed(1)

  // check bmi status with bmi defining category
  if (bmi < 18.5) {
    // underweight
    bmiResultMessage.innerHTML = "Underweight"
    bmiResultIcon.src = "./Assets/icons/UnderWeight.svg"
    bmiResultMessage.style.color = "#cfb28d"
    
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    // Normal weight
    bmiResultMessage.innerHTML = "Normal"
    bmiResultIcon.src = "./Assets/icons/Normal Weight.svg"
    bmiResultMessage.style.color = "#64948c"
    
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    // Overweight
    bmiResultMessage.innerHTML = "Overweight"
    bmiResultIcon.src = "./Assets/icons/OverWeight.svg"
    bmiResultMessage.style.color = "#b43e56"
  }
  else if (bmi >= 30) {
    // obesity
    bmiResultMessage.innerHTML = "Obesity"
    bmiResultIcon.src = "./Assets/icons/Obesity.svg"
    bmiResultMessage.style.color = "#62212f"

  }

}

// --------------------------------------------- //
// BMI formula : kg / m * m
// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater
// --------------------------------------------- //





