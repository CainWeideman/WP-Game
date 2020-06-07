<?php
/* Header */
$page_title = 'Tic-tac-toe';

include __DIR__ . '/tpl/head.php';

include __DIR__ . '/tpl/body-start.php';
?>
<?php

?>

    <form action="index.php" method="POST">
        <div class="form-group">
            <label for="input-name">Your name:</label>
            <input type="text" class="form-control" id="input-name" placeholder="Enter your name" name="name">
        </div>
        <div class="form-group">
        </div>
        <div id="submit" class="btn btn-primary">Submit</div>
    </form>
<?php
include __DIR__ . '/tpl/body-end.php';
?>