var game = new Phaser.Game(800, 600, Phaser.AUTO, 'starport-traffic-control', { preload: preload, create: create, update: update });

var sunColor = 0xffd900;
var planetColor = 0x1ED47C;
var backgroundColor = 0xb466cc;

var graphics;

var planets;

function preload() {
}

function create() {
  graphics = game.add.graphics(0, 0);

  drawBackground();
}

function drawBackground() {
  game.stage.backgroundColor = backgroundColor;
  drawSun();
  drawPlanet();
}

function drawSun() {
  var radius = game.world.height / 2 ;
  graphics.beginFill(sunColor);
  graphics.drawEllipse(game.world.width + radius / 2, game.world.centerY, radius, radius);
  graphics.endFill();
}

function drawPlanet() {
  var radius = game.world.width / 12;
  graphics.beginFill(planetColor);
  graphics.drawEllipse(game.world.width / 8, game.world.centerY, radius, radius);
}

function update() {
}


Player = function(index, game) {
  this.game = game;
  this.name = index.toString();
  this.score = 0;
}
  
Ship = function(index, game, player) {
  this.name = index.toString();
  this.game = game;
  this.player = player;
}

