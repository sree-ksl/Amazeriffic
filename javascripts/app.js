var main = function() {
   "use strict";
    //console.log("Hello world");

    var makeTabActive = function(tabNumber){
      //construct the selector from the tabNumber
      var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
      //make all tabs insctive
      $(".tabs span").removeClass("active");
      $(tabSelector).addClass("active");
    };

    $(".tabs a:nth-child(1)").on("click", function () {
    	makeTabActive();
    	return false;
    });

    $(".tabs a:nth-child(2)").on("click", function () {
    	makeTabActive();
    	return false;
    });

    $(".tabs a:nth-child(3)").on("click", function () {
    	makeTabActive();
    	return false;
    });
};

$(document).ready(main);