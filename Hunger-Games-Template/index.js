// Player list
const players = [
  { name: 'Player 1', health: 100, alive: true },
  { name: 'Player 2', health: 100, alive: true },
  { name: 'Player 3', health: 100, alive: true },
  { name: 'Player 4', health: 100, alive: true }
];

// Function to get a random player
function getRandomPlayer() {
  const alivePlayers = players.filter(player => player.alive);
  const randomIndex = Math.floor(Math.random() * alivePlayers.length);
  return alivePlayers[randomIndex];
}

// Function to attack a player
function attackPlayer(attacker, victim) {
  const damage = Math.floor(Math.random() * 20) + 10;
  victim.health -= damage;

  if (victim.health <= 0) {
    victim.alive = false;
    console.log(`${victim.name} has been eliminated from the game.`);
  } else {
    console.log(`${attacker.name} attacked ${victim.name} and dealt ${damage} points of damage.`);
  }
}

// Function to heal a player
function healPlayer(player) {
  const healAmount = Math.floor(Math.random() * 10) + 10;
  player.health += healAmount;
  
  if (player.health > 100) {
    player.health = 100;
  }
  
  console.log(`${player.name} has been healed and now has ${player.health} health.`);
}

// Main function to simulate the Hunger Games
function simulateHungerGames() {
  while (players.filter(player => player.alive).length > 1) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber > 1) {
      const attacker = getRandomPlayer();
      const victim = getRandomPlayer();
      
      if (attacker !== victim && attacker.alive && victim.alive) {
        attackPlayer(attacker, victim);
      }
    } else {
      const lucky = getRandomPlayer();
      
      if (lucky.alive) {
        healPlayer(lucky);
      }
    }
  }

  const winner = players.find(player => player.alive);
  console.log(`${winner.name} has won the Hunger Games!`);
}

// Start the simulation
simulateHungerGames();
