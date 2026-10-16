# Auto-Battler Arena — Multimode Update

A browser-based **auto-battler arena game** built with **HTML, CSS, and Vanilla JavaScript** using the HTML5 Canvas API.

Choose a game mode, select your characters, pick an arena, and watch the fighters battle automatically. Each character has distinct stats, weapons, abilities, projectiles, passive mechanics, and Ultimate abilities.

> **Status:** Active Development

---

## 🎮 Features

* 🎯 **Six Game Modes**
  * **1v1** — one fighter against one fighter.
  * **1v2** — one fighter against a team of two.
  * **2v1** — a team of two against one fighter.
  * **2v2** — two teams, each with two fighters.
  * **Free-for-All 4** — four fighters, each fighting independently.
  * **Free-for-All 6** — six fighters, each fighting independently.
* 🧑‍🎤 **Character Selection**
  * Choose a mode before selecting characters.
  * Multi-fighter modes provide separate slots for each fighter.
  * If you proceed to map selection with empty slots, those slots are filled automatically with random characters that do not duplicate characters already selected or assigned to other empty slots by the auto-fill process.
  * The classic 1v1 selection keeps its default matchup: Copycat versus Infinity.
* 🗺️ **Arena Selection**
  * Classic Arena
  * Shibuya Night
  * Jungle Shrine
  * Magma Pit
* ⚔️ **Auto-Battle Combat**
  * Characters fight automatically inside the arena.
  * Movement, attacks, projectiles, collisions, and abilities are handled by the game engine.
* 💥 **Character-Specific Abilities**
  * Characters have different stats and mechanics.
  * The roster includes projectiles, traps, slashes, bombs, beams, summons, clones, resurrection, and other special effects.
* 🔥 **Ultimate System**
  * Each character has an Ultimate ability and an Ultimate bar below the arena.
  * Ultimate bars visually fade when a fighter is eliminated and has no surviving owned clones.
  * A character's Ultimate bar does not fade just because the original body is defeated if one of that character's clones is still alive.
* ❤️ **Character Stats**
  * HP
  * Damage and character-specific combat values
  * Skill/passive status where applicable
  * Ultimate charge and Ultimate name
* 🏆 **Team and Free-for-All Victory System**
  * Team modes continue while at least one fighter or surviving clone remains on a team.
  * Free-for-All treats every fighter as an independent team.
  * The match ends when only one combatant team remains, then displays the winner.
* 📱 **Responsive Battle UI**
  * Multi-fighter names are arranged in left and right columns aligned with the arena edges.
  * Multi-fighter Ultimate/stat panels can be swiped horizontally on mobile when they do not fit on screen.
  * The mobile horizontal scrollbar is hidden while swipe scrolling remains available.
  * A **2× Speed** toggle is available in the battle UI.
* 🎨 **Dynamic Arena Themes**
  * Arena background, border, grid, container, and text colors change depending on the selected map.

---

## 🧩 Characters

The current roster contains the following characters:

| Character | Ultimate | Concept |
| --- | --- | --- |
| Antimagic | BLACK METEORITE | Spell Erase, Ultimate Drain, and Black Form |
| Bloodchain | BANKAI: BLOOD CHAIN | Permanent Bankai |
| Copycat | SWORD DOMAIN | Copying abilities, Ultimate, and passive duplicates |
| Killer Queen | BITES THE DUST | Contact bombs, Sheer Heart Attack, and Bites the Dust |
| Echoes | NOISE OVERLOAD | Sound Mark traps and chain detonation |
| Illustrade | TYPOGRAPHY SPELL | Ink trail and typography-based attacks |
| Valkyrie | VALHALLA | Regeneration aura |
| Tyrant | CHAIN OF TYRANNY | Portals, seeking swords, and sure-hit chain |
| Vessel | DETERMINATION | Resurrection and low-HP mechanics |
| Juggernaut | TITAN FORM | Heavy tank fighter |
| Monkey King | TRICKSTER CLONE | Growing staff and clones |
| Brawler | GRAVITY ORBIT | Handler and fast stacking |
| Divergent | BLACK FLASH | Close-range combat inspired by Itadori Yuji |
| Sword Saint | SPATIAL REND | Wide slashes and attack speed |
| Retaliator | RETRIBUTION ZONE | Retaliation and counter attacks |
| Stasis | TIME STOP BARRAGE | Time stop and attack speed |
| Death Note | DEATH SENTENCE | Automatic targeting and lethal Ultimate mechanic |
| Infinity | UNLIMITED VOID | Six Eyes, Mugen, and Hollow Purple |
| Kinich | BOOMSHAKALAKA | Claymore, Canopy Grapple, Nightsoul Field, and Ajaw |
| Funeral | PARAMITA PAPILIO | Wangsheng Funeral Parlor-inspired combat kit |
| Yaksha | BANE OF ALL EVIL | Jade Polearm, Yaksha Dash, and Plunging Burst |
| Adeptus | CELESTIAL SHOWER | Frostflake Bow, Ice Lotus, and Cryo Rain |

Character configuration is stored in the `characterDB` object, allowing base stats and Ultimate information to be modified from a central location. Special abilities are implemented in the combat and game-loop logic.

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

### 1. Game Mode Selection

Choose one of the six supported modes before selecting characters. The selected mode determines the number of character slots on each side and whether the match uses teams or Free-for-All rules.

### 2. Character Selection

Choose characters from the available roster. Multi-fighter modes let you select a character for each slot. You do not have to fill every slot manually: when you continue to map selection, empty slots are assigned random characters without duplicating the already selected characters or one another through auto-fill.

