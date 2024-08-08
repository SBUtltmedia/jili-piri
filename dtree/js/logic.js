let EGOid = 37;
let familyTreeSize = 93

const familialRelationsDictionary = {
  10: {"warlpiri": [11], "lineage": "F", "name": "wapirra/kirdana"},
  4: {"warlpiri": [11, 5, 10], "lineage": "FF", "name": "warringiyi"},
  1: {"warlpiri": [11, 5, 10, 2, 4], "lineage": "FF", "name": "warringiyi"},
  39: {"warlpiri": [39], "lineage": "FF", "name": "warringiyi"},
  49: {"warlpiri": [38, 49], "lineage": "S", "name": "warringiyi"},
  40: {"warlpiri": [39, 38, 40], "lineage": "FF", "name": "warringiyi"},
  51: {"warlpiri": [38, 49, 51], "lineage": "FF", "name": "warringiyi"}
  }

// function logMovies() {
//   fetch("data.json")
//   .then(
//     response => response.json()

//   ).then(kinshipTree => init (kinshipTree))
//   // const kinshipTree = response.json();
//   // init (kinshipTree);
// }


console.log(document.querySelectorAll("rect"));
var allItems = document.querySelectorAll("rect");
allItems.forEach((item)=>{
  item.addEventListener("click", nodeClick)
})


function nodeClick(data, ...other) {
  
    //let id = data.id;
    let HIGHLIGHTid = data.target.id;
    console.log("data.target.id: ", data.target.id);
    console.log(data, other);
    //let NODEid = data.target.data.id
    //let selectedNode = d3.select(`#node${id}`);
        //console.log("data.id: ", id);
        //console.log("data.data.id: ", data.data.id);
        //console.log("data: ", data);
        // d3.select(`#node${id}`).classed("man", false);
        // d3.select(`#node${id}`).classed("woman", false);

        //d3.selectAll(".selected").classed("selected", false);
        document.querySelectorAll(".selected").forEach((item)=>item.remove("selected"));
        //d3.select(`#node${HIGHLIGHTid}`).classed("selected", !d3.select(`#node${HIGHLIGHTid}`).classed("selected"));
        console.log(document.querySelector("#node6"));
        document.querySelector("#node6").classList.toggle("selected");

        //trace path from EGO to id ex. tracePath(EGOid, id); with EGOid set to EGO and id being the id of the clicked node
        //highlight([EGOid, familialRelationsDictionary[id]["warlpiri"]]);
        for(let id = 0; id < familyTreeSize; id++) {
          if(id in familialRelationsDictionary) {
            coverPath([familialRelationsDictionary[id]["warlpiri"]]);
          }
        }
        //console.log(familialRelationsDictionary[id]["warlpiri"]);

        //highlightPath([familialRelationsDictionary[NODEid]["warlpiri"]]);
        
        //console.log("toJiliwiri: ", toJiliwiri([familialRelationsDictionary[NODEid]["lineage"]]));
        //console.log("findKey: ", findKey(toJiliwiri([familialRelationsDictionary[NODEid]["lineage"]])));
        
        //highlightJiliwiriPath([familialRelationsDictionary[findKey(toJiliwiri([familialRelationsDictionary[NODEid]["lineage"]]))]["warlpiri"]]);

}




function highlight (idPair) {
  try {
    let svg = document.querySelector("g");
    let paths = document.getElementsByTagName("path");
    if (idPair[1] < idPair[0]) {
      idPair = idPair.reverse();
    }
    //console.log("idPairH = ", idPair);

    let highlightLine = `#i_${idPair[0]}_${idPair[1]}`;
    let highlightLineEl = document.querySelector(highlightLine);
    let cloneLine = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    //[...highlightLineEl.attributes].forEach( attr => { cloneLine.setAttributeNS("http://www.w3.org/2000/svg", attr.nodeName ,attr.nodeValue) })
    cloneLine.setAttribute("id" , highlightLineEl.getAttribute("id")+"_highlight");
    cloneLine.setAttribute("class" , highlightLineEl.getAttribute("class")+" highlighted");
    cloneLine.setAttribute("d" , highlightLineEl.getAttribute("d"));
    paths[paths.length - 1].after(cloneLine);
    // let highlightNode = d3.select(highlightLine);
  }
  catch(err) {

  }

}

function highlightJiliwiri (idPair) {
  try {
    let svg = document.querySelector("g");
    let paths = document.getElementsByTagName("path");
    if (idPair[1] < idPair[0]) {
      idPair = idPair.reverse();
    }
    //console.log("idPairH = ", idPair);

    let highlightLine = `#i_${idPair[0]}_${idPair[1]}`;
    let highlightLineEl = document.querySelector(highlightLine);
    let cloneLine = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    //[...highlightLineEl.attributes].forEach( attr => { cloneLine.setAttributeNS("http://www.w3.org/2000/svg", attr.nodeName ,attr.nodeValue) })
    cloneLine.setAttribute("id" , highlightLineEl.getAttribute("id")+"_highlight");
    cloneLine.setAttribute("class" , highlightLineEl.getAttribute("class")+" highlighted");
    cloneLine.setAttribute("d" , highlightLineEl.getAttribute("d"));
    paths[paths.length - 1].after(cloneLine);
    //let highlightNode = d3.select(highlightLine);
  }
  catch(err) {

  }

}

