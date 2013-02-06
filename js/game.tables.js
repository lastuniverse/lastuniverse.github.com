world = {
	geo: {
		degree: 17,
		base: 131072,
		width: 262144,
		height: 131072
	},
	gen: {
		loops: 6,
		numbers: 15,
		divider: 1,
		mnts: {
			loopstart: 4,
			loopend: 5,
			numbers: 1,
			multiplier: 3
		}
	},
	vis: {
		hdivider:2,
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
		water:19200,
		sand:19208,
		stoun: 31500,
		ice:38000
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