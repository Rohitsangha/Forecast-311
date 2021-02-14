import axios from 'axios';

export async function getWards() {

    let wards = await fetch('https://data.calgary.ca/resource/c2es-76ed.geojson', { method : 'GET'})
      .then((response) => response.json())
      .then(data => {
        return data['features'];
    });
    
    return {
        type: 'GET_AGENT_DETAILS',
        payload: wards
      }
}
