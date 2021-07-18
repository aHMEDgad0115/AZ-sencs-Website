/*  ---------------------------------------------------
    Template Name: Europa Hotel And Spa
    Description: Europa Hotel And Spa HTML Template
    Author: Colorlib
    Author URI: http://www.colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });


'use strict';
$ ('html').niceScroll();
//check
//start header
const header1 = document .querySelector('.navbar');

document.addEventListener('scroll',()=>{
    var scrol=window.scrollY;
    if (scrol > 300 ) {
        header1.style.backgroundColor = " #272727 ";
        
    }else {
        header1.style.backgroundColor = "transparent";

    }
});

// end header



})(jQuery);