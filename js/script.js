var PRIV_KEY="b61e566ac628197d79e4cf128536db3df2edb230"
var PUBLIC_KEY="d648afc6ecaab876fb0c448e1242ec0e"

function getMarvelResponse(){
	$('#result').html("");
	var ts = new Date().getTime();
	var hash = md5(ts+PRIV_KEY+PUBLIC_KEY).toString();
	var url = 'https://gateway.marvel.com:443/v1/public/comics';
	var titleStartsWith = document.getElementById("name").value;
	//var startYear = $('#startYear').val();
	var startYear = document.getElementById("startYear").value;
	var format = document.getElementById("format").value;
	// var format=$("#select option:selected").val();
	var url_Character = 'https://gateway.marvel.com:443/v1/public/characters';

	$.getJSON(url,{
		ts:ts,
		apikey:PUBLIC_KEY,
		hash:hash,
		limit:100,
		titleStartsWith:titleStartsWith,
		startYear:startYear,
		format:format
	})
	.done(function(data){
			console.log(data);
			var sumCount=data.data.count;
			var pageCount=Math.ceil(sumCount/10);

		    if (sumCount>=10){
				for (var i = 0;i<10;i++){
				var imgObj = new Image();
				var counti = i+1;
		    imgObj.src = data.data.results[i].thumbnail.path + ".jpg"
				$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>'+'<p>'+data.data.results[i].characters.items[0].name+'</p>')

				console.log(data.data.results[i].characters.items[0]);
				}
		    }
		    else{
				for (var i = 0;i<sumCount;i++){
				var imgObj = new Image();
				var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
				$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>'+'<p>'+data.data.results[i].characters[0]+'</p>')
			}
		    }
	})
	.fail(function(err){
		console.log(err);
	});
	
};

function page2(){
	$('#result').html("");
	var ts = new Date().getTime();
	var hash = md5(ts+PRIV_KEY+PUBLIC_KEY).toString();
	var url = 'https://gateway.marvel.com:443/v1/public/comics';
	var titleStartsWith = document.getElementById("name").value;
	//var startYear = $('#startYear').val();
	var startYear = document.getElementById("startYear").value;
	// var format = document.getElementById("format").value;
	// var format=$("#select option:selected").val();

	$.getJSON(url,{
		ts:ts,
		apikey:PUBLIC_KEY,
		hash:hash,
		limit:100,
		titleStartsWith:titleStartsWith,
		startYear:startYear
		// format:format
	})
	.done(function(data){
			console.log(data);
			var sumCount=data.data.count;
			var pageCount=Math.ceil(sumCount/10);

		    if(sumCount>=20){
			for (var i = 10;i<20;i++){
			var imgObj = new Image();
			var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
			$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>')
			}}
			if(sumCount<20 && sumCount>10){
				for (var i = 10;i<sumCount;i++){
				var imgObj = new Image();
				var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
				$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>')
			}
}
})
	.fail(function(err){
		console.log(err);
	});
	
};

function page3(){
	$('#result').html("");
	var ts = new Date().getTime();
	var hash = md5(ts+PRIV_KEY+PUBLIC_KEY).toString();
	var url = 'https://gateway.marvel.com:443/v1/public/comics';
	var titleStartsWith = document.getElementById("name").value;
	//var startYear = $('#startYear').val();
	var startYear = document.getElementById("startYear").value;
	// var format = document.getElementById("format").value;
	// var format=$("#select option:selected").val();

	$.getJSON(url,{
		ts:ts,
		apikey:PUBLIC_KEY,
		hash:hash,
		limit:100,
		titleStartsWith:titleStartsWith,
		startYear:startYear
		// format:format
	})
	.done(function(data){
			console.log(data);
			var sumCount=data.data.count;
			var pageCount=Math.ceil(sumCount/10);

		    if(sumCount>=30){
			for (var i = 20;i<30;i++){
			var imgObj = new Image();
			var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
			$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>')
			}}
			if(sumCount<30 && sumCount>20){
				for (var i = 20;i<sumCount;i++){
				var imgObj = new Image();
				var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
				$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>')
			}
}
})
	.fail(function(err){
		console.log(err);
	});
	
};

function page4(){
	$('#result').html("");
	var ts = new Date().getTime();
	var hash = md5(ts+PRIV_KEY+PUBLIC_KEY).toString();
	var url = 'https://gateway.marvel.com:443/v1/public/comics';
	var titleStartsWith = document.getElementById("name").value;
	//var startYear = $('#startYear').val();
	var startYear = document.getElementById("startYear").value;
	// var format = document.getElementById("format").value;
	// var format=$("#select option:selected").val();

	$.getJSON(url,{
		ts:ts,
		apikey:PUBLIC_KEY,
		hash:hash,
		limit:100,
		titleStartsWith:titleStartsWith,
		startYear:startYear
		// format:format
	})
	.done(function(data){
			console.log(data);
			var sumCount=data.data.count;
			var pageCount=Math.ceil(sumCount/10);

		    if(sumCount>=40){
			for (var i = 30;i<40;i++){
			var imgObj = new Image();
			var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
			$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>')
			}}
			if(sumCount<40 && sumCount>30){
				for (var i = 30;i<sumCount;i++){
				var imgObj = new Image();
				var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
				$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>')
			}
}
})
	.fail(function(err){
		console.log(err);
	});
	
};

function page5(){
	$('#result').html("");
	var ts = new Date().getTime();
	var hash = md5(ts+PRIV_KEY+PUBLIC_KEY).toString();
	var url = 'https://gateway.marvel.com:443/v1/public/comics';
	var titleStartsWith = document.getElementById("name").value;
	//var startYear = $('#startYear').val();
	var startYear = document.getElementById("startYear").value;
	// var format = document.getElementById("format").value;
	// var format=$("#select option:selected").val();

	$.getJSON(url,{
		ts:ts,
		apikey:PUBLIC_KEY,
		hash:hash,
		limit:100,
		titleStartsWith:titleStartsWith,
		startYear:startYear
		// format:format
	})
	.done(function(data){
			console.log(data);
			var sumCount=data.data.count;
			var pageCount=Math.ceil(sumCount/10);

		    if(sumCount>=50){
			for (var i = 40;i<50;i++){
			var imgObj = new Image();
			var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
			$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>')
			}}
			if(sumCount<50 && sumCount>40){
				for (var i = 40;i<sumCount;i++){
				var imgObj = new Image();
				var counti = i+1;
		    // imgObj.src = data.data.results[i].thumbnail.path
				$('#result').append('<p>'+counti+'.'+data.data.results[i].title+'</p>')
			}
}
})
	.fail(function(err){
		console.log(err);
	});
	
};




