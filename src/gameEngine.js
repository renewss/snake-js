import Game from "./game.js";

// Initializing game Constants
const ROWS = 80;
const COLUMNS = 50;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

//*******************************************
let game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);


function gameLoop(){
    game.draw();

    if(game.menu.code === 0){//Game Running instance
        game.snake.move(); 

        //collision detection
        if(game.snake.collision()) game.menu.code = 3;

        //apple eaten
        if(game.apple.x === game.snake.body[0].x && game.apple.y === game.snake.body[0].y){
            game.updateApple();
            game.snake.increase();
            game.score++;
        }

    }

    //requestAnimationFrame(gameLoop);
    setTimeout(gameLoop, 100);
}
gameLoop();

export default function resetGame(){
    game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);
    game.menu.code = 0;
}
































