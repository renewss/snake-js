import Snake from "./snakeClass.js";
import Menu from "./menu.js";
import InputHandler from "./inputHandler.js";
import Apple from "./apple.js";



export default class Game{
    constructor(GAME_WIDTH, GAME_HEIGHT, ctx){
        this.GAME_WIDTH = GAME_WIDTH; 
        this.GAME_HEIGHT = GAME_HEIGHT;
        this.ctx = ctx;

        this.apple = new Apple(this.GAME_WIDTH, this.GAME_HEIGHT, this.ctx);
        this.score = 0;

        this.snake = new Snake(this.GAME_WIDTH, this.GAME_HEIGHT, this.ctx);
        this.menu = new Menu(this);
        
        new InputHandler(this);
    }

    draw(){
        this.ctx.clearRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);
        this.snake.draw();
        this.apple.draw();

        this.ctx.fillSyle = "rgb(0, 0, 0)";
        this.ctx.font = "15px sans-serif";
        this.ctx.fillText("Score:" + this.score, 10, 20);

        this.menu.draw();
    }

    updateApple(){
        this.apple = new Apple(this.GAME_WIDTH, this.GAME_HEIGHT, this.ctx);
    }
}
