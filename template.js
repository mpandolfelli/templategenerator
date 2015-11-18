var template = (function() {
  var pathLoad;
  var newHtml;

  return {
    setPath: function(path){
      pathLoad = path;
      console.log('Path to load: '+path);
    },
    load: function(template, target, data, callback){
    	var dataToReplace = data.data;
       	$.ajax({
		  url: pathLoad+template,
		  method: "GET",
		  crossDomain : true,
		  //data: { name : name },
		  dataType: "html"
		}).success(function(html) {
			
			//recorro el objecto data y reemplazo la info por los tags
			newHtml = html;
			for(var index in dataToReplace) { 
				
				//console.log('replace '+ index + ' to '+dataToReplace[index]);
				if(dataToReplace.hasOwnProperty(index)){

					var tag = '<%'+index+'%>';
					var regex = new RegExp(tag);
					newHtml = newHtml.replace(regex, dataToReplace[index]);
									  
				} 
			}


		    
			//muestro el html en donde corresponda
			$(target).html(newHtml);

			//eecuto el callback
			callback;
		}).fail(function() {
			console.log("Hubo un error al cargar el template: " + template );
		});
    },
    each: function(template, target, data, callback){
    	
    	var dataToReplace = data.data;
       	$.ajax({
		  url: pathLoad+template,
		  method: "GET",
		  crossDomain : true,
		  //data: { name : name },
		  dataType: "html"
		}).success(function(html) {
			
			//recorro el objecto data y reemplazo la info por los tags
			newHtml = html;
			for(var index in dataToReplace) { 
				
				//console.log('replace '+ index + ' to '+dataToReplace[index]);
				if(dataToReplace.hasOwnProperty(index)){

					var tag = '<%'+index+'%>';
					var regex = new RegExp(tag, "g");
					console.log('index '+regex+' - ');
					newHtml = newHtml.replace(regex, dataToReplace[index]);
									  
				} 
			}
			//muestro el html en donde corresponda
			$(target).append(newHtml);

			//eecuto el callback
			callback;
		}).fail(function() {
			console.log("Hubo un error al cargar el template: " + template );
		});
    }
  };
})();