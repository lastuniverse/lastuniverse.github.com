// некая структура данных в которой содержатся временные(рабочие)
// переменные и сохраняются результаты нижеприведенных функций
var gscreen = { 
	ox:134023, // координаты отображаемые в игровом окне при обновлении страницы
	oy:116049,
	cellsize:{ // описание размеров ячейки 
		w: 128, // шаг игрового окна по горизонтали
		h: 32,  // шаг игрового окна по вертикали
		half: {
			w: 64,
			h: 16
		}
	},
	id:{ // id элементов в которые происходит отображение
		screen: 'game_container',
		shadow: 'game_shadow'
	},
	obj: { // сюда запоминаются указатели на элементы с ID указанными выше
		screen: {},
		shadow: {}
	},
	screen: { // вычисленные размеры игровой области
		w: 0,
		h: 0,
		half: { w: 0, h: 0 },
		cells: [] // тут хранятся указатели на div-ы с тайлами
	}
};

function screenInit(){
	// Предварительная инициализация переменных и формирование необходимых для работы текущей реализации данных
	gscreen.obj.screen = document.getElementById(gscreen.id.screen);
	gscreen.obj.shadow = document.getElementById(gscreen.id.shadow);
	screenCalc();
	screenCreate();
}


function screenCalc(){
	// рассчитываются параметры экрана и буфера
	gscreen.screen.pw = parseInt(gscreen.obj.screen.width);
	gscreen.screen.ph = parseInt(gscreen.obj.screen.height)
	gscreen.screen.w = Math.floor(parseInt(gscreen.obj.screen.width)/gscreen.cellsize.w)+1;
	gscreen.screen.h = Math.floor(parseInt(gscreen.obj.screen.height)/gscreen.cellsize.h)+5;
	gscreen.screen.half.w = gscreen.screen.w>>1; 
	gscreen.screen.half.h = gscreen.screen.h>>1; 
	gscreen.screen.half.pw = gscreen.screen.pw>>1; 
	gscreen.screen.half.ph = gscreen.screen.ph>>1;
	
	//say('расчитанны параметры игровой области\nширина буфера: ['+gscreen.obj.screen.width+'] высота буфера: ['+gscreen.obj.screen.height+']');
	say('расчитанны параметры игровой области\nширина буфера: ['+gscreen.buffer.w+'] высота буфера: ['+gscreen.buffer.h+']');
}

function screenCreate() {
	// создается необходимое количество div-ов используемых для отображения тайлов
	for(var y=0; y<gscreen.screen.h; y++) {
		gscreen.screen.cells[y]=[];
		for(var x=0; x<gscreen.screen.w; x++) {
			gscreen.screen.cells[y][x] = cellCreate();
		}
	}
}

function cellCreate() {
	// создается div элемент и добавляется в элемент с ID указанным в gscreen.id.screen
    var newdiv = document.createElement('div');
    newdiv.style.width = '0px';
    newdiv.style.height = '0px';
    newdiv.style.position = 'absolute';
    gscreen.obj.screen.appendChild(newdiv);
    return newdiv;
}


function calcOrtoCoord(sx,sy){
	// пересчет системы координат используемой в карте в систему координат используемую в игровом окне 
	var coord = {};
	coord.bdx=(((sx>>1)-sy)>>6);
	coord.bdy=(((sx>>1)+sy)>>6);
	coord.wx=gscreen.buffer.current.dwx+coord.bdx;
	coord.wy=gscreen.buffer.current.dwy+coord.bdy;	
	return coord;
}

function screenShow(wx,wy) {
	// отобразить игровой экран так чтобы координаты мира wx и wy оказались в центре игрового экрана
//var dwy=wy-gscreen.buffer.half.h+sy;
//var dwx=wx-gscreen.buffer.half.w+sx;
//var p = point_generator(cwx,cwy);

	for(var sy=0; sy<(gscreen.screen.ph+128); sy+=32) {
		var csy=sy-gscreen.screen.half.ph;
		var csdx=(((sy>>5)%2)<<6);
		for(var sx=0; sx<gscreen.screen.pw; sx+=128) {
			var csx = sx-gscreen.screen.half.pw;
			var coord = calcOrtoCoord(csx+csdx,csy);
			var pb = getPointInBufer(coord.bdx,coord.bdy);
			cellShow(sx>>7,sy>>5,pb,sx+csdx,sy,coord);			
		}
	}
}

function cellShow(sx,sy,p,csx,csy,coord){
	// подготовка и отображение тайла на игровой экран
	// требуется переделка
	var mix;
	var level = gscreen.cellsize.half.h-24;
	var rl = getPseudoRandom(coord.wx,coord.wy,2,64);
	var type='snow';
		if( p.t<0 ){
			rl=rl>>2;
		}else{
			rl=rl-(rl>>2);
			type='sun';
		}
		if( p.h < world.lvls.water ){
			mix = tiles_mix.water[type];
		}else if( p.h < world.lvls.sand-2 ){
			mix = tiles_mix.bich[type];
			level -= (rl>>1) + 10;
		}else if( p.h < world.lvls.sand+4 ){
			mix = tiles_mix.duna[type];
			level -= (rl>>1) + 20;
		}else if( p.h < world.lvls.sand+16 ){
			mix = tiles_mix.field[type];
			level -= rl;
		}else if( p.h < world.lvls.stoun ){
			mix = tiles_mix.steppe[type];
			level -= rl;
		}else if( p.h < world.lvls.ice ){
			mix = tiles_mix.stoun[type];
			level -= rl;
		}else{
			mix = tiles_mix.stoun.snow;
			level -= rl;
		}

	var num = randomTile(mix,coord);
	var tile = mix[num].tiles;
	var rand = getPseudoRandom(coord.wx,coord.wy,0,tile.numbers);
	var cur = tile.list[rand];
	var sp = gscreen.screen.cells[sy][sx];
	var mirror = 0;
	var dy = cur.center.y - 128;
	sp.style.backgroundImage = 'url('+cur.urls[mirror]+')';
	sp.style.width = cur.width;
	sp.style.height = cur.height;
	sp.style.left = csx - cur.center.x;
	sp.style.top = csy - (gscreen.cellsize.h<<1) - gscreen.cellsize.h + level - dy;
}

// -------------------------------------------

function gameDraw(){
	// вызывается при обновлении страницы
	screenInit();
	screenShow(gscreen.ox,gscreen.oy);
}


function randomTile(mix,coord){
	// псевторандомный выбор типа тайлов внутри микса 
      //var rand = Math.floor(Math.random() * 100);
      var rand = getPseudoRandom(coord.wx,coord.wy,1,100);
      var min = 0;
      var max = 0;
      var ret = 0;
      for(var i=0; i<mix.length; i++){
      	max = min+mix[i].procent;
      	if( rand>=min && rand<max ){
      		ret = i;
      		break;
      	}
      	min = max;
      }
      return ret;
}

function randomInt(n){
	// упрощение вызова Math.random()
      var rand = Math.floor(Math.random() * n);
      return rand;
}
