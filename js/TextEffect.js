var BBGame = BBGame || {};

var TextEffect = BBGame.TextEffect = {};

TextEffect.particles = [];
TextEffect.targetPosition = [];
TextEffect.density = 3;
TextEffect.complet = false;
TextEffect.isAnimating = false;
TextEffect.text = "";
TextEffect.renderText = function (ctx,keyword,W,H) {
    TextEffect.text = keyword;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.font = "70px 'Arial', sans-serif";
    ctx.lineWidth = 5;
    ctx.textAlign = "center";
    ctx.fillText(keyword, W/2, H/2);
    ctx.strokeText(keyword, W/2, H/2);

};



// Get pixel positions
TextEffect.positionParticles = function (ctx,W,H,type){
    this.targetPosition = [];
    this.particles = [];
    // Get the data
    var type = type || 0;
    var imageData = ctx.getImageData(0, 0, W, H);
    var data = imageData.data;

    // Iterate each row and column
    for (var i = 0; i < imageData.height; i += this.density) {
        for (var j = 0; j < imageData.width; j += this.density) {

            // Get the color of the pixel
            var color = data[((j * ( imageData.width * 4)) + (i * 4)) - 1];

            // If the color is black, draw pixels
            if (color == 255) {
                var particle = Object.create(this.Particle);
                particle.r = 213;
                particle.g = 0;
                particle.b = 0;
                if(type)
                {
                    // ease out
                    particle.setPosition(i,j);
                    this.particles.push(particle);
                    var a = Utility.randomInt(0,W);
                    var b = Utility.randomInt(0,H);
                    this.targetPosition.push({
                        x : a,
                        y : b,
                        done : false,
                        distance : Utility.distanceXY(particle.x,particle.y,a,b)
                    });
                }
                else
                {
                    // ease in
                    particle.setPosition(Utility.randomInt(0,W),Utility.randomInt(0,H));
                    this.particles.push(particle);
                    this.targetPosition.push({
                        x : i,
                        y : j,
                        done : false,
                        distance : Utility.distanceXY(particle.x,particle.y,i,j)
                    });
                }


            }
        }
    }
}

// Particle Object
TextEffect.Particle =  {
    w  :  TextEffect.density,
    h  :  TextEffect.density,


    vy  : Utility.randomRange(0.2,0.5),
    vx  : Utility.randomRange(0.2,0.5),
    accleration : 1,

    // Color
    a : 1,
    r : 0,
    g : 0,
    b : 0,

    setPosition : function(x, y) {
        this.x = x;
        this.y = y;
    },

    draw : function(ctx) {
        ctx.fillStyle = "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
        ctx.fillRect(this.x, this.y,  this.w,  this.h);
    }
};