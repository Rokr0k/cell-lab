function openPage(event, pageName) {
	for(const tabcontent of document.getElementsByClassName("tabcontent")) {
		tabcontent.style.display = "none";
	}
	for(const tablink of document.getElementsByClassName("tablinks")) {
		tablink.className = tablink.className.replace(" active", "");
	}
	document.getElementById(pageName).style.display = "block";
	event.currentTarget.className += " active";
}