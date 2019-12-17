var images = ["mies1.jpg", "mies2.jpg", "mies3.jpg", "nainen1.jpg", "nainen2.jpg", "nainen3.jpg", "mies4.jpg", "mies5.jpg", "nainen4.jpg", "nainen5.jpg", "nainen7.jpg", "nainen8.jpg", "nainen9.jpg"];
$(function () {
    var i = 0;
    $("#page1-article2").css("background-image", "url(img_change/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("#page1-article2").fadeOut("slow", function () {
        $(this).css("background-image", "url(img_change/" + images[i] + ")");
        $(this).fadeIn("slow");
                });
    }, 3000);
})