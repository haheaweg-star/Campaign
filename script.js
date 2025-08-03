// Game state
const gameState = {
    playerLevel: 57,
    playerGold: 14795215,
    playerGems: 684,
    characterPosition: { x: 50, y: 50 }, // Percentage position
    nearBuilding: null,
    currentCity: null,
    viewportPosition: { x: 0, y: 0 },
    npcs: [],
    vehicles: [],
    isMoving: false,
    lastDirection: 'right',
    blimpPosition: { x: 10, y: 10 },
    blimpTarget: null,
    blimpMoving: false
};
// City data
const cityData = {
    1: {
        name: "Desert Mirage City",
        level: 0
    },
    2: {
        name: "Rocket Bay City",
        level: 50
    },
    3: {
        name: "Carnival Core",
        level: 100
    },
    4: {
        name: "Treehouse Heights",
        level: 200
    },
    5: {
        name: "Frostfall Ridge",
        level: 300
    },
    6: {
        name: "Jungle Reef Island",
        level: 400
    },
    7: {
        name: "Haunted Hollow",
        level: 600
    },
    8: {
        name: "Tech Capital City",
        level: 750
    },
    9: {
        name: "Candy Corners",
        level: 900
    },
    10: {
        name: "Peanuts Pier",
        level: 1000
    }
};
// Building data
const buildingData = {
    house: {
        name: "Farmhouse",
        type: "house",
        game: "house",
        info: "Your home"
    },
    shop: {
        name: "Pierre's Shop",
        type: "shop",
        game: "shop",
        info: "Buy seeds and supplies"
    },
    saloon: {
        name: "Stardrop Saloon",
        type: "saloon",
        game: "saloon",
        info: "Eat and socialize"
    },
    blacksmith: {
        name: "Blacksmith",
        type: "blacksmith",
        game: "blacksmith",
        info: "Upgrade tools"
    },
    library: {
        name: "Library",
        type: "library",
        game: "library",
        info: "Learn new skills"
    }
};
// Game data
const gameData = {
    house: {
        title: "Farmhouse",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Welcome to your Farmhouse</h3>
                    <div style="background: rgba(50, 40, 30, 0.7); border-radius: 10px; padding: 20px; max-width: 400px; margin: 0 auto;">
                        <div style="margin-bottom: 15px;">
                            <div style="font-size: 18px; margin-bottom: 10px;">What would you like to do?</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <button class="action-button" style="width: 100%;">Sleep (Restore Energy)</button>
                            <button class="action-button" style="width: 100%;">Cook a Meal</button>
                            <button class="action-button" style="width: 100%;">Decorate</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Sleep';
            document.getElementById('gameAction2').textContent = 'Cook';
            document.getElementById('gameGold').textContent = gameState.playerGold.toLocaleString();
        }
    },
    shop: {
        title: "Pierre's Shop",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Welcome to Pierre's Shop</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 500px; margin: 0 auto;">
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🌱</div>
                            <div>Parsnip Seeds</div>
                            <div style="color: #d4af37; font-weight: bold;">20 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🥕</div>
                            <div>Carrot Seeds</div>
                            <div style="color: #d4af37; font-weight: bold;">30 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🥔</div>
                            <div>Potato Seeds</div>
                            <div style="color: #d4af37; font-weight: bold;">40 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🍅</div>
                            <div>Tomato Seeds</div>
                            <div style="color: #d4af37; font-weight: bold;">50 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🌽</div>
                            <div>Corn Seeds</div>
                            <div style="color: #d4af37; font-weight: bold;">60 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🥬</div>
                            <div>Kale Seeds</div>
                            <div style="color: #d4af37; font-weight: bold;">70 Gold</div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Buy';
            document.getElementById('gameAction2').textContent = 'Sell';
            document.getElementById('gameGold').textContent = gameState.playerGold.toLocaleString();
        }
    },
    saloon: {
        title: "Stardrop Saloon",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Welcome to the Stardrop Saloon</h3>
                    <div style="background: rgba(50, 40, 30, 0.7); border-radius: 10px; padding: 20px; max-width: 400px; margin: 0 auto;">
                        <div style="margin-bottom: 15px;">
                            <div style="font-size: 18px; margin-bottom: 10px;">What can I get for you?</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <div style="display: flex; justify-content: space-between;">
                                <div>Beer</div>
                                <div style="color: #d4af37; font-weight: bold;">50 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Wine</div>
                                <div style="color: #d4af37; font-weight: bold;">100 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Salad</div>
                                <div style="color: #d4af37; font-weight: bold;">120 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Pizza</div>
                                <div style="color: #d4af37; font-weight: bold;">200 Gold</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Buy Food';
            document.getElementById('gameAction2').textContent = 'Buy Drink';
            document.getElementById('gameGold').textContent = gameState.playerGold.toLocaleString();
        }
    },
    blacksmith: {
        title: "Blacksmith",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Welcome to the Blacksmith</h3>
                    <div style="background: rgba(50, 40, 30, 0.7); border-radius: 10px; padding: 20px; max-width: 400px; margin: 0 auto;">
                        <div style="margin-bottom: 15px;">
                            <div style="font-size: 18px; margin-bottom: 10px;">Upgrade your tools</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <div style="display: flex; justify-content: space-between;">
                                <div>Hoe Upgrade</div>
                                <div style="color: #d4af37; font-weight: bold;">500 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Watering Can Upgrade</div>
                                <div style="color: #d4af37; font-weight: bold;">500 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Pickaxe Upgrade</div>
                                <div style="color: #d4af37; font-weight: bold;">500 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Axe Upgrade</div>
                                <div style="color: #d4af37; font-weight: bold;">500 Gold</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Upgrade';
            document.getElementById('gameAction2').textContent = 'Repair';
            document.getElementById('gameGold').textContent = gameState.playerGold.toLocaleString();
        }
    },
    library: {
        title: "Library",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Welcome to the Library</h3>
                    <div style="background: rgba(50, 40, 30, 0.7); border-radius: 10px; padding: 20px; max-width: 400px; margin: 0 auto;">
                        <div style="margin-bottom: 15px;">
                            <div style="font-size: 18px; margin-bottom: 10px;">Learn new skills</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <div style="display: flex; justify-content: space-between;">
                                <div>Farming Guide</div>
                                <div style="color: #d4af37; font-weight: bold;">100 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Fishing Guide</div>
                                <div style="color: #d4af37; font-weight: bold;">100 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Mining Guide</div>
                                <div style="color: #d4af37; font-weight: bold;">100 Gold</div>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <div>Combat Guide</div>
                                <div style="color: #d4af37; font-weight: bold;">100 Gold</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Study';
            document.getElementById('gameAction2').textContent = 'Research';
            document.getElementById('gameGold').textContent = gameState.playerGold.toLocaleString();
        }
    }
};
// NPC dialogue data
const npcDialogues = [
    {
        name: "Pierre",
        dialogues: [
            {
                text: "Welcome to my shop! I have the best seeds in town.",
                options: [
                    { text: "I'm looking for seeds.", next: 1 },
                    { text: "Just browsing.", next: 2 }
                ]
            },
            {
                text: "Great! I have parsnip, carrot, and potato seeds available today.",
                options: [
                    { text: "I'll take some parsnip seeds.", next: -1 },
                    { text: "I'll be back later.", next: -1 }
                ]
            },
            {
                text: "Feel free to look around. Let me know if you need anything!",
                options: [
                    { text: "Thanks, I will.", next: -1 }
                ]
            }
        ]
    },
    {
        name: "Gus",
        dialogues: [
            {
                text: "Welcome to the Stardrop Saloon! What can I get for you?",
                options: [
                    { text: "I'll have a beer.", next: 1 },
                    { text: "Do you have any food?", next: 2 }
                ]
            },
            {
                text: "Coming right up! Here's your cold beer.",
                options: [
                    { text: "Thanks!", next: -1 }
                ]
            },
            {
                text: "We have pizza, salad, and other dishes. What would you like?",
                options: [
                    { text: "I'll have the pizza.", next: -1 }
                ]
            }
        ]
    },
    {
        name: "Clint",
        dialogues: [
            {
                text: "I'm the blacksmith. Need something upgraded?",
                options: [
                    { text: "Yes, I want to upgrade my tools.", next: 1 },
                    { text: "Just looking around.", next: 2 }
                ]
            },
            {
                text: "I can upgrade your tools for a price. What do you need upgraded?",
                options: [
                    { text: "I'll come back when I have the money.", next: -1 }
                ]
            },
            {
                text: "Let me know if you need anything. I'm always here.",
                options: [
                    { text: "Thanks, I will.", next: -1 }
                ]
            }
        ]
    }
];
// DOM elements
const worldMapContainer = document.getElementById('worldMapContainer');
const citySceneContainer = document.getElementById('citySceneContainer');
const cityScene = document.getElementById('cityScene');
const mainCharacter = document.getElementById('mainCharacter');
const mainCharacterHair = document.getElementById('mainCharacterHair');
const interactionPrompt = document.getElementById('interactionPrompt');
const cloudTransition = document.getElementById('cloudTransition');
const minimap = document.getElementById('minimap');
const minimapPlayer = document.getElementById('minimapPlayer');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuPanel = document.getElementById('menuPanel');
const backButton = document.getElementById('backButton');
const mainMenuButton = document.getElementById('mainMenuButton');
const helpButton = document.getElementById('helpButton');
const helpModal = document.getElementById('helpModal');
const closeHelpModal = document.getElementById('closeHelpModal');
const dialogueModal = document.getElementById('dialogueModal');
const closeDialogueModal = document.getElementById('closeDialogueModal');
const dialogueAvatar = document.getElementById('dialogueAvatar');
const dialogueName = document.getElementById('dialogueName');
const dialogueText = document.getElementById('dialogueText');
const dialogueOptions = document.getElementById('dialogueOptions');
const gameModal = document.getElementById('gameModal');
const gameTitle = document.getElementById('gameTitle');
const gameArea = document.getElementById('gameArea');
const closeGameModal = document.getElementById('closeGameModal');
const leaveGame = document.getElementById('leaveGame');
const menuLevel = document.getElementById('menuLevel');
const menuGold = document.getElementById('menuGold');
const menuGems = document.getElementById('menuGems');
const blimp = document.getElementById('blimp');
// Movement keys state
const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false
};
// Initialize game
function initGame() {
    // Update menu
    updateMenu();
    
    // Update cloud covers based on player level
    updateCloudCovers();
    
    // Add click event to map islands
    document.querySelectorAll('.map-island').forEach(island => {
        island.addEventListener('click', () => {
            const cityId = parseInt(island.getAttribute('data-city'));
            const cityLevel = parseInt(island.getAttribute('data-level'));
            
            // Check if player level is sufficient
            if (gameState.playerLevel < cityLevel) {
                showNotification(`You need to reach level ${cityLevel} to access this city!`);
                return;
            }
            
            // Move blimp to island
            moveBlimpToIsland(island);
        });
    });
    
    // Hamburger menu event
    hamburgerMenu.addEventListener('click', toggleMenu);
    
    // Back and main menu button events
    backButton.addEventListener('click', backToMap);
    mainMenuButton.addEventListener('click', mainMenu);
    
    // Help button event
    helpButton.addEventListener('click', () => {
        helpModal.style.display = 'flex';
    });
    
    // Close help modal event
    closeHelpModal.addEventListener('click', () => {
        helpModal.style.display = 'none';
    });
    
    // Close dialogue modal event
    closeDialogueModal.addEventListener('click', () => {
        dialogueModal.style.display = 'none';
    });
    
    // Close game modal event
    closeGameModal.addEventListener('click', closeGameModalHandler);
    leaveGame.addEventListener('click', closeGameModalHandler);
    gameModal.addEventListener('click', (e) => {
        if (e.target === gameModal) closeGameModalHandler();
    });
    
    // Keyboard events for character movement
    document.addEventListener('keydown', (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = true;
            
            // Update movement state
            if (!gameState.isMoving) {
                gameState.isMoving = true;
                updateCharacterAnimation();
            }
        }
        
        // Interaction key
        if (e.key === 'e' || e.key === 'E') {
            if (gameState.nearBuilding) {
                enterBuilding(gameState.nearBuilding);
            }
        }
    });
    
    document.addEventListener('keyup', (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = false;
            
            // Check if any movement key is still pressed
            const anyKeyPressed = Object.values(keys).some(val => val);
            if (!anyKeyPressed && gameState.isMoving) {
                gameState.isMoving = false;
                updateCharacterAnimation();
            }
        }
    });
}
// Update cloud covers based on player level
function updateCloudCovers() {
    document.querySelectorAll('.map-island').forEach(island => {
        const cityLevel = parseInt(island.getAttribute('data-level'));
        const cloudCover = island.querySelector('.island-cloud-cover');
        
        if (gameState.playerLevel < cityLevel) {
            cloudCover.style.display = 'block';
        } else {
            cloudCover.style.display = 'none';
        }
    });
}
// Move blimp to island
function moveBlimpToIsland(island) {
    if (gameState.blimpMoving) return;
    
    gameState.blimpMoving = true;
    gameState.blimpTarget = island;
    
    const islandRect = island.getBoundingClientRect();
    const mapRect = document.querySelector('.poptropica-map').getBoundingClientRect();
    
    const targetX = ((islandRect.left + islandRect.width / 2 - mapRect.left) / mapRect.width) * 100;
    const targetY = ((islandRect.top + islandRect.height / 2 - mapRect.top - 30) / mapRect.height) * 100;
    
    blimp.style.left = `${targetX}%`;
    blimp.style.top = `${targetY}%`;
    
    // After blimp reaches island, enter city
    setTimeout(() => {
        gameState.blimpMoving = false;
        enterCity(island);
    }, 2000);
}
// Enter a city
function enterCity(island) {
    const cityId = parseInt(island.getAttribute('data-city'));
    const cityLevel = parseInt(island.getAttribute('data-level'));
    
    // Check if player level is sufficient
    if (gameState.playerLevel < cityLevel) {
        showNotification(`You need to reach level ${cityLevel} to access this city!`);
        return;
    }
    
    // Set current city
    gameState.currentCity = cityId;
    
    // Hide world map and show city scene
    worldMapContainer.style.display = 'none';
    citySceneContainer.style.display = 'block';
    
    // Show cloud transition
    cloudTransition.style.display = 'block';
    
    // After cloud transition, initialize city
    setTimeout(() => {
        cloudTransition.style.display = 'none';
        initializeCity();
    }, 4000);
}
// Initialize city scene
function initializeCity() {
    // Reset character position
    gameState.characterPosition = { x: 50, y: 50 };
    gameState.viewportPosition = { x: 0, y: 0 };
    
    // Update character position
    updateCharacterPosition();
    
    // Show UI elements
    minimap.style.display = 'block';
    
    // Generate NPCs
    generateNPCs();
    
    // Start game loop
    gameLoop();
}
// Generate NPCs
function generateNPCs() {
    // Clear existing NPCs
    document.querySelectorAll('.npc').forEach(npc => npc.remove());
    gameState.npcs = [];
    
    // Generate 10 NPCs
    for (let i = 0; i < 10; i++) {
        const npc = createNPC(i);
        gameState.npcs.push(npc);
        cityScene.appendChild(npc.element);
    }
}
// Create an NPC
function createNPC(index) {
    const npc = document.createElement('div');
    npc.className = 'character npc';
    
    // Create NPC parts
    const legs = document.createElement('div');
    legs.className = 'character-legs';
    const leg1 = document.createElement('div');
    leg1.className = 'character-leg';
    const foot1 = document.createElement('div');
    foot1.className = 'character-foot character-foot-left';
    leg1.appendChild(foot1);
    const leg2 = document.createElement('div');
    leg2.className = 'character-leg';
    const foot2 = document.createElement('div');
    foot2.className = 'character-foot character-foot-right';
    leg2.appendChild(foot2);
    legs.appendChild(leg1);
    legs.appendChild(leg2);
    
    const body = document.createElement('div');
    body.className = 'character-body';
    
    const armLeft = document.createElement('div');
    armLeft.className = 'character-arm character-arm-left';
    const handLeft = document.createElement('div');
    handLeft.className = 'character-hand character-hand-left';
    armLeft.appendChild(handLeft);
    
    const armRight = document.createElement('div');
    armRight.className = 'character-arm character-arm-right';
    const handRight = document.createElement('div');
    handRight.className = 'character-hand character-hand-right';
    armRight.appendChild(handRight);
    
    const head = document.createElement('div');
    head.className = 'character-head';
    
    const eyes = document.createElement('div');
    eyes.className = 'character-eyes';
    const eye1 = document.createElement('div');
    eye1.className = 'character-eye';
    const iris1 = document.createElement('div');
    iris1.className = 'character-iris';
    const eyelid1 = document.createElement('div');
    eyelid1.className = 'character-eyelid';
    eye1.appendChild(iris1);
    eye1.appendChild(eyelid1);
    const eye2 = document.createElement('div');
    eye2.className = 'character-eye';
    const iris2 = document.createElement('div');
    iris2.className = 'character-iris';
    const eyelid2 = document.createElement('div');
    eyelid2.className = 'character-eyelid';
    eye2.appendChild(iris2);
    eye2.appendChild(eyelid2);
    eyes.appendChild(eye1);
    eyes.appendChild(eye2);
    
    const mouth = document.createElement('div');
    mouth.className = 'character-mouth';
    
    const hair = document.createElement('div');
    hair.className = 'character-hair';
    
    // Randomize NPC appearance
    const hairColors = ['#8d6e63', '#5d4037', '#3e2723', '#ffccbc', '#ffab91', '#ff8a65'];
    const hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    hair.style.backgroundColor = hairColor;
    
    const bodyColors = ['#ff9e80', '#ffab91', '#ffccbc', '#ff8a65', '#ff7043'];
    const bodyColor = bodyColors[Math.floor(Math.random() * bodyColors.length)];
    body.style.backgroundColor = bodyColor;
    
    // Assemble NPC
    head.appendChild(eyes);
    head.appendChild(mouth);
    npc.appendChild(legs);
    npc.appendChild(body);
    npc.appendChild(armLeft);
    npc.appendChild(armRight);
    npc.appendChild(head);
    npc.appendChild(hair);
    
    // Random position on path
    const paths = [
        { top: '35%', left: '0%', width: '100%', height: '20px', horizontal: true },
        { top: '65%', left: '0%', width: '100%', height: '20px', horizontal: true },
        { top: '0%', left: '35%', width: '20px', height: '100%', horizontal: false },
        { top: '0%', left: '65%', width: '20px', height: '100%', horizontal: false }
    ];
    
    const path = paths[Math.floor(Math.random() * paths.length)];
    
    let position;
    if (path.horizontal) {
        position = {
            x: Math.random() * 90 + 5,
            y: parseFloat(path.top) + 10
        };
    } else {
        position = {
            x: parseFloat(path.left) + 10,
            y: Math.random() * 90 + 5
        };
    }
    
    npc.style.left = `${position.x}%`;
    npc.style.top = `${position.y}%`;
    
    // Add click event for dialogue
    npc.addEventListener('click', () => {
        openDialogue(index);
    });
    
    // Random movement (slower and more predictable)
    const movement = {
        speed: Math.random() * 0.02 + 0.01, // Much slower
        direction: path.horizontal ? (Math.random() > 0.5 ? 0 : Math.PI) : (Math.random() > 0.5 ? Math.PI/2 : -Math.PI/2),
        changeDirectionTimer: 0,
        maxChangeDirectionTimer: Math.random() * 300 + 200, // Longer timer for more predictable movement
        path: path
    };
    
    // Assign dialogue data
    const dialogueData = npcDialogues[index % npcDialogues.length];
    
    return {
        element: npc,
        position: position,
        movement: movement,
        dialogue: dialogueData
    };
}
// Game loop
function gameLoop() {
    if (citySceneContainer.style.display === 'block') {
        moveCharacter();
        moveNPCs();
        checkBuildingProximity();
        updateViewport();
        updateMinimap();
    }
    requestAnimationFrame(gameLoop);
}
// Move character based on pressed keys
function moveCharacter() {
    const speed = 0.5; // Percentage per frame
    
    if (keys.w || keys.ArrowUp) {
        gameState.characterPosition.y = Math.max(5, gameState.characterPosition.y - speed);
        gameState.lastDirection = 'up';
    }
    if (keys.s || keys.ArrowDown) {
        gameState.characterPosition.y = Math.min(95, gameState.characterPosition.y + speed);
        gameState.lastDirection = 'down';
    }
    if (keys.a || keys.ArrowLeft) {
        gameState.characterPosition.x = Math.max(5, gameState.characterPosition.x - speed);
        gameState.lastDirection = 'left';
    }
    if (keys.d || keys.ArrowRight) {
        gameState.characterPosition.x = Math.min(95, gameState.characterPosition.x + speed);
        gameState.lastDirection = 'right';
    }
    
    // Update character position
    updateCharacterPosition();
}
// Update character position and flip direction
function updateCharacterPosition() {
    mainCharacter.style.left = `${gameState.characterPosition.x}%`;
    mainCharacter.style.top = `${gameState.characterPosition.y}%`;
    
    // Flip character based on direction
    if (keys.a || keys.ArrowLeft) {
        mainCharacter.style.transform = 'scaleX(-1)';
    } else if (keys.d || keys.ArrowRight) {
        mainCharacter.style.transform = 'scaleX(1)';
    }
    
    // Update feet direction
    const feet = mainCharacter.querySelectorAll('.character-foot');
    if (keys.a || keys.ArrowLeft) {
        feet.forEach(foot => {
            foot.style.transform = 'rotate(180deg)';
            foot.style.left = foot.classList.contains('character-foot-left') ? '6px' : '-1px';
        });
    } else if (keys.d || keys.ArrowRight) {
        feet.forEach(foot => {
            foot.style.transform = 'rotate(0deg)';
            foot.style.left = foot.classList.contains('character-foot-left') ? '-1px' : '6px';
        });
    }
}
// Update character animation based on movement state
function updateCharacterAnimation() {
    if (gameState.isMoving) {
        mainCharacter.classList.remove('moving-left', 'moving-right');
        
        if (keys.a || keys.ArrowLeft) {
            mainCharacter.classList.add('moving-left');
        } else if (keys.d || keys.ArrowRight) {
            mainCharacter.classList.add('moving-right');
        }
    } else {
        mainCharacter.classList.remove('moving-left', 'moving-right');
    }
}
// Move NPCs
function moveNPCs() {
    gameState.npcs.forEach(npc => {
        // Update direction change timer
        npc.movement.changeDirectionTimer++;
        
        // Change direction randomly (less frequently)
        if (npc.movement.changeDirectionTimer >= npc.movement.maxChangeDirectionTimer) {
            // Only change direction along the path
            if (npc.movement.path.horizontal) {
                npc.movement.direction = Math.random() > 0.5 ? 0 : Math.PI;
            } else {
                npc.movement.direction = Math.random() > 0.5 ? Math.PI/2 : -Math.PI/2;
            }
            npc.movement.changeDirectionTimer = 0;
            npc.movement.maxChangeDirectionTimer = Math.random() * 300 + 200;
        }
        
        // Move NPC
        npc.position.x += Math.cos(npc.movement.direction) * npc.movement.speed;
        npc.position.y += Math.sin(npc.movement.direction) * npc.movement.speed;
        
        // Keep NPC on path
        if (npc.movement.path.horizontal) {
            if (npc.position.x < 0) {
                npc.position.x = 100;
            } else if (npc.position.x > 100) {
                npc.position.x = 0;
            }
            // Keep y position on path
            npc.position.y = parseFloat(npc.movement.path.top) + 10;
        } else {
            if (npc.position.y < 0) {
                npc.position.y = 100;
            } else if (npc.position.y > 100) {
                npc.position.y = 0;
            }
            // Keep x position on path
            npc.position.x = parseFloat(npc.movement.path.left) + 10;
        }
        
        // Update NPC position
        npc.element.style.left = `${npc.position.x}%`;
        npc.element.style.top = `${npc.position.y}%`;
        
        // Flip NPC based on direction
        if (Math.cos(npc.movement.direction) < 0) {
            npc.element.style.transform = 'scaleX(-1)';
        } else {
            npc.element.style.transform = 'scaleX(1)';
        }
        
        // Add walking animation
        npc.element.classList.add('npc', 'moving');
    });
}
// Update viewport to follow character
function updateViewport() {
    // Calculate viewport position based on character position
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const sceneWidth = cityScene.offsetWidth;
    const sceneHeight = cityScene.offsetHeight;
    
    // Calculate max viewport position
    const maxViewportX = sceneWidth - viewportWidth;
    const maxViewportY = sceneHeight - viewportHeight;
    
    // Calculate new viewport position
    const newViewportX = (gameState.characterPosition.x / 100) * sceneWidth - viewportWidth / 2;
    const newViewportY = (gameState.characterPosition.y / 100) * sceneHeight - viewportHeight / 2;
    
    // Clamp viewport position
    gameState.viewportPosition.x = Math.max(0, Math.min(maxViewportX, newViewportX));
    gameState.viewportPosition.y = Math.max(0, Math.min(maxViewportY, newViewportY));
    
    // Apply viewport position
    cityScene.style.transform = `translate(-${gameState.viewportPosition.x}px, -${gameState.viewportPosition.y}px)`;
}
// Update minimap
function updateMinimap() {
    minimapPlayer.style.left = `${gameState.characterPosition.x}%`;
    minimapPlayer.style.top = `${gameState.characterPosition.y}%`;
}
// Check if character is near a building
function checkBuildingProximity() {
    const buildings = document.querySelectorAll('.pixel-building');
    let closestBuilding = null;
    let closestDistance = Infinity;
    
    buildings.forEach(building => {
        const buildingRect = building.getBoundingClientRect();
        const characterRect = mainCharacter.getBoundingClientRect();
        
        // Calculate distance between character and building center
        const buildingCenterX = buildingRect.left + buildingRect.width / 2;
        const buildingCenterY = buildingRect.top + buildingRect.height / 2;
        const characterCenterX = characterRect.left + characterRect.width / 2;
        const characterCenterY = characterRect.top + characterRect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(buildingCenterX - characterCenterX, 2) + 
            Math.pow(buildingCenterY - characterCenterY, 2)
        );
        
        // Check if within interaction range
        if (distance < 100 && distance < closestDistance) {
            closestDistance = distance;
            closestBuilding = building;
        }
    });
    
    // Update interaction prompt
    if (closestBuilding) {
        gameState.nearBuilding = closestBuilding;
        interactionPrompt.style.display = 'block';
        interactionPrompt.style.left = `${gameState.characterPosition.x}%`;
        interactionPrompt.style.top = `${gameState.characterPosition.y - 8}%`;
        
        // Add interaction animation
        closestBuilding.classList.add('interacting');
    } else {
        gameState.nearBuilding = null;
        interactionPrompt.style.display = 'none';
        
        // Remove interaction animation from all buildings
        buildings.forEach(building => {
            building.classList.remove('interacting');
        });
    }
}
// Enter a building
function enterBuilding(buildingElement) {
    const buildingType = buildingElement.getAttribute('data-building');
    const building = buildingData[buildingType];
    
    if (building && gameData[building.game]) {
        // Show game modal
        gameModal.style.display = 'flex';
        gameTitle.textContent = building.name;
        
        // Initialize game
        gameData[building.game].init();
    }
}
// Close game modal
function closeGameModalHandler() {
    gameModal.style.display = 'none';
}
// Toggle menu
function toggleMenu() {
    if (menuPanel.style.display === 'block') {
        menuPanel.style.display = 'none';
    } else {
        menuPanel.style.display = 'block';
        updateMenu();
    }
}
// Update menu
function updateMenu() {
    menuLevel.textContent = gameState.playerLevel;
    menuGold.textContent = gameState.playerGold.toLocaleString();
    menuGems.textContent = gameState.playerGems;
}
// Back to map
function backToMap() {
    citySceneContainer.style.display = 'none';
    worldMapContainer.style.display = 'flex';
    menuPanel.style.display = 'none';
}
// Main menu
function mainMenu() {
    // In a real game, this would navigate to the main menu
    showNotification('Returning to main menu...');
    // For demo purposes, we'll just go back to the map
    backToMap();
}
// Open dialogue with NPC
function openDialogue(npcIndex) {
    const npc = gameState.npcs[npcIndex];
    const dialogue = npc.dialogue;
    
    // Set dialogue modal content
    dialogueName.textContent = dialogue.name;
    dialogueAvatar.style.backgroundImage = `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`;
    
    // Show first dialogue
    showDialogue(dialogue.dialogues[0]);
    
    // Show dialogue modal
    dialogueModal.style.display = 'flex';
}
// Show dialogue
function showDialogue(dialogue) {
    dialogueText.textContent = dialogue.text;
    
    // Clear previous options
    dialogueOptions.innerHTML = '';
    
    // Add options
    dialogue.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'dialogue-option';
        optionElement.textContent = option.text;
        optionElement.addEventListener('click', () => {
            if (option.next === -1) {
                // End dialogue
                dialogueModal.style.display = 'none';
            } else {
                // Show next dialogue
                const npc = gameState.npcs.find(n => n.dialogue.dialogues.includes(dialogue));
                showDialogue(npc.dialogue.dialogues[option.next]);
            }
        });
        dialogueOptions.appendChild(optionElement);
    });
}
// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'absolute';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.background = 'rgba(50, 40, 30, 0.9)';
    notification.style.border = '2px solid #d4af37';
    notification.style.borderRadius = '10px';
    notification.style.padding = '15px 25px';
    notification.style.zIndex = '30';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.display = 'none';
        document.body.removeChild(notification);
    }, 3000);
}
// Initialize the game when page loads
window.addEventListener('load', initGame);
