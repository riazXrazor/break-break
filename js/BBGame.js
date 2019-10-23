/**
 * Created by RAZOR on 9/18/2016.
 */

    var BBGame = BBGame || {};
/**
 * Input Events for the game
 */

Events.KEYPRESS = {
    LEFT : false,
    RIGHT : false,
    SPACEBAR : false
};

Events.add(document,'keydown',function(e){
    var key = e.kayCode || e.which;

    // BBGame.log('KEYDOWN',key);

    if(key == 37)
        BBGame.Events.KEYPRESS.LEFT = true;
    else if(key == 39)
        BBGame.Events.KEYPRESS.RIGHT = true;
    else if(key == 32)
        BBGame.Events.KEYPRESS.SPACEBAR = true;

    BBGame.Events.KEYPRESSED = true;
});

Events.add(document,'keyup',function(e){
    var key = e.kayCode || e.which;

    //BBGame.log('KEYUP',key);

    if(key == 37)
        BBGame.Events.KEYPRESS.LEFT = false;
    else if(key == 39)
        BBGame.Events.KEYPRESS.RIGHT = false;
    else if(key == 32)
        BBGame.Events.KEYPRESS.SPACEBAR = false;

    BBGame.Events.KEYPRESSED = false;
});

Events.add(BBGame.Dom.newgameBtn,'click',BBGame.Methods.newGame);
Events.add(BBGame.Dom.restartBtn,'click',BBGame.Methods.restartGame);
Events.add(BBGame.Dom.pauseBtn,'click',BBGame.Methods.pauseGame);
Events.add(BBGame.Dom.resumeBtn,'click',BBGame.Methods.resumeGame);


/**
 * Setup Canvas
 */

    BBGame.Canvas.Background.appendTo(BBGame.Dom.playAreaEl);
    BBGame.Canvas.Bricks.appendTo(BBGame.Dom.playAreaEl);
    BBGame.Canvas.Flames.appendTo(BBGame.Dom.playAreaEl);
    BBGame.Canvas.Stage.appendTo(BBGame.Dom.playAreaEl);
    BBGame.Canvas.Text.appendTo(BBGame.Dom.playAreaEl);
    //BBGame.Canvas.Offlayer.appendTo(BBGame.Dom.playAreaEl);

    BBGame.Paddle = new Paddle(70,10,"#9e9e9e",BBGame.Canvas.Stage);
   // BBGame.Paddle.positionCenter();

    BBGame.Ball = new Ball(10,"#3f51b5",BBGame.Canvas.Stage);
    //BBGame.Ball.positionOnPaddle(BBGame.Paddle);


    //BBGame.Level.generateCurrentLevelBlocks();
/**
 * Background Generation
 */
    BBGame.Canvas.Background.draw(function(ctx,canvas){
        this.setGridSize(20);

        this.drawGrid('#313131');

    }).render();

/**
 * Game Init
 */

    Events.add(BBGame.Dom.startgameBtn,'click',function(){

        BBGame.Dom.gameIntroEl.style.display = "none";

            BBGame.Methods.newGame();

        BBGame.Methods.showLeftBar();
    });


    BBGame.Methods.loadAssets();

    /**
     * Attach all events in the game
     */
    BBGame.Events.attach();


