var geometry = {
	list: {
/*		screen_container:{
			tag: 'div',
			style: { top:0, bottom:0, left:0, right: 0,	position:'absolute', overflow:'hidden'	},
			list: {
				screen_container:{
					tag: 'canvas',
					style: { top:0, bottom:0, left:0, right: 0,	position:'absolute'	}
				}
			}
		},
*/
		key_map:{
			tag: 'div',
			class: 'key_right',
			style: { top:40, right:0, width:50, height:78,	position:'absolute'	}
		},
		key_panel:{
			tag: 'div',
			class: 'key_right',
			style: { top:124, right:0, width:50, height:78,	position:'absolute'	}
		},
		key_chat:{
			tag: 'div',
			class: 'key_right',
			style: { top:208, right:0, width:50, height:78,	position:'absolute'	}
		},
		key_console:{
			tag: 'div',
			class: 'key_right',
			style: { top:292, right:0, width:50, height:78,	position:'absolute'	}
		},
	}
};



function geometryInit(){
	geometry.window = {};
	geometry.window.width = getClientWidth();
	geometry.window.height = getClientHeight();

	parseList(document.body,geometry.list);
	
	/*
  geometry.elements.screen = document.getElementById('screen');
	geometry.elements.screen.width = geometry.window.width;
	geometry.elements.screen.height = geometry.window.height;
	geometry.elements.screen.style.width = geometry.elements.map.width;
	geometry.elements.screen.style.height = geometry.elements.map.height;
	geometry.elements.screen.style.left = 0;
	geometry.elements.screen.style.top = 0;
	*/
	/*	
	var keys_right_id = ['key_map','key_panel','key_chat', 'key_console'];
	geometry.elements.keys = {};
	geometry.elements.keys.right = {};
	var i=0;
	for (var id in keys_right_id){
		var p = document.getElementById(id);
		p.style.right = 0;
		p.style.top = 6+i*(parseInt(p.style.height) + 6);
		geometry.elements.keys.right[id] = p;
		i++;	
	}
	*/
}

function parseList(p,list){
	for (var c in list){
		list[c].id=c;
		elementCreate(p,list[c]);
	}	
}

function elementCreate(p,c) {
    var obj = document.createElement(c.tag);
    //obj.id = c.id;
    if( c.class ){ obj.className=c.class; }
    if( c.style ){
			for (var n in c.style){
				obj.style[n] = c.style[n];
			}	
    }
    p.appendChild(obj);
    if( c.list ){
    	parseList(obj,c.list);
    }		
}


