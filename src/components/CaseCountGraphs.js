import React from 'react';
import {
    XYPlot,
    FlexibleWidthXYPlot,
    ArcSeries,
    BarSeries,
    VerticalBarSeries, 
    VerticalGridLines, 
    HorizontalGridLines,
    XAxis,
    YAxis,
    ChartLabel
} from 'react-vis';
import * as d3 from 'd3';
import "./chart.css";

d3.csv("count1.csv", function(d) {
    console.log(d);
    return {
        agency_responsible : d.agency_responsible,
        count: d.count
        };
    }).then(function(data) {
    console.log(data[0]);
});

/* eslint-disable */
const CaseCountGraphs = () => {
    

    const myData = [
        {x: 'A', y: 10},
        {x: 'B', y: 5},
        {x: 'C', y: 15}
    ];

    return (
        <FlexibleWidthXYPlot 
            height={400}
            xType = "ordinal"
        >
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
        xPercent={0.02}
        yPercent={0.06}
        style={{
        textAnchor: 'end'
        }}
        />
        <YAxis/>
        <VerticalBarSeries 
            data={myData}
            color='#000000'
            opacity={1}
        />
        <HorizontalGridLines />
        </FlexibleWidthXYPlot>  
    )
}

export default CaseCountGraphs

