var forMainGallery = {
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
    }
};


$(document).ready(function () {
    var mainGallery = new GalleryCore(
        forMainGallery,
        "gallery",
        "gallery-pointer-block",
        "gallery-pointer",
        "cell-image",
        "images/gallery/");
});