In 1v1 mode, the default matchup is Copycat versus Infinity.

### 3. Map Selection

After continuing from character selection, choose an arena. The available map cards are generated dynamically from `mapDB`.

### 4. Battle

When the arena is confirmed, the game initializes the selected fighters and starts the Canvas-based game loop.

Combat includes:

* Character movement and automatic attacks
* Collision detection and damage calculation
* Projectiles and status effects
* Character-specific abilities and passives
* Ultimate charging and activation
* Visual effects, knockback, and other interactions
* Clone/summon handling for character-specific mechanics

The combat system contains dedicated classes and logic for different effects and attacks, including `Projectile`, `SoundTrap`, `PurpleBeam`, `BloodchainGetsuga`, and others.

### 5. Victory and Elimination

The game checks which combatant teams still have a living fighter. A surviving clone continues to count for its owner's team, even after the original character body is defeated. Temporary Adeptus Ice Lotus objects do not count as independent fighters. The match ends when one or zero combatant teams remain, and the winner overlay displays the surviving side or fighter.

---

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **HTML5 Canvas API**
* **Google Fonts — Teko**

The main battle simulation uses a `500 × 500` Canvas coordinate system. CSS scales the rendered arena to fit the available viewport.

---

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

Contains the game's HTML structure, styles, and UI:

* Game mode selection screen
* Character selection screen and character rosters
* Fighter slots and character previews
* Map selection screen
* Battle container and Canvas
* Fighter name display
* Ultimate bars and character statistics
* 2× Speed toggle
* Victory overlay

The HTML loads the main game logic through:

```html
<script src="script.js"></script>
```

### `script.js`

Contains the game's core logic, including:

* Character and map databases (`characterDB` and `mapDB`)
* Game-mode definitions and team setup (`GAME_MODES`)
* Character selection, fighter-slot handling, and random auto-fill
* Map selection and game initialization
* Canvas game loop and combat system
* Collision detection, projectiles, and status effects
* Character-specific abilities, summons, and clones
* Ultimate system and battle HUD updates
* Team/Free-for-All victory checks
* Visual effects and reset systems

---

## 🚀 Running the Project

This is a client-side web project; no backend server is required.

### Option 1 — Open Directly

Open `index.html` in a modern web browser.

### Option 2 — Use VS Code Live Server

1. Install the **Live Server** extension.
2. Open the project folder in Visual Studio Code.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The game will open in your browser.

Using a local server is recommended when working with external assets.

---

## 🎯 Gameplay Flow

```text
┌──────────────────────┐
│    Mode Selection    │
│  1v1 / 1v2 / 2v1     │
│  2v2 / FFA 4 / FFA 6 │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Character Selection │
│  Select each slot or │
│  auto-fill remaining │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Map Select      │
│ Classic / Shibuya /  │
│ Jungle / Magma       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Battle Arena     │
│  HP / Ultimate /     │
│  Character Abilities │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Victory Screen    │
│   Team / Fighter Win │
└──────────────────────┘
```

---

## 🔧 Customization

### Adding a Character

Characters can be added to `characterDB` in `script.js`.

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

The exact behavior of a character's special abilities must also be implemented in the combat/game-loop logic. For clone-based characters, make sure the clone's team and ownership references are set consistently so the victory system can correctly track surviving clones.

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

### Adding a Game Mode

Game modes are configured in the `GAME_MODES` object. Each entry defines the label, the number of fighter slots on each side, and whether the mode is Free-for-All. For Free-for-All, each fighter receives a distinct team ID so that the victory logic treats every fighter as an individual opponent.

---

## 🧠 Special Mechanics

The combat system supports more than basic attacks. Examples implemented in the project include:

* Homing and piercing projectiles
* Time-stop interactions
* Sound traps
* Knockback and stun effects
* Damage-over-time effects
* Explosions and summoned swords
* Large-area beams and Getsuga-style attacks
* Resurrection mechanics and counter attacks
* Character-specific Ultimate abilities
* Summoned clones that can continue fighting after the original body is defeated

For example, `SoundTrap` can apply different effects depending on its type, including knockback, stun, and damage. Killer Queen has specialized mechanics for bombs, Sheer Heart Attack, and Bites the Dust.

---

## 📌 Current Project Direction

Auto-Battler Arena is designed around a roster of mechanically differentiated characters rather than a single universal attack system.

The goal is to make each character feel distinct through:

* Different base stats
* Unique attacks and passives
* Character-specific Ultimate abilities
* Special interactions and clone mechanics
* Different combat behaviors
* Match formats ranging from 1v1 duels to team battles and Free-for-All

Character balance and ability design remain important parts of ongoing development.

---

## 🔮 Possible Future Improvements

* [ ] Character balance adjustments
* [ ] More playable characters
* [ ] More arenas and arena mechanics
* [ ] Further mobile/responsive UI tuning
* [ ] Sound effects and background music
* [ ] Character-specific UI refinements
* [ ] Match history
* [ ] More visual effects
* [ ] Improved AI behavior
* [ ] Character statistics screen
* [ ] Local tournament mode
* [ ] Online multiplayer

---

## 👨‍💻 Development

Built as a lightweight JavaScript Canvas game project. The project does not require a game engine or external framework.

---

## 📜 License

This project is currently intended for personal/educational development.

If the project is later published publicly, add an appropriate license depending on how you want other people to use, modify, and distribute the code.
