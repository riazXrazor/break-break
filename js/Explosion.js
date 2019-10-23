/**
 * Created by RAZOR on 9/25/2016.
 */
var BBGame = BBGame || {};

/**
 * Thanks to Zouhair Serrar's Blog
 * http://www.gameplaypassion.com/blog/explosion-effect-html5-canvas/
 * Create a Nice and Simple Explosion Effect in HTML5 Canvas
 *
 * I wrapped it in its own class and made it moduler so that i can reuse it outer games too :)
 */
var Explosion = BBGame.Explosion = {};

Explosion.particles = [];

Explosion.frameRate = 60.0;
Explosion.frameDelay = 1000.0/Explosion.frameRate;
Explosion.randomFloat = function  (min, max)
{
    return min + Math.random()*(max-min);
};
/*
 * A single explosion particle
 */
Explosion.Particle = {
    scale : 1.0,
    x : 0,
    y : 0,
    radius : 20,
    color : "#000",
    velocityX : 0,
    velocityY : 0,
    scaleSpeed : 0.5,

    update : function(ms)
    {
        // shrinking
        this.scale -= this.scaleSpeed * ms / 1000.0;

        if (this.scale <= 0)
        {
            this.scale = 0;
        }

        // moving away from explosion center
        this.x += this.velocityX * ms/1000.0;
        this.y += this.velocityY * ms/1000.0;
    },

    draw : function(context2D)
    {
        // translating the 2D context to the particle coordinates
        context2D.save();
        context2D.translate(this.x, this.y);
        context2D.scale(this.scale, this.scale);

        // drawing a filled circle in the particle's local space
        context2D.fillStyle = this.color;
        context2D.fillRect(0, 0, this.radius, this.radius);


        context2D.restore();
    }
};

/*
 * Basic Explosion, all particles move and shrink at the same speed.
 *
 * Parameter : explosion center
 */
Explosion.createBasicExplosion = function (x, y)
{
    // creating 4 particles that scatter at 0, 90, 180 and 270 degrees
    for (var angle=0; angle<360; angle+=90)
    {
        var particle = Object.create(this.Particle);

        // particle will start at explosion center
        particle.x = x;
        particle.y = y;

        particle.color = "#FF0000";

        var speed = 50.0;

        // velocity is rotated by "angle"
        particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
        particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);

        // adding the newly created particle to the "particles" array
        this.particles.push(particle);
    }
}

/*
 * Advanced Explosion effect
 * Each particle has a different size, move speed and scale speed.
 *
 * Parameters:
 * 	x, y - explosion center
 * 	color - particles' color
 */
Explosion.createExplosion = function (x, y, color,minSize,maxSize,count,minSpeed,maxSpeed,minScaleSpeed,maxScaleSpeed,type) {
    var minSize = minSize || 10;
    var maxSize = maxSize || 30;
    var count = count || 10;
    var minSpeed = minSpeed || 60.0;
    var maxSpeed = maxSpeed || 200.0;
    var minScaleSpeed = minScaleSpeed || 1.0;
    var maxScaleSpeed = maxScaleSpeed ||4.0;
    var type = type || 0;

    for (var angle=0; angle<360; angle += Math.round(360/count))
    {
        var particle = Object.create(this.Particle);

        particle.x = x;
        particle.y = y;

        particle.radius = this.randomFloat(minSize, maxSize);

        particle.color = color;

        particle.scaleSpeed = this.randomFloat(minScaleSpeed, maxScaleSpeed);

        var speed = this.randomFloat(minSpeed, maxSpeed);


        if(type == 0)
        {
            particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
            particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);
        }
        else if(type == 1)
        {
            particle.velocityX = speed * Math.cos( -Math.PI /2);
            particle.velocityY = speed * Math.sin(-Math.PI / 2);
        }


        this.particles.push(particle);
    }
}

/**
 * Renders the particles
 * @param context2D
 * @param frameDelay
 */
Explosion.render = function(context2D){

        // update and draw particles
        for (var i=0; i<this.particles.length; i++)
        {
            var particle = this.particles[i];

            particle.update(this.frameDelay);
            particle.draw(context2D);
            if(particle.scale <= 0)
            {
                this.particles.splice(i,1);
            }
        }
};