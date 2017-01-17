$(".btn.btn-dark").click(function(e){
  e.preventDefault();
  $("#page1")[0].style.display = "none";
  $("#page2")[0].style.display = "block";
});
