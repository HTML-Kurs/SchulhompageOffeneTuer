var numberFAQ = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// this function adds a text to a FAQ-question, if it was clicked
function change(arrayPosition, name, text){
  const x = document.getElementById(name);
  
  if(numberFAQ[arrayPosition] == 0){
    x.innerHTML = text;
    numberFAQ[arrayPosition]++;
  }
  else{
    x.innerHTML = "";
    numberFAQ[arrayPosition] = 0;
  }
}