let EGOid = 31;
let familyTreeSize = 93;

// let familialRelationsDictionary = {
//   59: {"warlpiri": [59], "lineage": "FMBWD", "name": "wapirra/kirdana"},
//   93: {"warlpiri": [59], "lineage": "FFZH", "name": "wapirra/kirdana"}
//   //4: {"warlpiri": [11, 5, 10], "lineage": "FF", "name": "warringiyi"}
//   }

let genderDictionary = {
    "Z": {"gender": "female", "generation": true, "level": 1, "opposite": "N/A"},
    "M": {"gender": "female", "generation": false, "level": 0, "opposite": "D"},
    "D": {"gender": "female", "generation": false, "level": 2, "opposite": "M"},
    "W": {"gender": "female", "generation": true, "level": 1, "opposite": "N/A"},
    "B": {"gender": "male", "generation": true, "level": 1, "opposite": "N/A"},
    "F": {"gender": "male", "generation": false, "level": 0, "opposite": "S"},
    "S": {"gender": "male", "generation": false, "level": 2, "opposite": "F"},
    "H": {"gender": "male", "generation": true, "level": 1, "opposite": "N/A"},
    "+": {"gender": ""},
    "-": {"gender": ""},
    "E": {"gender": "", "generation": ""},
    "G": {"gender": "", "generation": ""},
    "O": {"gender": "", "generation": ""}
  }

  function expand (lineage) { // expands the pair to include "bridge" terms
    let lineagePair = lineage.join("");
    //console.log("lineagePair: ", lineagePair);
    let retString = "";
    //console.log("lineage: ", lineage);
  
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
    //console.log("retSTring: ", retString);
    return(retString);
  
  }
  
  function adjustForSpouse (lineage) { //changes "W" to "MBD" and "H" to "FZS"
    let lineageStr = lineage;
    let lineageLength = lineageStr.length;
    
    // //experimental to fix the FZS in FFZSS to W issue
    // if (lineageStr.charAt(lineageLength-1) == "W") {
    //   lineageStr = lineageStr.substring(0, lineageLength-1) + "MBD";
    // }
    // if (lineageStr.charAt(lineageLength-1) == "H") {
    //   lineageStr = lineageStr.substring(0, lineageLength-1) + "FZS";
    // }

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
    //console.log("lineageStr: ", lineageStr);
    return(lineageStr);
  }
  
  function reduce (lineage) { // removes pairs that cancel each other out such as "ZDM" which means "Z"
    let lineageStr = lineage;
    let lineageLength = lineageStr.length;
    //console.log("pickedUp");
    for(n = 1; n < lineageLength; n++) {
      try {
        //console.log("n - 1: ", genderDictionary[lineageStr.charAt(n - 1)]);
        //console.log("n: ", genderDictionary[lineageStr.charAt(n)]);
        if ((genderDictionary[lineageStr.charAt(n - 1)]["level"] - genderDictionary[lineageStr.charAt(n)]["level"]) == 2 || (genderDictionary[lineageStr.charAt(n - 1)]["level"] - genderDictionary[lineageStr.charAt(n)]["level"]) == -2) {
          lineageStr = lineageStr.substring(0, n - 1) + lineageStr.substring(n + 1);
          n = 0;
          //console.log("pickedUP");
        }
        if((lineageStr.charAt(n - 1) == "Z" && (lineageStr.charAt(n) == "B")) || (lineageStr.charAt(n - 1) == "B" && (lineageStr.charAt(n) == "Z"))) {
          //console.log("picked up");
          lineageStr = lineageStr.substring(0, n - 1) + lineageStr.substring(n + 1);
          n = 0;
        }
      }
      catch(err) {
  
      }
    }


    
  
    //console.log("lineageStr: ", lineageStr);
    return(lineageStr);
  }

  function reduceJiliwiri (lineage) { // removes pairs that cancel each other out such as "ZDM" which means "Z"
    let lineageStr = lineage;
    let lineageLength = lineageStr.length;
    //console.log("pickedUp");
    for(n = 0; n < lineageLength; n++) {
      try {
        //console.log("n - 1: ", genderDictionary[lineageStr.charAt(n - 1)]);
        //console.log("n: ", genderDictionary[lineageStr.charAt(n)]);
        if (n > 0 && ((genderDictionary[lineageStr.charAt(n - 1)]["level"] - genderDictionary[lineageStr.charAt(n)]["level"]) == 2 || (genderDictionary[lineageStr.charAt(n - 1)]["level"] - genderDictionary[lineageStr.charAt(n)]["level"]) == -2)) {
          lineageStr = lineageStr.substring(0, n - 1) + lineageStr.substring(n + 1);
          n = 0;
          //console.log("pickedUP");
        }
        if(n > 0 && ((lineageStr.charAt(n - 1) == "Z" && (lineageStr.charAt(n) == "B")) || (lineageStr.charAt(n - 1) == "B" && (lineageStr.charAt(n) == "Z")))) {
          //console.log("picked up");
          lineageStr = lineageStr.substring(0, n - 1) + lineageStr.substring(n + 1);
          n = 0;
        }
        if(n == 0 && (lineageStr.charAt(n) == "Z" && (lineageStr.charAt(n + 1) == "M"))) {
          lineageStr = lineageStr.substring(n + 1);
          n = 0;
         }
        

         //experimental to account for MBF instead of MF issue
        if(n > 0 && (genderDictionary[lineageStr.charAt(n - 1)]["gender"] == genderDictionary[lineageStr.charAt(n)]["gender"]) && (lineageStr.charAt(n - 1) != "W") && (lineageStr.charAt(n - 1) != "H") && (lineageStr.charAt(n) != "W") && (lineageStr.charAt(n) != "H")) {
          //console.log("first passed");
          //console.log("n-1: ", lineageStr.charAt(n - 1));
          //console.log("n: ", lineageStr.charAt(n));
          if (genderDictionary[lineageStr.charAt(n - 1)]["level"] > genderDictionary[lineageStr.charAt(n)]["level"]) {
            lineageStr = lineageStr.substring(0, n - 1) + lineageStr.substring(n);
            //console.log("second passed");
          }
        }
        
      


      // lineageLength = lineageStr.length;
      // console.log("lineageLength: ", lineageLength)
      
      // for(n=lineageLength-1; n>0; n=n-1) {
      //   console.log("n: ", n);
      // }


      //   // for(n = lineageLength - 1; n > 0; n--) {
      //   //   if (((lineageStr.charAt(n) == "D") && (lineageStr.charAt(n-1) == "W")) || (((lineageStr.charAt(n) == "S") && (lineageStr.charAt(n-1) == "H")))) {
      //   //     lineageStr = lineageStr.substring(0, n-1) + lineageStr.substring(n);
      //   //   }
      //   // }

        

      }
      catch(err) {
  
      }
    }
    
    //removes the W and H from WD and HS, respectively ex. MMBWDHF to MMBDHF
    lineageLength = lineageStr.length;
    for(n = lineageLength - 1; n > 0; n--) {
      if (((lineageStr.charAt(n) == "D") && (lineageStr.charAt(n-1) == "W")) || (((lineageStr.charAt(n) == "S") && (lineageStr.charAt(n-1) == "H")))) {
        lineageStr = lineageStr.substring(0, n-1) + lineageStr.substring(n);
      }
    }

    //fix SZ to D issue
    for(n = lineageLength - 1; n > 0; n--) {
      if (((lineageStr.charAt(n) == "Z") && (lineageStr.charAt(n-1) == "S"))) {
        lineageStr = lineageStr.substring(0, n-1) + "D" + lineageStr.substring(n+1);
      }
      else if ((((lineageStr.charAt(n) == "B") && (lineageStr.charAt(n-1) == "D")))) {
        lineageStr = lineageStr.substring(0, n-1) + "S" + lineageStr.substring(n+1)
      }
    }

    
  
    //console.log("lineageStr: ", lineageStr);
    return(lineageStr);
  }



  
  function expandParse (lineage) { //loops through lineage, checks for pairs to expand, calls expand to expand the pairs
    let lineageStr = lineage;
    let lineageLength = lineageStr.length;
    let addStr = "";
    //console.log("lineage: ", lineage);
    for(let n = 0; n < lineageLength; n++) {
      //console.log("charAt(n); ", lineageStr.charAt(n));
      if (!(lineageStr.charAt(n)=="+") && !(lineageStr.charAt(n)=="-")) {
        //console.log("charAt(n); ", lineageStr.charAt(n));
        //console.log("lineageStr: ", genderDictionary[lineageStr.charAt(n)]);
        if (n > 0 && ((genderDictionary[lineageStr.charAt(n)]["generation"] == false) && ((genderDictionary[lineageStr.charAt(n-1)]["gender"]) != (genderDictionary[lineageStr.charAt(n)]["gender"])))) {
          if (!(lineageStr.charAt(n-1)=="+") && !(lineageStr.charAt(n-1)=="-")) {
            addStr = expand([lineageStr.charAt(n-1), lineageStr.charAt(n)]);
            lineageStr = lineageStr.substring(0, n - 1) + addStr + lineageStr.substring(n + 1);
            lineageLength = lineageStr.length;
            n = 0;
          }
        }
        else if (n == 0 && ((genderDictionary[lineageStr.charAt(n)]["generation"] == false) && ((genderDictionary[lineageStr.charAt(n)]["gender"]) != "male"))) {
          if ((genderDictionary[lineageStr.charAt(n)]["level"] == 0)) {
            lineageStr = "Z" + lineageStr.substring(n);
            lineageLength = lineageStr.length;
            n = 0;
          }
          else if ((genderDictionary[lineageStr.charAt(n)]["level"] == 2)) {
            lineageStr = "W" + lineageStr.substring(n);
            lineageLength = lineageStr.length;
            n = 0;
          }
        }
      }
    }
    //console.log("lineageStr: ", lineageStr);
    //console.log("expandparse: ", lineageStr);
    return(lineageStr);
  }