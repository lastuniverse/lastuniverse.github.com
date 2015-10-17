// var geometry = {};
var canvas;
var ctx;
var img;
var basis = 100;
function geometryInit(){
	// geometry.elements = {map:{},canvas:{},edit:{}};

	// geometry.window = {};
	// geometry.window.width = getClientWidth();
	// geometry.window.height = getClientHeight();
	
 //   geometry.elements.map = document.getElementById('map_container');
	// geometry.elements.map.width = geometry.window.width-10;
	// geometry.elements.map.height = geometry.window.height-10;
	// geometry.elements.map.style.width = geometry.elements.map.width;
	// geometry.elements.map.style.height = geometry.elements.map.height;
	// geometry.elements.map.style.left = 0;
	// geometry.elements.map.style.top = 0;
	
	// geometry.elements.canvas = document.getElementById('map_canvas');
	// geometry.elements.canvas.width = getClientWidth()
	// geometry.elements.canvas.height = getClientHeight();
	// geometry.elements.canvas.style.width = geometry.elements.map.width;
	// geometry.elements.canvas.style.height = geometry.elements.map.height;


	canvas = document.getElementById('map_canvas');
	canvas.width = getClientWidth()
	canvas.height = getClientHeight();
	ctx = canvas.getContext('2d');
	img = ctx.createImageData(canvas.width, canvas.height);	
}

function Clear(){
	for(var y=0; y<canvas.height; y++){
		for(var x=0; x<canvas.width; x++){
			
			var red = 0;
			var gren = 0;
			var blue = 0;
				drawPixel(img, x, y, red, gren, blue, 255);
		}
	}
	ctx.putImageData(img, 0, 0);
}

function Test(){
	Clear();
	cx = (basis+(basis>>>1)) + ((canvas.width-(basis+(basis>>>1)))>>>1);
	cy = canvas.height>>>1;
	for(var y=cy-127; y<cy+127; y++){
	for(var x=cx-127; x<cx+127; x++){
		var dx = Math.abs(x-cx);
		var dy = Math.abs(y-cy);
		var d = (dx>dy)?dx:dy;

		var red = 127-d;
		var gren = red;
		var blue = red;
			drawPixel(img, x, y, red, gren, blue, 255);
	}}
	ctx.putImageData(img, 0, 0);
}

function Render(){
	Base();
	for(var y=0; y<canvas.height; y++){
	for(var x=(basis+(basis>>>1)); x<canvas.width; x++){
		var c_in = getPixel(img,x,y);
		var dx = x - basis + (c_in.r>>>2);
		var c = getPixel(img,dx,y);
		drawPixel(img, x, y, c.r, c.g, c.b, 255);
	}}
	ctx.putImageData(img, 0, 0);
}

function Base(){
	for(var y=0; y<canvas.height; y++){
	for(var x=0; x<(basis+(basis>>>1)); x++){
		
		var red = getRandomInt(255);
		var gren = red;
		var blue = red;
			drawPixel(img, x, y, red, gren, blue, 255);
	}}
	ctx.putImageData(img, 0, 0);
}

function Brash(cx,cy,c,r,type){
	//cx = (basis+(basis>>>1)) + ((canvas.width-(basis+(basis>>>1)))>>>1);
	//cy = canvas.height>>>1;
	for(var y=cy-r; y<cy+r; y++){
	for(var x=cx-r; x<cx+r; x++){
		var dx = Math.abs(x-cx);
		var dy = Math.abs(y-cy);
		var dr = Math.floor(Math.sqrt(dx*dx + dy*dy));
		if( dr < r ){
			if( type == 1 ){
				var red = 255-Math.floor(c*Math.sin(Math.asin(dr/r)));
				var gren = red;
				var blue = red;
				addPixel(img, x, y, red, gren, blue, 128);
			}else if( type == 2 ){
				drawPixel(img, x, y, c, c, c, 255);
			}
		}
	}}
	ctx.putImageData(img, 0, 0);
}
var pressed = 0;
function setPressed(n){
	pressed = n;
}
// при нажатии на карту 
function mclick(e){
	if(!e) e = event;
	e.returnValue=false;
	e.cancelBubble=true;
	e=fixWhich(e);

	//var o = canvas;
	var x = e.clientX;
	var y = e.clientY;
	if( pressed&1  ){
		Brash(x,y,32,20,2);
	}else{
		//Brash(x,y,64,30,1);		
	}
	return false;
}



//---------------------------------------------------------------
function drawPixel(img,x,y,r,g,b,a){
	r=255-r;
	g=255-g;
	b=255-b;
	var o = (y*img.width+x)*4;
    img.data[o+0]=r; // красный
    img.data[o+1]=g; // зеленый
    img.data[o+2]=b; // синий
    img.data[o+3]=a; // прозрачность
}

function addPixel(img,x,y,r,g,b,a){
	r=255-r;
	g=255-g;
	b=255-b;
	var o = (y*img.width+x)*4;

	
    // img.data[o+0]=(65535-((255-img.data[o+0])*(255-a)+(255-r)*a))>>8; // красный
    // img.data[o+1]=(65535-((255-img.data[o+1])*(255-a)+(255-g)*a))>>8; // зеленый
    // img.data[o+2]=(65535-((255-img.data[o+2])*(255-a)+(255-b)*a))>>8; // синий
    //img.data[o+3]=a; // прозрачность
    img.data[o+0]=(img.data[o+0]*(255-a)+r*a)>>8; // красный
    img.data[o+1]=(img.data[o+1]*(255-a)+g*a)>>8; // зеленый
    img.data[o+2]=(img.data[o+2]*(255-a)+b*a)>>8; // синий

}

function getPixel(img,x,y){
	var o = (y*img.width+x)*4;
	var c = {}
    c.r = img.data[o+0]
    c.g = img.data[o+1]
    c.b = img.data[o+2]
    c.r = 255-c.r;
    c.g = 255-c.g;
    c.b = 255-c.b;
    return c;
}
