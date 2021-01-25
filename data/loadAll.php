<?php
    header('Content-Type: application/json');   
    $out = "[";
    $scan = scandir('./faecher');
    foreach($scan as $file) {
       if (is_dir("./faecher/$file") && $file!="." && $file!="..") {
         $out .= "\"". $file . "\",";
       }
    }
    $out = substr($out, 0, -1);
    $out .= "]";
    echo $out;
?>