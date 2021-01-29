const Auswahl_Template = loadData("./html_templates/Fach.html");
const fach = (new URLSearchParams( window.location.search)).get("fach");
const Text = loadData("./data/fächer/" + fach + "/text.txt");
var Output =  "";
Output = Auswahl_Template.replace(/\[NAME\]/g, fach);
Output = Output.replace(/\[TEXT\]/g, Text);
document.write(Output);

