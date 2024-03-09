const paginate = (arr, perPage = 10) => {
  const arrlength = arr.length; //100
  let newArr = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempArr.length === perPage - 1) {
      tempArr.push(arr[i]);
      newArr.push(tempArr);
      tempArr = [];
    } else {
      tempArr.push(arr[i]);
    }
  }
  if (tempArr.length !== 0) {
    newArr.push(tempArr);
  }
  return newArr;
};

export default paginate;
