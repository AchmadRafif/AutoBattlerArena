const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const monkeyStaffImg = new Image();
monkeyStaffImg.src = "assets/pixil-frame-0.png";

const characterDB = {
  Antimagic: {
    color: "#1c1c1c",
    hp: 100,
    damage: 5,
    speed: 2.6,
    weapons: 1,
    wLen: 75,
    wWidth: 16,
    rotSpeed: 0.02,
    ultName: "BLACK METEORITE",
    ultColor: "#c0392b",
    desc: "Spell Erase, Ult Drain & Black Form",
    ultMax: 2200,
  },
  Bloodchain: {
    color: "#f1c40f",
    hp: 100,
    damage: 2.0,
    speed: 2.7,
    weapons: 2,
    wLen: 62,
    wWidth: 10,
    rotSpeed: 0.025,
    ultName: "BANKAI: BLOOD CHAIN",
    ultColor: "#b11226",
    desc: "Permanent Bankai",
    ultMax: 7000,
  },
  Copycat: {
    color: "#ffffff",
    hp: 100,
    damage: 2.0,
    speed: 2.5,
    weapons: 1,
    wLen: 70,
    wWidth: 8,
    rotSpeed: 0.025,
    ultName: "SWORD DOMAIN",
    ultColor: "#FF76CE",
    desc: "Copycat, Ult & Passive Duplicate",
    ultMax: 1800,
  },
  "Killer Queen": {
    color: "#FFB5DA",
    hp: 100,
    damage: 3,
    speed: 2.55,
    weapons: 0,
    wLen: 0,
    wWidth: 0,
    rotSpeed: 0,
    ultName: "BITES THE DUST",
    ultColor: "#FFB5DA",
    desc: "Contact Bombs, Sheer Heart Attack & Bites the Dust",
    ultMax: 1000,
  },
  Echoes: {
    color: "#2ecc71",
    hp: 100,
    damage: 0.8,
    speed: 2.7,
    weapons: 0,
    wLen: 0,
    wWidth: 0,
    rotSpeed: 0,
    ultName: "NOISE OVERLOAD",
    ultColor: "#27ae60",
    desc: "Sound Mark Traps & Chain Detonation",
    ultMax: 1600,
  },
  Illustrade: {
    color: "#362F4F",
    hp: 100,
    damage: 1.0,
    speed: 2.3,
    weapons: 1,
    wLen: 55,
    wWidth: 8,
    rotSpeed: 0.03,
    ultName: "TYPOGRAPHY SPELL",
    ultColor: "#222222",
    desc: "Illustratting Ink trail",
    ultMax: 1500,
  },
  Valkyrie: {
    color: "#a4c8e1",
    hp: 100,
    damage: 1.5,
    speed: 2.2,
    weapons: 1,
    wLen: 65,
    wWidth: 12,
    rotSpeed: 0.015,
    ultName: "VALHALLA",
    ultColor: "#a4c8e1",
    desc: "Valhalla Regen Aura",
    ultMax: 300,
  },
  Tyrant: {
    color: "#a4c8e1",
    hp: 100,
    damage: 1.0,
    speed: 2.2,
    weapons: 1,
    wLen: 65,
    wWidth: 12,
    rotSpeed: 0.03,
    ultName: "CHAIN OF TYRANNY",
    ultColor: "#a4c8e1",
    desc: "36 Portals, Seeking Swords & Sure-Hit Chain",
    ultMax: 5000,
  },
  Vessel: {
    color: "#c0392b",
    hp: 50,
    damage: 1.0,
    speed: 2.4,
    weapons: 1,
    wLen: 48,
    wWidth: 16,
    rotSpeed: 0.02,
    ultName: "DETERMINATION",
    ultColor: "#c0392b",
    desc: "Ressurection, Low HP",
    ultMax: 1500,
  },
  Juggernaut: {
    color: "#7f8c8d",
    hp: 250,
    damage: 3.5,
    speed: 1.4,
    weapons: 2,
    wLen: 62,
    wWidth: 22,
    rotSpeed: 0.02,
    ultName: "TITAN FORM",
    ultColor: "#7f8c8d",
    desc: "Giant Tank",
    ultMax: 400,
  },
  "Monkey King": {
    color: "#f1c40f",
    hp: 100,
    damage: 2.0,
    speed: 2.6,
    weapons: 1,
    wLen: 65,
    wWidth: 10,
    rotSpeed: 0.016,
    ultName: "TRICKSTER CLONE",
    ultColor: "#f1c40f",
    desc: "Growing Staff & Clones",
    ultMax: 350,
  },
  Brawler: {
    color: "#F11A7B",
    hp: 100,
    damage: 2.0,
    speed: 3.0,
    weapons: 0,
    wLen: 0,
    wWidth: 0,
    rotSpeed: 0,
    ultName: "GRAVITY ORBIT",
    ultColor: "#F11A7B",
    desc: "Handler, Fast Stacker",
    ultMax: 1800,
  },
  Divergent: {
    color: "#e74c3c",
    hp: 100,
    damage: 2.0,
    speed: 3.0,
    weapons: 0,
    wLen: 0,
    wWidth: 0,
    rotSpeed: 0,
    ultName: "BLACK FLASH",
    ultColor: "#ff0033",
    desc: "Based on Itadori Yuji.",
    ultMax: 100,
  },
  "Sword Saint": {
    color: "#34495e",
    hp: 100,
    damage: 1.5,
    speed: 2.8,
    weapons: 1,
    wLen: 75,
    wWidth: 8,
    rotSpeed: 0.03,
    ultName: "SPATIAL REND",
    ultColor: "#ffffff",
    desc: "Wide Slash, Atk Speed",
    ultMax: 3000,
  },
  Retaliator: {
    color: "#4a6572",
    hp: 100,
    damage: 2.0,
    speed: 2.1,
    weapons: 1,
    wLen: 70,
    wWidth: 10,
    rotSpeed: 0,
    ultName: "RETRIBUTION ZONE",
    ultColor: "#00d2d3",
    desc: "Retaliate, Counter Attack",
    ultMax: 3000,
  },
  Stasis: {
    color: "#8e44ad",
    hp: 100,
    damage: 2.2,
    speed: 2.1,
    weapons: 0,
    wLen: 0,
    wWidth: 0,
    rotSpeed: 0,
    ultName: "TIME STOP BARRAGE",
    ultColor: "#00d2d3",
    desc: "Time Stop Atk Speed",
    ultMax: 1500,
  },
  "Death Note": {
    color: "#111111",
    hp: 100,
    damage: 0,
    speed: 2.1,
    weapons: 0,
    wLen: 0,
    wWidth: 0,
    rotSpeed: 0,
    ultName: "DEATH SENTENCE",
    ultColor: "#2c3e50",
    desc: "Auto hit, Auto kill",
    ultMax: 4000,
  },
  Infinity: {
    color: "#ffffff",
    hp: 100,
    damage: 1.5,
    speed: 2.8,
    weapons: 0,
    wLen: 0,
    wWidth: 0,
    rotSpeed: 0,
    ultName: "UNLIMITED VOID",
    ultColor: "#4B0082",
    desc: "Six Eyes, Mugen, Hollow Purple",
    ultMax: 2500,
  },
  Kinich: {
    color: "#8BAE66",
    hp: 100,
    damage: 2.0,
    speed: 2.7,
    weapons: 1,
    wLen: 68,
    wWidth: 12,
    rotSpeed: 0.022,
    ultName: "BOOMSHAKALAKA",
    ultColor: "#8BAE66",
    desc: "Claymore, Canopy Grapple, Nightsoul Field & Ajaw",
    ultMax: 5000,
  },
  "Funeral": {
    color: "#8f1725",
    hp: 100,
    damage: 2.0,
    speed: 2.7,
    weapons: 1,
    wLen: 76,
    wWidth: 11,
    rotSpeed: 0.028,
    ultName: "PARAMITA PAPILIO",
    ultColor: "#8f1725",
    desc: "Wangsheng Funeral Parlor",
    ultMax: 900,
  },
  Yaksha: {
    color: "#4E7A63",
    hp: 100,
    damage: 2.0,
    speed: 3.1,
    weapons: 1,
    wLen: 68,
    wWidth: 10,
    rotSpeed: 0.035,
    ultName: "BANE OF ALL EVIL",
    ultColor: "#4E7A63",
    desc: "Jade Polearm, Yaksha Dash & Plunging Burst",
    ultMax: 3000,
  },
  Adeptus: {
    color: "#8FD3FF",
    hp: 100,
    damage: 1.0,
    speed: 2.35,
    weapons: 0,
    wLen: 0,
    wWidth: 0,
    rotSpeed: 0.018,
    ultName: "CELESTIAL SHOWER",
    ultColor: "#7CCBFF",
    desc: "Frostflake Bow, Ice Lotus & Cryo Rain",
    ultMax: 2700,
  },
};

/* ================= KONFIGURASI MAP DENGAN TEMA UI DINAMIS ================= */
const mapDB = {
  classic: {
    name: "Classic Arena",
    bg: "#f9f8f6",
    borderColor: "#c9b59c",
    gridColor: "#efe9e3",
    containerBg: "#e9e1da",
    textColor: "#4b4038",
    textShadow: "none",
    desc: "Arena klasik dengan warna netral dan lembut di mata.",
  },
  shibuya: {
    name: "Shibuya Night",
    bg: "#202940",
    borderColor: "#9a8678",
    gridColor: "#4b4038",
    containerBg: "#151b2b",
    textColor: "#caaA98",
    textShadow: "none",
    desc: "Arena malam bernuansa gelap dengan kontras yang lebih tenang.",
  },
  shrine: {
    name: "Jungle Shrine",
    bg: "#9cb080",
    borderColor: "#2b5748",
    gridColor: "#618764",
    containerBg: "#dce4d3",
    textColor: "#29483d",
    textShadow: "none",
    desc: "Kuil hutan dengan palet hijau alami dan tidak menyilaukan.",
  },
  magma: {
    name: "Magma Pit",
    bg: "#95271d",
    borderColor: "#e77b49",
    gridColor: "#b34a44",
    containerBg: "#ead0c2",
    textColor: "#63241e",
    textShadow: "none",
    desc: "Kawah magma dengan warna merah hangat tanpa efek neon berlebihan.",
  },
};

let currentMap = "classic";

function goToMapSelect() {
  document.getElementById("selection-screen").style.display = "none";
  document.getElementById("map-screen").style.display = "flex";
  renderMapRoster();
}

function backToCharSelect() {
  document.getElementById("map-screen").style.display = "none";

  // Clear the inline display value so the responsive CSS can restore
  // the correct desktop/mobile layout (grid on mobile, flex on desktop).
  const selectionScreen = document.getElementById("selection-screen");
  selectionScreen.style.display = "";

  // Reset roster scroll positions when returning from map selection.
  document.querySelectorAll("#p1-roster, #p2-roster").forEach((roster) => {
    roster.scrollTop = 0;
  });
}

function renderMapRoster() {
  const container = document.getElementById("map-roster");
  container.innerHTML = "";

  Object.keys(mapDB).forEach((key) => {
    let m = mapDB[key];
    let card = document.createElement("div");
    card.style.cssText = `
      width: 160px; padding: 14px; border-radius: 10px; text-align: center; cursor: pointer;
      background: ${currentMap === key ? "#343b46" : "#252b34"};
      border: 2px solid ${currentMap === key ? m.borderColor : "#48515d"};
      transition: background 0.2s ease, border-color 0.2s ease;
      box-sizing: border-box;
    `;
    card.innerHTML = `
      <div style="width: 100%; height: 60px; background: ${m.bg}; border: 1px solid ${m.borderColor}; margin-bottom: 10px; border-radius: 6px;"></div>
      <div style="font-weight: bold; font-size: 14px; color: #e4e8ed; margin-bottom: 6px;">${m.name}</div>
      <div style="font-size: 12px; line-height: 1.45; color: #b8c0ca;">${m.desc}</div>
    `;
    card.onclick = () => {
      currentMap = key;
      renderMapRoster();
    };
    container.appendChild(card);
  });
}

function drawMapBG() {
  let m = mapDB[currentMap] || mapDB["classic"];
  ctx.fillStyle = m.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (currentMap !== "classic") {
    ctx.strokeStyle = m.gridColor;
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }
}

function applyMapUITheme() {
  let m = mapDB[currentMap] || mapDB["classic"];
  const gameContainer = document.getElementById("game-container");
  const gameCanvas = document.getElementById("gameCanvas");

  if (gameContainer) gameContainer.style.backgroundColor = m.containerBg;
  if (gameCanvas) gameCanvas.style.borderColor = m.borderColor;

  const stats1 = document.getElementById("stats1");
  const stats2 = document.getElementById("stats2");

  if (stats1) {
    stats1.style.color = m.textColor;
    stats1.style.textShadow = m.textShadow;
  }
  if (stats2) {
    stats2.style.color = m.textColor;
    stats2.style.textShadow = m.textShadow;
  }
}

let balls = [];
let projectiles = [];
let gameState = "menu";
// Optional mobile fast mode: advances the frame-based simulation twice per rendered frame.
let mobileSpeedMultiplier = 1;
let gameLoopStarted = false;
let p1Choice = "Copycat";
let p2Choice = "Infinity";
let effects = [];
let infinitySkills = [];
let kinichSkills = [];
let adeptusSkills = [];
let soundTraps = [];
let scatteredSwords = [];
let killerQueenSkills = [];
let bloodchainSkills = [];
let tyrantPortals = [];
let tyrantSwords = [];

class ScatteredSword {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 700;
    this.angle = Math.random() * Math.PI * 2;
  }
  update() {
    this.life--;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = "#bdc3c7";
    ctx.fillRect(-3, -20, 6, 40);
    ctx.fillStyle = "#7f8c8d";
    ctx.fillRect(-9, -3, 18, 6);
    ctx.shadowColor = "#95a5a6";
    ctx.shadowBlur = 8;
    ctx.restore();
  }
}

class SoundTrap {
  constructor(x, y, type, owner) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.owner = owner;
    this.life = 600;
    this.radius = 22;
  }
  update() {
    this.life--;
    balls.forEach((b) => {
      if (b.team !== this.owner.team && b.hp > 0) {
        let dist = Math.hypot(b.x - this.x, b.y - this.y);
        if (dist < b.radius + this.radius) {
          this.trigger(b);
          this.life = 0;
        }
      }
    });
  }
  trigger(target) {
    let angle = Math.atan2(target.y - this.y, target.x - this.x);
    if (this.type === "BOING") {
      target.vx = Math.cos(angle) * 12;
      target.vy = Math.sin(angle) * 12;
      let dmg = target.takeDamage(3.0, this.owner);
      spawnText("BOING LAUNCH! -" + dmg.toFixed(1), target.x, target.y - 18, "#e84393");
    } else if (this.type === "HEAT") {
      target.stunTimer = 30;
      let dmg = target.takeDamage(3.0, this.owner);
      spawnText("HEAT BURN! -" + dmg.toFixed(1), target.x, target.y - 18, "#f1c40f");
    } else if (this.type === "DOKAN") {
      target.vx = Math.cos(angle) * 8;
      target.vy = Math.sin(angle) * 8;
      let dmg = target.takeDamage(5.0, this.owner);
      spawnText("DOKAN BOOM! -" + dmg.toFixed(1), target.x, target.y - 18, "#e67e22");
      effects.push({ type: "black_flash", x: this.x, y: this.y, life: 15, maxLife: 15 });
    }
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    let colors = { BOING: "#e84393", HEAT: "#f1c40f", DOKAN: "#e67e22" };
    let col = colors[this.type] || "#27ae60";
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.fill();
    ctx.strokeStyle = col;
    ctx.lineWidth = 2.5;
    ctx.setLineDash([4, 3]);
    ctx.stroke();
    ctx.fillStyle = col;
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "#000";
    ctx.shadowBlur = 4;
    ctx.fillText(this.type, 0, 0);
    ctx.restore();
  }
}

class LetterProjectile {
  constructor(x, y, charStr, target, owner) {
    this.x = x;
    this.y = y;
    this.char = charStr;
    this.target = target;
    this.owner = owner;
    this.speed = 7.5;
    this.damage = owner.damage * 1.5;
    this.life = 200;
  }
  update() {
    if (this.target && this.target.hp > 0) {
      let dx = this.target.x - this.x, dy = this.target.y - this.y;
      let dist = Math.hypot(dx, dy) || 1;
      this.x += (dx / dist) * this.speed;
      this.y += (dy / dist) * this.speed;
      if (dist < this.target.radius + 12) {
        let finalDmg = this.target.takeDamage(this.damage, this.owner, true);
        spawnText("-" + finalDmg.toFixed(1), this.target.x, this.target.y - 12, "#222222");
        this.life = 0;
      }
    } else this.life = 0;
    this.life--;
  }
  draw() {
    ctx.save();
    ctx.fillStyle = "#222222";
    ctx.font = "bold 22px Arial";
    ctx.shadowColor = "#555555";
    ctx.shadowBlur = 6;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.char, this.x, this.y);
    ctx.restore();
  }
}

class Projectile {
  constructor(x, y, targetX, targetY, owner, isTimeStopCreated = false) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.pierce = true;
    this.delayTimer = 22;
    this.speed = 6.5;
    this.damage = owner.damage;
    this.hitTargets = new Set();
    this.life = 350;
    this.frozenInTime = isTimeStopCreated;
    let dx = targetX - x, dy = targetY - y;
    this.angle = Math.atan2(dy, dx);
    this.vx = Math.cos(this.angle) * this.speed;
    this.vy = Math.sin(this.angle) * this.speed;
  }
  update() {
    if (this.frozenInTime) return;
    if (this.delayTimer > 0) {
      this.delayTimer--;
      return;
    }
    if (this.stunTimer > 0) {
      this.stunTimer--;
      this.vx = 0;
      this.vy = 0;
    } else {
      this.x += this.vx;
      this.y += this.vy;
    }
    this.life--;
    balls.forEach((target) => {
      if (target !== this.owner && target.team !== this.owner.team && target.hp > 0) {
        // Stasis kunai and Copycat's copied Time Shot use an exact 50x15 rotated-rectangle hitbox.
        // Other Projectile users keep the original circular hitbox.
        let isStasisKunai = this.owner && (this.owner.name === "Stasis" || this.owner.name === "Copycat");
        let hit = false;
        if (isStasisKunai) {
          const relX = target.x - this.x;
          const relY = target.y - this.y;
          const cosA = Math.cos(this.angle);
          const sinA = Math.sin(this.angle);
          const localX = relX * cosA + relY * sinA;
          const localY = -relX * sinA + relY * cosA;
          const halfLength = 50 / 2;
          const halfWidth = 15 / 2;
          const closestX = Math.max(-halfLength, Math.min(halfLength, localX));
          const closestY = Math.max(-halfWidth, Math.min(halfWidth, localY));
          const hitDist = Math.hypot(localX - closestX, localY - closestY);
          hit = hitDist < target.radius;
        } else {
          let dist = Math.hypot(target.x - this.x, target.y - this.y);
          hit = dist < target.radius + 10;
        }
        if (hit && !this.hitTargets.has(target)) {
          let finalDmg = target.takeDamage(this.damage, this.owner, true);
          target.iFrames = 12;
          this.hitTargets.add(target);
          if (this.owner && this.owner.name === "Stasis") {
            this.owner.atkSpeed += 0.02;
            this.owner.ultCharge = Math.min(this.owner.ultMax, this.owner.ultCharge + 60);
            spawnText("+0.02 Spd | -1s CD", this.owner.x, this.owner.y - 28, "#00d2d3");
          }
          spawnText("-" + finalDmg.toFixed(1), target.x, target.y - 12, "#00d2d3");
          effects.push({ type: "slash", x: this.x, y: this.y, life: 10, angle: this.angle });
          if (!this.pierce) this.life = 0;
        }
      }
    });
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.shadowColor = "#00d2d3";
    ctx.shadowBlur = this.frozenInTime || this.delayTimer > 0 ? 12 : 5;
    if (this.owner && (this.owner.name === "Stasis" || this.owner.name === "Copycat")) {
      // Stasis kunai size (also used by Copycat's copied Time Shot): exact 50px x 15px overall bounds.
      ctx.fillStyle = "#3d2b56";
      ctx.fillRect(-25, -7.5, 12, 15);
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(-13, -7.5);
      ctx.lineTo(25, 0);
      ctx.lineTo(-20.5, 7.5);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.fillStyle = "#3d2b56";
      ctx.fillRect(-12, -3, 9, 6);
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(-3, -5);
      ctx.lineTo(14, 0);
      ctx.lineTo(-3, 5);
      ctx.closePath();
      ctx.fill();
    }
    ctx.strokeStyle = "#00d2d3";
    ctx.lineWidth = 1.8;
    ctx.stroke();
    ctx.restore();
  }
}

class BlueOrb {
  constructor(x, y, owner) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.life = 150;
    this.radius = 100;
  }
  update() {
    this.life--;
    balls.forEach((b) => {
      if (b.team !== this.owner.team && b.hp > 0) {
        let dx = this.x - b.x, dy = this.y - b.y;
        let dist = Math.hypot(dx, dy) || 1;
        if (dist < this.radius) {
          b.vx += (dx / dist) * 0.6;
          b.vy += (dy / dist) * 0.6;
          b.vx *= 0.75;
          b.vy *= 0.75;
          if (this.life % 20 === 0) {
            let dmg = b.takeDamage(0.3, this.owner);
            spawnText("-" + dmg.toFixed(1), b.x, b.y - 12, "#0984e3");
            this.owner.blueCD = Math.max(0, this.owner.blueCD - 3);
            this.owner.redCD = Math.max(0, this.owner.redCD - 3);
          }
        }
      }
    });
  }
  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 168, 255, 0.1)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.x, this.y, 12 + Math.sin(this.life * 0.2) * 4, 0, Math.PI * 2);
    ctx.fillStyle = "#0984e3";
    ctx.shadowColor = "#00a8ff";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.restore();
  }
}

class RedWave {
  constructor(x, y, target, owner) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.life = 50;
    let dx = target.x - x, dy = target.y - y;
    let angle = Math.atan2(dy, dx);
    this.vx = Math.cos(angle) * 11;
    this.vy = Math.sin(angle) * 11;
    this.hitTargets = new Set();
  }
  update() {
    if (this.stunTimer > 0) {
      this.stunTimer--;
      this.vx = 0;
      this.vy = 0;
    } else {
      this.x += this.vx;
      this.y += this.vy;
    }
    this.life--;
    balls.forEach((b) => {
      if (b.team !== this.owner.team && b.hp > 0 && !this.hitTargets.has(b)) {
        this.hitTargets.add(b);
        let dmg = b.takeDamage(3, this.owner);
        b.vx = this.vx * 1.2;
        b.vy = this.vy * 1.2;
        if (b.x < 50 || b.x > canvas.width - 50 || b.y < 50 || b.y > canvas.height - 50) {
          b.stunTimer = 60;
          spawnText("WALL STUN!", b.x, b.y - 25, "#e74c3c");
        }
        this.owner.blueCD = Math.max(0, this.owner.blueCD - 5);
        spawnText("-" + dmg.toFixed(1), b.x, b.y - 12, "#d63031");
      }
    });
  }
  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, 12, 0, Math.PI * 2);
    ctx.fillStyle = "#d63031";
    ctx.shadowColor = "#ff7675";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.restore();
  }
}


// ================= ADEPTUS =================
// Ganyu-inspired long-range kit. Adeptus uses dedicated skills so her bow,
// Ice Lotus, Frostflake charges, and Celestial Shower remain visually distinct.
function getAdeptusTarget(owner, includeClones = false) {
  const enemies = balls.filter((b) =>
    b !== owner && b.team !== owner.team && b.hp > 0 && (includeClones || !b.isClone)
  );
  return enemies[0] || balls.find((b) => b !== owner && b.team !== owner.team && b.hp > 0) || null;
}

class AdeptusArrow {
  constructor(x, y, target, owner, options = {}) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.target = target || null;
    this.targetX = options.targetX ?? (target ? target.x : x + 1);
    this.targetY = options.targetY ?? (target ? target.y : y);
    this.speed = options.speed ?? 12;
    this.life = options.life ?? 180;
    this.damageMultiplier = options.damageMultiplier ?? 0.7;
    this.isStage1 = !!options.isStage1;
    this.isFrostflake = !!options.isFrostflake;
    this.chargeBonus = options.chargeBonus ?? 1;
    this.radius = options.radius ?? (this.isFrostflake ? 13 : 7);
    this.hit = false;
    this.angle = Math.atan2(this.targetY - y, this.targetX - x);
    this.vx = Math.cos(this.angle) * this.speed;
    this.vy = Math.sin(this.angle) * this.speed;
  }

  update() {
    if (!this.owner || this.owner.hp <= 0) {
      this.life = 0;
      return;
    }

    // Adeptus projectiles are straight-shot: lock the firing direction at cast time.
    // They never retarget or home after being released, like a thrown kunai.

    this.x += this.vx;
    this.y += this.vy;
    this.life--;

    // Frostflake still blooms when it strikes the arena wall.
    // This is a miss for Undivided Heart purposes, but the Bloom AoE still triggers
    // exactly at the impact point so the charged shot never feels wasted against a wall.
    if (!this.hit && this.isFrostflake && (
      this.x - this.radius <= 0 ||
      this.x + this.radius >= canvas.width ||
      this.y - this.radius <= 0 ||
      this.y + this.radius >= canvas.height
    )) {
      this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
      this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));

      for (const splash of balls) {
        if (splash === this.owner || splash.team === this.owner.team || splash.hp <= 0) continue;
        const sd = Math.hypot(splash.x - this.x, splash.y - this.y);
        if (sd <= 56 + splash.radius) {
          const splashDmg = this.owner.damage * 1.5 * this.chargeBonus * (this.owner.adeptusUltDamageMultiplier || 1);
          const splashDealt = splash.takeDamage(splashDmg, this.owner, true);
          spawnText("FROST BLOOM -" + splashDealt.toFixed(1), splash.x, splash.y - 18, "#BFEAFF");
        }
      }

      effects.push({ type: "adeptus_frostflake_hit", x: this.x, y: this.y, life: 28, maxLife: 28, radius: 56 });
      this.hit = true;
      this.life = 0;
      return;
    }

    if (!this.hit) {
      for (const b of balls) {
        if (b === this.owner || b.team === this.owner.team || b.hp <= 0) continue;
        const d = Math.hypot(b.x - this.x, b.y - this.y);
        if (d <= b.radius + this.radius) {
          this.hit = true;
          const dmg = this.owner.damage * this.damageMultiplier * (this.isFrostflake ? this.chargeBonus : 1) * (this.owner.adeptusUltDamageMultiplier || 1);
          const dealt = b.takeDamage(dmg, this.owner, true);
          const label = this.isFrostflake ? "FROSTFLAKE" : this.isStage1 ? "CHARGE" : "ARROW";
          spawnText(label + " -" + dealt.toFixed(1), b.x, b.y - 18, "#7CCBFF");

          if (this.isFrostflake) {
            // Main target receives the Stage 2 hit. Nearby enemies receive the
            // separate Frostflake bloom AoE, excluding the primary target.
            for (const splash of balls) {
              if (splash === b || splash === this.owner || splash.team === this.owner.team || splash.hp <= 0) continue;
              const sd = Math.hypot(splash.x - b.x, splash.y - b.y);
              if (sd <= 56 + splash.radius) {
                const splashDmg = this.owner.damage * 1.5 * this.chargeBonus * (this.owner.adeptusUltDamageMultiplier || 1);
                const splashDealt = splash.takeDamage(splashDmg, this.owner, true);
                spawnText("FROST BLOOM -" + splashDealt.toFixed(1), splash.x, splash.y - 18, "#BFEAFF");
              }
            }
            this.owner.adeptusRegisterStage2Hit?.(b);
            effects.push({ type: "adeptus_frostflake_hit", x: b.x, y: b.y, life: 28, maxLife: 28, radius: 56 });
          } else {
            effects.push({ type: "adeptus_arrow_hit", x: b.x, y: b.y, life: 16, maxLife: 16 });
          }
          this.life = 0;
          return;
        }
      }
    }

    if (this.life <= 0) {
      if (this.isFrostflake && !this.hit) this.owner.adeptusRegisterStage2Miss?.();
      return;
    }

    if (this.x < -80 || this.x > canvas.width + 80 || this.y < -80 || this.y > canvas.height + 80) {
      if (this.isFrostflake && !this.hit) this.owner.adeptusRegisterStage2Miss?.();
      this.life = 0;
    }
  }

  draw() {
    const pulse = 1 + Math.sin(Date.now() * 0.015) * 0.08;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.globalCompositeOperation = "lighter";
    ctx.shadowColor = this.isFrostflake ? "#AEE4FF" : "#7CCBFF";
    ctx.shadowBlur = this.isFrostflake ? 18 : 9;

    if (this.isFrostflake) {
      ctx.fillStyle = "#E8FAFF";
      ctx.beginPath();
      ctx.moveTo(13 * pulse, 0);
      ctx.lineTo(1, -7 * pulse);
      ctx.lineTo(-10, -4);
      ctx.lineTo(-4, 0);
      ctx.lineTo(-10, 4);
      ctx.lineTo(1, 7 * pulse);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#7CCBFF";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = "rgba(255,255,255,.9)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-7, 0); ctx.lineTo(10, 0);
      ctx.stroke();
    } else {
      ctx.strokeStyle = this.isStage1 ? "#BFEAFF" : "#E8FAFF";
      ctx.lineWidth = this.isStage1 ? 3.2 : 2.2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(-9, 0);
      ctx.lineTo(12, 0);
      ctx.stroke();
      ctx.strokeStyle = "#6EBEFF";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-12, 0);
      ctx.lineTo(8, 0);
      ctx.stroke();
    }
    ctx.restore();
  }
}

class AdeptusLotus {
  constructor(x, y, owner) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.team = owner.team;
    this.name = "Ice Lotus";
    this.isClone = false;
    this.isAdeptusLotus = true;
    this.life = 220; // ~3.7 seconds
    this.maxHp = 35;
    this.hp = this.maxHp;
    this.radius = 22;
    this.pullRadius = 120;
    this.exploded = false;
    this.vx = 0;
    this.vy = 0;
    this.iFrames = 0;
  }

  takeDamage(amount, attacker = null, isProjectile = false) {
    if (this.hp <= 0 || this.exploded) return 0;
    if (this.iFrames > 0) return 0;
    const actualDamage = Math.max(0, amount);
    this.hp -= actualDamage;
    this.iFrames = isProjectile ? 8 : 12;
    spawnText("ICE LOTUS -" + actualDamage.toFixed(1), this.x, this.y - 24, "#8FD3FF");
    effects.push({ type: "adeptus_lotus_hit", x: this.x, y: this.y, life: 12, maxLife: 12 });
    if (this.hp <= 0) this.explode();
    return actualDamage;
  }

  explode() {
    if (this.exploded) return;
    this.exploded = true;
    for (const b of balls) {
      if (b.isAdeptusLotus || b.team === this.owner.team || b.hp <= 0) continue;
      const d = Math.hypot(b.x - this.x, b.y - this.y);
      if (d <= 88 + b.radius) {
        const dmg = b.takeDamage(this.owner.damage * 2.0 * (this.owner.adeptusUltDamageMultiplier || 1), this.owner);
        b.adeptusSlowTimer = Math.max(b.adeptusSlowTimer || 0, 110);
        b.adeptusSlowFactor = Math.min(b.adeptusSlowFactor || 1, 0.55);
        spawnText("ICE LOTUS -" + dmg.toFixed(1), b.x, b.y - 22, "#8FD3FF");
      }
    }
    effects.push({ type: "adeptus_lotus_explode", x: this.x, y: this.y, life: 32, maxLife: 32 });
    this.life = 0;
    this.hp = 0;
    if (this.owner && this.owner.adeptusLotus === this) this.owner.adeptusLotus = null;
  }

  update() {
    if (!this.owner || this.owner.hp <= 0) {
      this.life = 0;
      this.hp = 0;
      if (this.owner && this.owner.adeptusLotus === this) this.owner.adeptusLotus = null;
      return;
    }
    if (this.iFrames > 0) this.iFrames--;
    this.life--;

    for (const b of balls) {
      if (b.team === this.owner.team || b.hp <= 0) continue;
      const dx = this.x - b.x;
      const dy = this.y - b.y;
      const d = Math.hypot(dx, dy) || 1;
      if (d <= this.pullRadius + b.radius) {
        // Taunt-like lure: opponents are softly pulled toward the Lotus and slowed.
        // The Lotus itself is also prioritized by the game's target selectors.
        // Only enemies inside this 120px area feel its lure.
        b.vx += (dx / d) * 0.30;
        b.vy += (dy / d) * 0.30;
        b.adeptusSlowTimer = Math.max(b.adeptusSlowTimer || 0, 10);
        b.adeptusSlowFactor = Math.min(b.adeptusSlowFactor || 1, d < 52 ? 0.62 : 0.78);
      }
    }

    if (this.life <= 0) this.explode();
  }

  draw() {
    const t = Date.now() * 0.002;
    const pulse = 1 + Math.sin(t * 2) * 0.08;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.globalCompositeOperation = "lighter";
    ctx.shadowColor = "#7CCBFF";
    ctx.shadowBlur = 18;
    ctx.fillStyle = "rgba(143,211,255,.13)";
    ctx.beginPath();
    ctx.arc(0, 0, (this.pullRadius * 0.54) * pulse, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(124,203,255,.55)";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 7]);
    ctx.beginPath(); ctx.arc(0, 0, this.pullRadius * 0.54, 0, Math.PI * 2); ctx.stroke();
    ctx.setLineDash([]);

    // Pixel lotus petals.
    for (let i = 0; i < 8; i++) {
      const a = t * 0.4 + i * Math.PI / 4;
      const px = Math.cos(a) * 17;
      const py = Math.sin(a) * 17;
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(a + Math.PI / 2);
      ctx.fillStyle = i % 2 ? "#BFEAFF" : "#7CCBFF";
      ctx.beginPath();
      ctx.moveTo(0, -11);
      ctx.lineTo(5, -2);
      ctx.lineTo(0, 4);
      ctx.lineTo(-5, -2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    ctx.fillStyle = "#F4FCFF";
    ctx.fillRect(-5, -5, 10, 10);
    ctx.restore();
  }
}

class AdeptusIcicle {
  constructor(x, y, owner, options = {}) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.delay = options.delay ?? 10;
    this.life = options.life ?? 18;
    this.isFinal = !!options.isFinal;
    this.radius = this.isFinal ? 92 : 34;
    this.damageMultiplier = this.isFinal ? 2.0 : 0.5;
    this.impacted = false;
    this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.18;
  }

  impact() {
    if (this.impacted || !this.owner || this.owner.hp <= 0) return;
    this.impacted = true;

    for (const b of balls) {
      if (b.team === this.owner.team || b.hp <= 0) continue;
      const d = Math.hypot(b.x - this.x, b.y - this.y);
      if (d <= this.radius + b.radius) {
        const dmg = b.takeDamage(this.owner.damage * this.damageMultiplier * (this.owner.adeptusUltDamageMultiplier || 1), this.owner, true);
        b.adeptusCryoMark = { owner: this.owner, life: this.isFinal ? 180 : 110 };
        b.adeptusSlowTimer = Math.max(b.adeptusSlowTimer || 0, this.isFinal ? 180 : 110);
        b.adeptusSlowFactor = Math.min(b.adeptusSlowFactor || 1, this.isFinal ? 0.72 : 0.82);
        spawnText((this.isFinal ? "CELESTIAL FALL" : "CRYO") + " -" + dmg.toFixed(1), b.x, b.y - 22, "#BFEAFF");
      }
    }
    effects.push({ type: "adeptus_icicle_hit", x: this.x, y: this.y, life: this.isFinal ? 42 : 22, maxLife: this.isFinal ? 42 : 22, radius: this.radius, final: this.isFinal });
  }

  update() {
    if (!this.owner || this.owner.hp <= 0) {
      this.life = 0;
      return;
    }
    if (this.delay > 0) this.delay--;
    else if (!this.impacted) this.impact();
    this.life--;
  }

  draw() {
    const falling = this.delay > 0;
    const alpha = falling ? 0.35 + (1 - this.delay / 10) * 0.5 : Math.max(0, this.life / (this.isFinal ? 42 : 18));
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = Math.min(1, alpha);
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.shadowColor = this.isFinal ? "#DFF7FF" : "#8FD3FF";
    ctx.shadowBlur = this.isFinal ? 26 : 14;

    if (falling) {
      ctx.strokeStyle = "rgba(191,234,255,.75)";
      ctx.lineWidth = this.isFinal ? 5 : 2.5;
      ctx.beginPath();
      ctx.moveTo(0, -90);
      ctx.lineTo(0, -16);
      ctx.stroke();
    }

    const scale = this.isFinal ? 1.6 : 1;
    ctx.fillStyle = this.isFinal ? "#EAFBFF" : "#C8F0FF";
    ctx.beginPath();
    ctx.moveTo(16 * scale, 0);
    ctx.lineTo(4 * scale, 26 * scale);
    ctx.lineTo(0, 42 * scale);
    ctx.lineTo(-5 * scale, 24 * scale);
    ctx.lineTo(-16 * scale, 0);
    ctx.lineTo(0, 8 * scale);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#68B8EA";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }
}

class AdeptusShower {
  constructor(owner) {
    this.owner = owner;
    this.life = 360; // 6 seconds
    this.tick = 0;
    this.spawned = 0;
    this.finalStarted = false;
    this.finalTimer = 0;
  }

  update() {
    if (!this.owner || this.owner.hp <= 0) {
      this.life = 0;
      return;
    }

    if (!this.finalStarted) {
      this.life--;
      this.owner.adeptusUltTimer = Math.max(0, this.life);
      this.tick--;
      if (this.tick <= 0) {
        const enemies = balls.filter((b) => b.team !== this.owner.team && b.hp > 0);
        for (let i = 0; i < 2; i++) {
          const enemy = enemies.length ? enemies[Math.floor(Math.random() * enemies.length)] : null;
          const px = enemy ? enemy.x + (Math.random() * 90 - 45) : 60 + Math.random() * (canvas.width - 120);
          const py = enemy ? enemy.y + (Math.random() * 90 - 45) : 60 + Math.random() * (canvas.height - 120);
          adeptusSkills.push(new AdeptusIcicle(
            Math.max(25, Math.min(canvas.width - 25, px)),
            Math.max(35, Math.min(canvas.height - 25, py)),
            this.owner,
            { delay: 8 + i * 3, life: 20 }
          ));
        }
        this.spawned += 2;
        this.tick = 20;
      }

      if (this.life <= 0 && !this.finalStarted) {
        this.finalStarted = true;
        const enemy = getAdeptusTarget(this.owner, true);
        const fx = enemy ? enemy.x : canvas.width * 0.5;
        const fy = enemy ? enemy.y : canvas.height * 0.5;
        adeptusSkills.push(new AdeptusIcicle(
          Math.max(35, Math.min(canvas.width - 35, fx)),
          Math.max(45, Math.min(canvas.height - 45, fy)),
          this.owner,
          { delay: 18, life: 42, isFinal: true }
        ));
        effects.push({ type: "adeptus_shower_final", x: fx, y: fy, life: 58, maxLife: 58 });
        this.finalTimer = 34;
        this.life = 34;
        this.owner.adeptusUltTimer = 0;
      }
    } else if (this.finalTimer > 0) {
      this.finalTimer--;
      this.owner.adeptusUltTimer = 0;
    } else {
      this.owner.isUltActive = false;
      this.owner.ultCharge = 0;
      this.owner.adeptusUltTimer = 0;
      this.owner.bonusText = "";
      this.owner.adeptusUltDamageMultiplier = 1;
      this.life = 0;
      const ang = Math.random() * Math.PI * 2;
      this.owner.vx = Math.cos(ang) * this.owner.baseSpeed;
      this.owner.vy = Math.sin(ang) * this.owner.baseSpeed;
    }
  }

  draw() {
    const progress = this.life > 0 ? 1 - this.life / 360 : 1;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = 0.14 + Math.sin(Date.now() * 0.003) * 0.03;
    ctx.fillStyle = "#7CCBFF";
    ctx.beginPath();
    ctx.arc(this.owner.x, this.owner.y, 170 + progress * 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.55;
    ctx.strokeStyle = "#AEE4FF";
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.arc(this.owner.x, this.owner.y, 150 + Math.sin(Date.now() * 0.002) * 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Falling frost streaks spanning the arena.
    for (let i = 0; i < 10; i++) {
      const a = (Date.now() * 0.001 + i * 1.7) % (Math.PI * 2);
      const sx = ((i * 113 + Math.floor(Date.now() * 0.06)) % Math.max(120, canvas.width));
      const sy = (i * 71 + Math.floor(Date.now() * 0.11)) % Math.max(120, canvas.height);
      const len = 12 + (i % 3) * 8;
      ctx.strokeStyle = i % 2 ? "rgba(191,234,255,.55)" : "rgba(255,255,255,.48)";
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx - 5 + Math.cos(a) * 4, sy + len); ctx.stroke();
    }
    ctx.restore();
  }
}

// ================= KINICH =================
// Pixel-art inspired grapple / projectile effects. These are drawn directly in
// canvas so the character stays asset-free while still reading like Kinich.
class KinichProjectile {
  constructor(x,y,target,owner,options={}){
    this.x=x;this.y=y;this.target=target;this.owner=owner;this.life=options.life??180;this.speed=options.speed??9;this.damageMultiplier=options.damageMultiplier??1.1;this.scale=options.scale??1;this.isCharged=!!options.isCharged;this.isUlt=!!options.isUlt;this.isFinal=!!options.isFinal;this.homing=options.homing!==undefined?!!options.homing:true;
    const dx=(target?target.x:x+1)-x,dy=(target?target.y:y)-y;this.angle=Math.atan2(dy,dx);this.vx=Math.cos(this.angle)*this.speed;this.vy=Math.sin(this.angle)*this.speed;this.damage=owner.damage*this.damageMultiplier;
  }
  update(){
    if(!this.owner||this.owner.hp<=0){this.life=0;return;}
    if(this.homing){
      if(!this.target||this.target.hp<=0){this.life=0;return;}
      const dx=this.target.x-this.x,dy=this.target.y-this.y,dist=Math.hypot(dx,dy)||1;this.angle=Math.atan2(dy,dx);this.vx=Math.cos(this.angle)*this.speed;this.vy=Math.sin(this.angle)*this.speed;this.x+=this.vx;this.y+=this.vy;this.life--;
      if(dist<this.target.radius+(this.isFinal?22:this.isCharged?16:10)){
        const dealt=this.target.takeDamage(this.damage,this.owner,true);this.target.iFrames=10;
        spawnText((this.isFinal?"AJAW CANNON -":this.isUlt?"AJAW -":this.isCharged?"SPIKER -":"-")+dealt.toFixed(1),this.target.x,this.target.y-(this.isFinal?34:this.isCharged?28:12),this.isFinal?"#FFB347":this.isCharged?"#FFB347":"#7CF7B7");
        effects.push({type:this.isFinal?"kinich_ult_final_impact":this.isUlt?"kinich_ult_shot_impact":"kinich_spiker_hit",x:this.target.x,y:this.target.y,life:this.isFinal?38:this.isUlt?18:this.isCharged?28:14,maxLife:this.isFinal?38:this.isUlt?18:this.isCharged?28:14,big:this.isCharged});
        this.life=0;
      }
      return;
    }

    // Non-homing Ajaw barrage: direction is fixed at spawn, so it can miss and
    // behaves like a thrown weapon rather than a tracking projectile.
    this.x+=this.vx;this.y+=this.vy;this.life--;
    const hitRadius=this.isFinal?22:this.isUlt?14:this.isCharged?16:10;
    for(const b of balls){
      if(b===this.owner||b.team===this.owner.team||b.hp<=0||b.isClone)continue;
      const dist=Math.hypot(b.x-this.x,b.y-this.y);
      if(dist<b.radius+hitRadius){
        const dealt=b.takeDamage(this.damage,this.owner,true);b.iFrames=10;
        spawnText((this.isFinal?"AJAW CANNON -":this.isUlt?"AJAW -":this.isCharged?"SPIKER -":"-")+dealt.toFixed(1),b.x,b.y-(this.isFinal?34:this.isCharged?28:12),this.isFinal?"#FFB347":this.isCharged?"#FFB347":"#7CF7B7");
        effects.push({type:this.isFinal?"kinich_ult_final_impact":this.isUlt?"kinich_ult_shot_impact":"kinich_spiker_hit",x:b.x,y:b.y,life:this.isFinal?38:this.isUlt?18:this.isCharged?28:14,maxLife:this.isFinal?38:this.isUlt?18:this.isCharged?28:14,big:this.isCharged});
        this.life=0;
        break;
      }
    }
  }
  draw(){
    if(this.life<=0)return;
    ctx.save();
    ctx.translate(Math.round(this.x),Math.round(this.y));
    ctx.rotate(this.angle);
    ctx.imageSmoothingEnabled=false;

    // Fully block-built pixel projectile. Every visible shape is aligned to a
    // small pixel grid so it reads like an in-game sprite rather than a smooth
    // vector projectile.
    const sc=this.scale*(this.isFinal?2.55:this.isCharged?1.9:this.isUlt?1.28:1);
    const isCopycat = this.owner && this.owner.name === "Copycat" &&
      (this.owner.copycatKinichActive || this.owner.copycatKinichUltActive);
    const outline=isCopycat?'#5A1748':'#203A34',
          deep=isCopycat?'#8E2E72':'#355B50',
          body=isCopycat?'#D052A6':'#5F8B62',
          light=isCopycat?'#FF76CE':'#8BAE66',
          gold=isCopycat?'#FFB7E6':'#C49A4A',
          pale=isCopycat?'#FFD9F2':'#D4C98E';
    const px=(v)=>Math.round(v*sc);
    const rect=(color,x,y,w,h)=>{ctx.fillStyle=color;ctx.fillRect(px(x),px(y),Math.max(1,px(w)),Math.max(1,px(h)));};

    // Compact squared tail / exhaust.
    rect(outline,-28,-4,5,8);
    rect(deep,-23,-5,6,10);
    rect(body,-18,-4,5,8);
    rect(light,-14,-2,4,4);

    if(this.isFinal){
      // Giant Ajaw cannon: stepped diamond with a chunky dark jaw silhouette.
      rect(outline,-10,-16,20,32);
      rect(outline,-18,-10,36,20);
      rect(deep,-14,-12,28,24);
      rect(body,-8,-9,18,18);
      rect(light,-3,-6,13,12);
      rect(gold,7,-4,7,8);
      rect(pale,11,-2,7,4);
      rect(outline,18,-8,8,16);
      rect(deep,20,-5,8,10);
      // Pixel fins.
      rect(gold,-13,-20,7,5); rect(gold,8,-20,7,5);
      rect(deep,-22,9,7,5); rect(gold,16,8,8,5);
    } else if(this.isCharged){
      // Large Scalespiker: a 4x-ish stepped spear / shard.
      rect(outline,-8,-13,8,26);
      rect(outline,0,-17,10,34);
      rect(deep,-3,-13,17,26);
      rect(body,2,-9,14,18);
      rect(light,6,-5,13,10);
      rect(gold,12,-3,8,6);
      rect(pale,17,-1,6,2);
      rect(deep,3,-18,5,5);
      rect(deep,3,13,5,5);
    } else if(this.isUlt){
      // Ajaw barrage shot: compact pixel beast-head / arrow silhouette.
      rect(outline,-8,-10,16,20);
      rect(outline,4,-8,12,16);
      rect(deep,-5,-8,19,16);
      rect(body,0,-6,15,12);
      rect(light,4,-4,10,8);
      rect(gold,12,-2,6,4);
      rect(pale,15,-1,6,2);
      rect(outline,7,-13,4,4);
      rect(outline,7,9,4,4);
      rect(gold,-7,-8,4,4);
      rect(gold,-7,4,4,4);
    } else {
      // Standard Kinich shot: simple stepped diamond, no smooth triangles.
      rect(outline,-7,-8,14,16);
      rect(deep,-11,-5,22,10);
      rect(body,-6,-5,15,10);
      rect(light,-2,-4,9,8);
      rect(gold,6,-3,5,6);
      rect(pale,9,-1,4,2);
      rect(deep,-3,-11,5,4);
      rect(deep,-3,7,5,4);
    }

    // A few hard-edged trailing pixels. No blur / glow.
    const trailColor=this.isFinal?gold:(this.isUlt?light:deep);
    ctx.fillStyle=trailColor;
    const trail=[[-34,-5,3,3],[-31,3,4,3],[-38,0,2,2],[-27,-9,3,2]];
    for(const [x,y,w,h] of trail)ctx.fillRect(px(x),px(y),Math.max(1,px(w)),Math.max(1,px(h)));
    ctx.restore();
  }
}

class KinichGrapple {
  constructor(owner,target){
    this.owner=owner; this.target=target;
    // Grapple movement is fast again: Kinich commits to a quick retreat toward the far side.
    this.life=32; this.maxLife=32;
    this.angle=Math.atan2(target.y-owner.y,target.x-owner.x);
    let ax=owner.x-target.x, ay=owner.y-target.y, d=Math.hypot(ax,ay)||1;
    this.awayX=ax/d; this.awayY=ay/d;
    if(d<1){this.awayX=-Math.cos(this.angle);this.awayY=-Math.sin(this.angle);}
  }
  update(){
    if(!this.owner||this.owner.hp<=0||!this.target||this.target.hp<=0){this.life=0;return;}
    this.angle=Math.atan2(this.target.y-this.owner.y,this.target.x-this.owner.x);
    this.owner.vx=0; this.owner.vy=0;
    // Fast pull across the target's near side, then commit to the far side.
    const retreatDistance=172;
    let desiredX=this.target.x+this.awayX*retreatDistance;
    let desiredY=this.target.y+this.awayY*retreatDistance;
    desiredX=Math.max(this.owner.radius,Math.min(canvas.width-this.owner.radius,desiredX));
    desiredY=Math.max(this.owner.radius,Math.min(canvas.height-this.owner.radius,desiredY));
    const progress=1-this.life/this.maxLife;
    if(progress>0.06){
      const pull=Math.min(.46,.16+progress*.34);
      this.owner.x+=(desiredX-this.owner.x)*pull;
      this.owner.y+=(desiredY-this.owner.y)*pull;
    }
    this.life--;
    if(this.life<=0){
      this.owner.x=desiredX;this.owner.y=desiredY;
      this.owner.angle=Math.atan2(this.target.y-this.owner.y,this.target.x-this.owner.x);
      this.owner.kinichSkillState="field";this.owner.kinichAjawMode=true;
      this.owner.kinichField=new KinichField(this.owner,this.target);this.owner.kinichSkillTarget=this.target;
      kinichSkills.push(this.owner.kinichField);
      effects.push({type:"kinich_grapple_hit",x:this.target.x,y:this.target.y,life:22,maxLife:22});
      spawnText("NIGHTSOUL FIELD!",this.owner.x,this.owner.y-28,"#8BAE66");
      this.life=0;
    }
  }
  draw(){
    if(!this.owner||!this.target)return;
    const sx=Math.round(this.owner.x),sy=Math.round(this.owner.y),tx=Math.round(this.target.x),ty=Math.round(this.target.y);
    const dx=tx-sx,dy=ty-sy,len=Math.hypot(dx,dy)||1,ux=dx/len,uy=dy/len;
    ctx.save();ctx.imageSmoothingEnabled=false;
    ctx.strokeStyle="#203A34";ctx.lineWidth=6;ctx.lineCap="square";ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(tx-ux*12,ty-uy*12);ctx.stroke();
    ctx.strokeStyle="#5F8B62";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(tx-ux*12,ty-uy*12);ctx.stroke();
    const count=Math.floor(len/12);for(let i=1;i<count;i++){const t=i/count,px=Math.round(sx+dx*t),py=Math.round(sy+dy*t);ctx.fillStyle=i%3===0?"#C49A4A":"#8BAE66";ctx.fillRect(px-1,py-1,3,3);}
    ctx.translate(Math.round(tx-ux*10),Math.round(ty-uy*10));ctx.rotate(this.angle);
    ctx.fillStyle="#203A34";ctx.fillRect(-9,-7,18,14);ctx.fillStyle="#5F8B62";ctx.fillRect(-6,-5,11,9);ctx.fillStyle="#C49A4A";ctx.fillRect(5,-2,6,4);ctx.fillRect(-2,-8,4,3);ctx.fillRect(-2,5,4,3);
    ctx.restore();
  }
}

function drawCopycatKinichAjaw(x,y,scale,angle=0){
  ctx.save();
  ctx.translate(Math.round(x),Math.round(y));
  ctx.rotate(angle);
  ctx.imageSmoothingEnabled=false;
  const s=scale;
  const rect=(c,px,py,w,h)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(px*s),Math.round(py*s),Math.max(1,Math.round(w*s)),Math.max(1,Math.round(h*s)));};
  rect('#5A1748',-34,-22,68,44);
  rect('#8E2E72',-26,-17,52,34);
  rect('#D052A6',-18,-13,40,26);
  rect('#FF76CE',-12,-9,28,18);
  rect('#FFD9F2',-4,-4,14,8);
  rect('#5A1748',20,-8,18,16);
  rect('#FFB7E6',28,-3,10,6);
  rect('#8E2E72',-29,-30,10,8);rect('#FFB7E6',14,-30,10,8);
  rect('#8E2E72',-30,22,10,8);rect('#FFB7E6',15,22,10,8);
  rect('#FF76CE',-44,8,14,6);rect('#FFB7E6',-50,13,8,4);
  ctx.restore();
}

class KinichUltBoss {
  constructor(owner){this.owner=owner;this.life=9999;}
  update(){
    if(!this.owner||this.owner.hp<=0||(!this.owner.isUltActive&&!this.owner.copycatKinichUltActive)) this.life=0;
  }
  getPosition(){return {x:canvas.width*0.5,y:-62};}
  draw(){
    if(!this.owner||(!this.owner.isUltActive&&!this.owner.copycatKinichUltActive))return;
    const p=this.owner.kinichUltPhase;if(!p||p==='none')return;
    const pos=this.getPosition();
    const scale=p==='windup'?3.15:p==='barrage'?3.35:p==='laserCharge'?3.75:3.65;
    // Face downward from outside the top edge of the arena.
    const copy = this.owner.name === "Copycat" && this.owner.copycatKinichUltActive;
    if(copy) drawCopycatKinichAjaw(pos.x,pos.y,scale,Math.PI/2/0.10);
    else drawKinichAjaw(pos.x,pos.y,scale,Math.PI/2/0.10);
    ctx.save();ctx.imageSmoothingEnabled=false;
    if(p==='laserCharge'){
      const pulse=Math.floor(Date.now()/90)%2;
      ctx.fillStyle=copy?(pulse?'#FFD9F2':'#FF76CE'):(pulse?'#D8C94A':'#8BAE66');
      ctx.fillRect(Math.round(pos.x-32),Math.round(pos.y+78),64,5);
      ctx.fillStyle=copy?'#5A1748':'#1A241F';ctx.fillRect(Math.round(pos.x-18),Math.round(pos.y+72),36,4);
      ctx.fillStyle=copy?'#FFB7E6':'#D8C94A';ctx.fillRect(Math.round(pos.x-10),Math.round(pos.y+68),20,4);
    }
    ctx.restore();
  }
}

class KinichUltLaser {
  constructor(owner, targets){
    this.owner=owner;
    this.life=60;
    this.maxLife=60;
    this.hasHit=false;
    this.x=canvas.width*0.5;
    this.y=8;
    this.targets=Array.isArray(targets)
      ? targets.filter(t=>t&&t.hp>0&&t.team!==owner.team)
      : (targets&&targets.hp>0&&targets.team!==owner.team ? [targets] : []);
    this.beams=this.targets.map(t=>({target:t,angle:Math.atan2(t.y-this.y,t.x-this.x),length:1400}));
  }
  update(){
    if(!this.owner||this.owner.hp<=0){this.life=0;return;}
    if(!this.hasHit){
      this.hasHit=true;
      for(const beam of this.beams){
        const b=beam.target;
        if(!b||b.hp<=0||b.team===this.owner.team)continue;
        // The final Ajaw laser hits every living opponent individually,
        // including Copycat/Monkey King clones.
        const dealt=b.takeDamage(this.owner.damage*11.0,this.owner);
        const laserColor=this.owner.name==="Copycat"&&this.owner.copycatKinichUltActive?"#FF76CE":"#D8C94A";
        spawnText("AJAW LASER -"+dealt.toFixed(1),b.x,b.y-30,laserColor);
      }
    }
    for(const beam of this.beams){
      if(beam.target&&beam.target.hp>0){
        beam.angle=Math.atan2(beam.target.y-this.y,beam.target.x-this.x);
      }
    }
    this.life--;
  }
  draw(){
    if(!this.owner||this.life<=0)return;
    const alpha=Math.min(1,this.life<12?this.life/12:1);
    ctx.save();
    ctx.imageSmoothingEnabled=false;
    ctx.globalAlpha=alpha;
    const copy=this.owner.name==="Copycat"&&this.owner.copycatKinichUltActive;
    for(const beam of this.beams){
      ctx.save();
      ctx.translate(Math.round(this.x),Math.round(this.y));
      ctx.rotate(beam.angle);
      const len=beam.length;
      ctx.fillStyle=copy?'#4A123C':'#111814';ctx.fillRect(0,-27,len,54);
      ctx.fillStyle=copy?'#7B1F61':'#314A36';ctx.fillRect(0,-19,len,38);
      ctx.fillStyle=copy?'#D052A6':'#8BAE66';ctx.fillRect(0,-11,len,22);
      ctx.fillStyle=copy?'#FF76CE':'#D8C94A';ctx.fillRect(0,-4,len,8);
      for(let i=0;i<24;i++){
        const px=60+i*48,h=(i%3===0?9:6);
        ctx.fillStyle=copy?(i%2?'#5A1748':'#8E2E72'):(i%2?'#203128':'#526B3E');
        ctx.fillRect(px,-h-10,18,h);
        ctx.fillRect(px,10,18,h);
      }
      ctx.fillStyle=copy?'#FFD9F2':'#F0E39A';ctx.fillRect(0,-1,34,2);
      ctx.restore();
    }
    ctx.restore();
  }
}

class CopycatKinichUlt {
  constructor(owner,target){
    this.owner=owner;
    this.target=target;
    this.phase="windup";
    this.timer=75;
    this.shots=0;
    this.life=9999;
    owner.copycatKinichUltActive=true;
    owner.kinichUltPhase="windup";
    owner.kinichUltTimer=this.timer;
    owner.kinichUltShots=0;
    // Register the controller itself so the Copycat version actually advances
    // through windup -> barrage -> laser instead of only drawing Ajaw.
    kinichSkills.push(this);
    kinichSkills.push(new KinichUltBoss(owner));
  }
  update(){
    const o=this.owner;
    if(!o||o.hp<=0){this.life=0;return;}
    const enemy=(this.target&&this.target.hp>0&&this.target.team!==o.team)?this.target
      :balls.find(b=>b.team!==o.team&&b.hp>0&&!b.isClone)||balls.find(b=>b.team!==o.team&&b.hp>0);
    if(enemy)this.target=enemy;

    if(this.phase==="windup"){
      this.timer--;o.kinichUltPhase="windup";o.kinichUltTimer=this.timer;
      if(this.timer<=0){this.phase="barrage";this.timer=300;o.kinichUltPhase="barrage";o.kinichUltTimer=this.timer;}
    } else if(this.phase==="barrage"){
      this.timer--;o.kinichUltPhase="barrage";o.kinichUltTimer=this.timer;
      if(this.shots<20&&this.timer%15===0&&enemy&&enemy.hp>0){
        projectiles.push(new KinichProjectile(canvas.width*0.5,8,enemy,o,{
          damageMultiplier:0.50,scale:1.05,speed:6.4,isUlt:true,homing:false,life:170
        }));
        this.shots++;o.kinichUltShots=this.shots;
      }
      if(this.shots>=20){this.phase="laserCharge";this.timer=90;o.kinichUltPhase="laserCharge";o.kinichUltTimer=this.timer;}
    } else if(this.phase==="laserCharge"){
      this.timer--;o.kinichUltPhase="laserCharge";o.kinichUltTimer=this.timer;
      if(this.timer<=0){
        this.phase="laser";this.timer=60;o.kinichUltPhase="laser";o.kinichUltTimer=this.timer;
        const allEnemies=balls.filter(b=>b.team!==o.team&&b.hp>0);
        kinichSkills.push(new KinichUltLaser(o,allEnemies));
      }
    } else if(this.phase==="laser"){
      this.timer--;o.kinichUltPhase="laser";o.kinichUltTimer=this.timer;
      if(this.timer<=0){
        o.copycatKinichUltActive=false;o.kinichUltPhase="none";o.kinichUltTimer=0;o.kinichUltShots=0;o.kinichUltTarget=null;
        this.life=0;
      }
    }
  }
  draw(){}
}

class KinichField {
  constructor(owner,target){this.owner=owner;this.target=target;this.life=360;this.maxLife=360;this.radius=190;this.orbitRadius=150;this.orbitAngle=Math.atan2(owner.y-target.y,owner.x-target.x);this.points=[];for(let i=0;i<5;i++){const angle=(i*Math.PI*2/5)+((Math.random()-.5)*0.32);this.points.push({angle,radius:138+Math.random()*40,used:false,pulse:Math.random()*Math.PI*2});}}
  update(){
    if(!this.owner||this.owner.hp<=0||!this.target||this.target.hp<=0){this.life=0;this.finish();return;}this.life--;
    // The Nightsoul orbit belongs to the Skill, not the Ultimate. BOOMSHAKALAKA
    // must never detach Kinich from an active field/orbit.
    if(this.owner.kinichSkillState==="field"&&!this.owner.kinichChargeTimer){
      this.orbitAngle+=.024;
      const x=this.target.x+Math.cos(this.orbitAngle)*this.orbitRadius,
            y=this.target.y+Math.sin(this.orbitAngle)*this.orbitRadius;
      this.owner.x=Math.max(this.owner.radius,Math.min(canvas.width-this.owner.radius,x));
      this.owner.y=Math.max(this.owner.radius,Math.min(canvas.height-this.owner.radius,y));
      this.owner.angle=Math.atan2(this.target.y-this.owner.y,this.target.x-this.owner.x);
      this.owner.vx=0;this.owner.vy=0;

      if(this.owner.copycatKinichActive){
        if(this.owner.kinichAttackCD>0)this.owner.kinichAttackCD--;
        if(this.owner.kinichAttackCD<=0){
          projectiles.push(new KinichProjectile(this.owner.x,this.owner.y,this.target,this.owner,{
            damageMultiplier:0.55,scale:0.9,speed:9.2,life:150
          }));
          this.owner.kinichAttackCD=34;
        }
      }
    }
    if(this.owner.kinichChargeTimer>0){this.owner.vx=0;this.owner.vy=0;}
    for(const pt of this.points){
      if(pt.used)continue;
      const px=this.target.x+Math.cos(pt.angle)*pt.radius,py=this.target.y+Math.sin(pt.angle)*pt.radius;
      if(Math.hypot(this.owner.x-px,this.owner.y-py)<this.owner.radius+10&&this.owner.kinichChargeTimer<=0){
        pt.used=true;this.owner.kinichChargeTimer=24;this.owner.kinichChargeTarget=this.target;
        if (this.owner.name === "Kinich") {
          this.owner.ultCharge = Math.min(this.owner.ultMax, this.owner.ultCharge + 150);
          spawnText("ULT CHARGE +150", this.owner.x, this.owner.y - 44, "#8BAE66");
        }
        effects.push({type:"kinich_charge_start",x:this.owner.x,y:this.owner.y,life:24,maxLife:24});
        spawnText("CHARGING SPIKER!",this.owner.x,this.owner.y-28,"#8BAE66");break;
      }
    }
    if(this.life<=0)this.finish();}
  finish(){if(!this.owner)return;this.owner.kinichField=null;this.owner.kinichSkillState="idle";this.owner.kinichAjawMode=false;this.owner.kinichChargeTimer=0;this.owner.kinichChargeTarget=null;this.owner.kinichSkillTarget=null;this.owner.copycatKinichActive=false;}
  draw(){if(!this.owner||!this.target||this.life<=0)return;const copy=this.owner.name==="Copycat";const c1=copy?"#FF76CE":"#8BAE66",c2=copy?"#8E2E72":"#526B3E",c3=copy?"#FFD9F2":"#C4D89A";const fade=Math.min(1,this.life/24,(this.maxLife-this.life+18)/18),t=Date.now()*.0015;ctx.save();ctx.imageSmoothingEnabled=false;ctx.globalCompositeOperation="lighter";ctx.globalAlpha=.13*fade;ctx.fillStyle=c1;ctx.shadowColor="transparent";ctx.shadowBlur=0;ctx.beginPath();ctx.arc(this.target.x,this.target.y,this.radius,0,Math.PI*2);ctx.fill();ctx.globalAlpha=.78*fade;ctx.strokeStyle=c1;ctx.lineWidth=2.5;ctx.setLineDash([13,10]);ctx.beginPath();ctx.arc(this.target.x,this.target.y,this.radius,t%(Math.PI*2),t%(Math.PI*2)+Math.PI*1.72);ctx.stroke();ctx.setLineDash([]);ctx.globalAlpha=.34*fade;ctx.strokeStyle=c1;ctx.lineWidth=1.25;ctx.beginPath();ctx.arc(this.target.x,this.target.y,this.orbitRadius+2,0,Math.PI*2);ctx.stroke();for(const pt of this.points){if(pt.used)continue;const px=this.target.x+Math.cos(pt.angle)*pt.radius,py=this.target.y+Math.sin(pt.angle)*pt.radius,pulse=1+Math.sin(t*4+pt.pulse)*.16;ctx.save();ctx.translate(Math.round(px),Math.round(py));ctx.scale(pulse,pulse);ctx.shadowColor="transparent";ctx.shadowBlur=0;ctx.fillStyle=c2;ctx.fillRect(-8,-8,16,16);ctx.fillStyle=c1;ctx.fillRect(-5,-5,10,10);ctx.fillStyle=c3;ctx.fillRect(-2,-2,4,4);ctx.restore();}ctx.restore();}
}

class PurpleBeam {
  constructor(x, y, target, owner, isBoosted) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.life = 40;
    let dx = target.x - x, dy = target.y - y;
    this.angle = Math.atan2(dy, dx);
    this.isBoosted = isBoosted;
    this.hasDealtDamage = false;
  }
  update() {
    this.life--;
    if (!this.hasDealtDamage && this.life <= 25) {
      this.hasDealtDamage = true;
      balls.forEach((b) => {
        if (b.team !== this.owner.team && b.hp > 0) {
          let cp = getClosestPointOnSegment(
            b,
            { x: this.x, y: this.y },
            { x: this.x + Math.cos(this.angle) * 1200, y: this.y + Math.sin(this.angle) * 1200 }
          );
          let dist = Math.hypot(b.x - cp.x, b.y - cp.y);
          if (dist < 40) {
            let multiplier = this.isBoosted ? 1.5 : 1.0;
            let trueDamage = 5.0 * multiplier;
            let actualDmg = b.takeDamage(trueDamage, this.owner);
            spawnText("PURPLE: -" + actualDmg.toFixed(1), b.x, b.y - 18, "#6c5ce7");
          }
        }
      });
    }
  }
  draw() {
    let progress = this.life / 40;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.rect(0, -30 * progress, 1200, 60 * progress);
    ctx.fillStyle = `rgba(108, 92, 231, ${progress})`;
    ctx.shadowColor = "#a29bfe";
    ctx.shadowBlur = 16;
    ctx.fill();
    ctx.restore();
  }
}

class KillerQueenBomb {
  constructor(owner, target) {
    this.owner = owner;
    this.target = target;
    this.life = 180; // 3 seconds at 60 FPS
    this.damage = owner.kqBombDamage;
  }

  update() {
    if (!this.target || this.target.hp <= 0) {
      this.life = 0;
      return;
    }

    this.life--;

    if (this.life <= 0) {
      let finalDmg = this.target.takeDamage(this.damage, this.owner);
      spawnText("-" + finalDmg.toFixed(1), this.target.x, this.target.y - 12, "#c0392b");
      effects.push({
        type: "kq_explosion",
        x: this.target.x,
        y: this.target.y,
        life: 24,
        maxLife: 24,
      });

      // Every successful explosion permanently increases the owner's next bomb damage.
      this.owner.kqBombDamage += 0.5;

      let idx = this.target.kqBombStacks.indexOf(this);
      if (idx !== -1) this.target.kqBombStacks.splice(idx, 1);
    }
  }

  draw() {
    if (!this.target || this.target.hp <= 0) return;

    let pulse = 1 + Math.sin(Date.now() * 0.015) * 0.12;
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.target.x, this.target.y - this.target.radius - 7, 5 * pulse, 0, Math.PI * 2);
    ctx.fillStyle = "#1D2B53";
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#5b2922";
    ctx.stroke();

    // Small stack counter.
    ctx.font = "bold 10px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#5b2922";
    ctx.fillText(String(this.target.kqBombStacks.length), this.target.x, this.target.y - this.target.radius - 15);
    ctx.restore();
  }
}

class SheerHeartAttack {
  constructor(owner, target) {
    this.owner = owner;
    this.target = target;
    this.x = owner.x;
    this.y = owner.y;
    this.radius = 13;
    this.speed = 0.75; // intentionally slow
    this.life = 900;
    this.exploded = false;
  }

  update() {
    if (!this.target || this.target.hp <= 0) {
      this.explode();
      return;
    }

    let dx = this.target.x - this.x;
    let dy = this.target.y - this.y;
    let dist = Math.hypot(dx, dy) || 1;

    this.x += (dx / dist) * this.speed;
    this.y += (dy / dist) * this.speed;
    this.life--;

    if (dist <= this.radius + this.target.radius + 2 || this.life <= 0) {
      this.explode();
    }
  }

  // Anti-Magic can dispel SHA without causing its explosion damage.
  eraseByAntimagic() {
    if (this.exploded) return;
    this.exploded = true;

    this.owner.kqSheerHeartAttackActive = false;
    if (this.owner.name === "Copycat") this.owner.copycatSHAActive = false;
    this.owner.kqSheerHeartAttackCD = 1200; // 20 seconds

    effects.push({
      type: "black_flash",
      x: this.x,
      y: this.y,
      life: 15,
      maxLife: 15,
    });

    this.life = 0;
  }

  explode() {
    if (this.exploded) return;
    this.exploded = true;

    // Damage for SHA is deliberately modest; its main role is pressure/chasing.
    if (this.target && this.target.hp > 0) {
      let finalDmg = this.target.takeDamage(4, this.owner);
      spawnText("-" + finalDmg.toFixed(1), this.target.x, this.target.y - 12, "#1D2B53");
      effects.push({
        type: "kq_explosion",
        x: this.x,
        y: this.y,
        life: 24,
        maxLife: 24,
      });
    } else {
      effects.push({
        type: "kq_explosion",
        x: this.x,
        y: this.y,
        life: 24,
        maxLife: 24,
      });
    }

    this.owner.kqSheerHeartAttackActive = false;
    this.owner.kqSheerHeartAttackCD = 1200; // 20 seconds, starts after SHA explodes
    this.life = 0;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(Date.now() * 0.006);

    ctx.fillStyle = "#1D2B53";
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#1D2B53";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Simple eye-like mark.
    ctx.fillStyle = "#1D2B53";
    ctx.beginPath();
    ctx.arc(4, -3, 2.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

class BitesTheDustBomb {
  constructor(owner, target) {
    this.owner = owner;
    this.target = target;
    this.life = 300; // 5 seconds at 60 FPS
    this.damage = 10 + 3; // 10 + Killer Queen's base bomb damage
    this.heal = 5 + (3 / 2); // 5 + half of base bomb damage = 6.5
    this.x = target ? target.x : owner.x;
    this.y = target ? target.y : owner.y;
    this.exploded = false;
  }

  update() {
    this.life--;
    if (this.target && this.target.hp > 0) {
      this.x = this.target.x;
      this.y = this.target.y;
    }

    if (this.life <= 0) this.explode();
  }

  explode() {
    if (this.exploded) return;
    this.exploded = true;

    let finalDmg = 0;
    if (this.target && this.target.hp > 0) {
      finalDmg = this.target.takeDamage(this.damage, this.owner);
    }

    if (this.owner && this.owner.hp > 0) {
      this.owner.hp = Math.min(this.owner.maxHp, this.owner.hp + this.heal);
    }

    effects.push({
      type: "kq_explosion",
      x: this.x,
      y: this.y,
      life: 36,
      maxLife: 36,
    });

    this.owner.kqBitesBombActive = false;
    this.owner.ultCharge = 0;
    this.owner.kqBitesArmed = false;
    this.life = 0;
  }

  draw() {
    let pulse = 1 + Math.sin(Date.now() * 0.012) * 0.15;
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y - (this.target && this.target.hp > 0 ? this.target.radius + 7 : 0), 7 * pulse, 0, Math.PI * 2);
    ctx.fillStyle = "#FFB5DA";
    ctx.shadowColor = "#FFB5DA";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.restore();
  }
}

class BloodchainGetsuga {
  constructor(owner, target, wave, color = "#f1c40f") {
    this.owner = owner; this.wave = wave; this.life = 240; this.maxLife = 240;
    this.angle = target ? Math.atan2(target.y - owner.y, target.x - owner.x) : owner.angle;
    this.speed = 5.5;
    this.x = owner.x + Math.cos(this.angle) * (owner.radius + 12);
    this.y = owner.y + Math.sin(this.angle) * (owner.radius + 12);
    this.radius = wave === 1 ? 34 : 24;
    this.hitTargets = new Set();
    this.damage = owner.damage * 1;
    this.color = color;
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.life--;
    balls.forEach((b) => {
      if (b === this.owner || b.team === this.owner.team || b.hp <= 0 || this.hitTargets.has(b)) return;
      if (Math.hypot(b.x - this.x, b.y - this.y) < b.radius + this.radius) {
        this.hitTargets.add(b);
        let dmg = b.takeDamage(this.damage, this.owner, true);
        this.owner.bloodchainGJHits++;
        if (!this.owner.bloodchainBankai) {
          this.owner.ultCharge = Math.min(this.owner.ultMax, this.owner.ultCharge + 100);
        }
        // Every successful Getsuga hit permanently adds +2 base damage.
        // Bankai multiplies only the original/base starting damage by 3;
        // all accumulated +2 damage remains added at 1x.
        this.owner.bloodchainBonusDamage += 1;
        this.owner.refreshBloodchainDamage();
        spawnText("GJ +2 DMG (-" + dmg.toFixed(1) + ")", b.x, b.y - 18, this.color);
      }
    });
  }
  draw() {
    let p = this.life / this.maxLife, big = this.wave === 1;
    ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(this.angle);
    ctx.shadowColor = this.color; ctx.shadowBlur = 16;
    ctx.fillStyle = `rgba(18, 18, 18, ${Math.min(1, p + 0.2)})`;
    ctx.beginPath();
    ctx.moveTo(30, 0);
    ctx.quadraticCurveTo(big ? 6 : 10, big ? -34 : -22, big ? -42 : -28, 0);
    ctx.quadraticCurveTo(big ? 6 : 10, big ? 34 : 22, 30, 0);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = this.color; ctx.lineWidth = big ? 4 : 2.5; ctx.stroke();
    ctx.restore();
  }
}

class CopycatGetsugaJujisho extends BloodchainGetsuga {
  constructor(owner, target, wave) {
    super(owner, target, wave, "#FF76CE");
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.life--;
    balls.forEach((b) => {
      if (b === this.owner || b.team === this.owner.team || b.hp <= 0 || this.hitTargets.has(b)) return;
      if (Math.hypot(b.x - this.x, b.y - this.y) < b.radius + this.radius) {
        this.hitTargets.add(b);
        const dmg = b.takeDamage(this.damage, this.owner, true);
        spawnText("COPY GJ (-" + dmg.toFixed(1) + ")", b.x, b.y - 18, this.color);
      }
    });
  }
}

class CopycatGetsugaTensho {
  constructor(owner, target) {
    this.owner = owner;
    this.target = target;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.angle = owner.angle;
    this.slashLife = 34;
    this.residueLife = 120;
    this.life = this.slashLife + this.residueLife;
    this.maxLife = this.life;
    this.radius = Math.min(canvas.width, canvas.height) * 0.47;
    this.hitResolved = false;
    this.color = "#FF76CE";
  }
  update() {
    const wasSlash = this.life > this.residueLife;
    this.life--;
    if (wasSlash && !this.hitResolved) {
      this.hitResolved = true;
      const target = this.target && this.target.hp > 0 && this.target.team !== this.owner.team
        ? this.target
        : balls.find((b) => b.team !== this.owner.team && b.hp > 0 && !b.isClone) || balls.find((b) => b.team !== this.owner.team && b.hp > 0);
      if (target) {
        const currentHp = Math.max(0, target.hp);
        const dmg = target.takeDamage(currentHp * 0.30, this.owner, true);
        spawnText("COPY TENSHŌ -30% HP (-" + dmg.toFixed(1) + ")", target.x, target.y - 18, this.color);
        effects.push({ type: "copycat_tensho_hit", x: target.x, y: target.y, life: 24, maxLife: 24, color: this.color });
      }
    }
  }
  draw() {
    const slashActive = this.life > this.residueLife;
    const fade = slashActive ? 1 : Math.max(0.08, Math.min(1, this.life / this.residueLife));
    const start = Math.PI * 0.72;
    const end = Math.PI * 2.28;
    const r = this.radius;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.lineCap = "round";
    ctx.shadowColor = `rgba(255,118,206,${0.95 * fade})`;
    ctx.shadowBlur = r * 0.14;
    ctx.strokeStyle = `rgba(255,118,206,${0.22 * fade})`;
    ctx.lineWidth = r * 0.30;
    ctx.beginPath(); ctx.arc(0, 0, r * 0.98, start, end); ctx.stroke();
    ctx.shadowColor = `rgba(255,220,245,${0.8 * fade})`;
    ctx.shadowBlur = r * 0.08;
    ctx.strokeStyle = `rgba(255,220,245,${0.35 * fade})`;
    ctx.lineWidth = r * 0.13;
    ctx.beginPath(); ctx.arc(0, 0, r * 0.995, start, end); ctx.stroke();
    ctx.shadowColor = `rgba(255,118,206,${0.98 * fade})`;
    ctx.shadowBlur = r * 0.055;
    ctx.strokeStyle = `rgba(255,118,206,${0.98 * fade})`;
    ctx.lineWidth = r * 0.115;
    ctx.beginPath(); ctx.arc(0, 0, r, start, end); ctx.stroke();
    ctx.shadowColor = `rgba(255,245,252,${0.9 * fade})`;
    ctx.shadowBlur = r * 0.035;
    ctx.strokeStyle = `rgba(255,245,252,${0.9 * fade})`;
    ctx.lineWidth = r * 0.025;
    ctx.beginPath(); ctx.arc(0, 0, r * 1.002, start, end); ctx.stroke();
    ctx.restore();
  }
}

class BloodchainGetsugaTensho {
  constructor(owner, target) {
    this.owner = owner;

    // The animation is anchored to the CENTER OF THE MAP, not Bloodchain.
    // Wherever Bloodchain is standing, the Bankai Getsuga is presented at
    // the same full-map scale, as if Bloodchain were standing in the center.
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.slashLife = 34;
    this.residueLife = 300;
    this.life = this.slashLife + this.residueLife;
    this.maxLife = this.life;

    // Keep the slash orientation deterministic from Bloodchain's current aim,
    // but do NOT move the visual with Bloodchain or the target.
    this.angle = owner.angle;
    this.forwardDistance = 0;
    this.forwardProgress = 0;

    // Giant, clean moon/crescent. No craters, rocks, or decorative moon texture.
    // It is large enough to read clearly across the whole arena while remaining
    // fully visible inside the map.
    this.radius = Math.min(canvas.width, canvas.height) * 0.47;
    this.moonRadius = this.radius;

    // GT is 200% of the CURRENT Bankai damage at cast time.
    // Current Bankai damage is always Base Damage x3.
    // GT uses the current Bankai damage as its hit damage.
    // Example: current Base 12 -> Bankai 36 -> GT hits for 36 -> current damage 38.
    this.damage = owner.damage * 2;
    this.hitTargets = new Set();
    this.dotTimers = new Map();
    this.hitResolved = false;
  }

  update() {
    const wasSlash = this.life > this.residueLife;
    this.life--;

    // SURE HIT: during the active slash, every living enemy is hit exactly once.
    // No distance, arc, projectile travel, or target-position check is used.
    // This makes GT unavoidable regardless of where Bloodchain or the enemy is.
    if (wasSlash && !this.hitResolved) {
      this.hitResolved = true;

      balls.forEach((b) => {
        if (b === this.owner || b.team === this.owner.team || b.hp <= 0) return;
        if (this.hitTargets.has(b)) return;

        this.hitTargets.add(b);
        const dmg = b.takeDamage(this.damage, this.owner, true);

        // Every successful Getsuga adds +2. Before Bankai this increases the
        // current Base Damage; after Bankai it is a flat +2 to current damage.
        if (this.owner.bloodchainBankai) {
          this.owner.bloodchainBankaiBonusDamage += 2;
        } else {
          this.owner.bloodchainBonusDamage += 2;
        }
        this.owner.refreshBloodchainDamage();

        spawnText(
          "GT SURE HIT +2 BASE (" + this.owner.bloodchainBaseDamage.toFixed(1) +
          ") -" + dmg.toFixed(1),
          b.x, b.y - 18, "#b11226"
        );
      });
    }

    // The remaining moon aura deals 1 damage per second to enemies that are
    // still alive. Since the aura itself is map-centered, it is also independent
    // of Bloodchain's position.
    if (!wasSlash) {
      balls.forEach((b) => {
        if (b === this.owner || b.team === this.owner.team || b.hp <= 0) return;

        let timer = this.dotTimers.get(b) || 60;
        timer--;
        if (timer <= 0) {
          const dot = b.takeDamage(1, this.owner, true);
          spawnText("MOON -" + dot.toFixed(1), b.x, b.y - 18, "#8b0000");
          timer = 60;
        }
        this.dotTimers.set(b, timer);
      });
    }

    for (const [b] of this.dotTimers) {
      if (!b || b.hp <= 0) this.dotTimers.delete(b);
    }
  }

  draw() {
    const slashActive = this.life > this.residueLife;
    const fade = slashActive
      ? 1
      : Math.max(0.08, Math.min(1, this.life / this.residueLife));

    // Huge Blood War-style crescent: clean black/white energy only.
    // No rocks, craters, moon texture, or sharp spikes at the ends.
    const start = Math.PI * 0.72;
    const end = Math.PI * 2.28;
    const r = this.radius;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    // Deep atmospheric halo.
    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowColor = `rgba(0,0,0,${0.95 * fade})`;
    ctx.shadowBlur = r * 0.14;
    ctx.strokeStyle = `rgba(0,0,0,${0.20 * fade})`;
    ctx.lineWidth = r * 0.30;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.98, start, end);
    ctx.stroke();

    // White/gray ghost aura behind the main slash.
    ctx.shadowColor = `rgba(255,255,255,${0.65 * fade})`;
    ctx.shadowBlur = r * 0.085;
    ctx.strokeStyle = `rgba(235,235,240,${0.28 * fade})`;
    ctx.lineWidth = r * 0.18;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.995, start, end);
    ctx.stroke();

    // Multiple smoky black aura bands for the ominous look.
    for (let i = 0; i < 4; i++) {
      const wobble = Math.sin(Date.now() * 0.004 + i * 1.7) * r * 0.018;
      ctx.shadowColor = `rgba(0,0,0,${0.8 * fade})`;
      ctx.shadowBlur = r * (0.035 + i * 0.008);
      ctx.strokeStyle = `rgba(8,8,12,${(0.30 - i * 0.045) * fade})`;
      ctx.lineWidth = r * (0.075 - i * 0.010);
      ctx.beginPath();
      ctx.arc(0, 0, r * (0.985 + i * 0.018) + wobble, start, end);
      ctx.stroke();
    }

    // Main black crescent body.
    ctx.shadowColor = `rgba(0,0,0,${0.98 * fade})`;
    ctx.shadowBlur = r * 0.055;
    ctx.strokeStyle = `rgba(5,5,8,${0.98 * fade})`;
    ctx.lineWidth = r * 0.115;
    ctx.beginPath();
    ctx.arc(0, 0, r, start, end);
    ctx.stroke();

    // Pale white edge, slightly irregular through a few close layers.
    ctx.shadowColor = `rgba(255,255,255,${0.85 * fade})`;
    ctx.shadowBlur = r * 0.035;
    ctx.strokeStyle = `rgba(225,225,230,${0.88 * fade})`;
    ctx.lineWidth = r * 0.030;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.002, start, end);
    ctx.stroke();

    ctx.shadowColor = `rgba(255,255,255,${0.50 * fade})`;
    ctx.shadowBlur = r * 0.055;
    ctx.strokeStyle = `rgba(180,180,188,${0.42 * fade})`;
    ctx.lineWidth = r * 0.014;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.965, start, end);
    ctx.stroke();

    // Thin black inner cut gives the crescent depth without adding spikes.
    ctx.shadowColor = `rgba(0,0,0,${0.9 * fade})`;
    ctx.shadowBlur = r * 0.025;
    ctx.strokeStyle = `rgba(0,0,0,${0.72 * fade})`;
    ctx.lineWidth = r * 0.022;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.925, start, end);
    ctx.stroke();

    // Soft drifting wisps around the crescent. These stay rounded and never form tips.
    for (let i = 0; i < 7; i++) {
      const a1 = start + (end - start) * (0.08 + i * 0.13);
      const a2 = a1 + 0.16 + Math.sin(Date.now() * 0.002 + i) * 0.035;
      const rr = r * (1.07 + (i % 3) * 0.035);
      ctx.shadowColor = `rgba(0,0,0,${0.65 * fade})`;
      ctx.shadowBlur = r * 0.045;
      ctx.strokeStyle = `rgba(15,15,20,${0.25 * fade})`;
      ctx.lineWidth = r * 0.018;
      ctx.beginPath();
      ctx.arc(0, 0, rr, a1, a2);
      ctx.stroke();
    }

    ctx.restore();
  }
}

function isStasisTimeStopped() {
  return balls.some((b) => b && b.name === "Stasis" && b.isUltActive && b.hp > 0);
}

class TyrantPortal {
  constructor(x, y, owner, index, life = Infinity) {
    this.x = x; this.y = y; this.owner = owner; this.index = index;
    this.phase = (index / 36) * Math.PI * 2;
    this.fireTimer = Math.floor((index / 36) * (60 / Math.max(0.1, owner.atkSpeed)));
    this.life = life;
    this.maxLife = life;
    this.temporary = Number.isFinite(life);
  }
  update() {
    if (!this.owner || this.owner.hp <= 0) { this.life = 0; return; }
    // Stasis Time Stop freezes the portal completely: no firing and no lifetime countdown.
    if (isStasisTimeStopped()) return;
    if (this.temporary) {
      this.life--;
      if (this.life <= 0) {
        if (this.owner.tyrantPortalSlots) this.owner.tyrantPortalSlots.delete(this.index);
        return;
      }
    }
    this.fireTimer--;
    if (this.fireTimer <= 0) {
      const target = balls.find((b) => b.team !== this.owner.team && b.hp > 0 && !b.isClone)
        || balls.find((b) => b.team !== this.owner.team && b.hp > 0);
      if (target) tyrantSwords.push(new TyrantPortalSword(this.x, this.y, target, this.owner));
      this.fireTimer = Math.max(4, Math.round(60 / Math.max(0.1, this.owner.atkSpeed)));
    }
  }
  draw() {
    const pulse = 1 + Math.sin(Date.now() * 0.012 + this.phase) * 0.10;
    const portalColor = this.owner && this.owner.name === "Copycat" ? "#FF76CE" : "#a4c8e1";
    ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(Date.now() * 0.001 + this.phase);
    ctx.globalAlpha = this.temporary ? Math.min(0.88, 0.25 + 0.63 * Math.min(1, this.life / 60)) : 0.88;
    ctx.shadowColor = portalColor; ctx.shadowBlur = 14;
    ctx.strokeStyle = portalColor; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(0, 0, 15 * pulse, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(0, 0, 9 * pulse, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();
  }
}

class TyrantPortalSword {
  constructor(x, y, target, owner) {
    this.x=x; this.y=y; this.target=target; this.owner=owner;
    this.speed=8.5*Math.max(0.75, owner.atkSpeed); this.damage=1.0; this.life=180;
    this.hitTargets=new Set(); this.angle=Math.atan2(target.y-y,target.x-x);
  }
  update() {
    if (!this.owner || this.owner.hp <= 0) { this.life=0; return; }
    // Already-fired swords are also frozen mid-flight and resume when Time Stop ends.
    if (isStasisTimeStopped()) return;
    const dist = this.target ? Math.hypot(this.target.x-this.x, this.target.y-this.y) : Infinity;
    // NERF: the sword locks its firing direction when it leaves the portal.
    // It keeps moving straight and never turns to follow the target.
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.life--;
    if (this.target && this.target.hp > 0 && dist < this.target.radius+10 && !this.hitTargets.has(this.target)) {
      this.hitTargets.add(this.target);
      const dmg=this.target.takeDamage(this.damage,this.owner,true);
      tyrantRegisterHit(this.owner,this.target,dmg,true);
      effects.push({type:"tyrant_sword_hit",x:this.target.x,y:this.target.y,life:12,maxLife:12});
      this.life=0;
    }
  }
  draw() {
    const swordColor = this.owner && this.owner.name === "Copycat" ? "#FF76CE" : "#dfefff";
    const swordStroke = this.owner && this.owner.name === "Copycat" ? "#d84fa8" : "#7fa8c7";
    ctx.save(); ctx.translate(this.x,this.y); ctx.rotate(this.angle); ctx.shadowColor=swordColor; ctx.shadowBlur=10;
    // Enlarged to match Tyrant's held sword: 65px long and 12px wide.
    ctx.fillStyle=swordColor; ctx.beginPath(); ctx.moveTo(32.5,0); ctx.lineTo(-25,-10); ctx.lineTo(-32.5,0); ctx.lineTo(-25,10); ctx.closePath(); ctx.fill();
    ctx.strokeStyle=swordStroke; ctx.lineWidth=2; ctx.stroke(); ctx.fillStyle="#657b8b"; ctx.fillRect(-27,-3,12,6); ctx.restore();
  }
}

function openRandomTyrantPortal(owner, temporaryLife = Infinity) {
  if (!owner || (owner.name !== "Tyrant" && owner.name !== "Copycat") || owner.isClone || owner.hp <= 0) return;

  // There are exactly 36 valid edge-tile slots. Each successful BASIC sword hit
  // opens only ONE unused random slot. A slot can never be reused by this Tyrant.
  if (!owner.tyrantPortalSlots) owner.tyrantPortalSlots = new Set();
  if (owner.tyrantPortalSlots.size >= 36) return;

  const unused = [];
  for (let i = 0; i < 36; i++) {
    if (!owner.tyrantPortalSlots.has(i)) unused.push(i);
  }
  if (!unused.length) return;

  const index = unused[Math.floor(Math.random() * unused.length)];
  owner.tyrantPortalSlots.add(index);

  const inset = 22;
  const perimeter = 2 * ((canvas.width - 2 * inset) + (canvas.height - 2 * inset));
  const d = (index / 36) * perimeter;
  const top = canvas.width - 2 * inset;
  const side = canvas.height - 2 * inset;
  let x, y;

  if (d < top) {
    x = inset + d; y = inset;
  } else if (d < top + side) {
    x = canvas.width - inset; y = inset + (d - top);
  } else if (d < 2 * top + side) {
    x = canvas.width - inset - (d - top - side); y = canvas.height - inset;
  } else {
    x = inset; y = canvas.height - inset - (d - 2 * top - side);
  }

  tyrantPortals.push(new TyrantPortal(x, y, owner, index, temporaryLife));
  const portalColor = owner.name === "Copycat" ? "#FF76CE" : "#a4c8e1";
  spawnText(`PORTAL ${owner.tyrantPortalSlots.size}/36`, x, y - 18, portalColor);
}
function tyrantRegisterHit(owner,target,damage,fromPortal=false) {
  if(!owner||owner.name!=="Tyrant"||!target) return;
  if(!owner.isUltActive) owner.ultCharge=Math.min(owner.ultMax,owner.ultCharge+50);
  spawnText(fromPortal?"PORTAL SWORD! +50 ULT":"+50 ULT",target.x,target.y-28,"#a4c8e1");
}
function triggerTyrantChainUlt(owner) {
  const target=balls.find((b)=>b.team!==owner.team&&b.hp>0&&!b.isClone)||balls.find((b)=>b.team!==owner.team&&b.hp>0);
  owner.ultCharge=0; owner.isUltActive=true; owner.bonusText="CHAIN OF TYRANNY!";
  if(target){ target.stunTimer=Math.max(target.stunTimer,300); target.tyrantChainedBy=owner; effects.push({type:"tyrant_chains",target,owner,life:300,maxLife:300}); spawnText("CHAINED! 5s",target.x,target.y-38,"#a4c8e1"); }
  setTimeout(()=>{if(owner&&owner.hp>0){owner.isUltActive=false;owner.bonusText="";}},450);
}

class Ball {
  constructor(team, name, x, y, isClone = false) {
    let stats = characterDB[name] || characterDB["Copycat"];
    this.team = team;
    this.name = name;
    this.isClone = isClone;
    this.x = x;
    this.y = y;
    this.baseRadius = isClone ? 15 : (name === "Juggernaut" ? 40 : 25);
    this.radius = this.baseRadius;
    this.color = stats.color;
    this.maxHp = isClone ? 80 : stats.hp;
    this.hp = this.maxHp;
    this.baseSpeed = stats.speed;
    this.vx = 0;
    this.vy = 0;

    this.weapons = stats.weapons;
    this.baseWLen = isClone ? stats.wLen * 0.6 : stats.wLen;
    this.wLen = this.baseWLen;
    this.wWidth = isClone ? stats.wWidth * 0.6 : stats.wWidth;
    this.angle = Math.random() * Math.PI;
    this.baseRotSpeed = stats.rotSpeed;
    this.rotSpeed = stats.rotSpeed;
    this.damage = stats.damage;

    if (this.name === "Monkey King") {
      this.staffData = { scale: 1.0 };
    }

    this.trapTimer = 0;
    this.atkSpeed = 1.0;
    this.ultCharge = 0;
    this.ultMax = stats.ultMax || 400;
    this.isUltActive = false;
    this.bonusText = "";
    this.parryCooldown = 0;
    this.iFrames = 0;
    this.visible = true;
    this.timeStopTimer = 0;
    this.swingTimer = 0;
    this.retaliatorIdleAngle = Math.random() * Math.PI * 2;
    this.retaliatorIdlePhase = Math.random() * Math.PI * 2;

    // Juggernaut Momentum
    this.momentum = 0;
    this.momentumCombatTimer = 0;
    this.stunTimer = 0;
    this.knockbackTimer = 0;
    this.tyrantPortalsActive = false;
    this.tyrantPortalSlots = new Set();
    this.tyrantChainedBy = null;
    this.zoneRadius = 140;
    this.combatTimer = 0;
    this.shootCooldown = 0;
    this.stasisUltTimer = 0;
    this.hasBeenHit = false;
    this.deathNoteTimer = 0;
    this.targetToKill = null;
    this.writingAnimTimer = 0;
    this.pencilTrails = [];
    this.illustradeChargeTimer = 0;
    this.floatingChars = [];
    this.spellCircleAngle = 0;

    this.copycatPassiveTimer = 0;
    this.copycatSHAActive = false;
    this.copycatKinichActive = false;
    this.copycatKinichUltActive = false;
    this.copycatKinichUltTimer = 0;
    this.copycatFuneralActive = false;
    this.copycatFuneralTimer = 0;
    this.copycatSpiritTimer = 0;

    this.bfTarget = Math.random() * 100;
    this.bfSpeed = 0.4;
    this.blueCD = 0;
    this.redCD = 0;
    this.purpleCD = 0;
    this.purpleComboTimer = 0;
    this.mugenCD = 0;
    this.domainTimer = 0;
    this.domainDebuffTimer = 0;
    this.stunTimer = 0;

    // Killer Queen
    this.kqBombDamage = 3;
    this.kqContactCooldown = 0;
    this.kqBombStacks = [];
    this.kqSheerHeartAttackActive = false;
    this.kqSheerHeartAttackCD = 0;
    this.kqBitesTarget = null;
    this.kqBitesArmed = false;
    this.kqBitesBombActive = false;

    // Bloodchain
    this.bloodchainBaseDamage = this.name === "Bloodchain" ? stats.damage : 0;
    this.bloodchainInitialDamage = this.name === "Bloodchain" ? stats.damage : 0;
    this.bloodchainBonusDamage = 0;
    this.bloodchainBankaiBaseDamage = 0;
    this.bloodchainBankaiBonusDamage = 0;
    this.bloodchainGJHits = 0;
    this.bloodchainTransformTimer = 0;
    this.bloodchainBankai = false;
    this.bloodchainImmune = false;
    this.bloodchainGJCD = 0;

    // Funeral
    this.hutaoHitCount = 0;
    this.hutaoBloodBlossom = null;
    this.funeralBurn = null;
    this.hutaoUltTimer = 0;
    this.funeralUltPhase = "ready"; // ready, eCharge, eActive, burstCharge
    this.funeralUltCooldown = 900;
    this.funeralUltCooldownMax = 900;
    this.funeralUltMax = 900;
    this.funeralEBonusDamage = 0;
    this.funeralPermanentBonusDamage = 0;
    this.funeralEActive = false;
    this.funeralPapilioDuration = 700;
    this.funeralChargeAttackCD = 0;
    this.funeralChargeAttackTimer = 0;
    this.funeralChargeAttackStartX = this.x;
    this.funeralChargeAttackStartY = this.y;
    this.funeralChargeAttackEndX = this.x;
    this.funeralChargeAttackEndY = this.y;
    this.funeralChargeAttackTarget = null;
    this.funeralChargeAttackHit = false;
    this.funeralChargeAttackAngle = 0;

    // Yaksha
    this.yakshaPassiveStacks = 0;
    this.yakshaPassiveTimer = 0;
    this.yakshaSkillCD = 0;
    this.yakshaDashState = "idle"; // idle, dash, pause
    this.yakshaDashIndex = 0;
    this.yakshaDashTimer = 0;
    this.yakshaDashPauseTimer = 0;
    this.yakshaDashStartX = this.x;
    this.yakshaDashStartY = this.y;
    this.yakshaDashEndX = this.x;
    this.yakshaDashEndY = this.y;
    this.yakshaDashTarget = null;
    this.yakshaDashHit = false;
    this.yakshaDashHitTargets = new Set();
    this.yakshaDashAngle = 0;
    this.yakshaDashLastX = this.x;
    this.yakshaDashLastY = this.y;
    this.yakshaUltPhase = "ready"; // ready, charge, active
    this.yakshaUltChargeTimer = 0;
    this.yakshaUltTimer = 0;
    this.yakshaPlungeCD = 0;
    this.yakshaPlungeState = "idle"; // idle, windup
    this.yakshaPlungeTimer = 0;
    this.yakshaPlungeTarget = null;
    this.yakshaPlungeX = this.x;
    this.yakshaPlungeY = this.y;

    // Adeptus
    // Deliberate archer cadence: slower basic fire rate, with a longer wind-up
    // so Frostflake shots feel powerful rather than machine-gun fast.
    this.atkSpeed = 0.70;
    this.adeptusBasicCD = 38;
    this.adeptusChargeCD = 190;
    this.adeptusState = "idle"; // idle, charge1, charge2, dash
    this.adeptusChargeTimer = 0;
    this.adeptusChargeTarget = null;
    this.adeptusChargeAngle = 0;
    this.adeptusHeartStacks = 0;
    this.adeptusSkillCD = 420;
    this.adeptusLotus = null;
    this.adeptusDashTimer = 0;
    this.adeptusDashStartX = this.x;
    this.adeptusDashStartY = this.y;
    this.adeptusDashEndX = this.x;
    this.adeptusDashEndY = this.y;
    this.adeptusUltTimer = 0;
    this.adeptusUltDamageMultiplier = 1;
    this.adeptusSlowTimer = 0;
    this.adeptusSlowFactor = 1;
    this.adeptusCryoMark = null;

    // Kinich
    this.kinichMarkTarget = null;
    this.kinichSkillCD = 1200;
    this.kinichSkillState = "idle";
    this.kinichSkillTarget = null;
    this.kinichSkillAimTimer = 0;
    this.kinichAjawMode = false;
    this.kinichField = null;
    this.kinichFieldRadius = 108;
    this.kinichChargeTimer = 0;
    this.kinichChargeTarget = null;
    this.kinichAttackCD = 18;
    this.kinichUltPhase = "none";
    this.kinichUltTimer = 0;
    this.kinichUltShots = 0;
    this.kinichUltTarget = null;
    this.kinichUltFinalHit = false;
  }


  takeDamage(amount, attacker = null, isProjectile = false) {
    if (this.name === "Bloodchain" && this.bloodchainImmune) {
      spawnText("IMMUNE!", this.x, this.y - 20, "#b11226");
      return 0;
    }
    if (this.name === "Illustrade" && this.isUltActive) {
      spawnText("IMMUNE!", this.x, this.y - 12, "#222222");
      return 0;
    }
    if (this.name === "Funeral" && this.funeralUltPhase === "burstCharge") {
      spawnText("IMMUNE!", this.x, this.y - 12, "#8f1725");
      return 0;
    }
    if (this.name === "Infinity") {
      if (isProjectile && this.mugenCD <= 0) {
        this.mugenCD = 600;
        spawnText("LIMITLESS BLOCK!", this.x, this.y - 25, "#ffffff");
        return 0;
      }
      if (!isProjectile) amount *= 0.8;
    }
    if (this.domainDebuffTimer > 0) amount *= 1.4;

    // Retaliator is a counter-focused tank: takes 50% less damage.
    let actualDamage = amount;
    if (this.name === "Bloodchain" && attacker && attacker.team !== this.team && !this.bloodchainBankai) {
      this.ultCharge = Math.min(this.ultMax, this.ultCharge + 100);
    }
    if (this.name === "Retaliator") {
      actualDamage *= 0.5;
    }

    // Juggernaut gets tougher as Momentum builds, up to 50% damage reduction.
    if (this.name === "Juggernaut") {
      const damageReduction = Math.min(0.50, (this.momentum / 100) * 0.50);
      actualDamage *= 1 - damageReduction;
      // Momentum is earned from combat: getting hit builds Momentum too.
      this.momentum = Math.min(100, this.momentum + 5);
      this.momentumCombatTimer = 300;
    }
    if (this.name === "Retaliator" && attacker && attacker.team !== this.team) {
      this.combatTimer = 180;
      this.triggerRetaliation(attacker);
    }
    if (this.name === "Vessel") {
      this.damage += 0.5;
      spawnText("+0.5 DMG!", this.x, this.y - 25, "#c0392b");
    }

    if (this.name === "Vessel" && this.hp - actualDamage <= 0 && this.ultCharge >= this.ultMax) {
      this.hp = this.maxHp;
      this.ultCharge = 0;
      this.isUltActive = false;
      this.bonusText = "";
      this.iFrames = 60;
      spawnText("BUT IT REFUSED!", this.x, this.y - 35, "#c0392b");
      effects.push({ type: "heart_refuse", x: this.x, y: this.y - 10, life: 60, maxLife: 60 });
      return 0;
    }

    this.hp -= actualDamage;
    if (this.name === "Death Note" && !this.hasBeenHit) {
      this.hasBeenHit = true;
      this.deathNoteTimer = 4000;
      this.targetToKill = attacker || balls.find((b) => b.team !== this.team && !b.isClone);
      spawnText("DEATH NOTE WRITING...", this.x, this.y - 30, "#e74c3c");
    }
    return actualDamage;
  }

  triggerRetaliation(target) {
    if (!target) return;
    let attackAngle = Math.atan2(target.y - this.y, target.x - this.x);
    this.angle = attackAngle;
    this.swingTimer = 18;
    this.rotSpeed = 0.45;
    let dist = Math.hypot(target.x - this.x, target.y - this.y);
    let currentWLen = this.isUltActive ? this.zoneRadius - this.radius : this.wLen;
    let maxRange = this.radius + currentWLen + target.radius;

    if (dist <= maxRange) {
      if (target.iFrames === 0 || this.isUltActive) {
        let finalDmg = target.takeDamage(this.damage, this);
        target.iFrames = 15;
        // Retaliation damage is a one-hit charge: after the hit, reset to base damage.
        this.damage = 2.0;
        if (!this.isUltActive) {
          this.ultCharge = Math.min(this.ultMax, this.ultCharge + 100);
          spawnText("+100 Ult!", this.x, this.y - 25, "#00d2d3");
        }
        spawnText("-" + finalDmg.toFixed(1), target.x, target.y - 12, "#00d2d3");
        effects.push({ type: "slash", x: (this.x + target.x) / 2, y: (this.y + target.y) / 2, life: 15, angle: attackAngle });
      }
    } else {
      effects.push({
        type: "slash",
        x: this.x + Math.cos(attackAngle) * (this.radius + 15),
        y: this.y + Math.sin(attackAngle) * (this.radius + 15),
        life: 10,
        angle: attackAngle,
      });
    }
  }

  getWeaponSegments() {
    let segs = [];
    if (this.weapons === 0) return segs;
    if (this.name === "Kinich" && this.kinichAjawMode) return segs;
    if (this.name === "Yaksha" && (this.yakshaDashState !== "idle" || this.yakshaPlungeState !== "idle")) return segs;

    if (this.name === "Bloodchain" && this.bloodchainBankai) {
      let ang = this.angle;
      let startX = this.x + Math.cos(ang) * this.radius;
      let startY = this.y + Math.sin(ang) * this.radius;
      let endX = this.x + Math.cos(ang) * (this.radius + this.wLen);
      let endY = this.y + Math.sin(ang) * (this.radius + this.wLen);
      return [{ p1: { x: startX, y: startY }, p2: { x: endX, y: endY } }];
    }
    if (this.name === "Bloodchain") {
      let lengths = [28, this.baseWLen + 6];
      for (let i = 0; i < 2; i++) {
        let ang = this.angle + Math.PI * i;
        let len = lengths[i];
        segs.push({ p1: { x: this.x + Math.cos(ang) * this.radius, y: this.y + Math.sin(ang) * this.radius }, p2: { x: this.x + Math.cos(ang) * (this.radius + len), y: this.y + Math.sin(ang) * (this.radius + len) }, bloodchainIndex: i });
      }
      return segs;
    }

    if (this.name === "Monkey King") {
      let scale = this.staffData ? this.staffData.scale : 1.0;
      let currentHalfLen = (this.radius + this.wLen) * scale;
      let ang = this.angle;
      let startX = this.x - Math.cos(ang) * currentHalfLen;
      let startY = this.y - Math.sin(ang) * currentHalfLen;
      let endX = this.x + Math.cos(ang) * currentHalfLen;
      let endY = this.y + Math.sin(ang) * currentHalfLen;
      segs.push({ p1: { x: startX, y: startY }, p2: { x: endX, y: endY } });
      return segs;
    }

    for (let i = 0; i < this.weapons; i++) {
      let ang = this.angle + ((Math.PI * 2) / this.weapons) * i;
      let startX = this.x + Math.cos(ang) * this.radius;
      let startY = this.y + Math.sin(ang) * this.radius;
      let endX = this.x + Math.cos(ang) * (this.radius + this.wLen);
      let endY = this.y + Math.sin(ang) * (this.radius + this.wLen);
      segs.push({ p1: { x: startX, y: startY }, p2: { x: endX, y: endY } });
    }
    return segs;
  }

  draw() {
    if (!this.visible) return;

    // Bloodchain aura: yellow before Bankai, white/blue-white in Bankai.
    if (this.name === "Bloodchain") {
      ctx.save();
      const pulse = Math.sin(Date.now() * 0.012) * 4;
      const auraColor = this.bloodchainBankai ? "#b11226" : "#f1c40f";
      const auraFill = this.bloodchainBankai ? "rgba(177,18,38,0.24)" : "rgba(241,196,15,0.20)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + 9 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = auraFill;
      ctx.shadowColor = auraColor;
      ctx.shadowBlur = this.bloodchainBankai ? 24 : 16;
      ctx.fill();
      ctx.strokeStyle = auraColor;
      ctx.lineWidth = this.bloodchainBankai ? 3.5 : 3;
      ctx.stroke();
      // Small rotating aura sparks for the Infinity-like energy feel.
      for (let i = 0; i < 8; i++) {
        const a = Date.now() * 0.0012 + i * Math.PI / 4;
        const r = this.radius + 14 + Math.sin(Date.now() * 0.004 + i) * 3;
        const sx = this.x + Math.cos(a) * r;
        const sy = this.y + Math.sin(a) * r;
        ctx.beginPath();
        ctx.arc(sx, sy, this.bloodchainBankai ? 2.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = auraColor;
        ctx.fill();
      }
      ctx.restore();
    }

    if (this.tyrantChainedBy && this.tyrantChainedBy.hp > 0 && this.stunTimer > 0) {
      this.vx=0; this.vy=0;
    } else if (this.tyrantChainedBy && this.stunTimer<=0) {
      this.tyrantChainedBy=null;
    }

    if (this.name === "Killer Queen") {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(190, 155, 145, 0.18)";
      ctx.fill();
      ctx.strokeStyle = "#8f6f66";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }

    if (this.name === "Copycat") {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + 6 + Math.sin(Date.now() * 0.01) * 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 118, 206, 0.25)";
      ctx.fill();
      ctx.shadowColor = "#FF76CE";
      ctx.shadowBlur = 12;
      ctx.strokeStyle = "rgba(255, 118, 206, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    if (this.name === "Antimagic") {
      ctx.save();
      ctx.beginPath();
      let pulse = Math.sin(Date.now() * 0.01) * 4;
      ctx.arc(this.x, this.y, this.radius + 8 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(192, 57, 43, 0.25)";
      ctx.fill();
      ctx.strokeStyle = this.isUltActive ? "#ff0000" : "#c0392b";
      ctx.lineWidth = this.isUltActive ? 3.5 : 2;
      ctx.shadowColor = "#e74c3c";
      ctx.shadowBlur = 12;
      ctx.stroke();

      if (this.isUltActive) {
        ctx.fillStyle = "#111111";
        ctx.beginPath();
        ctx.moveTo(this.x - 15, this.y - 10);
        ctx.quadraticCurveTo(this.x - 45, this.y - 45, this.x - 55, this.y - 20);
        ctx.quadraticCurveTo(this.x - 35, this.y - 15, this.x - 15, this.y + 5);
        ctx.fill();
        ctx.strokeStyle = "#e74c3c";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.restore();
    }

    if (this.name === "Infinity") {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + 6 + Math.sin(Date.now() * 0.01) * 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(108, 92, 231, 0.2)";
      ctx.fill();
      ctx.shadowColor = "#6c5ce7";
      ctx.shadowBlur = 10;
      ctx.strokeStyle = "rgba(108, 92, 231, 0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    if (this.name === "Kinich") {
      // Restore the original clean Copycat / Infinity-style Kinich aura.
      // Keep the original teal/emerald + warm orange palette exactly here.
      ctx.save();
      const pulse = Math.sin(Date.now() * 0.01) * 3;
      const outer = this.radius + 6 + pulse;
      ctx.beginPath();
      ctx.arc(this.x, this.y, outer, 0, Math.PI * 2);
      ctx.fillStyle = this.isUltActive ? "rgba(255,138,36,0.22)" : "rgba(24,199,122,0.22)";
      ctx.fill();
      ctx.shadowColor = this.isUltActive ? "#FF8A24" : "#18C77A";
      ctx.shadowBlur = this.isUltActive ? 18 : 12;
      ctx.strokeStyle = this.isUltActive ? "rgba(255,138,36,0.78)" : "rgba(24,199,122,0.72)";
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Tiny blocky Nightsoul sparks, same visual language as the old Kinich.
      const sparkCount = 4 + (this.kinichAjawMode ? 2 : 0);
      for (let i = 0; i < sparkCount; i++) {
        const a = Date.now() * 0.0011 + i * (Math.PI * 2 / sparkCount);
        const rr = this.radius + 11 + Math.sin(Date.now() * 0.003 + i) * 2;
        const sx = Math.round(this.x + Math.cos(a) * rr);
        const sy = Math.round(this.y + Math.sin(a) * rr);
        ctx.fillStyle = i % 3 === 0 ? "#FF9B2F" : "#7CF7B7";
        ctx.fillRect(sx - 2, sy - 2, 4, 4);
      }
      ctx.restore();

      // Clean target marker.
      if (this.kinichSkillTarget && this.kinichSkillTarget.hp > 0) {
        const target = this.kinichSkillTarget;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "rgba(24,199,122,0.52)";
        ctx.shadowColor = "#18C77A";
        ctx.shadowBlur = 8;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5,5]);
        ctx.beginPath();
        ctx.arc(target.x, target.y, target.radius + 10 + Math.sin(Date.now() * 0.004) * 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      // Keep the newer Claymore/Ajaw weapon and skill/ultimate visuals,
      // but use the restored old Kinich palette around the character.
      if(this.kinichAjawMode) drawKinichAjawWeapon(this.x,this.y,this.angle,this.isUltActive?1.25:0.92);
      if(this.kinichSkillState === "aim") {
        const target = this.kinichSkillTarget;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "rgba(255,179,71,0.88)";
        ctx.shadowColor = "#FFB347";
        ctx.shadowBlur = 12;
        ctx.lineWidth = 2;
        ctx.setLineDash([5,5]);
        if(target && target.hp > 0) {
          ctx.beginPath();
          ctx.moveTo(this.x,this.y);
          ctx.lineTo(target.x,target.y);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.arc(target.x,target.y,target.radius+8,0,Math.PI*2);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    if (this.name === "Divergent") {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + 6 + Math.sin(Date.now() * 0.01) * 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 168, 255, 0.25)";
      ctx.fill();
      ctx.shadowColor = "#00a8ff";
      ctx.shadowBlur = 12;
      ctx.strokeStyle = "rgba(0, 168, 255, 0.7)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    if (this.pencilTrails.length > 1) {
      ctx.save();
      ctx.strokeStyle = "rgba(54, 47, 79, 0.75)";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      for (let i = 0; i < this.pencilTrails.length; i++) {
        let pt = this.pencilTrails[i];
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();
      ctx.restore();
    }

    if (this.name === "Death Note" && this.hasBeenHit && this.deathNoteTimer > 0) {
      ctx.save();
      let pulse = Math.sin(this.writingAnimTimer * 0.1) * 6;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + 12 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(192, 57, 43, 0.25)";
      ctx.fill();
      ctx.strokeStyle = "#e74c3c";
      ctx.lineWidth = 2;
      ctx.stroke();
      let bookX = this.x - 22, bookY = this.y - 68, bookW = 44, bookH = 32;
      ctx.fillStyle = "#111111";
      ctx.fillRect(bookX, bookY, bookW, bookH);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.8;
      ctx.strokeRect(bookX, bookY, bookW, bookH);
      ctx.fillStyle = "#e74c3c";
      ctx.fillRect(bookX + 4, bookY, 3, bookH);
      ctx.strokeStyle = "#e74c3c";
      ctx.lineWidth = 1.5;
      let lineCount = Math.min(5, Math.floor(this.writingAnimTimer / 12) % 6);
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        ctx.moveTo(bookX + 10, bookY + 6 + i * 5);
        ctx.lineTo(bookX + 34, bookY + 6 + i * 5);
        ctx.stroke();
      }
      let penX = bookX + 12 + ((this.writingAnimTimer * 1.5) % 22);
      let penY = bookY + 6 + lineCount * 4.5 + Math.sin(this.writingAnimTimer * 0.3) * 2;
      ctx.save();
      ctx.translate(penX, penY);
      ctx.rotate(-0.4 + Math.sin(this.writingAnimTimer * 0.4) * 0.2);
      ctx.fillStyle = "#ecf0f1";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-6, -18);
      ctx.lineTo(2, -14);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#e74c3c";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(3, 4);
      ctx.stroke();
      ctx.restore();
      let targetName = this.targetToKill ? this.targetToKill.name : "TARGET";
      let seconds = Math.ceil(this.deathNoteTimer / 60);
      let dots = ".".repeat(1 + (Math.floor(this.writingAnimTimer / 15) % 3));
      ctx.fillStyle = "#e74c3c";
      ctx.font = "bold 14px Arial";
      ctx.textAlign = "center";
      ctx.shadowColor = "#000";
      ctx.shadowBlur = 4;
      ctx.fillText(`WRITING ${targetName.toUpperCase()}${dots}`, this.x, this.y - 75);
      ctx.fillText(`DEATH IN: ${seconds}s`, this.x, this.y + this.radius + 18);
      ctx.restore();
    }

    if (this.name === "Funeral") {
      ctx.save();
      const now = Date.now();
      const t = now * 0.0018;
      const critical = this.hp < 25;
      const papilio = this.funeralEActive;
      const charging = this.funeralUltPhase === "eCharge" || this.funeralUltPhase === "burstCharge";
      const primary = critical ? "#ff4d3d" : papilio ? "#c72d3a" : "#8f1725";
      const secondary = critical ? "#ffb070" : "#e56c46";
      const outerR = this.radius + (papilio ? 25 : 15) + Math.sin(now * 0.009) * 3;

      // Infinity/Copycat-style layered aura: soft core, rotating rings, drifting embers.
      ctx.globalCompositeOperation = "lighter";
      ctx.beginPath();
      ctx.arc(this.x, this.y, outerR, 0, Math.PI * 2);
      ctx.fillStyle = papilio ? "rgba(199,45,58,0.20)" : critical ? "rgba(255,77,61,0.18)" : "rgba(143,23,37,0.14)";
      ctx.shadowColor = primary;
      ctx.shadowBlur = papilio ? 28 : 18;
      ctx.fill();

      for (let ring = 0; ring < (papilio ? 3 : 2); ring++) {
        const rr = this.radius + 12 + ring * 8 + Math.sin(t * 2.2 + ring) * 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, rr, t * (ring % 2 ? -0.55 : 0.45) + ring, t * (ring % 2 ? -0.55 : 0.45) + Math.PI * 1.35);
        ctx.strokeStyle = ring === 0 ? `rgba(255,176,112,${papilio ? 0.78 : 0.48})` : `rgba(199,45,58,${papilio ? 0.74 : 0.36})`;
        ctx.lineWidth = papilio ? 2.5 : 1.6;
        ctx.shadowColor = secondary;
        ctx.shadowBlur = 9;
        ctx.stroke();
      }

      // Pyro butterflies / soul embers orbit around Funeral during Papilio.
      const particleCount = papilio ? 12 : 8;
      for (let i = 0; i < particleCount; i++) {
        const a = t * (i % 2 ? 0.72 : -0.52) + (i * Math.PI * 2) / particleCount;
        const rr = this.radius + 18 + Math.sin(t * 2.8 + i) * 5 + (papilio ? 7 : 0);
        const px = this.x + Math.cos(a) * rr;
        const py = this.y + Math.sin(a) * rr;
        const s = papilio ? 1.0 : 0.72;
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(a + Math.PI / 2);
        ctx.fillStyle = i % 2 ? secondary : primary;
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = papilio ? 10 : 6;
        ctx.beginPath();
        ctx.ellipse(-3 * s, 0, 3.4 * s, 6 * s, -0.35, 0, Math.PI * 2);
        ctx.ellipse(3 * s, 0, 3.4 * s, 6 * s, 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#5b0a16";
        ctx.beginPath(); ctx.arc(0, 1, 1.4 * s, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }

      if (charging) {
        const progress = Math.max(0, Math.min(1, 1 - this.funeralUltTimer / (this.hp < 25 ? 180 : 45)));
        const rr = this.radius + 30 + progress * 20;
        ctx.beginPath();
        ctx.arc(this.x, this.y, rr, -Math.PI / 2, -Math.PI / 2 + Math.PI * (0.5 + progress * 1.65));
        ctx.strokeStyle = "#ffd18f";
        ctx.lineWidth = 3;
        ctx.shadowColor = "#ff7043";
        ctx.shadowBlur = 18;
        ctx.stroke();
      }

      if (papilio) {
        // Persistent infusion ring, intentionally prominent.
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + 27 + Math.sin(t * 5) * 2, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,111,77,0.55)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
      ctx.restore();
    }

    if (this.funeralBurn && this.funeralBurn.owner && this.funeralBurn.owner.hp > 0) {
      ctx.save();
      const tBurn = Date.now() * 0.010;
      ctx.globalAlpha = 0.82;
      ctx.shadowColor = "#ff4d3d";
      ctx.shadowBlur = 12;
      for (let i = 0; i < 6; i++) {
        const a = tBurn * (i % 2 ? 0.7 : -0.5) + i * Math.PI / 3;
        const rr = this.radius + 7 + Math.sin(tBurn * 2 + i) * 2;
        const fx = this.x + Math.cos(a) * rr;
        const fy = this.y + Math.sin(a) * rr;
        ctx.fillStyle = i % 2 ? "#ffb36b" : "#ff553f";
        ctx.beginPath();
        ctx.ellipse(fx, fy, 2.5, 6, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    if (this.hutaoBloodBlossom && this.hutaoBloodBlossom.owner && this.hutaoBloodBlossom.owner.hp > 0) {
      ctx.save();
      const flowerPulse = 1 + Math.sin(Date.now() * 0.012) * 0.12;
      const fx = this.x;
      const fy = this.y - this.radius - 15;
      ctx.translate(fx, fy);
      ctx.scale(flowerPulse, flowerPulse);
      ctx.shadowColor = "#ff4b3e";
      ctx.shadowBlur = 8;
      for (let i = 0; i < 5; i++) {
        const a = (i * Math.PI * 2) / 5;
        ctx.save();
        ctx.rotate(a);
        ctx.fillStyle = "#c0392b";
        ctx.beginPath();
        ctx.ellipse(0, -7, 3.8, 6.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = "#f7c26a";
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (this.name === "Illustrade" && this.isUltActive) {
      ctx.save();
      ctx.translate(this.x, this.y);
      this.spellCircleAngle += 0.02;
      ctx.rotate(this.spellCircleAngle);
      ctx.strokeStyle = "rgba(34, 34, 34, 0.85)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 70, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 50, 0, Math.PI * 2);
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        let a = (i * Math.PI) / 3;
        let rx = Math.cos(a) * 50;
        let ry = Math.sin(a) * 50;
        if (i === 0) ctx.moveTo(rx, ry);
        else ctx.lineTo(rx, ry);
      }
      ctx.strokeStyle = "rgba(34, 34, 34, 0.45)";
      ctx.stroke();
      ctx.restore();
      this.floatingChars.forEach((fc) => {
        ctx.save();
        ctx.fillStyle = "#222222";
        ctx.font = "bold 20px Arial";
        ctx.shadowColor = "#777777";
        ctx.shadowBlur = 6;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(fc.char, fc.x, fc.y);
        ctx.restore();
      });
    }

    if (this.name === "Retaliator" && this.isUltActive) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.zoneRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 210, 211, 0.12)";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0, 210, 211, 0.6)";
      ctx.setLineDash([8, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    if (this.name === "Monkey King") {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle - Math.PI / 4);
      let scale = this.staffData ? this.staffData.scale : 1.0;
      let totalLen = (this.radius + this.wLen) * 2 * scale;
      if (monkeyStaffImg.complete && monkeyStaffImg.naturalWidth !== 0) {
        ctx.drawImage(monkeyStaffImg, -totalLen / 2, -totalLen / 2, totalLen, totalLen);
      } else {
        let segs = this.getWeaponSegments();
        segs.forEach((seg) => {
          ctx.beginPath();
          ctx.moveTo(seg.p1.x - this.x, seg.p1.y - this.y);
          ctx.lineTo(seg.p2.x - this.x, seg.p2.y - this.y);
          ctx.lineWidth = this.wWidth * scale;
          ctx.strokeStyle = "#f1c40f";
          ctx.lineCap = "round";
          ctx.stroke();
        });
      }
      ctx.restore();
    } else {
      if (this.name === "Adeptus") drawAdeptusBow(this.x, this.y, this.angle, this.adeptusState === "charge2" ? 1.18 : this.adeptusState === "charge1" ? 1.08 : 1);
      let segs = this.getWeaponSegments();

      // Retaliator idle sword: point away from the nearest enemy.
      // Visual-only while idle; the actual hitbox remains unchanged.
      if (this.name === "Retaliator" && !this.isUltActive && this.swingTimer <= 0) {
        let nearestEnemy = null;
        let nearestDist = Infinity;
        balls.forEach((enemy) => {
          if (enemy === this || enemy.team === this.team || enemy.hp <= 0) return;
          const dx = enemy.x - this.x;
          const dy = enemy.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearestEnemy = enemy;
          }
        });

        if (nearestEnemy) {
          const awayAngle = Math.atan2(this.y - nearestEnemy.y, this.x - nearestEnemy.x);
          let diff = awayAngle - this.retaliatorIdleAngle;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          this.retaliatorIdleAngle += diff * 0.12;
        } else {
          let diff = this.angle - this.retaliatorIdleAngle;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          this.retaliatorIdleAngle += diff * 0.08;
        }

        const idleAng = this.retaliatorIdleAngle;
        const startX = this.x + Math.cos(idleAng) * this.radius;
        const startY = this.y + Math.sin(idleAng) * this.radius;
        const endX = this.x + Math.cos(idleAng) * (this.radius + this.wLen);
        const endY = this.y + Math.sin(idleAng) * (this.radius + this.wLen);
        segs = [{ p1: { x: startX, y: startY }, p2: { x: endX, y: endY } }];
      }

      segs.forEach((seg) => {
        if (this.name === "Kinich") { drawKinichClaymore(seg,this); return; }
        if (this.name === "Juggernaut") {
          const dx = seg.p2.x - seg.p1.x, dy = seg.p2.y - seg.p1.y;
          const len = Math.hypot(dx, dy) || 1;
          const ux = dx / len, uy = dy / len;
          const px = -uy, py = ux;
          // Juggernaut is huge, so its hammer is huge too (2x visual size).
          const headCenterX = seg.p2.x - ux * 14;
          const headCenterY = seg.p2.y - uy * 14;
          const headLen = 52;
          const headWidth = 60;
          ctx.save();
          ctx.lineCap = "round";
          ctx.strokeStyle = "#5b4636";
          ctx.lineWidth = 16;
          ctx.beginPath();
          ctx.moveTo(seg.p1.x, seg.p1.y);
          ctx.lineTo(headCenterX, headCenterY);
          ctx.stroke();
          ctx.fillStyle = this.isUltActive ? "#b0b0b0" : "#777";
          ctx.beginPath();
          ctx.moveTo(headCenterX - ux * headLen / 2 - px * headWidth / 2, headCenterY - uy * headLen / 2 - py * headWidth / 2);
          ctx.lineTo(headCenterX + ux * headLen / 2 - px * headWidth / 2, headCenterY + uy * headLen / 2 - py * headWidth / 2);
          ctx.lineTo(headCenterX + ux * headLen / 2 + px * headWidth / 2, headCenterY + uy * headLen / 2 + py * headWidth / 2);
          ctx.lineTo(headCenterX - ux * headLen / 2 + px * headWidth / 2, headCenterY - uy * headLen / 2 + py * headWidth / 2);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = "#444";
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
          return;
        }
        if (this.name === "Yaksha") {
          drawPrimordialJade(seg, this);
          return;
        }
        if (this.name === "Funeral") {
          const dx = seg.p2.x - seg.p1.x, dy = seg.p2.y - seg.p1.y;
          const len = Math.hypot(dx, dy) || 1;
          const ux = dx / len, uy = dy / len;
          const px = -uy, py = ux;
          const critical = this.hp < 25;
          const charging = this.funeralUltPhase === "eCharge" || this.funeralUltPhase === "burstCharge";
          const glow = critical || charging ? "#ff5a48" : this.funeralEActive ? "#ff7b55" : "#8f1725";
          const shaftEndX = seg.p2.x - ux * 22, shaftEndY = seg.p2.y - uy * 22;
          const collarX = seg.p2.x - ux * 23, collarY = seg.p2.y - uy * 23;
          const bladeBaseX = seg.p2.x - ux * 18, bladeBaseY = seg.p2.y - uy * 18;
          const bladeShoulderX = seg.p2.x - ux * 8, bladeShoulderY = seg.p2.y - uy * 8;
          const tipX = seg.p2.x + ux * 17, tipY = seg.p2.y + uy * 17;
          ctx.save();
          ctx.lineCap = "round";
          ctx.shadowColor = glow;
          ctx.shadowBlur = this.funeralEActive ? 18 : charging ? 14 : 8;

          // Homa shaft: black wine-red outline, crimson core, thin hot-red highlight.
          ctx.strokeStyle = "#25040a"; ctx.lineWidth = 11;
          ctx.beginPath(); ctx.moveTo(seg.p1.x, seg.p1.y); ctx.lineTo(shaftEndX, shaftEndY); ctx.stroke();
          ctx.strokeStyle = "#67101c"; ctx.lineWidth = 7;
          ctx.beginPath(); ctx.moveTo(seg.p1.x, seg.p1.y); ctx.lineTo(shaftEndX, shaftEndY); ctx.stroke();
          ctx.strokeStyle = "#bd2b3c"; ctx.lineWidth = 2.4;
          ctx.beginPath(); ctx.moveTo(seg.p1.x, seg.p1.y); ctx.lineTo(shaftEndX, shaftEndY); ctx.stroke();

          // Gold Homa collar / ornate guard.
          ctx.strokeStyle = "#b98024"; ctx.lineWidth = 6;
          ctx.beginPath(); ctx.moveTo(collarX - px * 8, collarY - py * 8); ctx.lineTo(collarX + px * 8, collarY + py * 8); ctx.stroke();
          ctx.strokeStyle = "#ffe39a"; ctx.lineWidth = 1.8;
          ctx.beginPath(); ctx.moveTo(collarX - px * 8, collarY - py * 8); ctx.lineTo(collarX + px * 8, collarY + py * 8); ctx.stroke();

          // Gold side ornaments beneath the spearhead.
          for (const side of [-1, 1]) {
            ctx.fillStyle = "#d7a64a";
            ctx.beginPath();
            ctx.moveTo(collarX + ux * 1 + px * side * 2, collarY + uy * 1 + py * side * 2);
            ctx.lineTo(collarX + ux * 9 + px * side * 9, collarY + uy * 9 + py * side * 9);
            ctx.lineTo(collarX + ux * 15 + px * side * 4, collarY + uy * 15 + py * side * 4);
            ctx.lineTo(collarX + ux * 7 + px * side * 1, collarY + uy * 7 + py * side * 1);
            ctx.closePath(); ctx.fill();
          }

          // Broad crescent/flame spearhead, closer to Staff of Homa's recognizable head shape.
          const baseHalf = 8.5, shoulderHalf = 15, midHalf = 12;
          const C = (d) => ({ x: seg.p2.x - ux * d, y: seg.p2.y - uy * d });
          const b = C(18), sh = C(11), m = C(3), tip = { x: tipX, y: tipY };
          ctx.fillStyle = critical || charging ? "#e23a43" : "#b31f2f";
          ctx.beginPath();
          ctx.moveTo(tip.x, tip.y);
          ctx.quadraticCurveTo(sh.x + px * shoulderHalf, sh.y + py * shoulderHalf, b.x + px * baseHalf, b.y + py * baseHalf);
          ctx.quadraticCurveTo(m.x + px * midHalf, m.y + py * midHalf, m.x + px * 3, m.y + py * 3);
          ctx.quadraticCurveTo(m.x + ux * 4, m.y + uy * 4, tip.x, tip.y);
          ctx.closePath(); ctx.fill();
          ctx.strokeStyle = "#3f0710"; ctx.lineWidth = 2.2; ctx.stroke();

          // Hollow inner groove and hot-gold edge.
          ctx.strokeStyle = "#f2bf62"; ctx.lineWidth = 2.4;
          ctx.beginPath();
          ctx.moveTo(b.x + ux * 2, b.y + uy * 2);
          ctx.quadraticCurveTo(m.x + px * 3, m.y + py * 3, tip.x - ux * 3, tip.y - uy * 3);
          ctx.stroke();
          ctx.strokeStyle = "#fff0b5"; ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(b.x - ux * 1, b.y - uy * 1);
          ctx.quadraticCurveTo(m.x - px * 5, m.y - py * 5, tip.x - ux * 7, tip.y - uy * 7);
          ctx.stroke();

          if (critical || this.funeralEActive) {
            ctx.strokeStyle = "#ff765d"; ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(tip.x - ux * 5, tip.y - uy * 5);
            ctx.lineTo(tip.x + ux * 4, tip.y + uy * 4);
            ctx.stroke();
          }
          ctx.restore();
          return;
        }

        ctx.beginPath();
        ctx.moveTo(seg.p1.x, seg.p1.y);
        ctx.lineTo(seg.p2.x, seg.p2.y);
        ctx.lineWidth = this.wWidth;
        ctx.strokeStyle = this.isUltActive ? "#f1c40f" : "#444";
        if (this.name === "Bloodchain") {
          ctx.strokeStyle = this.bloodchainBankai ? "#d9d9d9" : "#111111";
          ctx.lineWidth = this.bloodchainBankai ? 14 : (seg.bloodchainIndex === 0 ? 5 : 13);
        }
        if (this.name === "Antimagic") ctx.strokeStyle = this.isUltActive ? "#e74c3c" : "#1e1e1e";
        if (this.name === "Copycat") ctx.strokeStyle = "#b2bec3";
        if (this.name === "Illustrade") ctx.strokeStyle = "#362F4F";
        if (this.name === "Vessel") ctx.strokeStyle = "#8b0000";
        if (this.name === "Valkyrie") ctx.strokeStyle = "#87ceeb";
        if (this.name === "Tyrant") ctx.strokeStyle = "#a4c8e1";
        if (this.name === "Retaliator") ctx.strokeStyle = "#00d2d3";
        ctx.lineCap = "round";
        ctx.stroke();
        if (this.name === "Illustrade") {
          ctx.fillStyle = "#222222";
          ctx.beginPath();
          ctx.arc(seg.p2.x, seg.p2.y, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (this.name === "Yaksha" && (this.yakshaDashState !== "idle" || this.yakshaPlungeState !== "idle")) {
        drawPrimordialJade({
          p1: { x: this.x - Math.cos(this.angle) * 12, y: this.y - Math.sin(this.angle) * 12 },
          p2: { x: this.x + Math.cos(this.angle) * (this.radius + (this.isUltActive ? this.wLen * 1.35 : this.wLen)), y: this.y + Math.sin(this.angle) * (this.radius + (this.isUltActive ? this.wLen * 1.35 : this.wLen)) }
        }, this);
      }
    }

    if (this.name === "Yaksha") {
      drawYakshaAura(this);
    }

    if (this.iFrames > 0 && Math.floor(this.iFrames / 3) % 2 === 0) ctx.fillStyle = "#ffaaaa";
    else if (this.name === "Bloodchain" && this.bloodchainBankai) ctx.fillStyle = "#111111";
    else ctx.fillStyle = this.name === "Death Note" || this.name === "Antimagic" ? "#111111" : "#ffffff";

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = this.name === "Bloodchain"
      ? (this.bloodchainBankai ? "#b11226" : "#ffffff")
      : this.color;
    ctx.stroke();
    if (this.name === "Yaksha" && this.isUltActive) drawYakshaMask(this);
    if (this.name === "Adeptus") drawAdeptusCharacter(this);
    if (this.kinichMarkedBy && this.kinichMarkedBy.hp > 0 && this.kinichMarkedBy.team !== this.team) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const p = 1 + Math.sin(Date.now() * 0.008) * 0.08;
      ctx.translate(this.x, this.y);
      ctx.scale(p, p);
      ctx.strokeStyle = "rgba(24,199,122,0.85)";
      ctx.shadowColor = "#18C77A";
      ctx.shadowBlur = 9;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.arc(0, 0, this.radius + 9, 0.15, Math.PI * 1.85);
      ctx.stroke();
      ctx.fillStyle = "#FF9B2F";
      ctx.fillRect(-3, -this.radius - 14, 6, 5);
      ctx.restore();
    }

    ctx.fillStyle = (this.name === "Death Note" || this.name === "Antimagic") ? "#ffffff" : "#000000";
    ctx.font = `bold ${this.isClone ? 12 : 20}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(Math.floor(this.hp), this.x, this.y);

    if (this.name !== "Adeptus" && this.adeptusCryoMark && this.adeptusCryoMark.life > 0) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const pulse = 1 + Math.sin(Date.now() * 0.012) * 0.08;
      ctx.translate(this.x, this.y);
      ctx.strokeStyle = "rgba(191,234,255,.88)";
      ctx.shadowColor = "#7CCBFF";
      ctx.shadowBlur = 11;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.arc(0, 0, (this.radius + 8) * pulse, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      for (let i = 0; i < 6; i++) {
        const a = i * Math.PI / 3 + Date.now() * 0.0008;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * (this.radius + 3), Math.sin(a) * (this.radius + 3));
        ctx.lineTo(Math.cos(a) * (this.radius + 12), Math.sin(a) * (this.radius + 12));
        ctx.stroke();
      }
      ctx.restore();
    }

    if (this.stunTimer > 0 || this.domainDebuffTimer > 0) {
      ctx.save();
      let t = Date.now() * 0.01;
      ctx.strokeStyle = "#f1c40f";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let a = 0; a < Math.PI * 4; a += 0.25) {
        let r = 3 + a * 2.2;
        let sx = this.x + Math.cos(a + t) * r;
        let sy = this.y - this.radius - 14 + Math.sin(a + t) * (r * 0.35);
        if (a === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
      ctx.restore();
    }
  }

  update() {
    // Copycat clone created by Monkey King's Trickster Clone lasts exactly 5 seconds.
    // It can still use Copycat's passive normally; only its lifetime is limited.
    if (this.copycatCloneLife !== undefined) {
      this.copycatCloneLife--;
      if (this.copycatCloneLife <= 0) {
        this.hp = 0;
        this.visible = false;
        return;
      }
    }

    // Adeptus-applied Cryo slow/mark. These are target-side states so every character
    // naturally respects Ganyu's control effects without replacing the normal movement AI.
    if (this.adeptusCryoMark) {
      this.adeptusCryoMark.life--;
      if (this.adeptusCryoMark.life <= 0 || !this.adeptusCryoMark.owner || this.adeptusCryoMark.owner.hp <= 0) {
        this.adeptusCryoMark = null;
      } else {
        this.adeptusSlowTimer = Math.max(this.adeptusSlowTimer, 2);
        this.adeptusSlowFactor = Math.min(this.adeptusSlowFactor, 0.82);
      }
    }
    if (this.adeptusSlowTimer > 0) this.adeptusSlowTimer--;
    else this.adeptusSlowFactor = 1;

    // Adeptus: automatic Frostflake Bow cycle, Ice Lotus repositioning, and Celestial Shower.
    if (this.name === "Adeptus") {
      this.damage = characterDB["Adeptus"].damage;

      if (this.adeptusSkillCD > 0) this.adeptusSkillCD--;
      if (this.adeptusBasicCD > 0) this.adeptusBasicCD--;
      if (this.adeptusChargeCD > 0 && this.adeptusState === "idle") this.adeptusChargeCD--;

      const enemy = getAdeptusTarget(this, false);

      if (this.adeptusState === "dash") {
        const total = 14;
        const progress = 1 - this.adeptusDashTimer / total;
        this.x = this.adeptusDashStartX + (this.adeptusDashEndX - this.adeptusDashStartX) * progress;
        this.y = this.adeptusDashStartY + (this.adeptusDashEndY - this.adeptusDashStartY) * progress;
        this.vx = 0; this.vy = 0;
        this.adeptusDashTimer--;
        if (this.adeptusDashTimer <= 0) {
          this.adeptusState = "idle";
          const ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
        }
      } else if (!this.isUltActive && this.adeptusState === "idle" && gameState === "playing" && !this.isClone) {
        if (enemy) {
          this.angle = Math.atan2(enemy.y - this.y, enemy.x - this.x);

          // Ice Lotus triggers when an enemy gets close enough to threaten Adeptus.
          if (this.adeptusSkillCD <= 0 && Math.hypot(enemy.x - this.x, enemy.y - this.y) < 235) {
            const dx = this.x - enemy.x;
            const dy = this.y - enemy.y;
            const dist = Math.hypot(dx, dy) || 1;
            const dashDistance = 165;
            const backX = Math.max(this.radius + 4, Math.min(canvas.width - this.radius - 4, this.x + (dx / dist) * dashDistance));
            const backY = Math.max(this.radius + 4, Math.min(canvas.height - this.radius - 4, this.y + (dy / dist) * dashDistance));
            this.adeptusDashStartX = this.x;
            this.adeptusDashStartY = this.y;
            this.adeptusDashEndX = backX;
            this.adeptusDashEndY = backY;
            this.adeptusDashTimer = 14;
            this.adeptusState = "dash";
            this.adeptusSkillCD = 420;
            if (this.adeptusLotus && this.adeptusLotus.hp > 0) this.adeptusLotus.explode();
            this.adeptusLotus = new AdeptusLotus(this.x, this.y, this);
            // Put the Lotus first so existing target selectors naturally choose it.
            // It behaves like a normal combat target until it expires or is destroyed.
            balls.unshift(this.adeptusLotus);
            effects.push({ type: "adeptus_dash", x: this.x, y: this.y, endX: backX, endY: backY, life: 24, maxLife: 24 });
            spawnText("ICE LOTUS!", this.x, this.y - 30, "#7CCBFF");
          } else {
            // Regular long-range basic shot.
            if (this.adeptusBasicCD <= 0) {
              projectiles.push(new AdeptusArrow(this.x, this.y, enemy, this, {
                damageMultiplier: 0.7, speed: 12.5, life: 190
              }));
              this.adeptusBasicCD = 105;
            }

            // Automatic two-stage charge cycle. The character pauses while charging,
            // reproducing Ganyu's deliberate Stage 1 -> Stage 2 cadence.
            if (this.adeptusChargeCD <= 0) {
              this.adeptusState = "charge1";
              this.adeptusChargeTimer = 36;
              this.adeptusChargeTarget = enemy;
              this.adeptusChargeAngle = this.angle;
              this.vx = 0; this.vy = 0;
              effects.push({ type: "adeptus_charge", x: this.x, y: this.y, life: 72, maxLife: 72 });
            }
          }
        }
      } else if (!this.isUltActive && this.adeptusState === "charge1") {
        this.vx = 0; this.vy = 0;
        this.adeptusChargeTimer--;
        const target = this.adeptusChargeTarget;
        if (target && target.hp > 0) this.adeptusChargeAngle = Math.atan2(target.y - this.y, target.x - this.x);
        this.angle = this.adeptusChargeAngle;
        if (this.adeptusChargeTimer <= 0) {
          const targetX = target && target.hp > 0 ? target.x : this.x + Math.cos(this.adeptusChargeAngle) * 250;
          const targetY = target && target.hp > 0 ? target.y : this.y + Math.sin(this.adeptusChargeAngle) * 250;
          projectiles.push(new AdeptusArrow(this.x, this.y, target && target.hp > 0 ? target : null, this, {
            targetX, targetY, damageMultiplier: 2.0, speed: 13.5, life: 190, isStage1: true
          }));
          spawnText("CHARGE I!", this.x, this.y - 28, "#BFEAFF");
          this.adeptusState = "charge2";
          this.adeptusChargeTimer = 50;
        }
      } else if (!this.isUltActive && this.adeptusState === "charge2") {
        this.vx = 0; this.vy = 0;
        this.adeptusChargeTimer--;
        const target = this.adeptusChargeTarget;
        if (target && target.hp > 0) this.adeptusChargeAngle = Math.atan2(target.y - this.y, target.x - this.x);
        this.angle = this.adeptusChargeAngle;
        if (this.adeptusChargeTimer <= 0) {
          const targetX = target && target.hp > 0 ? target.x : this.x + Math.cos(this.adeptusChargeAngle) * 320;
          const targetY = target && target.hp > 0 ? target.y : this.y + Math.sin(this.adeptusChargeAngle) * 320;
          const chargeBonus = 1 + this.adeptusHeartStacks * 0.10;
          projectiles.push(new AdeptusArrow(this.x, this.y, target && target.hp > 0 ? target : null, this, {
            targetX, targetY, damageMultiplier: 4.5, speed: 11.5, life: 210, isFrostflake: true, chargeBonus
          }));
          effects.push({ type: "adeptus_frostflake_cast", x: this.x, y: this.y, life: 26, maxLife: 26 });
          spawnText("FROSTFLAKE!", this.x, this.y - 30, "#AEE4FF");
          this.adeptusState = "idle";
          this.adeptusChargeCD = 175;
          this.adeptusChargeTarget = null;
        }
      }
    }

    // Funeral: low-HP scaling, Blood Blossom, charge attacks, and cooldown-based ultimates.
    if (this.name === "Funeral") {
      if (!this.isClone) {
        // The cooldown length is locked when an ultimate cycle begins.
        // Damage dealt/received does not reduce the cooldown.
        // When ready for the next cycle, the HP threshold determines which
        // ultimate is selected: Papilio at HP >= 25, Spirit Soother below 25.
        if (this.funeralUltPhase === "ready" && this.funeralUltCooldown <= 0) {
          this.funeralUltMax = this.hp < 25 ? 1300 : 900;
          this.funeralUltCooldownMax = this.funeralUltMax;
        }
        if (this.funeralUltCooldown > 0) {
          this.funeralUltCooldown--;
        }
        this.ultMax = this.funeralUltCooldownMax;
        this.ultCharge = Math.max(0, this.funeralUltCooldownMax - this.funeralUltCooldown);

        let passiveDamage = characterDB["Funeral"].damage;
        if (this.hp < 25) passiveDamage *= 1.55;
        else if (this.hp <= 50) passiveDamage *= 1.30;
        this.damage = passiveDamage + this.funeralPermanentBonusDamage;

        if (this.funeralUltPhase === "ready" && this.funeralUltCooldown <= 0 && gameState === "playing") {
          this.activateUlt();
        }
      }

      if (this.hutaoBloodBlossom) {
        const mark = this.hutaoBloodBlossom;
        if (!mark.owner || mark.owner.hp <= 0) this.hutaoBloodBlossom = null;
        else {
          mark.life--; mark.tickTimer--;
          if (mark.tickTimer <= 0) {
            const bloomDamage = this.takeDamage(0.65, mark.owner);
            if (bloomDamage > 0) spawnText("BLOOD BLOSSOM -" + bloomDamage.toFixed(1), this.x, this.y - 28, "#c0392b");
            mark.tickTimer = 45;
          }
          if (mark.life <= 0 || this.hp <= 0) this.hutaoBloodBlossom = null;
        }
      }

      // Hu Tao-like charged attack: available in and out of Paramita Papilio.
      if (this.funeralChargeAttackCD > 0) this.funeralChargeAttackCD--;
      if (this.funeralChargeAttackTimer > 0) {
        const total = 16;
        const progress = 1 - this.funeralChargeAttackTimer / total;
        this.x = this.funeralChargeAttackStartX +
          (this.funeralChargeAttackEndX - this.funeralChargeAttackStartX) * progress;
        this.y = this.funeralChargeAttackStartY +
          (this.funeralChargeAttackEndY - this.funeralChargeAttackStartY) * progress;
        this.angle = this.funeralChargeAttackAngle;
        this.vx = 0; this.vy = 0;

        // The charge attack has a continuous hit check, so Funeral actually travels
        // through the enemy instead of only checking the destination point.
        if (this.funeralChargeAttackTarget && this.funeralChargeAttackTarget.hp > 0 && !this.funeralChargeAttackHit) {
          const target = this.funeralChargeAttackTarget;
          const dist = Math.hypot(target.x - this.x, target.y - this.y);
          if (dist < target.radius + 32) {
            const chargeDamage = this.damage;
            const dealt = target.takeDamage(chargeDamage, this);
            const kbDx = target.x - this.x, kbDy = target.y - this.y;
            const kbDist = Math.hypot(kbDx, kbDy) || 1;
            target.vx = (kbDx / kbDist) * (this.funeralEActive ? 15 : 12);
            target.vy = (kbDy / kbDist) * (this.funeralEActive ? 15 : 12);
            target.knockbackTimer = 34;
            this.funeralChargeAttackHit = true;
            if (dealt > 0) {
              applyFuneralBloodBlossom(this, target, true);
              applyFuneralBurn(this, target);
            }
            spawnText("CHARGE ATTACK -" + dealt.toFixed(1), target.x, target.y - 24, "#ff7043");
            effects.push({
              type: "funeral_charge_hit",
              x: target.x, y: target.y, life: 34, maxLife: 34,
              angle: this.funeralChargeAttackAngle,
            });
          }
        }

        this.funeralChargeAttackTimer--;
        if (this.funeralChargeAttackTimer <= 0) {
          this.funeralChargeAttackHit = false;
          this.funeralChargeAttackTarget = null;
        }
      }

      if (
        this.funeralChargeAttackTimer <= 0 &&
        this.funeralChargeAttackCD <= 0 &&
        gameState === "playing" &&
        !this.isClone &&
        this.funeralUltPhase !== "eCharge" &&
        this.funeralUltPhase !== "burstCharge"
      ) {
        const enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone)
          || balls.find((b) => b.team !== this.team && b.hp > 0);
        if (enemy) performFuneralChargeAttack.call(this, enemy);
      }

      if (this.funeralUltPhase === "eCharge") {
        this.funeralUltTimer--; this.vx = 0; this.vy = 0;
        if (this.funeralUltTimer <= 0) {
          const currentDamage = this.damage;
          const healthBefore = this.hp;
          this.hp = Math.max(1, this.hp * 0.75);
          // Papilio's damage bonus is permanent. Each successful activation adds
          // 40% of the current damage as a new permanent layer.
          const permanentGain = currentDamage * 0.40;
          this.funeralPermanentBonusDamage += permanentGain;
          this.funeralEBonusDamage = permanentGain;
          this.funeralEActive = true;
          this.funeralUltPhase = "eActive";
          this.funeralUltTimer = this.funeralPapilioDuration;
          this.damage = currentDamage + permanentGain;
          spawnText("-" + (healthBefore - this.hp).toFixed(1) + " HP", this.x, this.y - 28, "#ff7043");
          spawnText("+40% PERMANENT DMG", this.x, this.y - 46, "#ffb36b");
          performFuneralPapilio.call(this);
        }
      } else if (this.funeralUltPhase === "eActive") {
        this.funeralUltTimer--;
        if (this.funeralUltTimer <= 0) {
          this.funeralEActive = false;
          this.funeralEBonusDamage = 0;
          this.funeralUltPhase = "ready";
          this.isUltActive = false;
          this.bonusText = "";
          const ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
        }
      } else if (this.funeralUltPhase === "burstCharge") {
        this.funeralUltTimer--; this.vx = 0; this.vy = 0;
        this.stunTimer = 0; this.knockbackTimer = 0; this.domainDebuffTimer = 0;
        if (this.funeralUltTimer <= 0) performFuneralBurst.call(this);
      } else if (this.funeralUltPhase === "burstActive") {
        // Lock Funeral in place for the entire Spirit Soother animation.
        this.funeralUltTimer--;
        this.vx = 0;
        this.vy = 0;
        this.stunTimer = 0;
        this.knockbackTimer = 0;
        this.domainDebuffTimer = 0;
        if (this.funeralUltTimer <= 0) {
          this.funeralUltPhase = "ready";
          this.isUltActive = false;
          this.bonusText = "";
          const ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
        }
      }
    }

    // Funeral's Pyro burn belongs to the target, so it must tick for any Ball.
    if (this.funeralBurn) {
      const burn = this.funeralBurn;
      if (!burn.owner || burn.owner.hp <= 0 || this.hp <= 0) {
        this.funeralBurn = null;
      } else {
        burn.life--;
        burn.tickTimer--;
        if (burn.tickTimer <= 0 && burn.ticksLeft > 0) {
          const burnDamage = this.takeDamage(burn.owner.damage * 0.15, burn.owner);
          if (burnDamage > 0) {
            spawnText("BURN -" + burnDamage.toFixed(1), this.x, this.y - 30, burn.owner && burn.owner.name === "Copycat" ? "#FF76CE" : "#ff7043");
            effects.push({
              type: "funeral_burn_tick",
              x: this.x, y: this.y, life: 18, maxLife: 18,
              copycat: burn.owner && burn.owner.name === "Copycat",
            });
          }
          burn.ticksLeft--;
          burn.tickTimer = 20;
        }
        if (burn.life <= 0 || burn.ticksLeft <= 0 || this.hp <= 0) this.funeralBurn = null;
      }
    }

    if (this.name === "Killer Queen") {
      if (this.kqContactCooldown > 0) this.kqContactCooldown--;
      if (this.kqSheerHeartAttackCD > 0) this.kqSheerHeartAttackCD--;

      // Release SHA automatically when its 20s cooldown is ready.
      if (
        !this.kqSheerHeartAttackActive &&
        this.kqSheerHeartAttackCD <= 0 &&
        gameState === "playing"
      ) {
        let enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone);
        if (enemy) {
          killerQueenSkills.push(new SheerHeartAttack(this, enemy));
          this.kqSheerHeartAttackActive = true;
          spawnText("SHEER HEART ATTACK!", this.x, this.y - 30, "#1D2B53");
        }
      }

      // Bites the Dust is armed automatically once its ultimate meter is full.
      // It does not trigger immediately; it is planted on contact.
      if (this.ultCharge >= this.ultMax && !this.kqBitesArmed) {
        this.kqBitesArmed = true;
      }
    }

    if (this.name === "Antimagic") {
      this.stunTimer = 0;
      this.domainDebuffTimer = 0;
      let weaponSegs = this.getWeaponSegments();

      for (let i = projectiles.length - 1; i >= 0; i--) {
        let p = projectiles[i];
        if (p.owner && p.owner.team !== this.team) {
          let hitBySword = false;
          for (let seg of weaponSegs) {
            let cp = getClosestPointOnSegment({ x: p.x, y: p.y }, seg.p1, seg.p2);
            let dist = Math.hypot(p.x - cp.x, p.y - cp.y);
            if (dist < 15 + this.wWidth / 2) {
              hitBySword = true;
              break;
            }
          }
          if (hitBySword) {
            if (p.isFrostflake && p.owner && p.owner.name === "Adeptus") {
              p.owner.adeptusRegisterStage2Miss?.();
            }
            p.life = 0;
            spawnText("ERASED!", p.x, p.y - 10, "#e74c3c");
            effects.push({ type: "black_flash", x: p.x, y: p.y, life: 10, maxLife: 10 });
          }
        }
      }

  // Tyrant portal swords use a dedicated array, so erase them explicitly.
      for (let i = tyrantSwords.length - 1; i >= 0; i--) {
        let s = tyrantSwords[i];
        if (s.owner && s.owner.team !== this.team) {
          let hitBySword = false;
          for (let seg of weaponSegs) {
            let cp = getClosestPointOnSegment({ x: s.x, y: s.y }, seg.p1, seg.p2);
            let dist = Math.hypot(s.x - cp.x, s.y - cp.y);
            if (dist < 15 + this.wWidth / 2) { hitBySword = true; break; }
          }
          if (hitBySword) {
            tyrantSwords.splice(i,1);
            spawnText("ERASED!", s.x, s.y - 10, "#e74c3c");
            effects.push({ type:"black_flash", x:s.x, y:s.y, life:10, maxLife:10 });
          }
        }
      }

      for (let i = soundTraps.length - 1; i >= 0; i--) {
        let st = soundTraps[i];
        if (st.owner && st.owner.team !== this.team) {
          let hitBySword = false;
          for (let seg of weaponSegs) {
            let cp = getClosestPointOnSegment({ x: st.x, y: st.y }, seg.p1, seg.p2);
            let dist = Math.hypot(st.x - cp.x, st.y - cp.y);
            if (dist < st.radius + this.wWidth / 2) {
              hitBySword = true;
              break;
            }
          }
          if (hitBySword) {
            soundTraps.splice(i, 1);
            spawnText("SPELL DISPELLED!", st.x, st.y - 10, "#e74c3c");
          }
        }
      }

      for (let i = infinitySkills.length - 1; i >= 0; i--) {
        let sk = infinitySkills[i];
        if (sk.owner && sk.owner.team !== this.team) {
          let hitBySword = false;
          for (let seg of weaponSegs) {
            let cp = getClosestPointOnSegment({ x: sk.x, y: sk.y }, seg.p1, seg.p2);
            let dist = Math.hypot(sk.x - cp.x, sk.y - cp.y);
            let skillRadius = sk.radius || 15;
            if (dist < skillRadius + this.wWidth / 2) {
              hitBySword = true;
              break;
            }
          }
          if (hitBySword) {
            infinitySkills.splice(i, 1);
            spawnText("MAGIC NULLIFIED!", this.x, this.y - 20, "#e74c3c");
          }
        }
      }

      if (this.isUltActive) {
        let enemy = balls.find((b) => b.team !== this.team && b.hp > 0);
        if (enemy) {
          let dx = enemy.x - this.x, dy = enemy.y - this.y;
          let dist = Math.hypot(dx, dy) || 1;
          if (dist > this.radius + enemy.radius + 12) {
            this.vx += (dx / dist) * 0.8;
            this.vy += (dy / dist) * 0.8;
            let speed = Math.hypot(this.vx, this.vy);
            if (speed > 5.5) {
              this.vx = (this.vx / speed) * 5.5;
              this.vy = (this.vy / speed) * 5.5;
            }
          }
          this.rotSpeed = 0.25;
        }
      }
    }

    if (this.name === "Copycat") {
      if (this.copycatKinichActive) {
        this.vx = 0; this.vy = 0;

        // Copycat keeps Kinich's charged-node mechanic too.
        // KinichField starts this timer when Copycat touches a node; when the
        // charge finishes, fire the BIG SPIKER projectile.
        if (this.kinichChargeTimer > 0) {
          this.kinichChargeTimer--;
          if (this.kinichChargeTimer <= 0 && this.kinichChargeTarget && this.kinichChargeTarget.hp > 0) {
            projectiles.push(new KinichProjectile(this.x, this.y, this.kinichChargeTarget, this, {
              damageMultiplier: 1.7,
              scale: 1.2,
              speed: 8.5,
              isCharged: true,
              life: 170,
            }));
            effects.push({ type: "kinich_charge_fire", x: this.x, y: this.y, life: 22, maxLife: 22, copycat: true });
            spawnText("COPY: BIG SPIKER!", this.x, this.y - 28, "#FF76CE");
            this.kinichChargeTarget = null;
          }
        }
      }
      if (this.copycatFuneralActive) {
        // Copycat's Papilio copy is a buff, not a movement lock.
        // Let the normal movement/AI logic below keep controlling Copycat.
        this.copycatFuneralTimer--;
        if (this.copycatFuneralTimer <= 0) {
          this.copycatFuneralActive = false;
          this.funeralEActive = false;
          this.funeralEBonusDamage = 0;
          const ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
        }
      }
      if (this.copycatSpiritTimer > 0) {
        this.copycatSpiritTimer--;
        this.vx = 0; this.vy = 0;
        if (this.copycatSpiritTimer <= 0) this.copycatFuneralSpirit = false;
      }
      this.copycatPassiveTimer++;
      if (this.copycatPassiveTimer >= 300 && gameState === "playing") {
        this.copycatPassiveTimer = 0;
        let enemy = balls.find((b) => b.team !== this.team && b.hp > 0);
        if (enemy) {
          let skillType = Math.floor(Math.random() * 12);
          if (skillType === 0) {
            enemy.stunTimer = 40;
            spawnText("COPY: CURSED SPEECH!", enemy.x, enemy.y - 25, "#FF76CE");
          } else if (skillType === 1) {
            projectiles.push(new Projectile(this.x, this.y, enemy.x, enemy.y, this, false));
            spawnText("COPY: TIME SHOT!", this.x, this.y - 25, "#FF76CE");
          } else if (skillType === 2) {
            infinitySkills.push(new BlueOrb(enemy.x, enemy.y, this));
            spawnText("COPY: LAPSE BLUE!", this.x, this.y - 25, "#FF76CE");
          } else if (skillType === 3) {
            infinitySkills.push(new RedWave(this.x, this.y, enemy, this));
            spawnText("COPY: REVERSAL RED!", this.x, this.y - 25, "#FF76CE");
          } else if (skillType === 4) {
            let types = ["BOING", "HEAT", "DOKAN"];
            let chosen = types[Math.floor(Math.random() * types.length)];
            soundTraps.push(new SoundTrap(enemy.x, enemy.y, chosen, this));
            spawnText("COPY: SOUND MARK!", enemy.x, enemy.y - 25, "#FF76CE");
          } else if (skillType === 5) {
            let finalDmg = enemy.takeDamage(this.damage * 1.5, this);
            spawnText("COPY: BLACK FLASH! -" + finalDmg.toFixed(1), enemy.x, enemy.y - 25, "#FF76CE");
            effects.push({ type: "black_flash", x: enemy.x, y: enemy.y, life: 15, maxLife: 15 });
          } else if (skillType === 6) {
            // Copycat can now randomly copy Killer Queen's Sheer Heart Attack.
            // It uses Copycat as the owner, so the copied skill follows Copycat's team.
            if (!this.copycatSHAActive) {
              killerQueenSkills.push(new SheerHeartAttack(this, enemy));
              this.copycatSHAActive = true;
              spawnText("COPY: SHEER HEART ATTACK!", this.x, this.y - 25, "#FF76CE");
            }
          } else if (skillType === 7) {
            // Copycat's random passive can also copy Killer Queen's contact bomb.
            if (!enemy.kqBombStacks) enemy.kqBombStacks = [];
            if (enemy.kqBombStacks.length < 3) {
              enemy.kqBombStacks.push(new KillerQueenBomb(this, enemy));
              spawnText("COPY: KILLER QUEEN BOMB!", enemy.x, enemy.y - 25, "#FF76CE");
            }
          } else if (skillType === 8) {
            // Copycat can randomly imitate Tyrant's portal passive without landing a hit.
            // This copied portal is temporary and expires after the same lifetime used by
            // Copycat's special clones.
            openRandomTyrantPortal(this, 1000);
            spawnText("COPY: TYRANT PORTAL!", this.x, this.y - 25, "#FF76CE");
          } else if (skillType === 9) {
            // Copycat's passive version of Getsuga Jūjishō: two pink crescent waves.
            this.angle = Math.atan2(enemy.y - this.y, enemy.x - this.x);
            projectiles.push(new CopycatGetsugaJujisho(this, enemy, 1));
            setTimeout(() => {
              if (this.hp > 0 && enemy.hp > 0) projectiles.push(new CopycatGetsugaJujisho(this, enemy, 2));
            }, 120);
            spawnText("COPY: GETSUGA JŪJISHŌ!", this.x, this.y - 25, "#FF76CE");
          } else if (skillType === 10) {
            // Copy Kinich's full Skill sequence: grapple animation first,
            // then transition into the Nightsoul orbit/field.
            if (!this.copycatKinichActive) {
              this.copycatKinichActive = true;
              this.kinichSkillState = "grapple";
              this.kinichAjawMode = true;
              this.kinichSkillTarget = enemy;
              this.kinichMarkTarget = enemy;
              this.kinichAttackCD = 0;
              this.kinichChargeTimer = 0;
              this.kinichChargeTarget = null;
              kinichSkills.push(new KinichGrapple(this, enemy));
              spawnText("COPY: CANOPY GRAPPLE!", this.x, this.y - 25, "#FF76CE");
            }
          } else if (skillType === 11) {
            // Copy Funeral's Paramita Papilio activation: HP sacrifice, permanent DMG gain, burn mode.
            if (!this.copycatFuneralActive) {
              const currentDamage = this.damage;
              const permanentGain = currentDamage * 0.40;
              this.hp = Math.max(1, this.hp * 0.75);
              this.funeralPermanentBonusDamage += permanentGain;
              this.funeralEBonusDamage = permanentGain;
              this.funeralEActive = true;
              this.copycatFuneralActive = true;
              this.copycatFuneralTimer = this.funeralPapilioDuration;
              this.damage = currentDamage + permanentGain;
              effects.push({ type:"funeral_papilio_transform", x:this.x,y:this.y,life:72,maxLife:72,angle:this.angle,copycat:true });
              effects.push({ type:"funeral_papilio_burst", x:this.x,y:this.y,life:38,maxLife:38,copycat:true });
              spawnText("COPY: PARAMITA PAPILIO!", this.x, this.y - 25, "#FF76CE");
            }
          }
        }
      }

      if (scatteredSwords.length > 0) {
        for (let i = scatteredSwords.length - 1; i >= 0; i--) {
          let sw = scatteredSwords[i];
          let dist = Math.hypot(sw.x - this.x, sw.y - this.y);
          if (dist < this.radius + 18) {
            scatteredSwords.splice(i, 1);
            let enemy = balls.find((b) => b.team !== this.team && b.hp > 0);
            if (enemy) {
              let ultType = Math.floor(Math.random() * 14);

              if (ultType === 0) {
                enemy.stunTimer = 180;
                enemy.domainDebuffTimer = 180;
                effects.push({ type: "unlimited_void_dot", target: enemy, owner: this, life: 180, maxLife: 180 });
                spawnText("[GOJO] UNLIMITED VOID!", enemy.x, enemy.y - 30, "#FF76CE");
              } else if (ultType === 1) {
                infinitySkills.push(new PurpleBeam(this.x, this.y, enemy, this, true));
                spawnText("[GOJO] HOLLOW PURPLE!", this.x, this.y - 30, "#FF76CE");
              } else if (ultType === 2) {
                let dx = enemy.x - this.x, dy = enemy.y - this.y;
                let d = Math.hypot(dx, dy) || 1;
                this.vx = (dx / d) * 18;
                this.vy = (dy / d) * 18;
                enemy.ultCharge = Math.max(0, enemy.ultCharge - 300);
                let dmg = enemy.takeDamage(5.5, this);
                spawnText("[ASTA] BLACK METEORITE! -" + dmg.toFixed(1), enemy.x, enemy.y - 30, "#FF76CE");
                effects.push({ type: "black_flash", x: enemy.x, y: enemy.y, life: 20, maxLife: 20 });
              } else if (ultType === 3) {
                enemy.stunTimer = 120;
                let ang = Math.atan2(enemy.y - this.y, enemy.x - this.x);
                this.vx = Math.cos(ang) * (this.baseSpeed * 2);
                this.vy = Math.sin(ang) * (this.baseSpeed * 2);
                spawnText("[STASIS] TIME STOP BARRAGE!", enemy.x, enemy.y - 30, "#FF76CE");
              } else if (ultType === 4) {
                for (let k = 0; k < 5; k++) {
                  effects.push({
                    type: "map_slash",
                    p1: { x: -50, y: Math.random() * canvas.height },
                    p2: { x: canvas.width + 50, y: Math.random() * canvas.height },
                    life: 25,
                  });
                }
                let dmg = enemy.takeDamage(4.5, this);
                spawnText("[SWORD SAINT] SPATIAL REND! -" + dmg.toFixed(1), enemy.x, enemy.y - 30, "#FF76CE");
              } else if (ultType === 5) {
                this.hp = Math.min(this.maxHp, this.hp + 35);
                spawnText("[VALKYRIE] VALHALLA REGEN (+35 HP)!", this.x, this.y - 30, "#FF76CE");
              } else if (ultType === 6) {
                let clone = new Ball(this.team, "Copycat", this.x + 30, this.y, true);
                // This specific Copycat clone comes from Monkey King's copied ultimate.
                // It keeps Copycat passive, but disappears after 5 seconds (300 frames).
                clone.copycatCloneLife = 2000;
                let ang = Math.random() * Math.PI * 2;
                clone.vx = Math.cos(ang) * clone.baseSpeed;
                clone.vy = Math.sin(ang) * clone.baseSpeed;
                balls.push(clone);
                spawnText("[MONKEY KING] TRICKSTER CLONE!", this.x, this.y - 30, "#FF76CE");
              } else if (ultType === 7) {
                let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let c = 0; c < 6; c++) {
                  let char = chars.charAt(Math.floor(Math.random() * chars.length));
                  projectiles.push(new LetterProjectile(this.x + (Math.random() * 40 - 20), this.y + (Math.random() * 40 - 20), char, enemy, this));
                }
                spawnText("[ILLUSTRADE] TYPOGRAPHY SPELL!", this.x, this.y - 30, "#FF76CE");
              } else if (ultType === 8) {
                // Copy Juggernaut's Titan Mode: permanently enlarges the Copycat's
                // body and weapon just like Juggernaut's own ultimate.
                this.radius *= 1.4;
                this.wLen *= 1.4;
                spawnText("[JUGGERNAUT] TITAN MODE!", this.x, this.y - 30, "#FF76CE");
              } else if (ultType === 9) {
                // Copy Killer Queen's Bites the Dust. It is a delayed bomb attached
                // to the selected enemy, using the existing BTD implementation.
                killerQueenSkills.push(new BitesTheDustBomb(this, enemy));
                spawnText("[KILLER QUEEN] BITES THE DUST!", enemy.x, enemy.y - 30, "#FF76CE");
              } else if (ultType === 10) {
                // Randomize can also copy Tyrant's sure-hit 5-second chain ultimate.
                // The Copycat version keeps the same four-corner chain animation, but
                // uses Copycat's signature pink aura.
                enemy.stunTimer = Math.max(enemy.stunTimer, 300);
                enemy.tyrantChainedBy = this;
                effects.push({
                  type: "tyrant_chains",
                  target: enemy,
                  owner: this,
                  color: "#FF76CE",
                  life: 300,
                  maxLife: 300
                });
                spawnText("[TYRANT] CHAIN OF TYRANNY! 5s", enemy.x, enemy.y - 30, "#FF76CE");
              } else if (ultType === 11) {
                // Copy Kinich's full BOOMSHAKALAKA: Ajaw descent, projectile barrage and laser.
                new CopycatKinichUlt(this, enemy);
                spawnText("[KINICH] BOOMSHAKALAKA!", this.x, this.y - 30, "#FF76CE");
              } else if (ultType === 12) {
                // Copy Funeral's Spirit Soother directly, including its heal and burst damage.
                this.copycatSpiritTimer = 78;
                this.copycatFuneralSpirit = true;
                performFuneralBurst.call(this);
                spawnText("[FUNERAL] SPIRIT SOOTHER!", this.x, this.y - 30, "#FF76CE");
              } else if (ultType === 13) {
                // Keep the existing Copycat Getsuga Tenshō option.
                this.angle = Math.atan2(enemy.y - this.y, enemy.x - this.x);
                bloodchainSkills.push(new CopycatGetsugaTensho(this, enemy));
                spawnText("[COPYCAT] GETSUGA TENSHŌ!", this.x, this.y - 30, "#FF76CE");
              }

              if (isNaN(this.vx) || isNaN(this.vy) || Math.hypot(this.vx, this.vy) < 0.5) {
                let randomAng = Math.random() * Math.PI * 2;
                this.vx = Math.cos(randomAng) * this.baseSpeed;
                this.vy = Math.sin(randomAng) * this.baseSpeed;
              }
            }
          }
        }
      }
    }

    if (this.name === "Kinich") {
      if (this.kinichSkillCD > 0) this.kinichSkillCD--;
      this.damage = characterDB["Kinich"].damage;

      if (this.kinichChargeTimer > 0) {
        this.kinichChargeTimer--;
        this.vx = 0;
        this.vy = 0;
        if (this.kinichChargeTimer <= 0 && this.kinichChargeTarget && this.kinichChargeTarget.hp > 0) {
          projectiles.push(new KinichProjectile(this.x, this.y, this.kinichChargeTarget, this, {
            damageMultiplier: 1.7,
            scale: 1.2,
            speed: 8.5,
            isCharged: true,
            life: 170,
          }));
          effects.push({ type: "kinich_charge_fire", x: this.x, y: this.y, life: 22, maxLife: 22 });
          spawnText("BIG SPIKER!", this.x, this.y - 28, "#8BAE66");
          this.kinichChargeTarget = null;
        }
      }

      if (this.kinichSkillState === "aim") {
        this.vx = 0;
        this.vy = 0;
        this.kinichSkillAimTimer--;
        if (this.kinichSkillAimTimer <= 0) {
          const target = this.kinichSkillTarget;
          if (target && target.hp > 0 && gameState === "playing") {
            this.kinichSkillState = "grapple";
            this.kinichAjawMode = true;
            kinichSkills.push(new KinichGrapple(this, target));
          } else {
            this.cancelKinichSkill();
          }
        }
      }

      if (this.kinichSkillState === "field") {
        this.vx = 0;
        this.vy = 0;
        const target = this.kinichSkillTarget;
        if (target && target.hp > 0 && this.kinichAjawMode) {
          if (this.kinichAttackCD > 0) this.kinichAttackCD--;
          if (this.kinichAttackCD <= 0 && this.kinichChargeTimer <= 0) {
            projectiles.push(new KinichProjectile(this.x, this.y, target, this, {
              damageMultiplier: 0.55,
              scale: 0.9,
              speed: 9.2,
              life: 150,
            }));
            this.kinichAttackCD = 34;
          }
        }
      }

      if (gameState === "playing" && this.kinichSkillState === "idle") {
        const enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone)
          || balls.find((b) => b.team !== this.team && b.hp > 0);
        if (enemy) {
          this.kinichSkillTarget = enemy;
          this.kinichMarkTarget = enemy;
          this.angle = Math.atan2(enemy.y - this.y, enemy.x - this.x);
          const dist = Math.hypot(enemy.x - this.x, enemy.y - this.y);
          if (this.kinichSkillCD <= 0 && dist > 95) {
            this.kinichSkillState = "aim";
            this.kinichSkillAimTimer = 18;
            this.vx = 0;
            this.vy = 0;
            this.kinichSkillCD = 1200;
            effects.push({ type: "kinich_skill_cast", x: this.x, y: this.y, life: 20, maxLife: 20, target: enemy });
            spawnText("CANOPY GRAPPLE!", this.x, this.y - 28, "#8BAE66");
          }
        }
      }

      if (this.isUltActive) {
        // Kinich remains fully playable during BOOMSHAKALAKA: he can move,
        // use his normal claymore attacks, and trigger Canopy Grapple.
        const enemy = (this.kinichUltTarget && this.kinichUltTarget.hp > 0)
          ? this.kinichUltTarget
          : balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone)
            || balls.find((b) => b.team !== this.team && b.hp > 0);
        if (enemy) this.kinichUltTarget = enemy;

        if (this.kinichUltPhase === "windup") {
          this.kinichUltTimer--;
          if (this.kinichUltTimer <= 0) {
            this.kinichUltPhase = "barrage";
            this.kinichUltTimer = 300;
            this.kinichUltShots = 0;
            effects.push({ type: "kinich_ult_summon", x: canvas.width * 0.5, y: 10, life: 72, maxLife: 72 });
          }
        } else if (this.kinichUltPhase === "barrage") {
          this.kinichUltTimer--;
          if (this.kinichUltShots < 20 && this.kinichUltTimer % 15 === 0 && enemy && enemy.hp > 0) {
            projectiles.push(new KinichProjectile(canvas.width * 0.5, 8, enemy, this, {
              damageMultiplier: 0.50,
              scale: 1.05,
              speed: 6.4,
              isUlt: true,
              homing: false,
              life: 170,
            }));
            this.kinichUltShots++;
          }
          if (this.kinichUltShots >= 20) {
            this.kinichUltPhase = "laserCharge";
            this.kinichUltTimer = 90;
            effects.push({ type: "kinich_ult_final_charge", x: canvas.width * 0.5, y: 14, life: 90, maxLife: 90, target: enemy });
          }
        } else if (this.kinichUltPhase === "laserCharge") {
          this.kinichUltTimer--;
          if (this.kinichUltTimer <= 0) {
            this.kinichUltPhase = "laser";
            this.kinichUltTimer = 60;
            const allEnemies = balls.filter((b) => b.team !== this.team && b.hp > 0);
            kinichSkills.push(new KinichUltLaser(this, allEnemies));
          }
        } else if (this.kinichUltPhase === "laser") {
          this.kinichUltTimer--;
          if (this.kinichUltTimer <= 0) {
            this.isUltActive = false;
            this.kinichUltPhase = "none";
            this.kinichUltTarget = null;
            this.kinichUltFinalHit = false;
            this.kinichUltShots = 0;
            this.bonusText = "";
            this.ultCharge = 0;
            if (Math.hypot(this.vx, this.vy) < 0.25) {
              const ang = Math.random() * Math.PI * 2;
              this.vx = Math.cos(ang) * this.baseSpeed;
              this.vy = Math.sin(ang) * this.baseSpeed;
            }
          }
        }
      }
      }

    // Yaksha: mobile dash chain + transformation wind-up + HP-draining Bane of All Evil.
    if (this.name === "Yaksha") {
      if (this.yakshaSkillCD > 0) this.yakshaSkillCD--;

      if (this.yakshaPassiveTimer > 0) {
        this.yakshaPassiveTimer--;
        if (this.yakshaPassiveTimer <= 0 && this.yakshaPassiveStacks > 0) {
          this.yakshaPassiveStacks--;
          this.yakshaPassiveTimer = this.yakshaPassiveStacks > 0 ? 180 : 0;
        }
      }

      const yakshaBurstActive = this.isUltActive && this.yakshaUltPhase === "active";
      this.damage = characterDB["Yaksha"].damage * (yakshaBurstActive ? 1.5 : 1);
      this.rotSpeed = characterDB["Yaksha"].rotSpeed * (yakshaBurstActive ? 1.5 : 1);

      // Short transformation pause, deliberately matching Funeral's Papilio-style wind-up.
      if (this.isUltActive && this.yakshaUltPhase === "charge") {
        this.vx = 0;
        this.vy = 0;
        this.yakshaUltChargeTimer--;
        if (this.yakshaUltChargeTimer <= 0) {
          this.yakshaUltPhase = "active";
          this.yakshaUltTimer = 1800;
          this.yakshaPlungeCD = 0;
          this.bonusText = "";
          const ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
          effects.push({ type: "yaksha_ult_transform", x: this.x, y: this.y, life: 48, maxLife: 48 });
        }
      } else if (yakshaBurstActive) {
        this.yakshaUltTimer--;
        this.hp = Math.max(1, this.hp - 0.05);

        // Bane of All Evil follows Funeral's cooldown-style ultimate logic:
        // while the transformation is active, its meter fills again instead of
        // being locked at zero. It can also receive extra charge from plunges.
        this.ultCharge = Math.min(this.ultMax, this.ultCharge + 1);

        if (this.yakshaPlungeCD > 0) this.yakshaPlungeCD--;

        if (this.yakshaPlungeState === "windup") {
          this.vx = 0;
          this.vy = 0;
          this.yakshaPlungeTimer--;
          if (this.yakshaPlungeTimer <= 0) this.resolveYakshaPlunge();
        } else if (this.yakshaDashState === "idle" && this.yakshaPlungeCD <= 0 && gameState === "playing") {
          this.performYakshaPlunge();
        }

        if (this.yakshaUltTimer <= 0) {
          this.isUltActive = false;
          this.yakshaUltPhase = "ready";
          this.yakshaUltChargeTimer = 0;
          this.yakshaPlungeState = "idle";
          this.yakshaPlungeTimer = 0;
          this.yakshaPlungeTarget = null;
          this.damage = characterDB["Yaksha"].damage;
          this.rotSpeed = characterDB["Yaksha"].rotSpeed;
          this.bonusText = "";
          const ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
        }
      }

      // Two long, piercing dashes. Each dash has a real 0.5s pause before the next one.
      if (this.yakshaDashState === "dash") {
        const total = 16;
        const previousX = this.x;
        const previousY = this.y;
        const progress = 1 - this.yakshaDashTimer / total;
        this.x = this.yakshaDashStartX + (this.yakshaDashEndX - this.yakshaDashStartX) * progress;
        this.y = this.yakshaDashStartY + (this.yakshaDashEndY - this.yakshaDashStartY) * progress;
        this.vx = 0;
        this.vy = 0;

        const target = this.yakshaDashTarget;
        if (target && target.hp > 0 && target.team !== this.team) {
          // Keep the Primordial Jade aimed at the enemy while the dash trajectory remains fixed.
          this.angle = Math.atan2(target.y - this.y, target.x - this.x);
        } else {
          this.angle = this.yakshaDashAngle;
        }

        // Swept hitbox: the dash can pass completely through enemies instead of stopping at them.
        const dashSegmentStart = { x: previousX, y: previousY };
        const dashSegmentEnd = { x: this.x, y: this.y };
        let grantedUltCharge = this.yakshaDashHit;
        for (const enemy of balls) {
          if (enemy === this || enemy.team === this.team || enemy.hp <= 0 || this.yakshaDashHitTargets.has(enemy)) continue;
          const closest = getClosestPointOnSegment({ x: enemy.x, y: enemy.y }, dashSegmentStart, dashSegmentEnd);
          const hitDist = Math.hypot(enemy.x - closest.x, enemy.y - closest.y);
          if (hitDist <= enemy.radius + 13) {
            const dealt = enemy.takeDamage(this.damage * 1.5, this);
            enemy.iFrames = Math.max(enemy.iFrames, 12);
            this.yakshaDashHitTargets.add(enemy);
            const firstSuccessfulDashHit = dealt > 0 && !this.yakshaDashHit;
            if (dealt > 0) this.yakshaDashHit = true;
            if (firstSuccessfulDashHit) {
              this.ultCharge = Math.min(this.ultMax, this.ultCharge + 500);
              this.yakshaPassiveStacks = Math.min(5, this.yakshaPassiveStacks + 1);
              this.yakshaPassiveTimer = 180;
              spawnText("+500 ULT", enemy.x, enemy.y - 30, "#4A5969");
              spawnText("YAKSHA +1", enemy.x, enemy.y - 46, "#73E6D2");
              grantedUltCharge = true;
            }
            spawnText("DASH -" + dealt.toFixed(1), enemy.x, enemy.y - 16, "#427973");
            effects.push({ type: "yaksha_dash_hit", x: enemy.x, y: enemy.y, life: 24, maxLife: 24, angle: this.yakshaDashAngle });
          }
        }

        this.yakshaDashLastX = this.x;
        this.yakshaDashLastY = this.y;
        this.yakshaDashTimer--;
        if (this.yakshaDashTimer <= 0) {
          this.x = this.yakshaDashEndX;
          this.y = this.yakshaDashEndY;
          this.yakshaDashLastX = this.x;
          this.yakshaDashLastY = this.y;
          if (this.yakshaDashIndex === 0) {
            this.yakshaDashState = "pause";
            this.yakshaDashPauseTimer = 30; // 0.5s at 60 FPS
          } else {
            this.finishYakshaDashSequence();
          }
        }
      } else if (this.yakshaDashState === "pause") {
        this.vx = 0;
        this.vy = 0;
        this.yakshaDashPauseTimer--;
        if (this.yakshaDashPauseTimer <= 0) {
          const enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone)
            || balls.find((b) => b.team !== this.team && b.hp > 0);
          if (enemy) this.startYakshaDash(enemy, 1);
          else this.finishYakshaDashSequence();
        }
      } else if (
        gameState === "playing" &&
        !this.isClone &&
        !this.isUltActive &&
        this.yakshaSkillCD <= 0 &&
        this.yakshaPlungeState === "idle"
      ) {
        const enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone)
          || balls.find((b) => b.team !== this.team && b.hp > 0);
        if (enemy) {
          this.yakshaSkillCD = 720;
          this.startYakshaDash(enemy, 0);
          spawnText("LEMNISCATIC WIND CYCLING!", this.x, this.y - 32, "#427973");
        }
      }
    }

    if (this.stunTimer > 0) {
      this.stunTimer--;
      this.vx = 0;
      this.vy = 0;
      if (this.domainDebuffTimer > 0) this.domainDebuffTimer--;
      if (this.stunTimer === 0) {
        let ang = Math.random() * Math.PI * 2;
        this.vx = Math.cos(ang) * this.baseSpeed;
        this.vy = Math.sin(ang) * this.baseSpeed;
      }
      return;
    }

    if (this.name === "Echoes" && gameState === "playing") {
      this.trapTimer++;
      if (this.trapTimer >= 120) {
        this.trapTimer = 0;
        let myTraps = soundTraps.filter((t) => t.owner === this);
        if (myTraps.length >= 4) {
          let oldest = myTraps[0];
          let idx = soundTraps.indexOf(oldest);
          if (idx !== -1) soundTraps.splice(idx, 1);
        }
        let types = ["BOING", "HEAT", "DOKAN"];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        soundTraps.push(new SoundTrap(this.x, this.y, chosenType, this));
        spawnText("MARK: " + chosenType, this.x, this.y - 20, "#2ecc71");
      }
    }

    if (this.name === "Infinity") {
      if (this.mugenCD > 0) this.mugenCD--;
      if (this.blueCD > 0) this.blueCD--;
      if (this.redCD > 0) this.redCD--;
      if (this.purpleCD > 0) this.purpleCD--;
      if (this.purpleComboTimer > 0) this.purpleComboTimer--;

      if (this.isUltActive) {
        this.domainTimer--;
        this.vx = 0;
        this.vy = 0;
        let domainDmg = 0.5;

        balls.forEach((b) => {
          if (b.team !== this.team && b.hp > 0) {
            b.vx = 0;
            b.vy = 0;
            b.stunTimer = 5;
            b.domainDebuffTimer = 10;
            if (this.domainTimer % 15 === 0) {
              let dmgDone = b.takeDamage(domainDmg, this);
              spawnText("-" + dmgDone.toFixed(1), b.x, b.y - 15, "#a29bfe");
            }
          }
        });

        if (this.domainTimer <= 0) {
          this.isUltActive = false;
          this.bonusText = "";
          let ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
        }
      } else {
        let enemy = balls.find((b) => b.team !== this.team && b.hp > 0);
        if (enemy) {
          if (this.purpleCD <= 0 && (this.purpleComboTimer > 0 || Math.random() < 0.008)) {
            let isBoosted = this.purpleComboTimer > 0;
            infinitySkills.push(new PurpleBeam(this.x, this.y, enemy, this, isBoosted));
            this.purpleCD = 900;
            this.purpleComboTimer = 0;
            spawnText(isBoosted ? "HOLLOW PURPLE (150%)!" : "HOLLOW PURPLE!", this.x, this.y - 30, "#6c5ce7");
          } else if (this.blueCD <= 0) {
            infinitySkills.push(new BlueOrb(enemy.x, enemy.y, this));
            this.blueCD = 480;
            this.purpleComboTimer = 120;
            spawnText("LAPSE: BLUE", this.x, this.y - 30, "#0984e3");
          } else if (this.redCD <= 0) {
            infinitySkills.push(new RedWave(this.x, this.y, enemy, this));
            this.redCD = 600;
            this.purpleComboTimer = 120;
            spawnText("REVERSAL: RED", this.x, this.y - 30, "#d63031");
          }
        }
      }
    }

    if (this.name === "Divergent") {
      if (Math.abs(this.ultCharge - this.bfTarget) < 2) {
        this.bfTarget = Math.random() * 100;
        this.bfSpeed = 0.2 + Math.random() * 0.6;
      }
      if (this.ultCharge < this.bfTarget) this.ultCharge = Math.min(100, this.ultCharge + this.bfSpeed);
      else this.ultCharge = Math.max(0, this.ultCharge - this.bfSpeed);
    }

    if (this.name === "Juggernaut") {
      // Momentum is combat-based: movement never generates it. After a
      // short period without hitting or being hit, Momentum starts draining.
      if (this.momentumCombatTimer > 0) {
        this.momentumCombatTimer--;
      } else if (this.momentum > 0) {
        this.momentum = Math.max(0, this.momentum - 0.1);
      }
      this.damage = characterDB["Juggernaut"].damage * (1 + this.momentum / 100);
    }

    if (this.name === "Retaliator") {
      if (this.combatTimer > 0) this.combatTimer--;
      else this.damage += 0.005;
      let hasEnemyInZone = false;
      if (this.isUltActive) {
        this.vx = 0;
        this.vy = 0;
        this.wLen = this.zoneRadius - this.radius;
        balls.forEach((enemy) => {
          if (enemy.team !== this.team && enemy.hp > 0) {
            let dist = Math.hypot(enemy.x - this.x, enemy.y - this.y);
            if (dist <= this.radius + this.zoneRadius + enemy.radius) {
              hasEnemyInZone = true;
              if (enemy.iFrames === 0) {
                let finalDmg = enemy.takeDamage(this.damage, this);
                enemy.iFrames = 15;
                this.damage = Math.max(2.0, this.damage - 0.8);
                spawnText("-" + finalDmg.toFixed(1), enemy.x, enemy.y - 12, "#00d2d3");
                effects.push({ type: "slash", x: enemy.x, y: enemy.y, life: 12, angle: Math.atan2(enemy.y - this.y, enemy.x - this.x) });
              }
            }
          }
        });
        if (hasEnemyInZone) this.rotSpeed = 0.4;
      }
      if (this.swingTimer > 0) {
        this.swingTimer--;
        if (this.swingTimer <= 0 && (!this.isUltActive || !hasEnemyInZone)) this.rotSpeed = 0;
      } else if (!this.isUltActive || !hasEnemyInZone) this.rotSpeed = 0;
    }

    if (this.name === "Illustrade") {
      let segs = this.getWeaponSegments();
      if (segs.length > 0) {
        let tip = segs[0].p2;
        this.pencilTrails.push({ x: tip.x, y: tip.y, life: 250 });
      }
      for (let i = this.pencilTrails.length - 1; i >= 0; i--) {
        this.pencilTrails[i].life--;
        if (this.pencilTrails[i].life <= 0) this.pencilTrails.splice(i, 1);
      }
      balls.forEach((enemy) => {
        if (enemy !== this && enemy.team !== this.team && enemy.hp > 0) {
          let isTouchingInk = this.pencilTrails.some((pt) => Math.hypot(enemy.x - pt.x, enemy.y - pt.y) < enemy.radius + 4);
          if (isTouchingInk) {
            if (!enemy.lastInkHitTime || Date.now() - enemy.lastInkHitTime >= 200) {
              enemy.lastInkHitTime = Date.now();
              let finalDmg = enemy.takeDamage(this.damage, this);
              this.damage += 0.04;
              spawnText("-" + finalDmg.toFixed(2), enemy.x, enemy.y - 12, "#362F4F");
            }
          }
        }
      });

      if (this.isUltActive) {
        this.vx = 0;
        this.vy = 0;
        this.illustradeChargeTimer--;
        let targetCount = Math.floor(8 + this.damage * 5);
        let charsPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
        if (this.floatingChars.length < targetCount && Math.random() < 0.25) {
          let randomChar = charsPool.charAt(Math.floor(Math.random() * charsPool.length));
          let angle = Math.random() * Math.PI * 2;
          let dist = 60 + Math.random() * 30;
          this.floatingChars.push({ char: randomChar, x: this.x + Math.cos(angle) * dist, y: this.y + Math.sin(angle) * dist });
        }
        if (this.illustradeChargeTimer <= 0) {
          let enemy = balls.find((b) => b.team !== this.team && b.hp > 0);
          if (enemy) this.floatingChars.forEach((fc) => projectiles.push(new LetterProjectile(fc.x, fc.y, fc.char, enemy, this)));
          this.floatingChars = [];
          this.isUltActive = false;
          this.ultCharge = 0;
          this.bonusText = "";
          let ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
        }
      }
    }

    if (this.name === "Death Note") {
      if (this.hasBeenHit && this.deathNoteTimer > 0) {
        this.deathNoteTimer--;
        this.writingAnimTimer++;
        this.ultCharge = 4000 - this.deathNoteTimer;
        if (this.deathNoteTimer <= 0) {
          let target = this.targetToKill || balls.find((b) => b.team !== this.team && b.hp > 0);
          if (target && target.hp > 0) {
            target.takeDamage(9999, this);
            spawnText("HEART ATTACK!", target.x, target.y - 20, "#e74c3c");
          }
        }
      }
    }

    if (this.name === "Bloodchain") {
      let enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone) || balls.find((b) => b.team !== this.team && b.hp > 0);
      if (enemy && this.bloodchainGJCD <= 0 && gameState === "playing") {
        this.angle = Math.atan2(enemy.y - this.y, enemy.x - this.x);
        if (!this.bloodchainBankai) {
          projectiles.push(new BloodchainGetsuga(this, enemy, 1));
          setTimeout(() => { if (this.hp > 0 && enemy.hp > 0) projectiles.push(new BloodchainGetsuga(this, enemy, 2)); }, 120);
          spawnText("GETSUGA JŪJISHŌ!", this.x, this.y - 30, "#f1c40f");
        } else {
          bloodchainSkills.push(new BloodchainGetsugaTensho(this, enemy));
          spawnText("GETSUGA TENSHŌ!", this.x, this.y - 30, "#111111");
        }
        this.bloodchainGJCD = 1200;
      }
    }

    if (this.name === "Brawler" && this.isUltActive) {
      let enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone) || balls.find((b) => b.team !== this.team && b.hp > 0);
      if (enemy) {
        let dx = enemy.x - this.x, dy = enemy.y - this.y;
        let dist = Math.hypot(dx, dy) || 1;
        let ux = dx / dist, uy = dy / dist;
        this.vx += ux * 0.45 + -uy * 0.45;
        this.vy += uy * 0.45 + ux * 0.45;
        let currentSpd = Math.hypot(this.vx, this.vy);
        if (currentSpd > 5.5) {
          this.vx = (this.vx / currentSpd) * 5.5;
          this.vy = (this.vy / currentSpd) * 5.5;
        }
      }
    }

    if (this.stunTimer > 0) {
      this.stunTimer--;
      this.vx = 0;
      this.vy = 0;
    } else {
      this.x += this.vx;
      this.y += this.vy;
    }

    if (this.name === "Stasis") {
      this.shootCooldown--;
      if (this.shootCooldown <= 0) {
        let enemy = balls.find((b) => b.team !== this.team && b.hp > 0);
        if (enemy) {
          projectiles.push(new Projectile(this.x, this.y, enemy.x, enemy.y, this, this.isUltActive));
          let effectiveAtkSpeed = this.isUltActive ? this.atkSpeed * 3 : this.atkSpeed;
          this.shootCooldown = Math.max(4, 60 / effectiveAtkSpeed);
        }
      }
    }

    if (this.name === "Bloodchain" && this.bloodchainGJCD > 0) this.bloodchainGJCD--;
    // Keep displayed/actual damage synchronized with Base Damage and Bankai state.
    if (this.name === "Bloodchain") this.refreshBloodchainDamage();
    if (this.name === "Bloodchain" && this.bloodchainTransformTimer > 0) {
      this.bloodchainTransformTimer--; this.vx = 0; this.vy = 0; this.angle += 0.12;
      if (this.bloodchainTransformTimer <= 0) {
        // Lock the CURRENT Base Damage at the moment Bankai completes.
        // Bankai damage starts at Base x3, then every successful GT adds +2 flat.
        this.bloodchainBankaiBaseDamage = this.bloodchainBaseDamage * 3;
        this.bloodchainBankaiBonusDamage = 0;
        this.bloodchainBankai = true; this.bloodchainImmune = false; this.isUltActive = false;
        this.refreshBloodchainDamage();
        this.baseSpeed = characterDB["Bloodchain"].speed * 1.5;
        this.wLen = characterDB["Bloodchain"].wLen * 1.5;
        this.weapons = 1; this.ultCharge = 0; this.bonusText = "BANKAI: BLOOD CHAIN";
        spawnText("BANKAI: BLOOD CHAIN!", this.x, this.y - 35, "#b11226");
        let ang = Math.random() * Math.PI * 2; this.vx = Math.cos(ang) * this.baseSpeed; this.vy = Math.sin(ang) * this.baseSpeed;
      }
      return;
    }

    this.angle += this.rotSpeed;
    if (this.parryCooldown > 0) this.parryCooldown--;
    if (this.iFrames > 0) this.iFrames--;

    let currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    let targetSpeed = this.baseSpeed;
    if ((!this.isUltActive && !(this.name === "Kinich" && ["aim","grapple","field"].includes(this.kinichSkillState)) &&
         !(this.name === "Adeptus" && ["charge1","charge2","dash"].includes(this.adeptusState)) &&
         !(this.name === "Yaksha" && (this.yakshaDashState !== "idle" || this.yakshaPlungeState !== "idle" || this.yakshaUltPhase === "charge"))) ||
        (this.name === "Adeptus" && this.isUltActive) ||
        (this.name !== "Brawler" && this.name !== "Illustrade" && this.name !== "Retaliator" && this.name !== "Antimagic" && this.name !== "Adeptus" &&
         !(this.name === "Yaksha" && (this.yakshaDashState !== "idle" || this.yakshaPlungeState !== "idle" || this.yakshaUltPhase === "charge")))) {
      targetSpeed *= this.adeptusSlowTimer > 0 ? (this.adeptusSlowFactor || 1) : 1;
      if (this.name === "Yaksha") {
        const passiveSpeed = 1 + this.yakshaPassiveStacks * 0.04;
        targetSpeed *= passiveSpeed * (this.isUltActive && this.yakshaUltPhase === "active" ? 1.5 : 1);
      }
      if (currentSpeed > targetSpeed) {
        this.vx *= 0.92;
        this.vy *= 0.92;
      } else if (currentSpeed < targetSpeed && currentSpeed > 0.1) {
        let ratio = targetSpeed / currentSpeed;
        this.vx *= ratio;
        this.vy *= ratio;
      } else if (currentSpeed <= 0.1) {
        let ang = Math.random() * Math.PI * 2;
        this.vx = Math.cos(ang) * targetSpeed;
        this.vy = Math.sin(ang) * targetSpeed;
      }
    }

    if (this.x - this.radius <= 0) {
      this.x = this.radius;
      if (this.knockbackTimer > 0 && this.vx < -0.5) {
        this.vx = 0; this.vy = 0; this.stunTimer = 48;
        spawnText("STUN!", this.x, this.y - this.radius - 8, "#f1c40f");
      } else this.vx *= -1;
    }
    if (this.x + this.radius >= canvas.width) {
      this.x = canvas.width - this.radius;
      if (this.knockbackTimer > 0 && this.vx > 0.5) {
        this.vx = 0; this.vy = 0; this.stunTimer = 48;
        spawnText("STUN!", this.x, this.y - this.radius - 8, "#f1c40f");
      } else this.vx *= -1;
    }
    if (this.y - this.radius <= 0) {
      this.y = this.radius;
      if (this.knockbackTimer > 0 && this.vy < -0.5) {
        this.vx = 0; this.vy = 0; this.stunTimer = 48;
        spawnText("STUN!", this.x, this.y - this.radius - 8, "#f1c40f");
      } else this.vy *= -1;
    }
    if (this.y + this.radius >= canvas.height) {
      this.y = canvas.height - this.radius;
      if (this.knockbackTimer > 0 && this.vy > 0.5) {
        this.vx = 0; this.vy = 0; this.stunTimer = 48;
        spawnText("STUN!", this.x, this.y - this.radius - 8, "#f1c40f");
      } else this.vy *= -1;
    }
    if (this.knockbackTimer > 0) this.knockbackTimer--;

    // Bloodchain transforms automatically as soon as Bankai charge reaches 5000.
    if (gameState === "playing" && !this.isClone && this.name === "Bloodchain" &&
        !this.bloodchainBankai && this.bloodchainTransformTimer <= 0 && this.ultCharge >= this.ultMax) {
      this.activateUlt();
    }

    // Yaksha uses an explicit activation gate, matching Funeral/Bloodchain's
    // state-driven ultimate flow. This prevents generic auto-ult logic from
    // racing the Yaksha transformation state.
    if (gameState === "playing" && !this.isClone && this.name === "Yaksha" && !this.isUltActive) {
      this.ultCharge = Math.min(this.ultMax, this.ultCharge + 1);
      if (this.ultCharge >= this.ultMax) this.activateUlt();
    }

    if (gameState === "playing" && !this.isClone && !this.isUltActive && this.name !== "Death Note" && this.name !== "Divergent" && this.name !== "Funeral" && this.name !== "Yaksha" && (this.name !== "Bloodchain" || !this.bloodchainBankai)) {
      this.ultCharge = Math.min(this.ultMax, this.ultCharge + 1);
      if (this.ultCharge >= this.ultMax) this.activateUlt();
    }

    if (this.isUltActive && this.name === "Valkyrie") this.hp = Math.min(this.maxHp, this.hp + 0.4);

    if (gameState === "playing" && !this.isClone && this.name === "Tyrant" && !this.isUltActive && this.ultCharge >= this.ultMax) {
      triggerTyrantChainUlt(this);
    }
  }

  adeptusRegisterStage2Hit(target) {
    if (this.name !== "Adeptus") return;
    this.adeptusHeartStacks = Math.min(3, this.adeptusHeartStacks + 1);
    spawnText("UNDIVIDED HEART x" + this.adeptusHeartStacks, target.x, target.y - 36, "#CFF5FF");
  }

  adeptusRegisterStage2Miss() {
    if (this.name !== "Adeptus") return;
    if (this.adeptusHeartStacks > 0) spawnText("HEART BROKEN", this.x, this.y - 28, "#8FD3FF");
    this.adeptusHeartStacks = 0;
  }

  cancelKinichSkill(){if(this.name!=="Kinich")return;if(this.kinichField&&this.kinichField.life>0)this.kinichField.life=0;this.kinichField=null;this.kinichSkillState="idle";this.kinichAjawMode=false;this.kinichChargeTimer=0;this.kinichChargeTarget=null;this.kinichSkillTarget=null;}

  refreshBloodchainDamage() {
    if (this.name !== "Bloodchain") return;
    this.bloodchainBaseDamage = this.bloodchainInitialDamage + this.bloodchainBonusDamage;
    // Before Bankai: Base Damage = initial Base + every pre-Bankai +2.
    // At Bankai: lock the CURRENT Base Damage x3.
    // After that: every successful GT adds a flat +2 to the current damage.
    // Example: Base 12 -> Bankai 36 -> GT hit -> 38 -> next GT -> 40.
    this.damage = this.bloodchainBankai
      ? (this.bloodchainBankaiBaseDamage + this.bloodchainBankaiBonusDamage)
      : this.bloodchainBaseDamage;
  }

  startYakshaDash(target, dashIndex = 0) {
    if (this.name !== "Yaksha" || !target || target.hp <= 0) return;
    const angle = Math.atan2(target.y - this.y, target.x - this.x);
    const dashDistance = 280; // deliberately longer than Funeral's 235px max CA travel

    this.yakshaDashState = "dash";
    this.yakshaDashIndex = dashIndex;
    this.yakshaDashTimer = 16;
    this.yakshaDashTarget = target;
    this.yakshaDashHit = false;
    this.yakshaDashHitTargets = new Set();
    this.yakshaDashAngle = angle;
    this.yakshaDashStartX = this.x;
    this.yakshaDashStartY = this.y;
    this.yakshaDashLastX = this.x;
    this.yakshaDashLastY = this.y;
    this.yakshaDashEndX = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x + Math.cos(angle) * dashDistance));
    this.yakshaDashEndY = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y + Math.sin(angle) * dashDistance));
    this.angle = angle;
    this.vx = 0;
    this.vy = 0;

    effects.push({
      type: "yaksha_dash",
      x: this.x, y: this.y,
      startX: this.x, startY: this.y,
      endX: this.yakshaDashEndX, endY: this.yakshaDashEndY,
      angle,
      life: 26, maxLife: 26,
    });
  }

  finishYakshaDashSequence() {
    this.yakshaDashState = "idle";
    this.yakshaDashTarget = null;
    this.yakshaDashHit = false;
    this.yakshaDashHitTargets = new Set();
    this.yakshaDashTimer = 0;
    this.yakshaDashPauseTimer = 0;
    const ang = Math.random() * Math.PI * 2;
    this.vx = Math.cos(ang) * this.baseSpeed;
    this.vy = Math.sin(ang) * this.baseSpeed;
  }

  performYakshaPlunge() {
    if (this.name !== "Yaksha" || !this.isUltActive || this.yakshaUltPhase !== "active" || this.hp <= 0) return;

    const enemies = balls.filter((b) => b.team !== this.team && b.hp > 0);
    if (enemies.length === 0) return;

    const target = enemies.reduce((best, enemy) => {
      const d = Math.hypot(enemy.x - this.x, enemy.y - this.y);
      if (!best) return enemy;
      return d < Math.hypot(best.x - this.x, best.y - this.y) ? enemy : best;
    }, null);

    this.yakshaPlungeState = "windup";
    this.yakshaPlungeTimer = 36;
    this.yakshaPlungeTarget = target;
    this.yakshaPlungeX = target.x;
    this.yakshaPlungeY = target.y;
    this.vx = 0;
    this.vy = 0;
    this.angle = Math.atan2(target.y - this.y, target.x - this.x);
    effects.push({ type: "yaksha_plunge_charge", x: this.x, y: this.y, target, life: 36, maxLife: 36 });
  }

  resolveYakshaPlunge() {
    if (this.name !== "Yaksha" || !this.isUltActive || this.yakshaUltPhase !== "active") return;

    const target = this.yakshaPlungeTarget && this.yakshaPlungeTarget.hp > 0
      ? this.yakshaPlungeTarget
      : balls.find((b) => b.team !== this.team && b.hp > 0);

    const impactX = target ? target.x : this.yakshaPlungeX;
    const impactY = target ? target.y : this.yakshaPlungeY;
    const landingAngle = target ? Math.atan2(target.y - this.y, target.x - this.x) : this.angle;

    this.x = Math.max(this.radius + 2, Math.min(canvas.width - this.radius - 2, impactX - Math.cos(landingAngle) * 30));
    this.y = Math.max(this.radius + 2, Math.min(canvas.height - this.radius - 2, impactY - Math.sin(landingAngle) * 30));
    this.angle = landingAngle;

    const plungeDamage = this.damage * 2.5;
    const impactRadius = 120;
    let hitCount = 0;

    balls.forEach((enemy) => {
      if (enemy.team === this.team || enemy.hp <= 0) return;
      const dist = Math.hypot(enemy.x - impactX, enemy.y - impactY);
      if (dist <= impactRadius + enemy.radius) {
        const dealt = enemy.takeDamage(plungeDamage, this);
        enemy.iFrames = Math.max(enemy.iFrames, 14);
        if (dealt > 0) hitCount++;

        const dx = enemy.x - impactX;
        const dy = enemy.y - impactY;
        const d = Math.hypot(dx, dy) || 1;
        enemy.vx = (dx / d) * 9;
        enemy.vy = (dy / d) * 9;
        enemy.knockbackTimer = 30;
        spawnText("PLUNGE -" + dealt.toFixed(1), enemy.x, enemy.y - 18, "#427973");
      }
    });

    if (hitCount > 0) {
      const heal = this.maxHp * 0.15;
      this.hp = Math.min(this.maxHp, this.hp + heal);
      this.ultCharge = Math.min(this.ultMax, this.ultCharge + 50);
      this.yakshaPassiveStacks = Math.min(5, this.yakshaPassiveStacks + 1);
      this.yakshaPassiveTimer = 180;
      spawnText("+" + heal.toFixed(1) + " HP", this.x, this.y - 30, "#4A5969");
      spawnText("+50 ULT", this.x, this.y - 46, "#427973");
      spawnText("YAKSHA +1", this.x, this.y - 62, "#73E6D2");
    }

    effects.push({
      type: "yaksha_plunge_impact",
      x: impactX, y: impactY,
      life: 58, maxLife: 58,
      radius: impactRadius,
    });
    this.yakshaPlungeCD = 240;
    this.yakshaPlungeState = "idle";
    this.yakshaPlungeTimer = 0;
    this.yakshaPlungeTarget = null;
  }

  activateUlt() {
    if (this.name === "Yaksha" && (this.isUltActive || this.yakshaUltPhase === "charge" || this.yakshaUltPhase === "active")) return;

    if (this.name === "Killer Queen") {
      // Bites the Dust behaves like Vessel's Determination: once full,
      // the meter stays FULL until the trap actually triggers.
      this.isUltActive = false;
      this.kqBitesArmed = true;
      return;
    }

    if (this.name === "Bloodchain") {
      if (this.bloodchainBankai || this.bloodchainTransformTimer > 0) return;
      this.ultCharge = 0; this.isUltActive = true; this.bloodchainImmune = true;
      this.bloodchainTransformTimer = 150; this.bonusText = "BANKAI CHARGING..."; this.vx = 0; this.vy = 0;
      spawnText("BANKAI CHARGE!", this.x, this.y - 30, "#b11226");
      return;
    }

    this.isUltActive = true;
    if (this.name === "Tyrant") {
      triggerTyrantChainUlt(this);
      return;
    }
    if (this.name === "Vessel") {
      this.bonusText = "DETERMINED!";
      return;
    }
    this.ultCharge = 0;

    if (this.name === "Antimagic") {
      this.bonusText = "BLACK METEORITE!";
      this.wLen = this.baseWLen * 1.5;
      this.damage = characterDB["Antimagic"].damage * 2;
      projectiles = projectiles.filter((p) => p.owner && p.owner.team === this.team);
      spawnText("ANTI-MAGIC SURGE!", this.x, this.y - 30, "#e74c3c");
    } else if (this.name === "Copycat") {
      this.bonusText = "SWORD DOMAIN!";
      // Do NOT clear existing swords. This lets Copycat vs Copycat keep both
      // Sword Domain sword sets on the map at the same time.
      for (let i = 0; i < 8; i++) {
        let sx = 40 + Math.random() * (canvas.width - 80);
        let sy = 40 + Math.random() * (canvas.height - 80);
        scatteredSwords.push(new ScatteredSword(sx, sy));
      }
    } else if (this.name === "Echoes") {
      this.bonusText = "NOISE OVERLOAD!";
      let enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone) || balls.find((b) => b.team !== this.team && b.hp > 0);
      if (enemy) {
        let types = ["BOING", "HEAT", "DOKAN"];
        for (let i = 0; i < 4; i++) {
          let ang = (i * Math.PI * 2) / 3;
          let tx = Math.max(30, Math.min(canvas.width - 30, enemy.x + Math.cos(ang) * 45));
          let ty = Math.max(30, Math.min(canvas.height - 30, enemy.y + Math.sin(ang) * 45));
          soundTraps.push(new SoundTrap(tx, ty, types[i % types.length], this));
        }
        setTimeout(() => {
      for (let i = soundTraps.length - 1; i >= 0; i--) {
            let trap = soundTraps[i];
            if (trap.owner === this) {
              if (enemy && enemy.hp > 0) trap.trigger(enemy);
              soundTraps.splice(i, 1);
            }
          }
          this.isUltActive = false;
          this.bonusText = "";
        }, 250);
      } else {
        this.isUltActive = false;
      }
    } else if (this.name === "Infinity") {
      this.bonusText = "UNLIMITED VOID!";
      this.domainTimer = 240;
      this.blueCD = 0;
      this.redCD = 0;
    } else if (this.name === "Illustrade") {
      this.bonusText = "SPELL CHARGING...";
      this.illustradeChargeTimer = 180;
      this.floatingChars = [];
    } else if (this.name === "Juggernaut") {
      this.radius *= 1.4;
      this.wLen *= 1.4;
    } else if (this.name === "Brawler") {
      this.bonusText = "GRAVITY ORBIT!";
    } else if (this.name === "Retaliator") {
      this.bonusText = "RETRIBUTION ZONE!";
      this.wLen = this.zoneRadius - this.radius;
    } else if (this.name === "Monkey King") {
      this.bonusText = "CLONES OUT!";
      for (let i = 0; i < 2; i++) {
        let clone = new Ball(this.team, this.name, this.x + (i === 0 ? 35 : -35), this.y, true);
        clone.staffData = this.staffData;
        let ang = Math.random() * Math.PI * 2;
        clone.vx = Math.cos(ang) * clone.baseSpeed;
        clone.vy = Math.sin(ang) * clone.baseSpeed;
        balls.push(clone);
      }
    } else if (this.name === "Sword Saint") {
      this.bonusText = "SPATIAL REND!";
      gameState = "timestop";
      this.visible = false;
      this.timeStopTimer = 180;
    } else if (this.name === "Stasis") {
      this.bonusText = "3X ATK SPEED TIME STOP!";
      this.stasisUltTimer = 210;
    } else if (this.name === "Valkyrie") this.bonusText = "REGEN!";
    else if (this.name === "Kinich") {
      this.bonusText="BOOMSHAKALAKA!";
      this.kinichUltPhase="windup";
      this.kinichUltTimer=100;
      this.kinichUltShots=0;
      this.kinichUltFinalHit=false;
      this.kinichUltTarget=this.kinichMarkTarget&&this.kinichMarkTarget.hp>0?this.kinichMarkTarget:balls.find(b=>b.team!==this.team&&b.hp>0&&!b.isClone)||balls.find(b=>b.team!==this.team&&b.hp>0);
      // Do not cancel an active Kinich Skill when BOOMSHAKALAKA starts.
      // In particular, if Kinich is already orbiting inside the Nightsoul Field,
      // the field/orbit must remain attached throughout the ultimate.
      this.vx=0;this.vy=0;
      kinichSkills.push(new KinichUltBoss(this));
      effects.push({type:"kinich_ult_charge",x:canvas.width*0.5,y:10,life:100,maxLife:100});
    } else if (this.name === "Funeral") {
      const critical = this.hp < 25;
      this.funeralUltMax = critical ? 1300 : 900;
      this.funeralUltCooldownMax = this.funeralUltMax;
      this.ultMax = this.funeralUltCooldownMax;
      this.funeralUltCooldown = this.funeralUltCooldownMax;
      this.ultCharge = 0;
      this.vx = 0;
      this.vy = 0;
      this.isUltActive = true;
      if (critical) {
        this.funeralUltPhase = "burstCharge";
        this.funeralUltTimer = 180;
      } else {
        this.funeralUltPhase = "eCharge";
        this.funeralUltTimer = 45;
      }
    } else if (this.name === "Yaksha") {
      // Bane of All Evil has a short transformation pause before the active burst begins.
      this.yakshaUltTimer = 0;
      this.yakshaUltChargeTimer = 60;
      this.yakshaUltPhase = "charge";
      this.yakshaPlungeCD = 0;
      this.yakshaPlungeState = "idle";
      this.yakshaPlungeTimer = 0;
      this.yakshaPlungeTarget = null;
      this.yakshaDashState = "idle";
      this.yakshaDashTarget = null;
      this.bonusText = "";
      this.vx = 0;
      this.vy = 0;
      effects.push({ type: "yaksha_ult_start", x: this.x, y: this.y, life: 60, maxLife: 60 });
    } else if (this.name === "Adeptus") {
      this.adeptusUltTimer = 360;
      this.adeptusUltDamageMultiplier = 1.2;
      adeptusSkills.push(new AdeptusShower(this));
    }

    if (this.name !== "Sword Saint" && this.name !== "Stasis" && this.name !== "Illustrade" && this.name !== "Infinity" && this.name !== "Echoes" && this.name !== "Funeral" && this.name !== "Kinich" && this.name !== "Yaksha" && this.name !== "Adeptus") {
      let ultDuration = this.name === "Brawler" ? 1000 : this.name === "Antimagic" ? 2000 : 5000;
      setTimeout(() => {
        this.isUltActive = false;
        this.ultCharge = 0;
        this.bonusText = "";
        this.radius = this.baseRadius;
        this.wLen = this.baseWLen;
        if (this.name === "Antimagic") {
          this.damage = characterDB["Antimagic"].damage;
          this.rotSpeed = characterDB["Antimagic"].rotSpeed;
        }
        if (this.name === "Retaliator" || this.name === "Brawler") {
          let ang = Math.random() * Math.PI * 2;
          this.vx = Math.cos(ang) * this.baseSpeed;
          this.vy = Math.sin(ang) * this.baseSpeed;
          this.rotSpeed = 0;
        }
      }, ultDuration);
    }
  }
}

function performFuneralPapilio() {
  if (this.name !== "Funeral" || this.hp <= 0) return;
  effects.push({
    type: "funeral_papilio_transform",
    x: this.x, y: this.y,
    life: 72, maxLife: 72,
    angle: this.angle,
  });
  effects.push({
    type: "funeral_papilio_burst",
    x: this.x, y: this.y,
    life: 38, maxLife: 38,
  });
}

function performFuneralChargeAttack(target) {
  if (this.name !== "Funeral" || !target || target.hp <= 0 || this.funeralChargeAttackCD > 0) return;
  const dx = target.x - this.x;
  const dy = target.y - this.y;
  const dist = Math.hypot(dx, dy) || 1;
  const angle = Math.atan2(dy, dx);

  // Longer Hu Tao-style dash. The target is slightly overshot when possible so
  // Funeral visibly passes through the opponent instead of stopping short.
  const dashDistance = Math.min(235, Math.max(95, dist + target.radius + 34));
  this.funeralChargeAttackAngle = angle;
  this.angle = angle;
  this.funeralChargeAttackStartX = this.x;
  this.funeralChargeAttackStartY = this.y;
  this.funeralChargeAttackEndX = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x + Math.cos(angle) * dashDistance));
  this.funeralChargeAttackEndY = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y + Math.sin(angle) * dashDistance));
  this.funeralChargeAttackTarget = target;
  this.funeralChargeAttackTimer = 16;
  this.funeralChargeAttackCD = 300;
  this.funeralChargeAttackHit = false;
  this.vx = 0;
  this.vy = 0;
  effects.push({
    type: "funeral_charge",
    x: this.x, y: this.y,
    startX: this.x, startY: this.y,
    endX: this.funeralChargeAttackEndX, endY: this.funeralChargeAttackEndY,
    angle, papilio: this.funeralEActive,
    life: 24, maxLife: 24,
  });
}

function performFuneralBurst() {
  if ((this.name !== "Funeral" && !this.copycatFuneralSpirit) || this.hp <= 0) return;

  const enemy = balls.find((b) => b.team !== this.team && b.hp > 0 && !b.isClone)
    || balls.find((b) => b.team !== this.team && b.hp > 0);
  const currentDamage = this.damage;
  const oldX = this.x;
  const oldY = this.y;
  const healAmount = this.maxHp * 0.40;
  const hpBefore = this.hp;

  // Keep Funeral stationary until the Spirit Soother visual finishes.
  this.funeralUltPhase = "burstActive";
  this.isUltActive = true;
  this.funeralEBonusDamage = 0;
  this.funeralEActive = false;
  this.ultCharge = 0;
  this.funeralUltTimer = 78;

  // Add +40% Max HP to current HP rather than setting HP to a percentage.
  this.hp = Math.min(this.maxHp, this.hp + healAmount);
  spawnText("+" + (this.hp - hpBefore).toFixed(1) + " HP", this.x, this.y - 28, "#ffb36b");

  let angle = this.angle;
  let hitEnemy = null;
  let burstDamage = 0;
  let blossomExplosion = 0;

  if (enemy) {
    const dx = enemy.x - this.x;
    const dy = enemy.y - this.y;
    const dist = Math.hypot(dx, dy) || 1;
    angle = Math.atan2(dy, dx);
    this.angle = angle;

    // Spirit Soother is a short-mid-range sweeping ghost slash, not a projectile.
    const reach = 235;
    const halfArc = 1.22;
    let diff = angle - this.angle;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;

    if (dist <= reach) {
      hitEnemy = enemy;
      const burstDmg = currentDamage * 5.0;
      burstDamage = enemy.takeDamage(burstDmg, this);

      if (enemy.hp > 0 && enemy.hutaoBloodBlossom && enemy.hutaoBloodBlossom.owner === this) {
        blossomExplosion = enemy.takeDamage(6.0, this);
        enemy.hutaoBloodBlossom = null;
        this.hutaoHitCount = 0;
        effects.push({ type: "hutao_blossom_burst", x: enemy.x, y: enemy.y, life: 44, maxLife: 44, copycat: this.name === "Copycat" });
        spawnText("BLOOD BLOSSOM! -" + blossomExplosion.toFixed(1), enemy.x, enemy.y - 28, this.name === "Copycat" ? "#FF76CE" : "#c0392b");
      }

      // Strong lateral shove in the same direction as the spirit sweep.
      enemy.vx = Math.cos(angle) * 18;
      enemy.vy = Math.sin(angle) * 18;
      enemy.knockbackTimer = 55;
      enemy.stunTimer = Math.max(enemy.stunTimer, 14);
      spawnText("SPIRIT SOOTHER -" + (burstDamage + blossomExplosion).toFixed(1), enemy.x, enemy.y - 45, this.name === "Copycat" ? "#FF76CE" : "#ff7043");
    }
  }

  effects.push({
    type: "funeral_spirit_soother",
    x: oldX, y: oldY,
    angle,
    reach: 270,
    hitTarget: hitEnemy,
    impactX: hitEnemy ? hitEnemy.x : oldX + Math.cos(angle) * 180,
    impactY: hitEnemy ? hitEnemy.y : oldY + Math.sin(angle) * 180,
    life: 78, maxLife: 78,
    copycat: !!this.copycatFuneralSpirit,
  });

  // Movement is resumed by the burstActive state after the 360-degree animation ends.
}

function applyFuneralBloodBlossom(attacker, target, force = false) {
  if (!attacker || (attacker.name !== "Funeral" && !attacker.copycatFuneralActive && !attacker.copycatFuneralSpirit) || attacker.isClone || !target || target.hp <= 0) return;

  if (force) {
    attacker.hutaoHitCount = 0;
  } else {
    attacker.hutaoHitCount = (attacker.hutaoHitCount || 0) + 1;
    if (attacker.hutaoHitCount < 4) return;
    attacker.hutaoHitCount = 0;
  }
  if (force || attacker.hutaoHitCount === 0) {
    target.hutaoBloodBlossom = {
      owner: attacker,
      life: 240,
      tickTimer: 45,
    };
    spawnText("BLOOD BLOSSOM!", target.x, target.y - 30, "#c0392b");
    effects.push({
      type: "hutao_blossom_mark",
      x: target.x,
      y: target.y,
      life: 18,
      maxLife: 18,
      copycat: attacker.name === "Copycat",
    });
  }
}

function applyFuneralBurn(attacker, target) {
  if (!attacker || (attacker.name !== "Funeral" && !attacker.copycatFuneralActive) || !attacker.funeralEActive) return;
  if (!target || target.hp <= 0 || target === attacker) return;

  // Papilio-infused attacks apply a short Pyro burn. Reapplying refreshes it.
  target.funeralBurn = {
    owner: attacker,
    life: 120,
    tickTimer: 20,
    ticksLeft: 6,
  };
  effects.push({
    type: "funeral_burn_apply",
    x: target.x,
    y: target.y,
    life: 20,
    maxLife: 20,
    copycat: attacker.name === "Copycat",
  });
}

function enemyDistanceForKinich(kinich) {
  if (!kinich || !kinich.kinichMarkTarget || kinich.kinichMarkTarget.hp <= 0) return 9999;
  return Math.hypot(kinich.kinichMarkTarget.x - kinich.x, kinich.kinichMarkTarget.y - kinich.y);
}

function spawnText(text, x, y, color) {
  effects.push({ text: text, x: x, y: y, life: 30, color: color });
}

function triggerSwordSaintEffect(attacker, defender) {
  if (attacker.name === "Sword Saint") {
    attacker.atkSpeed += 0.5;
    attacker.rotSpeed = attacker.baseRotSpeed * attacker.atkSpeed;
    spawnText("+0.5 Atk Spd!", attacker.x, attacker.y - 25, "#3498db");
    for (let k = 1; k <= 3; k++) {
      effects.push({
        type: "swordsaint_aftereffect",
        target: defender,
        owner: attacker,
        delay: k * 7,
        damage: 0.5,
        x: defender.x,
        y: defender.y,
        angle: attacker.angle + (k - 2) * 0.4,
        applied: false,
        life: 14,
        maxLife: 14,
      });
    }
  }
}

function drawUnlimitedVoidBG() {
  ctx.save();
  ctx.fillStyle = "#030108";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let cx = canvas.width / 2;
  let cy = canvas.height / 2;
  let time = Date.now() * 0.0025;

  let grad = ctx.createRadialGradient(cx, cy, 15, cx, cy, 240);
  grad.addColorStop(0, "#ffffff");
  grad.addColorStop(0.12, "rgba(162, 155, 254, 0.9)");
  grad.addColorStop(0.35, "rgba(108, 92, 231, 0.7)");
  grad.addColorStop(0.7, "rgba(75, 0, 130, 0.5)");
  grad.addColorStop(1, "rgba(3, 1, 8, 0.95)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
  ctx.lineWidth = 1.5;
  let rays = 18;
  for (let i = 0; i < rays; i++) {
    let ang = (i * Math.PI * 2) / rays + time * 0.3;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(ang) * 20, cy + Math.sin(ang) * 20);
    ctx.lineTo(cx + Math.cos(ang) * 320, cy + Math.sin(ang) * 320);
    ctx.stroke();
  }

  for (let r = 1; r <= 3; r++) {
    let radius = ((time * 50 + r * 65) % 220) + 15;
    let alpha = 1 - radius / 230;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(162, 155, 254, ${alpha * 0.8})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
  ctx.font = "bold 26px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("無 量 空 處", cx, cy + 180);
  ctx.restore();
}

function eraseKillerQueenSHAByAntimagic(antiMagic) {
  if (!antiMagic || antiMagic.name !== "Antimagic" || antiMagic.hp <= 0) return;

  const weaponSegs = antiMagic.getWeaponSegments();
  for (let i = killerQueenSkills.length - 1; i >= 0; i--) {
    const skill = killerQueenSkills[i];
    if (!(skill instanceof SheerHeartAttack)) continue;
    if (!skill.owner || skill.owner.team === antiMagic.team || skill.exploded) continue;

    for (const seg of weaponSegs) {
      const cp = getClosestPointOnSegment(
        { x: skill.x, y: skill.y },
        seg.p1,
        seg.p2
      );
      const dx = skill.x - cp.x;
      const dy = skill.y - cp.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < skill.radius + 5) {
        skill.eraseByAntimagic();
        killerQueenSkills.splice(i, 1);
        break;
      }
    }
  }
}

function checkPhysicsAndHits() {
  // Anti-Magic's sword can directly hit and dispel an active SHA.
  for (const ball of balls) {
    if (ball.name === "Antimagic" && ball.hp > 0) {
      eraseKillerQueenSHAByAntimagic(ball);
    }
  }

  for (let i = 0; i < balls.length; i++) {
    let A = balls[i];
    for (let j = i + 1; j < balls.length; j++) {
      let B = balls[j];
      let dx = B.x - A.x, dy = B.y - A.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (A.isAdeptusLotus || B.isAdeptusLotus) continue;
      let isEnemy = A.team !== B.team;
      // Retaliator adalah counter-attack murni: tidak pernah bisa parry
      // dan tidak pernah bisa diparry, baik saat ult maupun normal.
      let aCanParry = A.name !== "Retaliator";
      let bCanParry = B.name !== "Retaliator";

      if (isEnemy && A.weapons > 0 && B.weapons > 0 && A.parryCooldown === 0 && B.parryCooldown === 0 && aCanParry && bCanParry) {
        let parryHit = false;
        for (let sa of A.getWeaponSegments()) {
          for (let sb of B.getWeaponSegments()) {
            if (intersect(sa.p1, sa.p2, sb.p1, sb.p2)) {
              parryHit = true;
              break;
            }
          }
          if (parryHit) break;
        }
        if (parryHit) {
          A.rotSpeed *= -1;
          B.rotSpeed *= -1;
          let nx = dx / (dist || 1), ny = dy / (dist || 1);
          A.vx = -nx * 5;
          A.vy = -ny * 5;
          B.vx = nx * 5;
          B.vy = ny * 5;
          A.parryCooldown = 18;
          B.parryCooldown = 18;
          spawnText("PARRY!", (A.x + B.x) / 2, (A.y + B.y) / 2, "#f1c40f");
          continue;
        }
      }

      if (isEnemy) {
        if (A.weapons > 0 && B.iFrames === 0 && A.name !== "Retaliator" && A.name !== "Illustrade") {
          for (let sa of A.getWeaponSegments()) {
            let cp = getClosestPointOnSegment({ x: B.x, y: B.y }, sa.p1, sa.p2);
            let cDx = B.x - cp.x, cDy = B.y - cp.y, cDist = Math.sqrt(cDx * cDx + cDy * cDy);
            if (cDist < B.radius) {
              let overlap = B.radius - cDist;
              let nx = cDist > 0 ? cDx / cDist : 1, ny = cDist > 0 ? cDy / cDist : 0;
              B.x += nx * overlap;
              B.y += ny * overlap;
              B.vx *= -1;
              B.vy *= -1;
              A.rotSpeed *= -1;
              let finalDmg = B.takeDamage(A.damage, A);
              B.iFrames = 60;
              if (A.name === "Yaksha" && finalDmg > 0) {
                A.yakshaPassiveStacks = Math.min(5, A.yakshaPassiveStacks + 1);
                A.yakshaPassiveTimer = 180;
                spawnText("YAKSHA +1", A.x, A.y - 24, "#73E6D2");
              }
              if ((A.name === "Funeral" || A.copycatFuneralActive) && finalDmg > 0) {
                applyFuneralBloodBlossom(A, B);
                applyFuneralBurn(A, B);
              }
              if (A.name === "Tyrant") {
                openRandomTyrantPortal(A);
                tyrantRegisterHit(A, B, finalDmg, false);
              }
              if (A.name === "Juggernaut") {
                A.momentum = Math.min(100, A.momentum + 5);
                A.momentumCombatTimer = 300;
                const kbDx = B.x - A.x, kbDy = B.y - A.y;
                const kbDist = Math.hypot(kbDx, kbDy) || 1;
                const kbForce = A.isUltActive ? 10 : 7;
                B.vx = (kbDx / kbDist) * kbForce;
                B.vy = (kbDy / kbDist) * kbForce;
                B.knockbackTimer = 45;
              }

              if (A.name === "Antimagic") {
                B.ultCharge = Math.max(0, B.ultCharge - 200);
                spawnText("ULT ERASED (-200)!", B.x, B.y - 25, "#e74c3c");
                effects.push({ type: "black_flash", x: B.x, y: B.y, life: 15, maxLife: 15 });
              }

              if (A.name === "Monkey King" && A.staffData) {
                if (A.staffData.scale < 3.0) {
                  A.staffData.scale = Math.min(3.0, A.staffData.scale + 0.12);
                  spawnText("+STAFF GROW!", A.x, A.y - 25, "#f1c40f");
                } else {
                  spawnText("MAX SIZE (3X)!", A.x, A.y - 25, "#f1c40f");
                }
              }

              if (A.name === "Vessel") {
                A.damage += 0.5;
                A.ultCharge = Math.min(A.ultMax, A.ultCharge + 50);
                spawnText("+0.5 DMG | +0.5s ULT", A.x, A.y - 25, "#c0392b");
              }
              if ((A.name === "Sword Saint" || A.name === "Retaliator") && !A.isUltActive) {
                A.ultCharge = Math.min(A.ultMax, A.ultCharge + 100);
                spawnText("+100 Ult!", A.x, A.y - 25, A.name === "Sword Saint" ? "#ffffff" : "#00d2d3");
              }
              triggerSwordSaintEffect(A, B);
              spawnText("-" + finalDmg.toFixed(1), B.x, B.y - 12, "#e74c3c");
              break;
            }
          }
        }

        if (B.weapons > 0 && A.iFrames === 0 && B.name !== "Retaliator" && B.name !== "Illustrade") {
          for (let sb of B.getWeaponSegments()) {
            let cp = getClosestPointOnSegment({ x: A.x, y: A.y }, sb.p1, sb.p2);
            let cDx = A.x - cp.x, cDy = A.y - cp.y, cDist = Math.sqrt(cDx * cDx + cDy * cDy);
            if (cDist < A.radius) {
              let overlap = A.radius - cDist;
              let nx = cDist > 0 ? cDx / cDist : 1, ny = cDist > 0 ? cDy / cDist : 0;
              A.x += nx * overlap;
              A.y += ny * overlap;
              A.vx *= -1;
              A.vy *= -1;
              B.rotSpeed *= -1;
              let finalDmg = A.takeDamage(B.damage, B);
              A.iFrames = 60;
              if (B.name === "Yaksha" && finalDmg > 0) {
                B.yakshaPassiveStacks = Math.min(5, B.yakshaPassiveStacks + 1);
                B.yakshaPassiveTimer = 180;
                spawnText("YAKSHA +1", B.x, B.y - 24, "#73E6D2");
              }
              if ((B.name === "Funeral" || B.copycatFuneralActive) && finalDmg > 0) {
                applyFuneralBloodBlossom(B, A);
                applyFuneralBurn(B, A);
              }
              if (B.name === "Tyrant") {
                openRandomTyrantPortal(B);
                tyrantRegisterHit(B, A, finalDmg, false);
              }
              if (B.name === "Juggernaut") {
                B.momentum = Math.min(100, B.momentum + 5);
                B.momentumCombatTimer = 300;
                const kbDx = A.x - B.x, kbDy = A.y - B.y;
                const kbDist = Math.hypot(kbDx, kbDy) || 1;
                const kbForce = B.isUltActive ? 10 : 7;
                A.vx = (kbDx / kbDist) * kbForce;
                A.vy = (kbDy / kbDist) * kbForce;
                A.knockbackTimer = 45;
              }

              if (B.name === "Antimagic") {
                A.ultCharge = Math.max(0, A.ultCharge - 200);
                spawnText("ULT ERASED (-200)!", A.x, A.y - 25, "#e74c3c");
                effects.push({ type: "black_flash", x: A.x, y: A.y, life: 15, maxLife: 15 });
              }

              if (B.name === "Monkey King" && B.staffData) {
                if (B.staffData.scale < 3.0) {
                  B.staffData.scale = Math.min(3.0, B.staffData.scale + 0.12);
                  spawnText("+STAFF GROW!", B.x, B.y - 25, "#f1c40f");
                } else {
                  spawnText("MAX SIZE (3X)!", B.x, B.y - 25, "#f1c40f");
                }
              }

              if (B.name === "Vessel") {
                B.damage += 0.5;
                B.ultCharge = Math.min(B.ultMax, B.ultCharge + 50);
                spawnText("+0.5 DMG | +0.5s ULT", B.x, B.y - 25, "#c0392b");
              }
              if ((B.name === "Sword Saint" || B.name === "Retaliator") && !B.isUltActive) {
                B.ultCharge = Math.min(B.ultMax, B.ultCharge + 100);
                spawnText("+100 Ult!", B.x, B.y - 25, B.name === "Sword Saint" ? "#ffffff" : "#00d2d3");
              }
              triggerSwordSaintEffect(B, A);
              spawnText("-" + finalDmg.toFixed(1), A.x, A.y - 12, "#e74c3c");
              break;
            }
          }
        }
      }

      if (dist < A.radius + B.radius) {
        let overlap = (A.radius + B.radius - dist) / 2;
        let nx = dx / (dist || 1), ny = dy / (dist || 1);
        A.x -= nx * overlap;
        A.y -= ny * overlap;
        B.x += nx * overlap;
        B.y += ny * overlap;
        let tempVx = A.vx, tempVy = A.vy;
        A.vx = B.vx;
        A.vy = B.vy;
        B.vx = tempVx;
        B.vy = tempVy;

        if (isEnemy) {
          // Killer Queen: touching an enemy plants a bomb stack (max 3).
          if (A.name === "Killer Queen" && A.kqContactCooldown <= 0 && B.hp > 0) {
            if (!B.kqBombStacks) B.kqBombStacks = [];
            if (B.kqBombStacks.length < 3) {
              let bomb = new KillerQueenBomb(A, B);
              B.kqBombStacks.push(bomb);
              A.kqContactCooldown = 30;
              spawnText("BOMB +" + B.kqBombStacks.length, B.x, B.y - 25, "#b85c4a");
            }
          }

          if (B.name === "Killer Queen" && B.kqContactCooldown <= 0 && A.hp > 0) {
            if (!A.kqBombStacks) A.kqBombStacks = [];
            if (A.kqBombStacks.length < 3) {
              let bomb = new KillerQueenBomb(B, A);
              A.kqBombStacks.push(bomb);
              B.kqContactCooldown = 30;
              spawnText("BOMB +" + A.kqBombStacks.length, A.x, A.y - 25, "#b85c4a");
            }
          }

          // Bites the Dust: when KQ's ult is ready, touching an enemy
          // plants one additional BTD bomb. It explodes after 5 seconds.
          if (A.name === "Killer Queen" && A.kqBitesArmed && !A.kqBitesBombActive && B.hp > 0 && !B.isClone) {
            A.kqBitesBombActive = true;
            A.kqBitesArmed = false;
            A.kqBitesTarget = B;
            killerQueenSkills.push(new BitesTheDustBomb(A, B));
          }

          if (B.name === "Killer Queen" && B.kqBitesArmed && !B.kqBitesBombActive && A.hp > 0 && !A.isClone) {
            B.kqBitesBombActive = true;
            B.kqBitesArmed = false;
            B.kqBitesTarget = A;
            killerQueenSkills.push(new BitesTheDustBomb(B, A));
          }

          if (A.weapons === 0 && B.iFrames === 0 && (A.name === "Brawler" || A.name === "Divergent" || A.name === "Infinity" || A.name === "Echoes")) {
            let isBlackFlash = false, hitDmg = A.damage;
            if (A.name === "Divergent") {
              if (Math.random() < A.ultCharge / 100) {
                isBlackFlash = true;
                hitDmg *= 3.5;
              }
              A.damage += 0.5;
            } else if (A.name === "Brawler" && !A.isUltActive) {
              // Brawler tidak boleh menambah damage selama Gravity Orbit aktif.
              // Stack baru kembali berjalan setelah ult selesai.
              A.damage += 1.0;
            }
            let finalDmg = B.takeDamage(hitDmg, A);
            B.iFrames = A.isUltActive ? 12 : 30;
            if (A.name === "Divergent") {
              if (isBlackFlash) {
                spawnText("BLACK FLASH!!", B.x, B.y - 32, "#ff0033");
                spawnText("-" + finalDmg.toFixed(1), B.x, B.y - 12, "#ff0033");
                effects.push({ type: "black_flash", x: (A.x + B.x) / 2, y: (A.y + B.y) / 2, life: 25, maxLife: 25 });
              } else {
                spawnText("-" + finalDmg.toFixed(1), B.x, B.y - 12, "#00a8ff");
                effects.push({ type: "cursed_energy", x: (A.x + B.x) / 2, y: (A.y + B.y) / 2, life: 18, maxLife: 18 });
              }
            } else spawnText("-" + finalDmg.toFixed(1), B.x, B.y - 12, "#e74c3c");
          }

          if (B.weapons === 0 && A.iFrames === 0 && (B.name === "Brawler" || B.name === "Divergent" || B.name === "Infinity" || B.name === "Echoes")) {
            let isBlackFlash = false, hitDmg = B.damage;
            if (B.name === "Divergent") {
              if (Math.random() < B.ultCharge / 100) {
                isBlackFlash = true;
                hitDmg *= 5;
              }
              B.damage += 0.5;
            } else if (B.name === "Brawler" && !B.isUltActive) {
              // Brawler tidak boleh menambah damage selama Gravity Orbit aktif.
              // Stack baru kembali berjalan setelah ult selesai.
              B.damage += 1.0;
            }
            let finalDmg = A.takeDamage(hitDmg, B);
            A.iFrames = B.isUltActive ? 12 : 30;
            if (B.name === "Divergent") {
              if (isBlackFlash) {
                spawnText("BLACK FLASH!!", A.x, A.y - 32, "#ff0033");
                spawnText("-" + finalDmg.toFixed(1), A.x, A.y - 12, "#ff0033");
                effects.push({ type: "black_flash", x: (A.x + B.x) / 2, y: (A.y + B.y) / 2, life: 25, maxLife: 25 });
              } else {
                spawnText("-" + finalDmg.toFixed(1), A.x, A.y - 12, "#00a8ff");
                effects.push({ type: "cursed_energy", x: (A.x + B.x) / 2, y: (A.y + B.y) / 2, life: 18, maxLife: 18 });
              }
            } else spawnText("-" + finalDmg.toFixed(1), A.x, A.y - 12, "#e74c3c");
          }
        }
      }
    }
  }
}

function ccw(A, B, C) {
  return (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
}
function intersect(p1, q1, p2, q2) {
  return ccw(p1, p2, q2) !== ccw(q1, p2, q2) && ccw(p1, q1, p2) !== ccw(p1, q1, q2);
}
function dist2(v, w) {
  return (v.x - w.x) ** 2 + (v.y - w.y) ** 2;
}
function getClosestPointOnSegment(p, v, w) {
  let l2 = dist2(v, w);
  if (l2 === 0) return { x: v.x, y: v.y };
  let t = Math.max(0, Math.min(1, ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2));
  return { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y) };
}

function drawAdeptusCharacter(owner) {
  // Adeptus keeps the standard arena-ball silhouette.
  // Her character identity comes entirely from a living Cryo aura around the orb.
  const r = owner.radius;
  const t = Date.now() * 0.001;
  const charge1 = owner.adeptusState === "charge1";
  const charge2 = owner.adeptusState === "charge2";
  const lotus = !!(owner.adeptusLotus && owner.adeptusLotus.life > 0);
  const ult = !!owner.isUltActive;
  const intensity = ult ? 1.35 : charge2 ? 1.20 : charge1 ? 1.08 : lotus ? 1.0 : 0.82;

  ctx.save();
  ctx.translate(Math.round(owner.x), Math.round(owner.y));
  ctx.globalCompositeOperation = "lighter";
  ctx.imageSmoothingEnabled = false;

  // 1) Soft Cryo aura: the main visual signature.
  const breathe = 1 + Math.sin(t * 3.2) * 0.055;
  const haloR = (r + 10 + Math.sin(t * 2.2) * 2) * intensity;
  const grad = ctx.createRadialGradient(0, 0, r * 0.7, 0, 0, haloR * 1.55);
  grad.addColorStop(0, "rgba(231,250,255,0.34)");
  grad.addColorStop(0.30, "rgba(174,228,255,0.22)");
  grad.addColorStop(0.68, "rgba(124,203,255,0.10)");
  grad.addColorStop(1, "rgba(124,203,255,0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, haloR * 1.55, 0, Math.PI * 2);
  ctx.fill();

  // 2) Thin rotating Cryo ring, like a signature aura rather than a character body.
  ctx.save();
  ctx.rotate(t * (ult ? 1.9 : 0.8));
  ctx.strokeStyle = `rgba(191,234,255,${0.42 * intensity})`;
  ctx.shadowColor = "#7CCBFF";
  ctx.shadowBlur = 10;
  ctx.lineWidth = charge2 || ult ? 2.2 : 1.5;
  ctx.setLineDash(charge2 || ult ? [8, 5] : [5, 7]);
  ctx.beginPath();
  ctx.arc(0, 0, haloR * 0.98, -0.25, Math.PI * 1.55);
  ctx.stroke();
  ctx.restore();

  // 3) Six small ice shards orbit the white orb.
  const shardCount = ult ? 10 : charge2 ? 8 : 6;
  const orbit = (r + 8 + Math.sin(t * 2.6) * 2) * (charge1 ? 1.06 : 1);
  for (let i = 0; i < shardCount; i++) {
    const a = t * (i % 2 ? -0.72 : 0.55) + i * Math.PI * 2 / shardCount;
    const rr = orbit + Math.sin(t * 3 + i * 1.7) * 2.5;
    const px = Math.cos(a) * rr;
    const py = Math.sin(a) * rr;
    const rot = a + Math.PI / 2;
    const sz = ult ? 5 : charge2 ? 4.5 : 3.7;

    ctx.save();
    ctx.translate(Math.round(px), Math.round(py));
    ctx.rotate(rot);
    ctx.shadowColor = "#7CCBFF";
    ctx.shadowBlur = ult || charge2 ? 12 : 7;
    ctx.fillStyle = i % 2 ? "#BFEAFF" : "#E8FAFF";
    ctx.strokeStyle = "#6EBEFF";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -sz);
    ctx.lineTo(sz * 0.55, 0);
    ctx.lineTo(0, sz * 0.95);
    ctx.lineTo(-sz * 0.55, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  // 4) Tiny snow motes continuously drift around Adeptus.
  const moteCount = ult ? 16 : 9;
  for (let i = 0; i < moteCount; i++) {
    const a = t * (0.18 + (i % 3) * 0.06) + i * 2.399;
    const rr = r + 13 + ((i * 11) % 13);
    const px = Math.cos(a) * rr;
    const py = Math.sin(a * 1.13) * rr * 0.72;
    const s = (i % 3 === 0 ? 2.2 : 1.35) * (ult ? 1.15 : 1);
    ctx.fillStyle = i % 2 ? "rgba(191,234,255,.90)" : "rgba(232,250,255,.82)";
    ctx.fillRect(Math.round(px), Math.round(py), Math.ceil(s), Math.ceil(s));
  }

  // 5) Charge/ultimate focus: extra crystalline halo around the orb.
  if (charge1 || charge2 || ult) {
    ctx.save();
    ctx.rotate(-t * (charge2 || ult ? 1.4 : 0.75));
    ctx.strokeStyle = charge2 || ult ? "rgba(232,250,255,.88)" : "rgba(174,228,255,.68)";
    ctx.shadowColor = "#7CCBFF";
    ctx.shadowBlur = charge2 || ult ? 17 : 10;
    ctx.lineWidth = charge2 || ult ? 2 : 1.4;
    ctx.beginPath();
    ctx.arc(0, 0, (r + 6) * breathe, 0, Math.PI * 2);
    ctx.stroke();

    if (charge2 || ult) {
      // Four larger crystal petals make Stage 2 / Celestial Shower instantly readable.
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2 + t * 0.55;
        const px = Math.cos(a) * (r + 13);
        const py = Math.sin(a) * (r + 13);
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(a + Math.PI / 2);
        ctx.fillStyle = "rgba(191,234,255,.92)";
        ctx.beginPath();
        ctx.moveTo(0, -6);
        ctx.lineTo(3, 0);
        ctx.lineTo(0, 6);
        ctx.lineTo(-3, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }
    ctx.restore();
  }

  // 6) A small Cryo insignia glows just outside the top of the orb.
  // Still no body/face/accessories: only an elemental symbol.
  const iconA = -Math.PI / 2 + Math.sin(t * 2.0) * 0.04;
  const ix = Math.cos(iconA) * (r + 8);
  const iy = Math.sin(iconA) * (r + 8);
  ctx.save();
  ctx.translate(ix, iy);
  ctx.rotate(iconA + Math.PI / 2);
  ctx.fillStyle = "rgba(232,250,255,.92)";
  ctx.strokeStyle = "#7CCBFF";
  ctx.shadowColor = "#7CCBFF";
  ctx.shadowBlur = 8;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, -4);
  ctx.lineTo(3.5, 0);
  ctx.lineTo(0, 4);
  ctx.lineTo(-3.5, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}

function drawAdeptusBow(x, y, angle, scale = 1) {
  ctx.save();
  ctx.translate(Math.round(x), Math.round(y));
  ctx.rotate(angle);
  ctx.scale(scale, scale);
  ctx.imageSmoothingEnabled = false;

  const active = scale > 1.02;
  ctx.globalCompositeOperation = "lighter";
  ctx.shadowColor = "#7CCBFF";
  ctx.shadowBlur = active ? 18 : 10;

  // Crystal bow limbs.
  ctx.strokeStyle = "#4E8FB7";
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(8, 0, 30, -1.20, 1.20);
  ctx.stroke();
  ctx.strokeStyle = active ? "#DDF8FF" : "#AEE4FF";
  ctx.lineWidth = 3.2;
  ctx.beginPath();
  ctx.arc(8, 0, 30, -1.20, 1.20);
  ctx.stroke();

  // Bowstring and arrow line.
  ctx.strokeStyle = "rgba(232,250,255,.95)";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(15, -28); ctx.lineTo(15, 28); ctx.stroke();
  ctx.strokeStyle = "#C8F0FF";
  ctx.lineWidth = active ? 3 : 2;
  ctx.beginPath(); ctx.moveTo(-3, 0); ctx.lineTo(40, 0); ctx.stroke();

  // Pixel crystal grip / notch.
  ctx.fillStyle = "#7CCBFF";
  ctx.fillRect(8, -5, 7, 10);
  ctx.fillStyle = "#F4FCFF";
  ctx.fillRect(10, -2, 3, 4);

  if (active) {
    ctx.strokeStyle = "rgba(191,234,255,.55)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(22, -8); ctx.lineTo(30, 0); ctx.lineTo(22, 8); ctx.stroke();
  }
  ctx.restore();
}

function drawKinichAjaw(x, y, scale = 1, rotation = 0) {
  ctx.save();
  ctx.translate(Math.round(x), Math.round(y));
  ctx.rotate(rotation * 0.12);
  ctx.scale(scale, scale);
  ctx.imageSmoothingEnabled = false;
  ctx.globalCompositeOperation = "lighter";
  ctx.shadowColor = "#18C77A";
  ctx.shadowBlur = 14;

  // Small blocky green spirit silhouette with warm orange crest/tail accents.
  ctx.fillStyle = "#0E5A4A";
  ctx.fillRect(-15, -8, 30, 19);
  ctx.fillStyle = "#18C77A";
  ctx.fillRect(-12, -11, 24, 16);
  ctx.fillRect(-18, -3, 8, 10);
  ctx.fillRect(10, -3, 8, 10);

  // Head + muzzle.
  ctx.fillStyle = "#27E79A";
  ctx.fillRect(-10, -20, 20, 12);
  ctx.fillRect(3, -14, 12, 7);
  ctx.fillStyle = "#073B35";
  ctx.fillRect(2, -17, 3, 4);
  ctx.fillRect(10, -17, 3, 4);

  // Orange fins/horns.
  ctx.fillStyle = "#FF9B2F";
  ctx.fillRect(-13, -25, 5, 8);
  ctx.fillRect(8, -25, 5, 8);
  ctx.fillRect(14, -6, 9, 4);
  ctx.fillRect(-22, 5, 8, 4);

  // Pixel tail.
  ctx.fillStyle = "#0AAE91";
  ctx.fillRect(-12, 9, 7, 8);
  ctx.fillRect(-19, 14, 7, 5);
  ctx.fillStyle = "#FF9B2F";
  ctx.fillRect(-25, 17, 6, 4);

  ctx.restore();
}

function drawYakshaAura(owner) {
  const t = Date.now() * 0.001;
  const r = owner.radius;
  const ultCharge = owner.isUltActive && owner.yakshaUltPhase === "charge";
  const ult = owner.isUltActive && owner.yakshaUltPhase === "active";
  const dash = owner.yakshaDashState !== "idle" && !ult;
  const plunge = owner.yakshaPlungeState !== "idle";

  // Xiao-inspired, muted Anemo jade palette. Deliberately avoids neon/glow.
  const jade = "#427973";
  const jadeDark = "#35424C";
  const slate = "#4A5969";
  const jadeDeep = "#315B58";

  ctx.save();
  ctx.translate(Math.round(owner.x), Math.round(owner.y));
  ctx.globalCompositeOperation = "source-over";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // A restrained, layered Anemo ring silhouette.
  const ringR = r + (ult ? 18 : dash ? 14 : 10);
  const ringAlpha = ult ? 0.92 : ultCharge ? 0.85 : dash ? 0.78 : 0.62;

  ctx.strokeStyle = `rgba(66,121,115,${ringAlpha})`;
  ctx.lineWidth = ult ? 4.6 : dash ? 4 : 3;
  ctx.beginPath();
  ctx.arc(0, 0, ringR, t * 0.8, t * 0.8 + Math.PI * 1.12);
  ctx.stroke();

  ctx.strokeStyle = `rgba(53,66,76,${Math.min(0.95, ringAlpha + 0.05)})`;
  ctx.lineWidth = ult ? 3.4 : 2.6;
  ctx.beginPath();
  ctx.arc(0, 0, ringR - 6, -t * 0.95 + 1.5, -t * 0.95 + 1.5 + Math.PI * 1.02);
  ctx.stroke();

  ctx.strokeStyle = `rgba(74,89,105,${0.56 + (ult ? 0.18 : 0)})`;
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.arc(0, 0, ringR + 7, t * -0.58 + 0.3, t * -0.58 + 2.0);
  ctx.stroke();

  // Xiao-like horn arcs / Yaksha silhouette.
  const hornY = -r * 0.72;
  const hornSpread = r * 0.46;
  ctx.strokeStyle = jadeDark;
  ctx.lineWidth = ult ? 3.6 : 2.7;
  ctx.beginPath();
  ctx.arc(-hornSpread, hornY, r * 0.34, Math.PI * 0.92, Math.PI * 1.63);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(hornSpread, hornY, r * 0.34, -0.64, 0.08);
  ctx.stroke();

  // Six broad, rotating Anemo ribbons rather than glowing particles.
  const ribbonCount = ult ? 8 : dash ? 6 : 5;
  for (let i = 0; i < ribbonCount; i++) {
    const a = t * (i % 2 ? -0.28 : 0.23) + i * Math.PI * 2 / ribbonCount;
    const inner = r + (ult ? 5 : 2);
    const outer = r + (ult ? 38 : dash ? 30 : 24);
    const wobble = Math.sin(t * 2.2 + i) * 5;
    ctx.strokeStyle = i % 3 === 0 ? jadeDark : (i % 2 ? jade : slate);
    ctx.globalAlpha = ult ? 0.88 : 0.68;
    ctx.lineWidth = i % 3 === 0 ? 3.8 : 2.4;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
    ctx.quadraticCurveTo(
      Math.cos(a + 0.22) * (inner + 10),
      Math.sin(a + 0.22) * (inner + 10) + wobble,
      Math.cos(a + 0.46) * outer,
      Math.sin(a + 0.46) * outer + wobble
    );
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Small matte jade shards, not luminous diamonds.
  const shardCount = ult ? 8 : dash ? 6 : 4;
  for (let i = 0; i < shardCount; i++) {
    const a = t * (i % 2 ? -0.35 : 0.27) + i * Math.PI * 2 / shardCount;
    const rr = r + (ult ? 32 : dash ? 25 : 19) + Math.sin(t * 2 + i) * 2;
    const px = Math.cos(a) * rr;
    const py = Math.sin(a) * rr;
    const size = ult ? 4.2 : 3.2;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(a + Math.PI / 2);
    ctx.fillStyle = i % 2 ? jade : slate;
    ctx.beginPath();
    ctx.moveTo(0, -size * 2.1);
    ctx.lineTo(size, 0);
    ctx.lineTo(0, size * 1.5);
    ctx.lineTo(-size, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Transformation phase: dense Papilio-like circular framing, but matte jade/Anemo.
  if (ultCharge) {
    for (let ring = 0; ring < 3; ring++) {
      const rr = r + 11 + ring * 11 + Math.sin(t * 3.6 + ring) * 1.5;
      ctx.strokeStyle = ring === 1 ? slate : jade;
      ctx.globalAlpha = 0.82 - ring * 0.1;
      ctx.lineWidth = ring === 0 ? 5 : 2.6;
      ctx.beginPath();
      ctx.arc(0, 0, rr, -t * (1.1 + ring * 0.14), -t * (1.1 + ring * 0.14) + Math.PI * (1.05 + ring * 0.16));
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Mask framing shards rising from the shoulders.
    for (let i = 0; i < 10; i++) {
      const a = i * Math.PI / 5 + t * 1.05;
      const r1 = r + 8;
      const r2 = r + 30 + Math.sin(t * 3 + i) * 4;
      ctx.strokeStyle = i % 2 ? jade : jadeDark;
      ctx.lineWidth = i % 2 ? 3 : 2;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1);
      ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
      ctx.stroke();
    }
  }

  if (dash) {
    // Funeral-like forward crescent framing the dash direction.
    const dir = owner.angle;
    ctx.strokeStyle = jade;
    ctx.lineWidth = 5.2;
    ctx.beginPath();
    ctx.arc(0, 0, r + 15, dir - 0.92, dir + 0.92);
    ctx.stroke();
    ctx.strokeStyle = slate;
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.arc(0, 0, r + 22, dir - 0.58, dir + 0.58);
    ctx.stroke();
  }

  if (plunge) {
    ctx.strokeStyle = jade;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, r + 18, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();
}

function drawYakshaMask(owner) {
  if (!owner || owner.name !== "Yaksha" || !owner.isUltActive) return;
  const r = owner.radius;
  const c = "#35424C";
  const jade = "#427973";
  const slate = "#4A5969";
  ctx.save();
  ctx.translate(owner.x, owner.y - 1);
  ctx.globalAlpha = 0.94;

  // Compact Yaksha mask silhouette suitable for the ball-based art style.
  ctx.fillStyle = c;
  ctx.beginPath();
  ctx.moveTo(0, -r * 0.78);
  ctx.lineTo(r * 0.46, -r * 0.26);
  ctx.lineTo(r * 0.34, r * 0.56);
  ctx.lineTo(0, r * 0.76);
  ctx.lineTo(-r * 0.34, r * 0.56);
  ctx.lineTo(-r * 0.46, -r * 0.26);
  ctx.closePath();
  ctx.fill();

  // Horns.
  ctx.strokeStyle = jade;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-r * 0.28, -r * 0.5);
  ctx.quadraticCurveTo(-r * 0.58, -r * 0.92, -r * 0.76, -r * 0.45);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(r * 0.28, -r * 0.5);
  ctx.quadraticCurveTo(r * 0.58, -r * 0.92, r * 0.76, -r * 0.45);
  ctx.stroke();

  // Eye slits / mask accents.
  ctx.strokeStyle = slate;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-r * 0.34, -r * 0.1);
  ctx.lineTo(-r * 0.08, -r * 0.02);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(r * 0.34, -r * 0.1);
  ctx.lineTo(r * 0.08, -r * 0.02);
  ctx.stroke();

  // Small jade central mark.
  ctx.fillStyle = jade;
  ctx.beginPath();
  ctx.moveTo(0, -r * 0.2);
  ctx.lineTo(r * 0.08, r * 0.06);
  ctx.lineTo(0, r * 0.2);
  ctx.lineTo(-r * 0.08, r * 0.06);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

function drawPrimordialJade(seg, owner) {
  const dx = seg.p2.x - seg.p1.x, dy = seg.p2.y - seg.p1.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const px = -uy, py = ux;
  const scale = owner && owner.isUltActive ? 1.28 : 1;

  const p1 = { x: seg.p1.x - ux * 3, y: seg.p1.y - uy * 3 };
  const p2 = { x: seg.p2.x + ux * 8 * scale, y: seg.p2.y + uy * 8 * scale };
  const gripEnd = { x: p2.x - ux * 28 * scale, y: p2.y - uy * 28 * scale };
  const collar = { x: p2.x - ux * 28 * scale, y: p2.y - uy * 28 * scale };
  const bladeBase = { x: p2.x - ux * 23 * scale, y: p2.y - uy * 23 * scale };
  const bladeRoot = { x: p2.x - ux * 9 * scale, y: p2.y - uy * 9 * scale };
  const tip = { x: p2.x + ux * 17 * scale, y: p2.y + uy * 17 * scale };

  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.lineCap = 'round';
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  // Dark jade handle with a muted central ridge.
  ctx.strokeStyle = '#18352D';
  ctx.lineWidth = 10;
  ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(gripEnd.x, gripEnd.y); ctx.stroke();
  ctx.strokeStyle = '#4E7A63';
  ctx.lineWidth = 6.5;
  ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(gripEnd.x, gripEnd.y); ctx.stroke();
  ctx.strokeStyle = '#78945E';
  ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(gripEnd.x, gripEnd.y); ctx.stroke();

  // Short gold wrapping bands on the handle.
  for (const d of [10, 20]) {
    const c = { x: p1.x + ux * d, y: p1.y + uy * d };
    ctx.strokeStyle = '#3F8E85';
    ctx.lineWidth = 2.3;
    ctx.beginPath();
    ctx.moveTo(c.x - px * 5, c.y - py * 5);
    ctx.lineTo(c.x + px * 5, c.y + py * 5);
    ctx.stroke();
  }

  // Gold collar / guard.
  ctx.strokeStyle = '#275C56';
  ctx.lineWidth = 5.5;
  ctx.beginPath();
  ctx.moveTo(collar.x - px * 7 * scale, collar.y - py * 7 * scale);
  ctx.lineTo(collar.x + px * 7 * scale, collar.y + py * 7 * scale);
  ctx.stroke();
  ctx.strokeStyle = '#5FB3A8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(collar.x - px * 7 * scale, collar.y - py * 7 * scale);
  ctx.lineTo(collar.x + px * 7 * scale, collar.y + py * 7 * scale);
  ctx.stroke();

  // Ornate jade spearhead: tapered core + two swept jade fins.
  const fin = 13 * scale;
  const rootHalf = 5 * scale;
  const root = { x: bladeRoot.x, y: bladeRoot.y };
  const base = { x: bladeBase.x, y: bladeBase.y };

  ctx.fillStyle = owner && owner.isUltActive ? '#597B55' : '#4E7A63';
  ctx.beginPath();
  ctx.moveTo(tip.x, tip.y);
  ctx.quadraticCurveTo(root.x + px * fin, root.y + py * fin, base.x + px * rootHalf, base.y + py * rootHalf);
  ctx.quadraticCurveTo(base.x - ux * 2 * scale, base.y - uy * 2 * scale, root.x + ux * 3 * scale, root.y + uy * 3 * scale);
  ctx.quadraticCurveTo(root.x - px * fin, root.y - py * fin, base.x - px * rootHalf, base.y - py * rootHalf);
  ctx.quadraticCurveTo(root.x + ux * 3 * scale, root.y + uy * 3 * scale, tip.x, tip.y);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#254A3D';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Gold spine and central inset.
  ctx.strokeStyle = '#6BC1B4';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(base.x + ux * 2 * scale, base.y + uy * 2 * scale);
  ctx.lineTo(tip.x - ux * 5 * scale, tip.y - uy * 5 * scale);
  ctx.stroke();

  ctx.strokeStyle = '#A7C08A';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(root.x + px * 4 * scale, root.y + py * 4 * scale);
  ctx.lineTo(tip.x - ux * 7 * scale + px * 2 * scale, tip.y - uy * 7 * scale + py * 2 * scale);
  ctx.stroke();

  // Small gold setting at the spear root.
  ctx.fillStyle = '#5FB3A8';
  ctx.beginPath();
  ctx.moveTo(collar.x + ux * 5 * scale, collar.y + uy * 5 * scale);
  ctx.lineTo(collar.x + ux * 9 * scale + px * 4 * scale, collar.y + uy * 9 * scale + py * 4 * scale);
  ctx.lineTo(collar.x + ux * 13 * scale, collar.y + uy * 13 * scale);
  ctx.lineTo(collar.x + ux * 9 * scale - px * 4 * scale, collar.y + uy * 9 * scale - py * 4 * scale);
  ctx.closePath(); ctx.fill();

  ctx.restore();
}

function drawKinichClaymore(seg,owner){
  const dx=seg.p2.x-seg.p1.x,dy=seg.p2.y-seg.p1.y,len=Math.hypot(dx,dy)||1;
  const ux=dx/len,uy=dy/len,px=-uy,py=ux;
  const handleEnd={x:seg.p1.x+ux*18,y:seg.p1.y+uy*18};
  const guardBase={x:seg.p2.x-ux*30,y:seg.p2.y-uy*30};
  const tip={x:seg.p2.x+ux*18,y:seg.p2.y+uy*18};
  ctx.save();
  ctx.imageSmoothingEnabled=false;

  // Handle / grip.
  ctx.strokeStyle="#3D2B26";ctx.lineWidth=7;ctx.lineCap="square";
  ctx.beginPath();ctx.moveTo(seg.p1.x,seg.p1.y);ctx.lineTo(handleEnd.x,handleEnd.y);ctx.stroke();
  ctx.strokeStyle="#8BAE66";ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(seg.p1.x,seg.p1.y);ctx.lineTo(handleEnd.x,handleEnd.y);ctx.stroke();

  // Broad angular claymore silhouette inspired by Fang of the Mountain King.
  const back=guardBase;
  const b1={x:back.x+px*15,y:back.y+py*15};
  const b2={x:back.x-px*15,y:back.y-py*15};
  const shoulder={x:seg.p2.x-ux*8,y:seg.p2.y-uy*8};
  const s1={x:shoulder.x+px*12,y:shoulder.y+py*12};
  const s2={x:shoulder.x-px*12,y:shoulder.y-py*12};

  ctx.fillStyle="#203A34";
  ctx.beginPath();ctx.moveTo(b1.x,b1.y);ctx.lineTo(s1.x,s1.y);ctx.lineTo(tip.x,tip.y);ctx.lineTo(s2.x,s2.y);ctx.lineTo(b2.x,b2.y);ctx.closePath();ctx.fill();

  ctx.fillStyle="#52745A";
  ctx.beginPath();
  ctx.moveTo(b1.x+ux*2,b1.y+uy*2);
  ctx.lineTo(s1.x-ux*2,s1.y-uy*2);
  ctx.lineTo(tip.x-ux*6,tip.y-uy*6);
  ctx.lineTo(s2.x-ux*2,s2.y-uy*2);
  ctx.lineTo(b2.x+ux*2,b2.y+uy*2);
  ctx.closePath();ctx.fill();

  // Pale inner blade plane.
  const ib1={x:back.x+px*7+ux*5,y:back.y+py*7+uy*5};
  const ib2={x:back.x-px*7+ux*5,y:back.y-py*7+uy*5};
  ctx.fillStyle="#8BAE66";
  ctx.beginPath();ctx.moveTo(ib1.x,ib1.y);ctx.lineTo(s1.x-ux*6,s1.y-uy*6);ctx.lineTo(tip.x-ux*8,tip.y-uy*8);ctx.lineTo(s2.x-ux*6,s2.y-uy*6);ctx.lineTo(ib2.x,ib2.y);ctx.closePath();ctx.fill();

  // Geometric gold motif near the lower blade.
  const mx=back.x+ux*8,my=back.y+uy*8;
  ctx.fillStyle="#C49A4A";ctx.fillRect(Math.round(mx+px*6-3),Math.round(my+py*6-3),6,6);
  ctx.fillRect(Math.round(mx-px*6-2),Math.round(my-py*6-2),4,4);
  ctx.fillRect(Math.round(mx+ux*8-2),Math.round(my+uy*8-2),4,4);

  // Small pale-green square motif closer to the spine.
  ctx.fillStyle="#D4C98E";
  ctx.fillRect(Math.round(back.x+ux*14-3),Math.round(back.y+uy*14-3),6,6);
  ctx.fillStyle="#203A34";
  ctx.fillRect(Math.round(back.x+ux*14-1),Math.round(back.y+uy*14-1),2,2);

  // Angular guard / ornament.
  ctx.fillStyle="#203A34";
  ctx.beginPath();ctx.moveTo(back.x+px*17,back.y+py*17);ctx.lineTo(back.x+ux*11+px*7,back.y+uy*11+py*7);ctx.lineTo(back.x+ux*11-px*7,back.y+uy*11-py*7);ctx.lineTo(back.x-px*17,back.y-py*17);ctx.closePath();ctx.fill();
  ctx.fillStyle="#52745A";
  ctx.fillRect(Math.round(back.x-ux*2-3),Math.round(back.y-uy*2-4),6,8);
  ctx.restore();
}

function drawKinichAjawWeapon(x,y,angle,scale=1){
  // Ajaw-form weapon: a compact side-facing pixel beast replacing the claymore.
  ctx.save();
  ctx.translate(Math.round(x),Math.round(y));
  ctx.rotate(angle);
  ctx.scale(scale,scale);
  ctx.imageSmoothingEnabled=false;

  const outline="#203A34", deep="#355B50", body="#5F8B62", light="#8BAE66", gold="#C49A4A", pale="#D4C98E";

  // Tail / rear.
  ctx.fillStyle=outline;
  ctx.fillRect(-34,-5,16,10);ctx.fillRect(-45,-3,12,6);ctx.fillRect(-52,1,9,5);
  ctx.fillStyle=deep;
  ctx.fillRect(-32,-3,14,6);ctx.fillRect(-43,-1,9,4);

  // Main body.
  ctx.fillStyle=outline;ctx.fillRect(-24,-14,34,28);
  ctx.fillStyle=body;ctx.fillRect(-20,-11,28,22);
  ctx.fillStyle=light;ctx.fillRect(-13,-9,16,8);ctx.fillRect(-8,0,16,7);

  // Head / muzzle.
  ctx.fillStyle=outline;ctx.fillRect(5,-16,26,25);ctx.fillRect(23,-8,14,14);
  ctx.fillStyle=body;ctx.fillRect(8,-13,20,18);ctx.fillRect(27,-6,9,9);
  ctx.fillStyle=light;ctx.fillRect(10,-10,12,7);

  // Eyes and angular mouth.
  ctx.fillStyle="#26352E";ctx.fillRect(17,-9,4,4);ctx.fillRect(25,-9,4,4);
  ctx.fillStyle=gold;ctx.fillRect(28,1,7,3);
  ctx.fillStyle=pale;ctx.fillRect(13,5,13,3);

  // Crest / horns.
  ctx.fillStyle=gold;ctx.fillRect(4,-22,7,8);ctx.fillRect(24,-21,7,8);
  ctx.fillStyle=deep;ctx.fillRect(7,-25,3,5);ctx.fillRect(27,-24,3,5);

  // Lower fins / feet.
  ctx.fillStyle=deep;ctx.fillRect(-11,11,8,8);ctx.fillRect(7,11,9,7);
  ctx.fillStyle=gold;ctx.fillRect(13,12,5,4);
  ctx.restore();
}

function drawKinichAjaw(x,y,scale=1,rotation=0){
  ctx.save();
  ctx.translate(Math.round(x),Math.round(y));
  ctx.rotate(rotation*0.10);
  ctx.scale(scale,scale);
  ctx.imageSmoothingEnabled=false;
  const outline="#203A34", deep="#355B50", body="#5F8B62", light="#8BAE66", gold="#C49A4A", pale="#D4C98E";

  // Blocky Ajaw body.
  ctx.fillStyle=outline;ctx.fillRect(-34,-20,58,40);
  ctx.fillRect(-22,-34,40,18);ctx.fillRect(18,-11,24,19);ctx.fillRect(-18,18,28,17);
  ctx.fillStyle=body;ctx.fillRect(-28,-15,48,30);ctx.fillRect(-17,-27,30,16);ctx.fillRect(19,-7,17,11);
  ctx.fillStyle=light;ctx.fillRect(-11,-25,18,10);ctx.fillRect(0,-13,17,9);ctx.fillRect(-7,2,19,9);

  // Face.
  ctx.fillStyle="#26352E";ctx.fillRect(2,-18,5,7);ctx.fillRect(13,-18,5,7);
  ctx.fillStyle=pale;ctx.fillRect(7,-4,15,4);
  ctx.fillStyle=gold;ctx.fillRect(20,-10,10,4);

  // Crest and side fins.
  ctx.fillStyle=gold;ctx.fillRect(-18,-35,7,10);ctx.fillRect(9,-35,7,10);ctx.fillRect(27,-12,10,5);
  ctx.fillStyle=deep;ctx.fillRect(-33,5,12,12);ctx.fillRect(-44,10,11,7);
  ctx.fillStyle=gold;ctx.fillRect(-51,14,8,5);

  // Tail.
  ctx.fillStyle=deep;ctx.fillRect(-13,12,8,9);ctx.fillRect(-21,18,8,7);ctx.fillStyle=gold;ctx.fillRect(-28,22,7,5);
  ctx.restore();
}

function getCharSpecificStats(p) {
  let lines = [];
  lines.push(`HP: ${Math.max(0, Math.floor(p.hp))}/${p.maxHp}`);
  switch (p.name) {
    case "Antimagic":
      lines.push(`Demon Blade Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Anti-Magic: Sword Dispel`);
      lines.push(`Status: ${p.isUltActive ? "BLACK FORM" : "Ready"}`);
      break;
    case "Killer Queen":
      lines.push(`Bomb Dmg: ${p.kqBombDamage.toFixed(1)}`);
      let kqTarget = balls.find((b) => b.team !== p.team && b.hp > 0 && !b.isClone);
      lines.push(`Bomb Stacks: ${kqTarget ? kqTarget.kqBombStacks.length : 0}/3`);
      lines.push(`Sheer Heart Attack: ${p.kqSheerHeartAttackActive ? "ACTIVE" : p.kqSheerHeartAttackCD > 0 ? Math.ceil(p.kqSheerHeartAttackCD / 60) + "s" : "READY"}`);
      break;
    case "Copycat":
      lines.push(`Katana Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Passive Copy: ${Math.max(0, 5.0 - p.copycatPassiveTimer / 60).toFixed(1)}s`);
      lines.push(`Status: ${p.isUltActive ? "SWORD DOMAIN" : "Ready"}`);
      break;
    case "Echoes":
      let myTrapCount = soundTraps.filter((t) => t.owner === p).length;
      lines.push(`Body Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Active Traps: ${myTrapCount}/4`);
      lines.push(`Next Trap: ${Math.max(0, Math.ceil((120 - p.trapTimer) / 60)).toFixed(1)}s`);
      break;
    case "Infinity":
      lines.push(`Mugen: ${p.mugenCD <= 0 ? "READY" : Math.ceil(p.mugenCD / 60) + "s"}`);
      if (p.isUltActive) lines.push(`Unlimited Void: ACTIVE`);
      else lines.push(`Blue: ${Math.ceil(p.blueCD / 60)}s | Red: ${Math.ceil(p.redCD / 60)}s | Purp: ${Math.ceil(p.purpleCD / 60)}s`);
      break;
    case "Kinich":
      lines.push(`Claymore Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Skill: ${p.kinichSkillCD <= 0 ? "READY" : (p.kinichSkillCD / 60).toFixed(1) + "s"}`);
      lines.push(`Field: ${p.kinichField ? Math.ceil(p.kinichField.life / 60) + "s" : "-"}`);
      break;
    case "Divergent":
      lines.push(`Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`BF Chance: ${Math.floor(p.ultCharge)}%`);
      break;
    case "Sword Saint":
      lines.push(`Atk Spd: ${p.atkSpeed.toFixed(1)}x`);
      lines.push(`Dmg: ${p.damage.toFixed(2)}`);
      break;
    case "Stasis":
      let effSpd = p.isUltActive ? p.atkSpeed * 3 : p.atkSpeed;
      lines.push(`Atk Spd: ${effSpd.toFixed(2)}x`);
      lines.push(`Rate: ${(60 / Math.max(4, 60 / effSpd)).toFixed(1)} /s`);
      break;
    case "Retaliator":
      lines.push(`Retaliate Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Status: ${p.combatTimer > 0 ? "In Combat" : "Retaliating"}`);
      break;
    case "Vessel":
      lines.push(`Dmg: ${p.damage.toFixed(1)} (+${(p.damage - 1.0).toFixed(1)})`);
      lines.push(`Refusal: ${p.ultCharge >= p.ultMax ? "READY" : "Charging"}`);
      break;
    case "Death Note":
      if (p.hasBeenHit) {
        lines.push(`Target: ${p.targetToKill ? p.targetToKill.name : "Target"}`);
        lines.push(`Death In: ${Math.ceil(p.deathNoteTimer / 60)}s`);
      } else lines.push(`Status: Waiting Hit`);
      break;
    case "Monkey King":
      lines.push(`Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Staff Size: ${p.staffData ? p.staffData.scale.toFixed(2) : "1.00"}x / 3.00x`);
      lines.push(`Clones Active: ${balls.filter((b) => b.team === p.team && b.isClone).length}`);
      break;
    case "Brawler":
      lines.push(`Hit Stack Dmg: ${p.damage.toFixed(1)}`);
      break;
    case "Illustrade":
      lines.push(`Ink Dmg: ${p.damage.toFixed(2)}`);
      if (p.isUltActive) lines.push(`Runic Storm: ${p.floatingChars.length} Runes`);
      break;
    case "Juggernaut":
      lines.push(`Hammer Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Momentum: ${p.momentum.toFixed(0)}%`);
      lines.push(`Combat: ${p.momentumCombatTimer > 0 ? "Active" : "Draining"}`);
      lines.push(`Damage Reduction: ${(Math.min(50, p.momentum * 0.5)).toFixed(0)}%`);
      lines.push(`Form: ${p.isUltActive ? "TITAN FORM" : "Normal"}`);
      break;
    case "Bloodchain":
      lines.push(`Base Dmg: ${p.damage.toFixed(1)}${p.bloodchainBankai ? "" : ""}`);
      lines.push(`Getsuga: ${p.bloodchainGJCD > 0 ? (p.bloodchainGJCD / 60).toFixed(1) + "s" : "READY"}`);
      lines.push(`Form: ${p.bloodchainBankai ? "BANKAI" : p.bloodchainTransformTimer > 0 ? "TRANSFORMING" : "TRUE SHIKAI"}`);
      break;
    case "Tyrant":
      lines.push(`Sword Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Portals: ${(p.tyrantPortalSlots ? p.tyrantPortalSlots.size : 0)}`);
      break;
    case "Valkyrie":
      lines.push(`Sword Dmg: ${p.damage.toFixed(1)}`);
      if (p.isUltActive) lines.push(`Valhalla Regen: ACTIVE`);
      break;
    case "Funeral":
      lines.push(`Homa Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Permanent Papilio: +${p.funeralPermanentBonusDamage.toFixed(2)} DMG`);
      lines.push(`Paramita: ${p.hp < 25 ? "CRITICAL" : p.hp <= 50 ? "ACTIVE" : "NORMAL"}`);
      lines.push(`Charge Attack: ${p.funeralChargeAttackCD > 0 ? (p.funeralChargeAttackCD / 60).toFixed(1) + "s" : "READY"}`);
      break;
    case "Yaksha":
      lines.push(`Damage: ${p.damage.toFixed(1)}`);
      lines.push(`Stacks: ${p.yakshaPassiveStacks}/5`);
      if (!p.isUltActive) {
        lines.push(`Skill: ${p.yakshaSkillCD <= 0 ? "READY" : (p.yakshaSkillCD / 60).toFixed(1) + "s"}`);
      } else {
        lines.push(`Plunge: ${p.yakshaPlungeCD <= 0 ? "READY" : (p.yakshaPlungeCD / 60).toFixed(1) + "s"}`);
        lines.push(`Duration: ${Math.ceil(p.yakshaUltTimer / 60)}s`);
      }
      break;
    case "Adeptus":
      lines.push(`Bow Dmg: ${p.damage.toFixed(1)}`);
      lines.push(`Undivided Heart: ${p.adeptusHeartStacks}/3`);
      lines.push(`Ice Lotus: ${p.adeptusSkillCD <= 0 ? "READY" : (p.adeptusSkillCD / 60).toFixed(1) + "s"}`);
      break;
    default:
      lines.push(`Dmg: ${p.damage.toFixed(2)}`);
  }
  if (p.bonusText && p.name !== "Death Note" && p.name !== "Yaksha") {
    const bonusColor = p.name === "Kinich" ? "#8BAE66" : "#00d2d3";
    lines.push(`<span style="color:${bonusColor}; font-weight:bold">${p.bonusText}</span>`);
  }
  return lines.join("<br>");
}

function updateUI() {
  let p1 = balls.find((b) => b.team === 1 && !b.isClone && !b.isAdeptusLotus),
    p2 = balls.find((b) => b.team === 2 && !b.isClone && !b.isAdeptusLotus);
  if (p1) {
    const p1Pct = p1.name === "Funeral"
      ? (1 - p1.funeralUltCooldown / Math.max(1, p1.funeralUltCooldownMax || p1.funeralUltMax)) * 100
      : (p1.ultCharge / p1.ultMax) * 100;
    document.getElementById("barFill1").style.width = Math.max(0, Math.min(100, p1Pct)) + "%";
    document.getElementById("ultName1").innerText = p1.name === "Funeral" ? (p1.hp < 25 ? "SPIRIT SOOTHER" : "PARAMITA PAPILIO") : characterDB[p1.name].ultName;
    document.getElementById("stats1").innerHTML = getCharSpecificStats(p1);
  }
  if (p2) {
    const p2Pct = p2.name === "Funeral"
      ? (1 - p2.funeralUltCooldown / Math.max(1, p2.funeralUltCooldownMax || p2.funeralUltMax)) * 100
      : (p2.ultCharge / p2.ultMax) * 100;
    document.getElementById("barFill2").style.width = Math.max(0, Math.min(100, p2Pct)) + "%";
    document.getElementById("ultName2").innerText = p2.name === "Funeral" ? (p2.hp < 25 ? "SPIRIT SOOTHER" : "PARAMITA PAPILIO") : characterDB[p2.name].ultName;
    document.getElementById("stats2").innerHTML = getCharSpecificStats(p2);
  }
}

function toggleMobileSpeed() {
  mobileSpeedMultiplier = mobileSpeedMultiplier === 1 ? 2 : 1;
  const button = document.getElementById("mobile-speed-toggle");
  if (!button) return;

  const enabled = mobileSpeedMultiplier === 2;
  button.textContent = enabled ? "2× SPEED: ON" : "2× SPEED: OFF";
  button.classList.toggle("is-active", enabled);
  button.setAttribute("aria-pressed", String(enabled));
}

function gameLoop() {
  const stepsThisFrame = mobileSpeedMultiplier;
  for (let step = 0; step < stepsThisFrame; step++) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMapBG();

    let domainCaster = balls.find((b) => b.name === "Infinity" && b.isUltActive);
    if (domainCaster) {
      drawUnlimitedVoidBG();
    }

    let stasisCaster = balls.find((b) => b.name === "Stasis" && b.isUltActive);

    if (stasisCaster && gameState === "playing") {
      ctx.fillStyle = "rgba(10, 15, 30, 0.45)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stasisCaster.stasisUltTimer--;
      stasisCaster.update();
      if (stasisCaster.stasisUltTimer <= 0) {
        stasisCaster.isUltActive = false;
        stasisCaster.ultCharge = 0;
        stasisCaster.bonusText = "";
        projectiles.forEach((p) => {
          if (p.owner === stasisCaster) p.frozenInTime = false;
        });
      }
    } else if (gameState === "timestop") {
      ctx.fillStyle = "rgba(40, 40, 45, 0.8)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      let caster = balls.find((b) => b.name === "Sword Saint" && b.isUltActive);
      if (caster) {
        caster.timeStopTimer--;
        if (caster.timeStopTimer % 10 === 0) {
          effects.push({
            type: "map_slash",
            p1: { x: -50, y: Math.random() * canvas.height },
            p2: { x: canvas.width + 50, y: Math.random() * canvas.height },
            life: 20,
          });
          balls.forEach((b) => {
            if (b.team !== caster.team && b.hp > 0) {
              let finalDmg = b.takeDamage(2, caster);
              spawnText("-" + finalDmg.toFixed(1), b.x, b.y + (Math.random() * 30 - 15), "#ffffff");
            }
          });
        }
        if (caster.timeStopTimer <= 0) {
          caster.visible = true;
          caster.isUltActive = false;
          caster.ultCharge = 0;
          caster.bonusText = "";
          gameState = "playing";
        }
      }
    } else if (gameState === "playing") {
      balls.forEach((b) => b.update());
      checkPhysicsAndHits();
    }

    for (let i = kinichSkills.length - 1; i >= 0; i--) {
      if (gameState === "playing") kinichSkills[i].update();
      kinichSkills[i].draw();
      if (kinichSkills[i].life <= 0) kinichSkills.splice(i, 1);
    }

    for (let i = adeptusSkills.length - 1; i >= 0; i--) {
      if (gameState === "playing") adeptusSkills[i].update();
      adeptusSkills[i].draw();
      if (adeptusSkills[i].life <= 0) adeptusSkills.splice(i, 1);
    }

    for (let i = scatteredSwords.length - 1; i >= 0; i--) {
      if (gameState === "playing") scatteredSwords[i].update();
      scatteredSwords[i].draw();
      if (scatteredSwords[i].life <= 0) scatteredSwords.splice(i, 1);
    }

    for (let i = tyrantPortals.length - 1; i >= 0; i--) {
      if (gameState === "playing") tyrantPortals[i].update();
      tyrantPortals[i].draw();
      if (tyrantPortals[i].life <= 0) tyrantPortals.splice(i, 1);
    }
    for (let i = tyrantSwords.length - 1; i >= 0; i--) {
      if (gameState === "playing") tyrantSwords[i].update();
      tyrantSwords[i].draw();
      if (tyrantSwords[i].life <= 0) tyrantSwords.splice(i, 1);
    }

    for (let i = soundTraps.length - 1; i >= 0; i--) {
      if (gameState === "playing") soundTraps[i].update();
      soundTraps[i].draw();
      if (soundTraps[i].life <= 0) soundTraps.splice(i, 1);
    }

    for (let i = infinitySkills.length - 1; i >= 0; i--) {
      if (gameState === "playing") infinitySkills[i].update();
      infinitySkills[i].draw();
      if (infinitySkills[i].life <= 0) infinitySkills.splice(i, 1);
    }

    for (let i = killerQueenSkills.length - 1; i >= 0; i--) {
      if (gameState === "playing") killerQueenSkills[i].update();
      killerQueenSkills[i].draw();
      if (killerQueenSkills[i].life <= 0) killerQueenSkills.splice(i, 1);
    }

    for (let i = bloodchainSkills.length - 1; i >= 0; i--) {
      let s = bloodchainSkills[i];
      if (gameState === "playing") s.update();
      s.draw();
      if (s.life <= 0) bloodchainSkills.splice(i, 1);
    }

    for (let i = projectiles.length - 1; i >= 0; i--) {
      let p = projectiles[i];
      if (gameState === "playing" || (stasisCaster && p.owner === stasisCaster)) p.update();
      p.draw();
      if (p.life <= 0) projectiles.splice(i, 1);
    }

    for (let i = balls.length - 1; i >= 0; i--) {
      if (balls[i].hp <= 0) balls.splice(i, 1);
      else balls[i].draw();
    }

    // Update all active Killer Queen bombs after balls are drawn.
    for (let i = balls.length - 1; i >= 0; i--) {
      let target = balls[i];
      if (!target.kqBombStacks) continue;
      for (let j = target.kqBombStacks.length - 1; j >= 0; j--) {
        let bomb = target.kqBombStacks[j];
        if (gameState === "playing") bomb.update();
        bomb.draw();
      }
    }

    for (let i = effects.length - 1; i >= 0; i--) {
      let ef = effects[i];
      if (ef.type === "funeral_papilio_transform") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = ef.life / ef.maxLife;
        const ease = Math.sin(Math.min(1, t) * Math.PI * 0.5);
        const copy=!!ef.copycat;
        const main=copy?"#FF76CE":"#ff513f", accent=copy?"#FFD9F2":"#ff8a62", dark=copy?"#8E2E72":"#650b18";
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.translate(ef.x, ef.y);
        ctx.globalAlpha = Math.min(1, 0.35 + fade * 0.65);

        // Expanding pyro aura like a real transformation, not just a static ring.
        const r = 16 + ease * 54;
        ctx.shadowColor = main; ctx.shadowBlur = 28;
        ctx.fillStyle = copy?"rgba(255,118,206,0.24)":"rgba(198,40,56,0.24)";
        ctx.beginPath(); ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = accent; ctx.lineWidth = 5;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = copy?"rgba(255,217,242,0.80)":"rgba(255,216,151,0.75)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2); ctx.stroke();

        // Eight large butterflies bursting outward.
        for (let i = 0; i < 8; i++) {
          const a = ef.angle + (i * Math.PI * 2) / 8 + t * 2.2;
          const rr = 18 + ease * (55 + (i % 3) * 8);
          const bx = Math.cos(a) * rr;
          const by = Math.sin(a) * rr;
          const sc = 0.7 + ease * 0.55;
          ctx.save(); ctx.translate(bx, by); ctx.rotate(a + Math.PI / 2); ctx.scale(sc, sc);
          ctx.fillStyle = copy ? (i % 2 ? "#FF76CE" : "#FFD9F2") : (i % 2 ? "#ff7b55" : "#ffbd7a");
          ctx.shadowColor = main; ctx.shadowBlur = 13;
          ctx.beginPath(); ctx.ellipse(-5, 0, 5, 10, -0.38, 0, Math.PI * 2); ctx.ellipse(5, 0, 5, 10, 0.38, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = dark; ctx.beginPath(); ctx.arc(0, 1, 2.1, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }

        // Central blossom-shaped flare.
        ctx.fillStyle = copy?"rgba(255,118,206,0.82)":"rgba(255,109,77,0.82)"; ctx.shadowBlur = 24;
        for (let i = 0; i < 6; i++) {
          const a = i * Math.PI / 3;
          ctx.save(); ctx.rotate(a);
          ctx.beginPath(); ctx.ellipse(0, -10 - ease * 8, 4.5, 13 + ease * 8, 0, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "funeral_papilio_burst") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = 1 - t;
        ctx.save(); ctx.globalCompositeOperation = "lighter"; ctx.translate(ef.x, ef.y);
        const r = 18 + t * 92;
        ctx.globalAlpha = fade; ctx.shadowColor = ef.copycat?"#FF76CE":"#ff553f"; ctx.shadowBlur = 26;
        ctx.strokeStyle = ef.copycat?"#FF76CE":"#ff7043"; ctx.lineWidth = 8;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = ef.copycat?"rgba(255,217,242,0.9)":"rgba(255,210,145,0.9)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(0, 0, r * 0.58, 0, Math.PI * 2); ctx.stroke();
        for (let i = 0; i < 14; i++) {
          const a = (i * Math.PI * 2) / 14 + t * 5;
          const rr = r * (0.7 + (i % 4) * 0.06);
          ctx.save(); ctx.rotate(a); ctx.fillStyle = ef.copycat ? (i % 2 ? "#FFD9F2" : "#FF76CE") : (i % 2 ? "#ffb36b" : "#d83a3f");
          ctx.beginPath(); ctx.ellipse(rr, 0, 3.2, 7, 0, 0, Math.PI * 2); ctx.ellipse(rr - 6, 0, 3.2, 7, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        }
        ctx.restore(); ef.life--;
      } else if (ef.type === "funeral_papilio") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = ef.life / ef.maxLife;
        const expand = Math.min(1, t * 1.7);
        ctx.save();
        ctx.translate(ef.x, ef.y);
        ctx.rotate(ef.angle);
        ctx.globalAlpha = Math.min(1, fade * 1.35);

        // Main crimson-gold crescent, deliberately large but contained.
        const r = 36 + ef.reach * expand;
        ctx.shadowColor = "#ff553f";
        ctx.shadowBlur = 28;
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgba(255,87,70,0.22)";
        ctx.lineWidth = ef.hitWidth * 0.48;
        ctx.beginPath();
        ctx.arc(0, 0, r, -0.58, 0.58);
        ctx.stroke();
        ctx.shadowBlur = 12;
        ctx.strokeStyle = "#d83a3f";
        ctx.lineWidth = ef.hitWidth * 0.18;
        ctx.beginPath();
        ctx.arc(0, 0, r, -0.50, 0.50);
        ctx.stroke();
        ctx.strokeStyle = "#ffba72";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, r, -0.46, 0.46);
        ctx.stroke();

        // Spirit silhouettes + butterfly particles riding the attack wave.
        for (let n = 0; n < 4; n++) {
          const bx = r * (0.28 + n * 0.18);
          const by = Math.sin(t * 7 + n * 1.8) * (14 + n * 5);
          ctx.save();
          ctx.translate(bx, by);
          const s = 0.65 + n * 0.07;
          ctx.scale(s, s);
          ctx.fillStyle = n % 2 === 0 ? "#ff6b52" : "#ffb36b";
          ctx.shadowColor = "#ff553f";
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.ellipse(-5, 0, 5, 9, -0.25, 0, Math.PI * 2);
          ctx.ellipse(5, 0, 5, 9, 0.25, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#5a0b16";
          ctx.beginPath(); ctx.arc(0, 2, 2.2, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }

        // Activation ring = the knockback/"push the spirits away" feeling.
        ctx.strokeStyle = `rgba(255,180,116,${0.75 * fade})`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, 22 + expand * 50, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "funeral_papilio_soul") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = ef.life / ef.maxLife;
        ctx.save();
        ctx.translate(ef.x, ef.y - t * 18);
        ctx.globalAlpha = fade;
        ctx.shadowColor = "#ff553f";
        ctx.shadowBlur = 22;
        ctx.fillStyle = "rgba(91,11,22,0.92)";
        ctx.beginPath();
        ctx.moveTo(0, -24 - t * 8);
        ctx.quadraticCurveTo(-18, -10, -16, 10);
        ctx.quadraticCurveTo(-12, 24, 0, 30);
        ctx.quadraticCurveTo(12, 24, 16, 10);
        ctx.quadraticCurveTo(18, -10, 0, -24 - t * 8);
        ctx.fill();
        ctx.fillStyle = "#ffb36b";
        ctx.beginPath(); ctx.ellipse(-7, -2, 3, 6, -0.2, 0, Math.PI * 2); ctx.ellipse(7, -2, 3, 6, 0.2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#ff553f";
        ctx.beginPath(); ctx.arc(-7, -2, 1.7, 0, Math.PI * 2); ctx.arc(7, -2, 1.7, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#ff7043"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(0, 7, 7, 0.15, Math.PI - 0.15); ctx.stroke();
        for (let b = 0; b < 5; b++) {
          const a = t * 5 + b * 1.25;
          const rr = 30 + t * 18;
          const px = Math.cos(a) * rr, py = Math.sin(a) * rr;
          ctx.fillStyle = b % 2 ? "#ffb36b" : "#d83a3f";
          ctx.beginPath(); ctx.ellipse(px - 3, py, 3, 5, -0.3, 0, Math.PI * 2); ctx.ellipse(px + 3, py, 3, 5, 0.3, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "funeral_spirit_soother") {
        // Full 360-degree Spirit Soother swing. The ghost circles Funeral once,
        // carrying a broad Pyro crescent rather than behaving like a projectile.
        const t = 1 - ef.life / ef.maxLife;
        const fade = Math.max(0, ef.life / ef.maxLife);
        const windup = Math.min(1, t / 0.16);
        const sweepT = Math.min(1, Math.max(0, (t - 0.12) / 0.70));
        const impactT = Math.min(1, Math.max(0, (t - 0.78) / 0.22));
        const swing = ef.angle - Math.PI + sweepT * Math.PI * 2;
        const orbitR = 148;
        const gx = ef.x + Math.cos(swing) * orbitR;
        const gy = ef.y + Math.sin(swing) * orbitR;

        ctx.save();
        ctx.globalCompositeOperation = "lighter";

        // Large wind-up aura / funeral flame core.
        ctx.globalAlpha = 0.20 + windup * 0.30;
        ctx.shadowColor = ef.copycat?"#FF76CE":"#ff4937";
        ctx.shadowBlur = 42;
        ctx.fillStyle = ef.copycat?"#8E2E72":"#8f1725";
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, 34 + windup * 52, 0, Math.PI * 2);
        ctx.fill();

        // Keep a thick trailing arc behind the rotating spirit so the swing reads as 360°.
        if (sweepT > 0) {
          ctx.save();
          ctx.globalAlpha = 0.90 * fade;
          ctx.translate(ef.x, ef.y);
          ctx.rotate(ef.angle);
          const arcR = 150;
          const trail = 1.35;
          const arcEnd = -Math.PI + sweepT * Math.PI * 2;
          const arcStart = arcEnd - trail;

          ctx.lineCap = "round";
          ctx.shadowColor = "#ff3f2d";
          ctx.shadowBlur = 42;
          ctx.strokeStyle = "rgba(119,11,24,0.94)";
          ctx.lineWidth = 42;
          ctx.beginPath();
          ctx.arc(0, 0, arcR, arcStart, arcEnd);
          ctx.stroke();

          ctx.shadowBlur = 28;
          ctx.strokeStyle = "rgba(255,80,55,0.96)";
          ctx.lineWidth = 19;
          ctx.beginPath();
          ctx.arc(0, 0, arcR - 6, arcStart, arcEnd);
          ctx.stroke();

          ctx.shadowBlur = 12;
          ctx.strokeStyle = "rgba(255,220,181,0.92)";
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(0, 0, arcR - 12, arcStart, arcEnd);
          ctx.stroke();
          ctx.restore();
        }

        // Casper-like spirit circling Funeral.
        if (sweepT > 0 && sweepT < 1) {
          ctx.save();
          ctx.globalAlpha = 0.98 * fade;
          ctx.translate(gx, gy);
          ctx.rotate(swing + Math.PI / 2);
          ctx.shadowColor = "#ff4534";
          ctx.shadowBlur = 38;

          const s = 1.45;
          ctx.scale(s, s);

          // Head.
          ctx.fillStyle = "rgba(255,239,215,0.99)";
          ctx.beginPath();
          ctx.ellipse(0, -14, 29, 24, 0, 0, Math.PI * 2);
          ctx.fill();

          // Ghost body, wider and more recognizable.
          ctx.beginPath();
          ctx.moveTo(-27, -2);
          ctx.quadraticCurveTo(-40, 20, -28, 44);
          ctx.quadraticCurveTo(-18, 64, -7, 48);
          ctx.quadraticCurveTo(0, 72, 7, 48);
          ctx.quadraticCurveTo(18, 64, 28, 44);
          ctx.quadraticCurveTo(40, 20, 27, -2);
          ctx.quadraticCurveTo(0, 12, -27, -2);
          ctx.fill();

          // Dark red facial features.
          ctx.fillStyle = "#9a1829";
          ctx.beginPath();
          ctx.ellipse(-9, -15, 4.4, 6.8, -0.10, 0, Math.PI * 2);
          ctx.ellipse(9, -15, 4.4, 6.8, 0.10, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#76101e";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(0, -2, 11, 0.12, Math.PI - 0.12);
          ctx.stroke();

          // Long Pyro tails.
          ctx.strokeStyle = ef.copycat?"#FF76CE":"#ff7043";
          ctx.lineWidth = 11;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(-14, 39); ctx.quadraticCurveTo(-48, 70, -18, 111);
          ctx.moveTo(14, 39); ctx.quadraticCurveTo(48, 70, 18, 111);
          ctx.stroke();
          ctx.strokeStyle = "#ffc07d";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(-12, 42); ctx.quadraticCurveTo(-42, 72, -17, 104);
          ctx.moveTo(12, 42); ctx.quadraticCurveTo(42, 72, 17, 104);
          ctx.stroke();
          ctx.restore();

          // Butterfly / ember wake behind the spirit.
          ctx.save();
          ctx.globalAlpha = 0.78 * fade;
          for (let i = 0; i < 18; i++) {
            const back = 24 + i * 8;
            const wobble = Math.sin(t * 26 + i * 1.7) * (5 + i * 0.45);
            const bx = gx - Math.cos(swing) * back + Math.cos(swing + Math.PI / 2) * wobble;
            const by = gy - Math.sin(swing) * back + Math.sin(swing + Math.PI / 2) * wobble;
            const size = Math.max(1.3, 5.0 - i * 0.16);
            ctx.fillStyle = i % 2 ? "#ffb36b" : "#d83a3f";
            ctx.shadowColor = ctx.fillStyle;
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.ellipse(bx - size, by, size, size * 1.8, swing, 0, Math.PI * 2);
            ctx.ellipse(bx + size, by, size, size * 1.8, swing + Math.PI, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        if (impactT > 0) {
          ctx.save();
          ctx.globalAlpha = (1 - impactT) * 0.95;
          ctx.translate(ef.impactX, ef.impactY);
          ctx.shadowColor = "#ff4d3d";
          ctx.shadowBlur = 34;
          ctx.strokeStyle = ef.copycat?"#FF76CE":"#ff7043";
          ctx.lineWidth = 11;
          ctx.beginPath();
          ctx.arc(0, 0, 28 + impactT * 88, -Math.PI * 0.95, Math.PI * 0.95);
          ctx.stroke();
          ctx.strokeStyle = "#ffd39a";
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.arc(0, 0, 20 + impactT * 66, -Math.PI * 0.95, Math.PI * 0.95);
          ctx.stroke();
          for (let i = 0; i < 18; i++) {
            const a = (i / 18) * Math.PI * 2;
            const inner = 20 + impactT * 14;
            const outer = 52 + impactT * 88;
            ctx.strokeStyle = i % 2 ? "#ffb36b" : "#d83a3f";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
            ctx.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
            ctx.stroke();
          }
          ctx.restore();
        }

        ctx.globalCompositeOperation = "source-over";
        ctx.restore();
        ef.life--;
      } else if (ef.type === "funeral_burn_apply" || ef.type === "funeral_burn_tick") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = ef.life / ef.maxLife;
        ctx.save();
        ctx.globalAlpha = fade;
        ctx.shadowColor = ef.copycat ? "#FF76CE" : "#ff4d3d";
        ctx.shadowBlur = 14;
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2 + t * 4;
          const rr = 8 + i * 3;
          const fx = ef.x + Math.cos(a) * rr;
          const fy = ef.y + Math.sin(a) * rr - t * 8;
          ctx.fillStyle = ef.copycat ? (i % 2 ? "#FFD9F2" : "#FF76CE") : (i % 2 ? "#ffb36b" : "#ff553f");
          ctx.beginPath();
          ctx.ellipse(fx, fy, 2.5, 5 + t * 2, a, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "funeral_charge") {
        const t = 1 - ef.life / ef.maxLife;
        const px = ef.startX + (ef.endX - ef.startX) * Math.min(1, t * 1.05);
        const py = ef.startY + (ef.endY - ef.startY) * Math.min(1, t * 1.05);
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(ef.angle);
        const fade = Math.max(0, 1 - t);
        ctx.globalAlpha = fade;

        // Long flame trail behind the dash.
        ctx.shadowColor = "#ff553f";
        ctx.shadowBlur = ef.papilio ? 28 : 18;
        ctx.strokeStyle = ef.papilio ? "#ff7043" : "#c0392b";
        ctx.lineWidth = ef.papilio ? 15 : 9;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(-8, 0);
        ctx.quadraticCurveTo(-45, -8, -95, Math.sin(t * 25) * 8);
        ctx.stroke();

        ctx.strokeStyle = "#ffbd7a";
        ctx.lineWidth = ef.papilio ? 4 : 2.5;
        ctx.beginPath();
        ctx.moveTo(-5, 0);
        ctx.quadraticCurveTo(-38, -4, -88, Math.sin(t * 25) * 5);
        ctx.stroke();

        // Flame butterflies on the Papilio charge.
        const count = ef.papilio ? 10 : 5;
        for (let b = 0; b < count; b++) {
          const rr = 20 + b * 9;
          const yy = Math.sin(t * 16 + b * 1.7) * (6 + b * 0.8);
          const side = b % 2 ? 1 : -1;
          ctx.fillStyle = b % 2 ? "#ffb36b" : "#d83a3f";
          ctx.beginPath();
          ctx.ellipse(-rr, yy + side * 3, 3.2, 6.5, side * 0.25, 0, Math.PI * 2);
          ctx.ellipse(-rr - 4, yy - side * 3, 3.2, 6.5, -side * 0.25, 0, Math.PI * 2);
          ctx.fill();
        }

        // Forward arc at the tip, emphasizing the Homa direction.
        ctx.shadowBlur = ef.papilio ? 20 : 12;
        ctx.strokeStyle = "#ff7043";
        ctx.lineWidth = ef.papilio ? 6 : 4;
        ctx.beginPath();
        ctx.arc(10, 0, ef.papilio ? 28 : 20, -0.7, 0.7);
        ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "funeral_charge_hit") {
        const t = 1 - ef.life / ef.maxLife;
        ctx.save();
        ctx.translate(ef.x, ef.y);
        ctx.rotate(ef.angle);
        ctx.globalAlpha = Math.max(0, 1 - t);
        ctx.shadowColor = "#ff553f"; ctx.shadowBlur = 20;
        ctx.strokeStyle = "#ff7043"; ctx.lineWidth = 5; ctx.lineCap = "round";
        ctx.beginPath(); ctx.arc(0, 0, 18 + t * 48, -0.8, 0.8); ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "hutao_ult") {
        const t = 1 - ef.life / ef.maxLife;
        const r = 28 + t * 145;
        ctx.save();
        ctx.globalAlpha = Math.max(0, ef.life / ef.maxLife);
        ctx.strokeStyle = "#ff7043";
        ctx.lineWidth = 7;
        ctx.shadowColor = "#ff553f";
        ctx.shadowBlur = 28;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = "#ffbd7a";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, r * 0.72, 0, Math.PI * 2);
        ctx.stroke();
        for (let p = 0; p < 14; p++) {
          const a = (p * Math.PI * 2) / 14 - t * 2.8;
          const px = ef.x + Math.cos(a) * r;
          const py = ef.y + Math.sin(a) * r;
          ctx.fillStyle = p % 2 === 0 ? "#c0392b" : "#ffb36b";
          ctx.beginPath();
          ctx.ellipse(px - 2.5, py, 3, 6, -0.25, 0, Math.PI * 2);
          ctx.ellipse(px + 2.5, py, 3, 6, 0.25, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "hutao_blossom_burst") {
        const t = 1 - ef.life / ef.maxLife;
        const r = 12 + t * 52;
        ctx.save();
        ctx.globalAlpha = Math.max(0, ef.life / ef.maxLife);
        ctx.strokeStyle = ef.copycat ? "#FF76CE" : "#c0392b";
        ctx.lineWidth = 3;
        ctx.shadowColor = ef.copycat ? "#FF76CE" : "#ff553f";
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "hutao_blossom_mark") {
        const t = ef.life / ef.maxLife;
        ctx.save();
        ctx.globalAlpha = t;
        ctx.strokeStyle = ef.copycat ? "#FFD9F2" : "#ff6b52";
        ctx.lineWidth = 2;
        ctx.shadowColor = ef.copycat ? "#FF76CE" : "#ff553f";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, 18 + (1 - t) * 12, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "tyrant_sword_hit") {
        ctx.save(); const progress=1-ef.life/ef.maxLife; ctx.beginPath(); ctx.arc(ef.x,ef.y,10+progress*30,0,Math.PI*2);
        ctx.strokeStyle=`rgba(164,200,225,${1-progress})`; ctx.lineWidth=3; ctx.shadowColor="#a4c8e1"; ctx.shadowBlur=10; ctx.stroke(); ctx.restore(); ef.life--;
      } else if (ef.type === "tyrant_chains") {
        const target=ef.target;
        if(!target||target.hp<=0){ef.life=0;} else {
          const progress=1-ef.life/ef.maxLife;
          const chainColor = ef.color || "#a4c8e1";
          const chainLinkColor = ef.color ? "rgba(255,210,235,0.95)" : "rgba(220,240,255,0.9)";
          const corners=[{x:0,y:0},{x:canvas.width,y:0},{x:canvas.width,y:canvas.height},{x:0,y:canvas.height}];
          ctx.save(); ctx.lineCap="round";
          corners.forEach((c)=>{
            const dx=target.x-c.x,dy=target.y-c.y,len=Math.hypot(dx,dy)||1,reach=Math.min(1,progress*4);
            ctx.strokeStyle = ef.color ? `rgba(255,118,206,${0.4+0.6*Math.min(1,progress*3)})` : `rgba(164,200,225,${0.4+0.6*Math.min(1,progress*3)})`; ctx.shadowColor=chainColor; ctx.shadowBlur=12; ctx.lineWidth=7;
            ctx.beginPath(); ctx.moveTo(c.x,c.y); ctx.lineTo(c.x+dx*reach,c.y+dy*reach); ctx.stroke();
            const links=Math.max(1,Math.floor(len*reach/34));
            for(let k=1;k<=links;k++){
              const t=k/(links+1),lx=c.x+dx*t*reach,ly=c.y+dy*t*reach;
              ctx.save(); ctx.translate(lx,ly); ctx.rotate(Math.atan2(dy,dx)+(k%2?0.25:-0.25)); ctx.strokeStyle=chainLinkColor; ctx.lineWidth=3;
              ctx.beginPath(); ctx.ellipse(0,0,9,4,0,0,Math.PI*2); ctx.stroke(); ctx.restore();
            }
          });
          ctx.beginPath(); ctx.arc(target.x,target.y,target.radius+12+Math.sin(Date.now()*0.012)*3,0,Math.PI*2); ctx.strokeStyle=ef.color ? "rgba(255,118,206,0.95)" : "rgba(164,200,225,0.95)"; ctx.lineWidth=2; ctx.stroke();
          ctx.restore(); ef.life--;
        }
      } else if (ef.type === "copycat_tensho_hit") {
        const progress = 1 - ef.life / ef.maxLife;
        ctx.save();
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, 14 + progress * 38, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,118,206,${1 - progress})`;
        ctx.lineWidth = 4;
        ctx.shadowColor = ef.color || "#FF76CE";
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "unlimited_void_dot") {
        if (ef.target && ef.target.hp > 0) {
          if (ef.life % 20 === 0) {
            let dmg = ef.target.takeDamage(0.6, ef.owner);
            spawnText("-" + dmg.toFixed(1), ef.target.x + (Math.random() * 20 - 10), ef.target.y - 15, "#a29bfe");
          }
          ctx.save();
          ctx.beginPath();
          ctx.arc(ef.target.x, ef.target.y, ef.target.radius + 12 + Math.sin(ef.life * 0.2) * 4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(162, 155, 254, 0.2)";
          ctx.fill();
          ctx.strokeStyle = "#a29bfe";
          ctx.lineWidth = 2.5;
          ctx.shadowColor = "#6c5ce7";
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.restore();
        }
        ef.life--;
      } else if (ef.type === "cursed_energy") {
        ctx.save();
        let progress = 1 - ef.life / ef.maxLife, radius = 15 + progress * 25;
        ctx.translate(ef.x, ef.y);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 168, 255, ${0.45 * (1 - progress)})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(0, 210, 255, ${1 - progress})`;
        ctx.lineWidth = 3;
        for (let a = 0; a < 6; a++) {
          let ang = (a * Math.PI) / 3 + progress * 2;
          ctx.beginPath();
          ctx.moveTo(Math.cos(ang) * 5, Math.sin(ang) * 5);
          ctx.lineTo(Math.cos(ang) * (radius + 5), Math.sin(ang) * (radius + 5));
          ctx.stroke();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "kq_explosion") {
        ctx.save();
        let progress = 1 - ef.life / ef.maxLife;
        let radius = 12 + progress * 32;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 92, 74, ${0.28 * (1 - progress)})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(91, 41, 34, ${1 - progress})`;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "black_flash") {
        ctx.save();
        let progress = 1 - ef.life / ef.maxLife;
        ctx.translate(ef.x, ef.y);
        ctx.beginPath();
        ctx.arc(0, 0, 38 * (1 - progress * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 0, 0, ${0.65 * (1 - progress)})`;
        ctx.fill();
        ctx.shadowColor = "#ff0033";
        ctx.shadowBlur = 16;
        for (let b = 0; b < 8; b++) {
          let angle = (b * Math.PI * 2) / 8 + Math.sin(ef.life) * 0.25, len = 42 + Math.random() * 28;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          for (let s = 1; s <= 4; s++) {
            let dist = (len / 4) * s, perp = (Math.random() - 0.5) * 16;
            ctx.lineTo(Math.cos(angle) * dist - Math.sin(angle) * perp, Math.sin(angle) * dist + Math.cos(angle) * perp);
          }
          ctx.strokeStyle = "#ff0033";
          ctx.lineWidth = 6 * (1 - progress);
          ctx.stroke();
          ctx.strokeStyle = "#000000";
          ctx.lineWidth = 2.5 * (1 - progress);
          ctx.stroke();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "swordsaint_aftereffect") {
        if (ef.delay > 0) {
          ef.delay--;
          if (ef.target && ef.target.hp > 0) {
            ef.x = ef.target.x;
            ef.y = ef.target.y;
          }
        } else {
          if (!ef.applied) {
            ef.applied = true;
            if (ef.target && ef.target.hp > 0) {
              let actualDmg = ef.target.takeDamage(ef.damage, ef.owner);
              spawnText("-" + actualDmg.toFixed(1), ef.target.x + (Math.random() * 24 - 12), ef.target.y - 10, "#7f8c8d");
            }
          }
          ctx.save();
          ctx.translate(ef.x, ef.y);
          ctx.rotate(ef.angle);
          let progress = 1 - ef.life / ef.maxLife;
          ctx.fillStyle = `rgba(180, 185, 195, ${0.55 * (1 - progress)})`;
          for (let b = 0; b < 4; b++) {
            ctx.beginPath();
            ctx.arc(Math.cos(b * 1.4) * 16 * progress + 8, Math.sin(b * 1.4) * 16 * progress - 4, 6 + b * 3, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.strokeStyle = `rgba(90, 100, 110, ${1 - progress})`;
          ctx.lineWidth = 2.5;
          for (let l = -2; l <= 2; l++) {
            ctx.beginPath();
            ctx.moveTo(-18, l * 7);
            ctx.lineTo(24 + Math.abs(l) * 4, l * 11);
            ctx.stroke();
          }
          ctx.beginPath();
          ctx.arc(0, 0, 32, -1.3, 0.7);
          ctx.lineWidth = 11;
          ctx.strokeStyle = `rgba(45, 52, 54, ${1 - progress})`;
          ctx.lineCap = "round";
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, 32, -1.1, 0.5);
          ctx.lineWidth = 4;
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - progress})`;
          ctx.stroke();
          ctx.restore();
          ef.life--;
        }
      } else if (ef.type === "map_slash") {
        ctx.beginPath();
        ctx.moveTo(ef.p1.x, ef.p1.y);
        ctx.lineTo(ef.p2.x, ef.p2.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ef.life / 20})`;
        ctx.lineWidth = 6;
        ctx.stroke();
        ef.life--;
      } else if (ef.type === "slash") {
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, 25, ef.angle - 0.8, ef.angle + 0.8);
        ctx.strokeStyle = `rgba(0, 210, 211, ${ef.life / 10})`;
        ctx.lineWidth = 4;
        ctx.stroke();
        ef.life--;
      } else if (ef.type === "adeptus_charge") {
        const t = 1 - ef.life / ef.maxLife;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.25 + 0.75 * (1 - t);
        ctx.strokeStyle = "#BFEAFF";
        ctx.shadowColor = "#7CCBFF";
        ctx.shadowBlur = 14;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, 18 + t * 30, 0, Math.PI * 2);
        ctx.stroke();
        for (let i = 0; i < 6; i++) {
          const a = i * Math.PI / 3 + t * 4;
          const r1 = 14 + t * 8, r2 = 28 + t * 28;
          ctx.beginPath();
          ctx.moveTo(ef.x + Math.cos(a) * r1, ef.y + Math.sin(a) * r1);
          ctx.lineTo(ef.x + Math.cos(a) * r2, ef.y + Math.sin(a) * r2);
          ctx.stroke();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "adeptus_frostflake_cast") {
        const t = 1 - ef.life / ef.maxLife;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 1 - t;
        ctx.strokeStyle = "#DDF8FF";
        ctx.shadowColor = "#7CCBFF";
        ctx.shadowBlur = 18;
        ctx.lineWidth = 5;
        for (let i = 0; i < 6; i++) {
          const a = i * Math.PI / 3;
          ctx.beginPath();
          ctx.moveTo(ef.x, ef.y);
          ctx.lineTo(ef.x + Math.cos(a) * (18 + t * 42), ef.y + Math.sin(a) * (18 + t * 42));
          ctx.stroke();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "adeptus_arrow_hit") {
        const t = 1 - ef.life / ef.maxLife;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 1 - t;
        ctx.strokeStyle = "#BFEAFF";
        ctx.shadowColor = "#7CCBFF";
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, 8 + t * 20, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "adeptus_frostflake_hit") {
        const t = 1 - ef.life / ef.maxLife;
        const r = 12 + t * (ef.radius || 56);
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 1 - t;
        ctx.strokeStyle = "#DDF8FF";
        ctx.shadowColor = "#7CCBFF";
        ctx.shadowBlur = 20;
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(ef.x, ef.y, r, 0, Math.PI * 2); ctx.stroke();
        for (let i = 0; i < 6; i++) {
          const a = i * Math.PI / 3;
          ctx.beginPath();
          ctx.moveTo(ef.x + Math.cos(a) * 6, ef.y + Math.sin(a) * 6);
          ctx.lineTo(ef.x + Math.cos(a) * r, ef.y + Math.sin(a) * r);
          ctx.stroke();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "adeptus_dash") {
        const t = 1 - ef.life / ef.maxLife;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 1 - t;
        ctx.strokeStyle = "#BFEAFF";
        ctx.shadowColor = "#7CCBFF";
        ctx.shadowBlur = 15;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(ef.x, ef.y);
        ctx.lineTo(ef.endX, ef.endY);
        ctx.stroke();
        for (let i = 0; i < 5; i++) {
          const q = Math.max(0, t - i * 0.08);
          const px = ef.x + (ef.endX - ef.x) * q;
          const py = ef.y + (ef.endY - ef.y) * q;
          ctx.fillStyle = i % 2 ? "#DDF8FF" : "#7CCBFF";
          ctx.fillRect(px - 2, py - 2, 4, 4);
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "adeptus_lotus_explode") {
        const t = 1 - ef.life / ef.maxLife;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 1 - t;
        ctx.strokeStyle = "#DDF8FF";
        ctx.shadowColor = "#7CCBFF";
        ctx.shadowBlur = 22;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, 18 + t * 74, 0, Math.PI * 2);
        ctx.stroke();
        for (let i = 0; i < 8; i++) {
          const a = i * Math.PI / 4;
          ctx.beginPath();
          ctx.moveTo(ef.x + Math.cos(a) * 12, ef.y + Math.sin(a) * 12);
          ctx.lineTo(ef.x + Math.cos(a) * (34 + t * 48), ef.y + Math.sin(a) * (34 + t * 48));
          ctx.stroke();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "adeptus_icicle_hit") {
        const t = 1 - ef.life / ef.maxLife;
        const radius = ef.radius || 34;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 1 - t;
        ctx.strokeStyle = ef.final ? "#F4FCFF" : "#AEE4FF";
        ctx.shadowColor = "#7CCBFF";
        ctx.shadowBlur = ef.final ? 30 : 14;
        ctx.lineWidth = ef.final ? 7 : 3;
        ctx.beginPath(); ctx.arc(ef.x, ef.y, 8 + t * radius, 0, Math.PI * 2); ctx.stroke();
        if (ef.final) {
          for (let i = 0; i < 12; i++) {
            const a = i * Math.PI / 6;
            ctx.beginPath();
            ctx.moveTo(ef.x + Math.cos(a) * 16, ef.y + Math.sin(a) * 16);
            ctx.lineTo(ef.x + Math.cos(a) * (40 + t * 70), ef.y + Math.sin(a) * (40 + t * 70));
            ctx.stroke();
          }
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "adeptus_shower_final") {
        const t = 1 - ef.life / ef.maxLife;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.12 + 0.88 * (1 - t);
        ctx.strokeStyle = "#DDF8FF";
        ctx.shadowColor = "#7CCBFF";
        ctx.shadowBlur = 26;
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(ef.x, ef.y, 22 + t * 98, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "yaksha_ult_start") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = Math.sin(Math.min(1, t) * Math.PI);
        const jade = "#427973";
        const dark = "#35424C";
        const slate = "#4A5969";
        ctx.save();
        ctx.translate(ef.x, ef.y);
        ctx.globalAlpha = 0.72 + fade * 0.28;

        // Funeral-like transformation framing, but with Xiao's muted Anemo jade.
        const base = 20 + t * 34;
        ctx.strokeStyle = jade;
        ctx.lineWidth = 7;
        ctx.beginPath(); ctx.arc(0, 0, base, -Math.PI * 0.15, Math.PI * 1.15); ctx.stroke();
        ctx.strokeStyle = slate;
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(0, 0, base + 15, Math.PI * 0.05, Math.PI * 1.7); ctx.stroke();
        ctx.strokeStyle = dark;
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(0, 0, base + 30, -0.4, Math.PI * 0.9); ctx.stroke();

        // Dense, opaque Anemo ribbons instead of luminous particles.
        for (let i = 0; i < 12; i++) {
          const a = i * Math.PI * 2 / 12 + t * 1.4;
          const r1 = 27 + t * 8;
          const r2 = 54 + t * 72;
          ctx.strokeStyle = i % 3 === 0 ? dark : (i % 2 ? jade : slate);
          ctx.lineWidth = i % 3 === 0 ? 4.5 : 2.5;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1);
          ctx.quadraticCurveTo(
            Math.cos(a + 0.18) * (r1 + 18),
            Math.sin(a + 0.18) * (r1 + 18),
            Math.cos(a + 0.10) * r2,
            Math.sin(a + 0.10) * r2
          );
          ctx.stroke();
        }

        // Small central mask impression during the wind-up.
        ctx.fillStyle = dark;
        ctx.beginPath();
        ctx.moveTo(0, -21 - t * 8);
        ctx.lineTo(11 + t * 5, -5);
        ctx.lineTo(6, 14 + t * 6);
        ctx.lineTo(0, 20 + t * 8);
        ctx.lineTo(-6, 14 + t * 6);
        ctx.lineTo(-11 - t * 5, -5);
        ctx.closePath(); ctx.fill();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "yaksha_ult_transform") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = Math.max(0, 1 - t);
        const jade = "#427973";
        const dark = "#35424C";
        const slate = "#4A5969";
        ctx.save();
        ctx.globalAlpha = fade;

        // Wide matte Anemo burst.
        ctx.strokeStyle = jade;
        ctx.lineWidth = 9;
        ctx.beginPath(); ctx.arc(ef.x, ef.y, 18 + t * 112, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = slate;
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(ef.x, ef.y, 16 + t * 86, Math.PI * 0.12, Math.PI * 1.72); ctx.stroke();

        for (let i = 0; i < 16; i++) {
          const a = i * Math.PI / 8 + t * 1.4;
          const r1 = 24 + t * 18;
          const r2 = 62 + t * 122;
          ctx.strokeStyle = i % 3 === 0 ? dark : (i % 2 ? jade : slate);
          ctx.lineWidth = i % 3 === 0 ? 4 : 2.3;
          ctx.beginPath();
          ctx.moveTo(ef.x + Math.cos(a) * r1, ef.y + Math.sin(a) * r1);
          ctx.quadraticCurveTo(
            ef.x + Math.cos(a + 0.10) * (r1 + 22),
            ef.y + Math.sin(a + 0.10) * (r1 + 22),
            ef.x + Math.cos(a + 0.05) * r2,
            ef.y + Math.sin(a + 0.05) * r2
          );
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(53,66,76,0.16)";
        ctx.beginPath(); ctx.arc(ef.x, ef.y, 26 + t * 74, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        ef.life--;
      } else if (ef.type === "yaksha_dash") {
        const t = 1 - ef.life / ef.maxLife;
        const px = ef.startX + (ef.endX - ef.startX) * Math.min(1, t * 1.05);
        const py = ef.startY + (ef.endY - ef.startY) * Math.min(1, t * 1.05);
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(ef.angle);
        const fade = Math.max(0, 1 - t);
        const jade = "#427973";
        const dark = "#35424C";
        const slate = "#4A5969";
        ctx.globalAlpha = fade;

        // Funeral-style long linear dash trail, recolored to Xiao's muted Anemo jade.
        ctx.strokeStyle = dark;
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(-8, 0);
        ctx.quadraticCurveTo(-52, -7, -115, Math.sin(t * 25) * 7);
        ctx.stroke();

        ctx.strokeStyle = jade;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(-6, 0);
        ctx.quadraticCurveTo(-42, -5, -100, Math.sin(t * 25) * 5);
        ctx.stroke();

        ctx.strokeStyle = slate;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(-4, 0);
        ctx.quadraticCurveTo(-34, -3, -88, Math.sin(t * 25) * 3);
        ctx.stroke();

        // Curved Anemo ribbons, kept matte and dark.
        for (let b = 0; b < 6; b++) {
          const rr = 18 + b * 11;
          const yy = Math.sin(t * 15 + b * 1.7) * (5 + b * 0.7);
          const side = b % 2 ? 1 : -1;
          ctx.strokeStyle = b % 2 ? jade : dark;
          ctx.lineWidth = b % 3 === 0 ? 3.2 : 2;
          ctx.beginPath();
          ctx.moveTo(-rr, yy + side * 3);
          ctx.quadraticCurveTo(-rr - 8, yy - side * 9, -rr - 12, yy + side * 5);
          ctx.stroke();
        }

        // Forward Anemo crescent, matching Funeral's strong tip cue.
        ctx.strokeStyle = jade;
        ctx.lineWidth = 5.5;
        ctx.beginPath();
        ctx.arc(12, 0, 27, -0.72, 0.72);
        ctx.stroke();
        ctx.strokeStyle = dark;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(12, 0, 34, -0.5, 0.5);
        ctx.stroke();

        ctx.restore();
        ef.life--;
      } else if (ef.type === "yaksha_dash_hit") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = Math.max(0, 1 - t);
        const jade = "#427973";
        const dark = "#35424C";
        ctx.save();
        ctx.translate(ef.x, ef.y);
        ctx.rotate(ef.angle);
        ctx.globalAlpha = fade;
        ctx.strokeStyle = jade;
        ctx.lineWidth = 5;
        ctx.beginPath(); ctx.arc(0, 0, 18 + t * 48, -0.82, 0.82); ctx.stroke();
        ctx.strokeStyle = dark;
        ctx.lineWidth = 2.6;
        ctx.beginPath(); ctx.arc(0, 0, 25 + t * 58, -0.58, 0.58); ctx.stroke();
        for (let i = 0; i < 5; i++) {
          const a = i * Math.PI / 4 - 0.8;
          ctx.lineWidth = i % 2 ? 2.5 : 3.2;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * 8, Math.sin(a) * 8);
          ctx.lineTo(Math.cos(a) * (28 + t * 26), Math.sin(a) * (28 + t * 26));
          ctx.stroke();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "yaksha_plunge_charge") {
        const t = 1 - ef.life / ef.maxLife;
        const tx = ef.target && ef.target.hp > 0 ? ef.target.x : ef.x;
        const ty = ef.target && ef.target.hp > 0 ? ef.target.y : ef.y;
        const jade = "#427973";
        const dark = "#35424C";
        const slate = "#4A5969";
        ctx.save();
        ctx.globalAlpha = 0.55 + 0.45 * t;

        ctx.strokeStyle = jade;
        ctx.lineWidth = 5;
        ctx.beginPath(); ctx.arc(tx, ty, 32 + t * 92, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = dark;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(tx, ty, 24 + t * 62, -t * 1.4, -t * 1.4 + Math.PI * 1.5); ctx.stroke();

        // Vertical Anemo streams.
        for (let i = -2; i <= 2; i++) {
          ctx.strokeStyle = i % 2 ? slate : jade;
          ctx.lineWidth = i === 0 ? 6 : 3;
          ctx.beginPath();
          ctx.moveTo(tx + i * 16, ty - 118 - t * 48);
          ctx.quadraticCurveTo(tx + i * 8, ty - 74 - t * 22, tx + i * 5, ty - 16);
          ctx.stroke();
        }

        // Falling Yaksha silhouette / polearm cue.
        ctx.fillStyle = dark;
        ctx.beginPath();
        ctx.moveTo(tx, ty - 108 - t * 36);
        ctx.lineTo(tx + 12, ty - 68 - t * 20);
        ctx.lineTo(tx + 6, ty - 22);
        ctx.lineTo(tx, ty + 2);
        ctx.lineTo(tx - 6, ty - 22);
        ctx.lineTo(tx - 12, ty - 68 - t * 20);
        ctx.closePath(); ctx.fill();

        // Matte Anemo blades orbiting the landing point.
        for (let i = 0; i < 8; i++) {
          const a = t * 1.8 + i * Math.PI / 4;
          const rr = 28 + t * 38;
          ctx.save();
          ctx.translate(tx + Math.cos(a) * rr, ty + Math.sin(a) * rr);
          ctx.rotate(a + Math.PI / 2);
          ctx.fillStyle = i % 2 ? slate : jade;
          ctx.beginPath();
          ctx.moveTo(0, -10); ctx.lineTo(5, 0); ctx.lineTo(0, 16); ctx.lineTo(-5, 0); ctx.closePath(); ctx.fill();
          ctx.restore();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "yaksha_plunge_impact") {
        const t = 1 - ef.life / ef.maxLife;
        const fade = Math.max(0, 1 - t);
        const radius = ef.radius || 120;
        const jade = "#427973";
        const dark = "#35424C";
        const slate = "#4A5969";
        ctx.save();
        ctx.globalAlpha = fade;

        // Broad, dark Anemo impact rings.
        ctx.strokeStyle = jade;
        ctx.lineWidth = 9;
        ctx.beginPath(); ctx.arc(ef.x, ef.y, 20 + t * radius, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = slate;
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(ef.x, ef.y, 16 + t * (radius * 0.72), -0.1, Math.PI * 1.9); ctx.stroke();

        // Dense but matte shockwave ribbons.
        for (let i = 0; i < 14; i++) {
          const a = i * Math.PI * 2 / 14 + t * 1.6;
          const r1 = 20 + t * 28;
          const r2 = 52 + t * 128;
          ctx.strokeStyle = i % 2 ? jade : dark;
          ctx.lineWidth = i % 3 === 0 ? 4.5 : 2.2;
          ctx.beginPath();
          ctx.moveTo(ef.x + Math.cos(a) * r1, ef.y + Math.sin(a) * r1);
          ctx.quadraticCurveTo(
            ef.x + Math.cos(a + 0.06) * (r1 + 20),
            ef.y + Math.sin(a + 0.06) * (r1 + 20),
            ef.x + Math.cos(a + 0.09) * r2,
            ef.y + Math.sin(a + 0.09) * r2
          );
          ctx.stroke();
        }

        // Eight jade/slate spear-like shock blades.
        const bladeAngles = [0, Math.PI / 2, Math.PI, Math.PI * 1.5, Math.PI / 4, Math.PI * 3 / 4, Math.PI * 5 / 4, Math.PI * 7 / 4];
        for (let i = 0; i < bladeAngles.length; i++) {
          const a = bladeAngles[i];
          const len = 45 + t * 82;
          const spread = 8 + t * 16;
          ctx.save();
          ctx.translate(ef.x + Math.cos(a) * (22 + t * 18), ef.y + Math.sin(a) * (22 + t * 18));
          ctx.rotate(a);
          ctx.fillStyle = i % 2 ? slate : jade;
          ctx.beginPath();
          ctx.moveTo(0, -spread * 0.45);
          ctx.lineTo(len, 0);
          ctx.lineTo(0, spread * 0.45);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
        ctx.restore();
        ef.life--;
      } else if (ef.type === "kinich_skill_cast") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.globalAlpha=1-t;ctx.strokeStyle="#5F8B62";ctx.shadowColor="#5F8B62";ctx.shadowBlur=0;ctx.lineWidth=3;ctx.setLineDash([5,5]);ctx.beginPath();ctx.arc(ef.x,ef.y,18+t*18,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);ctx.restore();ef.life--;
      } else if (ef.type === "kinich_charge_start") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.translate(ef.x,ef.y);ctx.rotate(t*3);ctx.strokeStyle="#C49A4A";ctx.shadowColor="#C49A4A";ctx.shadowBlur=0;ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,16+t*30,0,Math.PI*1.7);ctx.stroke();ctx.restore();ef.life--;
      } else if (ef.type === "kinich_charge_fire") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.globalAlpha=1-t;ctx.strokeStyle="#C49A4A";ctx.shadowColor="#C49A4A";ctx.shadowBlur=0;ctx.lineWidth=5;ctx.strokeRect(ef.x-18,ef.y-18,36,36);ctx.strokeStyle="#8BAE66";ctx.lineWidth=2;ctx.strokeRect(ef.x-11,ef.y-11,22,22);ctx.restore();ef.life--;
      } else if (ef.type === "kinich_ult_charge") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.globalAlpha=.95*(ef.life/ef.maxLife);const r=18+t*60;ctx.strokeStyle="#5F8B62";ctx.shadowColor="#5F8B62";ctx.shadowBlur=0;ctx.lineWidth=6;ctx.beginPath();ctx.arc(ef.x,ef.y,r,0,Math.PI*2);ctx.stroke();ctx.strokeStyle="#FFB347";ctx.lineWidth=3;ctx.beginPath();ctx.arc(ef.x,ef.y,r*.62,t*2,t*2+Math.PI*1.5);ctx.stroke();ctx.restore();ef.life--;
      } else if (ef.type === "kinich_ult_summon") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.globalAlpha=(1-t)*.9;ctx.strokeStyle="#8BAE66";ctx.shadowColor="#5F8B62";ctx.shadowBlur=0;ctx.lineWidth=4;ctx.beginPath();ctx.arc(ef.x,ef.y,24+t*68,0,Math.PI*2);ctx.stroke();ctx.restore();ef.life--;
      } else if (ef.type === "kinich_ult_final_charge") {const t=1-ef.life/ef.maxLife,tx=ef.target&&ef.target.hp>0?ef.target.x:ef.x,ty=ef.target&&ef.target.hp>0?ef.target.y:ef.y;ctx.save();ctx.globalCompositeOperation="lighter";ctx.strokeStyle="#C49A4A";ctx.shadowColor="#C49A4A";ctx.shadowBlur=0;ctx.lineWidth=5;ctx.beginPath();ctx.arc(tx,ty,20+t*45,0,Math.PI*2);ctx.stroke();ctx.restore();ef.life--;
      } else if (ef.type === "kinich_ult_shot_impact") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.globalAlpha=1-t;ctx.strokeStyle="#8BAE66";ctx.shadowColor="#5F8B62";ctx.shadowBlur=0;ctx.lineWidth=3;ctx.beginPath();ctx.arc(ef.x,ef.y,10+t*26,0,Math.PI*2);ctx.stroke();ctx.restore();ef.life--;
      } else if (ef.type === "kinich_ult_final_impact") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.globalAlpha=1-t;ctx.strokeStyle="#C49A4A";ctx.shadowColor="#C49A4A";ctx.shadowBlur=0;ctx.lineWidth=8;ctx.beginPath();ctx.arc(ef.x,ef.y,18+t*82,0,Math.PI*2);ctx.stroke();ctx.strokeStyle="#8BAE66";ctx.lineWidth=3;ctx.beginPath();ctx.arc(ef.x,ef.y,10+t*48,0,Math.PI*2);ctx.stroke();ctx.restore();ef.life--;
      } else if (ef.type === "kinich_spiker_hit") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.fillStyle=ef.big?"rgba(196,154,74,.18)":"rgba(95,139,98,.18)";ctx.shadowColor=ef.big?"#C49A4A":"#5F8B62";ctx.shadowBlur=0;ctx.beginPath();ctx.arc(ef.x,ef.y,(ef.big?18:10)+t*(ef.big?46:28),0,Math.PI*2);ctx.fill();ctx.restore();ef.life--;
      } else if (ef.type === "kinich_grapple_hit") {const t=1-ef.life/ef.maxLife;ctx.save();ctx.globalCompositeOperation="lighter";ctx.strokeStyle="#5F8B62";ctx.shadowColor="#5F8B62";ctx.shadowBlur=0;ctx.lineWidth=4;ctx.beginPath();ctx.arc(ef.x,ef.y,8+t*30,0,Math.PI*2);ctx.stroke();ctx.restore();ef.life--;
      } else if (ef.type === "heart_refuse") {
        ctx.save();
        let progress = 1 - ef.life / ef.maxLife;
        ctx.translate(ef.x, ef.y);
        ctx.scale(1.3, 1.3);
        if (progress < 0.6) {
          let offset = (1 - progress / 0.6) * 24;
          ctx.save();
          ctx.translate(-offset, 0);
          ctx.fillStyle = "#e74c3c";
          ctx.beginPath();
          ctx.moveTo(0, 12);
          ctx.bezierCurveTo(-12, 2, -14, -10, -7, -10);
          ctx.bezierCurveTo(-2, -10, 0, -5, 0, -3);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
          ctx.save();
          ctx.translate(offset, 0);
          ctx.fillStyle = "#e74c3c";
          ctx.beginPath();
          ctx.moveTo(0, 12);
          ctx.bezierCurveTo(12, 2, 14, -10, 7, -10);
          ctx.bezierCurveTo(2, -10, 0, -5, 0, -3);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        } else {
          let pulse = Math.sin((progress - 0.6) * 12) * 0.25 + 1;
          ctx.scale(pulse, pulse);
          ctx.fillStyle = Math.floor(ef.life / 3) % 2 === 0 ? "#ffffff" : "#e74c3c";
          ctx.beginPath();
          ctx.moveTo(0, 12);
          ctx.bezierCurveTo(-14, 2, -16, -10, -8, -10);
          ctx.bezierCurveTo(-3, -10, 0, -5, 0, -3);
          ctx.bezierCurveTo(0, -5, 3, -10, 8, -10);
          ctx.bezierCurveTo(16, -10, 14, 2, 0, 12);
          ctx.fill();
        }
        ctx.restore();
        ef.life--;
      } else {
        /* PERBAIKAN: Rendering Teks Melayang dengan Outline Hitam */
        ctx.save();
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        let drawY = ef.y - (30 - ef.life);

        // Teks tanpa outline agar lebih nyaman dilihat.
        // Isi warna teks utama
        ctx.fillStyle = ef.color;
        ctx.fillText(ef.text, ef.x, drawY);
        ctx.restore();

        ef.life--;
      }
      if (ef.life <= 0) effects.splice(i, 1);
    }

    updateUI();
    if (gameState === "playing") {
      let team1Alive = balls.some((b) => b.team === 1 && !b.isAdeptusLotus);
      let team2Alive = balls.some((b) => b.team === 2 && !b.isAdeptusLotus);
      if (!team1Alive || !team2Alive) {
        gameState = "over";
        let winner = team1Alive ? p1Choice : p2Choice;
        showWinnerOverlay(winner);
      }
    }
  }
  requestAnimationFrame(gameLoop);
}

function showWinnerOverlay(winnerName) {
  document.getElementById("winner-subtitle").innerText = winnerName.toUpperCase() + " WINS!";
  document.getElementById("winner-overlay").style.display = "flex";
}

function resetToMenu() {
  document.getElementById("winner-overlay").style.display = "none";
  document.getElementById("game-container").style.display = "none";
  document.getElementById("map-screen").style.display = "none";

  // Let responsive CSS choose the correct selection layout.
  const selectionScreen = document.getElementById("selection-screen");
  selectionScreen.style.display = "";
  document.querySelectorAll("#p1-roster, #p2-roster").forEach((roster) => {
    roster.scrollTop = 0;
  });
  projectiles = [];
  kinichSkills = [];
  adeptusSkills = [];
  bloodchainSkills = [];
  infinitySkills = [];
  soundTraps = [];
  scatteredSwords = [];
  tyrantPortals = [];
  tyrantSwords = [];
  killerQueenSkills = [];
  gameState = "menu";
}

function drawThumbnail(canvasEl, charName) {
  let tCtx = canvasEl.getContext("2d");
  let w = canvasEl.width, h = canvasEl.height;
  let stats = characterDB[charName];
  tCtx.clearRect(0, 0, w, h);

  tCtx.beginPath();
  tCtx.arc(w / 2, h / 2, w * 0.35, 0, Math.PI * 2);
  tCtx.fillStyle = charName === "Death Note" || charName === "Antimagic" ? "#111" : "#fff";
  tCtx.fill();
  tCtx.lineWidth = 3;
  tCtx.strokeStyle = stats.color;
  tCtx.stroke();

  if (charName === "Adeptus") {
    const cx = w / 2, cy = h / 2;
    tCtx.save();
    tCtx.translate(cx, cy);
    tCtx.imageSmoothingEnabled = false;

    // Keep the same white-ball silhouette as the rest of the roster.
    const pulse = 1 + Math.sin(Date.now() * 0.006) * 0.05;
    tCtx.globalCompositeOperation = "lighter";
    tCtx.strokeStyle = "rgba(124,203,255,.72)";
    tCtx.shadowColor = "#7CCBFF";
    tCtx.shadowBlur = 10;
    tCtx.lineWidth = 2;
    tCtx.setLineDash([4, 3]);
    tCtx.beginPath();
    tCtx.arc(0, 0, w * 0.42 * pulse, 0, Math.PI * 2);
    tCtx.stroke();
    tCtx.setLineDash([]);

    // Cryo shards / aura petals.
    for (let i = 0; i < 6; i++) {
      const a = i * Math.PI / 3 + Date.now() * 0.0006;
      const rr = w * 0.43;
      const px = Math.cos(a) * rr, py = Math.sin(a) * rr;
      tCtx.save();
      tCtx.translate(px, py);
      tCtx.rotate(a + Math.PI / 2);
      tCtx.fillStyle = i % 2 ? "#BFEAFF" : "#E8FAFF";
      tCtx.strokeStyle = "#6EBEFF";
      tCtx.lineWidth = 1;
      tCtx.beginPath();
      tCtx.moveTo(0, -4); tCtx.lineTo(3, 0); tCtx.lineTo(0, 4); tCtx.lineTo(-3, 0);
      tCtx.closePath();
      tCtx.fill(); tCtx.stroke();
      tCtx.restore();
    }

    // Signature bow remains, because the character is still an archer.
    tCtx.strokeStyle = "#4E8FB7";
    tCtx.shadowColor = "#7CCBFF";
    tCtx.shadowBlur = 6;
    tCtx.lineWidth = 3;
    tCtx.beginPath(); tCtx.arc(10, 0, 20, -1.18, 1.18); tCtx.stroke();
    tCtx.strokeStyle = "#E8FAFF";
    tCtx.lineWidth = 1.4;
    tCtx.beginPath(); tCtx.moveTo(18, -19); tCtx.lineTo(18, 19); tCtx.stroke();
    tCtx.beginPath(); tCtx.moveTo(-2, 0); tCtx.lineTo(29, 0); tCtx.stroke();

    tCtx.restore();
  } else if (charName === "Yaksha") {
    const cx = w / 2, cy = h / 2;
    tCtx.save();
    tCtx.translate(cx, cy);
    tCtx.imageSmoothingEnabled = false;

    // Restrained jade aura; no neon bloom.
    tCtx.strokeStyle = "rgba(78,122,99,.78)";
    tCtx.lineWidth = 2;
    tCtx.beginPath(); tCtx.arc(0, 0, w * 0.41, 0, Math.PI * 2); tCtx.stroke();
    tCtx.strokeStyle = "rgba(63,142,133,.62)";
    tCtx.lineWidth = 1;
    tCtx.setLineDash([3, 3]);
    tCtx.beginPath(); tCtx.arc(0, 0, w * 0.34, 0.25, Math.PI * 1.45); tCtx.stroke();
    tCtx.setLineDash([]);

    const ang = 0.42;
    const ux = Math.cos(ang), uy = Math.sin(ang), px = -uy, py = ux;
    const end = { x: w * 0.47, y: h * 0.47 * Math.sin(ang) / Math.max(0.01, Math.cos(ang)) };

    // Compact jade/gold polearm silhouette matching the in-game renderer.
    tCtx.rotate(ang);
    tCtx.lineCap = "round";
    tCtx.strokeStyle = "#18352D"; tCtx.lineWidth = 4.2;
    tCtx.beginPath(); tCtx.moveTo(-3, 0); tCtx.lineTo(w * 0.31, 0); tCtx.stroke();
    tCtx.strokeStyle = "#4E7A63"; tCtx.lineWidth = 2.8;
    tCtx.beginPath(); tCtx.moveTo(-3, 0); tCtx.lineTo(w * 0.31, 0); tCtx.stroke();

    for (const d of [8, 14]) {
      tCtx.strokeStyle = "#3F8E85"; tCtx.lineWidth = 1;
      tCtx.beginPath(); tCtx.moveTo(d - 1, -2.5); tCtx.lineTo(d + 1, 2.5); tCtx.stroke();
    }

    const bX = w * 0.29, tipX = w * 0.49;
    tCtx.strokeStyle = "#2F6F67"; tCtx.lineWidth = 2.2;
    tCtx.beginPath(); tCtx.moveTo(bX - 2, -5); tCtx.lineTo(bX - 2, 5); tCtx.stroke();

    tCtx.fillStyle = "#4E7A63";
    tCtx.beginPath();
    tCtx.moveTo(tipX, 0);
    tCtx.quadraticCurveTo(bX - 5, -5.5, bX - 11, -2.5);
    tCtx.quadraticCurveTo(bX - 8, 0, bX - 11, 2.5);
    tCtx.quadraticCurveTo(bX - 5, 5.5, tipX, 0);
    tCtx.closePath(); tCtx.fill();
    tCtx.strokeStyle = "#254A3D"; tCtx.lineWidth = 1; tCtx.stroke();

    tCtx.strokeStyle = "#6BC1B4"; tCtx.lineWidth = 1;
    tCtx.beginPath(); tCtx.moveTo(bX - 3, 0); tCtx.lineTo(tipX - 4, 0); tCtx.stroke();

    tCtx.restore();
  } else if (charName === "Kinich") { tCtx.save(); tCtx.globalCompositeOperation="source-over"; tCtx.strokeStyle="rgba(95,139,98,.78)"; tCtx.lineWidth=2; tCtx.beginPath(); tCtx.arc(w/2,h/2,w*.40,0,Math.PI*2); tCtx.stroke(); tCtx.translate(w/2,h/2); tCtx.rotate(.45); tCtx.imageSmoothingEnabled=false; tCtx.fillStyle="#203A34"; tCtx.fillRect(-14,-5,28,10); tCtx.fillStyle="#5F8B62"; tCtx.fillRect(-10,-3,22,6); tCtx.fillStyle="#C49A4A"; tCtx.fillRect(7,-2,4,4); tCtx.restore();
  } else if (stats.weapons > 0) {
    const ang = 0.4;
    const cx = w / 2, cy = h / 2;
    const ex = cx + Math.cos(ang) * (w * 0.42);
    const ey = cy + Math.sin(ang) * (h * 0.42);

    if (charName === "Funeral") {
      const ux = Math.cos(ang), uy = Math.sin(ang), px = -uy, py = ux;
      const tipX = ex + ux * 5, tipY = ey + uy * 5;
      const baseX = ex - ux * 5, baseY = ey - uy * 5;
      tCtx.save();
      tCtx.lineCap = "round"; tCtx.shadowColor = "#8f1725"; tCtx.shadowBlur = 6;
      tCtx.strokeStyle = "#3b080f"; tCtx.lineWidth = 3.8;
      tCtx.beginPath(); tCtx.moveTo(cx, cy); tCtx.lineTo(baseX, baseY); tCtx.stroke();
      tCtx.strokeStyle = "#8f1725"; tCtx.lineWidth = 2.1;
      tCtx.beginPath(); tCtx.moveTo(cx, cy); tCtx.lineTo(baseX, baseY); tCtx.stroke();
      tCtx.strokeStyle = "#e0a84b"; tCtx.lineWidth = 1.8;
      tCtx.beginPath(); tCtx.moveTo(ex - ux * 6 - px * 2.5, ey - uy * 6 - py * 2.5); tCtx.lineTo(ex - ux * 6 + px * 2.5, ey - uy * 6 + py * 2.5); tCtx.stroke();
      tCtx.fillStyle = "#b51f2e";
      tCtx.beginPath();
      tCtx.moveTo(tipX, tipY);
      tCtx.quadraticCurveTo(ex - ux * 2 + px * 4, ey - uy * 2 + py * 4, ex - ux * 4 + px * 3, ey - uy * 4 + py * 3);
      tCtx.quadraticCurveTo(ex - ux * 5, ey - uy * 5, ex - ux * 4 - px * 3, ey - uy * 4 - py * 3);
      tCtx.quadraticCurveTo(ex - ux * 2 - px * 4, ey - uy * 2 - py * 4, tipX, tipY);
      tCtx.closePath(); tCtx.fill();
      tCtx.strokeStyle = "#5f0b14"; tCtx.lineWidth = 1; tCtx.stroke();
      tCtx.strokeStyle = "#efc36b"; tCtx.lineWidth = 1;
      tCtx.beginPath(); tCtx.moveTo(ex - ux * 3, ey - uy * 3); tCtx.lineTo(tipX - ux * 1, tipY - uy * 1); tCtx.stroke();
      tCtx.restore();
    } else {
      tCtx.strokeStyle = stats.color;
      tCtx.lineWidth = 2.5;
      tCtx.beginPath();
      tCtx.moveTo(cx, cy);
      tCtx.lineTo(ex, ey);
      tCtx.stroke();
    }
  }
}

function renderRosters() {
  const p1Roster = document.getElementById("p1-roster");
  const p2Roster = document.getElementById("p2-roster");
  p1Roster.innerHTML = "";
  p2Roster.innerHTML = "";

  Object.keys(characterDB).forEach((charName) => {
    let card1 = document.createElement("div");
    card1.className = `char-card ${p1Choice === charName ? "selected-p1" : ""}`;
    card1.innerHTML = `<canvas class="card-canvas" width="38" height="38"></canvas><div class="card-name">${charName}</div>`;
    card1.onclick = () => selectCharacter(1, charName);
    p1Roster.appendChild(card1);
    drawThumbnail(card1.querySelector("canvas"), charName);

    let card2 = document.createElement("div");
    card2.className = `char-card ${p2Choice === charName ? "selected-p2" : ""}`;
    card2.innerHTML = `<canvas class="card-canvas" width="38" height="38"></canvas><div class="card-name">${charName}</div>`;
    card2.onclick = () => selectCharacter(2, charName);
    p2Roster.appendChild(card2);
    drawThumbnail(card2.querySelector("canvas"), charName);
  });

  updatePreviewCard(1, p1Choice);
  updatePreviewCard(2, p2Choice);
}

function selectCharacter(playerNum, charName) {
  if (playerNum === 1) p1Choice = charName;
  else p2Choice = charName;
  renderRosters();
}

function updatePreviewCard(playerNum, charName) {
  const canvasEl = document.getElementById(`p${playerNum}-preview-canvas`);
  const nameEl = document.getElementById(`p${playerNum}-preview-name`);
  const descEl = document.getElementById(`p${playerNum}-preview-desc`);

  nameEl.innerText = charName.toUpperCase();
  nameEl.style.color = characterDB[charName].color;
  descEl.innerText = characterDB[charName].desc;
  drawThumbnail(canvasEl, charName);
}

function confirmStartGame() {
  document.getElementById("selection-screen").style.display = "none";
  document.getElementById("map-screen").style.display = "none";
  document.getElementById("game-container").style.display = "flex";
  
  applyMapUITheme();
  setupGame();
}

function setupGame() {
  ["1", "2"].forEach((id) => {
    let choice = id === "1" ? p1Choice : p2Choice;
    let nameEl = document.getElementById("name" + id);
    
    nameEl.innerText = choice;
    nameEl.style.color = characterDB[choice].color;
    nameEl.style.textShadow = "none";

    document.getElementById("barFill" + id).style.backgroundColor = characterDB[choice].ultColor;
    document.getElementById("ultName" + id).innerText = characterDB[choice].ultName;
  });

  balls = [];
  projectiles = [];
  kinichSkills = [];
  adeptusSkills = [];
  bloodchainSkills = [];
  infinitySkills = [];
  soundTraps = [];
  scatteredSwords = [];
  tyrantPortals = [];
  tyrantSwords = [];
  killerQueenSkills = [];
  balls.push(new Ball(1, p1Choice, canvas.width * 0.25, canvas.height / 2));
  balls.push(new Ball(2, p2Choice, canvas.width * 0.75, canvas.height / 2));

  gameState = "countdown";
  // Keep exactly one animation loop alive across restarts.
  if (!gameLoopStarted) {
    gameLoopStarted = true;
    requestAnimationFrame(gameLoop);
  }

  setTimeout(() => {
    gameState = "playing";
    balls.forEach((b) => {
      let ang = Math.random() * Math.PI * 2;
      b.vx = Math.cos(ang) * b.baseSpeed;
      b.vy = Math.sin(ang) * b.baseSpeed;
    });
  }, 3000);
}

function applyYakshaFavicon() {
  // Reuse the exact same Yaksha thumbnail artwork shown in the character roster.
  const iconCanvas = document.createElement("canvas");
  iconCanvas.width = 64;
  iconCanvas.height = 64;
  drawThumbnail(iconCanvas, "Yaksha");
  const iconUrl = iconCanvas.toDataURL("image/png");

  const favicon = document.getElementById("game-favicon");
  const touchIcon = document.getElementById("game-touch-icon");
  if (favicon) favicon.href = iconUrl;
  if (touchIcon) touchIcon.href = iconUrl;
}

window.onload = () => {
  renderRosters();
  applyYakshaFavicon();
};