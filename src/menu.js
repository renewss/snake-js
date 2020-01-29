export default class Menu{

    constructor(game){
        this.game = game;

        this.code = 1;
    }

    /*
    0 - Running
    1 - Main Menu
    2 - Pause
    3 - Game Over
    */
    draw(code = this.code){
        switch(code){
            case 1:
                this.game.ctx.fillStyle = "rgb(255, 255, 255)";
                this.game.ctx.fillRect(0, 0, this.game.GAME_WIDTH, this.game.GAME_HEIGHT);
                this.game.ctx.fillStyle = "rgb(0, 0, 0)";
                this.game.ctx.font = "30px  sans-serif";
                this.game.ctx.fillText("Press Spacebar to Start", (this.game.GAME_WIDTH - 300)/2, this.game.GAME_HEIGHT/2);
                break;
            case 2:
                this.game.ctx.fillStyle = "rgba(0, 0, 0, 50%)";
                this.game.ctx.fillRect(0, 0, this.game.GAME_WIDTH, this.game.GAME_HEIGHT);
                break;
            case 3:
                this.game.ctx.fillStyle = "rgb(0, 0, 0, 90%)";
                this.game.ctx.fillRect(0, 0, this.game.GAME_WIDTH, this.game.GAME_HEIGHT);
                this.game.ctx.fillStyle = "rgb(255, 255, 255)";
                this.game.ctx.font = "60px  sans-serif";
                this.game.ctx.fillText("Game Over", (this.game.GAME_WIDTH - 330)/2, (this.game.GAME_HEIGHT - 50)/2);
                this.game.ctx.font = "30px sans-serif";
                this.game.ctx.fillText("Score:" + this.game.score, (this.game.GAME_WIDTH - 120)/2, (this.game.GAME_HEIGHT + 30)/2);
                break;
        }
    }

}