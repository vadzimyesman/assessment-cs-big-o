const addToZero = array1 =>{
    for (i=0;i<array1.length;i++){
      for (j=0;j<array1.length;j++){
        if (array1[i]+array1[j]==0){
          return true
        }
      }
    }
  return false
}

console.log(addToZero([5,19,8,16,-55,-1,1]))
//function above has quadtratic time complexity, O(n^2)
//Space O(1)


const unique = word =>{
    let word1 = word.toLowerCase()
    const arr = word1.split("")

    for (i=0;i<arr.length;i++){
        let arr2=word1.split("")
        arr2.splice(i,1)
        //console.log(arr2)
        if(arr2.includes(arr[i])){
            return false//false means string passed in to the function has repeated charachters
        }
    }
    return true//true means string contains only unique characters
}

console.log(unique("Mondayy"))
//function above has quadratic time complexity , O(n^2)
//space: O(n^2)



const isPangram = sentence =>{
    let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let sentence1=sentence.toLowerCase()
    let arr=sentence1.split("")
 for (i=0;i<alphabet.length;){
     if (arr.includes(alphabet[i])){
         alphabet.splice(i,1)
         console.log(alphabet)
     } else {
         i++
     }
 }
 if(alphabet.length==0){
     return true
 } else{
     return false
 }

}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
//console.log(isPangram("I like cats, but not mice"))
//function above has linear time complexity, O(n)
//space complexity: O(n)




const findLongestWord = arrayOfWords =>{
    let largest=0
    for (i=0;i<arrayOfWords.length;i++){
        if (arrayOfWords[i].length>largest){
            largest=arrayOfWords[i].length
        }
    }
    return largest
}

console.log(findLongestWord(["123456789112345","hi", "hello","r","egdklhqwgedhkl"]))
//function above has linear time complexity, O(n)
//space: O(1)




