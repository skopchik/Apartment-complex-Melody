$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");


    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);

    });

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
});