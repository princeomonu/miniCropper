<?php

    if (isset($_POST['imgurl'])) {

        // array of valid extensions
        $validExtensions = array('.jpg', '.jpeg', '.gif', '.png');

        $src = $_POST['imgurl'];

        $split = explode('/', $src);
        $mimeType = $split[1];
        
        if (strpos(strtolower($mimeType), 'png')!==false) {
            $newName = time() . '_' . '.png';
        } else {
            $newName = time() . '_' . '.jpg';
        }
        
        $destination = 'uploads/' . $newName;

        $targ_w = $_POST['w'];
        $targ_h = $_POST['h'];
            

        $jpeg_quality = 100;
        
        if (strpos(strtolower($mimeType), 'png')!==false) {
            $img_r = imagecreatefrompng($src);
        } else {
            $img_r = imagecreatefromjpeg($src);
        }
        
        $dst_r = imagecreatetruecolor($targ_w, $targ_h);

        imagecopyresampled($dst_r, $img_r, 0, 0, $_POST['x'], $_POST['y'], $targ_w, $targ_h, $_POST['w'], $_POST['h']);
    
        imagejpeg($dst_r, $destination, $jpeg_quality);

        $croppedUrl = $destination;
    }
