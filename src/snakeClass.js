import dcf from "./deepCopy.js";


export default class Snake{

    constructor(GAME_WIDTH, GAME_HEIGHT, ctx, apple){
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;

        this.size = 20; // width and height of the each part of the snake || also used as unit speed of snake movement
        this.ctx = ctx;
        this.apple = apple;

        this.speed = { x:this.size, y:0};
        this.direction = {
            TOP : {x : 0,  y : -this.size},
            RIGHT : { x : this.size, y : 0},
            BOTTOM : { x : 0, y : this.size},
            LEFT : { x : -this.size, y : 0},
        }

        this.turnQueue = new Array();

        this.headRightImg = document.getElementById("snakeHeadRight-image");
        this.headLeftImg = document.getElementById("snakeHeadLeft-image");
        this.headUpImg = document.getElementById("snakeHeadUp-image");
        this.headDownImg = document.getElementById("snakeHeadDown-image");
        this.bodyImg = document.getElementById("snakeBody-image");


        this.body = new Array(1);
        this.body[0] = {x:400, y:200};
        for(let i=1; i<this.body.length; i++){
            this.body[i] = {x: 400 - this.size*i, y: 200};
        }

        this.bodyPrev = new Array(1); //array to store previous position of body parts
        for(let i=0; i<this.bodyPrev.length; i++){
            this.bodyPrev[i] = {x: 400 - i*this.size, y: 200};
        }
    }

    move(){
        //turning
        if(this.turnQueue.length !== 0){
            this.turn(this.turnQueue.shift());
        }

        //movement of the part of body except head
        for(let i=1; i<this.body.length; i++){
            this.body[i] = this.bodyPrev[i-1];
        }
        
        //movement of the head
        this.body[0].x += this.speed.x;
        this.body[0].y += this.speed.y;

        
        if(this.body[0].x + this.size > this.GAME_WIDTH) this.body[0].x = 0;
        if(this.body[0].x < 0) this.body[0].x = this.GAME_WIDTH;
        if(this.body[0].y + this.size > this.GAME_HEIGHT) this.body[0].y = 0;
        if(this.body[0].y < 0) this.body[0].y = this.GAME_HEIGHT;

        
        this.bodyPrev = dcf(this.body);
    }

    turn(DIR){
        if(this.speed.x == - DIR.x || this.speed.y == -DIR.y) return;
        this.speed.x = DIR.x;
        this.speed.y = DIR.y;

    }

    draw(){
        //drawing head
        if(this.speed.x === this.size) 
            this.ctx.drawImage(this.headRightImg, this.body[0].x, this.body[0].y, this.size, this.size);
        else if(this.speed.x === -this.size)
            this.ctx.drawImage(this.headLeftImg, this.body[0].x, this.body[0].y, this.size, this.size);
        else if(this.speed.y === this.size)
            this.ctx.drawImage(this.headDownImg, this.body[0].x, this.body[0].y, this.size, this.size);
        else if(this.speed.y === -this.size)
            this.ctx.drawImage(this.headUpImg, this.body[0].x, this.body[0].y, this.size, this.size);

        //drawing body
        for(let i=1; i<this.body.length; i++){
            this.ctx.drawImage(this.bodyImg, this.body[i].x, this.body[i].y, this.size, this.size);
        }
    }

    collision(){
        for(let i=2; i<this.body.length; i++){
            if(this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y)
            {
                return true;
            }
        }
        return false;
    }

    increase(){   
        this.bodyPrev.push({x: this.body[this.body.length-1].x, y: this.body[this.body.length-1].y});
        this.body.push({x: -100, y: -100});
    }
}