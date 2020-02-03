$(document).ready(
    function () {
        $("#button").click(
        function () {
            const typedName = $("#name").val();
            const recivedImage = `https://joeschmoe.io/api/v1/${typedName}`
            $("#image").attr("src", recivedImage)
        });
});