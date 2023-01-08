let arrayOfEvenNum=[0,2,4,6,8]
let arrayOfNum=arrayOfEvenNum;
arrayOfEvenNum[1]=10
console.log(arrayOfEvenNum);
console.log(arrayOfNum );


//Deep Cloning
console.log(`=======Array Deep Cloning=======`);
let arrayOfNumber=[0,2,4,6,8]
let arrayClone=[...arrayOfEvenNum]    //Deep Clone
arrayOfNumber[2]=100
arrayClone[2]=200
console.log(arrayOfNumber);
console.log(arrayClone);


let kat={
    name : "Katrina",
    role :"actress"
}
// // let jack=kat;   //object shallow cloning
// let dips=[...kat]   //object deep cloning


console.log(`=====merge array using concat====`);
let arrayNum=[2,4,6,8,10];
let arrayNumb=[1,3,2,4,5,7]
let concatArray=arrayNum.concat(arrayNumb)
console.log(arrayNum);
console.log( arrayNumb);
console.log(concatArray);
console.log(`======merge array using spresd operator=====`);
let mergeArray=[...arrayNum,...arrayNumb]
console.log(mergeArray);
//if we want to add more elements
let mergingarray=[...arrayNum,...arrayNumb,5,6,8,2,3]
console.log(mergingarray);


console.log(`=========object merge using spread operator===`);
let empAnil={
    name : "Anil",
    role :"Software developer"
}
let empAddress={
    city:"Pune",
    street:"Wakad-412105"
}
let mergedObject={...empAnil,...empAddress}
console.log(mergedObject);









