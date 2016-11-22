/*
	shutUp.js
	@author Sefa Tunçkanat
			@web sefatunckanat.github.io
			@mail sefatunckanat73@gmail.com
			@date 02.09.2016
			@link https://github.com/sefatunckanat/shutUp.js
	@usage
		$(function(){
			$("selector").shutUp(10,{
				dotChar:'.',
				dotCount:3,
			});
		})
*/
var plugin = window.$ || window.jQuery;
if (!plugin){
	throw Error("shutUp need Jquery for work..");
}else{
	(function ($) {
		$.fn.shutUp = function (length,options) {
			$(this).each(function(){
				var settings = $.extend({
					"dotChar":".",
					"dotCount":3
				},options);
				var str = $(this).html().trim().replace(/(<([^>]+)>)/ig,'').replace(/\s\s+/g,' ');
				if(str.length>length){
					var dots=" ";
					for (var i=0;i<settings.dotCount;i++) {dots+=settings.dotChar;}
					oldStr = "<span style='display:none'><br>"+str+"</span>";
					str = str.substr(0,length);
					str = str.substr(0,str.lastIndexOf(" "));
					$(this).html(str+dots+oldStr);
				}
			});
		};
	})(jQuery);
}
