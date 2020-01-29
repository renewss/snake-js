import resetGame from "./gameEngine.js";

export default class InputHandler{
    constructor(game){
        this.game = game;

        document.addEventListener("keydown", event => {
            switch(event.key){
                case 'a':
                case 'A':
                case 'ArrowLeft':
                    this.game.snake.turnQueue.push(this.game.snake.direction.LEFT);
                    break;
                case 'w':
                case 'W':
                case 'ArrowUp':
                    this.game.snake.turnQueue.push(this.game.snake.direction.TOP);
                    break;
                case 'd':
                case 'D':
                case 'ArrowRight':
                    this.game.snake.turnQueue.push(this.game.snake.direction.RIGHT);
                    break;
                case 's':
                case 'S':
                case 'ArrowDown':
                    this.game.snake.turnQueue.push(this.game.snake.direction.BOTTOM);
                    break;
                case ' ':
                    if(this.game.menu.code === 1) this.game.menu.code = 0;
                    else if(this.game.menu.code === 3) resetGame();
                    break;
                case 'Escape':
                    if(this.game.menu.code === 0) this.game.menu.code = 2;
                    else if(this.game.menu.code === 2) this.game.menu.code = 0;
                default:
                    break;
            }
        })
    }
}