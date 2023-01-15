console.log(`---Months in Year------`);
function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`1 : January`);
            break;
            case 2:
            console.log(`2 : February`);
            break;
            case 5:
            console.log(`5 : May`);
            break;
            case 12:
            console.log(`12 : December`);
            break;
            case 15:
            console.log(`15 : Invalid Data`);
            break;
            case 100:
            console.log(`100 : Invalid Data`);
            break;

            default:
        console.log(`Not valid value provided`);
        break;
    
        
    }
    
}
monthOfYear(1)
//  monthOfYear(2)
// monthOfYear(5)
// monthOfYear(12)
// monthOfYear(15)
// monthOfYear(100)
