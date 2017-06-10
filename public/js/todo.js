$(document).ready(function() {
    $('button[name = "clear"]').on('click', function(e) {
        e.preventDefault();
        var item = $(this).closest('tr')[0].children[0].innerText.replace(/ /g, "-");
        $.ajax({
            type: "DELETE",
            url: "/todo/" + item,
            success: function(response) {
                location.reload();
            }
        });
    });
});