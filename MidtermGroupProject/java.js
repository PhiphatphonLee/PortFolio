var product = ["Soccer Ball","Soccer Cleats","Soccer Shin Guards","Goalkeeper Gloves","Soccer Bag","Water Bottle","Soccer Goal","Speed Agility Training Set","Pinnies Scrimmage Vests Team Practice","Ball Pump",];
console.log(product);
function show1() {
    var member1Info = ["CFO", "Phone: 453-234-534532", "Email: asdfasdf@gmail.com"];
    let txt = ""
    for(var i = 0; i < member1Info.length; i++){
        console.log(member1Info[i]);
    }
    member1Info.forEach(myFunction);

    function myFunction(value){
        txt += value + "<br>"
    };
    document.getElementById("info1").innerHTML = txt;
    document.getElementById("buttonMember1").style.display = "none"
    document.getElementById("buttonMember2").style.display = "block"
    document.getElementById("info1").style.display = "block"
}

function hide1() {
    document.getElementById("buttonMember2").style.display = "none"
    document.getElementById("buttonMember1").style.display = "block"
    document.getElementById("info1").style.display = "none"
}

function show2() {
    var member1Info = ["CEO", "Phone: 997-486-444234645", "Email: Fspdfotyd@gmail.com"];
    let txt = ""
    for(var i = 0; i < member1Info.length; i++){
        console.log(member1Info[i]);
    }
    member1Info.forEach(myFunction);

    function myFunction(value){
        txt += value + "<br>"
    };
    document.getElementById("info2").innerHTML = txt;
    document.getElementById("buttonMember3").style.display = "none"
    document.getElementById("buttonMember4").style.display = "block"
    document.getElementById("info2").style.display = "block"
}

function hide2() {
    document.getElementById("buttonMember4").style.display = "none"
    document.getElementById("buttonMember3").style.display = "block"
    document.getElementById("info2").style.display = "none"
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})