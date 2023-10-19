

export const createCardUi = ({image,id,price,title}) => {
    const cart = document.createElement("div");
    cart.classList.add("cart-item")
    cart.innerHTML = `

    <div class="mb-5">
    <img class="h-[80px] mb-[-40px] ps-4" src="${image}" alt="">
    <div class="border-2 shadow p-4 border-neutral-700 text-neutral-700 pt-10">
      <p class="font-bold mb-3 line-clamp-1">${title}</p>
      <div class="flex justify-between">
        <p class="text-neutral-500">$ <span>${price}</span></p>
        <div class="flex align-center w-[110px] bg-neutral-100 items-center justify-between">
          <button class="px-2 py-1 bg-neutral-300">
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
            
          </button>
          <p class="flex-grow text-end pe-3">7</p>
          <button class="px-2 py-1 bg-neutral-300" >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            
            
          </button>
        </div>
      </div>
    </div>


  </div>

    `;
    return cart;

} 