// const openData =  () => {
//     url = `https://openapi.programming-hero.com/api/ai/tools`
//     const res =  fetch(url)
//     const data =  res.json()
//     console.log(data)
// }      // it's worng process 




const openData = async () => {
    url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
    buildCardSection(data.data.tools);
}
openData()




const buildCardSection = (data) => {
    // I show normaly 6 card in display 
    data = data.slice(0,6);
    // if i clickShort By date btn Then I show all data & show The card by Relised Date
    data.map(each =>{ 
        buildCard(each)
    })
}
const buildCard = (card) => {
    // console.log(card.features);
    // console.log(card.features[0]);
    // console.log(card.features[1]);
    // console.log(card.features[2]);
    // console.log(card?.features?.[3] || '');
    const cardSection = document.getElementById('card-section-area');
    // creat a card
    const newCard = document.createElement('div');
    newCard.classList.add(
        "card",
        "bg-base-100",
        "w-80",
        "lg:w-96",
        "shadow-xl",
        'mx-auto'
    );
    newCard.innerHTML = `
        <figure>
            <img
            src="${card.image}"
            alt="Shoes" />
        </figure>

        <div class="card-body">
            <h2 class="card-title">Features</h2>
            
            <ol id="card-features-list" class="list-decimal ml-6 mb-3">
                <li>${card?.features?.[0] || ''}</li>
                <li>${card?.features?.[1] || ''}</li>
                <li>${card?.features?.[2] || ''}</li>
                <li>${card?.features?.[3] || ''}</li>
            </ol>
            <hr>
            
            <h1 class="text-2xl font-bold mt-3">${card.name}</h1>

            <p class="flex mt-1">
            <img class="w-5 h-5" src="media/img/calender.svg" alt="">
            <span class="ml-2">${card['published_in']}</span>
            </p>

            <div class="card-actions justify-end">
            <button class="btn w-12 rounded-full">
                <img class="" src="media/img/arow.svg" alt="">
            </button>
            </div>
        </div>
    `
    cardSection.appendChild(newCard);
}