$(document).ready(function(){
$('.head-fix').addClass('Banner_text_Ani')
$('.head-fix-in').addClass('Banner_text_Ani_banin') 
$('.head-fix-whitebg-in').addClass('Banner_text_Ani_whitebg') 
$('.head-fix-blog').addClass('Banner_text_Ani_blog') 
$('.head-fix-blog-inn').addClass('Banner_text_Ani_blog-inn') 
});


$('.portfolio_submit').click(function(e){

	// alert();
      e.preventDefault();

          $('.portfolio_form').validate({
             rules: {
                 portfolio_name: {
                     required: true,
                    lettersonly: true                     //lettersonly: true,

                 },
                 portfolio_mobile: {
                     required: true,
                     digits: true,
                     minlength: 10,
                     maxlength: 12
                 },
                  portfolio_email: {
                     required: true,
                     email: true
                 }
             },
             messages: {

                 portfolio_name: {
                     required: 'Please enter your name',
                    
                    // lettersonly:jQuery.format("name should contain character only.")
                 },
                 portfolio_mobile: {
                     required: 'Please enter mobile number',
                     digits: 'Please enter only in numeric',
                     minlength: 'Phone number should be minimum 10 digits long.',
                     maxlength: 'Phone number should be less then 12 digits.'
                 },
                 portfolio_email: {
                     required: 'Please enter your email id',
                     email: 'Enter a valid email id '
                 
   
                 }
                
             }
         });

          jQuery.validator.addMethod("lettersonly", function(value, element) {
                    return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
                    }, "Name containt Letters only"); 


         var isvalidate = $(".portfolio_form").valid();
         
         if(isvalidate){
                   $(".loader").show();

          $.ajax(
              {
                url: base_url + "AjaxController/protfolio_Form",
                datatype:"text",
                type: "POST",
                data: $('.portfolio_form').serialize(),
                success: function(response) 
                {
                	// console.log(response);
                      var returnedData = JSON.parse(response);
                        if (returnedData.status){
                        // document.getElementsByClassName('portfolio_form').reset();
                        $('.effect-16').val('');
                        $(".loader").hide();
                        $('.form-description').html('Your form has been submitted successfully.<br> An EvolutionCo representative will get in touch with you shortly');
                        setTimeout(function() {
                        $('.form-description').html(" ");
                          }, 5000 );
                     }
                    else{}
                },
                error: function(response) {
                  alert("error"); 
                  //console.log(response);
                }
          });
      }
});













(function ($) {
	$(document).ready(function(){
		var video_sroll = $('.top_scroll_video_section').offset();
		var winH = $(window).height();
		
		$(window).scroll(function(e){
		  	var Scroll_posY = $(this).scrollTop();
		    $("video").each(function () { 
		      if (Scroll_posY > video_sroll.top - 200) {
		        this.play(); 
		      } 
		    });
		});



		
	

		/*$(window).scroll(function() {
			$('video').each(function(){
			    if ($(this).is(":in-viewport")) {
			    	// alert('asfdf');
			        $(this).load();
			    } 
			})
			var Scroll_posY = $(this).scrollTop();
			// if(scrollTop > (video_sroll.top - (winH / 2))){
			// 	console.log('done');
			// }
			$('.top_scroll_video_section').each(function(e) {
	            if (Scroll_posY >= $(this).offset().top - 100) {
	            	//$(this).find('video').load();
	                // if ($(this).hasClass('active')) {
	                //     $('.top_scroll_video_section').removeClass('active');
	                // } else {
	                //     $('.top_scroll_video_section').addClass('color_div');
	                // }
	            }
	        });
		});*/

	});
})(jQuery);


//browsers START HERE
/** jQuery Get Browser Plugin
* @version: 1.01
* @author: Pablo E. FernÃ¡ndez (islavisual@gmail.com).
* Copyright 2016-2018 Islavisual.
* Licensed under MIT (https://github.com/islavisual/getBrowser/blob/master/LICENSE).
* Last update: 07/02/2018
**/
(function($) {
   $.extend({
       browser: function() {
           var ua = navigator.userAgent,
               tem,
               M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
           if (/trident/i.test(M[1])) {
               tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
               M[1] = "Internet-Explorer";
               M[2] = tem[1];
           }
           if (M[1] === 'Chrome') {
               tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
               if (tem != null) M[1] = tem.slice(1).join(' ').replace('OPR', 'Opera');
               else M[1] = "Chrome";

           }
           M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
           if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);

           var firefox = /firefox/.test(navigator.userAgent.toLowerCase()) && !/webkit    /.test(navigator.userAgent.toLowerCase());
           var webkit = /webkit/.test(navigator.userAgent.toLowerCase());
           var opera = /opera/.test(navigator.userAgent.toLowerCase());
           var msie = /edge/.test(navigator.userAgent.toLowerCase()) || /msie/.test(navigator.userAgent.toLowerCase()) || /msie (\d+\.\d+);/.test(navigator.userAgent.toLowerCase()) || /trident.*rv[ :]*(\d+\.\d+)/.test(navigator.userAgent.toLowerCase());
           var prefix = msie ? "" : (webkit ? '-webkit-' : (firefox ? '-moz-' : ''));

           return {
               name: M[0],
               version: M[1],
               firefox: firefox,
               opera: opera,
               msie: msie,
               chrome: webkit,
               prefix: prefix
           };
       }
   });
   jQuery.browser = $.browser();
})(jQuery);
//browsers END HRERE
$('body').addClass($.browser.name);


	$(window).load(function(){
		$(".col-lg-3 input, .col-lg-12 textarea, .col-lg-6 input").val("");
		
		$(".input-effect input, .input-effect textarea").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})
	});

  Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "Please Upload File";

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);


  window.onload = function(){
   setInterval(function(){
     $(".portfolio-grid-metro .portfolio-25").css("width", "25.1%");
      $(".portfolio-grid-metro .grid-width-2").css("width", "50%");
   }, 10000);
   if($(window).width() < 900){
     $(".portfolio-grid-metro .portfolio-25").css("width", "100%");
      $(".portfolio-grid-metro .grid-width-2").css("width", "100%");
   } 
};


/*career dropdown js sratr*/

function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.drop li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
        });
        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
            opt.siblings().removeClass('selected');
            opt.filter(':contains("' + obj.val + '")').addClass('selected');
        }).change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    // create new variable for each menu
    var dd1 = new DropDown($('#noble-gases'));
    // var dd2 = new DropDown($('#other-gases'));
    $(document).click(function () {
        // close menu on document click
        $('.wrap-drop').removeClass('active');
    });
});

$('a.career_apply_now').animate({ scrollTop: $('div#career-app-form').offset().top }, 1000);