/*****************************************************************************************************/
/* описание подкласса generators класса _WORLD. Отвечает за генерацию данных о мире                  */
/*****************************************************************************************************/

WORLD.calculators = function(scope) {
    this.scope = scope;
};

// выполнить расчеты по всем калькуляторам
WORLD.calculators.prototype.all = function(x, y, day, time) {
    var point = {
        x: x,
        y: y,
        day: day,
        time: time
    };

    this.pointHeight(point);
    this.pointTemperature(point);
    this.pointPressure(point);
    this.pointWind(point);
    this.pointСlimatic(point);
    this.pointRiver(point);
    this.pointSettlement(point);
    return point;
};

// Расчитывает высоту в точке
WORLD.calculators.prototype.pointHeight = function(point) {
    var map = this.scope.map;
    point.m = 2;
    point.h = 2;
    for (var i = 0; i < map.geo.loops; i++) {
        var sector_divider = map.geo.degree - i;
        var sectors_w = map.geo.width >> sector_divider;
        var sectors_h = map.geo.height >> sector_divider;
        var csx = point.x >> sector_divider;
        var csy = point.y >> sector_divider;
        for (var sy = -1; sy < 2; sy++) {
            var cy = csy + sy;
            if (cy >= 0 && cy < sectors_h) {
                for (var sx = -1; sx < 2; sx++) {
                    var cx = csx + sx;
                    if (i > 0) {
                        if (cx < 0) {
                            cx = sectors_w - 1;
                        }
                        if (cx > sectors_w - 1) {
                            cx = 0;
                        }
                    }
                    if (cx >= 0 && cx < sectors_w) {
                        for (var n = 0; n < map.geo.numbers; n++) {
                            var temp_height = map.data.height[i][cy][cx][n];
                            var dist = this.calcDistance(point, temp_height);
                            if (dist < temp_height.r) {
                                point.h += this.calcRelief(dist, temp_height);
                            }


                            if (n < map.mounts.numbers) {
                                if (i >= map.mounts.loopstart && i <= map.mounts.loopend) {
                                    var temp_mounts = map.data.mounts[i][cy][cx][n];
                                    dist = this.calcDistance(point, temp_mounts);
                                    if (dist < temp_mounts.r) {
                                        point.m += (this.calcRelief(dist, temp_mounts) << map.mounts.multipler);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    this.pointNormalize(point);
}

// Расчитывает:
// среднесуточную температуру в точке
// текущую температуру в точке
// текущую сезон в точке
WORLD.calculators.prototype.pointTemperature = function(point) {

}

// Расчитывает давление в точке
WORLD.calculators.prototype.pointPressure = function(point) {

}

// Расчитывает силу и направление ветра в точке
WORLD.calculators.prototype.pointWind = function(point) {

}

// Расчитывает:
// климатическую зону в точке
// факторы влияющие на выбор типа грунтов и распределение растительности в точке
WORLD.calculators.prototype.pointСlimatic = function(point) {

}

// Расчитывает наличие рек и/или озер в точке
WORLD.calculators.prototype.pointRiver = function(point) {

}

// Расчитывает наличие объектов в точке для автогенерированных городов и поселений
WORLD.calculators.prototype.pointSettlement = function(point) {

}


// Расчитывает дистанцию
WORLD.calculators.prototype.calcDistance = function(point1, point2) {
    var dx = Math.abs(point1.x - point2.x);
    var dy = Math.abs(point1.y - point2.y);
    var map = this.scope.map;
    if (dx > (map.geo.width >> 1)) {
        dx = map.geo.width - dx;
    }
    return dx + dy;
}

// Расчитывает высоту фигуры на расстоянии dist от центра фигуры
WORLD.calculators.prototype.calcRelief = function(dist, point) {
    if (dist < point.r) {
        return (point.r - dist);
    } else {
        return 0;
    }
}

// Нормализует высоту
WORLD.calculators.prototype.pointNormalize = function(point) {
    var map = this.scope.map;
    point.h = point.h >> map.geo.hdivider;
    if (point.h >= map.levels.water) {
        point.m = point.m << 1;
        point.h += point.m;
    } else {
        point.m = 0;
    }
    var mh = 65535;
    if (point.h < 0) {
        point.h = 0;
    }
    if (point.h > mh) {
        point.h = mh;
    }
    point.lh = point.h - map.levels.water;

}

// вычисляет псевдо рандомное значение
WORLD.calculators.prototype.getPseudoRandom = function(wx, wy, offset, max) {
    var randoms = this.scope.map.data.randoms;
    var x = Math.abs(Math.floor(wx + offset)) % 256;
    var y = Math.abs(Math.floor(wy)) % 256;
    var rnd = randoms[x][y];
    return ((rnd * max) >> 8);
}
