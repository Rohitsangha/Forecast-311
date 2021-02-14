import React from 'react';
import {XYPlot, ArcSeries, LineSeries, VerticalBarSeries,VerticalGridLines,HorizontalGridLines,XAxis,YAxis,ChartLabel} from 'react-vis';
import * as d3 from 'd3';
import "./chart.css";
/* eslint-disable */
const CaseCountGraphs = () => {
    let myDat;
    // Load count data
    d3.csv('../../public/count.csv').then(function(data) {
        myDat = data;
    });

    let counts;
    const countData = [];

    const myData = [
        {x: 'A', y: 10},
        {x: 'B', y: 5},
        {x: 'C', y: 15}
    ];
    
    
    return (
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
        <LineSeries data={myData} />
        <VerticalGridLines />
        <HorizontalGridLines />
        </XYPlot>  
    )
    


    
}

export default CaseCountGraphs

