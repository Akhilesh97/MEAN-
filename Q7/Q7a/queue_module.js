 	stac=new Array();
	dequeue=function(){
		return stac.pop(); 
	}
	enqueue=function(item){
 		stac.unshift(item);
 	}

module.exports = {dequeue:dequeue,enqueue:enqueue}
