#IMPLEMENTATION NOTES

TODO OBJECTS figure out JS polymorphism

TODO AI control ships' movement
TODO POLICE control police execution of tasks
TODO GAMELOOP-SCORING ship event handling - reaching score zones
TODO RECOGNITION ship event handling - blip resolution; recognising actual role
TODO EVENTS ship event handling - attacks - could hide this behind 'interdiction' off screen

TODO ROLES make ships have different apparent roles and effective roles
TODO design ship types - speed, attack, defence, hitpoints, value

TODO draw ship models
TODO scoring logic

AI
each role has an objective.  
Traders,Liners: travel to starport, avoid pirates
Miners: travel to starport then travel to mining site, mine, repeat
Pirates: attack traders/miners, avoid police
Smugglers: travel to starport, avoid police
Police: player assigned

ROLES
MobileEntity
  EffectiveRole - (variable) role as currently seen by player - determines sprite.
  Role - fixed role - may not be Blip. determines behaviour.  If R != ER && ER != blip, ship is imitating something else so it may take behaviour from ER until some condition is fulfilled.
  x, y

Roles:
Blip
Trader
Smuggler
Miner
Pirate
Police
Liner