var list = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var temp;
var idlist = [];
var undolist = [];

function reload() {
  location.reload();
}

function undodisplay() {
  if (idlist.length > 0) {
    $("#undobutton").css("display", "block");
  } else {
    $("#undobutton").css("display", "none");
  }
}

$("#undobutton").click(function () {
  temp = undolist.pop();
  list.push(temp);
  var tempid = idlist.pop();
  $("#" + tempid).text("");
  undodisplay();
});

function wincheck() {
  if (
    ($("#1").text() == "x" && $("#2").text() == "x" && $("#3").text() == "x") ||
    ($("#1").text() == "x" && $("#4").text() == "x" && $("#7").text() == "x") ||
    ($("#1").text() == "x" && $("#5").text() == "x" && $("#9").text() == "x") ||
    ($("#2").text() == "x" && $("#5").text() == "x" && $("#8").text() == "x") ||
    ($("#3").text() == "x" && $("#6").text() == "x" && $("#9").text() == "x") ||
    ($("#4").text() == "x" && $("#5").text() == "x" && $("#6").text() == "x") ||
    ($("#7").text() == "x" && $("#8").text() == "x" && $("#9").text() == "x") ||
    ($("#7").text() == "x" && $("#5").text() == "x" && $("#3").text() == "x")
  ) {
    $("#wintext").text("Player X Wins");
    $("#restartwindow").css("display", "flex");
  } else if (
    ($("#1").text() == "o" && $("#2").text() == "o" && $("#3").text() == "o") ||
    ($("#1").text() == "o" && $("#4").text() == "o" && $("#7").text() == "o") ||
    ($("#1").text() == "o" && $("#5").text() == "o" && $("#9").text() == "o") ||
    ($("#2").text() == "o" && $("#5").text() == "o" && $("#8").text() == "o") ||
    ($("#3").text() == "o" && $("#6").text() == "o" && $("#9").text() == "o") ||
    ($("#4").text() == "o" && $("#5").text() == "o" && $("#6").text() == "o") ||
    ($("#7").text() == "o" && $("#8").text() == "o" && $("#9").text() == "o") ||
    ($("#7").text() == "o" && $("#5").text() == "o" && $("#3").text() == "o")
  ) {
    $("#wintext").text("Player O Wins");
    $("#restartwindow").css("display", "flex");
  } else {
    if (list.length == 0) {
      $("#wintext").text("It's a draw");
      $("#restartwindow").css("display", "flex");
    }
  }
}

$("button").click(function () {
  if ($(this).attr("id") in ids) {
    if ($(this).text() != "x" && $(this).text() != "o") {
      $(this).text(list[list.length - 1]);
      idlist.push($(this).attr("id"));
      temp = list.pop();
      undolist.push(temp);
      wincheck();
      undodisplay();
    }
  }
});

$("#undobutton").css("display", "none");
