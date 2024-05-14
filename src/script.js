//select all filter buttons and cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards card");

//defining filterCards function
const filterCards=()=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //iterating over cards
    filterableCards.forEach(card=>{
        //to hide the cards intially
        card.classList.add("hide");

        //checking if card matches the selected filter or all filter
        if(card.dataset.name=== e.target.dataset.name||e.target.dataset.name=== "all"){
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button=> button.addEventListener("click",filterCards));
