//First Attempt
var bgrounds=new Array(
"http://img-fotki.yandex.ru/get/4429/23478606.4/0_67a5e_b5feb5d9_L",
"http://img-fotki.yandex.ru/get/5414/23478606.4/0_678fd_b72f43d5_L",
"http://img-fotki.yandex.ru/get/5502/shal1928.3/0_4e97c_a08cfa4_L");

function changeBg() 
{ 
    var i=Math.floor(bgrounds.length*Math.random());
    document.body.background=bgrounds[i];
    setTimeout('changeBg()', 5000);

}


//Second Attempt
/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

// Speed of the automatic slideshow
var slideshowSpeed = 4500;

// Variable to store the images we need to set as background
// which also includes some text and url's.
var photos = [{
    "title": "Экскурсии",
    "image": "bir1.jpg",
    "url": "http://www.sxc.hu/photo/1271909",
    "firstline": "Эксукрсии по красноярскому морю"//,
//    "secondline": "Бирюса"
}, {
    "title": "Доставка",
    "image": "kat1.jpg",
    "url": "http://www.sxc.hu/photo/1265695",
    "firstline": "Доставка на большом и маленьком катере",
    "secondline": ""
}, {
    "title": "Поляна",
    "image": "pol1.jpg",
    "url": "http://www.sxc.hu/photo/1221065",
    "firstline": "Отдых на природе",
    "secondline": "Всей семьей"
}, {
    "title": "Костер",
    "image": "kost1.jpg",
    "url": "http://www.sxc.hu/photo/1271915",
    "firstline": "Еда на костре",
    "secondline": "Шашлыки"
}, {
    "title": "Стол",
    "image": "stol1.jpg",
    "url": "http://www.sxc.hu/photo/1042413",
    "firstline": "Большой компанией",
    "secondline": "Застолье"
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
        $(this).css({ "background-image": "url(images/btn_pause_i.png)" });

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
            "background-image": "url(images/" + photoObject.image + ")",
            "display": "block",
            "z-index": currentZindex
        });

        // Hide the header text
        $("#headertxt").css({ "display": "none" });

        // Set the new header text
        $("#firstline").html(photoObject.firstline);
        $("#secondline")
			.attr("href", photoObject.url)
			.html(photoObject.secondline);
        $("#pictureduri")
			.attr("href", photoObject.url)
			.html(photoObject.title);


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
        $("#control").css({ "background-image": "url(images/btn_play_i.png)" });

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
