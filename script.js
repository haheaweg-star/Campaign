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
    lastDirection: 'right'
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
    saloon: {
        name: "Golden Saloon",
        type: "saloon",
        game: "poker",
        info: "Cashgame $2K - $10K"
    },
    arena: {
        name: "Horseshoe Arena",
        type: "arena",
        game: "arena",
        info: "Tournaments Daily"
    },
    poker: {
        name: "Poker Shack",
        type: "poker",
        game: "poker",
        info: "High Stakes Games"
    },
    shop: {
        name: "General Store",
        type: "shop",
        game: "shop",
        info: "Supplies & Gear"
    },
    bank: {
        name: "Bank",
        type: "bank",
        game: "bank",
        info: "Deposit & Withdraw"
    }
};

// Game data
const gameData = {
    poker: {
        title: "Texas Hold'em Poker",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Welcome to Texas Hold'em Poker</h3>
                    <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 24px; margin-bottom: 10px;">🃏</div>
                            <div>Your Hand</div>
                            <div style="display: flex; gap: 5px; justify-content: center; margin-top: 10px;">
                                <div style="width: 40px; height: 60px; background: white; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 20px;">7♠</div>
                                <div style="width: 40px; height: 60px; background: white; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 20px;">2♥</div>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 24px; margin-bottom: 10px;">🎯</div>
                            <div>Community Cards</div>
                            <div style="display: flex; gap: 5px; justify-content: center; margin-top: 10px;">
                                <div style="width: 40px; height: 60px; background: white; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 20px;">A♠</div>
                                <div style="width: 40px; height: 60px; background: white; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 20px;">K♥</div>
                                <div style="width: 40px; height: 60px; background: white; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 20px;">Q♦</div>
                                <div style="width: 40px; height: 60px; background: white; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 20px;">J♣</div>
                                <div style="width: 40px; height: 60px; background: white; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 20px;">10♠</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: rgba(50, 40, 30, 0.7); border-radius: 10px; padding: 15px; max-width: 400px; margin: 0 auto;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <div>Pot: <span style="color: #d4af37; font-weight: bold;">$5,000</span></div>
                            <div>Your Bet: <span style="color: #d4af37; font-weight: bold;">$1,000</span></div>
                        </div>
                        <div style="text-align: center; margin-top: 15px;">
                            <div style="font-size: 18px; margin-bottom: 10px;">What's your move?</div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Check';
            document.getElementById('gameAction2').textContent = 'Raise';
            document.getElementById('gameGold').textContent = '1000';
        }
    },
    arena: {
        title: "Arena Battle",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Select Your Opponent</h3>
                    <div style="display: flex; justify-content: center; gap: 20px;">
                        <div style="text-align: center;">
                            <div style="width: 80px; height: 80px; background: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover; border-radius: 50%; margin: 0 auto 10px;"></div>
                            <div>Bandit Bill</div>
                            <div style="color: #d4af37; font-weight: bold;">Easy</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 80px; height: 80px; background: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover; border-radius: 50%; margin: 0 auto 10px;"></div>
                            <div>Sally Saloon</div>
                            <div style="color: #d4af37; font-weight: bold;">Medium</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 80px; height: 80px; background: url('https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover; border-radius: 50%; margin: 0 auto 10px;"></div>
                            <div>Cowboy Carl</div>
                            <div style="color: #d4af37; font-weight: bold;">Hard</div>
                        </div>
                    </div>
                    <div style="background: rgba(50, 40, 30, 0.7); border-radius: 10px; padding: 15px; max-width: 400px; margin: 20px auto 0;">
                        <div style="text-align: center; margin-bottom: 10px;">Entry Fee: <span style="color: #d4af37; font-weight: bold;">500 Gold</span></div>
                        <div style="text-align: center;">Prize Pool: <span style="color: #d4af37; font-weight: bold;">1,500 Gold</span></div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Easy';
            document.getElementById('gameAction2').textContent = 'Hard';
            document.getElementById('gameGold').textContent = '500';
        }
    },
    shop: {
        title: "General Store",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Welcome to the General Store</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 500px; margin: 0 auto;">
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🥾</div>
                            <div>Boots</div>
                            <div style="color: #d4af37; font-weight: bold;">50 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🤠</div>
                            <div>Hat</div>
                            <div style="color: #d4af37; font-weight: bold;">75 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🔫</div>
                            <div>Revolver</div>
                            <div style="color: #d4af37; font-weight: bold;">200 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🍺</div>
                            <div>Whiskey</div>
                            <div style="color: #d4af37; font-weight: bold;">10 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">🍖</div>
                            <div>Steak</div>
                            <div style="color: #d4af37; font-weight: bold;">15 Gold</div>
                        </div>
                        <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 10px;">
                            <div style="font-size: 30px; margin-bottom: 5px;">💎</div>
                            <div>Gem</div>
                            <div style="color: #d4af37; font-weight: bold;">500 Gold</div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Buy';
            document.getElementById('gameAction2').textContent = 'Sell';
            document.getElementById('gameGold').textContent = gameState.playerGold.toLocaleString();
        }
    },
    bank: {
        title: "Bank",
        init: function() {
            const gameArea = document.getElementById('gameArea');
            gameArea.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: #d4af37; margin-bottom: 20px;">Welcome to the Bank</h3>
                    <div style="background: rgba(50, 40, 30, 0.7); border: 2px solid #8b6914; border-radius: 10px; padding: 20px; max-width: 400px; margin: 0 auto;">
                        <div style="margin-bottom: 15px;">
                            <div style="font-size: 14px; color: #f0e6d2;">Current Balance</div>
                            <div style="font-size: 24px; color: #d4af37; font-weight: bold;">${gameState.playerGold.toLocaleString()} Gold</div>
                        </div>
                        <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                            <input type="number" id="depositAmount" placeholder="Amount" style="flex: 1; padding: 8px; background: rgba(20, 15, 10, 0.8); border: 1px solid #8b6914; border-radius: 5px; color: #f0e6d2;">
                            <button class="action-button" style="padding: 8px 15px;">Deposit</button>
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <input type="number" id="withdrawAmount" placeholder="Amount" style="flex: 1; padding: 8px; background: rgba(20, 15, 10, 0.8); border: 1px solid #8b6914; border-radius: 5px; color: #f0e6d2;">
                            <button class="action-button" style="padding: 8px 15px;">Withdraw</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('gameAction1').textContent = 'Deposit';
            document.getElementById('gameAction2').textContent = 'Withdraw';
            document.getElementById('gameGold').textContent = gameState.playerGold.toLocaleString();
        }
    }
};

