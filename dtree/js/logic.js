function logMovies() {
  fetch("data.json")
  .then(
    response => response.json()

  ).then(kinshipTree => init (kinshipTree))
  // const kinshipTree = response.json();
  // init (kinshipTree);
}


function init (treeData) {

  dTree.init(treeData, {
    target: "#graph",
    debug: true,
    height: 800,
    width: 1200,
    callbacks: {
      nodeClick: function(name, extra, id) {
        let selectedNode = d3.select(`#node${id}`);
        console.log(selectedNode, id);
        // d3.select(`#node${id}`).classed("man", false);
        // d3.select(`#node${id}`).classed("woman", false);
        d3.selectAll(".selected").classed("selected", false);
        d3.select(`#node${id}`).classed("selected", !d3.select(`#node${id}`).classed("selected"));

        //trace path from EGO to id ex. tracePath(EGOid, id); with EGOid set to EGO and id being the id of the clicked node

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