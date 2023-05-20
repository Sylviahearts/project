function submit() {
  let value1 = $("#inp-name").val();
  let value2 = $("#inp-email").val();

  $("#table").append("<tr><td>" + value1 + "</td>" + "<td>" + value2 + "</td></tr>")  ;
  $("#inp-name").val("");
  $("#inp-email").val("");

}

