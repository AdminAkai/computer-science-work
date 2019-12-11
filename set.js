class Set {
    constructor() {
        this.values = []

        // use add function to make sure there are no duplicates
        setValues.forEach(el => {
            this.add(el)
        })
    }

    add(newValue) {
        if (this.values.includes(newValue) === false) {
            this.values.push(newValue)
        }
    }

    remove(valueToRemove) {
        if (this.values.includes(valueToRemove)) {
            const indexToRemove = this.values.indexOf(valueToRemove)
            this.values.push(newValue)
        }
    }

    size() {
        return this.values.length
    }

    union(setToMerge) {
        const mergedArrays = [ ...this.values, ...setToMerge.values ]
        return new Set([])
    }

}