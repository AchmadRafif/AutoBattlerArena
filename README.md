# Auto-Battler Arena — Bloodchain Update

A browser-based **2-player auto-battler arena game** built with **HTML, CSS, and Vanilla JavaScript** using the HTML5 Canvas API.

Players can choose their own characters, select an arena, and watch them battle automatically with unique stats, weapons, abilities, projectiles, passive mechanics, and Ultimate abilities.

> **Status:** Active Development

---

## 🎮 Features

* 👥 **2-Player Character Selection**

  * Player 1 on the left
  * Player 2 on the right
  * Character preview before starting the match
* 🗺️ **Arena Selection**

  * Classic Arena
  * Shibuya Night
  * Jungle Shrine
  * Magma Pit
* ⚔️ **Auto-Battle Combat**

  * Characters fight automatically inside the arena.
  * Movement, attacks, projectiles, collisions, and abilities are handled by the game engine.
* 💥 **Character-Specific Abilities**

  * Every character has different stats and mechanics.
  * Some characters use projectiles, traps, slashes, bombs, beams, summons, or special effects.
* 🔥 **Ultimate System**

  * Each character has their own Ultimate.
  * Ultimate charge is displayed below the arena.
* ❤️ **Character Stats**

  * HP
  * Damage
  * Movement Speed
  * Weapon configuration
  * Attack/rotation speed
* 🏆 **Victory System**

  * The match ends when one player is defeated.
  * A victory overlay displays the winner.
  * Players can return to character selection and start another match.
* 🎨 **Dynamic Arena Themes**

  * Arena background, border, grid, container, and text colors change depending on the selected map.

---

## 🧩 Characters

The game currently contains a roster of unique characters, including:

| Character    | Ultimate            | Concept                                            |
| ------------ | ------------------- | -------------------------------------------------- |
| Antimagic    | BLACK METEORITE     | Spell Erase, Ult Drain & Black Form                |
| Bloodchain   | BANKAI: BLOOD CHAIN | Permanent Bankai                                   |
| Copycat      | SWORD DOMAIN        | Copycat, Ult & Passive Duplicate                   |
| Killer Queen | BITES THE DUST      | Contact Bombs, Sheer Heart Attack & Bites the Dust |
| Echoes       | NOISE OVERLOAD      | Sound Mark Traps & Chain Detonation                |
| Illustrade   | TYPOGRAPHY SPELL    | Ink Trail                                          |
| Valkyrie     | VALHALLA            | Regeneration Aura                                  |
| Vessel       | DETERMINATION       | Resurrection / Low HP                              |
| Juggernaut   | TITAN FORM          | Giant Tank                                         |
| Monkey King  | TRICKSTER CLONE     | Growing Staff & Clones                             |
| Brawler      | GRAVITY ORBIT       | Fast Stacking                                      |
| Divergent    | BLACK FLASH         | Based on Itadori Yuji                              |
| Sword Saint  | SPATIAL REND        | Wide Slash & Attack Speed                          |
| Retaliator   | RETRIBUTION ZONE    | Retaliation / Counter Attack                       |
| Stasis       | TIME STOP BARRAGE   | Time Stop & Attack Speed                           |
| Death Note   | DEATH SENTENCE      | Auto Hit / Auto Kill                               |
| Infinity     | UNLIMITED VOID      | Six Eyes, Mugen & Hollow Purple                    |

Character configuration is stored in the `characterDB` object, allowing stats and Ultimate information to be modified from a central location.

---

## 🗺️ Arenas

### Classic Arena

A neutral arena with a soft, light color palette.

### Shibuya Night

A darker night-themed arena with a calmer contrast.

### Jungle Shrine

A natural green-themed arena inspired by a jungle shrine.

### Magma Pit

A warm red-themed arena inspired by a magma crater.

The arena system is controlled through `mapDB`, which defines each map's background, border, grid, container, text colors, and description.

---

## ⚙️ How the Game Works

### 1. Character Selection

Players choose their characters from their respective rosters.

The selected characters are displayed in the center preview area before the match begins.

### 2. Map Selection

After selecting both characters, the game moves to the arena selection screen.

The available maps are generated dynamically from `mapDB`.

### 3. Battle

Once the players confirm the arena, the game initializes the selected characters and starts the Canvas-based game loop.

Combat includes:

* Character movement
* Automatic attacks
* Collision detection
* Damage calculation
* Projectiles
* Status effects
* Character-specific mechanics
* Ultimate charging
* Visual effects
* Knockback and other interactions

The combat system contains dedicated classes for different types of effects and attacks, including `Projectile`, `SoundTrap`, `PurpleBeam`, `BloodchainGetsuga`, and others.

### 4. Victory

