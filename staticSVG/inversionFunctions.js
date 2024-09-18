function invertParentChild (lineage) { // inverts the Parent-Child Relationship
    //console.log("lineage: ", lineage);
    if(genderDictionary[lineage]["opposite"] != "N/A") {
      return(genderDictionary[lineage]["opposite"]);
    }
    else {
      return("N/A");
    }
  }
  
function invertSeniority (lineage) { // inverts the Seniority Relationship
    if (lineage == "+") {
      return("-");
    }
    if (lineage == "-") {
      return("+");
    }
  }