/**
 * Common utility functions for game developnments and other stuff
 */
;(function(window,document){
  var utility = {
      norm : function (value, min, max) {

          return (value - min) / (max - min);
      },
      lerp : function (norm, min, max) {

          return (max - min) * norm + min;
      },
      map : function (value, sourceMin, sourceMax, destinationMin, destionationMax) {

          return utility.lerp(utility.norm(value, sourceMin, sourceMax), destinationMin, destionationMax);
      },
      clamp : function (value, min, max) {

          return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
      },
      distance : function (p0, p1) {

          var dx = p1.x - p0.x,
              dy = p1.y - p0.y;
          return Math.sqrt(dx * dx + dy * dy);
      },
      distanceXY : function (x0, y0, x1, y1) {

          var dx = x1 - x0,
              dy = y1 - y0;
          return Math.sqrt(dx * dx + dy * dy);
      },
      randomRange : function (min, max) {

          return min + Math.random() * (max - min);
      },
      randomInt : function (min, max) {

          return Math.floor(min + Math.random() * (max - min + 1));
      },
      degToRad : function (deg) {

          return deg / 180 * Math.PI;
      },
      radToDeg : function (rad) {

          return rad * 180 / Math.PI;
      },
      roundToPlace : function (value, place) {

          var mult = Math.pow(10, place);
          return Math.round(value * mult) / mult;
      },
      roundNearest : function (value, nearest) {

          return Math.round(value * nearest) / nearest;
      },
      circleCollision : function (c0, c1) {

          return utility.distance(c0, c1) >= c0.radius + c1.radius;
      },
      circlePointCollision : function (x, y, circle) {

          return utility.distance(x, y, circle.x, circle.y) < circle.radius;
      },
      pointInRect : function (x, y, rect) {

          return utility.inRange(x, rect.x, rect.x + rect.width) &&
                 utility.inRange(y, rect.y, rect.y + rect.height);
      },
      inRange : function (value, min, max) {

          return value >= Math.min(min, max) && value <= Math.max(min, max);
      },
      rangeIntersect : function (min0, max0, min1, max1) {

          return Math.max(max0, min1) >= Math.min(max0, min1) &&
                 Math.min(min1, max0) <= Math.max(min1, max0);
      },
      rectIntersect : function (r0, r1) {

          return utility.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
                 utility.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
      },
      RectCircleColliding : function (circle,rect){
        var distX = Math.abs(circle.x - rect.x-rect.w/2);
        var distY = Math.abs(circle.y - rect.y-rect.h/2);

        if (distX > (rect.w/2 + circle.r)) { return false; }
        if (distY > (rect.h/2 + circle.r)) { return false; }

        if (distX <= (rect.w/2)) { return true; }
        if (distY <= (rect.h/2)) { return true; }

        var dx=distX-rect.w/2;
        var dy=distY-rect.h/2;
        return (dx*dx+dy*dy<=(circle.r*circle.r));
    },
      generate : function (length,fn) {
      		var arr = [];
      		for(var i = 0; i < length; i++)
      		{
      						arr.push(fn());
      		}
      		return arr;
      },
      easeTo : function (current,target,ease){

        current.x += (target.x - current.x) * ease;
        current.y += (target.y - current.y) * ease;

    },
      deepCopy : function (obj) {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            var out = [], i = 0, len = obj.length;
            for ( ; i < len; i++ ) {
                out[i] = arguments.callee(obj[i]);
            }
            return out;
        }
        if (typeof obj === 'object') {
            var out = {}, i;
            for ( i in obj ) {
                out[i] = arguments.callee(obj[i]);
            }
            return out;
        }
        return obj;
    }

  };

  window.Utility = utility;
}(window,document));
