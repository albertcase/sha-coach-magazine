
;(function($){
    $(function(){

       var video = new tvp.VideoInfo();   

       video.setVid("b001672wkoe");
       var playerW = parseInt($(window).width());
	   var playerH = playerW*9/16;
       var player = new tvp.Player(playerW,playerH);	       
       player.setCurVideo(video);
       player.addParam("pic","images/1.jpg");
       player.addParam("autoplay",0);
       player.addParam("extvars",{showend:0});
       player.write("mod_player");
       
		window.location.hash= '';
        var x = document.getElementById("movie"); 
		$('#fullpage').fullpage({
			sectionsColor: ['#fff', '#fff','#fff', '#fff', '#fff'],
			anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage'],    // 'lastPage', '6thPage'
			menu: '#menu',
			scrollingSpeed: 600,
			css3: true,
			slidesNavigation: false,
			continuousVertical: false,

			
			afterLoad: function(anchorLink, index){
				if(index == 5){
					$(".arr").hide();
				}
				else{
					$(".arr").show();
				}		
			},
			
			onLeave: function(index, nextIndex, direction){
	            if(index == 1 && direction =='down'){
	               player.pause();

	            }
        	}
		});
		/*$("#vcover").on('click', function(){
			$("#vcover").hide();
			$("#movie").show();
			document.getElementById('movie').play();
		})*/

        $(".scanImg").on("click", function(){
        	$(".zoom").show();
        });
        $(".close_btn").on("click",function(){
        	$(".zoom").hide();
        });


 	})

})(jQuery)
	










