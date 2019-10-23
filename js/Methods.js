/**
 * Created by RAZOR on 9/18/2016.
 */
    var BBGame = BBGame || {};
    var Methods = BBGame.Methods = {};

    Methods.newGame = function (){

        BBGame.Canvas.Stage.stop(true);
        BBGame.Canvas.Bricks.stop(true);
        BBGame.Canvas.Flames.stop(true);

        BBGame.Canvas.Stage.cleanCanvas();
        BBGame.Canvas.Bricks.cleanCanvas();
        BBGame.Canvas.Flames.cleanCanvas();

        BBGame.Canvas.Stage.reset();
        BBGame.Canvas.Bricks.reset();
        BBGame.Canvas.Flames.reset();
        BBGame.Level.reset();

            BBGame.Variables.LEVEL = 1;
            BBGame.Variables.SCORE = 0;
            BBGame.Variables.PLAYING_TIME = 0;
            BBGame.Variables.PAUSE = false;
            BBGame.Variables.FRAMERATE = 20;
            BBGame.Variables.CURRENT_FRAMERATE = BBGame.Variables.FRAMERATE;
            BBGame.Variables.FRAME = 0;
            BBGame.Variables.KEYPRESS = {
                37 : false,
                39 : false,
                32 : false
            };
            BBGame.Variables.GAME_OVER = false;

        BBGame.Explosion.particles = [];
        BBGame.Variables.LIFE = 3;

        BBGame.Methods.updateLevel();
        BBGame.Methods.updateScore();
        BBGame.Methods.updateTime();

        BBGame.Level.generateCurrentLevelBlocks();


        BBGame.Paddle.positionCenter();
        BBGame.Ball.positionOnPaddle(BBGame.Paddle);
        BBGame.Ball.isMoving = false;

        BBGame.Methods.stopSoundFx(BBGame.Sound.bg_music);
        BBGame.Methods.stopSoundFx(BBGame.Sound.intro_music);
        BBGame.Methods.playSoundFx(BBGame.Sound.bg_music,true,1);

       // BBGame.Methods.init();

        BBGame.Methods.setTextAndAnimateInOut("LEVEL "+BBGame.Level.getCurrentLevel(),function(){
            BBGame.Methods.init();
        });

    };

    Methods.restartGame = function () {
        BBGame.Canvas.Stage.stop(true);
        BBGame.Canvas.Bricks.stop(true);
        BBGame.Canvas.Flames.stop(true);

        BBGame.Canvas.Stage.cleanCanvas();
        BBGame.Canvas.Bricks.cleanCanvas();
        BBGame.Canvas.Flames.cleanCanvas();

        BBGame.Canvas.Stage.reset();
        BBGame.Canvas.Bricks.reset();
        BBGame.Canvas.Flames.reset();
        BBGame.Level.reset();

        BBGame.Level.currentLevel = BBGame.Variables.LEVEL;

        BBGame.Variables.SCORE = 0;
        BBGame.Variables.PLAYING_TIME = 0;
        BBGame.Variables.PAUSE = false;
        BBGame.Variables.FRAMERATE = 20;
        BBGame.Variables.CURRENT_FRAMERATE = BBGame.Variables.FRAMERATE;
        BBGame.Variables.FRAME = 0;
        BBGame.Variables.KEYPRESS = {
            37 : false,
            39 : false,
            32 : false
        };
        BBGame.Variables.GAME_OVER = false;

        BBGame.Explosion.particles = [];
        BBGame.Variables.LIFE = 3;

        BBGame.Methods.updateLevel();
        BBGame.Methods.updateScore();
        BBGame.Methods.updateTime();

        BBGame.Level.generateCurrentLevelBlocks();


        BBGame.Paddle.positionCenter();
        BBGame.Ball.positionOnPaddle(BBGame.Paddle);
        BBGame.Ball.isMoving = false;

        BBGame.Methods.stopSoundFx(BBGame.Sound.bg_music);
        BBGame.Methods.stopSoundFx(BBGame.Sound.intro_music);
        BBGame.Methods.playSoundFx(BBGame.Sound.bg_music,true,1);

        // BBGame.Methods.init();

        BBGame.Methods.setTextAndAnimateInOut("LEVEL "+BBGame.Level.getCurrentLevel(),function(){
            BBGame.Methods.init();
        });

    };

    Methods.pauseGame = function () {
            BBGame.Variables.PAUSE = true;
            BBGame.Dom.pauseBtn.style.display = "none";
            BBGame.Dom.resumeBtn.style.display = "block";

            BBGame.Canvas.Bricks.stop();
            BBGame.Canvas.Stage.stop();
            BBGame.Canvas.Flames.stop();
            BBGame.Canvas.Text.stop();
        };

    Methods.resumeGame = function () {
            BBGame.Variables.PAUSE = false;
            BBGame.Dom.pauseBtn.style.display = "block";
            BBGame.Dom.resumeBtn.style.display = "none";

            BBGame.Canvas.Bricks.update();
            BBGame.Canvas.Stage.update();
            BBGame.Canvas.Flames.update();
            BBGame.Canvas.Text.update();
        }

    Methods.gameOver = function () {

        BBGame.Canvas.Bricks.stop(true);
        BBGame.Canvas.Stage.stop(true);
        BBGame.Canvas.Flames.stop(true);

        BBGame.Canvas.Stage.cleanCanvas();
        BBGame.Canvas.Bricks.cleanCanvas();
        BBGame.Canvas.Flames.cleanCanvas();

        BBGame.Methods.stopSoundFx(BBGame.Sound.bg_music);
        BBGame.Methods.playSoundFx(BBGame.Sound.game_over,false,1);
        Methods.setTextAndAnimateIn("GAME OVER",function(){
            console.log("game over");
        });
    };


    Methods.setTextToAnimate = function(text,type){
        BBGame.Canvas.Offlayer.clear().draw(function(ctx,canvas){
            BBGame.TextEffect.renderText(ctx,text,canvas.width,canvas.height);
            BBGame.TextEffect.positionParticles(ctx,canvas.width,canvas.height,type);
        }).render();

    };

    Methods.setTextAndAnimateIn = function(text,callback){
        this.setTextToAnimate(text);
        this.textAnimateIn(false,callback);
    };

    Methods.setTextAndAnimateInOut = function(text,callback){
        this.setTextToAnimate(text);
        this.textAnimateIn(true,callback);
    };

    Methods.setTextAndAnimateOut = function(text,callback){
        this.setTextToAnimate(text,1);
        this.textAnimateOut(false,callback);
    };

    Methods.textAnimateIn = function(out,callback){
        var ease = 0.005;
        var self = this;
        BBGame.Canvas.Text.clear().draw(function(ctx,canvas){
            BBGame.TextEffect.complet = true;
            for(var i = 0;i < BBGame.TextEffect.particles.length;i++)
            {
                var p = BBGame.TextEffect.particles[i];
                var t = BBGame.TextEffect.targetPosition[i];
                var dist = Utility.distance(p,t);
                p.a = Utility.map(t.distance-dist,0, t.distance,0,1);
                if(!t.done)
                    Utility.easeTo(p,t,ease);

                if(dist <= 0.005)
                {
                    p.x = t.x;
                    p.y = t.y;
                    t.done = true;
                }
                if(t.done == false){ BBGame.TextEffect.complet = false;  }
                p.draw(ctx);
            }
            ease+=0.0001;
            if(BBGame.TextEffect.complet)
            {
                this.stop(true);
                if(!out)
                {

                    BBGame.TextEffect.isAnimating = false;
                    if(callback) callback();
                }
                else
                {
                    self.setTextToAnimate(BBGame.TextEffect.text,1);
                    self.textAnimateOut(false,callback);
                }

            }
        }).update();
    };

    Methods.textAnimateOut = function(inn,callback){
    var ease = 0.005;
    var self = this;
    BBGame.Canvas.Text.clear().draw(function(ctx,canvas){
        BBGame.TextEffect.complet = true;
        for(var i = 0;i < BBGame.TextEffect.particles.length;i++)
        {
            var p = BBGame.TextEffect.particles[i];
            var t = BBGame.TextEffect.targetPosition[i];
            var dist = Utility.distance(p,t);

            p.a = Utility.map(dist,0, t.distance,0,1);
            if(!t.done)
                Utility.easeTo(p,t,ease);

            if(dist <= 1)
            {
                p.x = t.x;
                p.y = t.y;
                t.done = true;
            }
            if(t.done == false){ BBGame.TextEffect.complet = false;  }
            p.draw(ctx);
        }
        ease+=0.0001;
        if(BBGame.TextEffect.complet)
        {
            this.stop(true);
            if(!inn)
            {

                BBGame.TextEffect.isAnimating = false;
                if(callback) callback();
            }
            else
            {
                self.setTextToAnimate(BBGame.TextEffect.text);
                self.textAnimateIn(false,callback);
            }

        }
    }).render();

    setTimeout(function(){
        BBGame.Canvas.Text.update();
    },50)
};

    Methods.showLeftBar = function(){

        var width = 0;
        var inc = 1;
        var left = BBGame.Dom.optionsAreaEl.offsetLeft;

        var increment = function (){
            if(Math.abs(left) >= 200)
            {
                return;
            }
            width += inc;
            left -= inc;
            BBGame.Dom.mainAreaEl.style.left = width + 'px';
            BBGame.Dom.optionsAreaEl.style.left = left + 'px';
            BBGame.Dom.optionsAreaEl.style.opacity = Utility.map(width,0,200,0,1);
            BBGame.Dom.optionsAreaEl.style.margin = "auto";
            setTimeout(increment,1);
        }

        increment();

    };

    Methods.updateScore = function(){
      BBGame.Dom.scoreEl.innerHTML = BBGame.Variables.SCORE;
    };

    Methods.updateLevel = function(){
      BBGame.Dom.levelEl.innerHTML = BBGame.Level.getCurrentLevel();
    };

    Methods.updateTime = function(){
      BBGame.Dom.timeEl.innerHTML = BBGame.Helpers.formateTime(BBGame.Variables.PLAYING_TIME/1000);
    };

    Methods.playSoundFx = function(sound,once,volume){
        sound.volume = volume|| .25;
       if(!once) {
           sound.currentTime = 0;
       }
        sound.play()
    };

    Methods.stopSoundFx = function(sound){
        sound.pause();
        sound.currentTime = 0;
    };

    Methods.playBgSoundLoopFx = function(sound,volume){
        sound.addEventListener('ended', function() {
            sound.volume = volume|| 1;
            this.currentTime = 0;
            this.play();
        }, false);
        sound.play();
    };

    Methods.loadAssets = function () {

        if(BBGame.Variables.GAME_LOADED)
        {
            BBGame.Dom.loaderAreaEl.style.display = "none";
            // BBGame.Dom.optionsAreaEl.style.display = "block";
            BBGame.Dom.playAreaEl.style.display = "block";
            BBGame.Methods.playSoundFx(BBGame.Sound.intro_music,true,1);
        }
        else
        {
            var count = 0;
                for(sound in BBGame.Sound)
                {

                    if(typeof BBGame.Sound[sound] == 'string') {
                        var src = BBGame.Sound[sound];
                        BBGame.log(src);
                        BBGame.Sound[sound] = new Audio();
                        BBGame.Sound[sound].src = src;
                            BBGame.Sound[sound].addEventListener('canplaythrough', function () {
                                BBGame.Variables.GAME_LOADING++;
                                BBGame.Dom.progressbarEl.style.width = Utility.map(BBGame.Variables.GAME_LOADING,0,count,0,100) + "%";


                                if(count == BBGame.Variables.GAME_LOADING)
                                {
                                    BBGame.Variables.GAME_LOADED = true;
                                    Methods.loadAssets();
                                }

                            }, false);
                    }

                    count++;
                }

        }

    };

    Methods.shakeScreen = function(){
        BBGame.Dom.mainAreaEl.classList.add("shake-little");
        setTimeout(function(){
            BBGame.Dom.mainAreaEl.classList.remove("shake-little");
        },16);
    };

    Methods.BallDieShakeScreen = function(){
        BBGame.Dom.mainAreaEl.classList.add("shake-little");
        setTimeout(function(){
            BBGame.Dom.mainAreaEl.classList.remove("shake-little");
        },1000);
    };

    Methods.DeathShakeScreen = function(){
        BBGame.Dom.mainAreaEl.classList.add("shake-opacity");
        setTimeout(function(){
            BBGame.Dom.mainAreaEl.classList.remove("shake-opacity");
        },3000);
    };

    Methods.init = function(){
    BBGame.Methods.updateLevel();
    BBGame.Variables.TIMESTAMP_STARTED = Date.now();

    BBGame.Canvas.Stage.clear().draw(function (ctx, canvas) {

        BBGame.Ball.render();
        BBGame.Paddle.render();


        if (BBGame.Ball.isMoving) {
            BBGame.Ball.move();
        }

        if (BBGame.Events.KEYPRESS.RIGHT) {
            BBGame.Paddle.moveRight();
            if (!BBGame.Ball.isMoving) {
                BBGame.Ball.setPosition(
                    BBGame.Paddle.getCurrentPosition().x + BBGame.Paddle.getWidth() / 2,
                    BBGame.Paddle.getCurrentPosition().y - BBGame.Ball.getRadius() - 1
                );
            }
        }
        else if (BBGame.Events.KEYPRESS.LEFT) {
            BBGame.Paddle.moveLeft();
            if (!BBGame.Ball.isMoving) {
                BBGame.Ball.positionOnPaddle(BBGame.Paddle);
            }
        }
        else if (BBGame.Events.KEYPRESS.SPACEBAR) {
            BBGame.Ball.isMoving = true;
        }
    })
        .draw(function (ctx, canvas) {


            var ballpos = BBGame.Ball.getCurrentPosition();
            var paddlepos = BBGame.Paddle.getCurrentPosition();

            if (ballpos.y + BBGame.Ball.getRadius() - 2 >= paddlepos.y) {

                var circle = {x: ballpos.x, y: ballpos.y, r: BBGame.Ball.getRadius()};
                var rect = {x: paddlepos.x, y: paddlepos.y, w: BBGame.Paddle.getWidth(), h: BBGame.Paddle.getHeight()};
                if (Utility.RectCircleColliding(circle, rect)) {
                    BBGame.Ball.vy = -BBGame.Ball.vy;
                    BBGame.Methods.playSoundFx(BBGame.Sound.paddlehit);
                }
                else {
                    if (ballpos.y - BBGame.Ball.getRadius() > paddlepos.y + BBGame.Paddle.getHeight()) {

                        BBGame.Methods.BallDieShakeScreen();
                        BBGame.Methods.playSoundFx(BBGame.Sound.sizzle,true);

                        BBGame.Ball.accleration = 0.4;
                        var maxVar = BBGame.Canvas.Stage.canvas.height - paddlepos.y;
                        var value = BBGame.Canvas.Stage.canvas.height - ballpos.y;
                        var opacity = Utility.map(value, 0, maxVar, 0, 100);
                        //BBGame.log(opacity);
                        BBGame.Ball.color = BBGame.Helpers.HexToRgb("#000000", opacity);
                        for (var i = 0; i < BBGame.Ball.tails.length; i++) {
                            BBGame.Ball.tails[i].color = BBGame.Helpers.HexToRgb("#000000", opacity);
                        }


                    }

                    if (ballpos.y + BBGame.Ball.getRadius() >= BBGame.Canvas.Stage.canvas.height) {
                        BBGame.Ball.isMoving = false;
                        BBGame.Ball.accleration = 5;
                        BBGame.Ball.color = BBGame.Helpers.HexToRgb("#3f51b5", 100);
                        BBGame.Ball.positionOnPaddle(BBGame.Paddle);
                        BBGame.Variables.LIFE--;
                        if(BBGame.Variables.LIFE <= 0)
                        {
                            BBGame.Methods.DeathShakeScreen();
                            BBGame.Methods.gameOver();
                        }
                    }

                }
            }



            BBGame.Variables.PLAYING_TIME = Date.now() - BBGame.Variables.TIMESTAMP_STARTED;
            BBGame.Methods.updateTime();
        }).update();

    /**
     * Bricks layer
     */
    BBGame.Canvas.Bricks.clear().draw(function (ctx, canvas) {
        BBGame.Level.renderCurrentLevel(ctx);
        BBGame.Level.checkBrickHit(BBGame.Ball);
        if (BBGame.Level.isComplet) {

            BBGame.Ball.isMoving = false;

            BBGame.Canvas.Stage.stop();
            BBGame.Canvas.Bricks.stop();
            //BBGame.Canvas.Flames.stop();

            BBGame.Canvas.Stage.cleanCanvas();
            BBGame.Canvas.Bricks.cleanCanvas();
            console.log("clear");

            BBGame.Methods.setTextAndAnimateInOut("LEVEL COMPLETE",function(){
                BBGame.Level.next();

                BBGame.Methods.updateLevel();
                BBGame.Paddle.positionCenter();
                BBGame.Ball.positionOnPaddle(BBGame.Paddle);
                BBGame.Level.generateCurrentLevelBlocks();
                BBGame.Level.renderCurrentLevel();
                BBGame.Canvas.Stage.render();
                BBGame.Canvas.Bricks.update();

                BBGame.Methods.stopSoundFx(BBGame.Sound.bg_music);
                BBGame.Methods.stopSoundFx(BBGame.Sound.intro_music);
                BBGame.Methods.playSoundFx(BBGame.Sound.bg_music,true,1);

                BBGame.Methods.setTextAndAnimateInOut("LEVEL "+BBGame.Level.getCurrentLevel(),function(){
                    BBGame.Canvas.Stage.update();
                    //BBGame.Canvas.Bricks.update();
                    //BBGame.Canvas.Flames.update();
                });

            });
        }
    }).update();

    /**
     * Effects Layer
     */
    BBGame.Canvas.Flames.clear().draw(function (ctx, canvas) {
        /**
         * render Bottom Flames , Brick explosion and Ball Flaming
         */
        BBGame.Explosion.render(ctx);

        // creates the bottom flames
        for (var i = 0; i < 10; i++) {
            BBGame.Explosion.createExplosion(Utility.randomRange(0, canvas.width), canvas.height, "rgba(0,0,0,0.7)", 5, 10, 1, 30.0, 60.0, 0, 0, 1);

        }

        BBGame.Methods.playSoundFx(BBGame.Sound.flames,true,1);

        setTimeout(function(){
            BBGame.Methods.playSoundFx(BBGame.Sound.flames1,true,1);
        },100);

    }).update();

};