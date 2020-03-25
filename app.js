window.addEventListener("load",() => {
 let long;
 let lat;
 let temperatureDescription = document.querySelector(".temperature-description");
 let temperatureDegree = document.querySelector(".temperature-degree");
 let locationtimezone = document.querySelector(".location-timezone");

 if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position =>{
         long = position.coords.longitude;
         lat = position.coords.latitude;
     }
const proxy ="https://cors-anywhere.herokuapp.com/"
const api = `https://api.darksky.net/forecast/bd962050e38eae41a7cb0743e0d9a683/${lat},${long}`;
 }   
fetch(api)
    .then(response =>{}
      return response.json();
     }
});

.then(data => {
    const {temperature, summary} = data.currently;
//Set DOM Elements from the API
temperatureDegree.textContent = temperature;
temperatureDescription.textContent = summary;
locationtimezone.textContent = data.timezone;
    
  });
});
}
});