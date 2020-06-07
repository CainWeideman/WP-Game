function change_page() {
    $(".btn-primary").click( function () {
        window.location.href = "gamescreen.php";
    })
}

function draw_circle() {
    let circle = document.createElement('DIV');
    $(circle).addClass('circle');
    $('.square').click(function () {
        $(this).append(circle);
    })
}

$(function(){
    change_page();
    draw_circle();
});

