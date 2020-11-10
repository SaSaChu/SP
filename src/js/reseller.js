 

var unSelected = "rgba(151, 151, 151, 1.00)";
var selected = "rgba(58, 58, 58, 1.00)";

$(function () {
    $("select").css("color", unSelected);
    $("option").css("color", selected);
    $("select").change(function () {
        var selItem = $(this).val();
        if (selItem == $(this).find('option:first').val()) {
            $(this).css("color", unSelected);
        } else {
            $(this).css("color", selected);
        }
    });
}

