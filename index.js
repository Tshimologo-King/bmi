//create function to calculate bmi
function bmi(w, h){
    return(w/(h*h));
}
button = document.getElementById('#clickBtn');
button.addEventListener('click', submit){
    outputBMI.innerText = bmiScore;
};

function submit() {
  //convert string to integer
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  w = parseInt(w);
  h = parseInt(h);
  bmiScore = bmi(w,h);
//   document.getElementById('outputBMI').innerHTML = bmiScore;
   console.log(bmiScore);
    
  
  //sending calculation to output in html
 document.getElementById("clickBtn") = `${bmiScore}`;

//  outputBMI.innerText = eval(bmiScore.innerText);


// }




// //declare weight and height variables
//     let height = document.getElementById("height").value/100;
//     let weight = document.getElementById("weight").value;
//     let bmiScore = weight /( height ** 2);

//eventListener for button action
    // clickBtn.addEventListener('click', (e) =>{
    //     outputBMI.innerText = bmiScore;
    // })


// //variables
// let h = documentById("height").value;
// let w = documentById("weight").value;
// let bmi = weight / height ** 2;

// //result
// function convertor(bmi) {
//   return bmi;
// }

// document.addEventListener("click", convertor(){
//     document.getElementById
// })
// // function clickButton(){
//     let convertor = document.getElementById("clickBtn");
//     convertor.addEventListener("click", getBMI);
//     document.getElementById("clickBtn").innerHTML = outputBMI;
    

}
