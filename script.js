document.addEventListener("DOMContentLoaded", () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "a37da41679msh85c390529de135dp134b22jsn8fe66d12cf5d",
    },
  };

  
  function fetchHotel(){
    fetch(
      "https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=20&open_now=false&lang=en_US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        renderHotel(response.data)
      })
      .catch((err) => console.error(err));
  }

  fetchHotel()
  

    function renderHotel(hotels){
      hotels.forEach(hotel=>{ 
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
            <a href="#" class="btn btn-success">Book Hotel</a>
            <p class="contacts">${hotel.email}</p>
            <p class="website">${hotel.website}</p>
        </div>  
      `
      document.querySelector('.outerHotel').appendChild(hotelDiv)
        }

    })


    }
});
