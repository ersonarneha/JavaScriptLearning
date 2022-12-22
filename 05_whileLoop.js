//Print no from 0 to 10
//Initialisatin 0    condition<=10    update expression++
var i=0;         //i=0  1   2   3..10
while (i<=10) {    //true
   console.log(i);  //0
   i++;       //0+1=1,2 3 ...10
}
console.log(`--------------------------------------------`);
//Print no from 50 to 5
//initialisation=50   condition=>i>=5     update->decrement by 5-->-5
var i=50
while (i>=5) {console.log(i);
   i=i-5;
}
console.log(`----------------`);
var i=7
while (i<=70) {console.log(i);
    i=i+7;
}
console.log(`===========DO WHILE===========`);
//Print no from 0 to 10
//Initialisatin 0    condition<=10    update expression++
var i=0
do {console.log(i);
    i=i+1;       //or i+1
} while (i<=10);
console.log(`-------------`);
//Print 70 to 7 by decrementing each time by 7
var index=70;
do {console.log(index);
    index=index-7;
} while (index>=7);

//Infinite loop
// while (true) {console.log("Hello");
    
// }

//another method---here we dont know condition 
// for (; ;) {
//     console.log("Hello");
    
// }


