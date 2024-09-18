let EGOid = 31;
let familyTreeSize = 93

let familialRelationsDictionary = {
  59: {"warlpiri": [59], "lineage": "FMBWD", "name": "wapirra/kirdana"},
  93: {"warlpiri": [59], "lineage": "MBWDM", "name": "wapirra/kirdana"}
  //4: {"warlpiri": [11, 5, 10], "lineage": "FF", "name": "warringiyi"}
  }

let genderDictionary = {
  "Z": {"gender": "female", "generation": true, "level": 1},
  "M": {"gender": "female", "generation": false, "level": 0},
  "D": {"gender": "female", "generation": false, "level": 2},
  "W": {"gender": "female", "generation": true, "level": 1},
  "B": {"gender": "male", "generation": true, "level": 1},
  "F": {"gender": "male", "generation": false, "level": 0},
  "S": {"gender": "male", "generation": false, "level": 2},
  "H": {"gender": "male", "generation": true, "level": 1},
}

function logMovies() {
  fetch("data.json")
  .then(
    response => response.json()

  ).then(kinshipTree => init (kinshipTree))
  // const kinshipTree = response.json();
  // init (kinshipTree);
}



function nodeClick(data, ...other) {
    let id = data.id;
    //let selectedNode = d3.select(`#node${id}`);
        console.log(id);
        // d3.select(`#node${id}`).classed("man", false);
        // d3.select(`#node${id}`).classed("woman", false);
        d3.selectAll(".selected").classed("selected", false);
        d3.select(`#node${id}`).classed("selected", !d3.select(`#node${id}`).classed("selected"));

        //trace path from EGO to id ex. tracePath(EGOid, id); with EGOid set to EGO and id being the id of the clicked node
        //highlight([EGOid, familialRelationsDictionary[id]["warlpiri"]]);
        for(let id = 0; id < familyTreeSize; id++) {
         if(id in familialRelationsDictionary) {
           coverPath([familialRelationsDictionary[id]["warlpiri"]]);
         }
        }
        //console.log(familialRelationsDictionary[id]["warlpiri"]);
        highlightPath([familialRelationsDictionary[id]["warlpiri"]]);
        console.log("[familialRelationsDictionary[id][\"warlpiri\"]]: ", [familialRelationsDictionary[id]["warlpiri"]])
        reduce([familialRelationsDictionary[id]["lineage"]]);
}




function highlight (idPair) {
  
  let svg = document.querySelector("g");
  let paths = document.getElementsByTagName("path");
  if (idPair[1] > idPair[0]) {
    idPair = idPair.reverse();
  }
  console.log("idPairH = ", idPair);

  let highlightLine = `#i_${idPair[0]}_${idPair[1]}`;
  let highlightLineEl = document.querySelector(highlightLine);
  let cloneLine = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  //[...highlightLineEl.attributes].forEach( attr => { cloneLine.setAttributeNS("http://www.w3.org/2000/svg", attr.nodeName ,attr.nodeValue) })
  cloneLine.setAttribute("id" , highlightLineEl.getAttribute("id")+"_highlight");
  cloneLine.setAttribute("class" , highlightLineEl.getAttribute("class")+" highlighted");
  cloneLine.setAttribute("d" , highlightLineEl.getAttribute("d"));
  paths[paths.length - 1].after(cloneLine);
  let highlightNode = d3.select(highlightLine);

}

function cover (idPair) {
  
  let svg = document.querySelector("g");
  let paths = document.getElementsByTagName("path");
  if (idPair[1] > idPair[0]) {
    idPair = idPair.reverse();
  }
  console.log("idPairC = ", idPair);

  let coverLine = `#i_${idPair[0]}_${idPair[1]}`;
  let coverLineEl = document.querySelector(coverLine);
  let cloneLine = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  //[...highlightLineEl.attributes].forEach( attr => { cloneLine.setAttributeNS("http://www.w3.org/2000/svg", attr.nodeName ,attr.nodeValue) })
  cloneLine.setAttribute("id" , coverLineEl.getAttribute("id")+"_cover");
  cloneLine.setAttribute("class" , coverLineEl.getAttribute("class")+" linage");
  cloneLine.setAttribute("d" , coverLineEl.getAttribute("d"));
  paths[paths.length - 1].after(cloneLine);
  let coverNode = d3.select(coverLine);

}

function coverPath (idList) {
  let length = idList[0].length;

  console.log("lengthC = ", length);
  console.log("idListC = ", idList[0]);

  for(let n = 0; n < length; n++) {

    if (n == 0) {
      cover([[EGOid], idList[0][n]]);
    }
    else {
      console.log("idList0C = ", idList[0][n]);
      console.log("idList1C = ", idList[0][n - 1]);
      cover([idList[0][n], idList[0][n - 1]]);
    }

  }
}

function highlightPath (idList) {
  
  let length = idList[0].length;

  console.log("lengthH = ", length);
  console.log("idListH = ", idList[0]);

  for(let n = 0; n < length; n++) {

    if (n == 0) {
      highlight([EGOid, idList[0][n]]);
    }
    else {
      console.log("idList0H = ", idList[0][n]);
      console.log("idList1H = ", idList[0][n - 1]);
      highlight([idList[0][n], idList[0][n - 1]]);
    }

  }

}

