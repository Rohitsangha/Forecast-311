import axios from 'axios';

export async function getWards(wards) {

    let wards = await fetch('https://data.calgary.ca/resource/tz8z-hyaz.geojson', { method : 'GET'})
      .then((response) => response.json())
      .then(data => {
        return data['features'];
    });
    
    return {
        type: 'GET_AGENT_DETAILS',
        payload: wards
      }
}
