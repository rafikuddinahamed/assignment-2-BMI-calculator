window.onload = () => {
    let button = document.getElementById('btn')
   


    // Function for BMI Calculating
    button.addEventListener("click", calculateBMI);
}

function calculateBMI(){
    //input height value 
    let height = parseInt(document.querySelector("#height").value)
    //input weight value 
    let weight = parseInt(document.querySelector("#weight").value)
    let result = document.querySelector("#result")
    
    //validation
    if(height === "" || isNaN(height)){
        result.innerHTML = "Provide a valid Height!";
    }else if(weight === ""|| isNaN(weight)){
        result.innerHTML = "Provide a Valid Weight!"
    }
    //if both input is valide == now bmi calculate
    else{
        height = height / 100;
        let BMI = (weight / Math.pow(height, 2)).toFixed(2);
    
        if (BMI < 18.6) {
            result.innerHTML =
            `Under Weight : ${BMI}`;
        }
  
        else if (BMI >= 18.6 && BMI < 24.9) {
            result.innerHTML = 
                `Normal :${BMI}`;
        }
            
  
        else {
            result.innerHTML =
            `Over Weight : ${BMI}`;
    
    }
 }
}
