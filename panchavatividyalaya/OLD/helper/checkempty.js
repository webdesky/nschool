module.exports=function(obj){
	for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
	return true;
}