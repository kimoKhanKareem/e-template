
$('.oneSizeOwl, .center-carusel, .right-carousal, .product-add-sale').owlCarousel({
    nav:true,
    loop: true,
    autoplay: true,
    autoplaySpeed: true,
    margin:0,
    autoplayHoverPause: true,
    dots: true,
    navText:[ `<i class="far fa-chevron-left"></i>` , `<i class="far fa-chevron-right"></i>`] ,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*---------------------------------------------------------

carousel section nameClass  main-Body (div/="content-blo")

----------------------------------------------------------*/

$('.content-blo').owlCarousel({
    nav:true,
    loop: true,
    autoplay: true,
    autoplaySpeed: true,
    margin: 10,
    autoplayHoverPause: true,
    dots: true,
    navText:[ `<i class="fas fa-arrow-square-left"></i>` , `<i class="fas fa-arrow-square-right"></i>`] ,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

/*--------------------------------------------

           FEATURED PRODUCTS

--------------------------------------------*/

$('.product-content-carousel').owlCarousel({
    nav:true,
    loop: true,
    autoplay: true,
    autoplaySpeed: true,
    margin: 10,
    autoplayHoverPause: true,
    dots: true,
    navText:[ `<i class="fas fa-arrow-square-left"></i>` , `<i class="fas fa-arrow-square-right"></i>`] ,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
