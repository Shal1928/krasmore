var gallery = {
    "bath": {
        collection: [
            "bath-1.jpg",
            "bath-2.jpg",
            "bath-3.jpg"
        ],
        position: 0,
        activeContainer: 1,
        currentZindex: -1,
    },
    "water-skies": {
        collection: [
            "water-skies-1.jpg",
            "water-skies-2.jpg",
        ],
        position: 0,
        activeContainer: 1,
        currentZindex: -1,
    }
};

var path = "Images/gallery/";


$(document).ready(function () {
    for (var id in gallery) {
        var p = gallery[id].collection;

        var pointers = $("#" + id + " > div.gallery-pointer-block");
        for(var j=0; j < p.length; j++) {
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
    var galleryObj = gallery[id];

    var pointer1 = $("#" + id + " > div.gallery-pointer-block > div.gallery-pointer-0 > div.gallery-pointer-1");
    if(pointer1) {
        pointer1.remove();
    }

    galleryObj.position++;
    if (galleryObj.position == galleryObj.collection.length + 1) {
        galleryObj.position = 1;
    }

    // Check which container we need to use
    var currentContainer = galleryObj.activeContainer;
    galleryObj.activeContainer = galleryObj.activeContainer == 1 ? 2 : 1;

    var i = galleryObj.position - 1;

    $("#"+ id + " > div.gallery-pointer-block > #gallery-pointer-id-" + i)
        .append("<div class='gallery-pointer-1'></div>");

    showImage(galleryObj.collection[i], currentContainer, galleryObj.activeContainer, id);
}

function showImage(img, currentContainer, activeContainer, id) {
    // Make sure the new container is always on the background
    var galleryObj = gallery[id];
    galleryObj.currentZindex--;



    // Fade out the current container
    // and display the header text when animation is complete
    $("#" + id + "-" + currentContainer).fadeOut(1, function () {
        // Set the background image of the new active container
        $("#" + id + "-" + activeContainer).css({
            "background-image": "url(" + path + img + ")",
            "display": "block",
            "z-index": galleryObj.currentZindex
        });
    });
}