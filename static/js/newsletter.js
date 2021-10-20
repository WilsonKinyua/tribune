$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    form = $("form");
    console.log(form)
    $.ajax({
      url: "/ajax/newsletter/",
      type: "POST",
      data: form.serialize(),
      dataType: "json",
      success: function (data) {
        alert(data["success"]);
      },
    });
    $("#id_your_name").val("");
    $("#id_email").val("");
  });
});
