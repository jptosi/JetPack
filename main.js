// Init Variables
let frames = 0;
let keyBoost = false;
let playerChoice = 1;
let backgroundChoice = 3;
const state = {
    current: 0,
    Load : 0,
    game: 1,
    over:2
}

// init Canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 960;
canvas.height = 640;
ctx.font = "20pt Calibri,Geneva,Arial";
ctx.strokeStyle = "rgb(0,0,0)";
ctx.fillStyle = "rgb(0,20,180)";

// init keyboard control
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

// init Layers
let layers = [];
layers.push(new Background(Backgrounds[2 * backgroundChoice],0.05));
layers.push(new Background(Backgrounds[(2 * backgroundChoice) + 1],0.3));

// init Players
player = new Player(playerChoice);

// init Enemies
let enemies = [];
enemies.push(enemy = new Enemy());


// UPDATE
function update(){
    // background Update
    layers.forEach(layer => {
        layer.update();
    });

    // GUI Update

    // Player and Ennemies Update
    enemy.update();
    player.update();
}

// DRAW
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // background Draw
    layers.forEach(layer => {
        layer.draw();
    });

    // GUI Draw
    //ctx.strokeText("Exemple de texte", 100, 20);
    //ctx.fillText("Autre exemple", 100, 60);

    // Player and Ennemies Draw
    enemy.draw();
    player.draw();

}

// Game loop
function loop(){
    draw();
    update();
    frames++;
    requestAnimationFrame(loop);
}

loop();

