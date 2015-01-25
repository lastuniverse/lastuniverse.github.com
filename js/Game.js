var game = new Phaser.Game(827, 600, Phaser.AUTO, 'phaser-example', {preload: preload, create:create});
 
function preload(){
    game.load.image('bg', 'assets/bg.png');
    game.load.image('ufo', 'assets/ufo.png');
}
 
function create() {
    game.add.sprite(0, 0, 'bg');
 
    var ufo = game.add.sprite(413, 900, 'ufo');
    ufo.anchor.set(0.5);
 
    var ufoTween = game.add.tween(ufo);
    ufoTween.to( {y: ufo.y - 1170}, 8000, Phaser.Easing.Sinusoidal.InOut, true);
    ufoTween.to( {y: ufo.y}, 8000, Phaser.Easing.Sinusoidal.InOut, true);

    ufoTween.loop();
}