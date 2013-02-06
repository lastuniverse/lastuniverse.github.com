function worldInit(){
	world.lvls.water = getIntValueById('waterlevel',0,65535);	
	world.lvls.sand = getIntValueById('sandlevel',0,65535);	
	world.lvls.stoun = getIntValueById('stounlevel',0,65535);	
	world.lvls.ice = getIntValueById('icelevel',0,65535);
	world.maps.opts.day = getIntValueById('day',0,365);
	world.maps.opts.thdivider = getIntValueById('thdivider',0,20);
	world.maps.opts.tddivider = getIntValueById('tddivider',0,20);
	
	world.vis.layers.map.on = getCheckedById('map_check');
	world.vis.layers.map.alpha = getIntValueById('a_map_check',0,255);	

	world.vis.layers.temp.on = getCheckedById('temp_check');
	world.vis.layers.temp.alpha = getIntValueById('a_temp_check',0,255);
	
	world.vis.layers.press.on = getCheckedById('press_check');
	world.vis.layers.press.alpha = getIntValueById('a_press_check',0,255);	

	world.vis.layers.ice.on = getCheckedById('ice_check');
	world.vis.layers.ice.alpha = getIntValueById('a_ice_check',0,255);	
	
	world.vis.layers.seasons.on = getCheckedById('seasons_check');
	world.vis.layers.seasons.alpha = getIntValueById('a_seasons_check',0,255);

	world.vis.layers.addsh.on = getCheckedById('addsh_check');
	world.vis.layers.addsh.alpha = getIntValueById('a_addsh_check',0,255);

	world.gen.loops = getIntValueById('loops',1,8);
	world.gen.numbers = getIntValueById('numbers',1,20);
	world.gen.divider = getIntValueById('divider',0,10);

	world.vis.hdivider = getIntValueById('hdivider',0,256);
	world.geo.degree = getIntValueById('degree',world.gen.loops+1,25);
	world.geo.base = 2<<(world.geo.degree-1);
	world.geo.height = world.geo.base;
	world.geo.width = world.geo.height<<1;
	setValueById('base',world.geo.base);
	setValueById('height',world.geo.height);
	setValueById('width',world.geo.width);
}

function worldRestore(){
	setValueById('waterlevel',world.lvls.water);
	setValueById('sandlevel',world.lvls.sand);
	setValueById('stounlevel',world.lvls.stoun);
	setValueById('icelevel',world.lvls.ice);
	setValueById('day',world.maps.opts.day);
	setValueById('thdivider',world.maps.opts.thdivider);
	setValueById('tddivider',world.maps.opts.tddivider);

	setCheckedById('map_check',world.vis.layers.map.on);
	setValueById('a_map_check',world.vis.layers.map.alpha);
	setCheckedById('temp_check',world.vis.layers.temp.on);
	setValueById('a_temp_check',world.vis.layers.temp.alpha);
	setCheckedById('press_check',world.vis.layers.press.on);
	setValueById('a_press_check',world.vis.layers.press.alpha);

	setCheckedById('ice_check',world.vis.layers.ice.on);
	setValueById('a_ice_check',world.vis.layers.ice.alpha);
	setCheckedById('seasons_check',world.vis.layers.seasons.on);
	setValueById('a_seasons_check',world.vis.layers.seasons.alpha);
	setCheckedById('addsh_check',world.vis.layers.addsh.on);
	setValueById('a_addsh_check',world.vis.layers.addsh.alpha);

	setValueById('loops',world.gen.loops);
	setValueById('numbers',world.gen.numbers);
	setValueById('divider',world.gen.divider);


	setValueById('degree',world.geo.degree);
	setValueById('base',world.geo.base);
	setValueById('width',world.geo.width);
	setValueById('height',world.geo.height);
	setValueById('hdivider',world.vis.hdivider);
}

