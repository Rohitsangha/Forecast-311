import React, {useState} from 'react';

import '@elastic/eui/dist/eui_theme_light.css';
import styles from"./App.module.css";

import { Header, Superselect, Modal} from './components';

import {Map, TileLayer, Marker, Popup, Polygon, GeoJSON} from "react-leaflet";

import { Icon } from 'leaflet';

import axios from 'axios';

import {getWards} from './services/apicalls.js'


import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageSideBar,
    EuiFieldSearch,
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

    //Api keys **move to env file
    const mapKey = '7YdX4yPR0NXL8R9yqDyX';

    //Basemap information
    const tilesUrl = `https://api.maptiler.com/maps/positron/{z}/{x}/{y}@2x.png?key=${mapKey}`;
    let center = [51.0447, -114];
  
    //Modal Functions
    const closeModal = () => setIsModalVisible(false);
    const showModal = () => setIsModalVisible(true);

    //fix this
    const a = getWards();
    console.log('this is a', a);

    let wardStyle = {
        fillColor: 'blue',
        fillOpacity: '0.8',
    }

    return (
    <>
    {/* Using elastic page,sidebar and header modules */}
    <Header />

        <EuiPage>

            <EuiPageSideBar>
            </EuiPageSideBar>

            <EuiPageBody component="div">
                <EuiPageContent>
                    {/* Importing leaflet map and baselayer */}
                    <Map className={styles.leaflet} center={center} zoom={11} scrollWheelZoom={true} zoomSnap={0} maxZoom={100}>
                        <TileLayer url={tilesUrl} tileSize={512} crossOrigin="true" minZoom={6} zoomOffset={-1}/>
                        <Marker position={[51.0,-114]} onclick={showModal}></Marker>
                        {/* <GeoJSON style={wardStyle} data={wards.features} /> */}
                    </Map>
                </EuiPageContent>

            </EuiPageBody>

        </EuiPage>
        <Modal state={isModalVisible} close={closeModal}/>
    </>

    )

}

export default App;