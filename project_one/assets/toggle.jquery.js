$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#button-off').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#letter-analysis").toggleClass("jordan");
        $(".large-letter-group h1").toggleClass("glow");
          $("#button-off").toggleClass("jordan");
        });
});

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#button-on').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#letter-analysis").toggleClass("jordan");
        $("#button-off").toggleClass("jordan");
          $("#button-on").toggleClass("jordan");
        $(".large-letter-group h1").toggleClass("glow");
        });
});
