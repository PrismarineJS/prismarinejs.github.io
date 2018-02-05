$(document).on('mousemove', function(e) {
	var posX = e.clientX / 20;
	var posY = e.clientY / 20;
	var clientPosition = `${posX}px ${posY}px, 0px 0px`;
	$('.promoBanner').css('background-position', clientPosition);
});