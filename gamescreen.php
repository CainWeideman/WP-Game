<?php
/* Header */
$page_title = 'Tic-tac-toe';

include __DIR__ . '/tpl/head.php';

include __DIR__ . '/tpl/body-start.php';
?>
<h1 id="header">Tic-Tac-Toe</h1>
<div id="content">
    <div id="board">
        <div id="sq" class="square"></div>
        <div id="sq" class="square"></div>
        <div id="sq" class="square"></div>
        <div class="clr"></div>
        <div id="sq" class="square"></div>
        <div id="sq" class="square"></div>
        <div id="sq" class="square"></div>
        <div class="clr"></div>
        <div id="sq" class="square"></div>
        <div id="sq" class="square"></div>
        <div id="sq" class="square"></div>
        <div class="clr"></div>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body-end.php';
?>
