"use strict";
/*-------------------------------

    Header navbare page index

-------------------------------*/
    // navbar hiden on scroll and show 
    // let head = document.querySelector(".tophead");
    // window.onscroll = ()=>{
    //     if(window.pageYOffset >= 500 ){ 
    //         head.style.position = 'fixed';
    //     }else{
    //         head.style.position = 'relative';
    //     }
    // }
    //icons scroll
        let iconscroll = document.querySelector(".scrotop");
        iconscroll.onclick = ()=>{
            window.scrollTo(0, 0);
        };

    /*------------------------

        page-proudect-single

    --------------------------*/

    let inPrice;

        document.querySelector(".pluse").addEventListener("click", function () {
            //input value increment by (1)
            inPrice = document.querySelector(".text-input-cu").value;
            inPrice++;
            document.querySelector(".text-input-cu").value = inPrice;
            document.querySelector(".minus").disabled = false;
            console.log(inPrice);
            pricetotal ();
        });
    
        // event decrement 
        document.querySelector(".minus").addEventListener("click", function () {

            inPrice = document.querySelector(".text-input-cu").value; 
            inPrice --;
            document.querySelector(".text-input-cu").value = inPrice;
            if(inPrice == 1){
                document.querySelector(".minus").disabled = true;
            }
            document.querySelector(".text-input-cu").value = inPrice;
            pricetotal ();
        });

        let price = document.querySelector(".totalprice").innerHTML;

        function pricetotal (){// function price product * product number (Equation)
    
            let ptotal = inPrice * price;
            document.querySelector(".totalprice").innerHTML = ptotal;
        }
    
        // loop 3 image  
        let thumbs= document.querySelector(".imgchoose-carouselitem").children;

        function cha(ev){
        document.querySelector(".imgchoose-carousel").src=ev.children[0].src;
        
        for(let i=0; i<thumbs.length;i++){
            thumbs[i].classList.remove("active");
        }
        ev.classList.add("active");
        }
