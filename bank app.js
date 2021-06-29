function changeChooser() {
	var chooser = document.getElementById("animalChooser");
	var options = chooser.options;
	var counter = 0;
	
	while (counter < options.length) {
		if (options[counter].selected) {
			document.getElementById(options[counter].value).style.display = "";
		} else {
			document.getElementById(options[counter].value).style.display = "none";
		}
		counter++;
	}
}