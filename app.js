var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContent', contentLoader);

function contentLoader(event) {
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
  calculateOutput();
}

function calculateOutput() {
  student.name = document.getElementById('name').value;

  var total = 0;
  for (var i = 0; i < student.name.length; i++) {
    total += student.name.charCodeAt(i);
  }

  // Insert result into page
  var output = "Total Numeric value of person's name is " + total;
  document.getElementById('output').innerText = output;
}
