<?php
    if (!empty($_REQUEST["action"]) && $_REQUEST["action"] == "save" && !empty($_REQUEST["elem"])){
        $data = json_decode(file_get_contents("data.json"), true);
        $data[0]["items"][] = $_REQUEST["elem"];
        file_put_contents("data.json", json_encode($data));
    }
?>
