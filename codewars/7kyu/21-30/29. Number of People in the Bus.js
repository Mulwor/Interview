// ! Number of People in the Bus

var number = function(busStops){
  let result = 0
  
  for (let i = 0; i < busStops.length; i++) {   
    result += (busStops[i][0] - busStops[i][1])
  }
  
  return result;
}

const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)

number([[10,0],[3,5],[5,8]]), 5;
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]), 17;
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]), 21;
number([[0,0]]), 0;
