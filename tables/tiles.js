var tiles = { // описание типов тайлов
	base: {
		blue: {
			numbers: 1, // длинна массива (возможно ненужна, не знаю array.lenght насколько медленнее
			list: [
				{ width:128, height:142, center: { x:64, y:64 }, urls: ['/app/tiles/base/base.blue.png'] }
			]
		},
		gray: {
			numbers: 1,
			list: [
				{ width:128, height:142, center: { x:64, y:64 }, urls: ['/app/tiles/base/base.gray.png'] }
			]
		},
		elow: {
			numbers: 1,
			list: [
				{ width:128, height:142, center: { x:64, y:64 }, urls: ['/app/tiles/base/base.elow.png'] }
			]
		},
		ice: {
			numbers: 1,
			list: [
				{ width:128, height:142, center: { x:64, y:64 }, urls: ['/app/tiles/base/base.snow.png'] }
			]
		},
		snow: {
			numbers: 4,
			list: [
				{ width:148, height:171, center: { x:77, y:92 }, urls: ['/app/tiles/grass/snow.00.png'] },
				{ width:150, height:167, center: { x:73, y:88 }, urls: ['/app/tiles/grass/snow.01.png'] },
				{ width:148, height:169, center: { x:71, y:92 }, urls: ['/app/tiles/grass/snow.02.png'] },
				{ width:149, height:170, center: { x:76, y:91 }, urls: ['/app/tiles/grass/snow.03.png'] }
			]
		}
	},
	grass: {
		usual: {
			numbers: 4,
			list: [
				{ width:174, height:171, center: { x:85, y:92 }, urls: ['/app/tiles/grass/grass.usual.00.png'] },
				{ width:162, height:179, center: { x:72, y:100 }, urls: ['/app/tiles/grass/grass.usual.01.png'] },
				{ width:174, height:179, center: { x:89, y:102 }, urls: ['/app/tiles/grass/grass.usual.02.png'] },
				{ width:161, height:177, center: { x:89, y:98 }, urls: ['/app/tiles/grass/grass.usual.03.png'] }
			]
		},
		dry0: {
			numbers: 4,
			list: [
				{ width:174, height:198, center: { x:85, y:119 }, urls: ['/app/tiles/grass/grass.dry.v0.00.png'] },
				{ width:174, height:197, center: { x:85, y:118 }, urls: ['/app/tiles/grass/grass.dry.v0.01.png'] },
				{ width:174, height:191, center: { x:85, y:114 }, urls: ['/app/tiles/grass/grass.dry.v0.02.png'] },
				{ width:174, height:192, center: { x:85, y:113 }, urls: ['/app/tiles/grass/grass.dry.v0.03.png'] }
			]
		},
		dry1: {
			numbers: 4,
			list: [
				{ width:174, height:207, center: { x:85, y:130 }, urls: ['/app/tiles/grass/grass.dry.v1.00.png'] },
				{ width:174, height:208, center: { x:85, y:129 }, urls: ['/app/tiles/grass/grass.dry.v1.01.png'] },
				{ width:174, height:209, center: { x:85, y:130 }, urls: ['/app/tiles/grass/grass.dry.v1.02.png'] },
				{ width:174, height:214, center: { x:85, y:135 }, urls: ['/app/tiles/grass/grass.dry.v1.03.png'] }
			]
		},
		dry2: {
			numbers: 4,
			list: [
				{ width:174, height:201, center: { x:85, y:122 }, urls: ['/app/tiles/grass/grass.dry.v2.00.png'] },
				{ width:174, height:210, center: { x:85, y:131 }, urls: ['/app/tiles/grass/grass.dry.v2.01.png'] },
				{ width:174, height:203, center: { x:85, y:126 }, urls: ['/app/tiles/grass/grass.dry.v2.02.png'] },
				{ width:174, height:199, center: { x:85, y:120 }, urls: ['/app/tiles/grass/grass.dry.v2.03.png'] }
			]
		},
		dry3: {
			numbers: 4,
			list: [
				{ width:174, height:195, center: { x:85, y:116 }, urls: ['/app/tiles/grass/grass.dry.v3.00.png'] },
				{ width:162, height:198, center: { x:72, y:119 }, urls: ['/app/tiles/grass/grass.dry.v3.01.png'] },
				{ width:174, height:193, center: { x:89, y:114 }, urls: ['/app/tiles/grass/grass.dry.v3.02.png'] },
				{ width:161, height:195, center: { x:89, y:117 }, urls: ['/app/tiles/grass/grass.dry.v3.03.png'] }
			]
		},
		dry4: {
			numbers: 4,
			list: [
				{ width:174, height:198, center: { x:85, y:119 }, urls: ['/app/tiles/grass/grass.dry.v4.00.png'] },
				{ width:163, height:202, center: { x:72, y:123 }, urls: ['/app/tiles/grass/grass.dry.v4.01.png'] },
				{ width:175, height:202, center: { x:90, y:123 }, urls: ['/app/tiles/grass/grass.dry.v4.02.png'] },
				{ width:163, height:196, center: { x:91, y:118 }, urls: ['/app/tiles/grass/grass.dry.v4.03.png'] }
			]
		},
		flowers0: {
			numbers: 4,
			list: [
				{ width:175, height:171, center: { x:85, y:92 }, urls: ['/app/tiles/grass/grass.flowers.v0.00.png'] },
				{ width:163, height:180, center: { x:72, y:101 }, urls: ['/app/tiles/grass/grass.flowers.v0.01.png'] },
				{ width:175, height:182, center: { x:90, y:103 }, urls: ['/app/tiles/grass/grass.flowers.v0.02.png'] },
				{ width:163, height:177, center: { x:91, y:98 }, urls: ['/app/tiles/grass/grass.flowers.v0.03.png'] }
			]
		},
		flowers1: {
			numbers: 4,
			list: [
				{ width:175, height:171, center: { x:85, y:92 }, urls: ['/app/tiles/grass/grass.flowers.v1.00.png'] },
				{ width:163, height:180, center: { x:72, y:101 }, urls: ['/app/tiles/grass/grass.flowers.v1.01.png'] },
				{ width:175, height:182, center: { x:90, y:103 }, urls: ['/app/tiles/grass/grass.flowers.v1.02.png'] },
				{ width:163, height:177, center: { x:91, y:98 }, urls: ['/app/tiles/grass/grass.flowers.v1.03.png'] }
			]
		},
		flowers2: {
			numbers: 4,
			list: [
				{ width:175, height:204, center: { x:85, y:125 }, urls: ['/app/tiles/grass/grass.flowers.v2.00.png'] },
				{ width:163, height:194, center: { x:72, y:115 }, urls: ['/app/tiles/grass/grass.flowers.v2.01.png'] },
				{ width:175, height:195, center: { x:90, y:116 }, urls: ['/app/tiles/grass/grass.flowers.v2.02.png'] },
				{ width:163, height:202, center: { x:91, y:123 }, urls: ['/app/tiles/grass/grass.flowers.v2.03.png'] }
			]
		}
	},
	sand: {
		sand: {
			numbers: 4,
			list: [
				{ width:132, height:138, center: { x:66, y:61 }, urls: ['/app/tiles/sand/sand.00.png'] },
				{ width:132, height:138, center: { x:66, y:61 }, urls: ['/app/tiles/sand/sand.01.png'] },
				{ width:132, height:138, center: { x:66, y:61 }, urls: ['/app/tiles/sand/sand.02.png'] },
				{ width:132, height:138, center: { x:66, y:61 }, urls: ['/app/tiles/sand/sand.03.png'] }
			]
		},
		dry: {
			numbers: 4,
			list: [
				{ width:132, height:169, center: { x:66, y:92 }, urls: ['/app/tiles/sand/sand.grass.v0.00.png'] },
				{ width:132, height:170, center: { x:66, y:93 }, urls: ['/app/tiles/sand/sand.grass.v0.01.png'] },
				{ width:132, height:177, center: { x:66, y:100 }, urls: ['/app/tiles/sand/sand.grass.v0.02.png'] },
				{ width:132, height:182, center: { x:66, y:105 }, urls: ['/app/tiles/sand/sand.grass.v0.03.png'] }
			]
		},
		grass: {
			numbers: 4,
			list: [
				{ width:132, height:158, center: { x:66, y:81 }, urls: ['/app/tiles/sand/sand.grass.v1.00.png'] },
				{ width:132, height:162, center: { x:66, y:85 }, urls: ['/app/tiles/sand/sand.grass.v1.01.png'] },
				{ width:132, height:167, center: { x:66, y:90 }, urls: ['/app/tiles/sand/sand.grass.v1.02.png'] },
				{ width:132, height:169, center: { x:66, y:92 }, urls: ['/app/tiles/sand/sand.grass.v1.03.png'] }
			]
		},
		snow_sand: {
			numbers: 4,
			list: [
				{ width:149, height:165, center: { x:74, y:88 }, urls: ['/app/tiles/sand/snow.sand.00.png'] },
				{ width:148, height:168, center: { x:71, y:91 }, urls: ['/app/tiles/sand/snow.sand.01.png'] },
				{ width:149, height:168, center: { x:75, y:91 }, urls: ['/app/tiles/sand/snow.sand.02.png'] },
				{ width:148, height:170, center: { x:77, y:93 }, urls: ['/app/tiles/sand/snow.sand.03.png'] }
			]
		},
		snow_dry: {
			numbers: 4,
			list: [
				{ width:149, height:169, center: { x:74, y:92 }, urls: ['/app/tiles/sand/snow.sand.grass.v0.00.png'] },
				{ width:148, height:170, center: { x:71, y:93 }, urls: ['/app/tiles/sand/snow.sand.grass.v0.01.png'] },
				{ width:149, height:177, center: { x:75, y:100 }, urls: ['/app/tiles/sand/snow.sand.grass.v0.02.png'] },
				{ width:148, height:182, center: { x:77, y:105 }, urls: ['/app/tiles/sand/snow.sand.grass.v0.03.png'] }
			]
		},
	},
	water: {
		water: {
			numbers: 1,
			list: [
				{ width:130, height:67, center: { x:65, y:65 }, urls: ['/app/tiles/water/usual/water.00.png'] }
			]			
		},
		ice: {
			numbers: 1,
			list: [
				{ width:128, height:107, center: { x:64, y:77 }, urls: ['/app/tiles/water/usual/water.ice.00.png'] }
			]			
		}
	},
	snow: {
		snow: {
			numbers: 4,
			list: [
				{ width:148, height:171, center: { x:77, y:92 }, urls: ['/app/tiles/grass/snow.00.png'] },
				{ width:150, height:167, center: { x:73, y:88 }, urls: ['/app/tiles/grass/snow.01.png'] },
				{ width:148, height:169, center: { x:71, y:92 }, urls: ['/app/tiles/grass/snow.02.png'] },
				{ width:149, height:170, center: { x:76, y:91 }, urls: ['/app/tiles/grass/snow.03.png'] }
			]			
		},
		grass: {
			numbers: 4,
			list: [
				{ width:148, height:171, center: { x:77, y:92 }, urls: ['/app/tiles/grass/snow.00.png'] },
				{ width:150, height:167, center: { x:73, y:88 }, urls: ['/app/tiles/grass/snow.01.png'] },
				{ width:148, height:169, center: { x:71, y:92 }, urls: ['/app/tiles/grass/snow.02.png'] },
				{ width:149, height:170, center: { x:76, y:91 }, urls: ['/app/tiles/grass/snow.03.png'] }
			]
		},
		dry0: {
			numbers: 4,
			list: [
				{ width:148, height:198, center: { x:77, y:119 }, urls: ['/app/tiles/grass/snow.grass.dry.v0.00.png'] },
				{ width:150, height:197, center: { x:73, y:118 }, urls: ['/app/tiles/grass/snow.grass.dry.v0.01.png'] },
				{ width:148, height:191, center: { x:71, y:114 }, urls: ['/app/tiles/grass/snow.grass.dry.v0.02.png'] },
				{ width:149, height:192, center: { x:76, y:113 }, urls: ['/app/tiles/grass/snow.grass.dry.v0.03.png'] }
			]
		},
		dry1: {
			numbers: 4,
			list: [
				{ width:148, height:207, center: { x:71, y:130 }, urls: ['/app/tiles/grass/snow.grass.dry.v1.00.png'] },
				{ width:149, height:208, center: { x:76, y:129 }, urls: ['/app/tiles/grass/snow.grass.dry.v1.01.png'] },
				{ width:148, height:209, center: { x:77, y:130 }, urls: ['/app/tiles/grass/snow.grass.dry.v1.02.png'] },
				{ width:150, height:214, center: { x:73, y:135 }, urls: ['/app/tiles/grass/snow.grass.dry.v1.03.png'] }
			]
		},
		dry2: {
			numbers: 4,
			list: [
				{ width:148, height:201, center: { x:77, y:122 }, urls: ['/app/tiles/grass/snow.grass.dry.v2.00.png'] },
				{ width:150, height:210, center: { x:73, y:131 }, urls: ['/app/tiles/grass/snow.grass.dry.v2.01.png'] },
				{ width:148, height:203, center: { x:71, y:126 }, urls: ['/app/tiles/grass/snow.grass.dry.v2.02.png'] },
				{ width:149, height:199, center: { x:76, y:120 }, urls: ['/app/tiles/grass/snow.grass.dry.v2.03.png'] }
			]
		},
		dry3: {
			numbers: 4,
			list: [
				{ width:148, height:195, center: { x:71, y:116 }, urls: ['/app/tiles/grass/snow.grass.dry.v3.00.png'] },
				{ width:149, height:198, center: { x:76, y:119 }, urls: ['/app/tiles/grass/snow.grass.dry.v3.01.png'] },
				{ width:148, height:193, center: { x:77, y:114 }, urls: ['/app/tiles/grass/snow.grass.dry.v3.02.png'] },
				{ width:150, height:195, center: { x:73, y:117 }, urls: ['/app/tiles/grass/snow.grass.dry.v3.03.png'] }
			]
		},
		dry4: {
			numbers: 4,
			list: [
				{ width:148, height:198, center: { x:71, y:119 }, urls: ['/app/tiles/grass/snow.grass.dry.v4.00.png'] },
				{ width:149, height:202, center: { x:76, y:123 }, urls: ['/app/tiles/grass/snow.grass.dry.v4.01.png'] },
				{ width:148, height:202, center: { x:77, y:123 }, urls: ['/app/tiles/grass/snow.grass.dry.v4.02.png'] },
				{ width:150, height:196, center: { x:73, y:118 }, urls: ['/app/tiles/grass/snow.grass.dry.v4.03.png'] }
			]
		}	
	}
}

