import React, {useEffect, useState} from 'react';

import '@elastic/eui/dist/eui_theme_light.css';
import styles from"./App.module.css";
import { Header, Superselect, Modal} from './components';

import {Map, TileLayer, Marker, Popup, Polygon, GeoJSON} from "react-leaflet";

import { Icon } from 'leaflet';

import axios from 'axios';

import {getWards, getWards2} from './services/apicalls.js'


import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageSideBar,
    EuiSelect,
    EuiSideNav,
    EuiSideNavItem,
    EuiFieldSearch,
    EuiSuperSelect,
    EuiButton,
    EuiForm,
    EuiCallOut,
    EuiModal,
    EuiQuickSelectPopover,
  } from '@elastic/eui';
import { get } from 'http';

const App = () => {

    //Store States
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [features,setFeatures] = useState([]);

    useEffect(() => {
          getWards()
          .then(features => {
            setFeatures(features.payload)
          })
      }, [])


    // getWards().then(data => {console.log(data.payload[0].geometry.coordinates[0].map(reverse))})




      const reverse = (data) => {
        for(let i = 0; i < data.length; i++) {
            let lat = data[i][1];
            let lng =  data[i][0];
            data[i][0] =  lat;
            data[i][1] =  lng;
        }
        return data;
    }
    
    //Api keys **move to env file
    const mapKey = '7YdX4yPR0NXL8R9yqDyX';
    const geoKey = '47c493e6f47ef825d3817edf9f60f282a1042dbe';

    //Basemap information
    const tilesUrl = `https://api.maptiler.com/maps/positron/{z}/{x}/{y}@2x.png?key=${mapKey}`;
    let center = [51.0447,-114.0719];
  
    //Modal Functions
    const closeModal = () => setIsModalVisible(false);
    const showModal = () => setIsModalVisible(true);


    let wardStyle = {
        fillColor: 'blue',
        fillOpacity: '0.8',
    
    }


    var myLines = [{
        "type": "LineString",
        "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
    }, {
        "type": "LineString",
        "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
    }];

    return (
    <>
    {/* Using elastic page,sidebar and header modules */}
    <Header />

        <EuiPage>
            <EuiPageSideBar>
            </EuiPageSideBar>

            <EuiPageBody component="div">
                <Modal state={isModalVisible} close={closeModal}/>
                <EuiPageContent>
                    {/* Importing leaflet map and baselayer */}
                    <Map className={styles.leaflet} center={center} zoom={11} scrollWheelZoom={true} zoomSnap={0} maxZoom={100}>
                        <TileLayer url={tilesUrl} tileSize={512} crossOrigin="true" minZoom={6} zoomOffset={-1}/>
                        <Marker position={[51.0,-114]} onclick={showModal}></Marker>
                        {features.map(data => (<Polygon positions={data.geometry.coordinates[0].map(reverse)} opacity="1" ></Polygon>))}
                        {/* <GeoJSON style={wardStyle} data={wards.features} /> */}
                    </Map>
                </EuiPageContent>

            </EuiPageBody>
        </EuiPage>
       
    </>

    )

}

export default App;