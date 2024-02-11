function group(arr) {
    let subArr = [];
    let newArr = [];
    arr.forEach((e, i) => {
      if(arr.indexOf(e) == i){
        subArr = arr.filter(n => n == e);
        newArr.push(subArr);
      }
    })
    return newArr;
}