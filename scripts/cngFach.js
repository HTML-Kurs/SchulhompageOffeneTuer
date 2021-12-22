const Faecher = loadJson("./data/loadAll.php");
let getFach = (new URLSearchParams( window.location.search)).get("fach");
console.log(Faecher)
console.log(getFach)

let positionFach = parseInt(getFach.replace(/[a-z]/g, '').replace(/[A-Z]/g, '').replace(' ', ''));
console.log(positionFach);
console.log(Faecher[positionFach - 1]);



let arrowLeft = document.querySelector("#leftCngFach");
let arrowRight = document.querySelector("#rightCngFach");

arrowLeft.addEventListener('click', function(e){
    if(positionFach == 1){
        window.location.href = `fachansicht.html?fach=${Faecher[27]}`;
        console.log("worked")
    }else{
        window.location.href = `fachansicht.html?fach=${Faecher[positionFach-2]}`;
        console.log("else")
    }
    
});
console.log("exe")
arrowRight.addEventListener('click', function(e){
    if(positionFach == 28){
        window.location.href = `fachansicht.html?fach=${Faecher[0]}`;
    }else{
        window.location.href = `fachansicht.html?fach=${Faecher[positionFach]}`;
    }
   
});