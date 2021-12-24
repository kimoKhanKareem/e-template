let buyItems = document.getElementById("buyItems"); // checkout none       parentElement
let sumPrices = document.getElementById("sum-prices");// $0.00             cartSumPrice
let cards = document.querySelectorAll(".card"); // perent all box prodct       product

 let productsInCart = [];

cards.forEach(product => {
    product.addEventListener("click", (w) =>{
        w.preventDefault();

        
        if(w.target.classList.contains("addToCart")){
            let productID = w.target.dataset.productId;
            let productName = product.querySelector(".card-title").innerHTML;
            let productPrice = product.querySelector(".price").innerHTML;
            let productImage = product.querySelector("img").scr;

            let productToCart = {
                name: productName,
                image : productImage,
                id : productID,
                count : 1,
                price : +productPrice,
                basePrice :  +productPrice
            }
            updateProductsInCart(productToCart)
            console.log(hello);
        
        }
    });

});