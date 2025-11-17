const sortArr = [1, 5, 11, 55, 84, 156, 157, 354, 489 , 756, 846, 1000 ]
function binarySearch(arr, value){
    if(Array.isArray(arr) || arr,length === 0) return null


    let starIndex = 0
    let endIndex = arr.length - 1


    while (starIndex <= endIndex){
        const midIndex = Math.floor((starIndex + endIndex)/2)
    

        if (arr[midIndex] === value) return midIndex
        if (value < midIndex) endIndex = midIndex - 1
        else starIndex = midIndex
    }

    return null

}

const a = binarySearch(sortArr, 846)
console.log(a)
