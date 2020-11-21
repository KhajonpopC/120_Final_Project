var contentEle = document.body.querySelector(".content");
var user = document.body.querySelector(".user");
var pass = document.body.querySelector(".pass");
var messageBox = document.createElement("div");
document.body.appendChild(messageBox);
var name = document.createElement("input");
var grade = document.createElement("input");
var list = [];
loginPage();
function loginPage() {
  document.body.querySelector(".submit").addEventListener("click", function () {
    if (user.value != "cool") {
      messageBox.innerHTML = "Wrong username";
      document.body.appendChild(messageBox);
    }
    if (pass.value != "password") {
      messageBox.innerHTML = "Wrong password";
      document.body.appendChild(messageBox);
    }
    if (user.value == "cool" && pass.value == "password") {
      gradeView();
    }
  });
}
function gradeView() {
  for (var i = 0; i < list.length; i++) {
    var gradeslist = document.createElement("div");
    document.body.appendChild(gradelist);
    gradeslist.innerHTML = name + grade;
    document.body.querySelector(".list").appendChild(gradeslist);
  }
  var addgradebutton = document.createElement("button");
  addgradebutton.innerHTML = "Add a Grade";
  document.body.appendChild(addgradebutton);
}

//Add Grade page. Two inputs: Name and password. If condition
function addgrade() {
  document.body.appendChild(name);
  document.body.appendChild(grade);
  var button = document.createElement(".button1");
  button.innerHTML = "Submit";
  body.appendChild(button);
  document.body
    .querySelector(".button1")
    .addEventListener("click", function () {
      document.body.appendChild(messageBox);
      if (input.value == "") {
        messageBox.innerHTML = " ";
        messageBox.innerHTML = "Must enter a name";
      }
      if (!isNaN(grade)) {
        messageBox.innerHTML = " ";
        messageBox.innerHTML = "Must enter a grade";
      }
    });
}