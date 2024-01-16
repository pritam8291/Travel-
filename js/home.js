let searchbtn=document.querySelector('#search-btn');
    let searchbar=document.querySelector('.search-bar-container');
    let formbtn=document.querySelector('#login-btn');
    let loginform=document.querySelector('.login-form-container');
    let formclose=document.querySelector('#form-close');
    let forgotbtn=document.querySelector('#forgotbtn');
    let forgotform=document.querySelector('.forgot');
    let formclose2=document.querySelector('#form-close2');
    let registerbtn=document.querySelector('#register-btn');
    let registerform=document.querySelector('.register-form-container');
    let formclose1=document.querySelector('#form-close1');
    let menu=document.querySelector('#menu-bar');
    let navbar=document.querySelector('.navbar');
    let videobtn=document.querySelectorAll('.vid-btn');
    window.onscroll=()=>{
        searchbtn.classList.remove('fa-times');
        searchbar.classList.remove('active'); 
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        loginform.classList.remove('active');
    }
    searchbtn.addEventListener('click',()=>{
        searchbtn.classList.toggle('fa-times');
        searchbar.classList.toggle('active');
    });
    menu.addEventListener('click',()=>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });
    formbtn.addEventListener('click',()=>{
        loginform.classList.add('active');
       
    });
    formclose.addEventListener('click',()=>{
        loginform.classList.remove('active');
       
    });
    registerbtn.addEventListener('click',()=>{
        registerform.classList.add('active');
       
    });
    formclose1.addEventListener('click',()=>{
        registerform.classList.remove('active');
       
    });
    registerbtn.addEventListener('click',()=>{
        registerform.classList.add('active');
       
    });
    // forgotbtn.addEventListener('click',()=>{
    //     forgotform.classList.add('active');
       
    // });
    // formclose2.addEventListener('click',()=>{
    //     forgotform.classList.remove('active');
       
    // });
    videobtn.forEach(btn =>{
        btn.addEventListener('click',()=>{
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let src=btn.getAttribute('data-src');
            document.querySelector('#video-slider').src=src;
        });
    });
       var swiper = new Swiper(".review-slider", {
        spaceBetween:20,
        loop:true,
        autoplay:{
            delay:2500,
            disableOnInteraction:false,
        },
       breakpoints:{
            640:{
                slidesPerview: 1,
            },
            768:{
                slidesPerview: 2,
            },
            1024:{
                slidesPerview: 2,
            },
        },
     });
     const slide1=document.querySelectorAll(".slide");
     var counter=0;
     slide1.forEach(
        (slide,index)=>{
            slide.style.left=`${index*100}%`
        }
     )
    const slideimage=()=>{
        slide1.forEach(
            (slide)=>{
                slide.style.transform=`translateX(-${counter*100}%)`
            }
        )
    }
    const gonext=()=>{
        if(counter==slide1.length-1)
        {
            counter=0;
            slideimage();
        }
        else{
            counter++
            slideimage()
        }
      
    }
    const goprev=()=>{
        if(counter==0){
            counter=slide1.length-1;
            slideimage();
        }
        else{
            counter--
            slideimage()
        }
       
    }
     var swiper = new Swiper(".brand-slider", {
        spaceBetween:20,
        loop:true,
        autoplay:{
            delay:2500,
            disableOnInteraction:false,
        
        },
        breakpoints:{
            450:{
                slidesPerview:2,
            },
            768:{
                slidesPerview:3,
            },
            991:{
                slidesPerview:4,
            },
            1200:{
                slidesPerview:5,
            },
        },
     });
    //  function forgetpopup(){
    //     document.getElementsByClassName('login-form-container').style.display="none";
    //     document.getElementById('login').style.display="flex";
    //  }
   