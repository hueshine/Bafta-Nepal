
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
    
    center: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 20
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:3,
            stagePadding: 200,
            
        }
    }
})

