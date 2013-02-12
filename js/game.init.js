var geometry = {
	list: {
		screen_container:{
			type: 'div',
			style: { top:0, bottom:0, left:0, right: 0,	position:'absolute', overflow:'hidden'	},
			list: {
				screen_container:{
					type: 'canvas',
					style: { top:0, bottom:0, left:0, right: 0,	position:'absolute', overflow:'hidden'	}
				}
			}
		},
		key_map:{
			type: 'div',
			class: 'key_right',
			style: { top:40, right:0, width:50, height:78,	position:'absolute', 	}
		},
		key_panel:{
			type: 'div',
			class: 'key_right',
			style: { top:124, right:0, width:50, height:78,	position:'absolute', 	}
		},
		key_chat:{
			type: 'div',
			class: 'key_right',
			style: { top:208, right:0, width:50, height:78,	position:'absolute', 	}
		},
		key_console:{
			type: 'div',
			class: 'key_right',
			style: { top:292, right:0, width:50, height:78,	position:'absolute', 	}
		},
	}
};



function geometryInit(){
	geometry.window = {};
	geometry.window.width = getClientWidth();
	geometry.window.height = getClientHeight();

	parseGeometry(geometry.list);
	
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

function parseGeometry(list){
	for (var p in list){
		
		alert(p);
	}	
}