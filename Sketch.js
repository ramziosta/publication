const jj = "hello hello hello herald herald hacker hacker"
  .toLowerCase()
  .replace(/[^a-zA-Z ]/g, "");
console.log(jj);
const wordArray = jj.split(" ");
console.log(wordArray);

// This loop goes through the wordArray and creates the key value pair objects
const wordCount = {};
wordArray.forEach((item) => {
  console.log(item);
  console.log("before");
  console.log(wordCount);
  if (wordCount[item] == null) {
    wordCount[item] = 1;
  } else {
    wordCount[item] += 1;
  }
  console.log("after");
  console.log(wordCount);
});
console.log(wordCount);
// Turn objects into an array of arrays
let myArray = Object.entries(wordCount);
console.log(myArray);
let bArray = myArray
  .sort((a, b) => {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);

    if (a[1] < b[1]) {
      return 1
    }
    if (a[1] > b[1]) {
      return -1;
    }
    if( a[1] == b[1]){
        if (a[0] > b[0]) {
            return 1;
          } else {
            return -1;
          }
    }
    return 0;
  })
  .slice(0, 3);

console.log(bArray);

return bArray;
