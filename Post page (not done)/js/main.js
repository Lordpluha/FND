jQuery(document).ready(function($) {

	menu_op = $('header .hat .menu .menu');

	menu_cl = $('nav .close_nav');

	nav = $('nav');

	i = 1

	menu_op.click(function(event) {
		if (i % 2 == 0) {
			nav.css({
				opacity: 0
			});

			function hide() {
				nav.css({
					pointerEvents: 'none'
				})
			};

			setTimeout(hide, 500);
		}
		else if (i % 2 != 0) {
			nav.css({
				pointerEvents: 'auto',
				opacity: 1
			});
		}
		
		i+=1
	});

	menu_cl.click(function(event) {
		nav.css({
			opacity: 0
		});
		function hide() {
			nav.css({
				pointerEvents: 'none'
			})
		};

		setTimeout(hide, 500);
	});

	search = $('.other .search form input');

	search_inp_txt = search.attr('placeholder');

	search.click(function(event) {
		search.attr({'placeholder': ''});
	});

	$('body').mousedown(function (event) {
		if (!search.is(event.target) && search.has(event.target).length === 0) {
			search.attr({ 'placeholder': search_inp_txt });
		}
	});

	// Nav
	function cr_nav_drop_list(s_n_s, s_n_c) {
		s_n_s = $(s_n_s);
		s_n_c = $(s_n_c);

		s_n_s.click(function(event) {
			if (s_n_c.hasClass('active')) {
				s_n_c.css({
					transform: 'scaleY(0)'
				});

				function hide() {
					s_n_c.css({display: 'none'})
				};

				setTimeout(hide, 1000);

				s_n_c.removeClass('active');
			}
			else {
				s_n_c.css({
					display: 'block',
					transform: 'scaleY(1)'
				});

				s_n_c.addClass('active');
			}
		});

		// Доп функционал

		// $('body').mousedown(function (event) {
		// 	if (!s_n_s.is(event.target) && s_n_s.has(event.target).length === 0) {
		// 		s_n_c.css({
		// 			'opacity': '0',
		// 			'height': '0%'
		// 		});
		// 		setTimeout(200, s_n_c.css({'display': 'none'}));
		// 		s_n_c.removeClass('active');
		// 	}
		// });
	};
	
	nav_list = ['services', 'ourworks', 'news_events', 'shop'];

	for (var i = 0; i < nav_list.length; i++) {
		str1 = 'input.' + nav_list[i];
		str2 = '#' + nav_list[i];
		cr_nav_drop_list(str1, str2);
	}

	// Review2 slider
	slider_r2 =  $('.review2 .slider_view .slider');
	set_sl1_r2 = $('.review2 .slider_view .slider_menu .slide1');
	set_sl2_r2 = $('.review2 .slider_view .slider_menu .slide2');
	set_sl1_r2.click(function(e) {
		set_sl1_r2.addClass('active');
		set_sl2_r2.removeClass('active');

		slider_r2.css({
			marginLeft: '0%'
		});
	});
	set_sl2_r2.click(function(e) {
		set_sl2_r2.addClass('active');
		set_sl1_r2.removeClass('active');

		slider_r2.css({
			marginLeft: '-100%'
		});
	});

	// News slider
	slider_n =  $('.news .slider_view .slider');
	set_sl1_n = $('.news .slider_menu .slide1');
	set_sl2_n = $('.news .slider_menu .slide2');
	set_sl3_n = $('.news .slider_menu .slide3');

	set_sl1_n.click(function(e) {
		set_sl1_n.addClass('active');
		set_sl2_n.removeClass('active');
		set_sl3_n.removeClass('active');

		slider_n.css({
			marginLeft: '0%'
		});
	});
	set_sl2_n.click(function(e) {
		set_sl1_n.removeClass('active');
		set_sl2_n.addClass('active');
		set_sl3_n.removeClass('active');

		slider_n.css({
			marginLeft: '-100%'
		});
	});
	set_sl3_n.click(function(e) {
		set_sl1_n.removeClass('active');
		set_sl2_n.removeClass('active');
		set_sl3_n.addClass('active');

		slider_n.css({
			marginLeft: '-200%'
		});
	});


	// Header-shop
	a = 1
	$('header .hat .shop').click(function(event) {
		a++;

		if (a%2!=0) {
			$('.header-shop').css({
				display: 'none'
			});
		}

		else {
			$('.header-shop').css({
				display: 'block'
			});
		}

		
	}); 
	
});