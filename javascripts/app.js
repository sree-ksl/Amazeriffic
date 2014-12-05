var main = function(toDoObjects) {
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
    var toDos = todoObjects.map(function(toDo){
      //we will return the description of this toDoOject
      return toDo.description;
    });


    $(".tabs a span").toArray().forEach(function(element){
    	//create a click handler for this element
    	$(element).on("click", function(){
    		//since we are using the jQuery version of element, we'll create a temp variableso we don't need to keep recreating it
    		var $element = $(element);
    		
    		//create a click handler for this element
    		$elemnt.on("click", function(){
    			var $content,
    			    $input,
    			    $button,
    			    i;
        
    		$(".tabs a span").removeClass("active");
    		$(element).addClass("active");
    		$("main .content").empty();

    		if($element.parent().is(":nth-child(1)")){
    			console.log("first tab clicked");
    			//newest first, so we have to go through the array backwards
    			$content = $("<ul>");
    			for (i = toDos.length-1; i>=0; i--){
    				$content.append($("<li>").text(toDos[i]));
    			}
    		}else if ($element.parent().is(":nth-child(2)")){
    			//oldest first so we go through thearray forward
    			$content = $("<ul>");
    			toDos.forEach(function (todo){
    				$content.append($("<li>").text(todo));
    			});
    			console.log("second tab clicked");
    		}
    		else if ($element.parent().is(":nth-child(3)")){
    			console.log("third tab clicked");
    			//input a new to-do
    			$input = $("<input>");
    			$button = $("<button").text("+");

    			$button.on("click", function(){
    				if($input.val() !== ""){
    					toDos.push($input.val());
    					$input.val("");
    				}
    			});

    			$content = $("<div>").append($input).append($button);
    			/*Alternatively append() allows multiple arguments so the above 
    			can be done with $content = $("<div>").append($input, $button); */
    		}
    		$("main . content").append($content);

    		return false;
    	});

    });
     $(".tabs a:first-child span").trigger("click");
};
$(document).ready(function(){
   $.getJSON("to-dos.json", function(toDoObjects){
       //call main with the to-dos as an argument
       main(toDoObjects);
   });
});
