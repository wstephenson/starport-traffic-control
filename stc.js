var game = new Phaser.Game(800, 600, Phaser.AUTO, 'starport-traffic-control', { preload: preload, create: create, update: update });

var sunColor = 0xffd900;
var planetColor = 0x1ED47C;
var backgroundColor = 0xb466cc;

var graphics;

var planets = new Array();

var planetsCount = 1;

function preload() {
}

function create() {
  graphics = game.add.graphics(0, 0);

  initPlanets();

  drawBackground();

}

function initPlanets() {
  for (var i = 0; i < planetsCount; i++) {
    planets[i] = new Planet();
  }
}

function drawBackground() {
  game.stage.backgroundColor = backgroundColor;
  drawSun();
  drawPlanets();
}

function drawSun() {
  var radius = game.world.height / 2 ;
  graphics.beginFill(sunColor);
  graphics.drawEllipse(game.world.width + radius / 2, game.world.centerY, radius, radius);
  graphics.endFill();
}

function drawPlanets() {
  for (var i = 0; i < planets.length; i++) {
    planet = planets[i]
    graphics.beginFill(planet.color);
    graphics.drawEllipse(planet.x, planet.y, planet.radius, planet.radius);
    graphics.endFill();
  }
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

Planet = function() {
  this.color = planetColor;
  this.x = game.world.width / 8;
  this.y = game.world.centerY;
  this.radius = game.world.width / 12;
}
