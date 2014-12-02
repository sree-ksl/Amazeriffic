var main = function() {
   "use strict";
    //console.log("Hello world");

    $(".tabs a span").toArray().forEach(function(element){
    	//create a click handler for this element
    	$(element).on("click", function(){
    		//since we are using the jQuery version of element, we'll create a temp variableso we don't need to keep recreating it
    		var $element = $(element);

    		$(".tabs a span").removeClass("active");
    		$(element).addClass("active");
    		$("main .content").empty();

    		if($element.parent().is(":nth-child(1)")){
    			console.log("first tab clicked");
    		}else if ($element.parent().is(":nth-child(2)")){
    			console.log("second tab clicked");
    		}
    		else if ($element.parent().is(":nth-child(3)")){
    			console.log("third tab clicked");
    		}
    		
    		return false;
    	});

    });
};

