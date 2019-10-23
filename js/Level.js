/**
 * Created by RAZOR on 9/21/2016.
 */

var BBGame = BBGame || {};

BBGame.Level = {
    levels  :  [
            [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            ],
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],

            [
                [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
                [1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1],
                [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
                [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
                [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
                [1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
                [1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            ]

        ],
    BlockColors : ["rgba(0,1,0,.2)","#f44336","#4caf50","#ffc107"],
    currentLevel : 1,
    isComplet : false,
    currentLevelBlocks : null,
    getCurrentLevel : function(){
        return this.currentLevel;
    },

    getCurrentLevelBlocks : function(){
        if(this.currentLevelBlocks)
        {
            return this.currentLevelBlocks;
        }
        else
        {
         this.currentLevelBlocks = Utility.deepCopy(this.levels[this.getCurrentLevel() - 1]);
         return this.currentLevelBlocks;
        }

    },
    next : function(){
      this.currentLevel += 1;
      this.currentLevelBlocks = Utility.deepCopy(this.levels[this.getCurrentLevel() - 1]);
      BBGame.Variables.LEVEL = this.currentLevel;
    },
    reset : function(){
      this.currentLevelBlocks = null;
      this.currentLevel = 1;
    },
    generateCurrentLevelBlocks : function(){
        var blocks = this.getCurrentLevelBlocks();
        this.isComplet = true;
        for(var i = 0; i < blocks.length ; i++)
        {
            for(var j = 0; j < blocks[i].length; j++)
            {
                var value = blocks[i][j] !== 0 ? Utility.randomInt(1,this.BlockColors.length - 1) : blocks[i][j];

                    if(value){ this.isComplet = false; }

                    blocks[i][j] = new Brick(30,15,this.BlockColors[value],value,BBGame.Canvas.Stage);
                    blocks[i][j].setPosition(
                                              j*blocks[i][j].getWidth(),
                                              i*blocks[i][j].getHeight()
                    );

            }
        }
        this.currentLevelBlocks = blocks;
    },
    renderCurrentLevel : function(ctx){
        var blocks = this.getCurrentLevelBlocks();
        for(var i = 0; i < blocks.length ; i++)
        {
            for(var j = 0; j < blocks[i].length; j++)
            {
                if(!blocks[i][j].isBlank) {
                    blocks[i][j].render(ctx);
                }
            }
        }
    },
    checkBrickHit : function(ball){
        var blocks = this.getCurrentLevelBlocks();
        var ballpos = ball.getCurrentPosition();
        var isComplet = true;

        var circle={x:ballpos.x,y:ballpos.y,r:ball.getRadius()};

        for(var i = 0; i < blocks.length ; i++)
        {
            for(var j = 0; j < blocks[i].length; j++)
            {
                if(!blocks[i][j].isBlank) {
                    var bpos = blocks[i][j].getCurrentPosition();
                    var rect={x:bpos.x,y:bpos.y,w:blocks[i][j].getWidth(),h:blocks[i][j].getHeight()};

                    if(Utility.RectCircleColliding(circle,rect))
                    {

                        ball.vy = -ball.vy;

                        blocks[i][j].life--;
                        var c = blocks[i][j].color;
                        blocks[i][j].color = this.BlockColors[blocks[i][j].life];

                        if(blocks[i][j].life <= 0) {
                            blocks[i][j].isBlank = true;
                            BBGame.Explosion.createExplosion(rect.x,rect.y,c,rect.w/3,rect.w/3);
                            BBGame.Variables.SCORE += BBGame.Variables.SCORE_STEP * blocks[i][j].scorefactor;

                            BBGame.Methods.shakeScreen();
                            BBGame.Methods.playSoundFx(BBGame.Sound.brickdestroy);
                            BBGame.Methods.updateScore();
                        }
                        else
                        {
                            BBGame.Methods.playSoundFx(BBGame.Sound.brickhit);
                        }



                        BBGame.log("hit");
                    }
                    if(blocks[i][j].life >= 0 && isComplet){ isComplet = false; }
                }


            }
        }

        this.isComplet = isComplet;
    }
};

