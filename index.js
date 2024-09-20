gsap.fromTo("#hero-img img",
    { y: 10 },
    { 
      y: 0, 
      duration: 2, 
      yoyo: true, 
      repeat: -1 ,
    }
  );

  gsap.from("#hero-text h1 ,#PORTFOLIO-btn ",{
    x:-300,
    duration:2,
    delay:1,
    stagger:1.8,
});
 
gsap.from("#logo-div ", {
    x:-300,         
    duration: 2,    
    delay: 1,   
  });

  gsap.from("#nav-links ", {
    y:-300,         
    duration: 2,    
    delay: 1,   
    stagger:2.8,
  });
//Menubutton toogle code start
var btn = document.getElementById("menu-icon-btn");
var menuIcon = document.getElementById("nav-links");
var heroText = document.getElementById("hero-text");
var isopen=false;
btn.addEventListener("click",function(){
  if(isopen === false){
  menuIcon.style.visibility="visible";
  menuIcon.style.display="flex";
  menuIcon.style.flexDirection="column";

  
  isopen=true;
  }
  else{
    menuIcon.style.display="none";
    heroText.style.margin = "20px 0px 0px 20px"; 
    isopen=false;
  }
})
//Menubutton toogle code ends
