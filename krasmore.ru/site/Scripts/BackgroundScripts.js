//Author: Marco Kuiper (http://www.marcofolio.net/)

// Speed of the automatic slideshow
var slideshowSpeed = 4000;

// Variable to store the Images we need to set as background
// which also includes some text and url's.
var photos = [
{
    "image": "kost1.jpg",
    "firstline": "Чай у костра"
},
{
    "image": "nav1.jpg",
    "firstline": "Отличное место для дружных компаний"
},
{
    "image": "stol1.jpg",
    "firstline": "Отличное место для дружных компаний"
},
{
    "image": "nav2.jpg",
    "firstline": "Отличное место для дружных компаний"  
},
{
    "image": "pol1.jpg",
    "firstline": "Вдали от шума городского"
},
{
    "image": "pol2.jpg",
    "firstline": "Вдали от шума городского"
},
{
    "image": "pol3.jpg",
    "firstline": "Вдали от шума городского"
},
{
    "image": "kat1.jpg",
    "firstline": "Доставка на удобных катерах"
},
{
    "image": "kat2.jpg",
    "firstline": "Доставка на удобных катерах"
},
{
    "image": "bir1.jpg",
    "firstline": "Экскурсии по Красноярскому морю"
},
{
    "image": "bir2.jpg",
    "firstline": "Экскурсии по Красноярскому морю"
}
];



$(document).ready(function () {

    // Backwards navigation
    $("#back").click(function () {
        stopAnimation();
        navigate("back");
    });

    // Forward navigation
    $("#next").click(function () {
        stopAnimation();
        navigate("next");
    });

    var interval;
    $("#control").toggle(function () {
        stopAnimation();
    }, function () {
        // Change the background image to "pause"
        $(this).css({ "background-image": "url(Images/btn_pause_i.png)" });

        // Show the next image
        navigate("next");

        // Start playing the animation
        interval = setInterval(function () {
            navigate("next");
        }, slideshowSpeed);
    });


    var activeContainer = 1;
    var currentImg = 0;
    var animating = false;
    var navigate = function (direction) {
        // Check if no animation is running. If it is, prevent the action
        if (animating) {
            return;
        }

        // Check which current image we need to show
        if (direction == "next") {
            currentImg++;
            if (currentImg == photos.length + 1) {
                currentImg = 1;
            }
        } else {
            currentImg--;
            if (currentImg == 0) {
                currentImg = photos.length;
            }
        }

        // Check which container we need to use
        var currentContainer = activeContainer;
        if (activeContainer == 1) {
            activeContainer = 2;
        } else {
            activeContainer = 1;
        }

        showImage(photos[currentImg - 1], currentContainer, activeContainer);

    };

    var currentZindex = -1;
    var showImage = function (photoObject, currentContainer, activeContainer) {
        animating = true;

        // Make sure the new container is always on the background
        currentZindex--;

        // Set the background image of the new active container
        $("#headerimg" + activeContainer).css({
            "background-image": "url(Images/" + photoObject.image + ")",
            "display": "block",
            "z-index": currentZindex
        });

        // Hide the header text
//        $("#headertxt").css({ "display": "none" });

        // Set the new header text
        $("#firstline").html(photoObject.firstline);
//        $("#secondline")
//			.attr("href", photoObject.url)
//			.html(photoObject.secondline);
//        $("#pictureduri")
//			.attr("href", photoObject.url)
//			.html(photoObject.title);


        // Fade out the current container
        // and display the header text when animation is complete
        $("#headerimg" + currentContainer).fadeOut(function () {
            setTimeout(function () {
                $("#headertxt").css({ "display": "block" });
                animating = false;
            }, 500);
        });
    };

    var stopAnimation = function () {
        // Change the background image to "play"
        $("#control").css({ "background-image": "url(Images/btn_play_i.png)" });

        // Clear the interval
        clearInterval(interval);
    };

    // We should statically set the first image
    navigate("next");

    // Start playing the animation
    interval = setInterval(function () {
        navigate("next");
    }, slideshowSpeed);

});


//Shadow

$(document).ready(function(){
    $('.shadowed').each(function(){// ищем все элементы класса shadow
       $(this).textDropShadow('shadow')//далее работает функция, которая в качестве параметра получает название класса тени
    });
});
(function($) {
     $.fn.textDropShadow = function(ShdwClass){//элементы заменяются. Вместо оригинала внутри будет два спана - один содержащий сам текст, а другой тень этого текста.
     $(this).css('position','relative').html('<span class='+ShdwClass+'>'+$(this).html()+'</span><span style="position:relative;">'+$(this).html()+'</span>');
     return $(this);
     }
})(jQuery);


//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-31318602-1']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();