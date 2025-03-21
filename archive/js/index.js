$(function() {
	var $container = $('#container');
// init
$container.isotope({
  // options
  itemSelector: '#container > div',
  layoutMode: 'fitRows'
});
	$(".filter").click(function(){
		$(".filter").removeClass("highlight");
		$("#show-all").removeClass("highlight");
		$(this).addClass("highlight");
		$container.isotope({ filter: "."+$(this).text() });
	});

	$("#show-all").click(function(){
		$(".filter").removeClass("highlight");
		$(this).addClass("highlight");
		$container.isotope({ filter: '#container > div' });
	});

});


function initGrid(){
	$(".tt-grid li" ).each(function( i ) {
	});
}