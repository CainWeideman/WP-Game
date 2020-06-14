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
            <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name">
        </div>
        <button type="submit" id="submit" class="button"><span>Submit </span></button>
    </form>

<?php
include __DIR__ . '/tpl/body-end.php';
?>