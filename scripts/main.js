function change_page() {
    $(".btn-primary").click( function () {
        window.location.href = "gamescreen.php";
    })
}

var playerturn = 'X';

function draw_circle() {
    if (playerturn === 'O') {
        let circle = document.createElement('DIV');
        let O = document.createElement('SPAN');
        $(O).text('O');
        $(O).attr('class', 'O-mark');
        $(circle).append(O);
        $('.square').click(function () {
            $(this).append(circle);
            playerturn = 'X';
        })
    }
}

function draw_cross() {
    if (playerturn === 'X'){
        let cross = document.createElement('DIV');
        let X = document.createElement('SPAN');
        $(X).text('X');
        $(X).attr('class', 'X-mark');
        $(cross).append(X);
        $('.square').click(function () {
            $(this).append(cross);
            playerturn = 'O';
        })
    }
}


$(function(){
    change_page();
    draw_circle();
    draw_cross();
});

