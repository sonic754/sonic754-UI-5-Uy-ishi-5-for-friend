const arr = [
    {
        img :"Images/IMAGE (8).png",
        h2:"Stuffed Animals",
        btn:"Shop Now",
        color:"#FFC12C"

    },
        {
        img :"Images 2/IMAGE (9).png",
        h2:"Wooden Animals",
        btn:"Shop Now",
        color:"#FB416B"

    }
]




const parent1 = document.getElementById("parent1")
const info = localStorage.getItem("info")
let carzinaarr = []
const data = JSON.parse(localStorage.getItem("info")) || []
arr.map(item =>{
    const parent = document.getElementById("parent")
    const div = document.createElement("div")
    div.innerHTML = `



<div class="bg-[${item.color}] h-[188px] w-[570px] rounded-2xl flex">

    <div>
        <img class="relative bottom-15" src="${item.img}" alt="">
    </div>

<div class="flex flex-col gap-5  justify-center ml-14" >
        <h2 class="text-3xl text-white " >${item.h2}</h2>
    <button class="bg-white rounded-3xl w-[112px] h-[40px] text-[13px]" >${item.btn}</button>
</div>










</div>


    `
parent.append(div)

})





    const arr_2 = [
 {
    img:"Images 2/CARD.png",
    h2:"Teddy Bear",
    price:"$ 30.00 USD",
    btn:"add to cart"
},
{
    img:"Images 2/CARD_2.png",
    h2:"Mega Plush Toy",
    price:"$ 38.00 USD",
        btn:"add to cart"
},
{
    img:"Images 2/CARD_3.png",
    h2:"Cute Dog",
    price:"$ 24.00 USD",
        btn:"add to cart"
},
{
    img:"Images 2/CARD_4.png",
    h2:"Little Friend",
    price:"$ 27.00 USD",
        btn:"add to cart"
},
    ]


        const parent_2 = document.getElementById("parent_2")

    arr_2.map((item_2) =>{

            const div_2 = document.createElement("div")
            div_2.innerHTML = `
            <div class="bg-white w-[270px] h-[328px] rounded-2xl shadow-[#00000026] shadow-lg justify-center items-center gap-2 flex flex-col" >
    <img class="mb-4" src="${item_2.img}" alt="">
    <h2>${item_2.h2}</h2>
    <p class="bg-[#A5C926] text-white px-2 py-1 rounded-2xl" >${item_2.price}</p>
    <button id="buybtn" class = "buybtn bg-[#A5C926] text-white px-2 py-1 rounded-2xl"  >${item_2.btn}</button>
</div>
            
            `





parent_2.append(div_2)


  const buybtn = div_2.querySelector(".buybtn")
  buybtn.addEventListener("click" ,()=>{
  data.push(item_2)
  console.log(data);
  
  localStorage.setItem(  "info", JSON.stringify(data))
  })
})





const darkbtn = document.getElementById("darkbtn")
const lightbtn = document.getElementById("lightbtn")
const body = document.getElementById("body")


darkbtn.addEventListener('click' , ()=>{
    body.classList.add("bg-black" ,)
    body.classList.remove("bg-[bg-f8f8f8]")
localStorage.setItem("theme" ,JSON.stringify("bg-black"))
})
lightbtn.addEventListener('click' , ()=>{
    body.classList.add("bg-[#f8f8f8]" )
    body.classList.remove("bg-black" )
localStorage.setItem("theme" ,JSON.stringify("bg-white"))

})



const arr_3 = [
    {
        img:"Images 2/CARD_5.png",
        h2:"Happy Flower",
        price:"$ 30.00 USD",
        btn:"add to cart",
    },
        {
        img:"Images 2/CARD_6.png",
        h2:"Lift Machine",
        price:"$ 38.00 USD",
        btn:"add to cart",
    },
        {
        img:"Images 2/CARD_7.png",
        h2:"Wooden Camera",
        price:"$ 24.00 USD",
        btn:"add to cart",
    },
        {
        img:"Images 2/CARD_8.png",
        h2:"Little Rabbit",
        price:"$ 27.00 USD",
        btn:"add to cart",
    }
]


        const parent_3 = document.getElementById("parent_3")

arr_3.map(item_3 =>{
            const div_3 = document.createElement("div")
            div_3.innerHTML = `
            <div class="bg-white w-[270px] h-[328px] rounded-2xl shadow-[#00000026] shadow-lg justify-center items-center gap-2 flex flex-col" >
    <img class="mb-4" src="${item_3.img}" alt="">
    <h2>${item_3.h2}</h2>
    <p class="bg-[#A5C926] text-white px-2 py-1 rounded-2xl" >${item_3.price}</p>
        <button id="buybtn" class = "buybtn bg-[#A5C926] text-white px-2 py-1 rounded-2xl"  >${item_3.btn}</button>
</div>
            
            `


            parent_3.appendChild(div_3)
              const buybtn = div_3.querySelector(".buybtn")
  buybtn.addEventListener("click" ,()=>{
  data.push(item_3)
  console.log(data);
  
 localStorage.setItem(  "info", JSON.stringify(data))
  })
})



