function change_page() {
    $(".btn-primary").click( function () {
        window.location.href = "gamescreen.php";
    })
}

function change_square() {
    $("#sq").click(function () {
        $(this).css("background-color", "red")
    })

}

$(function(){
    change_square()
    change_page()
});

