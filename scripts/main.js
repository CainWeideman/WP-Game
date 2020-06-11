function change_page() {
    $(".btn-primary").click( function () {
        window.location.href = "gamescreen.php";
    })
}

function draw() {
    let cross = document.createElement('DIV');
    let X = document.createElement('SPAN');
    $(X).text('X');
    $(X).attr('class', 'X-mark');
    let circle = document.createElement('DIV');
    let O = document.createElement('SPAN');
    $(O).text('O');
    $(O).attr('class', 'O-mark');
    $('.square').click(function () {
        if (document.getElementById("playerturn").value === "2"){
            $(cross).append(X);
            $(this).append(cross);
            document.getElementById("playerturn").value = "1";
        }
        else{
            $(circle).append(O);
            $(this).append(circle);
            document.getElementById("playerturn").value = "2";
        }
    })
}


$(function(){
    change_page();
    draw();
});