function cover (idPair) {
  
  try {
    let svg = document.querySelector("g");
    let paths = document.getElementsByTagName("path");
    if (idPair[1] < idPair[0]) {
      idPair = idPair.reverse();
    }
    //console.log("idPairH = ", idPair);

    let coverLine = `#i_${idPair[0]}_${idPair[1]}`;
    let  coverLineEl = document.querySelector( coverLine);
    let cloneLine = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    //[... coverLineEl.attributes].forEach( attr => { cloneLine.setAttributeNS("http://www.w3.org/2000/svg", attr.nodeName ,attr.nodeValue) })
    cloneLine.setAttribute("id" ,  coverLineEl.getAttribute("id")+"_ cover");
    cloneLine.setAttribute("class" ,  coverLineEl.getAttribute("class")+" linage");
    cloneLine.setAttribute("d" ,  coverLineEl.getAttribute("d"));
    paths[paths.length - 1].after(cloneLine);
    //let  coverNode = d3.select( coverLine);
  }
  catch(err) {

  }

}

function coverPath (idList) {
  let length = idList[0].length;

  //console.log("lengthH = ", length);
  //console.log("idListH = ", idList[0]);

  for(let n = 0; n < length; n++) {

    if (n == 0) {
      cover([EGOid, idList[0][n]]);
    }
    else {
      //console.log("idList0H = ", idList[0][n]);
      //console.log("idList1H = ", idList[0][n - 1]);
      cover([idList[0][n], idList[0][n - 1]]);
    }

  }
}

function highlightPath (idList) {
  //console.log("idList: ", idList);
  let length = idList[0].length;
  
  //console.log("lengthH = ", length);
  //console.log("idListH = ", idList[0]);

  for(let n = 0; n < length; n++) {

    if (n == 0) {
      highlight([EGOid, idList[0][n]]);
    }
    else {
      //console.log("idList0H = ", idList[0][n]);
      //console.log("idList1H = ", idList[0][n - 1]);
      highlight([idList[0][n], idList[0][n - 1]]);
    }

  }

}

function highlightJiliwiriPath (idList) {
  //console.log("idList: ", idList);
  let length = idList[0].length;
  
  //console.log("lengthH = ", length);
  //console.log("idListH = ", idList[0]);

  for(let n = 0; n < length; n++) {

    if (n == 0) {
      highlightJiliwiri([EGOid, idList[0][n]]);
    }
    else {
      //console.log("idList0H = ", idList[0][n]);
      //console.log("idList1H = ", idList[0][n - 1]);
      highlightJiliwiri([idList[0][n], idList[0][n - 1]]);
    }

  }

}

function toJiliwiri (lineage) {
  let lineageStr = lineage.join("");
  lineageStrLength = lineageStr.length;
  console.log(lineageStr);
  lastChar = lineageStr.charAt(lineageStrLength-1);
  SecondLastChar = lineageStr.charAt(lineageStrLength - 2);
  ThirdLastChar = lineageStr.charAt(lineageStrLength - 3);

  if (lastChar == "F") {
    return (lineageStr.substring(0, (lineageStrLength - 1)) + "S");
  }
  if (lastChar == "M") {
    if (SecondLastChar == "F") {
      if (inWarlpiri((lineageStr.substring(0, (lineageStrLength - 1)) + "ZD")) == true) {
        return (lineageStr.substring(0, (lineageStrLength - 1)) + "ZD");
      }
    }
    
  }
  if (lastChar == "+") {
    
  }
  if (lastChar == "-") {
    
  }
}

function inWarlpiri (lineage) {
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

function findKey (lineage) {
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



// function init (treeData) {

//   dTree.init(treeData, {
//     target: "#graph",
//     debug: true,
//     height: 800,
//     width: 1200,
//     callbacks: {
//       nodeClick: function(name, extra, id) {
        
//       },
//       marriageClick: function(extra, id) {
//         let selectedLine = d3.select(`#node${id}`);
//         console.log(selectedLine);
//       },

//       textRenderer: function(name, extra, textClass) {
//           // THis callback is optinal but can be used to customize
//         // how the text is rendered without having to rewrite the entire node
//         // from screatch.
//           if (extra && extra.nickname)
//             name = name + " (" + extra.nickname + ")";
//           return "<p align='center' class='" + textClass + "'>" + name + "</p>";
//       },
//       nodeRenderer: function(name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer) {
//         // This callback is optional but can be used to customize the
//         // node element using HTML.
//         let node = `<div
//         style="height:100%;width:100%;"
//         class="${nodeClass} bordered"
//         id="node${id}">\n
//         ${textRenderer(name, extra, textClass)}
//         </div>`;
//         // node += `<div `;
//         // node += `style="height:100%;width:100%;" `;
//         // node += 'class="' + nodeClass + '" ';
//         // node += 'id="node' + id + '">\n';
//         // node += textRenderer(name, extra, textClass);
//         // node += '</div>';
//         return node;
//     }
//     }
//   });
//   //setTimeout(()=>{d3.selectAll(".nodeText").on("", nodeClick);},1000)
  




// }

// logMovies();