const Auswahl__Template = loadData("./html_templates/Fach.html");
const fach = (new URLSearchParams( window.location.search)).get("fach");
const Text_ = loadData("./data/faecher/" + fach + "/text.txt");
var Output =  "";
Output = Auswahl__Template.replace(/\[NAME\]/g, fach.replace(/[0-9]/g, '').trim());
Output = Output.replace(/\[VID\]/g, fach);
Output = Output.replace(/\[TEXT\]/g, Text_);
document.write(Output);
