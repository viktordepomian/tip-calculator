let inputVal = parseFloat(document.getElementById('bill').value);
let peopleVal = parseFloat(document.getElementById('people').value);
let btn = document.getElementById('calc-the-price');
let ratingInput = document.getElementById("rating");
let selRating = ratingInput.value;
let sum;


ratingInput.addEventListener('change', function() {
  selRating = this.value;
});


btn.addEventListener('click', function(){
  let outputPrice = document.querySelector('.output-price');
  if(selRating === '1'){
    sum = inputVal / peopleVal + 2;
    outputPrice.textContent = sum;
  } else if(selRating === '2'){
    sum = inputVal / peopleVal + 5;
    outputPrice.textContent = sum;
  } else if(selRating === '3')
  sum = inputVal / peopleVal + 10;
  outputPrice.textContent = sum;
});


//Tipping fees(money, not percentage)
//Bad = $2
//Ok = $5
//Good = $10