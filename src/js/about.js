/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
window.onload = function () {

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

	$('#mobile-aside').on('click', function() {
		$('.aside-item').toggle();
		$('.mobile-aside-icon').toggleClass('icon-chevron-down');
		$('.mobile-aside-icon').toggleClass('icon-chevron-up');
	})

	$('.aside-item').on('click', function() {
		let oldId = $('.aside-item.active');	
		oldId.find('img').attr('src', 'img/OvalCopy.png')
		$('.aside-item').removeClass('active');
		$('#' + oldId.data('id')).hide();
		$(this).addClass('active');
		$(this).find('img').attr('src', 'img/Oval.png');
		let newId = $(this);
		$('#'+newId.data('id')).show();
		$('.banner-text').text(newId.data('breadcrumb'));
		$('.breadcrumb-item-text').text(newId.data('breadcrumb'));

		if($(window).width() < 769) {
			
			$('#mobile-aside').text(newId.data('breadcrumb'));
			$('.aside-item').hide();
			$('.mobile-aside-icon').toggleClass('icon-chevron-down');
			$('.mobile-aside-icon').toggleClass('icon-chevron-up');	
		}

	})

	$(".chat").show();

	$(window).scroll(function() {
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