function WorldMapsInit(){
	var sw = 2<<world.maps.opts.divider;
	var sh = 1<<world.maps.opts.divider;
	for( var y=0; y<sw; y++ ){
		world.maps.height[y] = [];
		world.maps.temperature[y] = [];
		world.maps.wind.force[y] = [];
		world.maps.wind.direction[y] = [];
		for( var x=0; x<sw; x++ ){
			world.maps.height[y][x] = 0;
			world.maps.temperature[y][x] = 0;
			world.maps.wind.force[y][x] = 0;
			world.maps.wind.direction[y][x] = 0;
		}
	}
}

function geometryInit(){
	var geometry = {};
	geometry.elements = {game:{},map:{},canvas:{},edit:{},'text':{},console:{},inf:{},infcanvas:{}};

	geometry.window = {};
	geometry.window.width = getClientWidth();
	geometry.window.height = getClientHeight();
	
   geometry.elements.map = document.getElementById('map_container');
	geometry.elements.map.width = 500;
	geometry.elements.map.height = 250;
	geometry.elements.map.style.width = geometry.elements.map.width;
	geometry.elements.map.style.height = geometry.elements.map.height;
	geometry.elements.map.style.left = (geometry.window.width - geometry.elements.map.width) - 14;;
	geometry.elements.map.style.top = 7;
	
	geometry.elements.canvas = document.getElementById('map_canvas');
	geometry.elements.canvas.width = geometry.elements.map.width;
	geometry.elements.canvas.height = geometry.elements.map.height;
	geometry.elements.canvas.style.width = geometry.elements.map.width;
	geometry.elements.canvas.style.height = geometry.elements.map.height;

	geometry.elements.edit = document.getElementById('edit_container');
	geometry.elements.edit.width = geometry.elements.map.width;
	geometry.elements.edit.height = geometry.elements.map.height;
	geometry.elements.edit.style.width = geometry.elements.edit.width;
	geometry.elements.edit.style.height = (geometry.window.height - geometry.elements.map.height) - 30;
	geometry.elements.edit.style.left = (geometry.window.width - geometry.elements.edit.width) - 14;
	geometry.elements.edit.style.top = geometry.elements.map.height + 20;
	
	geometry.elements.game = document.getElementById('game_container');
	geometry.elements.game.width = (geometry.window.width - geometry.elements.edit.width) - 37;
	geometry.elements.game.height = geometry.window.height - 100;	
	geometry.elements.game.style.width = geometry.elements.game.width;
	geometry.elements.game.style.height = geometry.elements.game.height;
	geometry.elements.game.style.left = 7;
	geometry.elements.game.style.top = 7;
	
	geometry.elements.shadow = document.getElementById('game_shadow');
	geometry.elements.shadow.width = geometry.elements.game.width;
	geometry.elements.shadow.height = geometry.elements.game.height;	
	geometry.elements.shadow.style.width = geometry.elements.game.style.width;
	geometry.elements.shadow.style.height = geometry.elements.game.style.height;
	geometry.elements.shadow.style.left = geometry.elements.game.style.left;
	geometry.elements.shadow.style.top = geometry.elements.game.style.top;	

   geometry.elements.console = document.getElementById('console_container');
	geometry.elements.console.width = geometry.elements.game.width;
	geometry.elements.console.height = (geometry.window.height - geometry.elements.game.height) - 30;	
	geometry.elements.console.style.width = geometry.elements.console.width;
	geometry.elements.console.style.height = geometry.elements.console.height;
	geometry.elements.console.style.left = 7;
	geometry.elements.console.style.top = geometry.elements.game.height + 20;	

	geometry.elements.text = document.getElementById('edit_textarea');
	geometry.elements.text.width = geometry.elements.console.width;
	geometry.elements.text.height = geometry.elements.console.height;	
	geometry.elements.text.style.width = geometry.elements.text.width;
	geometry.elements.text.style.height = geometry.elements.text.height;
}