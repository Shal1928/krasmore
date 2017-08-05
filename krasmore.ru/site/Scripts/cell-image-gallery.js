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
    for (var i in photos) {
        var p = photos[i];

        showImage(p[0], 1, 2, i);
    }

    $("div.gallery").on('click', function(e) {
        var id = e.target.id;
        var i = id.lastIndexOf("-");
        next(id.substring(0,i));
    });
});


function next(id) {
    var gallery = photos[id];

    currentImg++;
    if (currentImg == gallery.length + 1) {
        currentImg = 1;
    }

    // Check which container we need to use
    var currentContainer = activeContainer;
    activeContainer = activeContainer == 1 ? 2 : 1;

    showImage(gallery[currentImg - 1], currentContainer, activeContainer, id);
}

function showImage(img, currentContainer, activeContainer, id) {
    // Make sure the new container is always on the background
    currentZindex--;



    // Fade out the current container
    // and display the header text when animation is complete
    $("#" + id + "-" + currentContainer).fadeOut(function () {
        // Set the background image of the new active container
        $("#" + id + "-" + activeContainer).css({
            "background-image": "url(Images/" + img + ")",
            "display": "block",
            "z-index": currentZindex
        });
    });
}