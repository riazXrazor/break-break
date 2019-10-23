/**
 * Created by RAZOR on 9/18/2016.
 */

    var BBGame = BBGame || {};
    var Variables = BBGame.Variables = {};
    var Dom = BBGame.Dom = {};
    var Sound = BBGame.Sound = {};
    var Canvas = BBGame.Canvas = {};

    BBGame.log = console.log.bind(console);

    Canvas.Background = new iCanvas('BB-canvas-background',600,600);
    Canvas.Stage = new iCanvas('BB-canvas-stage',600,600);
    Canvas.Bricks = new iCanvas('BB-canvas-bricks',600,600);
    Canvas.Flames = new iCanvas('BB-canvas-flames',600,600);
    Canvas.Text = new iCanvas('BB-canvas-text',600,600);
    Canvas.Offlayer = new iCanvas('BB-canvas-off',600,600);

    Sound.brickdestroy = "js/sounds/blast.mp3";
    Sound.brickhit = "js/sounds/brickhit.wav";
    Sound.paddlehit = "js/sounds/paddlehit.wav";
    Sound.sizzle = "js/sounds/sizzle.wav";
    Sound.flames = "js/sounds/flames.wav";
    Sound.flames1 = "js/sounds/flames.wav";
    Sound.bg_music = "js/sounds/bg_music.mp3";
    Sound.intro_music = "js/sounds/intro_music.mp3";
    Sound.game_over = "js/sounds/game_over.wav";


    Dom.newgameBtn = document.getElementById("game-new");
    Dom.startgameBtn = document.getElementById("start-game");
    Dom.restartBtn = document.getElementById("game-restart");
    Dom.pauseBtn = document.getElementById("game-pause");
    Dom.resumeBtn = document.getElementById("game-resume");
    Dom.scoreEl = document.getElementById("game-score");
    Dom.timeEl = document.getElementById("game-time");
    Dom.levelEl = document.getElementById("game-level");
    Dom.progressbarEl = document.getElementById("progressbar");
    Dom.mainAreaEl = document.getElementsByClassName("main-area")[0];
    Dom.playAreaEl = document.getElementById("playArea");
    Dom.gameIntroEl = document.getElementById("intro-screen");
    Dom.optionsAreaEl = document.getElementById("optionsArea");
    Dom.loaderAreaEl = document.getElementById("loader-area");

    Variables.LEVEL = 1;
    Variables.SCORE = 0;
    Variables.SCORE_STEP = 100;
    Variables.TIMESTAMP_STARTED = 0;
    Variables.PLAYING_TIME = 0;
    Variables.PAUSE = false;
    Variables.FRAMERATE = 20;
    Variables.CURRENT_FRAMERATE = Variables.FRAMERATE;
    Variables.FRAME = 0;

    Variables.GAME_OVER = false;
    Variables.LIFE = 3;

    Variables.GAME_LOADING = 0;
    Variables.GAME_LOADED = false;


