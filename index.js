//const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here 
// Use reduce to calculate the total number of batteries
//const totalBatteries = batteryBatches.reduce(total,batch) = total + batch, 0);


//console.log(batteryBatches);



// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to calculate the total number of batteries
//const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

//console.log(totalBatteries); // Should output the sum of all batteries

// Code your solution here


const batteryBatches = [4,5,3,4,4,6,5];  
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); 
