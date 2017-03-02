var student = {
  name:"",
  type:"student"
};

document.addEventListener('DOMContentLoaded',contentLoader);
function contentLoader(event){
  document.getElementById('name').addEventListener("Keyup", keyUp);

}
function keyUp(event){
  calculateOutput();
}
function calculateOutput(){
  student.name=document.getElementById('name').value;

  var total = 0;
  for(var i=0; i < student.name.length; i++ ){
    total = student.name.charCodeAt(i);
  }
  var output="Total Character in name" + total;
  document.getElementById('output').innerText = output;
}
