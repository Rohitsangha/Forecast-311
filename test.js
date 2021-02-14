import * as d3 from d3;

// Load count data
d3.csv('../../public/count.csv').then(function(data) {
    console.log(data[0]);
});
