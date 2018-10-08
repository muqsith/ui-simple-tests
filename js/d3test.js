import '../css/d3test.css';

import * as d3 from 'd3';

console.log(d3);


d3
.select('body')
.data([4, 8, 15, 16, 23, 42])
.enter()
.append('p')
.text((d) => `I am number ${d} !`);
