const Imgs = loadJson("./data/load_Bilder.php?fach=" + fach);
const BildElement = document.getElementById("Bilderübersicht");
var index = 0;
function UpdateData() 
{
     BildElement.setAttribute("src", "./data/faecher/" + fach + "/Bilder/" + Imgs[index]);
     BildElement.parentElement.setAttribute("href", "./data/faecher/" + fach + "/Bilder/" + Imgs[index]);
}
UpdateData();
function UpdateAdd()
{
    index++;
    if (index == Imgs.length)
    {
        index = 0;
    }
    UpdateData();
}

function UpdateSub()
{
    index--;
    if (index == -1)
    {
        index = Imgs.length - 1;
    }
    UpdateData();
}

