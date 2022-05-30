var document = document.forms.new_task;


function addTab(){
	var ligne = document.createElement("tr");
	var col = document.createElement("td");
	var col2 = document.createElement("td");
	col.textContent = document.getElementById("user_com").value;
	col2.textContent =	document.getElementById("note_select").value;
	ligne.append(col);
	ligne.append(col2);
	var table = document.querySelector("table").getElementsByTagName("ta")[0];
	tab.appendChild(ligne);
}
