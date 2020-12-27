// Variables
const enemyImg = new Image();
enemyImg.src = './assets/spritesEnemy.png'
const spriteWidth = 120;
const spriteHeight = 64;
let enemies = [];

class Enemy {
    constructor(enemyFrame = 0, corridor ){
        this.enemyFrame = enemyFrame;
        this.x = canvas.width;
        this.y = (Math.floor(Math.random() * 2 ) + corridor) * spriteHeight ;
        console.log(corridor + " : " + this.y);
        this.speedx = Math.random() + 1;
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

function enemieSpaw(){
    if(frames % 300 === 0){
    enemies.push(enemy = new Enemy(1,1));
    enemies.push(enemy = new Enemy(2,4));
    enemies.push(enemy = new Enemy(3,7));
    }
}
