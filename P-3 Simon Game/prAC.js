// $(document).ready(function(){
    //     $("h1").css("color","red");
    // });
    // $("h1").css("color","red"); 
    //  console.log($("h1").css("color"));

    /////////////////////////
// $(document).keypress(function(event){
//     $("h1").text(event.key );
    // console.log(event.key);
    // });
    //OR changing the text of h1 with the keypress using on
    $(document).on("keypress",function(event){
        $("h1").text(event.key);
    })
    ///////////////////////////// 
//changing the color of the h1 heading to purple when mouseover using on method
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});
//similarly we can do for click and many more events listed on mdn docs events 