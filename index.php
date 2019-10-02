<?php include 'crop.php'; ?>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>FIS</title>
    
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.Jcrop.min.js"></script>
    <script src="js/jquery.Jcrop.js"></script>
    <link rel="stylesheet" href="css/jquery.Jcrop.css">
    <link rel="stylesheet" href="css/jquery.Jcrop.min.css">
    
    
    <script src="js/modal.js"></script>
    <script src="js/imghandle.js"></script>
    
    
    <link rel="stylesheet" href="css/style.css">

    
</head>
<body>
    
    <div class="container">
        
        <div class="wrap">
            <form class="form" id="form1" runat="server">
                <img src="<?=@$croppedUrl?>" alt="croppedUrl"><br>  
                <input class="form-control" type='file' id="imgInp" name="fileToUpload" onchange="shwimg()"/>
            </form>
        </div>        
        <div class="modalbg" id="mbox">
            <div class="modal">
                <div class="wrapper">
                    <span class="close" onclick="closembox()">&times;</span><span class="simple"> Drag Mouse Over Arear to Crop</span>
                    <div class="wrapper">
                        <center>
                        <div id="theparent">
                            <img id="cropbox" onload="tryCrop()">
                        </div>
                        </center>
                    </div>
                    <center>
            <form action="index.php" method="post" onsubmit="return checkCoords();">
            <input type="hidden" id="x" name="x" />
            <input type="hidden" id="y" name="y" />
            <input type="hidden" id="w" name="w" />
            <input type="hidden" id="h" name="h" />
            <input type="hidden" id="imgurl" name="imgurl"/>
            <input type="submit" value="Save Crop" />
            </form>
            
        </center>
                </div>
            </div>
        </div>
        
    </div>
</body>
</html>