
function makeLine (highlightLine, cloneLine, highlightLineEl, paths, marriage, jiliwiri) {
  let map = {
    true: "Jiliwiri",
    false: ""
  }

  if (highlightLineEl != null) {

    let highlightId = `${highlightLineEl.getAttribute("id")}_highlighted`
    let existingLine = document.querySelector(`[id^="${highlightId}"]`)
    if (existingLine) {
    existingLine.classList.add(`highlighted${map[jiliwiri]}`)
    return
  }

    let newId = `${highlightId}${map[jiliwiri]}`
    let oldClass = highlightLineEl.getAttribute("class") || "";
    
    document.getElementById(newId)?.remove();

    cloneLine.setAttribute("id" , newId);
    //cloneLine.classList.add(`highlighted${map[jiliwiri]}`);
    cloneLine.setAttribute("class" , `${oldClass} highlighted${map[jiliwiri]}`);
    //console.log(map[jiliwiri]);
    
    // if (jiliwiri == false) {
    //   cloneLine.setAttribute("id" , newId);
    //   cloneLine.setAttribute("class" , highlightLineEl.getAttribute("class")+" highlighted");
      
    // }
    // else if (jiliwiri == true) {
    //   cloneLine.setAttribute("id" , highlightLineEl.getAttribute("id")+"_highlightJiliwiri");
    //   cloneLine.setAttribute("class" , highlightLineEl.getAttribute("class")+" highlightedJiliwiri");

    // }
    
    cloneLine.setAttribute("d" , highlightLineEl.getAttribute("d"));
    paths[paths.length - 1].after(cloneLine);
    cloneLine.classList.remove("null")
  }
  else {
    //console.log(highlightLine, " is not a valid ID");
  }
  // try {
  //   cloneLine.setAttribute("id" , highlightLineEl.getAttribute("id")+"_highlight");
  //   cloneLine.setAttribute("class" , highlightLineEl.getAttribute("class")+" highlighted");
  //   cloneLine.setAttribute("d" , highlightLineEl.getAttribute("d"));
  //   paths[paths.length - 1].after(cloneLine);
  // }
  // catch (err) {

  // }
    
  

}

