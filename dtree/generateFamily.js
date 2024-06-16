var fs = require('fs');

let rootCount = 1;
let childCount = 2;
let G2childCount = 2;
let G3childCount = 5;
let G4childCount = 2;
let G5childCount = 2;
let G6childCount = 5;

a = [...Array(rootCount).keys()];

let familyTree = [];

a.forEach((item)=>{
    currentFamily = {}
    currentFamily.name = `${item} name`
    currentFamily.class = "man"
    currentFamily.textClass = "emphasis"
    //currentFamily.marriages = [{spouse: {name:`${item} spouse`, class: "woman"}}]

    let childrenCount = [...Array(childCount).keys()]
    let children = []
    let genderCount = 0;

    childrenCount.forEach((child)=>{
        currentChild = {}
        if (genderCount == 0) {
            currentChild.name = `FF`
            currentChild.class = "man"
            currentChild.textClass = "emphasis"
            

            let G2childrenCount = [...Array(G2childCount).keys()]
            let G2children = []
            let G2genderCount = 0;

            G2childrenCount.forEach((child)=>{
            currentG2Child = {}

            if (G2genderCount == 0) {
                
                currentG2Child.name = `FZ`
                currentG2Child.class = "woman"
                currentG2Child.textClass = "emphasis"
                currentG2Child.marriages = [{spouse: {name:`FZH`, class: "man"}}]

            } else if (G2genderCount == 1) {

                currentG2Child.name = `F`
                currentG2Child.class = "man"
                currentG2Child.textClass = "emphasis"

                let G3childrenCount = [...Array(G3childCount).keys()]
                let G3children = [];
                let G3genderCount = 0;

                G3childrenCount.forEach((child)=>{
                    currentG3Child = {}

                    if (G3genderCount == 0) {
                
                        currentG3Child.name = `Z-`
                        currentG3Child.class = "woman"
                        currentG3Child.textClass = "emphasis" 
                        currentG3Child.marriages = [{spouse: {name:`Z-H`, class: "man"}}]
                    
                    } else if (G3genderCount == 1) {

                        currentG3Child.name = `Z+`
                        currentG3Child.class = "woman"
                        currentG3Child.textClass = "emphasis"
                        
                        let G4childrenCount = [...Array(G4childCount).keys()]
                        let G4children = [];
                        let G4genderCount = 0;

                        G4childrenCount.forEach((child)=>{
                            currentG4Child = {}
        
                            if (G4genderCount == 0) {
        
                                currentG4Child.name = `Z+D`
                                currentG4Child.class = "woman"
                                currentG4Child.textClass = "emphasis"

                                let G5childrenCount = [...Array(G5childCount).keys()]
                                let G5children = [];
                                let G5genderCount = 0;

                                G5childrenCount.forEach((child)=>{
                                    currentG5Child = {}
                
                                    if (G5genderCount == 0) {
                
                                        currentG5Child.name = `Z+DD`
                                        currentG5Child.class = "woman"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`Z+DDH`, class: "man"}}]
                                    
                                    } else if (G5genderCount == 1) {
                
                                        currentG5Child.name = `Z+DS`
                                        currentG5Child.class = "man"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`Z+DSW`, class: "woman"}}]
                                    
                                    }
                
                                    G5genderCount = ++G5genderCount
                
                                    G5children.push(currentG5Child)
                                })




                                currentG4Child.marriages = [{spouse: {name:`Z+DH`, class: "man"},
                                                            children: G5children}]
                            
                            } else if (G4genderCount == 1) {
        
                                currentG4Child.name = `Z+S`
                                currentG4Child.class = "man"
                                currentG4Child.textClass = "emphasis"

                                let G5childrenCount = [...Array(G5childCount).keys()]
                                let G5children = [];
                                let G5genderCount = 0;

                                G5childrenCount.forEach((child)=>{
                                    currentG5Child = {}
                
                                    if (G5genderCount == 0) {
                
                                        currentG5Child.name = `Z+SD`
                                        currentG5Child.class = "woman"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`Z+SDH`, class: "man"}}]
                                    
                                    } else if (G5genderCount == 1) {
                
                                        currentG5Child.name = `Z+SS`
                                        currentG5Child.class = "man"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`Z+SSW`, class: "woman"}}]
                                    
                                    }
                
                                    G5genderCount = ++G5genderCount
                
                                    G5children.push(currentG5Child)
                                })




                                currentG4Child.marriages = [{spouse: {name:`Z+SW`, class: "woman"},
                                                            children: G5children}]
                            
                            }
        
                            G4genderCount = ++G4genderCount
        
                            G4children.push(currentG4Child)
                        })




                        currentG3Child.marriages = [{spouse: {name:`Z+H`, class: "man"},
                                                    children: G4children}]
                    } else if (G3genderCount == 2) {

                        currentG3Child.name = `EGO`
                        currentG3Child.class = "ego"
                        currentG3Child.textClass = "emphasis"
                        
                        
                        let G4childrenCount = [...Array(G4childCount).keys()]
                        let G4children = [];
                        let G4genderCount = 0;

                        G4childrenCount.forEach((child)=>{
                            currentG4Child = {}
        
                            if (G4genderCount == 0) {
        
                                currentG4Child.name = `D`
                                currentG4Child.class = "woman"
                                currentG4Child.textClass = "emphasis"
                                let G5childrenCount = [...Array(G5childCount).keys()]
                                let G5children = [];
                                let G5genderCount = 0;

                                G5childrenCount.forEach((child)=>{
                                    currentG5Child = {}
                
                                    if (G5genderCount == 0) {
                
                                        currentG5Child.name = `DD`
                                        currentG5Child.class = "woman"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`DDH`, class: "man"}}]
                                    
                                    } else if (G5genderCount == 1) {
                
                                        currentG5Child.name = `DS`
                                        currentG5Child.class = "man"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`DSW`, class: "woman"}}]
                                    
                                    }
                
                                    G5genderCount = ++G5genderCount
                
                                    G5children.push(currentG5Child)
                                })




                                currentG4Child.marriages = [{spouse: {name:`Z+SH`, class: "man"},
                                                            children: G5children}]
                            
                            } else if (G4genderCount == 1) {
        
                                currentG4Child.name = `S`
                                currentG4Child.class = "man"
                                currentG4Child.textClass = "emphasis"
                                let G5childrenCount = [...Array(G5childCount).keys()]
                                let G5children = [];
                                let G5genderCount = 0;

                                G5childrenCount.forEach((child)=>{
                                    currentG5Child = {}
                
                                    if (G5genderCount == 0) {
                
                                        currentG5Child.name = `SD`
                                        currentG5Child.class = "woman"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`SDH`, class: "man"}}]
                                    
                                    } else if (G5genderCount == 1) {
                
                                        currentG5Child.name = `SS`
                                        currentG5Child.class = "man"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`SSW`, class: "woman"}}]
                                    
                                    }
                
                                    G5genderCount = ++G5genderCount
                
                                    G5children.push(currentG5Child)
                                })




                                currentG4Child.marriages = [{spouse: {name:`SW`, class: "woman"},
                                                            children: G5children}]
                            
                            }
        
                            G4genderCount = ++G4genderCount
        
                            G4children.push(currentG4Child)
                        })




                        currentG3Child.marriages = [{spouse: {name:`W`, class: "woman"},
                                                    children: G4children}]
                        
                    
                    } else if (G3genderCount == 3) {
                        
                        currentG3Child.name = `B+`
                        currentG3Child.class = "man"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`B+W`, class: "woman"}}]
                    
                    } else if (G3genderCount == 4) {
                        
                        currentG3Child.name = `B-`
                        currentG3Child.class = "man"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`B-W`, class: "woman"}}]

                    }

                    G3genderCount = ++G3genderCount

                    G3children.push(currentG3Child)
                })




                currentG2Child.marriages = [{spouse: {name:`M`, class: "woman"},
                                            children: G3children}]
                

            }

            G2genderCount = ++G2genderCount

            G2children.push(currentG2Child)
        })






        currentChild.marriages = [{spouse: {name:`FM`, class: "woman"},
                                children: G2children}]


        } else if (genderCount == 1) {
            currentChild.name = `FFZ`
            currentChild.class = "woman"
            currentChild.textClass = "emphasis"
            

            let G2childrenCount = [...Array(G2childCount).keys()]
            let G2children = []
            let G2genderCount = 0;

            G2childrenCount.forEach((child)=>{
            currentG2Child = {}

            if (G2genderCount == 0) {
                
                currentG2Child.name = `FFZD`
                currentG2Child.class = "woman"
                currentG2Child.textClass = "emphasis"
                currentG2Child.marriages = [{spouse: {name:`FFZDH`, class: "man"}}]

            } else if (G2genderCount == 1) {

                currentG2Child.name = `FFZS`
                currentG2Child.class = "man"
                currentG2Child.textClass = "emphasis"

                let G3childrenCount = [...Array(G3childCount).keys()]
                let G3children = [];
                let G3genderCount = 0;

                G3childrenCount.forEach((child)=>{
                    currentG3Child = {}

                    if (G3genderCount == 0) {
                
                        currentG3Child.name = `FFZSD-`
                        currentG3Child.class = "woman"
                        currentG3Child.textClass = "emphasis" 
                        currentG3Child.marriages = [{spouse: {name:`FFZSD-H`, class: "man"}}]
                    
                    } else if (G3genderCount == 1) {

                        currentG3Child.name = `FFZSD+`
                        currentG3Child.class = "woman"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`FFZSD+H`, class: "man"}}]
                    
                    } else if (G3genderCount == 2) {

                        currentG3Child.name = `FFZSS`
                        currentG3Child.class = "man"
                        currentG3Child.textClass = "emphasis"
                        
                        
                        let G4childrenCount = [...Array(G4childCount).keys()]
                        let G4children = [];
                        let G4genderCount = 0;

                        G4childrenCount.forEach((child)=>{
                            currentG4Child = {}
        
                            if (G4genderCount == 0) {
                        
                                currentG4Child.name = `FFZSSD-`
                                currentG4Child.class = "woman"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`FFZSSD-H`, class: "man"}}]
                            
                            
                            } else if (G4genderCount == 1) {
        
                                currentG4Child.name = `FFZSSD+`
                                currentG4Child.class = "woman"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`FFZSSD+H`, class: "man"}}]
                            
                            } else if (G4genderCount == 2) {
        
                                currentG4Child.name = `FFZSSS`
                                currentG4Child.class = "man"
                                currentG4Child.textClass = "emphasis"
                                let G5childrenCount = [...Array(G5childCount).keys()]
                                let G5children = [];
                                let G5genderCount = 0;

                                G5childrenCount.forEach((child)=>{
                                    currentG5Child = {}
                
                                    if (G5genderCount == 0) {
                                
                                        currentG5Child.name = `FFZSSSD-`
                                        currentG5Child.class = "woman"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`FFZSSSD-H`, class: "man"}}]
        
                                        let G6childrenCount = [...Array(G6childCount).keys()]
                                        let G6children = [];
                                        let G6genderCount = 0;
                                    
                                    } else if (G5genderCount == 1) {
                
                                        currentG5Child.name = `FFZSSSD+`
                                        currentG5Child.class = "woman"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`FFZSSSD+H`, class: "man"}}]
                                    
                                    } else if (G5genderCount == 2) {
                
                                        currentG5Child.name = `FFZSSSS`
                                        currentG5Child.class = "man"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`FFZSSSSW`, class: "woman"}}]
                                    
                                    } else if (G5genderCount == 3) {
                                        
                                        currentG5Child.name = `FFZSSSS+`
                                        currentG5Child.class = "man"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`FFZSSSS+W`, class: "woman"}}]
                                    
                                    } else if (G5genderCount == 4) {
                                        
                                        currentG5Child.name = `FFZSSSS-`
                                        currentG5Child.class = "man"
                                        currentG5Child.textClass = "emphasis"
                                        currentG5Child.marriages = [{spouse: {name:`FFZSSSS-W`, class: "woman"}}]
                
                                    }
                
                                    G5genderCount = ++G5genderCount
                
                                    G5children.push(currentG5Child)
                                })




                                currentG4Child.marriages = [{spouse: {name:`FFZSSSW`, class: "woman"},
                                                            children: G5children}]
                            
                            } else if (G4genderCount == 3) {
                                
                                currentG4Child.name = `FFZSSS+`
                                currentG4Child.class = "man"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`FFZSSS+W`, class: "woman"}}]
                            
                            } else if (G4genderCount == 4) {
                                
                                currentG4Child.name = `FFZSSS-`
                                currentG4Child.class = "man"
                                currentG4Child.textClass = "emphasis"
                                currentG4Child.marriages = [{spouse: {name:`FFZSSS-W`, class: "woman"}}]
        
                            }
        
                            G4genderCount = ++G4genderCount
        
                            G4children.push(currentG4Child)
                        })




                        currentG3Child.marriages = [{spouse: {name:`FFZSSW`, class: "woman"},
                                                    children: G4children}]
                        
                    
                    } else if (G3genderCount == 3) {
                        
                        currentG3Child.name = `FFZSS+`
                        currentG3Child.class = "man"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`FFZSS+W`, class: "woman"}}]
                    
                    } else if (G3genderCount == 4) {
                        
                        currentG3Child.name = `FFZSS-`
                        currentG3Child.class = "man"
                        currentG3Child.textClass = "emphasis"
                        currentG3Child.marriages = [{spouse: {name:`FFZSS-W`, class: "woman"}}]

                    }

                    G3genderCount = ++G3genderCount

                    G3children.push(currentG3Child)
                })




                currentG2Child.marriages = [{spouse: {name:`FFZSW`, class: "woman"},
                                            children: G3children}]
                

            }

            G2genderCount = ++G2genderCount

            G2children.push(currentG2Child)
        })






        currentChild.marriages = [{spouse: {name:`FFZH`, class: "man"},
                                children: G2children}]


        }

        genderCount = ++genderCount;

        children.push(currentChild)
    })

    currentFamily.marriages = [{spouse: {name:`${item} spouse`, class: "woman"},
                                children: children}]
    //currentFamily.children = children

    familyTree.push(currentFamily)
})

fs.writeFile('/Users/Arav/Desktop/jili-piri/dtree/data.json', JSON.stringify(familyTree, null, 2), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


//console.log(JSON.stringify(familyTree, null, 2));
