/**
 * Created by RongJie on 11/21/16.
 */
$(document).ready(function(){

    $(".pf-img").hover(
        function(){
       var readmore = $(this).find(".readmore-wrapper");
        readmore.animate({
            top:0,
            left:0,
        },500,"swing");}
            ,
            function(){
    var readmore = $(this).find(".readmore-wrapper");
    readmore.animate({
        top: 0,
        left: "999px",
    }, 500, "swing");
});


    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $("#sticker-header").fadeIn(500);
        }else{
            $("#sticker-header").fadeOut(500);
        }
    });

    $(window).scroll(function(){
        var top = $(document).scrollTop();
        var nav = $(".nav");
        var items =$("#content").find(".item");
        var currentId="";

        items.each(function(){
            var current = $(this);
            var itemTop= current.offset().top;
            if(top>itemTop-200){
                currentId = "#" + current.attr("id");
            }else{
                return false;
            }
        });

        var currentLink = nav.find(".current");
        if(currentId && currentLink.attr("href")!=currentId){
            currentLink.removeClass("current");
            nav.find("[href='"+currentId+"']").addClass("current");
        }
    });
});