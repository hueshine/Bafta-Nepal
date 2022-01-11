
// const menuBtn = document.querySelector('.icon');
// const navBox = document.querySelector('.nav-hub')

// menuBtn.addEventListener('click',(e) => {
//     e.preventDefault();
//     menuBtn.classList.toggle('active')
//     console.log("clicked")
//     navBox.classList.toggle("active")
// })

// closeBtn.addEventListener('click',(e) => {
//     e.preventDefault();
//     navBox.classList.remove("active")
// })



$('.client-slider').owlCarousel({
    
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0,
        },
        600:{
            items:1,
            stagePadding: 0,
        },
        1000:{
            items:1,
            stagePadding: 250,
        }
    }
})

$('.news-slider').owlCarousel({
    
    // center: true,
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 20
            
        },
        600:{
            items:1,
            stagePadding: 20,
            
        },
        1000:{
            items:3,
            stagePadding: 100,
            
        },
        1500:{
            items:3,
            stagePadding: 200,
            
        }
    }
})

