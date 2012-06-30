//  ToolTip
//  {

var tooltip = function () {
    var id = 'tt';
    var top = 3;
    var left = 3;
    //var maxw = 300;
    var speed = 10;
    var timer = 20;
    var endalpha = 95;
    var alpha = 0;
    var tt, c, h, image;
    var ie = document.all ? true : false;
    return {
        show: function (element, imgSrc, imgWidth) {
            if (tt == null) {
                imgWidth = imgWidth == null ? 400 : imgWidth;

                tt = document.createElement('div');
                tt.setAttribute('id', id);

                c = document.createElement('div');
                c.setAttribute('id', id + 'cont');

                image = document.createElement('img');
                image.setAttribute('id', id + 'contImage');
                image.setAttribute('src', 'Images/' + imgSrc);
                image.setAttribute('width', imgWidth);

                tt.appendChild(c);
                tt.appendChild(image);
                
                document.body.appendChild(tt);
                
                tt.style.opacity = 0;
                tt.style.filter = 'alpha(opacity=0)';
                document.onmousemove = this.pos;
            }
            tt.style.display = 'block';
            c.innerHTML = $(element).text();
            tt.style.width = 'auto';

            if (tt.offsetWidth > imgWidth) { tt.style.width = imgWidth + 'px'; }
            h = parseInt(tt.offsetHeight) + top;
            clearInterval(tt.timer);
            tt.timer = setInterval(function () { tooltip.fade(1); }, timer);
        },
        pos: function (e) {
            var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
            var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
            tt.style.top = (u - h) + 'px';
            tt.style.left = (l + left) + 'px';
        },
        fade: function (d) {
            var a = alpha;
            if ((a != endalpha && d == 1) || (a != 0 && d == -1)) {
                var i = speed;
                if (endalpha - a < speed && d == 1) {
                    i = endalpha - a;
                } else if (alpha < speed && d == -1) {
                    i = a;
                }
                alpha = a + (i * d);
                tt.style.opacity = alpha * .01;
                tt.style.filter = 'alpha(opacity=' + alpha + ')';
            } else {
                clearInterval(tt.timer);
                if (d == -1) { tt.style.display = 'none' }
            }
        },
        hide: function () {
            clearInterval(tt.timer);
            tt.timer = setInterval(function () { tooltip.fade(-1) }, timer);
        }
    };
} ();

//  ToolTip 
//  }