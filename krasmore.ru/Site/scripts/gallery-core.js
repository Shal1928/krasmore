function GalleryCore(gallery, isReInit) {
    this.gallery = gallery;
    this.galleryCssClass = gallery.galleryCssClass;
    this.pointerBlockCssClass = gallery.pointerBlockCssClass;
    this.pointerCssClass = gallery.pointerCssClass;
    this.imageCssClass = gallery.imageCssClass;
    this.pathToGallery = gallery.pathToGallery ? gallery.pathToGallery : "";
    this.videoElements = [];

    var prepareContainers = function (id) {
        //Добавляем контейнеры для изображений
        var imageId1 = id + "-image-1";
        var imageId2 = id + "-image-2";

        $("#" + id).append("<div id='"+ imageId1 +"' class='" + this.imageCssClass + "'></div>");
        $("#" + id).append("<div id='"+ imageId2 +"' class='" + this.imageCssClass + "'></div>");

        $("#" + imageId1).css({
            "display": "none"
        });
        $("#" + imageId2).css({
            "display": "none"
        });

        this.videoElements.push(prepareVideoContainers(id, "1"));
        this.videoElements.push(prepareVideoContainers(id, "2"));
    }.bind(this);

    var prepareVideoContainers = function (id, index) {
        var idVideo = id + "-video-" + index;
        $("#" + id).append("<video controls autoplay width='640' height='640' id='" + idVideo + "'></video>");
        var videoElement = $("#" + idVideo);
        videoElement.append("<source id='"+ idVideo +"-s' src='' type='video/mp4' />");
        videoElement.css({
            "display": "none"
        });
        prepareFlashVideoContainers(idVideo);

        return videoElement;
    }

    var prepareFlashVideoContainers = function (idVideo) {
        var idVideoF = idVideo + "-f";
        $("#" + idVideo).append("<object id='" + idVideoF + "' type='application/x-shockwave-flash' data='http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf' width='640' height='640'></object>");

        $("#" + idVideoF).append("<param name='movie' value='http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf' />");
        $("#" + idVideoF).append("<param name='allowFullScreen' value='true' />");
        $("#" + idVideoF).append("<param name='wmode' value='transparent' />");
        $("#" + idVideoF).append("<param id='" + idVideoF + "-p' name='flashVars' value='' />");
    }

    var galleryElement = $("div." + this.galleryCssClass);

    for (var id in this.gallery) {
        var p = this.gallery[id].collection;
        if(!p) {
            continue;
        }

        var pointers = $("#" + id + " > div." + this.pointerBlockCssClass);

        if(isReInit) {
            pointers.empty();
            $("#"+ id +"-image-1").css({
                "background-image": null,
            });
            $("#"+ id +"-image-2").css({
                "background-image": null,
            });

            $("#"+ id +"-video-1").attr("src", null);
            $("#"+ id +"-video-1-f-p").attr("value", null);
            $("#"+ id +"-video-2").attr("src", null);
            $("#"+ id +"-video-2-f-p").attr("value", null);

            galleryElement.off('click');

            $("#"+ id +"-image-1").remove();
            $("#"+ id +"-image-2").remove();
            $("#"+ id +"-video-1").remove();
            $("#"+ id +"-video-2").remove();
    }

        for(var j=0; j < p.length; j++) {
            pointers.append("<div id='gallery-pointer-id-"+ j +"' class='" + this.pointerCssClass + "-0'></div>");
        }

        prepareContainers(id)
        this.next(id, true);
    }

    galleryElement.on('click', function(e) {
        var id = e.target.id;
        var i = id.lastIndexOf("-") - 6;
        this.next(id.substring(0, i), false);
    }.bind(this));
}

GalleryCore.prototype.next = function(id, isFirstExecution) {
    var galleryObj = this.gallery[id];
    var length = galleryObj.collection.length;

    var pointerBlock = $("#" + id + " > div." + this.pointerBlockCssClass);
    if(length == 1) {
        pointerBlock.css({
            "display": "none"
        });

        if(!isFirstExecution) {
            return;
        }
    } else {
        pointerBlock.css({
            "display": "block"
        });
    }

    var pointer1 = $("#" + id + " > div." + this.pointerBlockCssClass + " > div." + this.pointerCssClass + "-0 > div." + this.pointerCssClass + "-1");
    if(pointer1) {
        pointer1.remove();
    }

    galleryObj.position++;
    if (galleryObj.position == length + 1) {
        galleryObj.position = 1;
    }

    // Check which container we need to use
    var i = galleryObj.position - 1;
    var media = galleryObj.collection[i];
    media = media.type ? media : {url: media, type: "image"};

    var currentContainer = galleryObj.activeContainer;
    var currentContainerType = isFirstExecution ? media.type : galleryObj.activeContainerType;
    galleryObj.activeContainer = galleryObj.activeContainer == 1 ? 2 : 1;
    galleryObj.activeContainerType = media.type;


    $("#"+ id + " > div." + this.pointerBlockCssClass + " > #gallery-pointer-id-" + i)
        .append("<div class='" + this.pointerCssClass + "-1'></div>");

    this.showImage(media, currentContainer, currentContainerType, galleryObj.activeContainer, id);
}

GalleryCore.prototype.showImage = function(media, currentContainer, currentContainerType, activeContainer, id) {
    // Make sure the new container is always on the background
    var galleryObj = this.gallery[id];
    galleryObj.currentZindex--;

    var currentContainerElement = $("#" + id + "-" + currentContainerType + "-" + currentContainer);
    // Fade out the current container
    currentContainerElement.fadeOut(1, function () {

        if(currentContainerType === "video") {
            currentContainerElement[0].pause();
        }

        $("#" + id + "-" + currentContainerType + "-" + 1).css({
            "display": "none"
        });
        $("#" + id + "-" + currentContainerType + "-" + 2).css({
            "display": "none"
        });
        $("#" + id + "-" + media.type + "-" + currentContainer).css({
            "display": "none"
        });

        var selectorFirstPart = "#" + id + "-" + galleryObj.activeContainerType + "-";
        var activeContainerElement = $(selectorFirstPart + activeContainer);
        if(media.type === "image") {
            // Set the background image of the new active container
            activeContainerElement.css({
                "background-image": "url(" + this.pathToGallery + media.url + ")",
                "display": "block",
                "z-index": galleryObj.currentZindex
            });
        } else {

            var url = this.pathToGallery + media.url;
            activeContainerElement.attr("src", url);
            activeContainerElement.css({
                "display": "block",
                "z-index": galleryObj.currentZindex
            });
            $(selectorFirstPart + activeContainer + "-f-p").attr("value", "config={'playlist':[{'url': '" + url + "','autoPlay': true}]}'");
        }
    }.bind(this));
}

GalleryCore.prototype.videoStop = function () {
    for(var e in this.videoElements) {
        this.videoElements[e][0].pause();
    }
}