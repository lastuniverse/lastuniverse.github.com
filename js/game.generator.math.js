function distance(x,y,obj){
	var dx=Math.abs(x-obj.x);
	var dy=Math.abs(y-obj.y);
	if( dx > (world.geo.width>>1) ){ dx = world.geo.width - dx; } 
	//if( dy > (world.geo.height>>1) ){ dy = world.geo.height - dy; }
	var d=0;
	//if( obj.d==0 ){
	//	d = Math.sqrt(dx*dx+dy*dy);
	//}else{
		d = dx+dy;
	//}
	return d;
}

function relief(dist,obj){
	if( dist<obj.r ){
    		var r = obj.r-dist;
    		return r;
  }else{
    return 0;
  }
}
