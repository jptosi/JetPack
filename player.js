// Variables
const playerImg = new Image();
playerImg.src = './assets/spritesPlayer.png'
const spriteSize = 64;
const smokeFrame = 4;
let keyBoost = false;

class Player {
    constructor(playerFrame = 0, px = 75, py = canvas.height/2){
        this.playerFrame = playerFrame;
        this.x = px;
        this.y = py;
        this.gravity = 1;
        this.isJetOn = false;
        this.frameImg = 0;
        this.isHit = false;
    }

    update(){
        if(keyBoost === true && this.y > 64 ){
            this.isJetOn = true;
            this.y -= this.gravity;
        } else if (this.y === canvas.height - spriteSize){
            this.y += 0;
        } else {
            this.isJetOn = false;
            this.y += this.gravity;
        }

        if(this.isHit === true){
            this.isHit = false;
        }

        // calculate image frame - animation player
        if(frames % 10 === 0){
            this.frameImg += spriteSize;
            if(this.frameImg > spriteSize * 3){
                this.frameImg = 0;
            }
        }
    }


    draw(){
        // player
        ctx.drawImage(playerImg, this.frameImg, this.playerFrame * spriteSize, spriteSize, spriteSize, this.x, this.y, spriteSize, spriteSize);

        // smoke
        if(this.isJetOn){
            ctx.drawImage(playerImg, this.frameImg, smokeFrame * spriteSize, spriteSize, spriteSize, this.x - 8 , this.y + 56, spriteSize / 2, spriteSize / 2);
        }
    }
}