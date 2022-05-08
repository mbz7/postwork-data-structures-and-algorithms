function selectionSort(arr) {
  const sorted = [];

  console.log(arr);

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file

// initialize an empty Array called sorted
// loop through array (while loop) .length amount of time > 0
//    store the minimun value of array using Math.min
//    store the index of that minumum stored value
//    remove the minumun value from the input array using splice
//    push min onto sorted
//  return sorted array
// And a written explanation of your solution