function toJiliwiri (lineage) { //converts the passed lineage to Jiliwiri
  let lineageStr = lineage.join("");
  lineageStrLength = lineageStr.length;
  console.log("lineageStr: ", lineageStr);

  lastChar = lineageStr.charAt(lineageStrLength-1);
  SecondLastChar = lineageStr.charAt(lineageStrLength - 2);
  ThirdLastChar = lineageStr.charAt(lineageStrLength - 3);



}

//expansion rules:

function expandParse (lineage) { //loops through lineage, checks for pairs to expand, calls expand to expand the pairs
  let lineageStr = lineage.join("");
  let lineageLength = lineageStr.length;
  let addStr = "";

  for(let n = 1; n < lineageLength; n++) {

    if ((genderDictionary[lineageStr.charAt(n)]["generation"] == false) && ((genderDictionary[lineageStr.charAt(n-1)]["gender"]) != (genderDictionary[lineageStr.charAt(n)]["gender"]))) {
      addStr = expand([lineageStr.charAt(n-1), lineageStr.charAt(n)]);
      lineageStr = lineageStr.substring(0, n - 1) + addStr + lineageStr.substring(n + 1);
      lineageLength = lineageStr.length;
      n = 0;
    }
  }
  console.log("lineageStr: ", lineageStr);
}

function expand (lineage) { // expands the pair to include "bridge" terms
  let lineagePair = lineage.join("");
  let retString = "";
  console.log("lineage: ", lineage);

  if (lineagePair.charAt(1) == "F") {
    retString = (lineagePair.charAt(0) + "B" + lineagePair.charAt(1));
  }
  else if (lineagePair.charAt(1) == "M") {
    retString = (lineagePair.charAt(0) + "Z" + lineagePair.charAt(1));
  }
  else if (lineagePair.charAt(1) == "S") {
    retString = (lineagePair.charAt(0) + "H" + lineagePair.charAt(1));
  }
  else if (lineagePair.charAt(1) == "D") {
    retString = (lineagePair.charAt(0) + "W" + lineagePair.charAt(1));
  }
  console.log("retSTring: ", retString);
  return(retString);

}

function adjustForSpouse (lineage) { //changes "W" to "MBD" and "H" to "FZS"
  let lineageStr = lineage.join("");
  let lineageLength = lineageStr.length;

  for(let n = 0; n < lineageLength; n++) {
    if (lineageStr.charAt(n) == "W") {
      lineageStr = lineageStr.substring(0, n) + "MBD" + lineageStr.substring(n+1);
      n = 0;
    }
    else if (lineageStr.charAt(n) == "H") {
      lineageStr = lineageStr.substring(0, n) + "FZS" + lineageStr.substring(n+1);
      n = 0
    }
  }
  console.log("lineageStr: ", lineageStr);
}

function reduce (lineage) { // removes pairs that cancel each other out such as "ZDM" which means "Z"
  let lineageStr = lineage.join("");
  let lineageLength = lineageStr.length;

  for(n = 1; n < lineageLength; n++) {
    try {
      console.log("n - 1 level: ", genderDictionary[lineageStr.charAt(n - 1)]["level"]);
      console.log("n level: ", genderDictionary[lineageStr.charAt(n)]["level"]);
      if ((genderDictionary[lineageStr.charAt(n - 1)]["level"] - genderDictionary[lineageStr.charAt(n)]["level"]) == 2 || (genderDictionary[lineageStr.charAt(n - 1)]["level"] - genderDictionary[lineageStr.charAt(n)]["level"]) == -2) {
        lineageStr = lineageStr.substring(0, n - 1) + lineageStr.substring(n + 1);
        n = 0;
      }
    }
  catch(err) {

  }
  }
  

  console.log("lineageStr: ", lineageStr);
}

//inversion rules:

function invertParentChild (lineage) {

}

function invertSeniority (lineage) {

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

function findKey (lineage) { //returns the key of the lineage path that fits the one passed
  let count = 0;
  //console.log("lineage: ", lineage);
  for (const [key, value] of Object.entries(familialRelationsDictionary)) {
    //console.log("value[\"lineage\"]: ", value["lineage"]);
    if ((value["lineage"]) == lineage) {
      count++;
      //console.log("count: ", count);
    }
    if (count > 0) {
      return (key);
    }
  }
}





function init (treeData) {

  dTree.init(treeData, {
    target: "#graph",
    debug: true,
    height: 800,
    width: 1200,
    callbacks: {
      nodeClick: function(name, extra, id) {
        
      },
      marriageClick: function(extra, id) {
        let selectedLine = d3.select(`#node${id}`);
        console.log(selectedLine);
      },

      textRenderer: function(name, extra, textClass) {
          // THis callback is optinal but can be used to customize
        // how the text is rendered without having to rewrite the entire node
        // from screatch.
          if (extra && extra.nickname)
            name = name + " (" + extra.nickname + ")";
          return "<p align='center' class='" + textClass + "'>" + name + "</p>";
      },
      nodeRenderer: function(name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer) {
        // This callback is optional but can be used to customize the
        // node element using HTML.
        let node = `<div
        style="height:100%;width:100%;"
        class="${nodeClass} bordered"
        id="node${id}">\n
        ${textRenderer(name, extra, textClass)}
        </div>`;
        // node += `<div `;
        // node += `style="height:100%;width:100%;" `;
        // node += 'class="' + nodeClass + '" ';
        // node += 'id="node' + id + '">\n';
        // node += textRenderer(name, extra, textClass);
        // node += '</div>';
        return node;
    }
    }
  });
  //setTimeout(()=>{d3.selectAll(".nodeText").on("", nodeClick);},1000)
  




}

logMovies();