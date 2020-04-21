var lebronNames = ["Lebron's Veins", "Lebron in Flames"];
var lebronLinks = ["https://i.ibb.co/wKjmzWY/lebron-s-veins.png", "https://i.ibb.co/2KyCKHm/lebron-in-flames.png"];

var rows = Math.floor(lebronNames.length / 2);
var nextLebron = 0;

function addRow() {
	var table = document.getElementById("table");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "<img src=" + lebronLinks[nextLebron] + " class=\"leftImage\" alt=\"" + lebronNames[nextLebron] + "\">";
	nextLebron++;
	cell2.innerHTML = "<img src=" + lebronLinks[nextLebron] + " class=\"rightImage\" alt=\"" + lebronNames[nextLebron] + "\">";
	nextLebron++;
}
