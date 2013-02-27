function point_generator(x,y){
	var point = {};
	point.x=x;
	point.x=y;
	point.day = world.maps.opts.day;
	point_height(x,y,point);
	if( world.vis.layers.temp.on==1 || world.vis.layers.ice.on==1 || world.vis.layers.seasons.on==1 || world.vis.layers.press.on==1 ){ 
		point_temperature(x,y,point.day,point);
	}
	if( world.vis.layers.press.on==1 ){ 
		point_pressure(x,y,point.day,point);
	}
	
	return point;	
}

function point_height(x,y,point){
	var height = {h:0, m:0};
	for(var i=0; i<world.gen.loops; i++){
		var sd = world.geo.degree-i;
		var sw = world.geo.width>>sd;
		var sh = world.geo.height>>sd;
		var csx = x>>sd;
		var csy = y>>sd;
		var obj_i = world.loops[i];
		for(var sy=-1; sy<2; sy++){
			var cy = csy+sy;
			if( cy >= 0 && cy < sh){
				var obj_y = obj_i[cy];
				for(var sx=-1; sx<2; sx++){
					var cx = csx+sx;
					if( i>0 ){
						if( cx<0 ){ cx=sw-1; }
						if( cx>sw-1 ){ cx=0; }
					}
					if( cx >= 0 && cx < sw){
						var obj_x = obj_y[cx];
						for(var n=0; n<world.gen.numbers; n++){
							var obj = obj_x[n];
							var dist = distance(x,y,obj.h);
							if( dist<obj.h.r ){ height.h+=relief(dist,obj.h); }
							//if( obj.hasOwnProperty('m') ){ //работает очень медленно заменено на 2 следующих if
							if( n < world.gen.mnts.numbers ){
							if( i>=world.gen.mnts.loopstart && i<=world.gen.mnts.loopend ){
								dist = distance(x,y,obj.m);
								if( dist<obj.m.r ){ height.m+=(relief(dist,obj.m)<<world.gen.mnts.multipler); }
							}}
						}
					}
				}
			}
		}
	}
	point_height_normalize(height,point);
	point.lh = point.h - world.lvls.water;
}

function point_height_normalize(height,point){
	height.h = height.h>>world.vis.hdivider;
	if( height.h>=world.lvls.water ){
		height.m = height.m<<1;
		height.h += height.m;
	}else{
		height.m = 0;
	}
	var mh = 65535;
	if( height.h<0 ){ height.h=0; }
	if( height.h>mh ){ height.h=mh; }
	point.h = height.h;
	point.m = height.m;
}
/*function point_pressure(x,y,d,p){
	// x, y - текущие координаты на карте
	// d - текущий день в игровом году (0-365)
	// p - объект содержащий результаты предидущих вычислений
	//p.x 	//текущие координаты на карте
	//p.x		//текущие координаты на карте
	//p.day 	//текущий день в игровом году (0-365)
	//p.h 	//вычисленная генератором высот высота высота в точке (0-65535 условных едениц)
	//p.lh   //вычисленная генератором высот высота высота над уровнем моря  в точке(0-65535 условных едениц)
	//p.t		//вычисленная генератором температур температура в точке (-70 +60 градусов цельсия)
	p.p = p.t*15 // сюда занести результат вычисления атмосферного давления в мм.рт.ст
}*/

//----- температура в секторе --------------------------------------------------//
function point_temperature(x,y,d,p){
	//var sw = 2<<world.maps.opts.divider;
	//var sh = 1<<world.maps.opts.divider;
	var sh = world.geo.height;
	//var ss = world.geo.height>>world.maps.opts.divider;
	var ss = 1;
	//var sd = world.geo.degree-world.maps.opts.divider;
	var sd = 0;
	
	var sx = x>>sd;
	var sy = y>>sd;

	var height = p.h;
	var wl = world.lvls.water;
	//var h = world.maps.height[sy][sx] - wl;
	var h = (height - wl)>>3;

	var st = 0;
	p.deviation = world.maps.opts.deviation * Math.cos(d*2*3.14/365);
	p.sun = (world.geo.height * (90+p.deviation))/180;
	if( h >= -100 ){
		var fo = p.deviation;
		var fomax = 90 + world.maps.opts.deviation;
		var dt = world.maps.opts.tempmax - world.maps.opts.tempmin;
		var fu = fo - (180*y/world.geo.height) + 90;
		var ft = world.maps.opts.tempmax - (Math.abs(fu)*dt/fomax);
		//var dt = ((h*60)>>world.maps.opts.thdivider);
		var dt = ((h*60)/(1<<world.maps.opts.thdivider));
		st = ft - dt;
	}else{
		for(var i=0; i<365; i+=20){
			var cd = d-365+i;
			if( cd<0 ){ cd+=365; }
			var fo = world.maps.opts.deviation * Math.cos(cd*2*3.14/365);
			var fomax = 90 + world.maps.opts.deviation;
			var dt = world.maps.opts.tempmax - world.maps.opts.tempmin;
			var fu = fo - (180*y/world.geo.height) + 90;
			var ft = world.maps.opts.tempmax - (Math.abs(fu)*dt/fomax);
			//var dt = ((-h*20)>>world.maps.opts.tddivider);
			//var dt = ((-h*20)/(1<<world.maps.opts.tddivider));
			//ft = (ft/2)+dt;
			if( i == 0 ){ st = ft; }
			var mt = (ft-st)*30/(-h);
			st += mt;
		}
	}
	/*
	if( h >= 0 ){
		//var dt = ((h*60)>>world.maps.opts.thdivider);
		var dt = ((h*60)/(1<<world.maps.opts.thdivider));
		ft = ft - dt;
	}else{
		//var dt = ((-h*20)>>world.maps.opts.tddivider);
		var dt = ((-h*20)/(1<<world.maps.opts.tddivider));
		//if( ft>5 ){
		//	ft = (ft>>1)-dt;
		//}else if( ft<5 ){
			//ft = (ft>>1)+dt;
			ft = (ft/2)+dt;
		//}
	}*/
	p.t = Math.floor(st);
}
//----- Генераторы учитывающие текущий рельеф ----------------------------------//
function height_map_create(){
	var sw = 2<<world.maps.opts.divider;
	var sh = 1<<world.maps.opts.divider;
	var sd = world.geo.degree-world.maps.opts.divider;
	var ss = world.geo.height>>world.maps.opts.divider;
	for( var y=0; y<sh; y++ ){
		var yy = y<<sd;
		for( var x=0; x<sw; x++ ){
			var xx = x<<sd;
			world.maps.height[y][x] = point_height(xx,yy);
		}
	}
	say("Сгенерированна карта высот\nколичество секторов по горизонтали: ["+sw+"]\nколичество секторов по вертикали: ["+sh+"]\nразмер сектора (метры): ["+ss+"]");
}

