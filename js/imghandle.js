//$(function (){
//    
//	var w, h;
//	// get reference of input for image
//	var filetoload = $("#imgInp")[0];
//	// check if html5 is supported
//	if(typeof(filetoload.files) != "undefined"){
//        
//		// initiate the file reader object
//		var reader = new FileReader();
//		// read the contents of image file
//		reader.readAsDataURL(filetoload.files[0]);
//		reader.onload = function(e){
//            
//            // set the image source
//            $('#cropbox').attr('src', e.target.result);
//            
//			// try to add result to another input
//			$('#imgurl').val(e.target.result);
//
//            $('#cropbox').onload = function(){
//                h = $('#cropbox').height;
//                w = $('#cropbox').width; 
//                
//                $('#cropbox').Jcrop({
//				aspectRatio:1,
//				trueSize:[h, w],
//				boxWidth: 450, boxHeight: 450,
//				onSelect: updateCoords});
//            }
//		}
//	}
//});
//jQuery function to make image cropable
function tryCrop(){
    var img = document.getElementById('cropbox');
 
    $('#cropbox').Jcrop({
            aspectRatio:0, // use 1 for square
            trueSize:[img.width, img.height],
            // boxWidth: 540, boxHeight: 540,
            onSelect: updateCoords});
            
}

// the doCrop function is too technical and repetitive hence, is not advised
function doCrop(){
    var h, w;
    // get reference of input for image
	var filetoload = $("#imgInp")[0];
    
    // initiate the file reader object
	var reader = new FileReader();

    // read the contents of image file
	reader.readAsDataURL(filetoload.files[0]);
    reader.onload = function(e){
        var idata = e.target.result;
        
        $('#cropbox').onload = function(){
//            h = $('#cropbox').height;
//            w = $('#cropbox').width;
            
            //alternative
            h = idata.height;
            w = idata.width; 
        $('#cropbox').Jcrop({
            aspectRatio:0, //use 1 for square
            trueSize:[h, w],
            // boxWidth: 450, boxHeight: 450,
            onSelect: updateCoords});
            
            alert('data : ' + w + ", " + h);
        }
    }
}


function updateCoords(c){
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
}

function checkCoords(){
    if(parseInt($('#w').val())) return true;
    alert('Select where you want to crop.');
    return false;
}

function indicate(){
    alert('onloadeddata occured');
}
