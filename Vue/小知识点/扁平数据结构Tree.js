let tree = [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": [
                    {
                        "id": 4,
                        "name": "部门4",
                        "pid": 2,
                        "children":[]
                    }
                ]
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    {
                        "id": 5,
                        "name": "部门5",
                        "pid": 3,
                        "children":[]
                    }
                ]
            }
        ]
    }
]
// 结果：
let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 2},
    {id: 5, name: '部门5', pid: 8},
]

const getChildren = (data, result, pid) => {
    while (data.length > 0) {
        // console.log([...queue],1);
        // 广度
        [...data].forEach(child => {
            data.shift()
            result.push({id:child.id,name:child.name})
            child.children && (data.push(...child.children))

        })
    }

    //深度
    // for (const item of data) {
    //     if (item.pid === pid) {
    //         // const newItem = { id:item.id,name:item.name,pid:item.pid }
    //         const newItem = {...item,children:[]}
    //         result.push(newItem)
    //         getChildren(item.children||[],result,item.id)
    //     }
    // }
}

const arrayTree = (data, pid,) => {
    const result = []
    getChildren(data, result)
    return result
}


// console.log(arrayTree(tree));

function arrayToTree(items) {
    const result = []
    const itemMap = {}

    for (let item of items) {
        itemMap[item.id] = {...item,children:[]}
    }
    console.log(itemMap,'2');
    for (const item of items) {
        const id = item.id
        const pid = item.pid
        const treeItem = itemMap[id]
        if (pid === 0) {
            result.push(treeItem)
        } else {
            if (!itemMap[pid]) {
                itemMap[pid] = { children:[]}
            }
            itemMap[pid].children.push(treeItem)
        }
    }
    return result
}

// console.log(arrayToTree(arr));

function arrayToTree1(items) {
    const result = [];   // 存放结果集
    const itemMap = {};  // 
    for (const item of items) {
        const id = item.id;
        const pid = item.pid;
        // if (!itemMap[id]) {
        //     itemMap[id] = {children:[]}
        // }

        itemMap[id] = {  //     {'1': { id: 1, name: '部门1', pid: 0, children: []}
            ...item,
            children:[]
        }
        const treeItem = itemMap[id]  //     {'1': { id: 1, name: '部门1', pid: 0, children: []}
        if (pid === 0) {
            result.push(treeItem)
        } else {
            if (!itemMap[pid]) {
                itemMap[pid] = {children:[]}
            }
            itemMap[pid].children.push(treeItem)
        }
    }
    return result

}
console.log(arrayToTree1(arr));


function nest(pid, arr) {
    return arr.filter(item => item.pid === pid).map(item => ({ ...item, children: nest(item.id, arr) }))
    
}

// console.log(nest(0,arr));