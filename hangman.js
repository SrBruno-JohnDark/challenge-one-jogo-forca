function createMan(t1) {
   if (t1 >= 1) {
    var ctx = canvas.getContext('2d');
    ctx.id = "canv1";
    ctx.beginPath();
    ctx.arc(90, 34, 16, 0, 2*Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#f2aefc';
    ctx.stroke();
    if (t1 >= 2) {
        var canvas2 = document.getElementById("canvas");
        var context2 = canvas2.getContext("2d")
        context2.id = "canv2";
        context2.beginPath();
        context2.lineWidth = 2;
        context2.strokeStyle = '#f2aefc';
        context2.moveTo(90, 50);
        context2.lineTo(110, 70);
        context2.stroke();
        if (t1 >= 3) {
            var canvas3 = document.getElementById("canvas");
            var context3 = canvas3.getContext("2d")
            context3.id = "canv3";
            context3.beginPath();
            context3.lineWidth = 2;
            context3.strokeStyle = '#f2aefc';
            context3.moveTo(90, 50);
            context3.lineTo(70, 70);
            context3.stroke();
            if (t1 >= 4) {
                var canvas4 = document.getElementById("canvas");
                var context4 = canvas4.getContext("2d")
                context4.id = "canv4";
                context4.beginPath();
                context4.lineWidth = 2;
                context4.strokeStyle = '#f2aefc';
                context4.moveTo(90, 50);
                context4.lineTo(90, 110);
                context4.stroke();
                if (t1 >= 5) {
                    var canvas5 = document.getElementById("canvas");
                    var context5 = canvas5.getContext("2d")
                    context5.id = "canv5";
                    context5.beginPath();
                    context5.lineWidth = 2;
                    context5.strokeStyle = '#f2aefc';
                    context5.moveTo(90, 110);
                    context5.lineTo(80, 140);
                    context5.stroke();
                    if (t1 >= 6) {
                        var canvas6 = document.getElementById("canvas");
                        var context6 = canvas6.getContext("2d")
                        context6.id = "canv6";
                        context6.beginPath();
                        context6.lineWidth = 2;
                        context6.strokeStyle = '#f2aefc';
                        context6.moveTo(90, 110);
                        context6.lineTo(100, 140);
                        context6.stroke();
                        }
                    }
                }
            }
        }
   }
}