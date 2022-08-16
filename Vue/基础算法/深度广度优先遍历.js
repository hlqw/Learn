// @ts-nocheck
let tree = [
  {
    id: 1,
    name: "T1",
    children: [
      {
        id: 2,
        name: "T1-1",
        children: [
          {
            id: 4,
            name: "T1-1-1",
            children: [],
          },
          {
            id: 5,
            name: "T1-1-2",
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: "T1-2",
        children: [
          {
            id: 6,
            name: "T1-2-1",
            children: [],
          },
          {
            id: 7,
            name: "T1-2-2",
            children: [],
          },
        ],
      },
    ],
  },
];

const Deep = (data) => {
    let result = []
     data.forEach(item => {
         const map = data => {
             result.push(data.name)
             data.children && data.children.forEach(child => map(child))
         }  
         map(item)
     });
    return result
}

// console.log(Deep(tree));

const Extent = (data) => {
    let result = []
    
    while (data.length > 0) {
        // console.log([...data],1);
        // console.log(data,2);
        [...data].forEach(child => {
            data.shift()
            result.push(child.name)
            child.children && data.push(...child.children)
            console.log(child.children, 1);
            console.log(...child.children,2);
        })
    }
    return result

}

 console.log(Extent(tree));