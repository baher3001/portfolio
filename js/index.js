// navbar btn 
// selectors  here 
let burgerBtn = document.querySelector('.burger');
let Navbar = document.querySelector('nav ul');
let Nav = document.querySelector('nav')
burgerBtn.addEventListener('click',()=>{

    Navbar.classList.toggle('nav-active');
    // Nav.style.position = "fixed";
    Nav.classList.toggle('navbar');
    //document.querySelector("nav ul").classList.remove('ul-active')      //.style.opacity= 1;
}); 

// btn Navbar links 
// selectors 
let Who =  document.querySelector('#who');
// let Cv =  document.querySelector('#who');
let Contact  =  document.querySelector('#contact');
/*
Who.addEventListener('click',()=>{

    // document.querySelector("nav ul").classList.toggle('.ul-active');
    // Who.href="";
});

Contact.addEventListener('click',()=>{

  
 //   document.querySelector("nav ul").classList.toggle("ul-active");
 
    
});*/

// end navbar btn 

// spinner page here 
window.addEventListener('load',()=>{

    document.querySelector(".loader").classList.add('fade');
    document.querySelector('.connection').style.display="none";

});


var time = setTimeout(()=>{

    document.querySelector(".loader").remove();
},800)


// end spinner page here 


// Offline 
window.addEventListener("offline",()=>{
let div = document.createElement('div');
div.className = "connection";
let icon = document.createElement('i');
//img.src="img/connection.gif";
icon.className="fas fa-wifi";
div.appendChild(icon);
document.body.appendChild(div);



});

// online 
window.addEventListener("online",()=>{

    // document.querySelector(".connection").style.display="none";
    //document.querySelector(".connection").classList.remove("con-off")

    document.querySelector('.connection').style.display="none";
});

// scroll 
window.addEventListener('scroll',()=>{
  let Nav = document.querySelector("nav");
    if(this.scrollY >= 25)
    {
        Nav.style.opacity= 0.8;
        // console.log('it is okay here ')
    }
    else
    {
        Nav.style.opacity= 1;
        // console.log('it is not  okay here ')

    }


});