function highlight (idPair, jiliwiri) {
    
    let svg = document.querySelector("g");
    let paths = document.getElementsByTagName("path");
    if (idPair[1] > idPair[0]) {
      idPair = idPair.reverse();
    }
    //console.log("idPairH = ", idPair);
  
    let highlightLine = `#i_${idPair[0]}_${idPair[1]}`;
    let highlightLineEl = document.querySelector(highlightLine);
    let highlightMarriageLine = `#marriage_${idPair[0]}_${idPair[1]}`;
    let highlightMarriageLineEl = document.querySelector(highlightMarriageLine);
    let marriage = true;


    // let highlightLineB = `#i_${idPair[1]}_${idPair[0]}`; // checks idPair backwards (which is why there is a B)
    // let highlightLineElB = document.querySelector(highlightLineB);
    // let highlightMarriageLineB = `#marriage_${idPair[1]}_${idPair[0]}`;
    // let highlightMarriageLineElB = document.querySelector(highlightMarriageLineB);

    let cloneLine = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    //[...highlightLineEl.attributes].forEach( attr => { cloneLine.setAttributeNS("http://www.w3.org/2000/svg", attr.nodeName ,attr.nodeValue) })
    
  
    for (let n = 0; n < 4; n++) {

      if  (n < 2) {
        marriage = false;
        highlightLine = `#i_${idPair[0]}_${idPair[1]}`;
        highlightLineEl = document.querySelector(highlightLine);
        makeLine(highlightLine, cloneLine, highlightLineEl, paths, marriage, jiliwiri);
        idPair = idPair.reverse();
      }
      else {
        marriage = true;
        highlightMarriageLine = `#marriage_${idPair[0]}_${idPair[1]}`;
        highlightMarriageLineEl = document.querySelector(highlightMarriageLine);
        makeLine(highlightMarriageLine, cloneLine, highlightMarriageLineEl, paths, marriage, jiliwiri);
        idPair = idPair.reverse();
      }
      
    }
    //makeLine(highlightLine, cloneLine, highlightLineEl, paths);

    //helped by W3 Schools
    //makeLine(highlightLineB, cloneLine, highlightLineElB, paths);

    // try {
    //   cloneLine.setAttribute("id" , highlightLineEl.getAttribute("id")+"_highlight");
    //   cloneLine.setAttribute("class" , highlightLineEl.getAttribute("class")+" highlighted");
    //   cloneLine.setAttribute("d" , highlightLineEl.getAttribute("d"));
    //   paths[paths.length - 1].after(cloneLine);
    // }
    // catch (err) {

    // }

    // try {
    //   cloneLine.setAttribute("id" , highlightLineElB.getAttribute("id")+"_highlight");
    //   cloneLine.setAttribute("class" , highlightLineElB.getAttribute("class")+" highlighted");
    //   cloneLine.setAttribute("d" , highlightLineElB.getAttribute("d"));
    //   paths[paths.length - 1].after(cloneLine);
    // }
    // catch (err) {

    // }

    // try {
    //   //console.log("idPair: ", idPair)
    //   cloneLine.setAttribute("id" , highlightMarriageLineEl.getAttribute("id")+"_highlight");
    //   cloneLine.setAttribute("class" , highlightMarriageLineEl.getAttribute("class")+" highlighted");
    //   cloneLine.setAttribute("d" , highlightMarriageLineEl.getAttribute("d"));
    //   paths[paths.length - 1].after(cloneLine);
    // }
    // catch (err) {

    // }

    // try {
    //   //console.log("idPair: ", idPair)
    //   cloneLine.setAttribute("id" , highlightMarriageLineElB.getAttribute("id")+"_highlight");
    //   cloneLine.setAttribute("class" , highlightMarriageLineElB.getAttribute("class")+" highlighted");
    //   cloneLine.setAttribute("d" , highlightMarriageLineElB.getAttribute("d"));
    //   paths[paths.length - 1].after(cloneLine);
    // }
    // catch (err) {

    // }
    
  
  }
  
  function unHighlight () {
    //console.log("cover called");

    // let svg = document.querySelector("g");
    // let paths = document.getElementsByTagName("path");
    // if (idPair[1] > idPair[0]) {
    //   idPair = idPair.reverse();
    // }


    
    //console.log("idPairC = ", idPair);

  
    // let coverLine = `#i_${idPair[0]}_${idPair[1]}`;
    // let coverLineEl = document.querySelector(coverLine);
    // let cloneLine = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    //[...highlightLineEl.attributes].forEach( attr => { cloneLine.setAttributeNS("http://www.w3.org/2000/svg", attr.nodeName ,attr.nodeValue) })
    //Array.from(document.getElementsByClassName("highlighted")).forEach(highlighted=>highlighted.classList.remove("linage"));
    Array.from(document.getElementsByClassName("highlighted")).forEach(highlighted=>highlighted.classList.remove("highlighted"));
    Array.from(document.getElementsByClassName("highlightedJiliwiri")).forEach(highlightedJiliwiri=>highlightedJiliwiri.classList.remove("highlightedJiliwiri"));

    // cloneLine.setAttribute("id" , coverLineEl.getAttribute("id")+"_cover");
    // cloneLine.setAttribute("class" , coverLineEl.getAttribute("class")+" linage");
    // cloneLine.setAttribute("d" , coverLineEl.getAttribute("d"));
    //paths[paths.length - 1].after(cloneLine);
    
  
  }
  
  function coverPath (idList) {
    let length = idList[0].length;
  
    //console.log("lengthC = ", length);
    //console.log("idListC = ", idList[0]);
  
    for(let n = 0; n < length; n++) {
  
      if (n == 0) {
        unHighlight();
      }
      else {
        //console.log("idList0C = ", idList[0][n]);
        //console.log("idList1C = ", idList[0][n - 1]);
        unHighlight();
      }
  
    }
  }
  
  function highlightPath (idList, jiliwiri) {
    
    let length = idList[0].length;
  
    //console.log("lengthH = ", length);
    //console.log("idListH = ", idList[0]);
  
    for(let n = 0; n < length; n++) {
      if (n == 0) {
        //console.log("running");
        highlight([EGOid, idList[0][n]], jiliwiri);
      }
      else {
        //console.log("idList0H = ", idList[0][n]);
        //console.log("idList1H = ", idList[0][n - 1]);
        highlight([idList[0][n], idList[0][n - 1]], jiliwiri);
      }
  
    }
  
  }

  // function highlightJiliwiri (idPair) {
    
  //   let svg = document.querySelector("g");
  //   let paths = document.getElementsByTagName("path");
  //   if (idPair[1] > idPair[0]) {
  //     idPair = idPair.reverse();
  //   }
  
  //   let highlightLine = `#i_${idPair[0]}_${idPair[1]}`;
  //   let highlightLineEl = document.querySelector(highlightLine);
  //   let highlightMarriageLine = `#marriage_${idPair[0]}_${idPair[1]}`;
  //   let highlightMarriageLineEl = document.querySelector(highlightMarriageLine);

  //   let cloneLine = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  //   for (let n = 0; n < 4; n++) {

  //     if  (n < 2) {
  //       highlightLine = `#i_${idPair[0]}_${idPair[1]}`;
  //       highlightLineEl = document.querySelector(highlightLine);
  //       makeLine(highlightLine, cloneLine, highlightLineEl, paths, true);
  //       idPair = idPair.reverse();
  //     }
  //     else {
  //       highlightMarriageLine = `#marriage_${idPair[0]}_${idPair[1]}`;
  //       highlightMarriageLineEl = document.querySelector(highlightMarriageLine);
  //       makeLine(highlightMarriageLine, cloneLine, highlightMarriageLineEl, paths, true);
  //       idPair = idPair.reverse();
  //     }
      
  //   }
    
  
  // }

  // function highlightPathJiliwiri (idList) {
    
  //   let length = idList[0].length;
  
  //   //console.log("lengthH = ", length);
  //   //console.log("idListH = ", idList[0]);
  
  //   for(let n = 0; n < length; n++) {
  //     if (n == 0) {
  //       //console.log("running");
  //       highlightJiliwiri([EGOid, idList[0][n]]);
  //     }
  //     else {
  //       //console.log("idList0H = ", idList[0][n]);
  //       //console.log("idList1H = ", idList[0][n - 1]);
  //       highlightJiliwiri([idList[0][n], idList[0][n - 1]]);
  //     }
  
  //   }
  
  // }

  function toJiliwiri (lineage) { //converts the passed lineage to Jiliwiri
    //console.log("lineage toJiliwiri: ", lineage);
    let lineageStr = lineage.join("");
    //console.log("lineageStr: ", lineageStr);
    let adjustedStr = "";
    let expandedStr = "";
    let firstReducedStr = "";
    let secondReducedStr = "";
    let retStr = "";
  
    adjustedStr = adjustForSpouse(lineageStr);
    //console.log("adjustedStr: ", adjustedStr);
    expandedStr = expandParse(adjustedStr);
    //console.log("expandedStr: ", expandedStr);
    firstReducedStr = reduce(expandedStr);
    //console.log("firstReducedStr: ", firstReducedStr);

    let firstReducedStrLength = firstReducedStr.length;
    //console.log("firstReducedStr: ", firstReducedStr);
    //console.log("firstReducedStrLength: ", firstReducedStrLength);
  
    if (firstReducedStr.charAt(firstReducedStrLength - 1) == "+" || firstReducedStr.charAt(firstReducedStrLength - 1) == "-") {
      retStr = firstReducedStr.substring(0, firstReducedStrLength - 1) + invertSeniority(firstReducedStr.charAt(firstReducedStrLength - 1));
      //console.log("sentToInvertSeniority");
      secondReducedStr = reduceJiliwiri(retStr);
      retStr = secondReducedStr;
      if (retStr == "") {
        retStr = "EGO"
      }
      //console.log("retStr: ", retStr);
      //console.log("retStr: ", retStr);
      return(retStr);
    }
    else {
      for(n = firstReducedStrLength - 1; n >= 0; n--) {
        if (firstReducedStr.charAt(n) == "M" || firstReducedStr.charAt(n) == "F" || firstReducedStr.charAt(n) == "D" || firstReducedStr.charAt(n) == "S") {
          retStr = firstReducedStr.substring(0, n) + invertParentChild(firstReducedStr.charAt(n)) + firstReducedStr.substring(n + 1);
          //console.log("sentToInvertParent-Child");
          //console.log("sentLineage", retStr);
          secondReducedStr = reduceJiliwiri(retStr);
          retStr = secondReducedStr;
          if (retStr == "") {
            retStr = "EGO"
          }
          //console.log("retStr: ", retStr);
          //console.log("retStr: ", retStr);
          return(retStr);
        }
      }
      //console.log("toJiliwiri did not return");
  
    }
  
  }

  function inWarlpiri (lineage) { //returns true if the value is in the familialRelationsDictionary
    let count = 0;
    for (const [key, value] of Object.entries(familialRelationsDictionary)) {
      if (value["warlpiri"] == lineage) {
        count++;
      }
    }
    if (count > 0) {
      return (true);
    }
    else if (count == 0) {
      return (false);
    }
  }
  
  // function findKey (lineage) { //returns the key of the lineage path that fits the one passed
  //   let count = 0;
  //   //console.log("lineage: ", lineage);
  //   for (const [key, value] of Object.entries(familialRelationsDictionary)) {
  //     //console.log("value[\"lineage\"]: ", value["lineage"]);
  //     if ((value["lineage"]) == lineage) {
  //       count++;
  //       //console.log("count: ", count);
  //     }
  //     if (count > 0) {
  //       return (key);
  //     }
  //   }
  // }