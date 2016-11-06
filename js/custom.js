$(document).ready( function(){ if( ! $.browser.opera ) cstm() } ); function cstm(){

$('.img-big a, .previews a').each(function(){
	var lens = $(this);
	lens.colorbox({
		current : false
	});
});
	


	
	

}

if( $.browser.opera ){ window.onload = cstm }