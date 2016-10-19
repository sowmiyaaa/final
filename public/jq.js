
	$(document).ready(function(){

	$.get("/jsondata",function(data){
		console.log(data);
		data.forEach(function(value,key){
			$("#adv").append('\<div class="bord">\
				<div class="col-xs-1"></div>\
		<div class="cont col-xs-10">\
			<h2>'+value.title+'</h2>\
			<img class="img-responsive blog_img" src= "'+value.img+'">\
			<p class="content pull-left">'+value.des+'</p>\
			<div class="bottom_data">\
			<span class="author pull-left">author : '+value.an+'</span>\
			<span class="date pull-right">Date : '+value.doc+'</span>\
			</div>\
		</div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
	</div>');

		})
	

	


	
		data.forEach(function(value,key){
			$("#editing").append('\<div class="bord">\
				<div class="col-xs-1"></div>\
		<div class="cont col-xs-10">\
		<a href="#" class="pull-right edit glyphicon glyphicon-edit">Edit</a>\
			<h2>'+value.title+'</h2>\
			<img class="img-responsive blog_img" src= "'+value.img+'">\
			<p class="edit_blog pull-left">'+value.des+'</p>\
			<div class="bottom_data">\
			<span class="author pull-left">author : '+value.an+'</span>\
			<span class="date pull-right">Date : '+value.doc+'</span>\
			</div>\
		</div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
	</div>');

		})
	})

$( document ).on( 'click', '.edit', function() {
   document.getElementById("editing").contentEditable = true;
});
$("#save").click(function(){
document.getElementById("editing").contentEditable = false;
})
});
