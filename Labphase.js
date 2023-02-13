var bouquet = [
    {
        id: 1,
        name: "fleur-cosmos",
        picture: "pictures/fleur-cosmos.webp",
        like: "false"
    
    },
    {
        id: 2,
        name: "fleurs-violettes",
        picture: "pictures/fleurs-violettes.webp",
        like: "false"
    },

    {
        id: 3,
        name: "champs-lavande",
        picture: "pictures/champs-lavande.webp",
        like: "false"
    },
    {
        id: 4,
        name: "arrangements-fleurs",
        picture: "pictures/arrangement-fleurs.webp",
        like: "false"
    },
 ]
var bouquet = []
document.addEventListener("DOMContentLoaded"), function () {
    let bouquetdiv = document.getElementById("bouquet")
    bouquet.forEach(product => {
        bouquetdiv.innerHTML += "\
 <div class='bouquet'> <img src='pictures/"+ bouquet.picture + "'> <p> " + bouquet.name + " </p> <i class='fa-leaf'> </i>\
        <div> <input type='number'> <button class='addtocart'> AJOUTER </button> <input type='hidden' value='"+ bouquet.id + "'> </div> </div>\
        "
    })
     }

     var buttons = document.getElementsByClassName("addtobouquet")

    for (const x of buttons) {
        x.addEventListener('click', function () {
        if (cart.find(a=> a.id == x.nextElementSibling.value)==undefined) {
           
            console.log(x.nextElementSibling, x.previousElementSibling);
            let product = products.find(a => a.id == x.nextElementSibling.value)
            product.quantity = parseInt(x.previousElementSibling.value)
            bouquet.push(bouquet)

            let bouquetdiv = document.getElementById("bouquet")
            bouquetdiv.innerHTML += "\
           <div> "+bouquet.name+"<br> quantite:"+bouquet.quantity+"<br> <button class='deletefrombouquet'> supprimer </button> <input type='hidden' value='"+ bouquet.id + "'></div>"
        }
    
        })
       }

       
 var buttons = myBtn.getElementsByClassName("modal-content")

    for (const x of buttons) {
        x.addEventListener('click', function ())

        }
    
        
        {
        if (modal-content.find(a=> a.id == x.nextElementSibling.value)==undefined)
    
        }
