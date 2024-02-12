function test()
{
    //get data

    var name = document.getElementById("name").value;
    var semister = document.getElementById("semister").value;
    var reg = document.getElementById("reg").value;
    var dept = document.getElementById("dept").value;
    var session = document.getElementById("session").value;
    alert("data stored");

    // storing data
    var name = localStorage.setItem("name", name);
    var semister = localStorage.setItem("semister", semister);
    var reg = localStorage.setItem("reg", reg);
    var dept = localStorage.setItem("dept", dept);
    var session = localStorage.setItem("session", session);





}



