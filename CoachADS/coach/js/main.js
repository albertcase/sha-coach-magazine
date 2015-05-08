
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



	$(document).ready(function(){
	//=========资源加载=========
	    var loader = new WxMoment.Loader();
	    //添加一个资源
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/1.jpg');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/arr.png');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/bg.jpg');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/close.png');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/kv.png');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/loading.png');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/logo.png');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/pic-01.jpg');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/pic-02.jpg');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/pic-03.jpg');
	    loader.addImage('http://wximg.qq.com/tmt/_events/20150508coach/dist/images/qrcode.png');
	    //监听资源加载完成事件
	    loader.addCompletionListener(function () {
	    	$(".loading").hide();
	    	$("#fullpage").animate({"opacity":1});
	        console.log('加载完成');
	    });
	    //启动资源加载管理器
	    loader.start();
	})
	










