// Run node {filename} to get JSON array of graphable data

const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('count.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    console.log(results.map((el) => ({x: el.agency_responsible, y: el.count})));
});