$(document).ready(function() {
    $('#send').click(formSubmit);
    var select = $("<select id = 'sel'>");
    select.prependTo('.form1');
    $.ajax({
        url: "https://meyecare.herokuapp.com/api/v1/supportTypes",
        success: function(result) {
            $.each(result, function(index, value) {
                $("<option>").append(value['supportTypeName']).appendTo("#sel");
            })
        }
    })
})

function formSubmit() {
    $('#form').submit();
}
