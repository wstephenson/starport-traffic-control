SETTING: a star system

ROLE: security/traffic controller

OBJECTIVE: achieve a high score

SCORING: 
friendlies reaching port score
traders higher score
pirates killing friendlies give penalties
pirates approaching friendlies makes them flee, therefore no score
security killing pirates gives bonus
smugglers reaching port, penalty

##GAMEPLAY
Gameplay revolves around identifying and responding to threats, giving a safe environment allowing economic activity to increase score.

##ENTITIES
###Systems
Systems are levels with names, different ship activity, colour palettes and victory conditions.

###Players/factions
These represent opposing or neutral sides.  The player represents the faction owning the system. Each faction has a 'score' which can increase or decrease.  Victory conditions can be to reach a particular score, keep the score above zero, or prevent an opposing faction from reaching a score.

###Blips
Blips represent newly arrived ships which have not been resolved by the player.  They can be friendly or hostile.  They are resolved by proximity to friendly ships - either police or civilians.  Police resolve blips at a greater distance than civilians.

###Traders
Traders are the basic way to score in the game.  These civilian ships arrive at the system entry point and travel to a station.  When they arrive at a station the player receives a score depending on the value of the trader.  Trader value increases with game level.  However, larger traders are slower and vulnerable to pirate attack for longer.

###Miners
Miners are similar to traders, only they travel in-system between mining sites and stations.  At mining sites and en route they can be attacked by pirates

###Liners
Liners are a kind of bonus craft that bring a high score.  If they are attacked by pirates, the pirates will kidnap the passengers and attempt to escape, bringing a large penalty.

###Pirates
Pirates are the basic opponent.  They attack civilians and attempt to steal their cargo.  When they successfully attack, a percentage of the value of the trader is added to the pirate faction score.  

###Smugglers
Smugglers attempt to bring contraband into the system,  They behave much like traders but apply a penalty if they reach the starport.  Only police craft can identify a smuggler - if a blip is resolved by a civilian it will appear to be a trader or miner.  Unidentified Smugglers may give clues to their identity based on how they move, they may be slightly faster than real traders or move out of the way of approaching police craft.

###Police 
Police are the basic pawns under the player's control.  When they intercept hostile craft, they generally destroy them.  Police are visible to all other ships at a great range.

###Starports
Starports are the destination (score point) for civilians and the origin for police craft.
FUTURE: pirate starports 

###Arrival points
Arrival points are where ships enter the system.  This is generally an arc near to the star.  Pirates and smugglers may enter outside of the orbital plane.

##Special events:
###War - between two navies, objective is to keep civilian traffic out of the conflict
###Solar flare - damages traders, police must reroute them.
###VIP - requires escort

##DESIGN QUESTIONS
How to prevent pirates jumping arriving traders at the star?  Neutral zone?  Pirates enter somewhere else?

Is this the same problem as just parking a cop between the arrival point and the station and letting them scan/attack everything that passes?

Do police have to return to the station after attacking a pirate?

Do pirates try to leave the system after attacking, giving an interception possibility?

Control of the police - send them to a point and they automatically do what is needed?  What if more than one task is possible at any point?  More fine grained orders eg capture, destroy, escort?

POLICE 
("ER-" = effective role)
vs ER-BLIP - approach and resolve R
vs ER-TRADER - scan for R-SMUGGLER
vs ER-MINER - nothing?
vs ER-SMUGGLER - destroy
vs ER-PIRATE - destroy
vs ER-POLICE - nothing
vs ER-LINER - nothing
