let EGOid = 31;
let familyTreeSize = 93

let familialRelationsDictionary = {
  10: {"warlpiri": [11], "lineage": "F", "name": "wapirra/kirdana"},
  4: {"warlpiri": [11, 5, 10], "lineage": "FF", "name": "warringiyi"}
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
        //for(let id = 0; id < familyTreeSize; id++) {
        //  if(id in familialRelationsDictionary) {
        //    coverPath([familialRelationsDictionary[id]["warlpiri"]]);
        //  }
        //}
        //console.log(familialRelationsDictionary[id]["warlpiri"]);
        //highlightPath([familialRelationsDictionary[id]["warlpiri"]]);
}




function highlight (idPair) {
  
  let svg = document.querySelector("g");
  let paths = document.getElementsByTagName("path");
  if (idPair[1] < idPair[0]) {
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
  if (idPair[1] < idPair[0]) {
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
      highlight([[EGOid], idList[0][n]]);
    }
    else {
      console.log("idList0H = ", idList[0][n]);
      console.log("idList1H = ", idList[0][n - 1]);
      highlight([idList[0][n], idList[0][n - 1]]);
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