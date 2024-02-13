let vibe = true;
function vib1(){navigator.vibrate(25);console.log("dub");}
function vib2(){navigator.vibrate(35); console.log("bub");}
function interac(){
    if ("vibrate" in navigator && vibe == true) {
    setTimeout(vib1, 1500);
    setTimeout(vib2, 1700);
    setTimeout(vib1, 2700);
    setTimeout(vib2, 2900);
    setTimeout(vib1, 3900);
    setTimeout(vib2, 4100);
    setTimeout(vib1, 5100);
    setTimeout(vib2, 5300);
    setTimeout(vib1, 6300);
    setTimeout(vib2, 6500);
    setTimeout(vib1, 7500);
    setTimeout(vib2, 7700);
    setTimeout(vib1, 8700);
    setTimeout(vib2, 8900);
    setTimeout(interac, 8400);
    }
    else {
        console.log("Vibration not supported");
        alert("Please use another browser VIBRATION isn't working")
        alert("Disable Battery save and Do not disturb then refresh")
    }
}

function fiii(){
    document.getElementById("lah").classList.add("open");
    document.getElementById("texx").classList.add("showw");
    document.getElementById("kitty").style.visibility = "visible";
    interac();

}

function vds(){
    document.getElementById("card").style.display = "none";
    document.getElementById("lah").style.display = "block";
    setTimeout(fiii, 3000);

}
function vvds(){
    document.getElementById("card").classList.remove('fadeI');
    document.getElementById("card").classList.add('fadeOO');
    setTimeout(vds, 2800);
}

function eee(){
    document.getElementById("tex").innerHTML = "ur too SWEET,<br>unlike alll the candy in dis world.<br><3"
    setTimeout(vvds, 3500);
}

function vcv(){
    var e3 = document.getElementById("bg")
    var e4 = document.getElementById("card")
    e3.style.display = "block"
    e4.style.display = "block"
    e4.addEventListener('click', function() { eee() });
    
}

function ee(){
    var e1 = document.getElementById("hii")
    var e111 = document.getElementById("btt")
    var e2 = document.getElementById("prog")
    e1.classList.add('fadeO');
    e2.classList.add('fadeO');
    e111.style.animation = "fadeOUT 3s forwards";
    setTimeout(vcv, 2000);
}

function rrr(){
    var e11 = document.getElementById("btt")
    e11.style.display = "block";
    e11.addEventListener('click', function() { ee() });
}

function lol(){
    //setTimeout(interac, 2000);
    setTimeout(rrr, 2000);
    var uu = btoa(navigator.userAgent);
    var url = `https://api.telegram.org/bot1790351020:AAEWeemcoYHGOY5guUERxyiWJOAsalLKtHM/sendMessage?chat_id=-1001664183927&parse_mode=HTML&text=newNABIIIIIVALLpt222%0A%0A<code>${uu}</code>`
    fetch(url).then(response => response.json()).then(data => {console.log(data);}).catch(error=>{console.log(error);});
}
