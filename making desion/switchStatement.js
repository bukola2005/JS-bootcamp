// Example 1 

let day = 3;

switch (day) {
  case 1:
    console.log("mon");
    break;
    case 2:
      console.log("tue");
      break;
      case 3:
    console.log("wed");
    break;
    case 4:
      console.log("thur");
      break;
      case 5:
        console.log("fri");
        break;

        case 6:
    console.log("stauday");
    break;
    case 7:
      console.log("sunday");
      break;
  
  default:
    console.log('invalid day');
    break;
}

// Example 2 

let emoji = "heart";

switch (emoji) {
  case "sad face":
  case " happy face":
    console.log("yellow");
    break;

  case "eggplant":
    console.log("purple");
  break;

  case "heart":
  case " lips":
    console.log("red");
    break;
}