/**
 * Created by RAZOR on 9/18/2016.
 */

    var BBGame = BBGame || {};
    var Events = BBGame.Events = {};

    Events.length = 0

    Events.events = [];

    Events.add = function(el,ev,fn){
        var evObj = {
            event : ev,
            element : el,
            callback : fn
        };
        Array.prototype.push.call(this,evObj);

        this.events.push(evObj);
    };


    Events.attach = function(){
      for(var i=0;i<this.length;i++)
      {
          var evObj = this.events[i];
          evObj.element.addEventListener(evObj.event,evObj.callback);
      }
    };




