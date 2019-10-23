/**
 * Created by RAZOR on 9/20/2016.
 */
/**
 * An abstract object for inheritance only
 * contains all commen properties and methods for object
 * @constructor
 */
function BBObject(){

    this.position = {x:0,y:0};
    this.dimension = {};
    this.color;
    this.stage;


    this.render = function(ctx){
        console.log("render");
    };


    this.getCurrentPosition = function(){
        return this.position;
    };

    this.setPosition = function(x,y){
        this.position.x = x;
        this.position.y = y;
    };

    this.getCanvas = function(){
      return this.stage;
    };
}
