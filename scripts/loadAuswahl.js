const Auswahl_Template = loadData("./html_templates/FachAuswahl.html");
const Fächer = loadJson("./data/fächer.json");

var Output =  "";

Fächer.forEach(fach => {
    var add = Auswahl_Template.replace(/\[NAME\]/g, fach.name);
    //add.replace(/\[NAME\]/g, fach.name);
    Output += add;        
});


document.write(Output);

