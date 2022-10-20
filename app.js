let myCheckbox = document.querySelector(".switch input"),

    duration = document.querySelector(".month"),
    price = document.querySelector(".price .pricefix"),
    switcher = document.querySelector(".switch"),
    range = document.querySelector(".myRange");


// create price on switch

switcher.addEventListener("click", () => {

    if(myCheckbox.checked == true){
        
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * 0.25)) * 12}`;

        duration.textContent = '/year';
    }else{
        updatePrice();
        duration.textContent = '/month';
    }
})

let pageViews = document.querySelector(".page-views span");

range.addEventListener("input" , updatePrice);




// Refresh price (update)

function updatePrice(){
    if(range.value == 1){
        if(myCheckbox.checked == true){
            price.textContent = `${(8 - (8 * 0.25)) * 12}`
        }else{
            price.textContent = 8;
        }
        pageViews.textContent = "10K"
    }

    if(range.value == 2){
        if(myCheckbox.checked == true){
            price.textContent = 108;
        }else{
            price.textContent = 12
        }
        pageViews.textContent = "50K"
    }

    
    if(range.value == 3){
        if(myCheckbox.checked == true){
            price.textContent = 144;
        }else{
            price.textContent = 16;
        }
        pageViews.textContent = "100K"
    }

    if(range.value == 4){
        if(myCheckbox.checked == true){
            price.textContent = 160;
        }else{
            price.textContent = 20;
        }
        pageViews.textContent = "150K"
    }

    if(range.value == 5){
        if(myCheckbox.checked == true){
            price.textContent = 192;
        }else{
            price.textContent = 24;
        }
        pageViews.textContent = "200K"
    }

}
