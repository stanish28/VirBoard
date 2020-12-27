v = "";
function myFunction(a){
    console.log(a);
    v = v.concat(a);
    document.getElementById("area").innerHTML = v;
}

function myBackspace(a){
    v = v.substring(0,v.length-1);
    document.getElementById("area").innerHTML = v;
}

function mySpace(a){
    v = v.concat(" ");
    document.getElementById("area").innerHTML = v;
}