When one character is defeated, the game displays a victory overlay.

Players can then return to the character selection screen and start another battle.

---

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **JavaScript**
* **HTML5 Canvas API**
* **Google Fonts — Teko**

## The game uses a `500 × 500` Canvas for the main battle arena.

## 📁 Project Structure

```text
project/
│
├── index.html
├── script.js
│
├── assets/
│   └── pixil-frame-0.png
│
└── README.md
```

### `index.html`

Contains the game's main HTML structure and UI:

* Character selection screen
* Player 1 roster
* Player 2 roster
* Character previews
* Map selection screen
* Battle container
* Canvas
* Ultimate bars
* Statistics display
* Victory overlay

The HTML loads the main game logic through:

```html
<script src="script.js"></script>
```

### `script.js`

Contains the game's core logic, including:

* Character database
* Map database
* Character selection
* Map selection
* Game initialization
* Game loop
* Combat system
* Collision detection
* Projectiles
* Character-specific abilities
* Ultimate system
* Visual effects
* Victory and reset systems

---

## 🚀 Running the Project

Because this is a client-side web project, no backend server is required.

### Option 1 — Open Directly

Open:

```text
index.html
```

in a modern web browser.

### Option 2 — Use VS Code Live Server

If you are using Visual Studio Code:

1. Install the **Live Server** extension.
2. Open the project folder.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The game will open in your browser.

Using a local server is recommended when the project uses external assets.

---

## 🎯 Gameplay Flow

```text
┌───────────────────────┐
│   Character Select    │
│                       │
│  Player 1  VS  Player 2
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│      Map Select       │
│                       │
│ Classic / Shibuya /   │
│ Jungle / Magma        │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│      Battle Arena     │
│                       │
│     ⚔️  AUTO BATTLE   │
│                       │
│   HP / Ultimate /     │
│   Character Abilities │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│      Victory Screen   │
│                       │
│       P1 / P2 WINS    │
└───────────────────────┘
```

---

## 🔧 Customization

### Adding a Character

Characters can be added to `characterDB`.

A character configuration contains properties such as:

```javascript
NewCharacter: {
  color: "#ffffff",
  hp: 100,
  damage: 2.0,
  speed: 2.5,
  weapons: 1,
  wLen: 70,
  wWidth: 10,
  rotSpeed: 0.02,
  ultName: "ULTIMATE NAME",
  ultColor: "#ff0000",
  desc: "Character description",
  ultMax: 1500,
},
```

The exact behavior of special characters can then be implemented in the combat/game-loop logic.

### Adding a Map

Maps can be added through `mapDB`:

```javascript
newMap: {
  name: "New Arena",
  bg: "#000000",
  borderColor: "#ffffff",
  gridColor: "#333333",
  containerBg: "#111111",
  textColor: "#ffffff",
  textShadow: "none",
  desc: "Description of the arena.",
},
```

The map selection UI is generated automatically from the database.

---

## 🧠 Special Mechanics

The combat system supports more than basic attacks.

Examples implemented in the project include:

* Homing letter projectiles
* Piercing projectiles
* Time-stop interactions
* Sound traps
* Knockback
* Stun effects
* Damage-over-time style effects
* Explosions
* Summoned swords
* Large-area beams
* Getsuga-style attacks
* Resurrection mechanics
* Counter attacks
* Ultimate-specific mechanics

For example, `SoundTrap` can apply different effects depending on its type, including knockback, stun, and damage.

The project also contains specialized mechanics for Killer Queen, including bombs, Sheer Heart Attack, and Bites the Dust.

---

## 📌 Current Project Direction

**Auto-Battler Arena — Juggernaut Revamp** is designed around a roster of highly differentiated characters rather than a single universal attack system.

The goal is to make each character feel mechanically distinct through:

* Different base stats
* Unique attacks
* Unique passives
* Character-specific Ultimate abilities
* Special interactions
* Different combat behaviors

This makes character balance and ability design an important part of future development.

---

## 🔮 Possible Future Improvements

* [ ] Character balance adjustments
* [ ] More playable characters
* [ ] More arenas
* [ ] Better mobile/responsive support
* [ ] Sound effects and background music
* [ ] Character-specific UI
* [ ] Match history
* [ ] More visual effects
* [ ] Improved AI behavior
* [ ] Character statistics screen
* [ ] Local tournament mode
* [ ] Online multiplayer

---

## 👨‍💻 Development

Built as a JavaScript Canvas game project.

The project is intentionally kept lightweight and does not require a game engine or external framework.

---

## 📜 License

This project is currently intended for personal/educational development.

If the project is later published publicly, add an appropriate license here depending on how you want other people to use, modify, and distribute the code.
