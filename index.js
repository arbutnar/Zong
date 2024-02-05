document.querySelector("#profilePicture").addEventListener("click", function() {
	let	sidebar = document.querySelector(".sidebar");

	if (sidebar.style.visibility === "visible")
		sidebar.style.visibility = "hidden";
	else
		sidebar.style.visibility = "visible";
});
