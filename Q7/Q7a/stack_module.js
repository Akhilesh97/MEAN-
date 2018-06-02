'use Strict';
	stack = new Array()
 	function pop(){
		return stack.pop()
	}
	function push(item){
		stack.push(item)
	}

module.exports = {pop:pop,push:push }
