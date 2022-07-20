$(document).ready(function() {
	var formatDate = function () {
		var date = new Date();
		var dd = date.getDate();
		if (dd < 10) dd = '0' + dd;
	
		var mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;
	
		var yyyy = date.getFullYear();
		return dd + '.' + mm + '.' + yyyy;
	};
	var showImagesAndDate = function () {
		var imageLength = document.getElementById('gallery-wrapper').getElementsByClassName('img').length;
		var h1 = document.createElement('h1');
		
		document.body.insertBefore(h1, document.getElementById('gallery-wrapper'));

		h1.innerHTML = imageLength + ' фото <br>  ' + formatDate();
	};
	
	showImagesAndDate();
	(function () {
		$('.img').click(function() {
			var newHtml = $(this).parent().html();
			$('#wrapper').css('display','block');
			$('.close').css('display','block');
			$('#full-image').css('display','block').html(newHtml);
			$('#full-image > .delete').remove();
		});

		$('#wrapper').click(function() {
			$('#wrapper').css('display','none');
			$('.close').css('display','none');
			$('#full-image').css('display','none');
		});

		$('.close').click(function() {
			$('#wrapper').css('display','none');
			$('.close').css('display','none');
			$('#full-image').css('display','none');
		});
	})();
	$('.delete').click(function() {
		var item = $(this).siblings();
		item.css('visibility', 'hidden');
		$(this).css('visibility', 'hidden');

		var imageLength = document.getElementById('gallery-wrapper').getElementsByClassName('img').length;
		var image = $(this).parent();
		var images = [];

		images.push(image);
		var i;
		for (i = 0; i < images.length; i++) {
			var currentImage = 'image'+(i+1)+'';
			localStorage.setItem(currentImage, item);
			console.log(currentImage);
		}
	});
	$('.restore').click(function() {
		$('*').css('visibility', 'visible');
	});

});
