$(document).ready(function(){
   
    $(".navlinks li a").hover(
        function() {
            $(this).css("color", "#BAB1B1"); 
        },
        function() {
            $(this).css("color", "");
        }
    );
});


$("#myID").on("click", function(){
    console.log("You clicked on #myID");


});