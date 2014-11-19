$(function(){
    var time = true;
    setInterval(function(){
        if(time){
            $("#dumb_block1").removeClass("redblock yellowblock").addClass("yellowblock");
            $("#dumb_block2").removeClass("yellowblock redblock").addClass("redblock");
            time = false;
        }
        else {
            $("#dumb_block1").removeClass("redblock yellowblock").addClass("redblock");
            $("#dumb_block2").removeClass("yellowblock redblock").addClass("yellowblock");
            time = true;
        }
    }, 3000);
});