const arr_4 = [
    {
        p:"About The Shop",
        h2:"Watch Our Story",
        p_2:"There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.",
        img:"Images 2/playicon.png",

    },


]


arr_4.map(item_4 =>{
        const parent_4 = document.getElementById("parent_4")
            const div_4 = document.createElement("div")
            div_4.innerHTML = `
<div class="bg-[url(BG.png)] bg-cover h-[464px] flex flex-col items-center justify-center gap-5 " >
 <p class="text-white" >${item_4.p}</p>
 <h2 class="text-white text-4xl" >${item_4.h2}</h2>
 <p class="flex-wrap w-[750px] text-center text-white" >${item_4.p_2}</p>
 <img src="${item_4.img}" alt="">
</div>
            
            `


            parent_4.appendChild(div_4)
})






const arr_5 = [
    {
p:"@ElasticThemes",
h2:"We're on Instagram!",
img:"Images 2/IMAGE (21).png",
img2:"Images 2/IMAGE (22).png",
img3:"Images 2/IMAGE (23).png",
img4:"Images 2/IMAGE (24).png",
img5:"Images 2/IMAGE (25).png",
img6:"Images 2/IMAGE (26).png",
btn:"See More Photos",

    },
]


arr_5.map(item_5 =>{
        const parent_5 = document.getElementById("parent_5")
            const div_5 = document.createElement("div")
            div_5.innerHTML = `
<div class="flex flex-col items-center justify-center gap-4" >
    <p class="text-[#A5C926]" >${item_5.p}</p>
    <h2 class="text-[31px]" >${item_5.h2}</h2>
</div>


<div class="mt-15 flex gap-4 justify-center" >
    <img src="${item_5.img}" alt="">
    <img src="${item_5.img2}" alt="">
    <img src="${item_5.img3}" alt="">
    <img src="${item_5.img4}" alt="">
    <img src="${item_5.img5}" alt="">
    <img src="${item_5.img6}" alt="">
</div>

<button class="mt-15 bg-[#A5C926] rounded-3xl h-[48px] w-[173px] text-white flex justify-center items-center m-auto" >${item_5.btn}s</button>
            
            `


            parent_5.appendChild(div_5)
})












const arr_6 = [
    {
h2:"ToyStore",
p:"Home",
p2:"Catalog",
p3:"Delivery",
p4:"About",
p5:"Contacts",
p6:"Created with love by",
p7:"Elastic Themes",
p8:"Powered by Webflow",
p9:"Style Guide",
p10:"Licensing",
img:"Images 2/IMG.png",
img2:"Images 2/IMG2.png", 
img3:"Images 2/IMG3.png",
img4:"Images 2/IMG4.png",
img5:"Images 2/IMG5.png",

    },
]


arr_6.map(item_6 =>{
        const parent_6 = document.getElementById("parent_6")
            const div_6 = document.createElement("div")
            div_6.innerHTML = `
       <div class="flex flex-col " >
<div class="flex justify-evenly mt-10" >
          <div>
<h2 class="text-white text-[30px]" >${item_6.h2}</h2>
    </div>




    <div class="flex gap-5" >
<p class="text-white" >${item_6.p}</p>
<p class="text-white" >${item_6.p2}</p>
<p class="text-white" >${item_6.p3}</p>
<p class="text-white" >${item_6.p4}</p>
<p class="text-white" >${item_6.p5}</p>
    </div>




    <div class="flex items-center" >
<img src="${item_6.img}" alt="">
<img src="${item_6.img2}" alt="">
<img src="${item_6.img3}" alt="">
<img src="${item_6.img4}" alt="">
<img src="${item_6.img5}" alt="">
    </div>
</div>





    <div class="bg-[#FFFFFF40] h-[1px] w-[1300px] m-auto mt-30" >

    </div>




  <div class="flex justify-evenly gap-130 mt-10 mb-10" >
      <div class="flex gap-4">
<p class="text-white" >${item_6.p6}</p>
<p class="text-white" >${item_6.p7}</p>
    </div>




    <div class="flex gap-4" >
<p class="text-white" >${item_6.p8}</p>
    <p class="text-white" >${item_6.p9}</p>
<p class="text-white" >${item_6.p10}</p>

    </div>
  </div>
  </div>
            `


            parent_6.appendChild(div_6)
})









const korzina = document.getElementById("korzina")

korzina.addEventListener('click',()=>{
    window.location.href = "korzina.html"
})

