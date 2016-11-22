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
});