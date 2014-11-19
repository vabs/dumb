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

    $("#send_to_dumb").click(function(){
        var dumb_link = (new Date().getTime()).toString(30);
        window.location.href = window.location.href + dumb_link;
    });

    $("div.dumber-img").hover(function(){
        moveDumbElement($(this));
    }, function(){
        moveDumbElement($(this));
    });
});

function moveDumbElement(elem){
    if(Math.round(Math.random()*100) %2 == 0)
        $(elem).css("top", getRandomArbitrary(10,60)+"%");
    else
        $(elem).css("left", getRandomArbitrary(10, 70)+"%");
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}