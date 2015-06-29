function showMenu() {
	$(navBottom).show ("drop", 400);
	$(navBottom).removeClass ("none").addClass ("block");
	$(menu).addClass ("changeMenu", 400);
	$(navBottom).addClass ("changeColor");
	$("#area1").addClass ("area1", 400);
}

function hideMenu() {
	$(navBottom).hide ("drop", 400);
	$(navBottom).removeClass ("block").addClass ("none");
	$(menu).removeClass ("changeMenu", 400);
	$(navBottom).removeClass ("changeColor");
	$("#area1").removeClass ("area1", 400);
}

function mudarSelecao() {
	var j;

	$(".destinoAncora").each (function(i) {
		if ($(window).scrollTop() + 90 >= $(".destinoAncora").eq(i).offset().top){
			j = i;
		}
	});	

	$(".ancora").parent().eq(j + 1).siblings().children().removeClass ("selecionado", 100);
	$(".ancora").parent().eq(j + 1).children().addClass ("selecionado", 100);
}

function novaWidth() {
	var width;
	var deviceAgent = navigator.userAgent.toLowerCase();

    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);

    if (agentID) {
    	width = window.innerWidth;
    }
    else{
    	width = window.innerWidth - 17;
    }

    return width;
}

function resizeFoto(newFotoWidth) {
	var fotoHeight = 575,
		fotoWidth = 1366,
		newFotoHeight = Math.round((fotoHeight / fotoWidth) * newFotoWidth);

		$("#foto").css ( {"height" : newFotoHeight} );
		$("#foto").css ( {"width" : newFotoWidth} );
}

function startSlider(newWidth) {

	var imgHeight = 600,
		imgWidth = 1360,
		newHeight = Math.round((imgHeight / imgWidth) * newWidth);

	$('#banner-slide').bjqs({
        animtype      : 'slide',
        height        : newHeight,
        width         : newWidth,
        responsive    : true,
        randomstart   : false
    });
}

/*function resizeSlider(newWidth) {
	var wrapper = $("#banner-slide"),
        slider = $(wrapper).find('ul.bjqs'),
        slides = $(slider).children('li'),
        slidecount = $(slides).length,
        imgHeight = 600,
		imgWidth = 1360,
		newHeight = Math.round((imgHeight / imgWidth) * newWidth);

        slides.css({
            'height' : newHeight,
            'width' : newWidth
        });
        slides.children('img').css({
            'height' : newHeight,
            'width' : newWidth
        });
        slider.css({
            'height' : newHeight,
            'width' : newWidth
        });
        wrapper.css({
            'height' : newHeight
        });
}*/

jQuery(document).ready(function($) {

    var newWidth = novaWidth();

    startSlider(newWidth);
    /*resizeSlider(newWidth);*/

    var menu = "#menu",
	navBottom = "#navBottom",
	ul,
	hasclass;

	/* MENU RESPONSIVO*/
	$("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
	$("#header").after ("<div id='navBottom' class='none'></div>");

	if(window.innerWidth <= 890){

		ul = $("#nav").detach();
		$(navBottom).append (ul);

	}

	$(menu).click (function() {
		hasclass = $(navBottom).hasClass ("none");
		
		if (hasclass){
			showMenu();
		}
		else{
			hideMenu();
		}

	});

	/* FIM MENU RESPONSIVO*/

	/* EFEITO DE DESLIZE SUAVE NO SCROLL DAS ANCORAS */

	mudarSelecao();

	$('.ancora').click (function(){
    	var alvo = $(this).attr('href').split('#').pop();

    	if (window.innerWidth < 890){
    		$('html, body').animate({scrollTop: $('#'+alvo).offset().top - 240}, 1800);	
    	}
    	else{
    		$('html, body').animate({scrollTop: $('#'+alvo).offset().top - 80}, 1800);	
    	}
    	
    	hideMenu();

    	mudarSelecao();

    	return false;
   	});

   	$(window).scroll (function(){
   		mudarSelecao();
   	});

   	/* FIM DO EFEITO DE DESLIZE SUAVE NO SCROLL DAS ANCORAS */

   	resizeFoto(newWidth);

	$(".nome").click (function() {
		var has = $(this).siblings().hasClass ("visivel");

		$(".nome").siblings().removeClass ("visivel", 400);
		$(".nome").siblings().children().removeClass ("show");

		if (!has){
			
			$(this).siblings().children().toggleClass ("show", 400);
			$(this).siblings().toggleClass ("visivel", 400);			
		}
		
	});
	

});

$(window).resize(function(){

	var newWidth = novaWidth();

	/* MENU RESPONSIVO */

	if(window.innerWidth <= 890){

		ul = $("#nav").detach();
		$(navBottom).append (ul);

	}
	else{

		ul = $("#nav").detach();
		$("nav").append (ul);

		hideMenu();
	}

	/*resizeSlider(newWidth);*/

	resizeFoto(newWidth);

	/* FIM MENU RESPONSIVO */	
});