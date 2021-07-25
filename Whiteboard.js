//water between buildings

//i: array of numbers representing height of buildings
//o: return the total amount of water
//e:
//c:


//take into account peaks and valleys
// water count
//record highest point in array
//record the lowest point
//take the two peaks take the lowest one, thats height of water
//for each index that is in a given valley
//count how far away it is from the peak

//keep track of the highest number encountered and its index
// keep track of previus peak and current peak
//iterate through those indexes


const getWater = (array) => {

  let count = 0;
  let PrevPeak = 0;
  let currentPeak = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[currentPeak]) {
      prevPeak = array[currentPeak];
      currentPeak = i
    }
    if (array[currentPeak + 1] < array[currentPeak]) {
      let lowest = Math.min(array[currentPeak, array[prevPeak]])
      console.log(lowest)

      // if (array[currentPeak] < array[prevPeak]) {
      //   lowest = array[currentPeak];
      // }
      // lowest = array[prevPeak]
      // for (let i = )
    }
  }


}

console.log(getWater([0, 1, 0, 2, 1, 0, 1, 2]))

// count variable
// previous peak = 0
// current peak = 0

//iterate
  //if value at index is greater than currentpeak
    //precious peak = currentpeak
    //set value at index to current peak
    //iterate between the peaks
      //start at previous index stop at current index
        //lowest peak
        //if current peak is less previous peak
          //lowest peak = currentpeak
          //otherwise other way around
          //lowestpeak - value at currentindex add that number to count variable
    //previous peak = currentpeak
    //currentpeak to 0





//return count