var tiles_mix = { // описание МИКСОВ собранных из различных типов тайлов
	field: {
		sun: [
			{ tiles:tiles.grass.dry0, procent:1 },
			{ tiles:tiles.grass.dry1, procent:1 },
			{ tiles:tiles.grass.dry2, procent:1 },
			{ tiles:tiles.grass.dry3, procent:1 },
			{ tiles:tiles.grass.dry4, procent:1 },
			{ tiles:tiles.grass.flowers0, procent:20 },
			{ tiles:tiles.grass.flowers1, procent:20 },
			{ tiles:tiles.grass.flowers2, procent:5 },
			{ tiles:tiles.grass.usual, procent:50 }
		],
		snow: [
			{ tiles:tiles.snow.dry0, procent:1 },
			{ tiles:tiles.snow.dry1, procent:1 },
			{ tiles:tiles.snow.dry2, procent:1 },
			{ tiles:tiles.snow.dry3, procent:1 },
			{ tiles:tiles.snow.dry4, procent:1 },
			{ tiles:tiles.snow.grass, procent:95 }
		]
	},
	steppe: {
		sun: [
			{ tiles:tiles.grass.dry0, procent:10 },
			{ tiles:tiles.grass.dry1, procent:10 },
			{ tiles:tiles.grass.dry2, procent:10 },
			{ tiles:tiles.grass.dry3, procent:10 },
			{ tiles:tiles.grass.dry4, procent:10 },
			{ tiles:tiles.grass.flowers0, procent:13 },
			{ tiles:tiles.grass.flowers1, procent:13 },
			{ tiles:tiles.grass.flowers2, procent:4 },
			{ tiles:tiles.grass.usual, procent:20 }
		],
		snow: [
			{ tiles:tiles.snow.dry0, procent:10 },
			{ tiles:tiles.snow.dry1, procent:10 },
			{ tiles:tiles.snow.dry2, procent:10 },
			{ tiles:tiles.snow.dry3, procent:10 },
			{ tiles:tiles.snow.dry4, procent:10 },
			{ tiles:tiles.snow.grass, procent:50 }
		]
	},
	duna: {
		sun: [
			{ tiles:tiles.grass.usual, procent:10 },
			{ tiles:tiles.sand.sand, procent:40 },			
			{ tiles:tiles.sand.dry, procent:25 },			
			{ tiles:tiles.sand.grass, procent:25 }
		],
		snow: [
			{ tiles:tiles.snow.grass, procent:10 },
			{ tiles:tiles.sand.snow_sand, procent:40 },
			{ tiles:tiles.sand.snow_dry, procent:25 },
			{ tiles:tiles.sand.snow_sand, procent:25 },
		]
	},
	bich: {
		sun: [
			{ tiles:tiles.sand.sand, procent:100 }
		],
		snow: [
			{ tiles:tiles.sand.snow_sand, procent:100 }
		]
	},
	water: {
		sun: [
			{ tiles:tiles.water.water, procent:100 }
		],
		snow: [
			{ tiles:tiles.water.ice, procent:100 }
		]
	},
	stoun: {
		sun: [
			{ tiles:tiles.base.gray, procent:100 }
		],
		snow: [
			{ tiles:tiles.snow.snow, procent:100 }
		]
	},
};

