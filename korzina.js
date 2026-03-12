const home = document.getElementById("home")
  home.addEventListener("click" , ()=>{
    window.location.href = "index.html"
})
  
const cancelledbtn = document.getElementById("cancelledbtn")
const cancel_order = document.getElementById("cancel_order")
const orderedbtn = document.getElementById("orderedbtn")
const orderbtn = document.getElementById("orderbtn")
const parent1 = document.getElementById("parent1")
const data = JSON.parse(localStorage.getItem("info")) || []





data.map(item =>{
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${item.img}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.h2}</h2>
    <p>${item.price}</p>
  </div>
  <div class="card-actions justify-end flex" >
  <button class="btn btn-primary w-96 rounded-tl-none rounded-tr-none" >remove item from cart(savatdan mahsulotni olib tashlang)</button>
  </div>
</div>

    `
    parent1.appendChild(div)
})



orderbtn.addEventListener('click' , ()=> {
  cancelledbtn.classList.add("hidden")
  orderbtn.classList.add("hidden")
orderedbtn.classList.remove("hidden")
orderedbtn.classList.add("flex")
cancel_order.classList.remove("hidden")
cancel_order.classList.add("flex")
cancel_order.addEventListener('click' , ()=> {
cancel_order.classList.add("hidden")
cancel_order.classList.remove("flex")
cancelledbtn.classList.add("flex")
cancelledbtn.classList.remove("hidden")
orderedbtn.classList.add("hidden")
orderbtn.classList.add("flex")
orderbtn.classList.remove("hidden")
})

})





