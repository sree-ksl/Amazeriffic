var main = function() {
   "use strict";
    //console.log("Hello world");

    //tabs content
    var toDos = [
           "Finish writing this program", 
           "Take Cocoa to the park", 
           "Answer emails", 
           "Prep for class", 
           "Male up some new todos", 
           "Get groceries"
           ];

    $(".tabs a span").toArray().forEach(function(element){
    	//create a click handler for this element
    	$(element).on("click", function(){
    		//since we are using the jQuery version of element, we'll create a temp variableso we don't need to keep recreating it
    		var $element = $(element), 
    		               $content;

    		$(".tabs a span").removeClass("active");
    		$(element).addClass("active");
    		$("main .content").empty();

    		if($element.parent().is(":nth-child(1)")){
    			console.log("first tab clicked");
    		}else if ($element.parent().is(":nth-child(2)")){
    			$content = $("<ul>");
    			toDos.forEach(function (todo){
    				$content.append($("<li>").text(todo));
    			});
    			$("main .content").append($content);
    			console.log("second tab clicked");
    		}
    		else if ($element.parent().is(":nth-child(3)")){
    			console.log("third tab clicked");
    		}

    		return false;
    	});

    });
};

