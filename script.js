document.addEventListener("DOMContentLoaded", () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "a37da41679msh85c390529de135dp134b22jsn8fe66d12cf5d",
    },
  };

  let fetchedHotels = []
  function fetchHotel(){
    fetch(
      "https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=20&open_now=false&lang=en_US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.data);
        fetchedHotels = response.data
        console.log(fetchedHotels);
        renderHotel(fetchedHotels)

        
       
      })
      .catch((err) => console.error(err));
  }
  

  
  const searchBar = document.getElementById('searchBar')
        searchBar.addEventListener('keyup', (e)=>{
          let searchString = e.target.value.toLowerCase();
            console.log(searchString);
            //let filters = ['popo', 'jully']
            const filteredCharacters = fetchedHotels.filter(character=>{
              if (fetchedHotels.indexOf(character) == 4 || fetchedHotels.indexOf(character) == 11 || fetchedHotels.indexOf(character) == 18){
          
              }else{
              return character.name.toLowerCase().includes(searchString)
              }
            });
            //console.log(filteredCharacters); 
            renderHotel(filteredCharacters);
        })

    function renderHotel(hotels){
      hotels.map(hotel=>{ 
        if (hotels.indexOf(hotel) == 4 || hotels.indexOf(hotel) == 11 || hotels.indexOf(hotel) == 18){
          
        }else{

        let hotelDiv = document.createElement('div')
        hotelDiv.className = 'hotels'       
        
      hotelDiv.innerHTML = `

        <img src=${hotel.photo.images.original.url} alt="" class="hotel-img">
        <div class="sec1">
            <h3 class="hotel-name">${hotel.name}</h3>
            <p class="address ">Address:<em>${hotel.address}</em></p>
            <p class="description">${hotel.description}</p>
            <h5 class="cuisine ">Cuisines</h5>
            <ul class="list-cuisine">
                <li>glutten free</li>
                <li>sweet</li>               
            </ul>
        </div>
        <div class="sec2">
            <p class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Location</p>
            <p class="rating"><i class="fa fa-star" aria-hidden="true">${hotel.rating}</i></p>
            <p class=" pricing">${hotel.price}</p>
            <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Reserve Table</a>
            <p class="contacts">${hotel.email}</p>
            <a class="website" href=${hotel.website}>${hotel.website}</a>
            <br>            
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            <span id="like">0</span>
            <br>
            <i class="fa fa-thumbs-down" aria-hidden="true"></i>
            <span id="dislike">0</span>
        </div>  
      `
   

      let like = hotelDiv.querySelector('#like')
      let likes = Number(like.textContent)
        hotelDiv.querySelector('.fa-thumbs-up').addEventListener('click', ()=>{
          console.log('liked');
          like.textContent = likes++
          
        })
    
        let dislike = hotelDiv.querySelector('#dislike')
        let dislikes = Number(dislike.textContent)
        hotelDiv.querySelector('.fa-thumbs-down').addEventListener('click', ()=>{
          dislike.innerHTML = dislikes++
          console.log('disliked');
        })



      document.querySelector('.outerHotel').appendChild(hotelDiv)

    
        }

    })


    }
    let form = document.querySelector('.reserveform')
    form.addEventListener('submit', ()=>{
        let resname = document.getElementById('resname')
        alert(`We received your reservation details ${resname.value}. You will receive an email shortly`)
    })

    fetchHotel()

  
});
