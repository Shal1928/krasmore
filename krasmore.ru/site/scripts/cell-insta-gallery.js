var endpointFetchLast = "https://api.instagram.com/v1/users/self/media/recent/?access_token=4277204947.f83003d.4ab80ededfde4db6ac191524204c2faa";

$(document).ready(function () {
    var screenWidth = $(window).width();
    var thumbWidth = 320;
    var thumbMargin = 25 * 2;
    var instaFetchCount = 20;
    var columns = Math.floor(screenWidth / (thumbWidth + thumbMargin));
    columns = columns > 4 ? 4 : columns;
    var rows = Math.floor(instaFetchCount / columns);
    var isntaGalleryId = "insta-gallery";

    var i = 1;
    for(var r = 1; r <= rows; r++) {

        var rowPointer = $("#" + isntaGalleryId).append("<div class='row'></div>");

        for(var c = 1; c <= columns; c++) {
            rowPointer.append("<div class='cell'></div>").append(
                "<div style='background-color: mediumvioletred; width: 320px; height: 318px; margin: 25px auto;'></div>");

            if(i == instaFetchCount) {
                break;
            }
            i++;
        }

        if(i == instaFetchCount) {
            break;
        }
    }

    fetch();
});

function fetch() {
    $.ajax({
        url: endpointFetchLast,
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: "",
            format: "json"
        },
        success: function(response) {


        //     data
        //         :
        //         Array(20)
        //     0
        // :
        //     attribution
        //         :
        //         null
        //     caption
        //         :
        //     {id: "17885247430161428", text: "#красморе#отдыхнаприроде#поляна#свежийвоздух#приро…сноярском море круглый год 288-50-79, 89232759009", created_time: "1513610553", from: {…}}
        //     carousel_media
        //         :
        //         (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        //     comments
        //         :
        //     {count: 0}
        //     created_time
        //         :
        //         "1513610553"
        //     filter
        //         :
        //         "Normal"
        //     id
        //         :
        //         "1672609006055979327_4277204947"
        //     images
        //         :
        //     {thumbnail: {…}, low_resolution: {…}, standard_resolution: {…}}
        //     likes
        //         :
        //     {count: 15}
        //     link
        //         :
        //         "https://www.instagram.com/p/Bc2TQd2Ffk_/"
        //     location
        //         :
        //         null
        //     tags
        //         :
        //         (5) ["красморе", "поляна", "свежийвоздух", "природа", "отдыхнаприроде"]
        //     type
        //         :
        //         "carousel"
        //     user
        //         :
        //     {id: "4277204947", full_name: "Krasmore", profile_picture: "https://scontent.cdninstagram.com/t51.2885-19/s150…722017_1852501978335417_7181304663168253952_a.jpg", username: "krasmore"}
        //     user_has_liked
        //         :
        //         false


            /* FILTER */
            // If only one parameter is specified, no need to filter
            if(params.hasOwnProperty('user') != params.hasOwnProperty('tag')) {
                filteredArr = filteredArr.concat(response.data);

            }
            // Otherwise, since user data is always fetched first, filter by tag
            else {
                for(var i = 0; i < response.data.length; i++) {
                    if(response.data[i].tags.indexOf(params.tag) > -1) {
                        filteredArr.push(response.data[i]);

                    }
                }
            }

            /* CHECK */
            // Check if the limit has been reached, or if no more images are available
            if((~~filteredArr.length) >= params.limit || typeof response.pagination.next_max_id === 'undefined') {

                // Structure the returnObj in a similar fashion to how Instagram returns it
                var returnObj = {};
                returnObj.data = [];

                // Ensures only return up to the limit, or the number available, whichever is smaller
                for(var j = 0; j < Math.min(filteredArr.length, params.limit); j++) {
                    returnObj.data.push(filteredArr[j]);
                }
                if(params.hasOwnProperty('callback')) {
                    params.callback(returnObj, params.params);
                }
            } else {
                parent.fetch({
                    user: params.user,
                    tag: params.tag,
                    limit: params.limit,
                    callback: params.callback,
                    params: params.params,
                    maxId: response.pagination.next_max_id,
                    tmpArr: filteredArr
                });
            }
        }
    });
}
