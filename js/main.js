"use strict";
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

    /*-------------------------------

        Header navbare page index

    -------------------------------*/
        // navbar hiden on scroll and show 
        // let head = document.querySelector(".tophead");
        // window.onscroll = ()=>{
        //     if(window.pageYOffset >= 500 ){ 
        //         head.style.position = 'fixed';
        //         document.querySelector(".top-header").style.display = "none";
                

        //     }else{
        //         head.style.position = 'relative';
        //         document.querySelector(".top-header").style.display = "block";
        //     }
        // }
        //icons scroll
            let iconscroll = document.querySelector(".scrotop");
            iconscroll.onclick = ()=>{
                window.scrollTo(0, 0);
            };


            // $(Window).scroll(function(){
            //     let scroll  =  $(window).scrollTop()
            
            //     if ( scroll > 50 )
            //     {
            //      $('.scrotop').fadeIn(2000)
            //     }
            //     else
            //     {
            //      $(".scrotop").fadeOut(500)
            //      } 
            // })

        /*----------------------------

            section  main Body page index

        ------------------------------*/
        //----carusel center coll
            //---loop image
            function hloop(e){
                document.getElementById("slides").src = e;
            }

        /*-------------------------

                add to cart

        -------------------------*/
        (()=>{
            let shopTn = document.querySelectorAll(".addToCart"); // span icon shopping

            //loop click
            shopTn.forEach( (shop)=>{
                shop.addEventListener("click", (ev)=>{
                    document.querySelector(".shopp-icon").style.display = 'none';
                    if(ev.target.parentElement.classList.contains("addToCart")){
                        
                        let fullPo = ev.target.parentElement.previousElementSibling.src;
                        let  pos = fullPo.indexOf('img');
                        let path = fullPo.slice(pos);
                        //console.log(path);
                        // object because get name / price / img
                        const item = {};
                        item.img = `${path}`;
                        //console.log(item);  

                        let name = ev.target.parentElement.nextElementSibling.nextElementSibling
                        .children[0].textContent;
                        item.name = name;

                        let price = ev.target.parentElement.nextElementSibling.nextElementSibling
                        .children[3].textContent;
                        //let finalPrice = price.slice(0).trim(); // (if one div contains $1700 this code get (slice(0)$82)if(slice(1)82))
                        item.price = price;
                        //creat element (card)
                        let cartT = document.createElement('div');
                        cartT.classList.add('item','p-center','aCartd','d-flex');
                        cartT.innerHTML = `
                        <img  src="${item.img}" class="photocarousel" alt="photo">
                        <div class="t-center FEATURED-t te-cartd">
                            <h4 id="textbanner">${item.name}</h4>
                            <span>$</span>
                            <h6 id="nuprice">${item.price}</h6>
                        </div>
                        <a href="#"  class="box-item-remo">
                            <ul class="in-put  Add-plus-mines">
                            <li><input type="button" value="-" class="minus  m-minus" disabled = 'false'></li>
                            <li><input type="text"  class="text-input-cu cu-input"  value="1"></li>
                            <li><input  type="button" value="+" class="pluse  p-pluse"></li>
                            </ul>
                        </a>
                        <div class="removeicon">
                        <i class="fal fa-times"></i>
                        </div>
                        </div>`;
                        let boxAddToCArt = document.querySelector(".boxAddToCArt"); // parent add to cart on navbar
                        let caritem = document.querySelector('.car-item'); 

                        boxAddToCArt.insertBefore(cartT,caritem);                    
                    }
                    // Equation pluse and minus
                    let inPrice;
                    document.querySelector(".p-pluse").addEventListener("click", function (w) {
                        //input value increment by (1)
                        w.preventDefault();
                        inPrice = document.querySelector(".cu-input").value;
                        inPrice++;
                        document.querySelector(".cu-input").value = inPrice;
                        document.querySelector(".m-minus").disabled = false;
                        console.log(inPrice);
                        pricetotal ();
                    });
                    // event decrement 
                    document.querySelector(".minus").addEventListener("click", function (w) {

                        w.preventDefault();
                        inPrice = document.querySelector(".cu-input").value; 
                        inPrice --;
                        document.querySelector(".cu-input").value = inPrice;
                        if(inPrice == 1){
                            document.querySelector(".m-minus").disabled = true;
                        }
                        document.querySelector(".cu-input").value = inPrice;
                        pricetotal ();
                    });
                    let price = document.querySelector("#nuprice").innerHTML;
            
                    function pricetotal (){// function price product * product number (Equation)
                
                        let ptotal = inPrice * price;
                        document.querySelector("#nuprice").innerHTML = ptotal;
                    }

                    document.querySelector('.fa-times').addEventListener("click", function(v){
                        v.preventDefault();
                    })
        
                })
            });

        })();
        
        /*-------------------------

            counter descount time day
            
            -------------------------*/
        let seconds = document.querySelector(".countdown-sec");

        let count = 0;
        (function addcount(){
                count ++;

                if (count == 60){
                    clearInterval(x)
                }
                seconds.innerHTML =  count ;
            })();
        let x = setInterval( addcount , 1000 )
