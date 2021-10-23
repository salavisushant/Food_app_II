//getData

async function getData(url) {

    let res = await fetch(url)
    let data = await res.json()

    return data;
}

//showData

function append(data,container) {

    data.forEach(({strMeal,strMealThumb,strInstructions,strYoutube})=>{

        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerText ="Category-"+ strMeal;
        p.style.fontSize="20px"
        p.style.color="navy"
        // p.style.marginLeft="35%"

        let des = document.createElement('p')
        des.innerText =strInstructions;

        let youtube = document.createElement('P')
        youtube.innerText="YouTube Link -"+strYoutube;
    
      

        let img = document.createElement("img")

        img.src = strMealThumb;
        // img.style.marginLeft="35%"
        img.style.width="30%"

        let addtocart_btn = document.createElement("button");
 
        addtocart_btn.innerText = "Show Details";

        addtocart_btn.onclick = function () {
            addtoCart({strMeal,strMealThumb,strInstructions,strYoutube});  
            window.location.href = "latestrecepe.html"
           
        };


        div.append(img,p,addtocart_btn);

        container.append(div)


    })
}

if(localStorage.getItem("cart")==null){
    localStorage.setItem("cart",JSON.stringify([]));
}
 
function addtoCart(p) {
    let products_cart = JSON.parse(localStorage.getItem('cart'));
 
    products_cart.push(p);
 
    localStorage.setItem("cart",JSON.stringify(products_cart));
 
}


export {getData,append,addtoCart}