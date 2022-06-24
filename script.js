
const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    }
    
    
    )
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}















import shopData from './ecom-data.json' assert {type: 'json'};

console.log(shopData);

const shopDataOriginal = shopData;

import arrivalData from './ecom-data.json' assert {type: 'json'};

console.log(arrivalData);

const arrivalDataOriginal = arrivalData;




function videoTemplate(shop) {
    return `

      <div class="pro">
          <img class="img" src="${shop.photo}">
          <div class="des">
            <span>${shop.cname}</span>

          <h5>${shop.type}</h5>
          <div class="star"><span><img src="/img/icons8-star-16.png">
            <img src="/img/icons8-star-16.png">
            <img src="/img/icons8-star-16.png">
            <img src="/img/icons8-star-16.png">
            <img src="/img/icons8-star-16.png">
          </span>
            <h4>${shop.price}</h4>
          </div>
          <a href="#"><span class="cart-desgin"><img src="/img/cart.svg"></span></a>
        </div>
      </div>
    
      
    `;
  }




document.getElementById("pro-details").innerHTML = `
   
${shopDataOriginal.shopData.map(videoTemplate).join("")}
  `

  document.getElementById("pro-details1").innerHTML = `
   
${arrivalDataOriginal.arrivalData.map(videoTemplate).join("")}
  `




