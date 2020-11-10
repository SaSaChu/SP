
window.onload = function () {
	
	/* banner start */
	$(".slider").slick({
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: false,
		speed: 800,
		slidesToShow: 1,
		
	});
	

	//ticking machine
	var percentTime;
	var tick;
	var time = 1;
	var progressBarIndex = 0;
	var length = 2;

	$('.progressBar .progressBar-container .progressBar-items .progressBar-item .progressBarLine').each(function (index) {
		var progress = "<div class='inProgress inProgress" + index + "'></div>";
		$(this).html(progress);
	});

	function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		tick = setInterval(interval, 10);

	}

	function interval() {
		if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
			progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
			startProgressbar();
			
		} else {
			
			percentTime += 1 / (time + 5);
			$('.inProgress' + progressBarIndex).css({
				width: percentTime + "%"
			});
			
			$('.inProgress' + progressBarIndex).parents('.progressBar-item').find('.progressBar-item-text').css({
				color: 'rgba(0, 142, 216, 1.00)',
			});		
			
			$('span[data-slick-index='+ progressBarIndex +']').parent().addClass('show');

			if (percentTime >= 100) {
				$('.single-item').slick('slickNext');
				progressBarIndex++;
				if (progressBarIndex > length) {
					progressBarIndex = 0;
				}
				startProgressbar();
			}
		}
	}

	function resetProgressbar() {
		$('.inProgress').css({
			width: 0 + '%'
		});
		$('.inProgress').parents('.progressBar-item').find('.progressBar-item-text').css({
			color: 'unset',
		});
		$('.inProgress').parents('.progressBar-item').removeClass('show')
		clearInterval(tick);
	}
	
	startProgressbar();
	// End ticking machine

	$('.progressBar .progressBar-container .progressBar-items .progressBar-item').click(function () {
		clearInterval(tick);
		var goToThisIndex = $(this).find("span").data("slickIndex");
		$('.single-item').slick('slickGoTo', goToThisIndex, false);
		startProgressbar();
	});

	$('.progressBar .progressBar-container .progressBar-items .progressBar-item .icon-chevron-left').click(function () {
		clearInterval(tick);
		var index = $(this).parents(".progressBar-item").find("span").data("slickIndex");
		index  = (!index) ? 5 : --index;
		$(this).parents(".progressBar-item").removeClass('show')
		$('span[data-slick-index='+ index +']').parent().addClass('show');
		$('.single-item').slick('slickGoTo', index, false);
		startProgressbar();
	});

	$('.progressBar .progressBar-container .progressBar-items .progressBar-item .icon-chevron-right').click(function () {
		clearInterval(tick);
		var index = $(this).parents(".progressBar-item").find("span").data("slickIndex");
		index  = (index == 5) ? 0 : ++index;
		$(this).parents(".progressBar-item").removeClass('show')
		$('span[data-slick-index='+ index +']').parent().addClass('show');
		$('.single-item').slick('slickGoTo', index, false);
		startProgressbar();
	});
	/* banner end */

	/* oponion start */
	var swiper = new Swiper('.section6-opinion', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		autoplay: true,
		delay: 1000,
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			type:'fraction',
			
		  },

		  navigation: {
			nextEl: '.arrow-right',
			prevEl: '.arrow-left',
		  },
	});
	/* oponion end */

	/*  mobile menu start */
	$("#m-menu-icon").on('click', function() {
		$('.m-menu').show();
	})
	$("#m-menu-close").on('click', function() {
		$('.m-menu').hide();
	})

	$(".menu-section-item.dropdown-menu").on('click', function() {
		$(this).find("i").toggleClass('icon-chevron-up');
		$(this).find("i").toggleClass('icon-chevron-down');
		$(this).find('.m-dropdown-menu').toggle();
	})
	/*  mobile menu end */

	
	$(window).scroll(function() {
		if($(window).scrollTop() > $(".section1").offset().top - 300 ) {
		  $(".section1-img").addClass('show');
		}

		if($(window).scrollTop() > $(".section3").offset().top - 300 ) {
			$(".phone-img").addClass('show');
		}

		if($(window).scrollTop() > $(".section4").offset().top - 300 ) {
			$(".section4-text").addClass('show');
		}

		if($(window).scrollTop() > $(".section1").offset().top) {
			if($(window).width() > 1024) {
				$("header").addClass('fix');
			}
			
		} else {
			if($(window).width() > 1024) {
				$("header").removeClass('fix');
			}
		}

		if($(window).scrollTop() > $(".section1").offset().top) {
			$(".chat").show();
		} else {
			$(".chat").hide();	
		}

		if($(window).scrollTop() + $(window).height() >= $('.footer-bottom').offset().top) {
			if($(window).width() > 769) {
				$('.chat').css({"bottom":"85px"}) 
			} else {
				$('.chat').css({"bottom":"115px"}) 	
			}
		} else {
			$('.chat').css({"bottom":"1rem"}) 	
		}
	  });


	  $('.chat-1').on('click', function() {
		  $(this).toggleClass('show');
	  })

	  $('.chat-2').on('click', function() {
			$(this).toggleClass('show');
		})

	/* footer mobile submenu start */
	$(".info-section-item.dropdown-menu").on('click', function() {
		$(this).find("i").toggleClass('icon-plus');
		$(this).find("i").toggleClass('icon-minus');
		$(this).find('.m-ft-dropdown-menu').toggle();
	})
	/* footer mobile submenu end */

}