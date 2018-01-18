//    var imagePreview = $("<img src='images/lookMe.png' alt='' class='ttPreview' />").appendTo(".toolTipPlace");
//    imagePreview.css({ opacity: 0 });


//    imagePreview.bind({
//        mousemove: function (e) 
//        {
//            alert("Mouse enter");
//             for (var key in toolTipPlacesCollection) 
//             {

//                 var previewTop = toolTipPlacesCollection[key]['y'] - 25;
//                 var previewBottom = toolTipPlacesCollection[key]['y'] + 25;

//                 if ((e.pageY >= previewTop) && (e.pageY <= previewBottom)) 
// 

//console.log('message...');
    
//alert("Mouse enter");
//            $("span.toolTipPlace").each(function () {

//                var idConst = "ttPreviewId";
//                var x = findPos(this)['x'];
//                var y = findPos(this)['y'];
//                var imagePreviewCollection = $("#" + idConst + x + "_" + y);


//                if ((y == toolTipPlacesCollection[key]['y']) && (!imagePreviewCollection.length)) {
//                    $("<img src='images/lookMe.png' alt='' class='ttPreview' id='" + idConst + x + "_" + y + "' />").appendTo(this);
////                    var divElement = $("<img width='1px' height='50px' id='ShowTrigger'></img>").appendTo(this);
////                    $(divElement).hide();
//                }
//            });
//                 }
//             }
//        },
//        mouseleave: function () {
//            //alert("leave");
//        }



//    });

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
//                      $("<img src='images/lookMe.png' alt='' class='ttPreview' id='" + idConst + x + "_" + y + "' />").appendTo(this);
//                  }
//              });
//          }
//      }
