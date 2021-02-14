import React, {useState} from 'react';

import '@elastic/eui/dist/eui_theme_light.css';
import styles from"./App.module.css";

import { Header, Superselect, Modal} from './components';

import {Map, TileLayer, Marker, Popup, Polygon} from "react-leaflet";

import { Icon } from 'leaflet';



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
  } from '@elastic/eui';


const App = () => {

    //Store States
    const [isModalVisible, setIsModalVisible] = useState(false);

    //Api keys **move to env file
    const mapKey = '7YdX4yPR0NXL8R9yqDyX';

    //Basemap information
    const tilesUrl = `https://api.maptiler.com/maps/positron/{z}/{x}/{y}@2x.png?key=${mapKey}`;
    let center = [51.0447,-114];
  
    //Modal Functions
    const closeModal = () => setIsModalVisible(false);
    const showModal = () => setIsModalVisible(true);

    
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
                    <Map className={styles.leaflet} center={center} zoom={11} scrollWheelZoom={false} zoomSnap={0}>
                        <TileLayer url={tilesUrl} tileSize={512} crossOrigin="true" minZoom={6} zoomOffset={-1}/>
                        <Marker position={[51.0,-114]} onclick={showModal}></Marker>

                    </Map>

    

                </EuiPageContent>

            </EuiPageBody>

        </EuiPage>
       
    </>

    )

}

export default App;