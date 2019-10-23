/**
 * Created by RAZOR on 9/19/2016.
 */
/**
 * Paddle For the BB Game
 * @param x
 * @param y
 * @param w
 * @param h
 * @param color
 * @constructor
 */
    function Paddle(width,height,color,stage){

        this.position = {x:0,y:0};
        this.dimension.width = width;
        this.dimension.height = height;
        this.color = color;
        this.stage = stage;
        this.speed = 10;


        this.render = function(ctx){
            ctx = ctx || this.stage.context;
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x,this.position.y,this.getWidth(),this.getHeight());
        };

        this.positionCenter = function(){
            this.setPosition(
                this.stage.canvas.width/2 - this.getWidth()/2,
                this.stage.canvas.height - this.getHeight() - 30
            );
        };

        this.getHeight = function(){
            return this.dimension.height;
        };

        this.getWidth = function(){
            return this.dimension.width;
        };

        this.moveRight = function(){
            this.position.x += this.speed;
            if(this.position.x + this.getWidth() >= this.stage.canvas.width)
            {
                this.position.x = this.stage.canvas.width - this.getWidth();
            }
        };

        this.moveLeft = function(){
            this.position.x -= this.speed;
            if(this.position.x <= 0)
            {
                this.position.x = 0;
            }
        };


    }

/**
 * Inheriting basic properties and methods from BBObject
 * @type {BBObject}
 */
Paddle.prototype = new BBObject();