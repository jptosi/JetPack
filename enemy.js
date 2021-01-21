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
        this.speedx = Math.random() + 1;
        this.frameImg = 0;
        this.onScreen = true;
        this.isCollisional = true;
        this.isHit = false;
    }

    update(){
        this.x -= this.speedx;
        // check if enemies are out of screen
        if (this.x < -spriteWidth){
            this.onScreen = false;
        }
        if(this.isCollisional === true && player.lives > 0){
            this.checkColission();
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
        //ctx.strokeRect(this.x, this.y, spriteHeight, spriteHeight);
    }

    checkColission(){
        if(this.x < player.x + spriteSize - boundingbox &&
            this.x + spriteHeight > player.x + boundingbox &&
            this.y < player.y + spriteSize - boundingbox &&
            spriteHeight + this.y > player.y + boundingbox
            ) {
                player.isHit = true;
                player.lives = player.lives - 1;
                this.isCollisional = false;
            }
    }
}

function enemieSpaw(){
    if(frames % 200 === 0){
    enemies.push(enemy = new Enemy(spriteHeight * 1.5, spriteHeight * 4));
    enemies.push(enemy = new Enemy(spriteHeight * 4, spriteHeight * 6.5));
    enemies.push(enemy = new Enemy(spriteHeight * 6.5 , spriteHeight * 9));
    }
}
