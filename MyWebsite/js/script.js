$(document).ready(function(){
	
	//fadein animation on page load
    $(".fa")           .hide(0).delay(0)    .fadeIn(1000);
	$(".line1")        .hide(0).delay(1000) .toggle("slide");
	$(".line2")        .hide(0).delay(1000) .toggle("slide");
	$("#mainImage")    .hide(0).delay(1300) .fadeIn(2000);
	$(".options")      .hide(0).delay(1500) .fadeIn(2000);
	$("#skillsWrapper").hide(0).delay(1700) .fadeIn(2500);
	
	//changes navigation color on hover
	$('.options').hover( function(){
      $(this).css('background-color', 'white');
	  $(this).css('color', 'black');
   }, function(){
      $(this).css('background-color', 'black');
	  $(this).css('color', 'white');	  
   }
);
	
	
	
});