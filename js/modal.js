 function closembox(){
     // get the image to show selected image
     var i = document.getElementById('imgInp');
            
     // get the modal div that covers the screen
     var b = document.getElementById('mbox');
            
     // hide the box
     b.style.display = "none";
            
     //remove image data from image tag
     document.getElementById('cropbox').src = ""; 

     // remove jcrop from image
     jQuery('#cropbox').data('Jcrop').destroy();
     
     //reset image width and height
     $('#cropbox').css('max-height', 'none');
     $('#cropbox').css('max-width', 'none');
     $('#cropbox').css('height', '0px');
     $('#cropbox').css('width', '0px');
 }
        
function shwimg(){
    // get the image to show selected image
    var i = document.getElementById('imgInp');
            
    // get the modal div that covers the screen
    var b = document.getElementById('mbox');
            
    //get the span element that closes the modal
    // not using this line here
    // var span = document.getElementsByClassName("close")[0];
                    
    //show the modal 
    b.style.display = "block";
    
    //reset image width and height
     $('#cropbox').css('max-height', '540px');
     $('#cropbox').css('max-width', '540px');
     $('#cropbox').css('height', 'auto');
     $('#cropbox').css('width', 'auto');
            
    //
    var filetoload = $("#imgInp")[0];
            
    // initiate the file reader object
    var reader = new FileReader();
    // read the contents of image file
    reader.readAsDataURL(filetoload.files[0]);
    reader.onload = function(e){
        // set the image source
        var srcs = e.target.result;
        
        jQuery('#cropbox').attr('src', srcs);
                
        // try to add result to another input
        jQuery('#imgurl').val(e.target.result);
    }
            // another way to get the source of a file
            //=======================================//
            //display selected image into the image tag
            //document.getElementById('thepicture').src = window.URL.createObjectURL(i.files[0]);
}