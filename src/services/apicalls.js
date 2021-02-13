import axios from 'axios';

export function getWards(wards) {

axios
      .get("https://data.calgary.ca/resource/tz8z-hyaz.geojson")
      .then(function(response) {  
        wards = response.data;
        console.log(wards);
      })
      .catch(function(error) {
        //change to something else/ remove for production build
        console.log(error);
      });

    let wardStyle = {
        fillColor: "blue",
        fillOpacity: 0.8,
    };

};