// NPC dialogue data
const npcDialogues = [
    {
        name: "Billy the Kid",
        dialogues: [
            {
                text: "Howdy partner! Welcome to Desert Mirage City.",
                options: [
                    { text: "Nice to meet you!", next: 1 },
                    { text: "Do you know where the saloon is?", next: 2 }
                ]
            },
            {
                text: "The pleasure's all mine! If you're looking for adventure, you've come to the right place.",
                options: [
                    { text: "What kind of adventures?", next: 3 },
                    { text: "I'll be on my way.", next: -1 }
                ]
            },
            {
                text: "Sure thing! Just head north from here. You can't miss it with its big sign.",
                options: [
                    { text: "Thanks for the help!", next: -1 }
                ]
            },
            {
                text: "Oh, we've got all sorts! Poker games, horse races, even the occasional duel if you're feeling brave.",
                options: [
                    { text: "Sounds exciting!", next: -1 }
                ]
            }
        ]
    },
    {
        name: "Sally Saloon",
        dialogues: [
            {
                text: "Well hello there, handsome! Looking for a good time?",
                options: [
                    { text: "Just passing through.", next: 1 },
                    { text: "What do you recommend?", next: 2 }
                ]
            },
            {
                text: "A shame! We've got the best whiskey this side of the Mississippi.",
                options: [
                    { text: "Maybe I'll try some next time.", next: -1 }
                ]
            },
            {
                text: "Our poker tables are always popular, or if you're feeling lucky, try your hand at the slot machines.",
                options: [
                    { text: "I'll give it a shot!", next: -1 }
                ]
            }
        ]
    },
    {
        name: "Grizzly Gus",
        dialogues: [
            {
                text: "Grrr... You new in town?",
                options: [
                    { text: "Yes, just arrived.", next: 1 },
                    { text: "What's it to you?", next: 2 }
                ]
            },
            {
                text: "Well, watch your step. This town ain't for the faint of heart.",
                options: [
                    { text: "I can handle myself.", next: -1 }
                ]
            },
            {
                text: "Just keep out of trouble and we'll get along fine.",
                options: [
                    { text: "Fair enough.", next: -1 }
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
const fogOfWar = document.getElementById('fogOfWar');
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
    
    // Add click event to map islands
    document.querySelectorAll('.map-island').forEach(island => {
        island.addEventListener('click', () => enterCity(island));
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
    
    // Generate NPCs and vehicles
    generateNPCs();
    generateVehicles();
    
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
    
    // Random position on road
    const roads = [
        { top: '35%', left: '0%', width: '100%', height: '60px', horizontal: true },
        { top: '65%', left: '0%', width: '100%', height: '60px', horizontal: true },
        { top: '0%', left: '35%', width: '60px', height: '100%', horizontal: false },
        { top: '0%', left: '65%', width: '60px', height: '100%', horizontal: false }
    ];
    
    const road = roads[Math.floor(Math.random() * roads.length)];
    
    let position;
    if (road.horizontal) {
        position = {
            x: Math.random() * 90 + 5,
            y: parseFloat(road.top) + 30
        };
    } else {
        position = {
            x: parseFloat(road.left) + 30,
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
        direction: road.horizontal ? (Math.random() > 0.5 ? 0 : Math.PI) : (Math.random() > 0.5 ? Math.PI/2 : -Math.PI/2),
        changeDirectionTimer: 0,
        maxChangeDirectionTimer: Math.random() * 300 + 200, // Longer timer for more predictable movement
        road: road
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

// Generate vehicles
function generateVehicles() {
    // Clear existing vehicles
    document.querySelectorAll('.vehicle').forEach(vehicle => vehicle.remove());
    gameState.vehicles = [];
    
    // Generate 8 vehicles
    for (let i = 0; i < 8; i++) {
        const vehicle = createVehicle();
        gameState.vehicles.push(vehicle);
        cityScene.appendChild(vehicle.element);
    }
}

// Create a vehicle
function createVehicle() {
    const vehicleTypes = ['car', 'truck', 'bus'];
    const vehicleType = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
    
    const vehicle = document.createElement('div');
    vehicle.className = `vehicle ${vehicleType}`;
    
    // Create wheels based on vehicle type
    if (vehicleType === 'car') {
        const wheelFront = document.createElement('div');
        wheelFront.className = 'car-wheel car-wheel-front';
        const wheelRear = document.createElement('div');
        wheelRear.className = 'car-wheel car-wheel-rear';
        vehicle.appendChild(wheelFront);
        vehicle.appendChild(wheelRear);
    } else if (vehicleType === 'truck') {
        const wheelFront = document.createElement('div');
        wheelFront.className = 'truck-wheel truck-wheel-front';
        const wheelRear = document.createElement('div');
        wheelRear.className = 'truck-wheel truck-wheel-rear';
        vehicle.appendChild(wheelFront);
        vehicle.appendChild(wheelRear);
    } else if (vehicleType === 'bus') {
        const wheelFront = document.createElement('div');
        wheelFront.className = 'bus-wheel bus-wheel-front';
        const wheelMiddle = document.createElement('div');
        wheelMiddle.className = 'bus-wheel bus-wheel-middle';
        const wheelRear = document.createElement('div');
        wheelRear.className = 'bus-wheel bus-wheel-rear';
        vehicle.appendChild(wheelFront);
        vehicle.appendChild(wheelMiddle);
        vehicle.appendChild(wheelRear);
        
        // Add windows to bus
        for (let i = 1; i <= 3; i++) {
            const window = document.createElement('div');
            window.className = 'bus-window';
            window.style.left = `${20 + i * 20}%`;
            vehicle.appendChild(window);
        }
    }
    
    // Random color
    const colors = ['#e53935', '#43a047', '#1e88e5', '#8e24aa', '#fb8c00', '#546e7a', '#ff9800'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    vehicle.style.backgroundColor = color;
    
    // Random position on road
    const roads = [
        { top: '35%', left: '0%', width: '100%', height: '60px', horizontal: true },
        { top: '65%', left: '0%', width: '100%', height: '60px', horizontal: true },
        { top: '0%', left: '35%', width: '60px', height: '100%', horizontal: false },
        { top: '0%', left: '65%', width: '60px', height: '100%', horizontal: false }
    ];
    
    const road = roads[Math.floor(Math.random() * roads.length)];
    
    let position;
    if (road.horizontal) {
        position = {
            x: Math.random() * 90 + 5,
            y: parseFloat(road.top) + 30
        };
    } else {
        position = {
            x: parseFloat(road.left) + 30,
            y: Math.random() * 90 + 5
        };
    }
    
    vehicle.style.left = `${position.x}%`;
    vehicle.style.top = `${position.y}%`;
    
    // Random movement
    const movement = {
        speed: Math.random() * 0.08 + 0.05,
        direction: road.horizontal ? (Math.random() > 0.5 ? 0 : Math.PI) : (Math.random() > 0.5 ? Math.PI/2 : -Math.PI/2),
        road: road
    };
    
    return {
        element: vehicle,
        position: position,
        movement: movement,
        type: vehicleType
    };
}

// Game loop
function gameLoop() {
    if (citySceneContainer.style.display === 'block') {
        moveCharacter();
        moveNPCs();
        moveVehicles();
        checkBuildingProximity();
        updateFogOfWar();
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
            // Only change direction along the road
            if (npc.movement.road.horizontal) {
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
        
        // Keep NPC on road
        if (npc.movement.road.horizontal) {
            if (npc.position.x < 0) {
                npc.position.x = 100;
            } else if (npc.position.x > 100) {
                npc.position.x = 0;
            }
            // Keep y position on road
            npc.position.y = parseFloat(npc.movement.road.top) + 30;
        } else {
            if (npc.position.y < 0) {
                npc.position.y = 100;
            } else if (npc.position.y > 100) {
                npc.position.y = 0;
            }
            // Keep x position on road
            npc.position.x = parseFloat(npc.movement.road.left) + 30;
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

// Move vehicles
function moveVehicles() {
    gameState.vehicles.forEach(vehicle => {
        // Move vehicle
        vehicle.position.x += Math.cos(vehicle.movement.direction) * vehicle.movement.speed;
        vehicle.position.y += Math.sin(vehicle.movement.direction) * vehicle.movement.speed;
        
        // Keep vehicle on road
        if (vehicle.movement.road.horizontal) {
            if (vehicle.position.x < -10) {
                vehicle.position.x = 110;
            } else if (vehicle.position.x > 110) {
                vehicle.position.x = -10;
            }
            // Keep y position on road
            vehicle.position.y = parseFloat(vehicle.movement.road.top) + 30;
        } else {
            if (vehicle.position.y < -10) {
                vehicle.position.y = 110;
            } else if (vehicle.position.y > 110) {
                vehicle.position.y = -10;
            }
            // Keep x position on road
            vehicle.position.x = parseFloat(vehicle.movement.road.left) + 30;
        }
        
        // Update vehicle position
        vehicle.element.style.left = `${vehicle.position.x}%`;
        vehicle.element.style.top = `${vehicle.position.y}%`;
        
        // Rotate vehicle based on direction
        if (vehicle.movement.road.horizontal) {
            if (Math.cos(vehicle.movement.direction) < 0) {
                vehicle.element.style.transform = 'rotateX(60deg) rotateZ(225deg)';
                vehicle.element.classList.add('moving-horizontal');
            } else {
                vehicle.element.style.transform = 'rotateX(60deg) rotateZ(45deg)';
                vehicle.element.classList.add('moving-horizontal');
            }
        } else {
            if (Math.sin(vehicle.movement.direction) < 0) {
                vehicle.element.style.transform = 'rotateX(60deg) rotateZ(-45deg)';
                vehicle.element.classList.add('moving-vertical');
            } else {
                vehicle.element.style.transform = 'rotateX(60deg) rotateZ(135deg)';
                vehicle.element.classList.add('moving-vertical');
            }
        }
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

// Update fog of war based on character position
function updateFogOfWar() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const sceneWidth = cityScene.offsetWidth;
    const sceneHeight = cityScene.offsetHeight;
    
    // Calculate character position relative to viewport
    const characterX = ((gameState.characterPosition.x / 100) * sceneWidth - gameState.viewportPosition.x) / viewportWidth * 100;
    const characterY = ((gameState.characterPosition.y / 100) * sceneHeight - gameState.viewportPosition.y) / viewportHeight * 100;
    
    fogOfWar.style.setProperty('--x', `${characterX}%`);
    fogOfWar.style.setProperty('--y', `${characterY}%`);
}

// Update minimap
function updateMinimap() {
    minimapPlayer.style.left = `${gameState.characterPosition.x}%`;
    minimapPlayer.style.top = `${gameState.characterPosition.y}%`;
}

// Check if character is near a building
function checkBuildingProximity() {
    const buildings = document.querySelectorAll('.building');
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
