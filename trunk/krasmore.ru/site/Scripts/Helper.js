//  ToolTip
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
var areaElement;
//var imagePreview;

$(document).ready(function () {

//    $("span.toolTipPlace").each(function (i, value) {

//        toolTipPlacesCollection[i] = findPos(value);
//    });

    var imagePreview = $("<img src='Images/lookMe.png' alt='' class='ttPreview' />").appendTo(".toolTipPlace");
    imagePreview.css({ opacity: 0 });


    imagePreview.bind({
        mouseenter: function (e) 
        {
            alert("Mouse enter");
             for (var key in toolTipPlacesCollection) 
             {

                 var previewTop = toolTipPlacesCollection[key]['y'] - 25;
                 var previewBottom = toolTipPlacesCollection[key]['y'] + 25;

                 if ((e.pageY >= previewTop) && (e.pageY <= previewBottom)) 
                 {

                     alert("Mouse enter");
//            $("span.toolTipPlace").each(function () {

//                var idConst = "ttPreviewId";
//                var x = findPos(this)['x'];
//                var y = findPos(this)['y'];
//                var imagePreviewCollection = $("#" + idConst + x + "_" + y);


//                if ((y == toolTipPlacesCollection[key]['y']) && (!imagePreviewCollection.length)) {
//                    $("<img src='Images/lookMe.png' alt='' class='ttPreview' id='" + idConst + x + "_" + y + "' />").appendTo(this);
////                    var divElement = $("<img width='1px' height='50px' id='ShowTrigger'></img>").appendTo(this);
////                    $(divElement).hide();
//                }
//            });
                 }
             }
        },
        mouseleave: function () {
            alert("leave");
        }
    });

    //    .bind("hover",
    //        function () {
    //            alert("enter");
    //        }
    //    );

    //areaElement
    //$(divElement).hide();

    //    $("span.toolTipPlace").each(function () {
    //        alert(findPos(this)); // выведет содержимое ссылок
    //    });


   

    //    for (var key in toolTipPlacesCollection) {
    //        alert(toolTipPlacesCollection[key]);
    //    }


});

//$(document).mousemove(function (e) {
function ShowPreviewImages(){

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
//                    var divElement = $("<img width='1px' height='50px' id='ShowTrigger'></img>").appendTo(this);
//                    $(divElement).hide();
                }
            });
        }
        //      else {
        //          for (var key2 in toolTipPlacesCollection) {
        //              var previewTop2 = toolTipPlacesCollection[key2]['y'] - 25;
        //              var previewBottom2 = toolTipPlacesCollection[key2]['y'] + 25;

        //              $("span.toolTipPlace").each(function () {

        //                  var idConst = "ttPreviewId";
        //                  var x = findPos(this)['x'];
        //                  var y = findPos(this)['y'];
        //                  var imagePreviewCollection = $("#" + idConst + x + "_" + y);


        //                  if ((y == toolTipPlacesCollection[key]['y']) && (!imagePreviewCollection.length)) {
        //                      $("<img src='Images/lookMe.png' alt='' class='ttPreview' id='" + idConst + x + "_" + y + "' />").appendTo(this);
        //                  }
        //              });
        //          }
        //      }

    }

}; //);

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