var photos = {
    "water-skies": [
        "waterSkis0.5.jpg",
        "waterSkis1.0.jpg",
    ]
};

var currentImg = 0;
var activeContainer = 1;
var currentZindex = -1;

$(document).ready(function () {
    for (var id in photos) {
        var p = photos[id];

        var pointers = $("#" + id + " > div.gallery-pointer-block");
        for(var j=0; j < p.length; j++) {
            // var child = j == 0 ? "<div class='gallery-pointer-1'></div>" : "";

            pointers.append("<div id='gallery-pointer-id-"+ j +"' class='gallery-pointer-0'></div>");
        }

        $("#" + id).append("<div id='"+ id +"-1' class='cell-image'></div>");
        $("#" + id).append("<div id='"+ id +"-2' class='cell-image'></div>");

        next(id);
    }

    $("div.gallery").on('click', function(e) {
        var id = e.target.id;
        var i = id.lastIndexOf("-");
        next(id.substring(0,i));
    });
});


function next(id) {
    var gallery = photos[id];

    var pointer1 = $("#" + id + " > div.gallery-pointer-block > div.gallery-pointer-0 > div.gallery-pointer-1");
    if(pointer1) {
        pointer1.remove();
    }

    currentImg++;
    if (currentImg == gallery.length + 1) {
        currentImg = 1;
    }

    // Check which container we need to use
    var currentContainer = activeContainer;
    activeContainer = activeContainer == 1 ? 2 : 1;

    var i = currentImg - 1;

    $("#"+ id + " > div.gallery-pointer-block > #gallery-pointer-id-" + i)
        .append("<div class='gallery-pointer-1'></div>");

    showImage(gallery[i], currentContainer, activeContainer, id);
}

function showImage(img, currentContainer, activeContainer, id) {
    // Make sure the new container is always on the background
    currentZindex--;



    // Fade out the current container
    // and display the header text when animation is complete
    $("#" + id + "-" + currentContainer).fadeOut(1, function () {
        // Set the background image of the new active container
        $("#" + id + "-" + activeContainer).css({
            "background-image": "url(Images/" + img + ")",
            "display": "block",
            "z-index": currentZindex
        });
    });
}