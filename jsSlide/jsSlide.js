//(function(){
var jsSlide = (function(container,options){
	"use strict";

	var defaults = {
		slideContainter : $(container),
		slideWrap : options.slideWrapClass,
		slideItem : options.slideItemClass || '.jsSlide-item',
		pageClass : options.pageClass || '.jsSlide-paging',
		btnNextClass : options.btnNext || '.jsSlide-btn-next',
		btnPrevClass : options.btnPrev || '.jsSlide-btn-prev',
		btnStopClass : options.btnStop || '.jsSlide-btn-stop',
		pastIdx : 0,
		presentIdx : options.firstIdx || 0
	};

	var set = {
		slideItemsLength :	defaults.slideContainter.find(defaults.slideItem).length,
		idx : 0,
	};


	var init = {
		run : function(){
			console.log(set.slideItemsLength);
		}
	};

	init.run();



	function jsSlide(container, options){
		var Container = $(container);




	}


	function next(){
		defaults.pastIdx = defaults.presentIdx;
		defaults.presentIdx = defaults.presentIdx <= 0 ? 0 : this.defaults.presentIdx+1;
	}

	function prev(){
		defaults.pastIdx = defaults.presentIdx;
		defaults.presentIdx = defaults.presentIdx <= 0 ? 0 : this.defaults.presentIdx-1;
	}




});





var slide0 = new jsSlide("#slide0",{
	/* firstIdx : 0 */
});
//}());


