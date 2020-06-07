function change_page() {
    $(".btn-primary").click( function () {
        window.location.href = "gamescreen.php";
    })
}

function change_square() {
    $("#sq0").click(function () {
        $("#sq0").css("background-color", "red")
    })
}

$(function(){
    change_square()
    change_page()


});
