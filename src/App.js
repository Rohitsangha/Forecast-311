import React, {useEffect, useState} from 'react';

import '@elastic/eui/dist/eui_theme_light.css';
import styles from"./App.module.css";
import { Header, Superselect, Modal} from './components';

import {Map, TileLayer, Marker, Popup, Polygon, GeoJSON, LayersControl} from "react-leaflet";

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
    const [features, setFeatures] = useState([]);

    useEffect(() => {
          getWards()
          .then(features => {
            setFeatures(features.payload)
          })
      }, [])

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
    const pKey = 'pk.eyJ1IjoiYWEtdmFyaXl1biIsImEiOiJja2w0dndvbnMweGZuMnVwNnB6bWNnOHJ3In0.AXjJhxpbYugbFdJQdWvC9Q';
    const id = 'mapbox.satellite';
    const geoKey = '47c493e6f47ef825d3817edf9f60f282a1042dbe';

    //Basemap information
    const tilesUrl = `https://api.maptiler.com/maps/positron/{z}/{x}/{y}@2x.png?key=${mapKey}`;
    const tilesUrl2 = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${pKey}`;
    let center = [51.0447,-114.0719];
  
    //Modal Functions
    const closeModal = () => setIsModalVisible(false);
    const showModal = () => setIsModalVisible(true);
    const highlight = '#FFA500';
    const defa = '#1e696b';


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
                        <LayersControl position="topright">
                            <LayersControl.BaseLayer checked name="Mapbox">
                                <TileLayer url={tilesUrl} tileSize={512} crossOrigin="true" minZoom={6} zoomOffset={-1}
                                attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'}/>
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Satellite">
                                <TileLayer url={tilesUrl2} tileSize={512} crossOrigin="true" minZoom={6} zoomOffset={-1} id={'mapbox.satellite'}
                                attribution= {'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}/>
                            </LayersControl.BaseLayer>
                        </LayersControl>

                        {features.map(data => (
                        <Polygon 
                        color={defa}
                        positions={data.geometry.coordinates[0].map(reverse)} 
                        onclick={showModal}  
                        onMouseOut={(e) => {e.target.setStyle({color:defa});}} 
                        onMouseOver={(e) => {e.target.setStyle({color:highlight});}} 
                        opacity="1"
                        >   
                        </Polygon>))}
                    </Map>
                </EuiPageContent>

            </EuiPageBody>
        </EuiPage>
       
    </>

    )

}

export default App;