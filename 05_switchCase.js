//GEt the day name by passing day number
//1-Monday
//2-Tuesday
//7-Sunday
// var dayNumber = 3;
// if (dayNumber == 1) {
//   console.log(`today is Monday`);
// }
// if (dayNumber == 2) {
//   console.log(`today is Tuesday`);
// }
// if (dayNumber == 3) {
//   console.log(`today is Wednesday`);
// }
// if (dayNumber == 4) {
//   console.log(`today is Thursday`);
// }
// if (dayNumber == 5) {
//   console.log(`today is Friday`);
// }
// if (dayNumber == 6) {
//   console.log(`today is Saturday`);
// }
// if (dayNumber == 7) {
//   console.log(`today is Sunday`);
// }




var dayNumber=4;
switch (dayNumber) {
    case 1:
        console.log(`today is Monday`);
        console.log(`Monday is start day of week`);
        break;
        case 2:
            console.log(`today is Tuesday`);
            break;
            case 3:
                console.log(`today is Wednesday`);
                break;
                case 4:
                    console.log(`today is Thursday`);
                    // break;  if we dont consider switch then
                    case 5:
                        console.log(`today is Friday`);
                        // break;
                        case 6:
                            console.log(`today is Saturday`);
                            // break;
                            case 7:
                                console.log(`today is Sunday`);
                                console.log(`Sunay is weekly off`);
                                break;

    default:
        console.log(`Not valid value provided`);
        break;
}
console.log(`After switch case statement`);