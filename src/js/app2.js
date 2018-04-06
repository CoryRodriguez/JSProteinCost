const costOfItem = document.querySelector('#costOfItem');
const servPerCont = document.querySelector('#servPerCont');
const proPerServ = document.querySelector('#proPerServ');
const costPerGram = document.querySelector('#costPerGram');

document.getElementById('calcForm').addEventListener('submit', (e) => {
  calculateResult();

  e.preventDefault();
});


function calculateResult() {
  const dollarAmount = costOfItem.value;
  const contServings = servPerCont.value;
  const proServ = proPerServ.value;

  const calculation = (dollarAmount / (contServings * proServ)).toFixed(2);

  costPerGram.innerText = "$" + calculation;

  almostThere();
}

function almostThere(){
  if(costOfItem.value === ''){
    console.log('nope!');
  }
}

// costPerGram.addEventListener('submit', (e) => {
//   //cards.style.visibility = 'visible';
//   calculateResult();
//   //let costAmount = e.target.value;
  
//   // gramsOutput.innerText = lbs * 453.592;
//   // kgOutput.innerText = lbs * 0.453592;
//   // ozOutput.innerText = lbs * 16;

//   e.preventDefault();
// });

// // costOfItem.addEventListener('input', (e) => {
// //   //cards.style.visibility = 'visible';
// //   let costAmount = e.target.value;

// //   const dollarAmount = costOfItem.value;
// //   const contServings = servPerCont.value;
// //   const proServ = proPerServ.value;

// //   //console.log(costOfItem.value);
// //   console.log(servPerCont);
// // });

// servPerCont.addEventListener('input', (e) => {
//   //cards.style.visibility = 'visible';
//   let servPerCont = e.target.value;

//   e.preventDefault();

//   //console.log(servPerCont);
// });

// proPerServ.addEventListener('input', (e) => {
//   //cards.style.visibility = 'visible';
//   let proPerServ = e.target.value;

//   e.preventDefault();

//   //console.log(proPerServ);
// });



// costOfItem.value = 36;
// servPerCont.value = 100;
// proPerServ.value = 19;








// Calculation
// cost / (protein x serving)


// Additional 
// 0 = Enter a number!
// 1 = Good start!
// 2 = Almost there!
// 3 = ?

//  save food cost
// ex: peanuts: $.00?
//     cashews: $00?



