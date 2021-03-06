var game = new Phaser.Game(800, 600, Phaser.AUTO, 'starport-traffic-control', { preload: preload, create: create, update: update });

var graphics;


var globalSystems = new Array();
var globalPlanetsCount = 1;

var globalPlayer;

var testShip;
var testStation;

function preload() {
  game.load.image('ship', 'assets/sprites/ship.png');
  game.load.image('station', 'assets/sprites/coriolis.png');
}

function create() {
  globalPlayer = new Player("p1", game);
  
  graphics = game.add.graphics(0, 0);

  globalSystems[0] = new System('starter', initStarterSystem, game);
  
  for (var i = 0; i < globalSystems.length; i ++) {
    globalSystems[0].initFunction()
  }
  
  drawBackground(globalSystems[0]);
  testShip = game.add.sprite(globalSystems[0].entryPoint()[0], globalSystems[0].entryPoint()[1], 'ship');
  testShip.anchor.setTo(0.5, 0.5);
}

function update() {
  testShip.angle++;
}

// SETUP

function initStarterSystem() {
  initPlanets(this);  
  this.backgroundColor = 0xb466cc;
  this.starColor = 0xffd900;
  this.planetColor = 0x1ED47C;
  this.stationColor = 0x67CAFF;

  this.starRadius = game.world.height / 2;
  var traderCount = 10;
  for (var i = 0; i < traderCount; i++) {
    this.ships = new Unit('ship', game, globalPlayer);
  }
}

// 'LIBRARY' - VIEW

function drawBackground(system) {
  game.stage.backgroundColor = system.backgroundColor;
  drawStar(system);
  drawPlanets(system);
}

function drawStar(system) {
  graphics.beginFill(system.starColor);
  var starCoords = system.starCoords();
  graphics.drawEllipse(starCoords[0], starCoords[1], system.starRadius, system.starRadius);
  graphics.endFill();
  //graphics.beginFill(0xffffff);
  //graphics.drawEllipse(system.entryPoint()[0], system.entryPoint()[1], 10,10);
  //graphics.endFill();
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
    var stationX = planet.x + planet.radius * station.orbitFactor;
    var stationY = planet.y;
    var stationSideLength = planet.radius / 5;
    graphics.beginFill(planet.system.stationColor);
    //graphics.drawRect(stationX - stationSideLength / 2, stationY - stationSideLength / 2, stationSideLength, stationSideLength);
    //graphics.endFill();
    testStation = game.add.image(stationX, stationY, 'station');
    testStation.anchor.setTo(0.5, 0.5);
  } 
}

// 'LIBRARY' - MODEL

function initPlanets(system) {
  system.planets = new Array();
  for (var i = 0; i < globalPlanetsCount; i++) {
    system.planets[i] = new Planet(system);
  }
}

RoleEnum = {
  BLIP: 1,
  TRADER: 2,
  PIRATE: 3,
  POLICE: 4
}
  
Player = function(index, game) {
  this.game = game;
  this.name = index.toString();
  this.score = 0;
}
  
// base for all ships
Unit = function(index, player) {
  this.name = index.toString();
  this.player = player;
}

// Trader class
function Trader(player) {
  Unit.call(this, 'trader', player);
  // TODO: add value
}

Trader.prototype = Object.create(Unit.prototype);

Trader.prototype.constructor = Trader;

// Pirate class
function Pirate(player) {
  Unit.call(this, 'pirate', player);
}

Pirate.prototype = Object.create(Unit.prototype);

Pirate.prototype.constructor = Pirate;
  
// Police class
function Police(player) {
  Unit.call(this, 'police', player);
}

Police.prototype = Object.create(Unit.prototype);

Police.prototype.constructor = Police;
  

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
  return [this.starCoords()[0] - this.starRadius * 1.1, this.starCoords()[1]];
}

System.prototype.starCoords = function()
{
  return [game.world.width + this.starRadius / 2, game.world.centerY];
}
