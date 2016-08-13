if (typeof jQuery === 'undefined'){
	throw new Error("Require jQuery's Library.")
}

+(function($){
    $.fn.ripple = function(color, index){
        $(this).on('click', function(e){
            var controller = $("<div></div>").css({
                'width': $(window).width(),
                'height': $(window).height(),
                'overflow': 'hidden',
                'position': 'fixed',
                'top': 0,
                "left": 0,
                'z-index': index
            });

            var div = $('<div></div>').css({
                'backgroundColor': color,
                'width': 1,
                'height': 1,
                'borderRadius': "100%",
                'position': 'absolute',
                'left': e.pageX + "px",
                'top': e.pageY + "px"
            });

            var size = $(document).width() * 2.5,
                position = - (($(document).width() *2.5) / 2.5);

            $(div).animate({
                "width": size,
                "height": size,
                "left": position,
                "top": position
            }, 1000,  function(){
                $("body").css({
                    "backgroundColor": $(div).css('backgroundColor')
                });
                $(controller).remove();
            });

            $(this).append(controller);
            $(controller).append(div);
        });
    };
})(jQuery);