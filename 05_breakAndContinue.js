//print 0 to 10
console.log(`----break in while loop----`);
var index = 0;
while (index<=10) {
    console.log(index);
    if (index==5) {
        break;
    }
    index++;
}

console.log(`--------------break in for loop-----`);

for (let index = 0; index < 20; index++) {
    console.log(index);
    if (index>=12) {break;
        
    }
    index++;
    
}



console.log(`===============continue=============`);
console.log(`----continue in while loop----`);
var index = 0;    //0 1 2 3 4 5 5 5 
while (index<=10) {
    console.log(index);
    if (index==5) {
        // continue;
    }
    index++;
}
console.log(`--------------continue in for loop-----`);

for (let index = 0; index < 6; index++) {
    // console.log(index);
    if (index==3) {continue;
        
    }
    console.log(index);
    
}



//print 0 to 10
console.log(`----break in while loop----`);
var index = 0;
while (index<=10) {
    console.log(index);
    index++;
    if (index==5) {
        continue;
    }
    
}
