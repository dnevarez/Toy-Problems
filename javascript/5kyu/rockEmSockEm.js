// You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.
//
// Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.
//
// Your job is to decide who wins.
//
// Example:
//
//  robot1 = {
//   "name": "Rocky",
//   "health": 100,
//   "speed": 20,
//   "tactics": ["punch", "punch", "laser", "missle"]
//  }
//  robot2 = {
//    "name": "Missile Bob",
//    "health": 100,
//    "speed": 21,
//    "tactics": ["missle", "missle", "missle", "missle"]
//  }
//  tactics = {
//    "punch": 20,
//    "laser": 30,
//    "missile": 35
//  }
//
//  fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."
// robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.
//
// Rules
//
// A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
// Robots alternate turns attacking. Tactics are used in order.
// A fight is over when a robot has 0 or less health or both robots have run out of tactics.
// A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
// If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
// If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."

// My Answer

function fight (robot1, robot2, tactics) {
   // Keep track of tactics. Count will allow us to iterate through tactics in order.
   var count = 0
   // Who goes first
   if (robot2.speed > robot1.speed) {
     var first = robot2,
     second = robot1
   } else { first = robot1; second = robot2;}
   // Attacks
  while (first.health > 1 || second.health > 1) {
    // If first hasn't used all tactics, subtract attack from from health of second
    if (first.tactics[count]) second.health -= tactics[first.tactics[count]];
        // Ensure loop breaks once health is at zero.
        if (second.health <= 0) break;
    // If second hasn't used all tactics, subtract attack from from health of first
    if (second.tactics[count]) first.health -= tactics[second.tactics[count]]
        // Ensure loop breaks once health is at zero.
        if (first.health <= 0) break;
    // If both fighters have used all their tactics, break loop.
    if (!first.tactics[count] && !second.tactics[count]) break;

    // Raise count by 1.
    count+= 1;
  }
  // Return who won or if fight was a draw.
  if (first.health > second.health) return first.name + ' has won the fight.';
  else if (second.health > first.health) return second.name + ' has won the fight.';
  else if (first.health === second.health) return 'The fight was a draw.'
 }

 // Clever Answer

 function fight(r1, r2, tactic) {
  if (r1.speed < r2.speed) [r1, r2] = [r2, r1];
  while(r1.tactics.length || r2.tactics.length) {
    if (r1.tactics.length) r2.health -= tactic[r1.tactics.shift()];
    if (r2.health <= 0) break;
    if (r2.tactics.length) r1.health -= tactic[r2.tactics.shift()];
    if (r2.health <= 0) break;
  }
  if (r1.health == r2.health) return "The fight was a draw.";
  return `${(r1.health>r2.health)?r1.name:r2.name} has won the fight.`;
}
