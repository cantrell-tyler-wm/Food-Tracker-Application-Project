/**
 * Created by session2 on 10/20/15.
 */
var nameInput = document.getElementById("name");
var descInput = document.getElementById("desc");
var dateInput = document.getElementById("date");
var lifeInput = document.getElementById("life");
var expInput = document.getElementById("exp");

/*Get Table From DOM*/
var tableOutput = document.getElementById("table");

/*Main Update Function, Calls When Submit Button Is Clicked*/
function update() {
    var newItem = getInputItem();
    updateTable(newItem);
}

/*Get New Item From Input Form*/
function getInputItem() {
    var item = {
        name: nameInput.value,
        desc: descInput.value,
        date: dateInput.value,
        life: lifeInput.value,
        exp: expInput.value
    };
    return item;
}

/*Update Table With New Item*/
function updateTable(item) {
    /*If Item Is Empty, Dont Update Table*/
    if(item.name == "" || item.desc == "" || item.date == "" || item.life == "" || item.exp == "") return;

    /*Create New TR And TD For Table Output*/
    var tablerow = document.createElement("tr");
    var name = document.createElement("td");
    var desc = document.createElement("td");
    var date = document.createElement("td");
    var life = document.createElement("td");
    var exp = document.createElement("td");

    /*Update New TD Elements With Item Info*/
    name.innerHTML = item.name;
    desc.innerHTML = item.desc;
    date.innerHTML = item.date;
    life.innerHTML = item.life;
    exp.innerHTML = item.exp;

    /*If Shelf Life Is Less Than 3 Days, Set Background To Red*/
    if(parseFloat(item.life) < 1) tablerow.style.backgroundColor = "yellow";
    if(parseFloat(item.life) === 2) tablerow.style.backgroundColor = "red";
    if(parseFloat(item.life) === 3) tablerow.style.backgroundColor = "pink";
    if(parseFloat(item.life) === 4) tablerow.style.backgroundColor = "blue";
    if(parseFloat(item.life) === 5) tablerow.style.backgroundColor = "green";
    if(parseFloat(item.life) === 6) tablerow.style.backgroundColor = "lightGray";
    if(parseFloat(item.life) === 7) tablerow.style.backgroundColor = "gold";
    if(parseFloat(item.life) === 8) tablerow.style.backgroundColor = "indiansRed";
    if(parseFloat(item.life) > 8) tablerow.style.backgroundColor = "honeydew";
    /*Append New Elements To Table*/
    tablerow.appendChild(name);
    tablerow.appendChild(desc);
    tablerow.appendChild(date);
    tablerow.appendChild(life);
    tablerow.appendChild(exp);
    tableOutput.appendChild(tablerow);
}