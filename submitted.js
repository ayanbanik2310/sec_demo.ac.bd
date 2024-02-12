
function test(){

var name = localStorage.getItem("name");
var semister = localStorage.getItem("semister");
var reg = localStorage.getItem("reg");
var dept = localStorage.getItem("dept");
var session = localStorage.getItem("session");
document.getElementById("name").value =name;
 document.getElementById("semister").value=semister;
 document.getElementById("reg").value=reg;
 document.getElementById("dept").value=dept;
 document.getElementById("session").value=session;
console.log(name)
}
test()