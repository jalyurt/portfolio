const backtotop = document.querySelector("#backtotop");
window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
  if (window.pageYOffset > 500){
    backtotop.style.display = "block";
  }else{
    backtotop.style.display = "none";
  }
}

backtotop.addEventListener("click", backtotopFunction);

function backtotopFunction(){
  window.scrollTo(0, 0);
}
