$(document).ready(function(){
	var $grid = $('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: 160,
	  stagger: 30,
	});

	$grid.on( 'click', '.grid-item', function() {
	  // change size of item via class
	  $( this ).toggleClass('grid-item--gigante');
	  // trigger layout
	  $grid.masonry();
	});

	$(".likes").click(function() {
		var id = $(this).attr('data-id');
        $.ajax({
            type: 'PATCH',
            url: "/api/recipes/" + id
        }).catch(function(err) {
            console.log(err);
        }).done(function(response) {
            console.log(response);
            $("#increment").html("Likes: "+response.likes)
        })
    })

});

