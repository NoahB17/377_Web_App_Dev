function calculateC(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    var c =Math. sqrt(a**2+b**2)
    document.getElementById("c").innerHTML=c;
}

function calculateVol(){
    var height= parseInt(document.getElementById("height").value);
    var width=parseInt(document.getElementById("width").value);  
    var length=parseInt(document.getElementById("length").value);  

    var volume= length*width*height;
    document.getElementById("volume").innerHTML=volume;

}

function calculateSlope(){
    var x1= parseInt(document.getElementById("x1").value);
    var x2= parseInt(document.getElementById("x2").value);
    var y1= parseInt(document.getElementById("y1").value);
    var y2= parseInt(document.getElementById("y2").value);

    var s1= y2-y1
    var s2=x2-x1
    var slope= s1/s2
    document.getElementById("slope").innerHTML=s1+"/"+s2;

}