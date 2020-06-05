//Get the button:


// When the user scrolls down 20px from the top of the document, show the button





// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



$(document).ready(function(){

mybutton = document.getElementById("myBtn");
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
window.onscroll = function() {scrollFunction()};
mybutton.style.display = "none";

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
    $("#nav2").css({"opacity":"1","background-color":"white"});
  } else {
    mybutton.style.display = "none";
    $("#nav2").css({"opacity":"1","background-color":"lightgreen"});
  }
}

  $("#fa1h").hide()
  $("#fa1p").hide()
  $("#fa3h").hide()
  $("#fa3p").hide()
  $("#fa2h").hide()
  $("#fa2p").hide()
  $("#fa4h").hide()
  $("#fa4p").hide()
  $("#fa6h").hide()
  $("#fa6p").hide()
  $("#fa5h").hide()
  $("#fa5p").hide()

  });




$(document).ready(function(){
  $("#fa1").mouseenter(function(){
  $("#fa1i").css({"opacity":".2","background-color":"black"})
  $("#fa1h").show()
  $("#fa1p").show()
  $("#fa1h").css({"opacity":"1","color":"black"})
  $("#fa1p").css({"opacity":"1","color":"black"})
  });

  $("#fa1").mouseleave(function(){
  $("#fa1i").fadeTo("fast", 1);
  $("#fa1h").hide()
  $("#fa1p").hide()
  });
});

$(document).ready(function(){
  $("#fa2").mouseenter(function(){
  $("#fa2i").css({"opacity":".2","background-color":"black"})
  $("#fa2h").show()
  $("#fa2p").show()
  $("#fa2h").css({"opacity":"1","color":"black"})
  $("#fa2p").css({"opacity":"1","color":"black"})
  });

  $("#fa2").mouseleave(function(){
  $("#fa2i").fadeTo("fast", 1);
  $("#fa2h").hide()
  $("#fa2p").hide()
  });
});

$(document).ready(function(){
  $("#fa3").mouseenter(function(){
  $("#fa3i").css({"opacity":".2","background-color":"black"})
  $("#fa3h").show()
  $("#fa3p").show()
  $("#fa3h").css({"opacity":"1","color":"black"})
  $("#fa3p").css({"opacity":"1","color":"black"})
  });

  $("#fa3").mouseleave(function(){
  $("#fa3i").fadeTo("fast", 1);
  $("#fa3h").hide()
  $("#fa3p").hide()
  });
});


$(document).ready(function(){
  $("#fa4").mouseenter(function(){
  $("#fa4i").css({"opacity":".2","background-color":"black"})
  $("#fa4h").show()
  $("#fa4p").show()
  $("#fa4h").css({"opacity":"1","color":"black"})
  $("#fa4p").css({"opacity":"1","color":"black"})
  });

  $("#fa4").mouseleave(function(){
  $("#fa4i").fadeTo("fast", 1);
  $("#fa4h").hide()
  $("#fa4p").hide()
  });
});


$(document).ready(function(){
  $("#fa5").mouseenter(function(){
  $("#fa5i").css({"opacity":".2","background-color":"black"})
  $("#fa5h").show()
  $("#fa5p").show()
  $("#fa5h").css({"opacity":"1","color":"black"})
  $("#fa5p").css({"opacity":"1","color":"black"})
  });

  $("#fa5").mouseleave(function(){
  $("#fa5i").fadeTo("fast", 1);
  $("#fa5h").hide()
  $("#fa5p").hide()
  });
});



$(document).ready(function(){
  $("#fa6").mouseenter(function(){
  $("#fa6i").css({"opacity":".2","background-color":"black"})
  $("#fa6h").show()
  $("#fa6p").show()
  $("#fa6h").css({"opacity":"1","color":"black"})
  $("#fa6p").css({"opacity":"1","color":"black"})
  });

  $("#fa6").mouseleave(function(){
  $("#fa6i").fadeTo("fast", 1);
  $("#fa6h").hide()
  $("#fa6p").hide()
  });
});

$(document).ready(function(){
  $("#nav2").mouseenter(function(){

  });

});
