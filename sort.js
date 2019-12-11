// Bubble Sort
function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                held = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = held
            }
        }
    }
    return arr
}


// Find greatest
function findGreatestNumber(arr) {  
    let max = arr[0]
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > max) {
            max = arr[j]
        }
    }
    return max
}


// Find number in fibonacci sequence
function fibonacci(num) {

    if (num === 0) {
        return 0
    }

    if (num === 1 || num ===2) {
        return 1
    }
    
    return fibonacci(num - 1) + fibonacci(num - 2)
    
}

   



array = [5, 10, 4, 1, 7, 9, 2, 8]

console.log(findGreatestNumber(array))
console.log(bubbleSort(array))
console.log(fibonacci(10))



// In Class Exercise
// Node Class
// properties 
// data
// next
class Node {
    constructor(data, index = 0) {
        this.data = data
        this.index = index
        this.next = null
    }
}
// Linked List with 
// Append (Node) add to the end
// Prepend (Node) add at the beginning
// Remove (Node) at given index

class LinkedList {

    constructor() {
        this.head = null
        this.counter = 0 
    }

    showList() {
        let walker = this.head 
        while (walker.next !== null) {
            console.log(walker)
            walker = walker.next
        }
    }

    appendNode(data) {
        
        const appendedNode = new Node(data, this.counter)
        this.counter++

        if (this.head === null) {
            this.head = appendedNode
            console.log(this.head)
        } else {
            console.log(this.head.next)
            if (this.head.next === null) {
                this.head.next = appendedNode
            } else {
                let walker = this.head
                while (walker.next !== null) {
                    walker = walker.next
                } 
                walker.next = appendedNode
                console.log(walker.next)
            }
        }
    }


    prependNode(data) {
        const prependedNode = new Node(data, 0)
        this.counter++

        if (this.head === null) {
            this.head = prependedNode
        } else {
            let walker = this.head 
            this.head = prependedNode
            this.head.next = walker
            while (walker.next !== null) {
                walker.index++
                console.log(walker)
                walker = walker.next
            }
            console.log(prependedNode)
        }
    }

    remove(location) {
       let walker = this.head

        while (walker.next !== null) {
            let previousWalker = walker
            walker = walker.next
            console.log('current location:')
            console.log(walker)
            if (walker.index === location) {
                console.log('removing:')
                console.log(walker)
                previousWalker.next = walker.next
                while (previousWalker.next !== null) {
                    previousWalker = previousWalker.next              
                }
            } 
        }

    }

}


let newList = new LinkedList("test")

newList.appendNode("test0")
console.log('--------------------------------------------')
newList.appendNode("test1")
console.log('--------------------------------------------')
newList.appendNode("test2")
console.log('--------------------------------------------')
newList.appendNode("test3")
console.log('--------------------------------------------')
newList.appendNode("test4")
console.log('--------------------------------------------')
newList.prependNode("test5")
console.log('--------------------------------------------')
newList.remove(2)
console.log('--------------------------------------------')
newList.showList()
