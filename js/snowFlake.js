$(document).ready(onReady)
$(window).resize(resize)
window.onorientationchange = resize;

var width = 480;
var height = 320;

var wabbitTexture;
var pirateTexture;

var snowflakes = [];

var maxX = width;
var minX = 0;
var maxY = height;
var minY = 0;

var startsnowflakeCount = 7;
var isAdding = false;
var count = 0;
var container;
var pixiLogo;
var clickImage;

var textures = [
    [new PIXI.Texture.fromImage("images/snowflake/1.png"), new PIXI.Texture.fromImage("images/snowflake/1_click.png")],
    [new PIXI.Texture.fromImage("images/snowflake/2.png"), new PIXI.Texture.fromImage("images/snowflake/2_click.png")],
    [new PIXI.Texture.fromImage("images/snowflake/3.png"), new PIXI.Texture.fromImage("images/snowflake/3_click.png")],
    [new PIXI.Texture.fromImage("images/snowflake/4.png"), new PIXI.Texture.fromImage("images/snowflake/4_click.png")],
    [new PIXI.Texture.fromImage("images/snowflake/5.png"), new PIXI.Texture.fromImage("images/snowflake/5_click.png")],
    [new PIXI.Texture.fromImage("images/snowflake/6.png"), new PIXI.Texture.fromImage("images/snowflake/6_click.png")],
    [new PIXI.Texture.fromImage("images/snowflake/7.png"), new PIXI.Texture.fromImage("images/snowflake/7_click.png")],
    [new PIXI.Texture.fromImage("images/snowflake/8.png"), new PIXI.Texture.fromImage("images/snowflake/8_click.png")]
]

var amount = 3;

function abs_value(value) {
    // спецчисло для округления
    return value / Math.abs(value);
}

// Добавляет снежинку. Одну
function addOneSnow() {
    var id = Math.floor(Math.random() * 7);

    var snowflake = new PIXI.Sprite(textures[id][0], {x:00, y:0, width:26, height:37});
    snowflake.textureId = id;
    snowflake.countN = 1;
    snowflake.setInteractive(true);
    snowflake.speedX = Math.random() * 5 / 3;
    snowflake.speedXMax = snowflake.speedX;
    snowflake.speedYMax = snowflake.speedY;
    snowflake.speedY = (Math.random() * 5)  / 3;// - 5;
    snowflake.rotationDirection = Math.pow(-1,parseInt(Math.random()*10));
    snowflake.rotationSpeed = 2 / 57.29578;
    snowflake.rotationMaxSpeed = 2 / 57.29578;
    snowflake.anchor.x = 0.5;
    snowflake.anchor.y = 0.5;

    snowflake.position.x = parseInt(Math.random() * $(window).width());
    snowflake.position.y = parseInt(Math.random() * $(window).height());

    snowflake.mousedown = snowflake.touchstart = function(data) {
        this.data = data;
        this.alpha = 0.5;
        this.dragging = true;

        this.setTexture(textures[this.textureId][1]);
    };
    snowflake.isLogo = false;

    snowflake.mouseup = snowflake.mouseupoutside = snowflake.touchend = snowflake.touchendoutside = function(data) {
        this.alpha = 1
        this.rotationSpeed = 18 / 57.29578  / 3;
        this.speedX = abs_value(snowflake.speedX) * (Math.random() * 5 + 10) / 3;
        this.speedY = abs_value(snowflake.speedY) * (Math.random() * 5 + 10) / 3;

        this.dragging = false;
        this.data = null;

        this.setTexture(textures[this.textureId][0]);
    };

    snowflake.mousemove = snowflake.touchmove = function(data) {
        if(this.dragging)
        {
            // меняем координаты
            var newPosition = this.data.getLocalPosition(this.parent);
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }
    }

    snowflakes.push(snowflake);
    container.addChild(snowflake);
}

// Добавляет снежинок штуки три
function addSnow() {
    for (var i = 0; i < amount; i++) {
        addOneSnow();
        count++;
    }
    // ограничение на количество снежинок
    if(count >= 25) amount = 0;
}

// Добавляет логотип. Один
function addOneLogo() {
    var logo = new PIXI.Sprite(new PIXI.Texture.fromImage("images/title.png"), {x:00, y:0, width:226, height:37});
    logo.setInteractive(true);
    logo.countN = 1;
    logo.speedX = 0; //Math.random() * 2;
    logo.speedY = 0; //(Math.random() * 2);// - 5;
    logo.speedXMax = logo.speedX;
    logo.speedYMax = logo.speedY;

    logo.rotationDirection = Math.pow(-1,parseInt(Math.random()*10));
    logo.rotationSpeed = 0;// 2 / 57.29578;
    logo.rotationMaxSpeed = 0;//2 / 57.29578;

    logo.anchor.x = 0.5;
    logo.anchor.y = 1;

    // Задаем позицию
    logo.position.x = $(window).width()/2;
    logo.position.y = $(window).height()/2;
    logo.isLogo = true;

    logo.mousedown = logo.touchstart = function(data) {
        this.data = data;
        this.alpha = 1;
        this.dragging = true;
    };

    logo.mouseup = logo.mouseupoutside = logo.touchend = logo.touchendoutside = function(data) {
        this.alpha = 1
        this.dragging = false;
        this.data = null;
        this.scale.x = 1;
        this.scale.y = 1;
        addSnow();

        // this.rotationSpeed = 15 / 57.29578;

        this.speedX = 0;//abs_value(logo.speedX) * (Math.random() * 5 + 5);
        this.speedY = 0;// abs_value(logo.speedY) * (Math.random() * 5 + 5);
    };

    snowflakes.push(logo);
    container.addChild(logo);
}

