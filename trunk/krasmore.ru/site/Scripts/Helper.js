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
//var areaElement;
//var imagePreview;

$(document).ready(function ()
{
    //var imagePreview = $("<img src='Images/lookMe.png' alt='' class='ttPreview' />").appendTo(".toolTipPlace");
    //imagePreview.css({ opacity: 0 });
    
    $("span.toolTipPlace").each(function(i, value) 
    {
        toolTipPlacesCollection[i] = findPos(value);
        $(this).attr("id", "toolTipPlaceId" + findPos(value)["x"] + "_" + findPos(value)["y"]);
    });

    //imagePreview.hide();
});

$(document).mousemove(function (e) 
{
    for (var key in toolTipPlacesCollection) 
    {
        var previewTop = toolTipPlacesCollection[key]["y"] - 50;
        var previewBottom = toolTipPlacesCollection[key]["y"] + 50;

        if ((e.pageY >= previewTop) && (e.pageY <= previewBottom)) 
        {
            $("span.toolTipPlace").each(function () 
            {
                var idConst = "ttPreviewId";
                var x = findPos(this)['x'];
                var y = findPos(this)['y'];
                var toolTipPlaceX = toolTipPlacesCollection[key]['x'];
                var toolTipPlaceY = toolTipPlacesCollection[key]['y'];
                var imagePreviewCollection = $(this).find("#" + idConst + toolTipPlaceX + "_" + toolTipPlaceY);//$("#" + idConst + x + "_" + y);
                var toolTipPlaceId = $(this).attr("id");
                
                var toolTipPlaceTargetId = "toolTipPlaceId" + toolTipPlaceX + "_" + toolTipPlaceY;

                if ((toolTipPlaceId == toolTipPlaceTargetId) && (!imagePreviewCollection.length)) 
                {
                    console.log(toolTipPlaceId);
                    $("<img src='Images/lookMe.png' alt='' class='ttPreview' id='" + idConst + toolTipPlaceX + "_" + toolTipPlaceY + "' />").appendTo(this);
                }
            });
        
        } 
        
        if ((e.pageY < previewTop) || (e.pageY > previewBottom))  
        {
            //var iteration = 0;
            $("span.toolTipPlace").each(function () 
            {
                //iteration++;
                var idConst2 = "ttPreviewId";
                var x2 = findPos(this)['x'];
                var y2 = findPos(this)['y'];
                var toolTipPlaceX2 = toolTipPlacesCollection[key]['x'];
                var toolTipPlaceY2 = toolTipPlacesCollection[key]['y'];
                var imagePreviewCollection2 = $(this).find("#" + idConst2 + toolTipPlaceX2 + "_" + toolTipPlaceY2);
                var toolTipPlaceId2 = $(this).attr("id");
                
                var toolTipPlaceTargetId2 = "toolTipPlaceId" + toolTipPlaceX2 + "_" + toolTipPlaceY2;


                if ((toolTipPlaceId2 == toolTipPlaceTargetId2)&&(imagePreviewCollection2.length))
                {
                    //console.log("Remove ("+x+":"+y+") Iteration:"+iteration);
                    imagePreviewCollection2.remove();
                }
            });
         }

         //console.log('message...');
//        if ((e.pageY >= previewTop) && (e.pageY <= previewBottom)) 
//        { 
//            $("span.toolTipPlace").each(function () {

//                var idConst = "ttPreviewId";
//                var x = findPos(this)['x'];
//                var y = findPos(this)['y'];
//                var imagePreviewCollection = $("#" + idConst + x + "_" + y);

//                if ((y == toolTipPlacesCollection[key]['y']) && (!imagePreviewCollection.length)) 
//                {
//                    $("<img src='Images/lookMe.png' alt='' class='ttPreview' id='" + idConst + x + "_" + y + "' />").appendTo(this);
//                }
//            });
//        }
        
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