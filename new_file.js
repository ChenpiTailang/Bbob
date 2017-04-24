Bmob.initialize('23ac308ea2aa7eddd168e0ec27de3903', 'e8f7ef6605f6b8247a5b2609c6ea0649');
		var GameScore = Bmob.Object.extend('GameScore');
    	var query = new Bmob.Query(GameScore);
    	query.find( {    
 			 success: function(object) {
	        	alert('成功');
	       },
      		error: function(object, error) {
       		 	alert('query object fail');
      		}
      		
    	});