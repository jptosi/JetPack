/**
    Control commande
**/
function keyDown(event) {
    if (event.keyCode == 38) {
        keyBoost = true;
    }
}

function keyUp(event) {
    if (event.keyCode == 38) {
        keyBoost = false;
    }
}


/** Background class
    img : image - speedX : horizontal speed
    imgWidth : Width - imgHeight : height
**/

const Backgrounds =['bg1_1.png', 'bg1_2.png',
                    'bg2_1.png', 'bg2_2.png',
                    'bg3_1.png', 'bg3_2.png',
                    'bg4_1.png', 'bg4_2.png'];

class Background {
    constructor(img, speedX, imgWidth = 1345, imgHeight = 640){
        this.bgImg = new Image();
        this.bgImg.src = './assets/bg/' + img;
        this.bgWidth = imgWidth;
        this.bgHeight = imgHeight;
        this.speedX = speedX;
        this.x = 0;
        this.y = 0;
    }

    update(){
        if (this.x <= -this.bgImg.width){
            this.x = 0;
        }
        this.x -= this.speedX;
    }

    draw(){
        ctx.drawImage(this.bgImg, this.x, 0, this.bgWidth, this.bgHeight);
        ctx.drawImage(this.bgImg, this.x + this.bgWidth, 0, this.bgWidth, this.bgHeight);
    }

}
