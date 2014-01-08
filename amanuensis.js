$(document).ready(function () {

	// in

	$("#show-left-slots").click(function() {
		console.log("showing left slots");
		$("#left-container").addClass("show-slots");
	});

	$("#hide-left-slots").click(function() {
		console.log("hiding left slots");
		$("#left-container").removeClass("show-slots");
	});

	$("#show-left-stories").click(function() {
		console.log("showing left stories");
		$("#left-container").addClass("show-stories");
		$("#story-container").addClass("shifted-right");
	});

	$("#hide-left-stories").click(function() {
		console.log("hiding left stories");
		$("#left-container").removeClass("show-stories");
		$("#story-container").removeClass("shifted-right");
	});


	// out

	$("#show-right-slots").click(function() {
		console.log("showing right slots");
		$("#right-container").addClass("show-slots");
	});

	$("#hide-right-slots").click(function() {
		console.log("hiding right slots");
		$("#right-container").removeClass("show-slots");
	});

	$("#show-right-stories").click(function() {
		console.log("showing right stories");
		$("#right-container").addClass("show-stories");
		$("#story-container").addClass("shifted-left");
	});

	$("#hide-right-stories").click(function() {
		console.log("hiding right stories");
		$("#right-container").removeClass("show-stories");
		$("#story-container").removeClass("shifted-left");
	});	


});

