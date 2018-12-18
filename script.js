$('button').on('click', function(e) {
	e.preventDefault();
	var namespergroup = parseInt($('.pergroup').val()),
		allnames = $('textarea').val().split('\n'),
		allnameslen = allnames.length;

	var numgroups = Math.ceil(allnameslen / namespergroup);
	
	if($('.numgroups').val()){
		numgroups = parseInt($('.numgroups').val());
		namespergroup = allnameslen / numgroups;
	}

	$('.groups').empty();

	for (i = 0; i < numgroups; i++) {
		$('.groups').append('<div class="group" id="group' + (i+1) + '"><h2>Group ' + (i+1) + '</h2></div>');
	}

	$('.group').each(function() {
		for (j = 0; j < namespergroup; j++) {
			var randname = Math.floor(Math.random() * allnames.length);
			if(allnames[randname]){
				$(this).append('<p>' + allnames[randname] + '</p>');
			}
			allnames.splice(randname, 1);
			console.log(allnames);
		}
	});
});

$('.toggle-wrap a').on('click', function(e){
	e.preventDefault();
	$('.wrap').toggleClass('alt');
	$('.pergroup-wrap, .numgroups-wrap').find('input').val('');
});