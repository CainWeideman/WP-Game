<?php
/* Header */
$page_title = 'Tic-tac-toe';

include __DIR__ . '/tpl/head.php';

include __DIR__ . '/tpl/body-start.php';
?>
<?php
function p_print($array)
{
    echo "<pre>";
    print_r($array);
    echo "</pre>";
}

$json_file = file_get_contents("data/data.json");
$score = json_decode($json_file, true);
$score = array_reverse($score);
$score_board = "";

$score_board.= '<div class="container">';
$score_board.= '<div class="row header">';
$score_board.= '<h1>Tic-Tac-Toe</h1>';
$score_board.= '<div class="status-bar">';
$score_board.= '<div class="status col-md-4">';
$score_board.= '<h3>Name: ' . $score[0]["name"] . '</h3>';
$score_board.= '<p id="winsp1">Wins: ' . $score[0]["wins"] . '</p>';
$score_board.= '<p id="lossesp1">Losses: ' . $score[0]["losses"] . '</p>';
$score_board.= '<p id="drawsp1">Draws: ' . $score[0]["draws"] . '</p>';
$score_board.= '</div>';
$score_board.= '<div class="col-md-4"><h4>It is the turn of (PLAYERNAME)</h4>';
$score_board.= '</div>';
$score_board.= '<div class="status col-md-4">';
$score_board.= '<h3>Name: ' . $score[1]["name"] . '</h3>';
$score_board.= '<p id="winsp2">Wins: ' . $score[1]["wins"] . '</p>';
$score_board.= '<p id="lossesp2">Losses: ' . $score[1]["losses"] . '</p>';
$score_board.= '<p id="drawsp2">Draws: ' . $score[1]["draws"] . '</p>';
$score_board.= '</div>';
$score_board.= '</div>';
$score_board.= '</div>';
$score_board.= '</div>';

echo $score_board

?>

<div class="col-md-12">
    <div class="row">

<h1 id="header">Tic-Tac-Toe</h1>
<div class="form-group">
    <label for="playerturn">Player:</label>
    <input type="number" class="form-control" id="playerturn" name="playerturn" value='1'>
</div>
<div id="content">
    <div id="board">
        <div id="sq1" class="square"></div>
        <div id="sq2" class="square"></div>
        <div id="sq3" class="square"></div>
        <div class="clr"></div>
        <div id="sq4" class="square"></div>
        <div id="sq5" class="square"></div>
        <div id="sq6" class="square"></div>
        <div class="clr"></div>
        <div id="sq7" class="square"></div>
        <div id="sq8" class="square"></div>
        <div id="sq9" class="square"></div>
        <div class="clr"></div>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body-end.php';
?>
