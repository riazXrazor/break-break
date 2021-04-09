/**
 * Created by RAZOR on 9/19/2016.
 */
/**
 *
 * @param radius
 * @param color
 * @param stage
 * @constructor
 */
function Ball(radius,color,stage){

    this.position = {x:0,y:0};
    this.dimension.radius = radius;
    this.color = color;
    this.stage = stage;
    this.vx = 1;
    this.vy = 1;
    this.accleration = 2;
    this.isMoving = false;
    var self = this;
    this.tails = Utility.generate(10,function(){
        var e = Object.create(BBGame.Explosion.Particle);
        e.x = self.position.x;
        e.y = self.position.y;
        e.radius = self.dimension.radius;
        e.velocityX = 1;
        e.velocityY = 1;
        return e;
    });

    this.setPosition = function(x,y){
        this.position.x = x;
        this.position.y = y;
        for(var i = 0;i<this.tails.length;i++)
        {
                if(i > 0) {
                    this.tails[i].radius = this.tails[i - 1].radius-1;
                    this.tails[this.tails.length - i].color = BBGame.Helpers.HexToRgb(this.color,Utility.map(i,0,this.tails.length,0,100));//"rgba(63,81,181,"+Utility.map(i,0,this.tails.length,0,0.5)+")";
                }
                else
                {
                    this.tails[i].color = BBGame.Helpers.HexToRgb(this.color,100);
                }

                this.tails[i].x = x;
                this.tails[i].y = y;

        }

    };

    this.render = function(ctx){
        ctx = ctx || this.stage.context;
        var r = this.getRadius();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.position.x,this.position.y,r,0,Math.PI*2,false);
        ctx.fill();


            for (var i = 0; i < this.tails.length; i++) {
                BBGame.Explosion.createExplosion(Utility.randomRange(this.tails[i].x-r,this.tails[i].x+r/3), this.tails[i].y, this.tails[i].color,5,10,1,0,0,0,0,1);
            }

    };

    this.getRadius = function(){
        return this.dimension.radius;
    };

    this.positionOnPaddle = function(Paddle){
        BBGame.Ball.setPosition(
            Paddle.getCurrentPosition().x + Paddle.getWidth() / 2,
            Paddle.getCurrentPosition().y - this.getRadius() - 1
        );
    };

    this.move = function(){

        this.position.x += this.vx * this.accleration;
        this.position.y += this.vy * this.accleration;
        if(this.position.x - this.dimension.radius <= 0 || this.position.x + this.dimension.radius >= this.stage.canvas.width)
        {
            this.vx = -this.vx;
            BBGame.Methods.playSoundFx(BBGame.Sound.paddlehit);
        }

        if(this.position.y - this.dimension.radius <= 0 || this.position.y + this.dimension.radius >= this.stage.canvas.height)
        {
            this.vy = -this.vy;
            BBGame.Methods.playSoundFx(BBGame.Sound.paddlehit);
        }

        for(var i = 0;i<this.tails.length;i++)
        {
            if(i==0)
            {
                Utility.easeTo(this.tails[i],this.position,1);
            }
            else
            {
                Utility.easeTo(this.tails[i],this.tails[i-1],0.4);
            }

        }
    };

}
/**
 * Inheriting basic properties and methods from BBObject
 * @type {BBObject}
 */
Ball.prototype = new BBObject();
