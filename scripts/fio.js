// mods by Patrick OReilly
// Twitter: @pato_reilly Web: http://patricko.byethost9.com

var game = new Phaser.Game(1400, 900, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('fiohoofd', '\\images\\fio\\fiohoofd.png');
    game.load.image('kathoofd', '\\images\\fio\\kathoofd.png');
    game.load.image('banaan', '\\images\\fio\\banaan.png');
    game.load.image('augurk', '\\images\\fio\\augurk.png');
    game.load.image("background", "\\images\\fio\\IMG_5138.jpg");
}

var image;
var augurk;
var banaan;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    var amount = 20;



    for(var i = 0; i<amount; i++) {
      var x = 1;
      if(i%2==0) { x=-1}

      //  This creates a simple sprite that is using our loaded image and displays it on-screen and assign it to a variable
      image = game.add.sprite(game.rnd.integerInRange(200, 1200), game.rnd.integerInRange(150, 250), 'fiohoofd');
      game.physics.enable(image, Phaser.Physics.ARCADE);
      //  This gets it moving
      image.body.velocity.setTo(game.rnd.integerInRange(100, 500)*x, game.rnd.integerInRange(0,100));
      //  This makes the game world bounce-able
      image.body.collideWorldBounds = true;
      //  This sets the image bounce energy for the horizontal  and vertical vectors (as an x,y point). "1" is 100% energy return
      image.body.bounce.set(1.0);
      image.body.gravity.set(0, game.rnd.integerInRange(100, 220));
    }

    for(var i = 0; i<amount*3; i++) {
      var x = 1;
      if(i%2==0) { x=-1}
      //  This creates a simple sprite that is using our loaded image and displays it on-screen and assign it to a variable
      image = game.add.sprite(game.rnd.integerInRange(200, 1300), game.rnd.integerInRange(150, 250), 'kathoofd');
      game.physics.enable(image, Phaser.Physics.ARCADE);
      //  This gets it moving

      image.body.velocity.setTo(game.rnd.integerInRange(100, 500)*x, game.rnd.integerInRange(0,100));
      //  This makes the game world bounce-able
      image.body.collideWorldBounds = true;
      //  This sets the image bounce energy for the horizontal  and vertical vectors (as an x,y point). "1" is 100% energy return
      image.body.bounce.set(1.0);
      image.body.gravity.set(0, game.rnd.integerInRange(100, 220));
    }

    banaan = game.add.sprite(game.rnd.integerInRange(200, 1300), game.rnd.integerInRange(150, 250), 'banaan');
    game.physics.enable(banaan, Phaser.Physics.ARCADE);
    banaan.body.velocity.setTo(game.rnd.integerInRange(200, 600), game.rnd.integerInRange(300,1000));
    banaan.body.collideWorldBounds = true;
    banaan.body.bounce.set(1.0);
    banaan.body.gravity.set(0, game.rnd.integerInRange(100, 220));
    banaan.anchor.setTo(0.5,0.5);

    augurk = game.add.sprite(game.rnd.integerInRange(200, 1300), game.rnd.integerInRange(150, 250), 'augurk');
    game.physics.enable(augurk, Phaser.Physics.ARCADE);
    augurk.body.velocity.setTo(game.rnd.integerInRange(10, 110), game.rnd.integerInRange(0,100));
    augurk.body.collideWorldBounds = true;
    augurk.body.bounce.set(1.0);

    augurk.body.gravity.set(0, game.rnd.integerInRange(100, 220));

    augurk.anchor.setTo(0.5,0.5);


}


function update () {
augurk.angle +=1;
banaan.angle-=6;

}

function render () {

    //debug helper
    //game.debug.spriteInfo(image, 32, 32);

}
