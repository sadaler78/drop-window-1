$(".hide, section, footer").hide();

$(".show, .hide").on("click", function(){
    if($("section").hasClass("active")) {
        $(".show").show()
        $(".hide").hide()
        $("section").removeClass("active").stop().slideUp()
    } else {
        $(".show").hide()
        $(".hide").show()
        $("section").addClass("active").stop().slideDown() 
    }
})

$(".success").on("click", function(){
    $("footer").stop().slideToggle();
})