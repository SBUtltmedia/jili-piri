var margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  },
  width = 840,
  height = 600;

var kx = function (d) {
  return d.x - 20;
};

var ky = function (d) {
  return d.y - 10;
};

//thie place the text x axis adjust this to center align the text
var tx = function (d) {
  return d.x - 3;
};

//thie place the text y axis adjust this to center align the text
var ty = function (d) {
  return d.y + 3;
};

//make an SVG
var svg = d3.select("#graph").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


//My JSON note the 
//no_parent: true this ensures that the node will not be linked to its parent
//hidden: true ensures that the nodes is not visible.

// var root = {
//   name: "",
//   id: 1,
//   hidden: true,
//   children: [{
//     name: "9000",
//     id: 9000,
//     no_parent: true
//   }, {
//     name: "",
//     id: 100,
//     no_parent: true,
//     hidden: true,
//     children: [{
//       name: "9001",
//       id: 9001
//     }]
//   }, {
//     name: "16",
//     id: 16,
//     no_parent: true
//   }, {
//     name: "",
//     id: 2,
//     no_parent: true,
//     hidden: true,
//     children: [


//       {
//         name: "12",
//         id: 12,

//       }, {
//         name: "13",
//         id: 13,
//         no_parent: true
//       }
//     ]
//   }, {
//     name: "10",
//     id: 10,
//     no_parent: true,
//     children: [

//     ]
//   }]
// }

var root = {
    name: "",
    id: 1,
    hidden: true,
    children: [{
      name: "Mistress",
      id: 9000,
      no_parent: true
    }, {
      name: "",
      id: 100,
      no_parent: true,
      hidden: true,
      children: [{
        name: "Hidden Son",
        id: 9001
      }]
    }, {
      name: "John",
      id: 16,
      no_parent: true
    }, {
      name: "",
      id: 2,
      no_parent: true,
      hidden: true,
      children: [
  
  
        {
          name: "Jeezy",
          id: 12,
  
        }, {
          name: "Leo",
          id: 13,
          no_parent: true
        }, {
          name: "Chopper",
          id: 3
        }, {
          name: "",
          id: 4,
          hidden: true,
          no_parent: true,
          children: [{
            name: "Dino",
            id: 5,
          }, {
            name: "",
            id: 14,
            hidden: true,
            no_parent: true,
            children: [{
              name: "Percy",
              id: 15,
            }]
          }, {
            name: "EazyE",
            id: 6,
          }]
        }, {
          name: "Khalid",
          id: 11
        }, {
          name: "GFunk",
          id: 7,
          children: [{
            name: "Hobo",
            id: 8,
          }, {
            name: "Illiac",
            id: 9,
          }]
        }
      ]
    }, {
      name: "Megan",
      id: 10,
      no_parent: true,
      children: [
  
      ]
    }]
  }

var allNodes = flatten(root);
//This maps the siblings together mapping uses the ID using the blue line
var siblings = [{
  source: {
    id: 12,
    name: "L"
  },
  target: {
    id: 13,
    name: "J"
  }
}, {
  source: {
    id: 16,
    name: "Q"
  },
  target: {
    id: 10,
    name: "M"
  }
}, {
  source: {
    id: 16,
    name: "Q"
  },
  target: {
    id: 9000,
    name: "P"
  }
}];

// Compute the layout.
var tree = d3.layout.tree().size([width, height]),
  nodes = tree.nodes(root),
  links = tree.links(nodes);

// Create the link lines.
svg.selectAll(".link")
  .data(links)
  .enter().append("path")
  .attr("class", "link")
  .attr("d", elbow);


var nodes = svg.selectAll(".node")
  .data(nodes)
  .enter();

//First draw sibling line with blue line
svg.selectAll(".sibling")
  .data(siblings)
  .enter().append("path")
  .attr("class", "sibling")
  .attr("d", sblingLine);

// Create the node rectangles.
nodes.append("rect")
  .attr("class", "node")
  .attr("height", 20)
  .attr("width", 40)
  .attr("id", function (d) {
    return d.id;
  })
  .attr("display", function (d) {
    if (d.hidden) {
      return "none"
    } else {
      return ""
    };
  })
  .attr("x", kx)
  .attr("y", ky);
// Create the node text label.
nodes.append("text")
  .text(function (d) {
    return d.name;
  })
  .attr("x", tx)
  .attr("y", ty);


/**
This defines the line between siblings.
**/
function sblingLine(d, i) {
  //start point
  var start = allNodes.filter(function (v) {
    if (d.source.id == v.id) {
      return true;
    } else {
      return false;
    }
  });
  //end point
  var end = allNodes.filter(function (v) {
    if (d.target.id == v.id) {
      return true;
    } else {
      return false;
    }
  });
  //define teh start coordinate and end co-ordinate
  var linedata = [{
    x: start[0].x,
    y: start[0].y
  }, {
    x: end[0].x,
    y: end[0].y
  }];
  var fun = d3.svg.line().x(function (d) {
    return d.x;
  }).y(function (d) {
    return d.y;
  }).interpolate("linear");
  return fun(linedata);
}

/*To make the nodes in flat mode.
This gets all teh nodes in same level*/
function flatten(root) {
  var n = [],
    i = 0;

  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    n.push(node);
  }
  recurse(root);
  return n;
}
/** 
This draws the lines between nodes.
**/
function elbow(d, i) {
  if (d.target.no_parent) {
    return "M0,0L0,0";
  }
  var diff = d.source.y - d.target.y;
  //0.40 defines the point from where you need the line to break out change is as per your choice.
  var ny = d.target.y + diff * 0.40;

  linedata = [{
    x: d.target.x,
    y: d.target.y
  }, {
    x: d.target.x,
    y: ny
  }, {
    x: d.source.x,
    y: d.source.y
  }]

  var fun = d3.svg.line().x(function (d) {
    return d.x;
  }).y(function (d) {
    return d.y;
  }).interpolate("step-after");
  return fun(linedata);
}