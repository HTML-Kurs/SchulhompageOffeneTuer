const Auswahl_Template = loadData("./html_templates/FachAuswahl.html");
const Fächer = loadJson("./data/loadAll.php");
var Output =  "";
Fächer.forEach(fach => {
    var add = Auswahl_Template.replace(/\[NAME\]/g, fach);
    Output += add;        
});
document.write(Output);

