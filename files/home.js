$(function() {

	$('#blog-toggle').click(function() {
		console.log("you clicked blog");
		$('.blog').show(600, function() {console.log("done showing blogs!")});
		$('.project').hide(200, function() {console.log("done hiding projects!")});
	});

	$('#project-toggle').click(function() {
		console.log("you clicked project");
		$('.project').show(600, function() {console.log("done showing projects!")});
		$('.blog').hide(200, function() {console.log("done hiding blogs!")});

	});

	$('#all-toggle').click(function() {
		console.log("you clicked all")
		$('.blog').show(300, function() {console.log("done showing all blogs!")});
		$('.project').show(300, function() {console.log("done showing all project!")});
	})

});