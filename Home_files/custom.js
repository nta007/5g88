$(document).ready(function () {
    $("#wallet").click(function () {
        $(this).parent().toggleClass("show");
        return false;
    });

    $("button.mobile-menu").click(function () {
        $(".main_navbar").toggleClass("show");
    });
});
