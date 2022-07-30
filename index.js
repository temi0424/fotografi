window.addEventListener("scroll", () => {
        document.querySelector("nav").classList.toggle("window-scrolled", window.scrollY > 0)
    })



    const textButtons=  document.querySelectorAll('.contact-btn');
    textButtons.forEach(textButton => {
          let text =textButton.querySelector('p');

           text.innerHTML= text.innerHTML.split('').map((character,index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('') 
})
   




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        599:{
            slidesPerView:2,
            spaceBetween: 40
        },
        1023:{
            slidesPerView:3,
            spaceBetween:60
        }
    }
  });




  const nav=document.querySelector(".nav-links")
  const menu=document.querySelector("#nav-open")
  const closeNavBtn=document.querySelector("#nav-close")
   
  const openNav = ()=> {
    nav.style.display="flex"
    menu.style.display="none"
    closeNavBtn.style.display="inline-block"

   }
   
  menu.addEventListener("click",openNav)

  const closeNav = ()=> {
    nav.style.display="none"
    menu.style.display="inline-block"
    closeNavBtn.style.display="none"

   }


 closeNavBtn.addEventListener("click",closeNav)

 nav.querySelectorAll(".nav-links li a").forEach(navLink => {
    navLink.addEventListener("click",closeNav)
 })