/*****************************************************************************************************/
/* описание подкласса generators класса _WORLD. Отвечает за генерацию данных о мире                  */
/*****************************************************************************************************/

WORLD.generators = function(scope) {
    this.scope = scope;
};

// выполнить все генераторы
WORLD.generators.prototype.all = function() {
    this.heightMap();
    this.randomTables();
    say("[WORLD.generators.all] завершилась");
};

// генерирует данные о карте высот
WORLD.generators.prototype.heightMap = function() {
    // генерирует карту высот по заданным параметрам
    var map = this.scope.map;
    for (var i = 0; i < map.geo.loops; i++) {
        map.data.height[i] = [];
        map.data.mounts[i] = [];
        var sector_size = map.geo.base >> i;
        var sector_divider = map.geo.degree - i;
        var sectors_w = map.geo.width >> sector_divider;
        var sectors_h = map.geo.height >> sector_divider;
        var size = (sector_size >> map.geo.edivider);
        var height = map.geo.loops - i;
        for (var y = 0; y < sectors_h; y++) {
            map.data.height[i][y] = [];
            map.data.mounts[i][y] = [];
            var oy = y << sector_divider;
            for (var x = 0; x < sectors_w; x++) {
                map.data.height[i][y][x] = [];
                map.data.mounts[i][y][x] = [];
                var ox = x << sector_divider;
                for (var n = 0; n < map.geo.numbers; n++) {
                    var heightmap = {};
                    heightmap.x = ox + Math.floor(Math.random() * sector_size);
                    heightmap.y = oy + Math.floor(Math.random() * sector_size);
                    heightmap.r = Math.floor(Math.random() * (size >> 1)) + size >> 1;
                    heightmap.h = Math.floor(Math.random() * height);
                    var v = Math.floor(Math.random() * 20) - 1;
                    if (v < 0) heightmap.h = -heightmap.h;
                    map.data.height[i][y][x][n] = heightmap;

                    if (n < map.mounts.numbers) {
                        if (i >= map.mounts.loopstart && i <= map.mounts.loopend) {
                            var mountsmap = {};
                            mountsmap.x = ox + Math.floor(Math.random() * sector_size);
                            mountsmap.y = oy + Math.floor(Math.random() * sector_size);
                            mountsmap.r = Math.floor(Math.random() * (size >> 1)) + size >> 1;
                            map.data.mounts[i][y][x][n] = mountsmap;
                        }
                    }

                }
            }
        }
    }
    say("[WORLD.generators.heightMap] завершилась");
};

// генерирует рандомные величины используемые в различных функциях - калькуляторах
// в дальнейшем эти данные сохраняются вместе с данными о мире и используются например:
// - для случайного распределения тайлов (у вех клиенов случайное распределение получится идентичным)
WORLD.generators.prototype.randomTables = function() {
    var randoms = this.scope.map.data.randoms;
    for (var i = 0; i <= 256; i++) {
        randoms[i] = [];
        for (j = 0; j <= 256; j++) {
            randoms[i][j] = Math.floor(Math.random() * 256);
        }
    }
    say("[WORLD.generators.randomTables] завершилась");
}
