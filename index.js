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