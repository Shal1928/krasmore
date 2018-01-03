var endpointFetchLast = "https://api.instagram.com/v1/users/self/media/recent/?access_token=4277204947.f83003d.4ab80ededfde4db6ac191524204c2faa";
var THUMBNAIL_INSTA = "thumbnail_insta";
var records = [];

$(document).ready(function () {
    $.ajax({
        url: endpointFetchLast,
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: "",
            format: "json"
        },
        success: function(response) {

            if(!response || !response.data || response.data.length == 0 ){
                console.log("В ответе не содержится данных о последних постах в Instagram пользователя krasmore.");
                return;
            }

            generateGallery(response.data.length - 1);
            var containers = $('div.' + THUMBNAIL_INSTA);
            fillRecordsAndFillGallery(response.data, containers);


        }
    });
});

function generateGallery(instaFetchCount) {
    var screenWidth = $(window).width();
    var thumbWidth = 320;
    var thumbMargin = 25 * 2;
    var columns = Math.floor(screenWidth / (thumbWidth + thumbMargin));
    columns = columns > 4 ? 4 : columns;
    var rows = Math.floor(instaFetchCount / columns);
    
    var i = 0;
    for(var r = 1; r <= rows; r++) {

        var rowPointer = $("#insta-gallery").append("<div class='row'></div>");

        for(var c = 1; c <= columns; c++) {
            var id = THUMBNAIL_INSTA+"_"+i;
            rowPointer.append("<div class='cell'></div>").append(
                "<div data-popup-open='"+i+"' class='"+THUMBNAIL_INSTA+"'></div>");


            if(i == instaFetchCount) {
                break;
            }
            i++;
        }

        if(i == instaFetchCount) {
            break;
        }
    }

    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var recordIndex = jQuery(this).attr('data-popup-open');
        var record = records[recordIndex];
        $('div.popup-img').css("background-image", "url('"+ record.media[0] +"')");
        $('#caption').text(record.caption);
        $('div.popup-insta').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        $('div.popup-insta').fadeOut(350);
        e.preventDefault();
    });
}

function fillRecordsAndFillGallery(datas, containers) {
    records = [];

    var i = -1;
    for(var d in datas) {
        if (!datas.hasOwnProperty(d)) {
            continue;
        }
        
        var r = datas[d];
        var record = {
            thumbnail: r.images.low_resolution.url,
            caption: r.caption.text,
            media: getMedia(r)
        };

        records.push(record);

        i++;
        fillGallery(containers[i], record);
    }
}


function getMedia(record) {
    var media = [];

    if(record.type === "carousel") {
        var mediaContainer = record.carousel_media;

        for(var c in mediaContainer) {
            if (!mediaContainer.hasOwnProperty(c)) {
                continue;
            }

            var record = mediaContainer[c];
            media.push(getMediaByType(record));
        }
    } else {
        media.push(getMediaByType(record));
    }

    return media;
}

function getMediaByType(record) {
    return record.type === "image" ? record.images.standard_resolution.url : record.videos.standard_resolution.url
}

function fillGallery(container, record) {
    $(container).css("background-image", "url('"+ record.thumbnail +"')");
}