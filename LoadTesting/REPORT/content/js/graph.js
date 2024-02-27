/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 195.0, "minX": 0.0, "maxY": 1341.0, "series": [{"data": [[0.0, 195.0], [0.1, 195.0], [0.2, 195.0], [0.3, 196.0], [0.4, 196.0], [0.5, 197.0], [0.6, 197.0], [0.7, 197.0], [0.8, 197.0], [0.9, 197.0], [1.0, 197.0], [1.1, 197.0], [1.2, 197.0], [1.3, 197.0], [1.4, 197.0], [1.5, 197.0], [1.6, 198.0], [1.7, 198.0], [1.8, 198.0], [1.9, 198.0], [2.0, 198.0], [2.1, 198.0], [2.2, 198.0], [2.3, 198.0], [2.4, 198.0], [2.5, 198.0], [2.6, 198.0], [2.7, 198.0], [2.8, 198.0], [2.9, 198.0], [3.0, 198.0], [3.1, 198.0], [3.2, 198.0], [3.3, 198.0], [3.4, 198.0], [3.5, 198.0], [3.6, 199.0], [3.7, 199.0], [3.8, 199.0], [3.9, 199.0], [4.0, 199.0], [4.1, 199.0], [4.2, 199.0], [4.3, 199.0], [4.4, 199.0], [4.5, 199.0], [4.6, 199.0], [4.7, 199.0], [4.8, 199.0], [4.9, 199.0], [5.0, 199.0], [5.1, 199.0], [5.2, 199.0], [5.3, 199.0], [5.4, 199.0], [5.5, 199.0], [5.6, 199.0], [5.7, 199.0], [5.8, 199.0], [5.9, 200.0], [6.0, 200.0], [6.1, 200.0], [6.2, 200.0], [6.3, 200.0], [6.4, 200.0], [6.5, 200.0], [6.6, 200.0], [6.7, 200.0], [6.8, 200.0], [6.9, 200.0], [7.0, 200.0], [7.1, 200.0], [7.2, 200.0], [7.3, 200.0], [7.4, 200.0], [7.5, 200.0], [7.6, 200.0], [7.7, 200.0], [7.8, 200.0], [7.9, 200.0], [8.0, 200.0], [8.1, 200.0], [8.2, 200.0], [8.3, 200.0], [8.4, 200.0], [8.5, 200.0], [8.6, 200.0], [8.7, 200.0], [8.8, 201.0], [8.9, 201.0], [9.0, 201.0], [9.1, 201.0], [9.2, 201.0], [9.3, 201.0], [9.4, 201.0], [9.5, 201.0], [9.6, 201.0], [9.7, 201.0], [9.8, 201.0], [9.9, 201.0], [10.0, 201.0], [10.1, 201.0], [10.2, 201.0], [10.3, 201.0], [10.4, 201.0], [10.5, 201.0], [10.6, 201.0], [10.7, 201.0], [10.8, 201.0], [10.9, 201.0], [11.0, 201.0], [11.1, 201.0], [11.2, 201.0], [11.3, 201.0], [11.4, 201.0], [11.5, 201.0], [11.6, 201.0], [11.7, 201.0], [11.8, 201.0], [11.9, 201.0], [12.0, 201.0], [12.1, 201.0], [12.2, 201.0], [12.3, 201.0], [12.4, 201.0], [12.5, 201.0], [12.6, 201.0], [12.7, 201.0], [12.8, 202.0], [12.9, 202.0], [13.0, 202.0], [13.1, 202.0], [13.2, 202.0], [13.3, 202.0], [13.4, 202.0], [13.5, 202.0], [13.6, 202.0], [13.7, 202.0], [13.8, 202.0], [13.9, 202.0], [14.0, 202.0], [14.1, 202.0], [14.2, 202.0], [14.3, 202.0], [14.4, 202.0], [14.5, 202.0], [14.6, 202.0], [14.7, 202.0], [14.8, 202.0], [14.9, 202.0], [15.0, 202.0], [15.1, 202.0], [15.2, 202.0], [15.3, 202.0], [15.4, 202.0], [15.5, 202.0], [15.6, 202.0], [15.7, 202.0], [15.8, 202.0], [15.9, 202.0], [16.0, 202.0], [16.1, 202.0], [16.2, 202.0], [16.3, 202.0], [16.4, 202.0], [16.5, 202.0], [16.6, 203.0], [16.7, 203.0], [16.8, 203.0], [16.9, 203.0], [17.0, 203.0], [17.1, 203.0], [17.2, 203.0], [17.3, 203.0], [17.4, 203.0], [17.5, 203.0], [17.6, 203.0], [17.7, 203.0], [17.8, 203.0], [17.9, 203.0], [18.0, 203.0], [18.1, 203.0], [18.2, 203.0], [18.3, 203.0], [18.4, 203.0], [18.5, 203.0], [18.6, 203.0], [18.7, 203.0], [18.8, 203.0], [18.9, 203.0], [19.0, 203.0], [19.1, 203.0], [19.2, 203.0], [19.3, 203.0], [19.4, 203.0], [19.5, 203.0], [19.6, 203.0], [19.7, 203.0], [19.8, 203.0], [19.9, 203.0], [20.0, 203.0], [20.1, 204.0], [20.2, 204.0], [20.3, 204.0], [20.4, 204.0], [20.5, 204.0], [20.6, 204.0], [20.7, 204.0], [20.8, 204.0], [20.9, 204.0], [21.0, 204.0], [21.1, 204.0], [21.2, 204.0], [21.3, 204.0], [21.4, 204.0], [21.5, 204.0], [21.6, 204.0], [21.7, 204.0], [21.8, 204.0], [21.9, 204.0], [22.0, 204.0], [22.1, 204.0], [22.2, 204.0], [22.3, 204.0], [22.4, 204.0], [22.5, 205.0], [22.6, 205.0], [22.7, 205.0], [22.8, 205.0], [22.9, 205.0], [23.0, 205.0], [23.1, 205.0], [23.2, 205.0], [23.3, 205.0], [23.4, 205.0], [23.5, 205.0], [23.6, 205.0], [23.7, 205.0], [23.8, 205.0], [23.9, 205.0], [24.0, 205.0], [24.1, 205.0], [24.2, 205.0], [24.3, 205.0], [24.4, 205.0], [24.5, 205.0], [24.6, 205.0], [24.7, 205.0], [24.8, 205.0], [24.9, 205.0], [25.0, 205.0], [25.1, 205.0], [25.2, 205.0], [25.3, 205.0], [25.4, 205.0], [25.5, 205.0], [25.6, 205.0], [25.7, 205.0], [25.8, 206.0], [25.9, 206.0], [26.0, 206.0], [26.1, 206.0], [26.2, 206.0], [26.3, 206.0], [26.4, 206.0], [26.5, 206.0], [26.6, 206.0], [26.7, 206.0], [26.8, 206.0], [26.9, 206.0], [27.0, 206.0], [27.1, 206.0], [27.2, 206.0], [27.3, 206.0], [27.4, 206.0], [27.5, 206.0], [27.6, 206.0], [27.7, 206.0], [27.8, 206.0], [27.9, 206.0], [28.0, 206.0], [28.1, 207.0], [28.2, 207.0], [28.3, 207.0], [28.4, 207.0], [28.5, 207.0], [28.6, 207.0], [28.7, 207.0], [28.8, 207.0], [28.9, 207.0], [29.0, 207.0], [29.1, 207.0], [29.2, 207.0], [29.3, 207.0], [29.4, 207.0], [29.5, 207.0], [29.6, 207.0], [29.7, 207.0], [29.8, 207.0], [29.9, 207.0], [30.0, 208.0], [30.1, 208.0], [30.2, 208.0], [30.3, 208.0], [30.4, 208.0], [30.5, 208.0], [30.6, 208.0], [30.7, 208.0], [30.8, 208.0], [30.9, 208.0], [31.0, 208.0], [31.1, 209.0], [31.2, 209.0], [31.3, 209.0], [31.4, 209.0], [31.5, 209.0], [31.6, 209.0], [31.7, 209.0], [31.8, 209.0], [31.9, 209.0], [32.0, 210.0], [32.1, 210.0], [32.2, 210.0], [32.3, 210.0], [32.4, 210.0], [32.5, 210.0], [32.6, 210.0], [32.7, 210.0], [32.8, 210.0], [32.9, 210.0], [33.0, 211.0], [33.1, 211.0], [33.2, 211.0], [33.3, 211.0], [33.4, 211.0], [33.5, 211.0], [33.6, 211.0], [33.7, 212.0], [33.8, 212.0], [33.9, 212.0], [34.0, 212.0], [34.1, 212.0], [34.2, 212.0], [34.3, 212.0], [34.4, 212.0], [34.5, 212.0], [34.6, 212.0], [34.7, 212.0], [34.8, 213.0], [34.9, 213.0], [35.0, 213.0], [35.1, 213.0], [35.2, 213.0], [35.3, 213.0], [35.4, 213.0], [35.5, 213.0], [35.6, 214.0], [35.7, 214.0], [35.8, 214.0], [35.9, 214.0], [36.0, 214.0], [36.1, 214.0], [36.2, 215.0], [36.3, 215.0], [36.4, 215.0], [36.5, 215.0], [36.6, 215.0], [36.7, 215.0], [36.8, 215.0], [36.9, 215.0], [37.0, 215.0], [37.1, 216.0], [37.2, 216.0], [37.3, 216.0], [37.4, 216.0], [37.5, 216.0], [37.6, 217.0], [37.7, 217.0], [37.8, 217.0], [37.9, 217.0], [38.0, 217.0], [38.1, 217.0], [38.2, 217.0], [38.3, 217.0], [38.4, 217.0], [38.5, 217.0], [38.6, 217.0], [38.7, 218.0], [38.8, 218.0], [38.9, 218.0], [39.0, 218.0], [39.1, 218.0], [39.2, 218.0], [39.3, 218.0], [39.4, 218.0], [39.5, 218.0], [39.6, 218.0], [39.7, 219.0], [39.8, 219.0], [39.9, 219.0], [40.0, 219.0], [40.1, 219.0], [40.2, 219.0], [40.3, 219.0], [40.4, 219.0], [40.5, 219.0], [40.6, 220.0], [40.7, 220.0], [40.8, 220.0], [40.9, 220.0], [41.0, 220.0], [41.1, 220.0], [41.2, 221.0], [41.3, 221.0], [41.4, 221.0], [41.5, 221.0], [41.6, 221.0], [41.7, 221.0], [41.8, 221.0], [41.9, 222.0], [42.0, 222.0], [42.1, 222.0], [42.2, 222.0], [42.3, 222.0], [42.4, 222.0], [42.5, 222.0], [42.6, 222.0], [42.7, 222.0], [42.8, 222.0], [42.9, 222.0], [43.0, 222.0], [43.1, 222.0], [43.2, 222.0], [43.3, 223.0], [43.4, 223.0], [43.5, 223.0], [43.6, 223.0], [43.7, 223.0], [43.8, 223.0], [43.9, 223.0], [44.0, 223.0], [44.1, 223.0], [44.2, 224.0], [44.3, 224.0], [44.4, 224.0], [44.5, 224.0], [44.6, 224.0], [44.7, 224.0], [44.8, 224.0], [44.9, 225.0], [45.0, 225.0], [45.1, 225.0], [45.2, 225.0], [45.3, 225.0], [45.4, 225.0], [45.5, 225.0], [45.6, 225.0], [45.7, 225.0], [45.8, 225.0], [45.9, 226.0], [46.0, 226.0], [46.1, 226.0], [46.2, 226.0], [46.3, 226.0], [46.4, 226.0], [46.5, 226.0], [46.6, 226.0], [46.7, 226.0], [46.8, 226.0], [46.9, 227.0], [47.0, 227.0], [47.1, 227.0], [47.2, 227.0], [47.3, 228.0], [47.4, 228.0], [47.5, 228.0], [47.6, 228.0], [47.7, 228.0], [47.8, 229.0], [47.9, 229.0], [48.0, 229.0], [48.1, 229.0], [48.2, 229.0], [48.3, 229.0], [48.4, 229.0], [48.5, 229.0], [48.6, 229.0], [48.7, 230.0], [48.8, 230.0], [48.9, 230.0], [49.0, 230.0], [49.1, 230.0], [49.2, 230.0], [49.3, 230.0], [49.4, 230.0], [49.5, 230.0], [49.6, 230.0], [49.7, 230.0], [49.8, 231.0], [49.9, 231.0], [50.0, 231.0], [50.1, 231.0], [50.2, 231.0], [50.3, 231.0], [50.4, 232.0], [50.5, 232.0], [50.6, 232.0], [50.7, 232.0], [50.8, 232.0], [50.9, 232.0], [51.0, 232.0], [51.1, 233.0], [51.2, 233.0], [51.3, 233.0], [51.4, 233.0], [51.5, 233.0], [51.6, 233.0], [51.7, 234.0], [51.8, 234.0], [51.9, 234.0], [52.0, 234.0], [52.1, 234.0], [52.2, 234.0], [52.3, 234.0], [52.4, 235.0], [52.5, 235.0], [52.6, 235.0], [52.7, 236.0], [52.8, 236.0], [52.9, 236.0], [53.0, 236.0], [53.1, 238.0], [53.2, 238.0], [53.3, 238.0], [53.4, 238.0], [53.5, 238.0], [53.6, 239.0], [53.7, 239.0], [53.8, 239.0], [53.9, 240.0], [54.0, 240.0], [54.1, 241.0], [54.2, 241.0], [54.3, 241.0], [54.4, 242.0], [54.5, 242.0], [54.6, 243.0], [54.7, 243.0], [54.8, 243.0], [54.9, 243.0], [55.0, 243.0], [55.1, 244.0], [55.2, 246.0], [55.3, 246.0], [55.4, 246.0], [55.5, 247.0], [55.6, 248.0], [55.7, 248.0], [55.8, 249.0], [55.9, 249.0], [56.0, 250.0], [56.1, 250.0], [56.2, 251.0], [56.3, 252.0], [56.4, 252.0], [56.5, 253.0], [56.6, 254.0], [56.7, 257.0], [56.8, 257.0], [56.9, 258.0], [57.0, 259.0], [57.1, 263.0], [57.2, 266.0], [57.3, 280.0], [57.4, 288.0], [57.5, 307.0], [57.6, 307.0], [57.7, 308.0], [57.8, 308.0], [57.9, 308.0], [58.0, 308.0], [58.1, 308.0], [58.2, 309.0], [58.3, 309.0], [58.4, 309.0], [58.5, 309.0], [58.6, 309.0], [58.7, 309.0], [58.8, 310.0], [58.9, 310.0], [59.0, 310.0], [59.1, 310.0], [59.2, 310.0], [59.3, 310.0], [59.4, 310.0], [59.5, 311.0], [59.6, 311.0], [59.7, 311.0], [59.8, 311.0], [59.9, 311.0], [60.0, 311.0], [60.1, 311.0], [60.2, 311.0], [60.3, 311.0], [60.4, 311.0], [60.5, 311.0], [60.6, 312.0], [60.7, 312.0], [60.8, 312.0], [60.9, 312.0], [61.0, 312.0], [61.1, 312.0], [61.2, 312.0], [61.3, 312.0], [61.4, 313.0], [61.5, 313.0], [61.6, 313.0], [61.7, 313.0], [61.8, 313.0], [61.9, 313.0], [62.0, 313.0], [62.1, 313.0], [62.2, 313.0], [62.3, 313.0], [62.4, 313.0], [62.5, 313.0], [62.6, 313.0], [62.7, 313.0], [62.8, 314.0], [62.9, 314.0], [63.0, 314.0], [63.1, 314.0], [63.2, 314.0], [63.3, 314.0], [63.4, 314.0], [63.5, 314.0], [63.6, 314.0], [63.7, 314.0], [63.8, 314.0], [63.9, 314.0], [64.0, 314.0], [64.1, 314.0], [64.2, 314.0], [64.3, 314.0], [64.4, 314.0], [64.5, 314.0], [64.6, 314.0], [64.7, 314.0], [64.8, 314.0], [64.9, 314.0], [65.0, 314.0], [65.1, 314.0], [65.2, 314.0], [65.3, 315.0], [65.4, 315.0], [65.5, 315.0], [65.6, 315.0], [65.7, 315.0], [65.8, 315.0], [65.9, 315.0], [66.0, 315.0], [66.1, 315.0], [66.2, 315.0], [66.3, 315.0], [66.4, 315.0], [66.5, 315.0], [66.6, 316.0], [66.7, 316.0], [66.8, 316.0], [66.9, 316.0], [67.0, 316.0], [67.1, 316.0], [67.2, 316.0], [67.3, 316.0], [67.4, 316.0], [67.5, 316.0], [67.6, 316.0], [67.7, 316.0], [67.8, 316.0], [67.9, 317.0], [68.0, 317.0], [68.1, 317.0], [68.2, 317.0], [68.3, 317.0], [68.4, 317.0], [68.5, 317.0], [68.6, 317.0], [68.7, 317.0], [68.8, 317.0], [68.9, 317.0], [69.0, 317.0], [69.1, 317.0], [69.2, 318.0], [69.3, 318.0], [69.4, 318.0], [69.5, 318.0], [69.6, 318.0], [69.7, 318.0], [69.8, 318.0], [69.9, 318.0], [70.0, 318.0], [70.1, 318.0], [70.2, 318.0], [70.3, 318.0], [70.4, 318.0], [70.5, 318.0], [70.6, 318.0], [70.7, 319.0], [70.8, 319.0], [70.9, 319.0], [71.0, 319.0], [71.1, 319.0], [71.2, 320.0], [71.3, 320.0], [71.4, 320.0], [71.5, 320.0], [71.6, 320.0], [71.7, 320.0], [71.8, 320.0], [71.9, 320.0], [72.0, 320.0], [72.1, 320.0], [72.2, 320.0], [72.3, 320.0], [72.4, 320.0], [72.5, 321.0], [72.6, 321.0], [72.7, 321.0], [72.8, 321.0], [72.9, 322.0], [73.0, 322.0], [73.1, 322.0], [73.2, 322.0], [73.3, 322.0], [73.4, 322.0], [73.5, 322.0], [73.6, 322.0], [73.7, 322.0], [73.8, 322.0], [73.9, 322.0], [74.0, 322.0], [74.1, 322.0], [74.2, 322.0], [74.3, 323.0], [74.4, 323.0], [74.5, 323.0], [74.6, 323.0], [74.7, 324.0], [74.8, 324.0], [74.9, 324.0], [75.0, 324.0], [75.1, 324.0], [75.2, 324.0], [75.3, 324.0], [75.4, 324.0], [75.5, 324.0], [75.6, 324.0], [75.7, 325.0], [75.8, 325.0], [75.9, 325.0], [76.0, 325.0], [76.1, 325.0], [76.2, 325.0], [76.3, 326.0], [76.4, 326.0], [76.5, 326.0], [76.6, 326.0], [76.7, 326.0], [76.8, 326.0], [76.9, 326.0], [77.0, 326.0], [77.1, 326.0], [77.2, 326.0], [77.3, 326.0], [77.4, 327.0], [77.5, 327.0], [77.6, 327.0], [77.7, 327.0], [77.8, 327.0], [77.9, 327.0], [78.0, 327.0], [78.1, 328.0], [78.2, 328.0], [78.3, 328.0], [78.4, 329.0], [78.5, 329.0], [78.6, 329.0], [78.7, 330.0], [78.8, 330.0], [78.9, 330.0], [79.0, 330.0], [79.1, 330.0], [79.2, 330.0], [79.3, 330.0], [79.4, 330.0], [79.5, 331.0], [79.6, 331.0], [79.7, 331.0], [79.8, 331.0], [79.9, 331.0], [80.0, 331.0], [80.1, 331.0], [80.2, 332.0], [80.3, 332.0], [80.4, 332.0], [80.5, 332.0], [80.6, 332.0], [80.7, 332.0], [80.8, 332.0], [80.9, 332.0], [81.0, 332.0], [81.1, 333.0], [81.2, 333.0], [81.3, 333.0], [81.4, 333.0], [81.5, 334.0], [81.6, 334.0], [81.7, 334.0], [81.8, 334.0], [81.9, 334.0], [82.0, 334.0], [82.1, 334.0], [82.2, 334.0], [82.3, 334.0], [82.4, 334.0], [82.5, 335.0], [82.6, 335.0], [82.7, 335.0], [82.8, 335.0], [82.9, 335.0], [83.0, 335.0], [83.1, 335.0], [83.2, 336.0], [83.3, 336.0], [83.4, 336.0], [83.5, 336.0], [83.6, 336.0], [83.7, 336.0], [83.8, 337.0], [83.9, 337.0], [84.0, 337.0], [84.1, 337.0], [84.2, 337.0], [84.3, 337.0], [84.4, 338.0], [84.5, 338.0], [84.6, 338.0], [84.7, 339.0], [84.8, 339.0], [84.9, 339.0], [85.0, 339.0], [85.1, 339.0], [85.2, 339.0], [85.3, 339.0], [85.4, 339.0], [85.5, 340.0], [85.6, 340.0], [85.7, 340.0], [85.8, 340.0], [85.9, 341.0], [86.0, 341.0], [86.1, 342.0], [86.2, 342.0], [86.3, 342.0], [86.4, 342.0], [86.5, 342.0], [86.6, 342.0], [86.7, 342.0], [86.8, 342.0], [86.9, 342.0], [87.0, 342.0], [87.1, 342.0], [87.2, 343.0], [87.3, 343.0], [87.4, 343.0], [87.5, 343.0], [87.6, 344.0], [87.7, 345.0], [87.8, 345.0], [87.9, 345.0], [88.0, 345.0], [88.1, 346.0], [88.2, 346.0], [88.3, 347.0], [88.4, 347.0], [88.5, 347.0], [88.6, 347.0], [88.7, 347.0], [88.8, 347.0], [88.9, 347.0], [89.0, 348.0], [89.1, 348.0], [89.2, 348.0], [89.3, 348.0], [89.4, 348.0], [89.5, 348.0], [89.6, 349.0], [89.7, 351.0], [89.8, 351.0], [89.9, 352.0], [90.0, 353.0], [90.1, 353.0], [90.2, 353.0], [90.3, 354.0], [90.4, 354.0], [90.5, 355.0], [90.6, 355.0], [90.7, 355.0], [90.8, 356.0], [90.9, 356.0], [91.0, 356.0], [91.1, 357.0], [91.2, 358.0], [91.3, 358.0], [91.4, 358.0], [91.5, 361.0], [91.6, 362.0], [91.7, 363.0], [91.8, 363.0], [91.9, 366.0], [92.0, 366.0], [92.1, 366.0], [92.2, 367.0], [92.3, 368.0], [92.4, 368.0], [92.5, 368.0], [92.6, 370.0], [92.7, 373.0], [92.8, 373.0], [92.9, 375.0], [93.0, 378.0], [93.1, 379.0], [93.2, 382.0], [93.3, 386.0], [93.4, 387.0], [93.5, 388.0], [93.6, 398.0], [93.7, 398.0], [93.8, 401.0], [93.9, 407.0], [94.0, 409.0], [94.1, 409.0], [94.2, 410.0], [94.3, 411.0], [94.4, 412.0], [94.5, 414.0], [94.6, 414.0], [94.7, 415.0], [94.8, 415.0], [94.9, 416.0], [95.0, 417.0], [95.1, 417.0], [95.2, 418.0], [95.3, 419.0], [95.4, 419.0], [95.5, 420.0], [95.6, 421.0], [95.7, 421.0], [95.8, 422.0], [95.9, 422.0], [96.0, 422.0], [96.1, 422.0], [96.2, 423.0], [96.3, 423.0], [96.4, 424.0], [96.5, 424.0], [96.6, 426.0], [96.7, 428.0], [96.8, 431.0], [96.9, 432.0], [97.0, 434.0], [97.1, 434.0], [97.2, 435.0], [97.3, 435.0], [97.4, 436.0], [97.5, 437.0], [97.6, 439.0], [97.7, 440.0], [97.8, 441.0], [97.9, 443.0], [98.0, 444.0], [98.1, 444.0], [98.2, 445.0], [98.3, 446.0], [98.4, 447.0], [98.5, 447.0], [98.6, 448.0], [98.7, 465.0], [98.8, 465.0], [98.9, 466.0], [99.0, 470.0], [99.1, 474.0], [99.2, 503.0], [99.3, 521.0], [99.4, 533.0], [99.5, 575.0], [99.6, 599.0], [99.7, 619.0], [99.8, 674.0], [99.9, 1341.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 516.0, "series": [{"data": [[300.0, 364.0], [600.0, 2.0], [1300.0, 1.0], [400.0, 54.0], [200.0, 516.0], [100.0, 58.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 579.0, "series": [{"data": [[0.0, 417.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 579.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.4565217391304355, "minX": 1.70888694E12, "maxY": 6.062645011600925, "series": [{"data": [[1.70888694E12, 6.062645011600925], [1.708887E12, 5.4565217391304355]], "isOverall": false, "label": "Load Testing", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.708887E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 200.94444444444449, "minX": 1.0, "maxY": 474.5, "series": [{"data": [[8.0, 371.7326732673266], [4.0, 200.94444444444449], [2.0, 315.0], [1.0, 320.0], [9.0, 380.3333333333333], [10.0, 474.5], [5.0, 213.30947368421053], [6.0, 292.2131147540983], [3.0, 326.0], [7.0, 328.1788321167882]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[5.9789999999999965, 270.78399999999993]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 328.9, "minX": 1.70888694E12, "maxY": 25518.883333333335, "series": [{"data": [[1.70888694E12, 25518.883333333335], [1.708887E12, 2613.016666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70888694E12, 2054.4333333333334], [1.708887E12, 328.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.708887E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 237.00724637681174, "minX": 1.70888694E12, "maxY": 276.19141531322515, "series": [{"data": [[1.70888694E12, 276.19141531322515], [1.708887E12, 237.00724637681174]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.708887E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 236.9927536231885, "minX": 1.70888694E12, "maxY": 276.1658932714617, "series": [{"data": [[1.70888694E12, 276.1658932714617], [1.708887E12, 236.9927536231885]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.708887E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 140.49999999999991, "minX": 1.70888694E12, "maxY": 143.7842227378189, "series": [{"data": [[1.70888694E12, 143.7842227378189], [1.708887E12, 140.49999999999991]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.708887E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 307.0, "minX": 1.70888694E12, "maxY": 1341.0, "series": [{"data": [[1.70888694E12, 1341.0], [1.708887E12, 422.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70888694E12, 420.5], [1.708887E12, 366.99999999999994]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70888694E12, 504.50000000000034], [1.708887E12, 422.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70888694E12, 439.25], [1.708887E12, 417.59999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70888694E12, 307.0], [1.708887E12, 311.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70888694E12, 330.0], [1.708887E12, 320.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.708887E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 204.0, "minX": 6.0, "maxY": 430.0, "series": [{"data": [[16.0, 320.0], [17.0, 331.0], [18.0, 329.0], [19.0, 348.0], [20.0, 326.5], [21.0, 325.0], [22.0, 342.0], [23.0, 325.0], [6.0, 430.0], [24.0, 342.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 207.0], [18.0, 219.0], [19.0, 204.0], [20.0, 208.0], [21.0, 207.0], [22.0, 216.0], [23.0, 206.0], [24.0, 205.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 204.0, "minX": 6.0, "maxY": 430.0, "series": [{"data": [[16.0, 320.0], [17.0, 331.0], [18.0, 329.0], [19.0, 348.0], [20.0, 326.5], [21.0, 325.0], [22.0, 342.0], [23.0, 316.0], [6.0, 430.0], [24.0, 342.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 207.0], [18.0, 219.0], [19.0, 204.0], [20.0, 207.5], [21.0, 207.0], [22.0, 216.0], [23.0, 206.0], [24.0, 205.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.70888694E12, "maxY": 14.433333333333334, "series": [{"data": [[1.70888694E12, 14.433333333333334], [1.708887E12, 2.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.708887E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.70888694E12, "maxY": 7.8, "series": [{"data": [[1.70888694E12, 6.566666666666666], [1.708887E12, 0.45]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.70888694E12, 7.8], [1.708887E12, 1.85]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.708887E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.70888694E12, "maxY": 7.8, "series": [{"data": [[1.70888694E12, 6.566666666666666], [1.708887E12, 0.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.70888694E12, 7.8], [1.708887E12, 1.85]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.708887E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.70888694E12, "maxY": 7.8, "series": [{"data": [[1.70888694E12, 6.566666666666666], [1.708887E12, 0.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.70888694E12, 7.8], [1.708887E12, 1.85]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.708887E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

