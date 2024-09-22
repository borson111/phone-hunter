const phoneLoading = async (searchText) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data;
    phoneSection(phones);
    
    
}
phoneLoading()

const phoneSection = (phones) =>{
    
    const phoneCards = document.getElementById('phobe-cards');
    phoneCards.textContent = ''
    phones.forEach(phone => {
        console.log(phone)

       const creatDiv = document.createElement('div')
       
       creatDiv.innerHTML = `
       <div class="card bg-gray-200 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="${phone.image}"
      alt="${phone.phone_name}"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <h2 class = "font-bold">$999</h2>
    <div class="card-actions">

      <button onclick ="handelShowDetails('${phone.slug}')" class="btn btn-primary ">Show Details</button>
    </div>
  </div>
</div>
       `
    phoneCards.appendChild(creatDiv);

    })
    cardLoader(false)
}



// search handle

const searchHandail = () => {
    

    const inputFild = document.getElementById('input-fild');
    const inputFildValue = inputFild.value;
    console.log(inputFildValue)
    phoneLoading(inputFildValue)
    cardLoader(true);
}


// show Detaile card
const handelShowDetails = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
   console.log(data)
   showDetailsCard(data)
   }


// card-Loader
const cardLoader = (isLoading) =>{
    const cardLoader = document.getElementById('card-Loader');
    if(isLoading){
        cardLoader.classList.remove('hidden')
    }else{
        cardLoader.classList.add('hidden');
    }
}


// show About Details Card
const showDetailsCard = (phone) =>{
    my_modal_5.showModal()
    const showDetailsCard = document.getElementById('showDetailsCard');
    showDetailsCard.innerHTML = `
    <div class="card bg-base-100">
  <figure class="px-10 pt-10">
    <img
      src="${phone?.data?.image}"
      alt="${phone?.data?.name}"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center py-5">
    <h2 class="card-title">${phone?.data?.name}</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    
  </div>
  
  <div class = "py-4">
  <h2><span class = "font-bold">Storage :</span>${phone?.data?.mainFeatures?.storage}</h2>
   <h2><span class="font-bold">Chipset: </span>${phone.data.mainFeatures.chipSet}</h2>
  <h2><span class="font-bold">Memory: </span>${phone?.data?.mainFeatures?.memory}</h2>
  <h2><span class="font-bold">Slug: </span>${phone?.data?.slug}</h2>
  <h2><span class="font-bold">Release data: </span>${phone?.data?.releaseDate}</h2>
  <h2><span class="font-bold">Brand: </span>${phone?.data?.brand}</h2>
  <h2><span class="font-bold">GPS: </span>${phone?.data?.others?.GPS}</h2>
  </div>
 
 
</div>
    `
}




