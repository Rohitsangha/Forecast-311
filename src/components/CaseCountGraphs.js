import React from 'react';
import {
    XYPlot,
    FlexibleWidthXYPlot,
    ArcSeries,
    BarSeries,
    HorizontalBarSeries,
    VerticalBarSeries, 
    VerticalGridLines, 
    HorizontalGridLines,
    XAxis,
    YAxis,
    ChartLabel
} from 'react-vis';
import "./chart.css";


/*
d3.csv("count1.csv", function(d) {
    console.log(d);
    return {
        agency_responsible : d.agency_responsible,
        count: d.count
        };
    }).then(function(data) {
    console.log(data[0]);
});
*/

const countData = [
    {
        "agency_responsible": "AO - Calgary Parking Authority",
        "count": 359
    },
    {
        "agency_responsible": "Affiliated Organizations",
        "count": 129
    },
    {
        "agency_responsible": "CFOD - Assessment",
        "count": 3060
    },
    {
        "agency_responsible": "CFOD - Customer Services and Communications",
        "count": 58640
    },
    {
        "agency_responsible": "CFOD - Finance",
        "count": 342364
    },
    {
        "agency_responsible": "CFOD - Human Resources",
        "count": 3311
    },
    {
        "agency_responsible": "CFOD - Information Technology",
        "count": 97
    },
    {
        "agency_responsible": "CS - Calgary Community Standards",
        "count": 699939
    },
    {
        "agency_responsible": "CS - Calgary Emergency Management Agency",
        "count": 1905
    },
    {
        "agency_responsible": "CS - Calgary Fire",
        "count": 90762
    },
    {
        "agency_responsible": "CS - Calgary Housing",
        "count": 326
    },
    {
        "agency_responsible": "CS - Calgary Neighbourhoods",
        "count": 39708
    },
    {
        "agency_responsible": "CS - Calgary Parks",
        "count": 215971
    },
    {
        "agency_responsible": "CS - Calgary Recreation",
        "count": 49097
    },
    {
        "agency_responsible": "Corporate Wide Service Requests",
        "count": 19116
    },
    {
        "agency_responsible": "DCMO - Corporate Analytics and Innovation",
        "count": 13057
    },
    {
        "agency_responsible": "DCMO - Facility Management",
        "count": 1355
    },
    {
        "agency_responsible": "DCMO - Fleet Services",
        "count": 422
    },
    {
        "agency_responsible": "DCMO - Real Estate and Development Services",
        "count": 8687
    },
    {
        "agency_responsible": "DCMO - Supply",
        "count": 368
    },
    {
        "agency_responsible": "Elected Officials",
        "count": 5678
    },
    {
        "agency_responsible": "Environmental and Safety Management",
        "count": 5
    },
    {
        "agency_responsible": "LL - City Clerk's",
        "count": 10114
    },
    {
        "agency_responsible": "LL - City Manager's Office",
        "count": 266
    },
    {
        "agency_responsible": "LL - Law",
        "count": 12474
    },
    {
        "agency_responsible": "Office of the City Auditor",
        "count": 25
    },
    {
        "agency_responsible": "PD - Calgary Approvals Coordination",
        "count": 25
    },
    {
        "agency_responsible": "PD - Calgary Building Services",
        "count": 535911
    },
    {
        "agency_responsible": "PD - Calgary Growth Strategies",
        "count": 160
    },
    {
        "agency_responsible": "PD - Community Planning",
        "count": 1124
    },
    {
        "agency_responsible": "PD - Emergency Response",
        "count": 26
    },
    {
        "agency_responsible": "TRAN - Calgary Transit",
        "count": 103854
    },
    {
        "agency_responsible": "TRAN - Green Line",
        "count": 213
    },
    {
        "agency_responsible": "TRAN - Roads",
        "count": 605157
    },
    {
        "agency_responsible": "TRAN - Transportation Infrastructure",
        "count": 6260
    },
    {
        "agency_responsible": "TRAN - Transportation Planning",
        "count": 12135
    },
    {
        "agency_responsible": "UEP - Environmental and Safety Management",
        "count": 1693
    },
    {
        "agency_responsible": "UEP - Waste and Recycling Services",
        "count": 341222
    },
    {
        "agency_responsible": "UEP - Water Resources",
        "count": 19420
    },
    {
        "agency_responsible": "UEP - Water Services",
        "count": 264343
    },
    {
        "agency_responsible": "US - Urban Strategy",
        "count": 65
    }
];

const barData = countData.map((el) => ({x: el.count, y: el.agency_responsible}));
console.log(barData);

/* eslint-disable */
const CaseCountGraphs = () => {

    const myData = [
        {x: 10, y: 'A'},
        {x: 5, y: 'B'},
        {x: 15, y: 'C'}
    ];

    return (
        <FlexibleWidthXYPlot 
            margin= {
                {
                    left: 300
                }
            }
            height={720}
            yType = "ordinal"
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
        <HorizontalBarSeries 
            data={barData}
            color='#000000'
            opacity={1}
        />
        <VerticalGridLines/>
        </FlexibleWidthXYPlot>  
    )
}

export default CaseCountGraphs

