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

var root = {
  name: "1",
  id: 1,
  hidden: false,
  children: [{
    name: "7",
    id: 7,
    no_parent: true
  }, { //7-8
    name: "", //7-8
    id: 9000,
    hidden: true,
    no_parent: true,
    children: [{
      name: "11",
      id: 11
    }, {
      name: "12",
      id: 12
    }, {
      name: "13",
      id: 13
    }, {
      name: "14",
      id: 14
    }]
  }, {
    name: "8",
    id: 8,
    no_parent: true,
    hidden: false
  }, {
    name: "", //from 1 to 9004
    id: 9003,
    hidden: true,
    no_parent: true,
    children: [{
      name: "", //from 9004 to 19, 20, 21, 22
      id: 9004,
      hidden: true,
      no_parent: true,
      children: [{
        name: "19",
        id: 19
      }, {
        name: "20",
        id: 20
      }, {
        name: "21",
        id: 21
      }, {
        name: "22",
        id: 22
      }]
    }]
  }, {
    name: "9",
    id: 9,
    no_parent: true
  }, { //9-10
    name: "", //9-10
    id: 9001,
    hidden: true,
    no_parent: true,
    children: [{
      name: "15",
      id: 15
    }, {
      name: "16",
      id: 16
    }, {
      name: "17",
      id: 17
    }, {
      name: "18",
      id: 18
    }]
  }, {
    name: "10",
    id: 10,
    no_parent: true
  }]
}

// var root = {
//     name: "",
//     id: 1,
//     hidden: true,
//     children: [{
//       name: "Mistress",
//       id: 9000,
//       no_parent: true
//     }, {
//       name: "",
//       id: 100,
//       no_parent: true,
//       hidden: true,
//       children: [{
//         name: "Hidden Son",
//         id: 9001
//       }]
//     }, {
//       name: "John",
//       id: 16,
//       no_parent: true
//     }, {
//       name: "",
//       id: 2,
//       no_parent: true,
//       hidden: true,
//       children: [
  
  
//         {
//           name: "Jeezy",
//           id: 12,
  
//         }, {
//           name: "Leo",
//           id: 13,
//           no_parent: true
//         }, {
//           name: "Chopper",
//           id: 3
//         }, {
//           name: "",
//           id: 4,
//           hidden: true,
//           no_parent: true,
//           children: [{
//             name: "Dino",
//             id: 5,
//           }, {
//             name: "",
//             id: 14,
//             hidden: true,
//             no_parent: true,
//             children: [{
//               name: "Percy",
//               id: 15,
//             }]
//           }, {
//             name: "EazyE",
//             id: 6,
//           }]
//         }, {
//           name: "Khalid",
//           id: 11
//         }, {
//           name: "GFunk",
//           id: 7,
//           children: [{
//             name: "Hobo",
//             id: 8,
//           }, {
//             name: "Illiac",
//             id: 9,
//           }]
//         }
//       ]
//     }, {
//       name: "Megan",
//       id: 10,
//       no_parent: true,
//       children: [
  
//       ]
//     }]
//   }

var allNodes = flatten(root);

var siblings = [{ //This maps the siblings together mapping uses the ID using the blue line
  source: {
    id: 7,
    name: "7"
  },
  target: {
    id: 8,
    name: "8"
  }
}, {
  source: {
    id: 9,
    name: "9"
  },
  target: {
    id: 10,
    name: "10"
  }
}, {
  source: {
    id: 14,
    name: "14"
  },
  target: {
    id: 15,
    name: "15"
  }
}];


// var siblings = [{ //This maps the siblings together mapping uses the ID using the blue line
//   source: {
//     id: 12,
//     name: ""
//   },
//   target: {
//     id: 13,
//     name: "J"
//   }
// }, {
//   source: {
//     id: 16,
//     name: "Q"
//   },
//   target: {
//     id: 10,
//     name: "M"
//   }
// }, {
//   source: {
//     id: 16,
//     name: "Q"
//   },
//   target: {
//     id: 9000,
//     name: "P"
//   }
// }];

// let rawData = [
//     { id: 1, pids: [3], gender: 'male', photo: 'https://cdn.balkan.app/shared/m60/2.jpg', name: 'Zeph Daniels', born: '1954-09-29' },
//     { id: 2, pids: [3], gender: 'male', photo: 'https://cdn.balkan.app/shared/m60/1.jpg', name: 'Rowan Annable', born: '1952-10-10' },
//     { id: 3, pids: [1, 2], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/1.jpg', name: 'Laura Shepherd', born: '1943-01-13', email: 'laura.shepherd@gmail.com', phone: '+44 845 5752 547', city: 'Moscow', country: 'ru' },
//     { id: 4, pids: [5], photo: 'https://cdn.balkan.app/shared/m60/3.jpg', name: 'Rowan Annable' },
//     { id: 5, pids: [4], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/3.jpg', name: 'Lois Sowle' },
//     { id: 6, mid: 2, fid: 3, pids: [7], gender: 'female', photo: 'https://cdn.balkan.app/shared/w30/1.jpg', name: 'Tyler Heath', born: '1975-11-12' },
//     { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male', photo: 'https://cdn.balkan.app/shared/m30/3.jpg', name: 'Samson Stokes', born: '1986-10-01' },
//     { id: 8, mid: 7, fid: 6, gender: 'female', photo: 'https://cdn.balkan.app/shared/w10/3.jpg', name: 'Celeste Castillo', born: '2021-02-01' }
// ]
// function getSiblings(rawData) {
//     rawData.forEach((person)=>{

//     })
// }


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