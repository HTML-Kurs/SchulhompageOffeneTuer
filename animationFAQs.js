var numberFAQ = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// this function add an text to a FAQ-question, if it was clicked by user
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
function findFAQ(){
  let msg = document.querySelector("#content").value;
  window.alert(x);
}
