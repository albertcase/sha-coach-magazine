var LoadingImg = ["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.jpg",
"../images/5.jpg","../images/6.jpg","../images/7.jpg","../images/bg.jpg","../images/index_img.jpg",
"../images/kv.jpg","../images/loading.png","../images/logo.png","../images/start_btn.jpg"];
$(".loading").fadeIn();

	;(function($){
		$(function(){
		
			loading(LoadingImg);

	        $(".start_btn").on("click",function(){
	            $(".page#index").hide();
	            $(".page#element").show();
	        });

		})
	})(jQuery);


