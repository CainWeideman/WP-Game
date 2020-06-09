function change_page() {
    $(".btn-primary").click( function () {
        window.location.href = "gamescreen.php";
    })
}

function draw_circle() {
    let circle = document.createElement('DIV');
    let O = document.createElement('SPAN');
    $(O).text('O');
    $(O).addClass('symbol');
    $(circle).append(O);
    $('.square').click(function () {
        $(this).append(circle);
    })
}

function draw_cross() {
    let cross = document.createElement('DIV');
    let X = document.createElement('SPAN');
    $(X).text('X');
    $(X).addClass('symbol');
    $(cross).append(X);
    $('.square').click(function () {
        $(this).append(cross);
    })
}


$(function(){
    change_page();
    draw_circle();
    //draw_cross();
});

