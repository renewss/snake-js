export default class Apple{

    constructor(GAME_WIDTH, GAME_HEIGHT, ctx){
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;
        this.size = 20;
        this.ctx = ctx;

        this.img = document.getElementById("apple-image");

        //generating in random position
        this.x = Math.round(Math.round(Math.random()*(this.GAME_WIDTH - this.size))/this.size)*this.size;
        this.y = Math.round(Math.round(Math.random()*(this.GAME_HEIGHT - this.size))/this.size)*this.size;

        console.log(this.x, this.y);
    }

    draw(){
        this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);   
    }
}