function temperature_map_create(d){
	var sw = 2<<world.maps.opts.divider;
	var sh = 1<<world.maps.opts.divider;
	var ss = world.geo.height>>world.maps.opts.divider;

	var fo = world.maps.opts.deviation * Math.cos(d*2*3.14/365);
	var fomax = 90 + world.maps.opts.deviation;
	var dt = world.maps.opts.tempmax - world.maps.opts.tempmin;
//Fo(D ) = U*cos(D*2*Pi/365)
//Fu(D,Ny) = Fo(D)+(180*Ny/128)-90
//Ft(D,Ny) = Tmax-abs(Fu(D,Ny))*(Tmax-Tmin)/(90+U)

	for( var y=0; y<sh; y++ ){
		say("ty:["+y+"]");
		var fu = fo + (180*y/sh) - 90;
		var ft = world.maps.opts.tempmax - Math.abs(fu) * dt / fomax;
		
		for( var x=0; x<sw; x++ ){
			//world.maps.height.mean[y][x]
			//world.maps.height.max[y][x]
			//world.maps.height.min[y][x]
			world.maps.temperature[y][x] = Math.floor(ft);
		}
	}
	say("Сгенерированна карта температур\nмаксимальная допустимая температура: ["+world.maps.opts.tempmax+"]\nминимальная допустимая температура: ["+world.maps.opts.tempmin+"]\nотклонение оси вращения мира (градусы): ["+world.maps.opts.deviation+"]");
}

//----- Рандомные генераторы ---------------------------------------------------//
function getPseudoRandom(wx,wy,offset,max){
	var x = Math.abs(Math.floor(wx+offset))%256;
	var y = Math.abs(Math.floor(wy))%256;
	var rnd=world.randoms[x][y];
	//var i = (offset+(num>>1))%256;
	//var j = num%256;
	//var rnd = world.randoms[i][j];
	return ((rnd*max)>>8);
}

function randomTablesGenerate(){
	for(i=0;i<257;i++){
		world.randoms[i]=[];
		for(j=0;j<257;j++){
			world.randoms[i][j]=Math.floor(Math.random()*256);
		}
	}
}
function height_randoms_generate(){
	worldInit();
	WorldMapsInit();
	var count = 0;
	for(var i=0; i<world.gen.loops; i++){
		world.loops[i] = [];
		var sector_size = world.geo.base>>i;
		var sector_divider = world.geo.degree-i;
		var sectors_w = world.geo.width>>sector_divider;
		var sectors_h = world.geo.height>>sector_divider;
		var size = (sector_size>>world.gen.divider);
		var height = world.gen.loops-i;
		for(var y=0; y<sectors_h; y++){
			world.loops[i][y] = [];
			var oy = y<<sector_divider;
		for(var x=0; x<sectors_w; x++){
			world.loops[i][y][x] = [];
			var ox = x<<sector_divider;
			for(var n=0; n<world.gen.numbers; n++){
				var obj = { h:{} };
				obj.h.x = ox + Math.floor( Math.random() * sector_size );
				obj.h.y = oy + Math.floor( Math.random() * sector_size );
				obj.h.r = Math.floor( Math.random() * (size>>1) ) + size>>1;
				obj.h.h = Math.floor( Math.random() * height );
				//obj.h.t = Math.floor( Math.random() * 2 );
				var v = Math.floor( Math.random() * 20 ) - 1;
				if( v < 0 ){ obj.h.h = -obj.h.h; }
				//obj.h.d = Math.floor( Math.random() * 2 );
				if( n < world.gen.mnts.numbers ){
					if( i>=world.gen.mnts.loopstart && i<=world.gen.mnts.loopend ){
						obj.m = {};
						obj.m.x = ox + Math.floor( Math.random() * sector_size );
						obj.m.y = oy + Math.floor( Math.random() * sector_size );
						obj.m.r = Math.floor( Math.random() * (size>>1) ) + size>>1;
					}
				}
				world.loops[i][y][x][n] = obj;
				count++;
			}
		}}
	}
	say("Сгенерированы данные для карты высот\nширина мира (метры): ["+world.geo.width+"]\nвысота мира (метры): ["+world.geo.height+"]");
}



function showRandomTables(){
	var str = JSON.stringify(world);
	var console = document.getElementById('edit_textarea');
	console.innerHTML = str;
}

 