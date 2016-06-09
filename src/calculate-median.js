function calculate_median(arr) {
  //请勿改动函数名
  var len=arr.length;
  if(arr.length%2){
  	len=arr.length-1;
  }
  return arr[len/2];
}

module.exports = calculate_median;
