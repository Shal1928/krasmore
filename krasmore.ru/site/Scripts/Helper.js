﻿//  ToolTip
//  {
//      <span class="toolTipPlace" onmouseover="tooltip.show(this,'comfortableBoats0.1.jpg');" onmouseout="tooltip.hide();">

var tooltip = function () {
    var id = 'tt';
    var top = 3;
    var left = 3;
    var speed = 10;
    var timer = 20;
    var endalpha = 100;
    var alpha = 0;
    var tt, c, h, image;

    return {
        show: function (element, imgSrc, imgWidth) {
            imgWidth = imgWidth == null ? 400 : imgWidth;
            if (tt == null) {
                tt = document.createElement('div');
                tt.setAttribute('id', id);

                c = document.createElement('div');
                c.setAttribute('id', id + 'cont');

                image = document.createElement('img');
                image.setAttribute('id', id + 'contImage');

                tt.appendChild(c);
                tt.appendChild(image);

                document.body.appendChild(tt);

                tt.style.opacity = 0;
                tt.style.filter = 'alpha(opacity=0)';
                document.onmousemove = this.pos;
            }

            image.setAttribute('src', 'Images/' + imgSrc);
            image.setAttribute('width', imgWidth);

            tt.style.display = 'block';
            tt.style.width = 'auto';
            
            if (element == null) c.style.display = 'none';
            else {
                c.style.display = 'block';
                c.innerHTML = $(element).text();
            }

            if (tt.offsetWidth > imgWidth) tt.style.width = imgWidth + 'px';
            h = parseInt(tt.offsetHeight) + top;
            clearInterval(tt.timer);
            tt.timer = setInterval(function () { tooltip.fade(1); }, timer);
        },
        pos: function (e) {
            var u = 0, l = 0;
            if (typeof (window.pageYOffset) == 'number') {
                u = window.pageYOffset;
                l = window.pageXOffset;
            }
            else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                u = document.body.scrollTop;
                l = document.body.scrollLeft;
            }
            else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                u = document.documentElement.scrollTop;
                l = document.documentElement.scrollLeft;
            }

            u = document.all ? event.clientY + u : e.pageY;
            l = document.all ? event.clientX + l : e.pageX;
            tt.style.top = (u - h) + 'px';
            tt.style.left = (l + left) + 'px';
        },
        fade: function (d) {
            var a = alpha;
            if ((a != endalpha && d == 1) || (a != 0 && d == -1)) {
                var i = speed;
                if (endalpha - a < speed && d == 1) i = endalpha - a;
                else if (alpha < speed && d == -1) i = a;
                alpha = a + (i * d);
                tt.style.opacity = alpha * .01;
                tt.style.filter = 'alpha(opacity=' + alpha + ')';
            }
            else {
                clearInterval(tt.timer);
                if (d == -1) tt.style.display = 'none';
            }
        },
        hide: function () {
            clearInterval(tt.timer);
            tt.timer = setInterval(function () { tooltip.fade(-1); }, timer);
        }
    };
} ();

//  ToolTip 
//  }

//  ToolTopPreview
//  {
//$("#content2 div.someBlock") вернет div-элементы с классом someBlock, которые находятся внутри элемента с идентификатором content2.

var toolTipPlacesCollection = new Object();

$(document).ready(function () {

    //$("<img src='Images/lookMe.png' alt='' class='ttPreview' />").appendTo(".toolTipPlace");


    //    $("span.toolTipPlace").each(function () {
    //        alert(findPos(this)); // выведет содержимое ссылок
    //    });
   

    $("span.toolTipPlace").each(function (i, value) {

        toolTipPlacesCollection[i] = findPos(value);
    });

//    for (var key in toolTipPlacesCollection) {
//        alert(toolTipPlacesCollection[key]);
//    }


});

$(document).mousemove(function (e) {

    for (var key in toolTipPlacesCollection) {

        var previewTop = toolTipPlacesCollection[key]['y'] - 25;
        var previewBottom = toolTipPlacesCollection[key]['y'] + 25;

        if ((e.pageY >= previewTop) && (e.pageY <= previewBottom)) {
            $("span.toolTipPlace").each(function () {

                var idConst = "ttPreviewId";
                var x = findPos(this)['x'];
                var y = findPos(this)['y'];
                var imagePreviewCollection = $("#" + idConst + x + "_" + y);
                

                if ((y == toolTipPlacesCollection[key]['y']) && (!imagePreviewCollection.length)) {
                    $("<img src='Images/lookMe.png' alt='' class='ttPreview' id='" + idConst + x + "_" + y + "' />").appendTo(this);
                }
            });
        }

    }

});

//  }
//  ToolTopPreview

function findPos(obj) {
    if (obj) {
        var curleft = 0;
        var curtop = 0;
        if (obj.offsetParent) {
            curleft = obj.offsetLeft;
            curtop = obj.offsetTop;
            while (obj = obj.offsetParent) {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            }
        }

        var result = new Object();

        result['x'] = curleft;
        result['y'] = curtop;

        return result;
    }
}