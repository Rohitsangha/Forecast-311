import React, {useState} from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
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

    //Api keys **move to env file
    const mapKey = '7YdX4yPR0NXL8R9yqDyX';
    const geoKey = '47c493e6f47ef825d3817edf9f60f282a1042dbe';

    //Basemap information
    const tilesUrl = `https://api.maptiler.com/maps/positron/{z}/{x}/{y}@2x.png?key=${mapKey}`;
    let center = [51.0447, -114];
  
    //Modal Functions
    const closeModal = () => setIsModalVisible(false);
    const showModal = () => setIsModalVisible(true);

    //fix this
    var wards = {data: []};
    getWards(wards);
    console.log(wards);

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

            <EuiPageBody 
                component="div">
                <EuiPageContent>
                    {/* Importing leaflet map and baselayer */}
                    <Map className={styles.leaflet} center={center} zoom={11} scrollWheelZoom={true} zoomSnap={0} maxZoom={100}>
                        <TileLayer url={tilesUrl} tileSize={512} crossOrigin="true" minZoom={6} zoomOffset={-1}/>
                        <Marker position={[51.0,-114]} onclick={showModal}></Marker>
                        <GeoJSON data={geojsonFeature} />
                    </Map>
                </EuiPageContent>

            </EuiPageBody>
        </EuiPage>
        <Modal state={isModalVisible} close={closeModal}/>
    </>

    )

}

export default App;