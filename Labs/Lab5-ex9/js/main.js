// JavaScript File
/* global $ */
$(document).ready(function(){
   $(".link").click(function(event){
       event.preventDefault();
       $("<div>").append("You cannot navigate from this site")
       .appendTo("#results");
   });
});

