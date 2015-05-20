function generate_table() {
var body = document.getElementsByTagName("body")[0];
var a = document.getElementById("row").value;
var b = document.getElementById("col").value;
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

for (var i = 0; i < a; i++) {
var row = document.createElement("tr");

for (var j = 0; j < b; j++) {
var cell = document.createElement("td");
var cellText = document.createTextNode("<3");
cell.appendChild(cellText);
row.appendChild(cell);
}

tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
body.appendChild(tbl);
tbl.setAttribute("border", "2");
}