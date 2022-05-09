const Auswahl_Template = loadData("./html_templates/FachAuswahl.html");
const Fächer = loadJson("./data/loadAll.php");
var Output =  "";
Fächer.forEach(fach => {
    var add = Auswahl_Template.replace(/\[NAME\]/g, fach.replace(/[0-9]/g, '').trim());
    add = add.replace(/\[RLNAME\]/g, fach);
    Output += add;        
});
console.log(Output)
document.write(Output);
console.log(Fächer.replace(/[a-z]/g, '').replace(/[A-Z]/g, '').replace(' ', ''))
console.log(Auswahl_Template)