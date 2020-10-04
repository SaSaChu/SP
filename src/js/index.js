/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
window.onload = function() {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // If we need pagination
        // pagination: {
        //     el: '.my-swiper-pagination',
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //         return '<span class="' + className + '">' + (index + 1) + '</span>';
        //     },
        // },
    });
}
