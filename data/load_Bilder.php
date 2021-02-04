<?php
    header('Content-Type: application/json');   
    $out = "[";
    $dir = "./faecher/".$_GET["fach"]."/Bilder";
    $scan = scandir($dir );
    foreach($scan as $file) {
       if (!is_dir($dir.$file)) {
         $out .= "\"". $file . "\",";
       }
    }
    $out = substr($out, 0, -1);
    $out .= "]";
    echo $out;
?>