"use strict";
/*-------------------------------

    Header navbare page index

-------------------------------*/
    // // navbar hiden on scroll and show 
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

/*-------------------------------

            Video page 

-------------------------------*/

let videoPlayer = document.querySelector(".contentvideo");
let myvideo = document.querySelector(".boxvideo");
let colonevideo = document.querySelector(".colonevideo");
let closeicon = document.querySelector(".closeicon"); //btn close
let iCon = document.querySelector(".i-con"); //play video

    closeicon.addEventListener("click", () => {
    myvideo.style.display = "none";

    if (colonevideo.play) {
        colonevideo.pause();
    }
    });

    iCon.addEventListener("click",()=>{
        
        if (colonevideo.paused) {
            colonevideo.play();
        }

        myvideo.style.display = "block";
    });

        /*big video product*/
            function change(hu){
            document.querySelector(".pro-video").src = hu ;
            };
