function showNormalBio() {
	var elFront = document.getElementById("about-front");
	var elBack = document.getElementById("about-back");
	var elButton = document.getElementById("view-normal-bio");
	if (elFront.style.display !== "none") {
		elFront.style.display = "none";
		elBack.style.display = "block";
		elButton.innerHTML = "View in JSON";
	} else {
		elFront.style.display = "block";
		elBack.style.display = "none";
		elButton.innerHTML = "View in English";
	}
}

function openModal(e) {
	var modalId = e.target.id + "-modal";
	document.getElementById(modalId).style.display = "flex";
	document.getElementById("body").style.overflow = "hidden";
}

function closeModal(e) {
	document.getElementById(e.target.id).style.display = "none";
	document.getElementById("body").style.overflow = "auto";
}

document.body.addEventListener("click", function (e) {
	if (e.target.className === "project-info") {
		openModal(e);
	}
});

document.body.addEventListener("touchend", function (e) {
	if (e.target.className === "project-info") {
		openModal(e);
	}
});

document.body.addEventListener("click", function (e) {
	if (e.target.className === "modal") {
		closeModal(e);
	}
});

document.body.addEventListener("touchend", function (e) {
	if (e.target.className === "modal") {
		closeModal(e);
	}
});

document.getElementById("view-normal-bio").addEventListener("click", showNormalBio);


/* This is a good function for debugging to know what was clicked!
document.body.addEventListener("click", function(e) {
		alert("you clicked id: " + e.target.id + " and class: " + e.target.className);
});
*/