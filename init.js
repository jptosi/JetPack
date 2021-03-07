// Player image
const playerImg = new Image();
playerImg.src = './assets/spritesPlayer.png';
// Ennemy image
const enemyImg = new Image();
enemyImg.src = './assets/spritesEnemy.png';
// Bullet image
const bulletImg = new Image();
bulletImg.src = './assets/bullets.png';

const assetsPath = "./assets/";

const allImages = {
    playerImg : spritesPlayer.png,
    enemyImg  : spritesEnemy.png,
    bulletImg : bullets.png,
}

const images = {};
images[allImages[0][0]] = new Image(assetsPath + allImages[0][1]);
//Ça te crée des propriétés auxquelles tu pourras accéder via mesVariables.firstImg ou mesVariables["firstImg"].
