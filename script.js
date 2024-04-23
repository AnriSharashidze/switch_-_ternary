//switch syntax >>

//switch (epxression) {
//  case value1:
// code to be executed...
//    break;

//  case value2:
//  code
//    default:
// code to be executed if no other cases can be executed
//}

function lectureAssistant() {
  let day = prompt("sheiyvane kviris dge");

  switch (day) {
    case "orshabati":
      alert("dges shen ar gaqvs leqcia");
      break;

    case "samshabati":
      alert("dges shen gaqvs leqcia 18:00 saatze");
      break;

    case "otxshabati":
      alert("dges shen ar gaqvs leqcia");
      break;

    case "xutshabati":
      alert("dges shen gaqvs leqcia 18:00 saatze");
      break;

    case "paraskevi":
      alert("dges shen argaqvs leqcia");
      break;

    case "shabati":
      alert("dges shen gaqvs leqcia 18:00 saatze");
      break;

    case "kvira":
      alert("dges shen ar gaqvs leqcia");
      break;
  }
}


// ternary syntax

// condition ? expression_if_true : expression_if_false

let isRaining = false;

let weatherReport = isRaining ? "waige qolga radgan garet wvims":
"datkbi dgevandeli dgit radgan garet mzea";

console.log(weatherReport);

let size = 0;

 function updateSize() {
   size = document.getElementById("sizeNumber").value;
   
   size >= 10 && size <= 13 
   ? document.getElementById("showSize").innerHTML = "XS"
   : size >= 14 && size <= 17 
   ? (document.getElementById("showSize").innerHTML = "S")
   : size >= 18 && size <= 21
   ? (document.getElementById("showSize").innerHTML = "M")
   : size >= 22 && size <= 25
   ? (document.getElementById("showSize").innerHTML = "L")
   : size >= 26 && size <= 30
   ? (document.getElementById("showSize").innerHTML = "XL")
   : size >= 31 && size <= 35
   ? (document.getElementById("showSize").innerHTML = "XXL")
   : (document.getElementById("showSize").innerHTML = "tqveni zoma ar vicit");

 }