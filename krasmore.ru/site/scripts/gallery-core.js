function GalleryCore(gallery, galleryCssClass, pointerBlockCssClass, pointerCssClass, imageCssClass, pathToGallery) {
    this.gallery = gallery;
    this.galleryCssClass = galleryCssClass;
    this.pointerBlockCssClass = pointerBlockCssClass;
    this.pointerCssClass = pointerCssClass;
    this.imageCssClass = imageCssClass;
    this.pathToGallery = pathToGallery ? pathToGallery : "";

    for (var id in this.gallery) {
        var p = this.gallery[id].collection;

        var pointers = $("#" + id + " > div." + this.pointerBlockCssClass);
        for(var j=0; j < p.length; j++) {
            pointers.append("<div id='gallery-pointer-id-"+ j +"' class='" + this.pointerCssClass + "-0'></div>");
        }

        $("#" + id).append("<div id='"+ id +"-1' class='" + this.imageCssClass + "'></div>");
        $("#" + id).append("<div id='"+ id +"-2' class='" + this.imageCssClass + "'></div>");

        this.next(id);
    }

    $("div." + this.galleryCssClass).on('click', function(e) {
        var id = e.target.id;
        var i = id.lastIndexOf("-");
        this.next(id.substring(0, i));
    }.bind(this));
}

GalleryCore.prototype.next = function(id) {
    var galleryObj = this.gallery[id];

    var pointer1 = $("#" + id + " > div." + this.pointerBlockCssClass + " > div." + this.pointerCssClass + "-0 > div." + this.pointerCssClass + "-1");
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

    $("#"+ id + " > div." + this.pointerBlockCssClass + " > #gallery-pointer-id-" + i)
        .append("<div class='" + this.pointerCssClass + "-1'></div>");

    this.showImage(galleryObj.collection[i], currentContainer, galleryObj.activeContainer, id);
}

GalleryCore.prototype.showImage = function(imgUrl, currentContainer, activeContainer, id) {
    // Make sure the new container is always on the background
    var galleryObj = this.gallery[id];
    galleryObj.currentZindex--;

    // Fade out the current container
    // and display the header text when animation is complete
    $("#" + id + "-" + currentContainer).fadeOut(1, function () {
        // Set the background image of the new active container
        $("#" + id + "-" + activeContainer).css({
            "background-image": "url(" + this.pathToGallery + imgUrl + ")",
            "display": "block",
            "z-index": galleryObj.currentZindex
        });
    }.bind(this));
}