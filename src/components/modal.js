import React from 'react';
import "./chart.css";
import {XYPlot, LineSeries, VerticalBarSeries,VerticalGridLines,HorizontalGridLines,XAxis,YAxis,ChartLabel} from 'react-vis';


import {
    EuiButton,
    EuiModal,
    EuiModalBody,
    EuiModalFooter,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiText,
    EuiFlexGroup,
    EuiFlexItem,
    EuiSpacer,
  } from '@elastic/eui';


  const Modal = ({state,close}) => {

    
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

    const modalStyle = {
        position: 'fixed',
        left: '40%',
        top: '15%',
        
    }
    



    let modal;
    if (state) {
        modal = (
          <EuiModal onClose={close} style={modalStyle}>
            <EuiModalHeader>
              <EuiModalHeaderTitle style={{margin:'auto'}}>Analytics</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiFlexGroup>
                
                <EuiFlexItem>
                    <EuiText><p></p></EuiText>
                    <XYPlot height={400} width={400}>
                        <XAxis/>
                        <ChartLabel
                        text="X Axis"
                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.025}
                        yPercent={1.01}
                        />
                        <ChartLabel
                        text="Y Axis"
                        className="alt-y-label"
                        includeMargin={false}
                        xPercent={0.06}
                        yPercent={0.06}
                        style={{
                        transform: 'rotate(-90)',
                        textAnchor: 'end'
                        }}
                         />
                        <YAxis/>
                        <LineSeries data={data} />
                        <VerticalGridLines />
                        <HorizontalGridLines />
                    </XYPlot>
                </EuiFlexItem>
            </EuiFlexGroup>
          </EuiModal>
        );
      }
      return (<>{modal}</>)
  }

  export default Modal