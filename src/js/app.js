const totalCost = document.querySelector('#totalCost');
const servPerCont = document.querySelector('#servPerCont');
const proPerServ = document.querySelector('#proPerServ');
const costPerGram = document.querySelector('#costPerGram');


// totalCost.addEventListener('input', (e) => {
//   //cards.style.visibility = 'visible';
//   let costAmount = e.target.value;
//   // gramsOutput.innerText = lbs * 453.592;
//   // kgOutput.innerText = lbs * 0.453592;
//   // ozOutput.innerText = lbs * 16;

//   console.log(costAmount);
// });

totalCost.value = 36;
servPerCont.value = 100;
proPerServ.value = 19;

function calculateResult() {
  const dollarAmount = totalCost.value;
  const contServings = servPerCont.value;
  const proServ = proPerServ.value;

  const calculation = (dollarAmount / (contServings * proServ)).toFixed(2);

  costPerGram.innerText = calculation;
}
calculateResult();





// Calculation
// cost / (protein x serving)


// Additional 
// 0 = Enter a number!
// 1 = Good start!
// 2 = Almost there!
// 3 = ?