const car = {
    carName: "Creta SX",
    company : "Hundai",
    launchYear : 2017
}
const carEngine = {
    enginePower : "1499CC",
    maxPower : "113 BHP"
}
console.log(`====================Step 1-->Merged object details using object assign==============================`);
const mergedObject=Object.assign(car,carEngine)
console.log(mergedObject);

console.log(`=================Step 2-->Merged object details using spread operator========================`);
const mergeObject = {...car,...carEngine}
console.log(mergeObject);








