const Faecher = loadJson("./data/loadAll.php");
let getFach = (new URLSearchParams( window.location.search)).get("fach");
const _getFach = (new URLSearchParams( window.location.search)).get("fach");

let positionFach = parseInt(getFach.replace(/[a-z]/g, '').replace(/[A-Z]/g, '').replace(' ', ''));
let backgroundColor = document.querySelector(".OffsetDiv");
let backgroundColorSection = document.querySelector(".background-responsive-cng");
let innerBackgroundColor = document.querySelector(".grid-container");
let HeadlineBackgroundColor = document.querySelector(".headlineSchulrundgang");


let arrowLeft = document.querySelector("#leftCngFach");
let arrowRight = document.querySelector("#rightCngFach");

arrowLeft.addEventListener('click', function(e){
    if(positionFach == 1){
        window.location.href = `fachansicht.html?fach=${Faecher[27]}`;
    }else{
        window.location.href = `fachansicht.html?fach=${Faecher[positionFach-2]}`;
    }  
});

arrowRight.addEventListener('click', function(e){
    if(positionFach == 28){
        window.location.href = `fachansicht.html?fach=${Faecher[0]}`;
        console.log(Faecher[0])
    }else{
        window.location.href = `fachansicht.html?fach=${Faecher[positionFach]}`;
    }
});


function checkBackgroundColor(){
    var output = _getFach.replace(' ', '').replace(/[0-9]/g, '');
    
    console.log(output)
    if(output == "Mathematik"  || output == "Physik" || output == "WR" || output == "Chemie" || output == "NWuT" || output == "Informatik" || output == "Astronomie" || output == "Franzoesisch" || output == "Kunst" || output == "Musik" || output == "BO"){
        backgroundColor.classList.add('backgroundColor-blue');
        backgroundColor.classList.remove('backgroundColor-red');
        backgroundColor.classList.remove('backgroundColor-green');
        
        backgroundColorSection.classList.add('backgroundColor-blue');
        backgroundColorSection.classList.remove('backgroundColor-red');
        backgroundColorSection.classList.remove('backgroundColor-green');

        innerBackgroundColor.classList.add('innerbackgroundColor-blue')
        innerBackgroundColor.classList.remove('innerbackgroundColor-red');
        innerBackgroundColor.classList.remove('innerbackgroundColor-green')
        
        HeadlineBackgroundColor.classList.add('innerbackgroundColor-blue')
        HeadlineBackgroundColor.classList.remove('innerbackgroundColor-red');
        HeadlineBackgroundColor.classList.remove('innerbackgroundColor-green');

    }else if (output ==  "MNT" || output == "Geographie" || output == "Sport" || output == "Ethik" || output == "Sozialkunde" || output == "Sekretariat" || output == "Biologie" ){
        backgroundColor.classList.add('backgroundColor-green');
        backgroundColor.classList.remove('backgroundColor-blue');
        backgroundColor.classList.remove('backgroundColor-red');

        backgroundColorSection.classList.add('backgroundColor-green');
        backgroundColorSection.classList.remove('backgroundColor-blue');
        backgroundColorSection.classList.remove('backgroundColor-red');

        innerBackgroundColor.classList.add('innerbackgroundColor-green')
        innerBackgroundColor.classList.remove('innerbackgroundColor-red');
        innerBackgroundColor.classList.remove('innerbackgroundColor-blue');
        
        HeadlineBackgroundColor.classList.add('innerbackgroundColor-green')
        HeadlineBackgroundColor.classList.remove('innerbackgroundColor-red');
        HeadlineBackgroundColor.classList.remove('innerbackgroundColor-blue');

    } else {
        backgroundColor.classList.add('backgroundColor-red');
        backgroundColor.classList.remove('backgroundColor-blue');
        backgroundColor.classList.remove('backgroundColor-green');
        
        backgroundColorSection.classList.add('backgroundColor-red');
        backgroundColorSection.classList.remove('backgroundColor-blue');
        backgroundColorSection.classList.remove('backgroundColor-green');

        innerBackgroundColor.classList.add('innerbackgroundColor-red')
        innerBackgroundColor.classList.remove('innerbackgroundColor-blue');
        innerBackgroundColor.classList.remove('innerbackgroundColor-green');
        
        HeadlineBackgroundColor.classList.add('innerbackgroundColor-red')
        HeadlineBackgroundColor.classList.remove('innerbackgroundColor-blue');
        HeadlineBackgroundColor.classList.remove('innerbackgroundColor-green');

    }
}