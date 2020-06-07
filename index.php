<?php
/* Header */
$page_title = 'Tic-tac-toe';

include __DIR__ . '/tpl/head.php';

include __DIR__ . '/tpl/body-start.php';
?>
    <h1 id="header">Tic-Tac-Toe</h1>
    <div id="content">
        <div id="board">
            <div id="sq0" class="square"></div>
            <div id="sq1" class="square"></div>
            <div id="sq2" class="square"></div>
            <div class="clr"></div>
            <div id="sq3" class="square"></div>
            <div id="sq4" class="square"></div>
            <div id="sq5" class="square"></div>
            <div class="clr"></div>
            <div id="sq6" class="square"></div>
            <div id="sq7" class="square"></div>
            <div id="sq8" class="square"></div>
            <div class="clr"></div>
        </div>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
?>