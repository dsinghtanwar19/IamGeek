var student = {
  name:"",
  type:"student"
};

document.addEventListener('DOMLoaded',content);
function content(event){
  document.getElementById("name").addEventListener("Keyup", keyUp);

}
function keyUp(){
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
