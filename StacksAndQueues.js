// STACK IMPLEMENTATION
class Stack {
    constructor() {
      this.items = []
    }
    push(item){
      this.items.push(item)
    }
    pop(){
      return this.items.pop()
    }
    peek(){
      return this.items[this.items.length - 1]
    }
    isEmpty(){
      return this.items.length === 0
    }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
// function bracketMatching(input){
    
//     function bracketValidator(bracket, data, index) {
//         if (bracket === "{" || bracket === "(" || bracket === "[") {
//             switch (bracket) {
//                 case "{":
//                     for (let k = index + 1; k < data.length; k++) {
//                         console.log(data[k])
//                         switch (data[k]) {
//                             case "{":
//                                 bracketValidator(bracket, data, k)
//                             case "(":
//                                 bracketValidator(bracket, data, k)
//                             case "[":
//                                 bracketValidator(bracket, data, k)
//                             case "}":
//                                 console.log("valid {}")          
//                                 continue
//                             case ")":
//                                 console.log("invalid bracket")
//                                 return
//                             case "]":
//                                 console.log("invalid bracket")
//                                 return
//                         }
//                     }
//                 case "(":
//                     for (let h = index + 1; h < data.length; h++) {
//                         console.log(data[h])
//                         switch (data[h]) {
//                             case "{":
//                                 bracketValidator(bracket, data, h)
//                             case "(":
//                                 bracketValidator(bracket, data, h)
//                             case "[":
//                                 bracketValidator(bracket, data, h)
//                             case ")":
//                                 console.log("valid ()")
//                                 continue
//                             case "}":
//                                 console.log("invalid bracket")
//                                 return
//                             case "]":
//                                 console.log("invalid bracket")
//                                 return
//                         }
//                     }   
//                 case "[":
//                     for (let j = index + 1; j < data.length; j++) {
//                         console.log(data[j])
//                         switch (data[j]) {
//                             case "{":
//                                 bracketValidator(bracket, data, j)
//                             case "(":
//                                 bracketValidator(bracket, data, j)
//                             case "[":
//                                 bracketValidator(bracket, data, j)
//                             case "]":
//                                 console.log("valid []")
//                                 continue
//                             case  ")":
//                                 console.log("invalid bracket")
//                                 return
//                             case "}":
//                                 console.log("invalid bracket")
//                                 return
//                         }
//                     }
//             }

//         }
//     }

//     const parsedData = input.toString()

//     for (let i = 0; i < parsedData.length; i++) {
//         console.log(parsedData[i])
//         bracketValidator(parsedData[i], parsedData, i)
//     }

// }

function bracketMatching(input){
    
    const stack = new Stack()
    
    function bracketValidator(bracket, data, index) {
        if (bracket === "{" || bracket === "(" || bracket === "[") {
            for (let k = index + 1; k < data.length; k++) {
                if (data[k] === "{" || data[k] === "(" || data[k] === "[") {
                    bracketValidator(bracket, data, k)
                }
                if (data[k] === "}" || data[k] === ")" || data[k] === "]") {
                    if (bracket === "{" && data[k] === "}") {
                        return
                    } 
                }            
            }
                case "{":
                    for (let k = index + 1; k < data.length; k++) {
                        console.log(data[k])
                        switch (data[k]) {
                            case "{":
                                bracketValidator(bracket, data, k)
                            case "(":
                                bracketValidator(bracket, data, k)
                            case "[":
                                bracketValidator(bracket, data, k)
                            case "}":
                                console.log("valid {}")          
                                continue
                            case  ")":
                                console.log("invalid bracket")
                                return
                            case "]":
                                console.log("invalid bracket")
                                return
                        }
                    }
                case "(":
                    for (let h = index + 1; h < data.length; h++) {
                        console.log(data[h])
                        switch (data[h]) {
                            case "{":
                                bracketValidator(bracket, data, h)
                            case "(":
                                bracketValidator(bracket, data, h)
                            case "[":
                                bracketValidator(bracket, data, h)
                            case ")":
                                console.log("valid ()")
                                continue
                            case "}":
                                console.log("invalid bracket")
                                return
                            case "]":
                                console.log("invalid bracket")
                                return
                        }
                    }   
                case "[":
                    for (let j = index + 1; j < data.length; j++) {
                        console.log(data[j])
                        switch (data[j]) {
                            case "{":
                                bracketValidator(bracket, data, j)
                            case "(":
                                bracketValidator(bracket, data, j)
                            case "[":
                                bracketValidator(bracket, data, j)
                            case "]":
                                console.log("valid []")
                                continue
                            case  ")":
                                console.log("invalid bracket")
                                return
                            case "}":
                                console.log("invalid bracket")
                                return
                        }
                    }
            }

        }
    } 

    const parsedData = input.toString()

    for (let i = 0; i < parsedData.length; i++) {
        console.log(parsedData[i])
        bracketValidator(parsedData[i], parsedData, i)
    }

}

class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
    constructor(){
        this.head = null;
        this.tail = null
    }
    enqueue(data, priority){
        let newNode = new Node(data, priority)


        // Insert the new data into the proper place in the queue
        // the lowest priority number should be the head node
        // the priorities should remain in order
        // if two nodes have the same priority, put the new one first
    }
    peek(){
        // return the highest priority node in the queue
    }
    dequeue(){
        // remove and return the highest priority node in the queue
    }
}

module.exports = {
    bracketMatching,
    priorityQueue
}

let string = "({test})"
bracketMatching(string)