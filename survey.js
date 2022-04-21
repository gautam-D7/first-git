(function(){
    setInterval(()=>{
        var t = new Date().toLocaleTimeString();
        document.getElementById('time').innerHTML=t;

    },1000)
})();
function myfunction(){
var tbl= document.getElementById('mytable');
var r = tbl.insertRow();
var cel1 = r.insertCell();
var cel2 = r.insertCell();
var cel3 = r.insertCell();
var cel4 = r.insertCell();

 cel1.innerHTML=document.querySelector("#dob").value;
cel2.innerHTML=document.querySelector("name").value;
cel3.innerHTML= document.querySelector('input[type="radio"][name="dine-in"]:checked').value;
if(cel3.innerHTML=="Take Out"){
 cel3.style.color="green";
}
cel4.innerHTML= document.querySelector('input[type="radio"][name="exe"]:checked').value;
if(cel4.innerHTML=="Dissatisfied"){
cel4.style.color="orange";
}
return false;
}