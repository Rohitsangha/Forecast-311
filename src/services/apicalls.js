import axios from 'axios';

export async function getWards(wards) {

    wards.data = await axios.get('https://data.calgary.ca/resource/tz8z-hyaz.geojson')
      .then(function (response) {
          return response.data;
      });
}