// Создает и творит в самом начале.
function onReady() {
    // Базовый рендер и настройки
    renderer = PIXI.autoDetectRenderer(800, 600);
    stage = new PIXI.Stage(0xFFFFFF, true);
    
    amount = (renderer instanceof PIXI.WebGLRenderer) ? 10 : 5;
    
    if(amount == 5) {
        renderer.context.mozImageSmoothingEnabled = false
        renderer.context.webkitImageSmoothingEnabled = false;
    }

    document.body.appendChild(renderer.view);
    renderer.view.style.position = "absolute";

    requestAnimFrame(update);
    
    counter = document.createElement("div");
    counter.className = "counter";
    document.body.appendChild( counter);
    
    pixiLogo = document.getElementById("pixi");
    clickImage = document.getElementById("clickImage");
    
    count = startsnowflakeCount;
    counter.innerHTML = count + " BUNNIES";
    container = new PIXI.DisplayObjectContainer();
    stage.addChild(container);
    
    
    // Добавляем начальное количество снежинок
    for (var i = 0; i < startsnowflakeCount; i++) {
        addOneSnow();
    }
    
    // Добавляем логотип
    addOneLogo();

    $(renderer.view).mousedown(function(){
        isAdding = true;
    });
    
    $(renderer.view).mouseup(function(){
        isAdding = false;
    })

    document.addEventListener("touchstart", onTouchStart, true);
    document.addEventListener("touchend", onTouchEnd, true);
    
    renderer.view.touchstart = function(){
        
        isAdding = true;
    }
    
    renderer.view.touchend = function(){
        isAdding = false;
    }
    resize();
}

function onTouchStart(event) {
    isAdding = true;
}

function onTouchEnd(event) {
    isAdding = false;
}

// Отвечает за ресайз, при изменении размеров формы
function resize() {
    var width = $(window).width(); 
    var height = $(window).height(); 
    
    maxX = width;
    minX = 0;
    maxY = height;
    minY = 0;
    
    var w = $(window).width() / 2 - width/2;
    var h = $(window).height() / 2 - height/2;
    
    renderer.view.style.top = 0;
    renderer.resize(width, height);
}

// Отвечает за обновление и отрисовку
function update() {
    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];

        if (snowflake.rotationSpeed > snowflake.rotationMaxSpeed) {
            snowflake.rotationSpeed -= 0.2 / 57.29578;
        }
        snowflake.rotation += snowflake.rotationDirection * snowflake.rotationSpeed;

        if (! snowflake.dragging) {
            if (Math.abs(snowflake.speedX) > snowflake.speedXMax) {
                snowflake.speedX -= abs_value(snowflake.speedX) * 0.15;
            }
            if (Math.abs(snowflake.speedYMax) > snowflake.speedYMax) {
                snowflake.speedY -= abs_value(snowflake.speedY) * 0.15;
            }

            snowflake.position.x += snowflake.speedX;
            snowflake.position.y += snowflake.speedY;

             if (snowflake.position.x > maxX) {
                snowflake.speedX *= -1;
                snowflake.position.x = maxX;
            }
            else if (snowflake.position.x < minX) {
                snowflake.speedX *= -1;
                snowflake.position.x = minX;
            }
            
            if (snowflake.position.y > maxY) {
                snowflake.speedY *= -0.85;
                snowflake.position.y = maxY;
                snowflake.spin = (Math.random()-0.5) * 0.2
                if (Math.random() > 0.5) {
                    snowflake.speedY -= Math.random() * 2;
                }
            } 
            else if (snowflake.position.y < minY) {
                snowflake.speedY *= -1;
                snowflake.position.y = minY;
            }

            if (! snowflake.isLogo) {
                if (snowflake.countN == 1) {
                    snowflake.setTexture(textures[snowflake.textureId][0]);
                    if (parseInt(Math.random() * 10000)  < 5) {
                        snowflake.countN = 100 + parseInt(Math.random() * 200);
                        snowflake.setTexture(textures[snowflake.textureId][1]);
                    }
                } else {
                    snowflake.countN -= 1;
                }
                
            }
        }
    }
    renderer.render(stage);
    requestAnimFrame(update);
}

