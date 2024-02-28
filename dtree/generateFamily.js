var fs = require('fs');

let rootCount = 5;
let childCount = 5;
let G2childCount = 5;

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

                let G3childrenCount = [...Array(G2childCount).keys()]
                let G3children = []
                let G3genderCount = 0;

                G3childrenCount.forEach((child)=>{
                    currentG3Child = {}

                    if (G3genderCount == 0) {
                
                        currentG2Child.name = `${child}`
                        currentG2Child.class = "man"
                        currentG2Child.textClass = "emphasis"
                        currentG2Child.marriages = [{spouse: {name:`${1} spouse`, class: "woman"}}]
                    }

                    G3genderCount
                })

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






            currentChild.children = G2children


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
