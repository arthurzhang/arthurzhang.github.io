
//https://stackoverflow.com/questions/25368418/how-to-hide-one-section-of-the-page-and-show-the-other-section-when-a-heading-is
$(document).ready(function() {
  /*if(typeof pgsub[0] !== 'undefined' && pgsub[0] != null )
    $("#sub1").html(pgsub[0]);
  $("#txt1").html(pgtxt[0]?pgtxt[0]:'?');*/
  //$(".footer-container").hide();
  $("#sec").load('section0.html');
});
$("#nav1 li").click(function(e) {
  var i= $(this).index();
  var f= 'menu'+i+'.html';
  $("#sec").load(f);
  e.preventDefault();
});
$("#nav2 li").click(function(e) {
  console.log(e);
  var i= $(this).index();
  var f= 'section'+i+'.html';
  console.log(f);
  /*var s = pgsub[i];
  var t = pgtxt[i];
  console.log(i);
  console.log(s);
  console.log(t);
  if(s)
    $("#sub1").html(s);
  if(t)
    $("#txt1").html(t);*/
  $("#sec").load(f);
  e.preventDefault();
});
/*$(document).ready(function() {
  $("section").hide();
  $("#secabout").show();
});
$("a").click(function(){
  var id ='#sec'+$(this).attr('id');
  $("section").hide();
  $(id).show();
});*/
/*
function display_item(id) {
    $("#secabout").hide();
    $("#secinfo").hide();
    $("#$id").show();
}
$("#header-container").on('click','a',function(){//click on any h2 in container
     //hide all div's having section id starting with section_
   $("section[id^='sec']").hide();
    //show the div which has index position equal to the clicked h2 
  $($("section[id^='sec']")[$(this).index()]).show(); 
});


function update_section() {
   $("section[id^='sec']").hide();
    //show the div which has index position equal to the clicked h2 
  console.log($(this));
  //$($("section[id^='sec']")[$(this).index()]).show(); 
}
$("#menuabout").click(update_section);
$("#menuinfo").click(update_section);
$("#menucont").click(update_section);

$("#menuabout").click(function () {
  //display_item('secabout');
    $("#secabout").show();
    $("#secinfo").hide();
});
$("#menuinfo").click(function () {
  //display_item('secinfo');
    $("#secinfo").show();
    $("#secabout").hide();

});

*/