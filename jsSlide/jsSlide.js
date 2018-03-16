
var jsSlide = (function(container,options){
	"use strict";

	console.info(this);

	var defaults = {
		slideContainter : $(container),
		slideList : options.slideWrapClass || '.jsSlide-list',
		slideItem : options.slideItemClass || '.jsSlide-item',
		paging : options.pageClass || '.jsSlide-paging',
		btnNext : options.btnNext || '.jsSlide-btn-next',
		btnPrev : options.btnPrev || '.jsSlide-btn-prev',
		btnStop : options.btnStop || '.jsSlide-btn-stop',
		pastIdx : 0,
		presentIdx : options.firstIdx || 0
	};

	var setting = {
		slideItemsLength :	defaults.slideContainter.find(defaults.slideItem).length
	};


	var clickEv = {
		next : function(){
			defaults.slideContainter.on('click',defaults.btnNext,function(e){
				e.preventDefault();
				next();
				moving();
				console.log('다음!!!',defaults.presentIdx)
			});
		},
		prev : function(){
			defaults.slideContainter.on('click',defaults.btnPrev,function(e){
				e.preventDefault();
				prev();
				moving();
				console.log('이전!!!',defaults.presentIdx)
			})
		},
		cloning : function(){
			defaults.slideList.append(defaults.slideItem[2]);
		}
	};

	var init = {
		run : function(){
			clickEv.next();
			clickEv.prev();
			clickEv.cloning()

		}
	};

	init.run();



	function next(){
		defaults.pastIdx = defaults.presentIdx;
		defaults.presentIdx = defaults.presentIdx >= setting.slideItemsLength-1 ? defaults.presentIdx : defaults.presentIdx+1;
	}

	function prev(){
		defaults.pastIdx = defaults.presentIdx;
		defaults.presentIdx = defaults.presentIdx <= 0 ? 0 : defaults.presentIdx-1;
	}

	function moving(){
		defaults.slideContainter.find(defaults.slideList).css({
			transform: 'translate('+-600*defaults.presentIdx+"px,0)"
		})
	}
});

var slide0 = new jsSlide("#slide0",{
	/* firstIdx : 0 */
	btnNext : '.jsSlide-btn.next',
	btnPrev : '.jsSlide-btn.prev'

});
