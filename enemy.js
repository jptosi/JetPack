// Variables
const enemyImg = new Image();
enemyImg.src = './assets/spritesEnemy.png'
const spriteWidth = 120;
const spriteHeight = 64;
let enemies = [];

class Enemy {
    constructor(minY, maxY ){
        this.enemyFrame = getRandomInt(0, 5);
        this.x = canvas.width;
        this.y = getRandomInt(minY, maxY, 0);
        console.log(this.y);
        this.speedx = Math.random() + 1;
        this.frameImg = 0;
        this.onScreen = true;
    }

    update(){
        this.x -= this.speedx;
        // check if enemies are out of screen
        if (this.x < -spriteWidth){
            this.onScreen = false;
        }
        // calculate image frame - animation enemy
        if(frames % 10 === 0){
            this.frameImg += spriteWidth;
            if(this.frameImg > spriteWidth * 3){
                this.frameImg = 0;
            }
        }
    }

    draw(){
        ctx.drawImage(enemyImg, this.frameImg, this.enemyFrame * spriteHeight, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
    }
}

function enemieSpaw(){
    if(frames % 200 === 0){
    enemies.push(enemy = new Enemy(spriteHeight * 1.5, spriteHeight * 4));
    enemies.push(enemy = new Enemy(spriteHeight * 4, spriteHeight * 6.5));
    enemies.push(enemy = new Enemy(spriteHeight * 6.5 , spriteHeight * 9));
    }
}
