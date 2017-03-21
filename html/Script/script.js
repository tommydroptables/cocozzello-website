  
var imgHeight;
var imgWidth;
var document_height;

function findHHandWW() {
  imgWidth = this.width;
  header_height = $('header').height()
  imgHeight = this.height - header_height;
  document_height = $(document).height();
  adjust_background();
  return true;
}

function getImage(imgPath) {
  var myImage = new Image();
  myImage.name = imgPath;
  myImage.onload = findHHandWW;
  myImage.src = imgPath;
}

function adjust_background() {
  new_img_location = (document.body.scrollTop / document_height) * imgHeight;
  $('header').css('background-position', '50% -' + new_img_location + 'px');
}

getImage('images/background.jpg');

$(function(){
  var new_img_location;
  window.addEventListener("scroll", function() {
    adjust_background();
  });
});
