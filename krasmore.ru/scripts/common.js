//Shadow
$(document).ready(function(){
    $("div.sub-menu-links").corner("bottom 5px");

    $('.shadowed').each(function(){// ищем все элементы класса shadow
       $(this).textDropShadow('shadow')//далее работает функция, которая в качестве параметра получает название класса тени
    });

    //cell-image-gallery
    var forMainGallery = {

        galleryCssClass: "gallery",
        pointerBlockCssClass: "gallery-pointer-block",
        pointerCssClass: "gallery-pointer",
        imageCssClass: "cell-image",
        pathToGallery: "images/gallery/",

        //index
        "general": {
            collection: [
                "general-1.jpg",
                "general-2.jpg",
                "general-3.jpg"
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },

        //additional-service
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
        "excursions": {
            collection: [
                "excursions-1.jpg",
                "excursions-2.jpg",
                "excursions-3.jpg",
                "excursions-4.jpg",
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
        },
        "water-buns": {
            collection: [
                "water-buns-1.jpg",
                "water-buns-2.jpg",
                "water-buns-3.jpg",
                "water-buns-3.jpg",
                "water-buns-4.jpg"
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },
        "boat": {
            collection: [
                "boat-1.jpg",
                "boat-2.jpg",
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },
        "volleyball": {
            collection: [
                "volleyball-1.jpg",
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },

        //residence
        "house": {
            collection: [
                "house-1.jpg",
                "house-2.jpg",
                "house-3.jpg",
                "house-4.jpg",
                "house-5.jpg",
                "house-6.jpg",
                "house-7.jpg",
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },
        "tent": {
            collection: [
                "tent-1.jpg",
                "tent-2.jpg",
                "tent-3.jpg",
                "tent-4.jpg",
                "tent-5.jpg",
                "tent-6.jpg",
                "tent-7.jpg",
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },
        "сonditions": {
            collection: [
                "сonditions-1.jpg",
                "сonditions-2.jpg",
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },

        //path
        "big-boat": {
            collection: [
                "big-boat-1.jpg",
                "big-and-small-boat-1.jpg",
                "big-boat-3.jpg",
                "big-boat-4.jpg"
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },
        "small-boat": {
            collection: [
                "small-boat-1.jpg",
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        },

        //error-404
        "fiasco": {
            collection: [
                "fiasco-1.jpg",
            ],
            position: 0,
            activeContainer: 1,
            currentZindex: -1,
        }
    };

    var mainG = new GalleryCore(forMainGallery, false);
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