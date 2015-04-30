
;(function($){
    $(function(){
		window.location.hash= '';

		$('#fullpage').fullpage({
		sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff','#fff', '#fff','#fff', '#fff'],
		anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage','8thPage','9thPage', '10thPage', '11stPage','12ndPage'],    // 'lastPage', '6thPage'
		menu: '#menu',
		scrollingSpeed: 600,
		css3: true,
		slidesNavigation: false,
		continuousVertical: false,

		afterLoad: function(anchorLink, index){
            
            
			if(index == 12){
				$('.arr').hide();
			}
			else{
				$('.arr').show();
			}
			/*same method
			if(anchorLink == '12ndPage'){
				$('.arr').hide();
			}
			*/

		}

		});

 	})

})(jQuery)
	










