var list = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
var undolist = [];
var temp;
var idlist = [];

function undodisplay() {
  if (idlist.length > 0) {
    document.getElementById("undobutton").style.display = "block";
  } else {
    document.getElementById("undobutton").style.display = "none";
  }
}

function undo() {
  temp = undolist.pop();
  list.push(temp);
  document.getElementById(idlist.pop()).innerText = "";
  undodisplay();
}

function marker(id) {
  console.log(list);
  document.getElementById(id).innerText = list[list.length - 1];
  idlist.push(id);
  temp = list.pop();
  undolist.push(temp);
  undodisplay();
}

function winCheck() {
  if (
    (document.getElementById(1).innerText == "x" &&
      document.getElementById(2).innerText == "x" &&
      document.getElementById(3).innerText == "x") ||
    (document.getElementById(1).innerText == "x" &&
      document.getElementById(4).innerText == "x" &&
      document.getElementById(7).innerText == "x") ||
    (document.getElementById(1).innerText == "x" &&
      document.getElementById(5).innerText == "x" &&
      document.getElementById(9).innerText == "x") ||
    (document.getElementById(2).innerText == "x" &&
      document.getElementById(5).innerText == "x" &&
      document.getElementById(8).innerText == "x") ||
    (document.getElementById(3).innerText == "x" &&
      document.getElementById(6).innerText == "x" &&
      document.getElementById(9).innerText == "x") ||
    (document.getElementById(4).innerText == "x" &&
      document.getElementById(5).innerText == "x" &&
      document.getElementById(6).innerText == "x") ||
    (document.getElementById(7).innerText == "x" &&
      document.getElementById(8).innerText == "x" &&
      document.getElementById(9).innerText == "x") ||
    (document.getElementById(7).innerText == "x" &&
      document.getElementById(5).innerText == "x" &&
      document.getElementById(3).innerText == "x")
  ) {
    document.getElementById("wintext").innerText = "Player X Wins";
    document.getElementById("restartwindow").style.display = "flex";
  } else if (
    (document.getElementById(1).innerText == "o" &&
      document.getElementById(2).innerText == "o" &&
      document.getElementById(3).innerText == "o") ||
    (document.getElementById(1).innerText == "o" &&
      document.getElementById(4).innerText == "o" &&
      document.getElementById(7).innerText == "o") ||
    (document.getElementById(1).innerText == "o" &&
      document.getElementById(5).innerText == "o" &&
      document.getElementById(9).innerText == "o") ||
    (document.getElementById(2).innerText == "o" &&
      document.getElementById(5).innerText == "o" &&
      document.getElementById(8).innerText == "o") ||
    (document.getElementById(3).innerText == "o" &&
      document.getElementById(6).innerText == "o" &&
      document.getElementById(9).innerText == "o") ||
    (document.getElementById(4).innerText == "o" &&
      document.getElementById(5).innerText == "o" &&
      document.getElementById(6).innerText == "o") ||
    (document.getElementById(7).innerText == "o" &&
      document.getElementById(8).innerText == "o" &&
      document.getElementById(9).innerText == "o") ||
    (document.getElementById(7).innerText == "o" &&
      document.getElementById(5).innerText == "o" &&
      document.getElementById(3).innerText == "o")
  ) {
    document.getElementById("wintext").innerText = "Player O Wins";
    document.getElementById("restartwindow").style.display = "flex";
  } else {
    if (list.length == 0) {
      document.getElementById("wintext").innerText = "It's a draw";
      document.getElementById("restartwindow").style.display = "flex";
    }
  }
}

function game(id) {
  if (
    document.getElementById(id).innerText != "x" &&
    document.getElementById(id).innerText != "o"
  ) {
    marker(id);
    winCheck();
  }
}

function reload() {
  location.reload();
}

document.getElementById("undobutton").style.display = "none";
