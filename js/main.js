$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG

    var flatPath = $(".flats path");
    var flatLink = $(".flat-link");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCLoseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats-button");


    flatPath.on("mouseover", function () {
        flatLink.removeClass("flat-link-active");
        flatPath.removeClass("current-flat");
        var currentFlat = $(this).attr("data-flat");
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
        $(`[data-flat=${currentFlat}]`).toggleClass("flat-link-active");

    });

    flatLink.on("mouseover", function () {
        flatPath.removeClass("current-flat");
        flatLink.removeClass("flat-link-active");
        var currentFlat = $(this).attr("data-flat");
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
        $(`[data-flat=${currentFlat}]`).toggleClass("flat-link-active");

    });

    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);

    });

    floorPath.on("click", toggleModal);
    modalCLoseButton.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);

    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            stringCurrentFloor = currentFloor.toLocaleString("en-US",
                { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(stringCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${stringCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            stringCurrentFloor = currentFloor.toLocaleString("en-US",
                { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(stringCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${stringCurrentFloor}]`).toggleClass("current-floor");
        }
    });


    function toggleModal() {
        modal.toggleClass("is-open");
    }
});