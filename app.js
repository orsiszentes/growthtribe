$('#navigation').on('click', function(evt){
  evt.preventDefault();
  var gotoSection = evt.target.dataset.scrollto;
  var scrollPos = document.querySelector('#'+ gotoSection).offsetTop;
  $('html,body').animate({scrollTop: scrollPos },1000,'linear');
  
});