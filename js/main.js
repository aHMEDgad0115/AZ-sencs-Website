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
const header1 = document .querySelector('.header-section');

document.addEventListener('scroll',()=>{
    var scrol=window.scrollY;
    if (scrol > 250) {
        header1.style.backgroundColor = "#29323c";
        
    }else{
        header1.style.backgroundColor = "transparent";

    }
});

// end header



})(jQuery);