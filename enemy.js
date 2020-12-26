// Variables
const enemyImg = new Image();
enemyImg.src = './assets/spritesEnemy.png'
const spriteWidth = 120;
const spriteHeight = 64;

class Enemy {
    constructor(enemyFrame = 0, ex = canvas.width, ey = 100){
        this.enemyFrame = enemyFrame;
        this.x = ex;
        this.y = ey;
        this.speedx = 1;
        this.frameImg = 0;
    }

    update(){
        this.x -= this.speedx;

        // calculate image frame - animation enemy
        if(frames % 10 === 0){
            this.frameImg += spriteWidth;
            if(this.frameImg > spriteWidth * 3){
                this.frameImg = 0;
            }
        }

    }

    draw(){
        // en
        ctx.drawImage(enemyImg, this.frameImg, this.enemyFrame * spriteHeight, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
    }
}

