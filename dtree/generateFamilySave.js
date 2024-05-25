var fs = require('fs');

let rootCount = 5;
let childCount = 5;
let G2childCount = 5;
let G3childCount = 5;
let G4childCount = 5;

a = [...Array(rootCount).keys()];

let familyTree = [];

a.forEach((item)=>{
    currentFamily = {}
    currentFamily.name = `${item} name`
    currentFamily.class = "man"
    currentFamily.textClass = "emphasis"
    currentFamily.marriages = [{spouse: {name:`${item} spouse`, class: "woman"}}]

    let childrenCount = [...Array(childCount).keys()]
    let children = []
    let genderCount = 0;

    childrenCount.forEach((child)=>{
        currentChild = {}
        if (genderCount == 0) {
            currentChild.name = `${child}`
            currentChild.class = "man"
            currentChild.textClass = "emphasis"
            currentChild.marriages = [{spouse: {name:`${child} spouse`, class: "woman"}}]

            let G2childrenCount = [...Array(G2childCount).keys()]
            let G2children = []
            let G2genderCount = 0;

            G2childrenCount.forEach((child)=>{
            currentG2Child = {}

            if (G2genderCount == 0) {
                
                currentG2Child.name = `${child}`
                currentG2Child.class = "man"
                currentG2Child.textClass = "emphasis"
                currentG2Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]

                let G3childrenCount = [...Array(G3childCount).keys()]
                let G3children = [];
                let G3genderCount = 0;

                G3childrenCount.forEach((child)=>{
                    currentG3Child = {}

                    if (G3genderCount == 0) {
                
                        currentG3Child.name = `${child}`
                        currentG3Child.class = "man"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]

                        let G4childrenCount = [...Array(G4childCount).keys()]
                        let G4children = [];
                        let G4genderCount = 0;

                        G4childrenCount.forEach((child)=>{
                            currentG4Child = {}
        
                            if (G4genderCount == 0) {
                        
                                currentG4Child.name = `${child}`
                                currentG4Child.class = "man"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]
                            
                            } else if (G4genderCount == 1) {
        
                                currentG4Child.name = `${child} +`
                                currentG4Child.class = "woman"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`${1} spouse`, class: "man"}}]
                            
                            } else if (G4genderCount == 2) {
        
                                currentG4Child.name = `${child} -`
                                currentG4Child.class = "woman"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`${1} spouse`, class: "man"}}]
                            
                            } else if (G4genderCount == 3) {
                                
                                currentG4Child.name = `${child} +`
                                currentG4Child.class = "man"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]
                            
                            } else if (G4genderCount == 4) {
                                
                                currentG4Child.name = `${child} -`
                                currentG4Child.class = "man"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]
        
                            }
        
                            G4genderCount = ++G4genderCount
        
                            G4children.push(currentG4Child)
                        })




                        currentG3Child.children = G4children;
                    
                    } else if (G3genderCount == 1) {

                        currentG3Child.name = `${child} +`
                        currentG3Child.class = "woman"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`${1} spouse`, class: "man"}}]
                    
                    } else if (G3genderCount == 2) {

                        currentG3Child.name = `${child} -`
                        currentG3Child.class = "woman"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`${1} spouse`, class: "man"}}]
                    
                    } else if (G3genderCount == 3) {
                        
                        currentG3Child.name = `${child} +`
                        currentG3Child.class = "man"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]
                    
                    } else if (G3genderCount == 4) {
                        
                        currentG3Child.name = `${child} -`
                        currentG3Child.class = "man"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]

                    }

                    G3genderCount = ++G3genderCount

                    G3children.push(currentG3Child)
                })




                currentG2Child.children = G3children;

            } else if (G2genderCount == 1) {
                
                currentG2Child.name = `${child} +`
                currentG2Child.class = "woman"
                currentG2Child.textClass = "emphasis"
                currentG2Child.marriages = [{spouse: {name:`${1} spouse`, class: "man"}}]

            } else if (G2genderCount == 2) {

                currentG2Child.name = `${child} -`
                currentG2Child.class = "woman"
                currentG2Child.textClass = "emphasis"
                currentG2Child.marriages = [{spouse: {name:`${1} spouse`, class: "man"}}]

            } else if (G2genderCount == 3) {
                
                currentG2Child.name = `${child} +`
                currentG2Child.class = "man"
                currentG2Child.textClass = "emphasis"
                currentG2Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]

            } else if (G2genderCount == 4) {
                
                currentG2Child.name = `${child} -`
                currentG2Child.class = "man"
                currentG2Child.textClass = "emphasis"
                currentG2Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]

            }

            G2genderCount = ++G2genderCount

            G2children.push(currentG2Child)
        })






            currentChild.children = G2children;


        } else if (genderCount == 1) {
            currentChild.name = `${child} +`
            currentChild.class = "woman"
            currentChild.textClass = "emphasis"
            currentChild.marriages = [{spouse: {name:`${child} spouse`, class: "man"}}]
        } else if (genderCount == 2) {
            currentChild.name = `${child} -`
            currentChild.class = "woman"
            currentChild.textClass = "emphasis"
            currentChild.marriages = [{spouse: {name:`${child} spouse`, class: "man"}}]
        } else if (genderCount == 3) {
            currentChild.name = `${child} +`
            currentChild.class = "man"
            currentChild.textClass = "emphasis"
            currentChild.marriages = [{spouse: {name:`${child} spouse`, class: "woman"}}]
        } else if (genderCount == 4) {
            currentChild.name = `${child} -`
            currentChild.class = "man"
            currentChild.textClass = "emphasis"
            currentChild.marriages = [{spouse: {name:`${child} spouse`, class: "woman"}}]
            
        }

        genderCount = ++genderCount;

        children.push(currentChild)
    })

    currentFamily.children = children

    familyTree.push(currentFamily)
})

fs.writeFile('data.json', JSON.stringify(familyTree, null, 2), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


//console.log(JSON.stringify(familyTree, null, 2));
