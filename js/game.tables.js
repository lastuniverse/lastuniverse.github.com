world = {
	geo: {
		degree: 17,
		base: 131072,
		width: 262144,
		height: 131072
	},
	gen: {
		loops: 6,
		numbers: 5,
		divider: 1,
		mnts: {
			loopstart: 4,
			loopend: 5,
			numbers: 1,
			multiplier: 3
		}
	},
	vis: {
		hdivider:1,
		layers: {
			map:{ on: 1, alpha: 255 },
			addsh:{ on: 0, alpha: 64 },
			temp:{ on: 0, alpha: 160 },
			ice:{ on: 1, alpha: 128 },
			seasons:{ on: 0, alpha: 128 },
			press:{ on: 0, alpha: 128 }
		}
	},
	lvls: {
		water:11200,
		sand:11220,
		stoun: 28500,
		ice:35500
	},
	loops: [],
	maps: {
		opts:{
			divider: 7,
			deviation: 23.5,
			tempmin: -70,
			tempmax: 60,
			thdivider: 13,
			tddivider: 13,
			day: 0
		},
		height: [],
		temperature: [],
		wind: {
			force: [],
			direction: []
		}
	},
	randoms: []
};
