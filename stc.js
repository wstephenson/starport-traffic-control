var game = new Phaser.Game(800, 600, Phaser.AUTO, 'starport-traffic-control', { preload: preload, create: create, update: update });

var graphics;


var globalSystems = new Array();
var globalPlanetsCount = 1;

var globalPlayer;

function preload() {
}

function create() {
  globalPlayer = new Player("p1", game);
  
  graphics = game.add.graphics(0, 0);

  globalSystems[0] = new System('starter', initStarterSystem, game);
  
  for (var i = 0; i < globalSystems.length; i ++) {
    globalSystems[0].initFunction()
  }
  
  drawBackground(globalSystems[0]);
}

function update() {
    
}

// SETUP

function initStarterSystem() {
  initPlanets(this);  
  this.backgroundColor = 0xb466cc;
  this.starColor = 0xffd900;
  this.planetColor = 0x1ED47C;
  this.stationColor = 0x67CAFF;
  var traderCount = 10;
  for (var i = 0; i < traderCount; i++) {
    this.ships = new Ship('ship', game, globalPlayer);
  }
}

// 'LIBRARY' - VIEW

function drawBackground(system) {
  game.stage.backgroundColor = system.backgroundColor;
  drawStar(system);
  drawPlanets(system);
}

function drawStar(system) {
  var radius = game.world.height / 2 ;
  graphics.beginFill(system.starColor);
  graphics.drawEllipse(game.world.width + radius / 2, game.world.centerY, radius, radius);
  graphics.endFill();
}

function drawPlanets(system) {
  for (var i = 0; i < system.planets.length; i++) {
    planet = system.planets[i]
    // draw planet
    graphics.beginFill(system.planetColor);
    graphics.drawEllipse(planet.x, planet.y, planet.radius, planet.radius);
    graphics.endFill();
    
    drawStations(planet);
  }
}

function drawStations(planet) {
  for (var j = 0; j < planet.stations.length; j++) {
    station = planet.stations[j];
    graphics.beginFill(planet.system.stationColor);
    var stationX = planet.x + planet.radius * station.orbitFactor;
    var stationY = planet.y;
    var stationSideLength = planet.radius / 5;
    graphics.drawRect(stationX - stationSideLength / 2, stationY - stationSideLength / 2, stationSideLength, stationSideLength);
    graphics.endFill();
  } 
}

// 'LIBRARY' - MODEL

function initPlanets(system) {
  system.planets = new Array();
  for (var i = 0; i < globalPlanetsCount; i++) {
    system.planets[i] = new Planet(system);
  }
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

Station = function(index, planet, game, player) {
  this.name = index.toString();
  this.game = game;
  this.player = player;
  this.planet = planet;
  this.orbitFactor = 1.3;
}
    
Planet = function(system) {
  this.x = game.world.width / 8;
  this.y = game.world.centerY;
  this.radius = game.world.width / 12;
  this.system = system;
  this.stations = new Array();
  this.stations[0] = new Station('cori', this, game, globalPlayer); 
}

System = function(index, initFunction, game) {
  this.name = index.toString();
  this.initFunction = initFunction;
  this.ships = new Array();
}

System.prototype.entryPoint = function() {
  return [game.world.centerX, game.world.centerY];
}

