/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
window.onload = function () {

	/* banner start */
	$(".slider").slick({
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: false,
		speed: 800,
		slidesToShow: 1,
		// asNavFor: '.slide-nav'
		// slidesToScroll: 1,
	});

	// $('.slide-nav').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.slider-for',
	// 	centerMode: true,
	// 	focusOnSelect: true
	//   });

	//ticking machine
	var percentTime;
	var tick;
	var time = 1;
	var progressBarIndex = 0;

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
			if (percentTime >= 100) {
				$('.single-item').slick('slickNext');
				progressBarIndex++;
				if (progressBarIndex > 2) {
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

	/* footer submenu start */
	$(".info-section-item.dropdown-menu").on('click', function() {
		$(this).find("i").toggleClass('icon-plus');
		$(this).find("i").toggleClass('icon-minus');
		$(this).find('.m-ft-dropdown-menu').toggle();
	})
	/* footer submenu end */

}