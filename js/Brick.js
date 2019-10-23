/**
 * Created by RAZOR on 9/22/2016.
 */
function Brick(width,height,color,life,stage)
{
    this.position = {x:0,y:0};
    this.dimension.width = width;
    this.dimension.height = height;
    this.color = color;
    this.stage = stage;
    this.life = life;
    this.scorefactor = life;

    this.isBlank = !life;

    this.render = function(ctx){
        ctx = ctx || this.stage.context;
        ctx.fillStyle = this.color;
        //BBGame.log('pos->',this.position.x,this.position.y);
        ctx.fillRect(this.position.x,this.position.y,this.getWidth(),this.getHeight());
        ctx.strokeRect(this.position.x,this.position.y,this.getWidth(),this.getHeight());
    }

    this.getHeight = function(){
        return this.dimension.height;
    };

    this.getWidth = function(){
        return this.dimension.width;
    };
}

/**
 *
 * @type {BBObject}
 */
Brick.prototype = new BBObject();