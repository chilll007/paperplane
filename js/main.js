$(window).load(function(e) {
	$('.likes').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('liked');
	});

	$('.year_val').click(function(e) {
		e.preventDefault();		
		$(this).toggleClass('open');
		if($(this).hasClass('open')) {
			$(this).next('.year_drop').show();
		} else {
			$(this).next('.year_drop').hide();
		}				
	});

	$('.year_drop p').click(function(e) {
		e.preventDefault();		
		$(this).parents('li').find('.year_val').toggleClass('open');
		if($(this).parents('li').find('.year_val').hasClass('open')) {
			$(this).parents('li').find('.year_drop').show();
		} else {
			$(this).parents('li').find('.year_drop').hide();
		}
	});

	$('.rele-text').click(function(e) {
		e.preventDefault();		
		$(this).toggleClass('open');
		if($(this).hasClass('open')) {
			$(this).next('.rele_drop').show();
		} else {
			$(this).next('.rele_drop').hide();
		}				
	});

	$('.rele_drop li').click(function(e) {
		e.preventDefault();		
		$(this).parents('.relevant-wrapper').find('.rele-text').toggleClass('open');
		if($(this).parents('.relevant-wrapper').find('.rele-text').hasClass('open')) {
			$(this).parents('.relevant-wrapper').find('.rele_drop').show();
		} else {
			$(this).parents('.relevant-wrapper').find('.rele_drop').hide();
		}
	});

	

	$( function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 0,
	      max: 250,
	      values: [ 0, 250 ],
	      slide: function( event, ui ) {
	      	var val1;
	      	if(ui.values[ 0 ] === 0) {
	      		val1 = '0';
	      	} else {
	      		val1 = ui.values[ 0 ] + 'k';
	      	}
	        $('#slider-range span:nth-child(2)').attr('data-content', '$' + val1);
			$('#slider-range span:nth-child(3)').attr('data-content', '$' + ui.values[ 1 ] + 'k');
	      }
	    });

	    $('#slider-range span:nth-child(2)').attr('data-content', '$0');
		$('#slider-range span:nth-child(3)').attr('data-content', '$250k');
	});

	// mobile menu
	$('.fa-filter').click(function(){
		if($('.content-wrapper .filter-wrapper').hasClass('open')){
			$(this).removeClass('open');
		}
		else{
			$('.content-wrapper .filter-wrapper').addClass('open');
		}
	});
	$('.close-btn').click(function(){
	    $('.content-wrapper .filter-wrapper').removeClass('open');
	});
});