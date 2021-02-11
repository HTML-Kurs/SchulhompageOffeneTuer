const Imgs = loadJson("./data/load_Bilder.php?fach=" + "../Fotos_Schule_allgemein");
const BildElement = document.getElementById("Bilderübersicht");
var index = 0;
function UpdateData() 
{
    BildElement.setAttribute("src", "./data/Fotos_Schule_allgemein/Bilder/" + Imgs[index]);
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

