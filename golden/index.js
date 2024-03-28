
const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown")
const order = document.getElementById("buttt")
const formHeading = document.querySelector("form-heading")
const contactForm = document.querySelectorAll("contact-forn-input")
toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")
toggleBtnIcon.classList = isOpen
 ?"fa-solid fa-xmark"
 : "fa-solid fa-bars"
}



    
function sendMessage(){     
     var message = "Your Delivery Details";
     alert( "ITEM ADDED TO CART");  
    setTimeout(function() {
        window.location.href = "./contactus.html?message=" + message + "&fromButton=true";
    }, 100);
    
   
}
window.onload = function() {

    var params = new URLSearchParams(window.location.search);
    var message = params.get('message');
    var fromButton = params.get('fromButton');

    if (message && fromButton === 'true') {
        document.getElementById('message').innerHTML = message;
    }
    else{
        document.getElementById('message').innerHTML = "Contact Us"
    }
}


document.getElementById("add").addEventListener("dblclick", function(db){
   db = alert("Your Item Has Been Added To Cart")
    
},)


