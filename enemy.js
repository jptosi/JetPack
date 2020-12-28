// Variables
const enemyImg = new Image();
enemyImg.src = './assets/spritesEnemy.png'
const spriteWidth = 120;
const spriteHeight = 64;
let enemies = [];

class Enemy {
    constructor(enemyFrame = 0, minY, maxY ){
        this.enemyFrame = enemyFrame;
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
    if(frames % 300 === 0){
    enemies.push(enemy = new Enemy(1,spriteHeight * 1.5, spriteHeight * 3));
    enemies.push(enemy = new Enemy(2,spriteHeight * 4.5, spriteHeight * 6));
    enemies.push(enemy = new Enemy(3,spriteHeight * 7.5, spriteHeight * 9));
    }
}
