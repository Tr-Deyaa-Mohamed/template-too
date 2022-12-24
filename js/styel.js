let number = document.getElementById("number");
let counter = 0;
setInterval(()=>{
  if(counter == 100){
    clearInterval();
  }else {
    counter += 1;
    number.innerHTML = counter +'%';
  }
}, 18);


// tabs images //
$(document).ready(function()
{
  $("#my-tabs li").click(function ()
  {

    var myID = $(this).attr("id");

    $(this).removeClass("inactive").siblings().addClass("inactive");

    $(".my-Container div").hide();

    $("#" + myID + "-content").fadein("1000"); 
  });
  
});
