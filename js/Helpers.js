/**
 * Created by RAZOR on 9/18/2016.
 */
    var BBGame = BBGame || {};
    var Helpers = BBGame.Helpers = {};
    Helpers.formateTime = function (seconds) {
            var sec_num = parseInt(seconds, 10);
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}
            return hours+':'+minutes+':'+seconds;
        };

    Helpers.HexToRgb = function (hex,opacity){

        hex = hex.replace('#','');
        if(hex.length == 6) {
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
        }
        else if(hex.length == 3)
        {
            r = parseInt(hex.substring(0, 1), 16);
            g = parseInt(hex.substring(1, 2), 16);
            b = parseInt(hex.substring(2, 3), 16);
        }

        result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return result;
    };