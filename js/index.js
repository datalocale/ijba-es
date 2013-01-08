$(function () {
	var sport;
	var article2_open = true;
	var article_open = false;
	var current_page = 1;

	$('.slide-right')
	.on('click', function() {
		if (current_page == 2)
			$('#page2').animate({'left' : '-100%'}, 'slow');
		else
			$('#page' + current_page).animate({'right' : '100%'}, 'slow');
		current_page++;
		$('#page' + current_page).animate({'left' : '0%'}, 'slow', function() {
			$('#page-slider').css({'min-height' : '880px'});
		});
	})

	$('.slide-left')
	.on('click', function() {
		if (current_page == 3)
			$('#page2').animate({'left' : '0%'}, 'slow');
		$('#page' + current_page).animate({'left' : '100%'}, 'slow');
		current_page--;
		$('#page' + current_page).animate({'right' : '0%'}, 'slow', function() {
			if (current_page == 1)
				$('#page-slider').css({'min-height' : ''});
		});
	})	

	$('.picto-sports')
	.on('mouseenter', function() {
		sport = $(this).attr('id');
	 	$('#data-text').fadeOut('fast', function() {
	 		$('#data-text').css('background-image', 'url("./img/text_' + sport + '.png")');
	 		$('#data-text').fadeIn('fast');
	 	});
	})

	$('#toggle-article')
	.on('click', function() {
		$('#article-page2').slideToggle(1000, function() {
			$('#toggle-article-text').fadeOut(200, function() {
				if (!article2_open)
					$('#toggle-article-text').text('Fermer l\'article');
				else
					$('#toggle-article-text').text('Ouvrir l\'article');				
				article2_open = !article2_open;
				$('#toggle-article-text').fadeIn(200);
			});
		});
	})

	$('#button').on("click", function() {
		if (!article_open) {
			$('#yellowBar').animate({height: 'toggle'}, 1000, function() {
				$('#bar').css("display", "none");
				$('#article').animate({height: 'toggle'}, 1000, function() {
					$('#button-text').fadeOut(200, function() {
						$('#button-text').text('Fermer l\'article');
						article_open = !article_open;
						$('#button-text').fadeIn(200);
					});
				});
			});
		}
		else {
			$('#article').animate({height: 'toggle'}, 1000, function() {
				$('#bar').css("display", "block");
				$('#yellowBar').animate({height: 'toggle'}, 1000, function() {
					$('#button-text').fadeOut(200, function() {
						$('#button-text').text('Ouvrir l\'article');
						article_open = !article_open;
						$('#button-text').fadeIn(200);
					});
				});
			});
		}
	})
})