$("document").ready(function(){
	  $('.modal-trigger').leanModal({
	      dismissible: true, 
	      opacity: .5,
	      in_duration: 300, 
	      out_duration: 200, 
	      starting_top: '4%', 
	      ending_top: '10%', 
	    }
	  );
});




var options = [
    {selector: '.products', offset: 50, callback: function(el) {
      Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#staggered-test', offset: 205, callback: function(el) {
      Materialize.toast("Please continue scrolling!", 1500 );
    } },
    {selector: '#staggered-test', offset: 400, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#image-test', offset: 500, callback: function(el) {
      Materialize.fadeInImage($(el));
    } }
  ];
  Materialize.scrollFire(options);

