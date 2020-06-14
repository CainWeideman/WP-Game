<?php
if (isset($_POST['name'])) {
    // Read articles
    $json_file = file_get_contents("../data/data.json");
    $data = json_decode($json_file, true);
    $selectOption = $_POST['select-font'];


    if($data[2]['count'] === "1") {
        $data[0]['name'] = $_POST['name'];
        $data[2]['count'] = "2";
        $data[0]['wins'] = 0;
        $data[0]['losses'] = 0;
        $data[0]['draws'] = 0;
        $data[1]['wins'] = 0;
        $data[1]['losses'] = 0;
        $data[1]['draws'] = 0;
        if ($selectOption === 'modern') {
            $data[0]["font"] = "'Pangolin', cursive";
        } else if ($selectOption === 'retro') {
            $data[0]["font"] = "'Press Start 2P', cursive";
        }
    }

    else {
        $data[1]['name'] = $_POST['name'];
        $data[2]['count'] = "1";
        $data[1]['wins'] = 0;
        $data[1]['losses'] = 0;
        $data[1]['draws'] = 0;
        $data[0]['wins'] = 0;
        $data[0]['losses'] = 0;
        $data[0]['draws'] = 0;
        if ($selectOption === 'modern') {
            $data[1]["font"] = "'Pangolin', cursive";
        } else if ($selectOption === 'retro') {
            $data[1]["font"] = "'Press Start 2P', cursive";
        }
    }


    // Save to external file
    $json_file = fopen('../data/data.json', 'w');
    fwrite($json_file, json_encode($data));
    fclose($json_file);
    // Redirect to homepage
    header("Location: ../gamescreen.php");
    die();
}
?>