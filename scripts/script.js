// JavaScript Document
/************************/
/* CODE VOOR DE HARTJES */
/************************/

/* alle button met class 'wish' in de HTML opzoeken */
/* omdat er meer buttons geselecteerd moeten worden, wordt querySelectorAll gebruikt (en niet querySelector) */
/* het gevonden lijstje met buttons (een array) in de variabele 'hearts' opslaan */
var hearts = document.querySelectorAll("button.wish");

/* elke button laten luisteren naar een klik */
/* na een klik de functie 'toggleLove' uitvoeren */
/*hearts[0].addEventListener("click", addToFavorites);
hearts[1].addEventListener("click", addToFavorites);
hearts[2].addEventListener("click", addToFavorites);
hearts[3].addEventListener("click", addToFavorites);

/* nb. dit kan natuurlijk ook/beter met een for loop */
for (i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", addToFavorites);
}

/* liefde declareren of liefde wegnemen */
function addToFavorites(event) {
    /* het hartje waarop geklikt is in de variabele 'clickedHeart' opslaan */
    var clickedHeart = event.target;
   
    console.log(clickedHeart.alt);

    /* als het hartje de alt tag like heeft */
    if (clickedHeart.alt == "like") {
        /* het gebroken hartje vervangen door het gele hartje */
        
        /* Van lege naar het volle hartje */
        clickedHeart.src = "images/heart-simple-shape-silhouette.svg";
        /* Veranderd de alt tekst naar unlike */
        
        clickedHeart.alt = "unlike";
        /* en dan de functie aanroepen om de wishlist aan te passen */
        /* in dit geval moet er liefde bij */
        /* vandaar 'plus' */
        updateWishlist("plus");
    }
    /* als het hartje geel is */
    else {
        /* het gele hartje vervangen door het gebroken hartje */
        clickedHeart.src = "images/heart-shape-outline.svg";
        clickedHeart.alt = "like";
        /* en dan de functie aanroepen om de love-list aan te passen */
        /* in dit geval moet er liefde af */
        /* vandaar 'min' */
        updateWishlist("min");
    }
}

/* de Wishlist in de nav in de header updaten */
/* de action die meegegeven wordt, is "plus" of "min" */
function updateWishlist(action) {
    /* het getal (de span) in de Wishlist-link in de nav opzoeken */
    /* die span in de variabele 'loveListAmount' opslaan */
    let wishlistAmount = document.querySelector(".wishlist span");

    /* het huidige aantal gele hartjes bepalen */
    let currentAmount = wishlistAmount.innerHTML;
    /* dat is een string - dus even omzetten naar een getal */
    currentAmount = parseInt(currentAmount);

    /* het nieuwe aantal gele hartjes bepalen */
    /* te beginnen met een variabele om het nieuwe aantal in op te slaan */
    let newAmount;

    /* als er liefde bij moet */
    if (action == "plus") {
        /* het nieuwe aantal gele hartjes berekenen */
        newAmount = currentAmount + 1;
    }

    /* als er liefde af moet */
    else {
        /* het nieuwe aantal gele hartjes berekenen */
        newAmount = currentAmount - 1;
    }

    /* tenslotte het nieuwe aantal in de HTML zetten */
    wishlistAmount.innerHTML = newAmount;
}

// Bron: Sanne Dreamweaver //