<?php
/* Header */
$page_title = 'Tic-tac-toe';

include __DIR__ . '/tpl/head.php';

include __DIR__ . '/tpl/body-start.php';
?>
<?php

?>
<div class="row center">
    <h1 id="index-header">Welcome to Tic-Tac-Toe!</h1>
</div>

    <form action="scripts/add_name.php" method="POST">
        <div class="form-group">
            <label id="name-label" for="name">Please enter your name:</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" required>
        </div>
        <div class="form-group">
            <label for="select-font">Choose your font:</label>
            <select id="select-font" name="select-font">
                <option value="retro">Retro</option>
                <option value="modern">Modern</option>
            </select>
        </div>
        <button type="submit" id="submit" class="button"><span>Submit </span></button>
    </form>
<?php
include __DIR__ . '/tpl/body-end.php';
?>
<footer>
    <ul>
        <li><p id="made-header">Made by: </p></li>
        <li><p class="made-name">Stijn van Straaten</p></li>
        <li><p class="made-name">Robin Elting</p></li>
        <li><p class="made-name">Thijs Brekhof</p></li>
        <li><p class="made-name">Cain Weideman</p></li>
    </ul>
</footer>
